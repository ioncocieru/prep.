/* =====================================================================
   ITS PREP — app.js
   Aplicație de pregătire pentru examenele Certiport IT Specialist.
   Totul rulează local, în browser — nu se trimit date către niciun server.
   ===================================================================== */

/* ---------------------------------------------------------------------
   1) SUPABASE (autentificare + acces pe examene)
   Cheile se setează în config.js
   --------------------------------------------------------------------- */
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
let allowedExams = []; // examenele la care are acces utilizatorul curent

/* Ordinea în care apar examenele pe dashboard */
const EXAM_ORDER = ["python", "databases", "deviceConfig", "networking"];

/* ---------------------------------------------------------------------
   2) STARE GLOBALĂ
   --------------------------------------------------------------------- */
const state = {
  currentExamKey: null,
  selectedChapters: new Set(),
  quizMode: "practice",     // "practice" | "exam"
  quizQuestions: [],        // întrebările efectiv folosite în testul curent
  currentIndex: 0,
  userAnswers: {},          // id-întrebare -> răspunsul dat
  lockedQuestions: {},      // id-întrebare -> true dacă a fost verificată
  flagged: {},              // id-întrebare -> true dacă e marcată pentru revizuire
  dndPicked: null,          // id-ul elementului drag&drop selectat momentan (fallback pe click)
  dndState: {},             // id-întrebare -> { zoneId: itemId }
  timerInterval: null,
  startTime: null,
  elapsedSeconds: 0
};

/* ---------------------------------------------------------------------
   UTILITARE
   --------------------------------------------------------------------- */
function $(sel, root = document) { return root.querySelector(sel); }
function $all(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

function showScreen(id) {
  $all(".screen").forEach(s => s.classList.remove("active"));
  $(`#${id}`).classList.add("active");
  if (id !== "screen-course") {
    const vid = $("#course-video"); if (vid) vid.pause();
    const fr = $("#course-frame"); if (fr) fr.src = "about:blank";
  }
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sample(arr, n) {
  return shuffle(arr).slice(0, Math.min(n, arr.length));
}

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const s = Math.floor(totalSeconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function getExam(key) { return window.EXAM_DATA[key]; }

function typeLabel(type) {
  return {
    true_false: "Adevărat / Fals",
    single: "1 răspuns corect",
    multiple: "2 răspunsuri corecte",
    drag_drop: "Drag & drop"
  }[type] || type;
}

/* =====================================================================
   3) LOGIN
   ===================================================================== */
$("#login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const btn = $("#login-btn");
  const err = $("#login-error");
  let login = $("#login-input").value.trim();
  if (!login.includes("@")) login += "@" + LOGIN_DOMAIN; // "ion" -> ion@prep.md
  btn.disabled = true;
  err.hidden = true;
  const { error } = await sb.auth.signInWithPassword({ email: login, password: $("#password-input").value });
  btn.disabled = false;
  if (error) {
    err.textContent = "Login sau parolă incorectă.";
    err.hidden = false;
    return;
  }
  $("#password-input").value = "";
  await enterApp();
});

async function enterApp() {
  const { data, error } = await sb.from("user_exams").select("exam_key");
  if (error) {
    alert("Nu am putut încărca accesul: " + error.message);
    return;
  }
  allowedExams = data.map(r => r.exam_key);

  // "Bine ai venit, Ion!" — numele = partea dinainte de @
  const { data: sess } = await sb.auth.getSession();
  const email = sess.session?.user?.email || "";
  let name = email.split("@")[0];
  name = name.charAt(0).toUpperCase() + name.slice(1);
  $("#welcome-title").textContent = name ? `Bine ai venit, ${name}!` : "Bine ai venit!";

  renderDashboard();
  showScreen("screen-dashboard");
}

$("#logout-btn").addEventListener("click", async () => {
  await sb.auth.signOut();
  allowedExams = [];
  showScreen("screen-login");
});

// păstrează sesiunea la reîncărcarea paginii
sb.auth.getSession().then(({ data }) => { if (data.session) enterApp(); });

/* =====================================================================
   4) DASHBOARD — alegerea examenului
   ===================================================================== */
/* Iconițe desenate pentru fiecare examen (nu litere/monograme) */
const EXAM_ICONS = {
  python: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="8 4 3 12 8 20"/><polyline points="16 4 21 12 16 20"/><line x1="13" y1="3.5" x2="11" y2="20.5"/>
  </svg>`,
  databases: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>
  </svg>`,
  deviceConfig: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2.5" y="4" width="13" height="9.5" rx="1.4"/><line x1="6.5" y1="17.5" x2="11.5" y2="17.5"/><line x1="9" y1="13.5" x2="9" y2="17.5"/>
    <circle cx="18.5" cy="15.5" r="2.6"/><line x1="18.5" y1="11.7" x2="18.5" y2="10.6"/><line x1="18.5" y1="19.3" x2="18.5" y2="20.4"/>
    <line x1="21.3" y1="13.7" x2="22.2" y2="13.1"/><line x1="14.8" y1="17.9" x2="13.9" y2="18.5"/>
    <line x1="14.8" y1="13.1" x2="13.9" y2="12.5"/><line x1="21.3" y1="17.3" x2="22.2" y2="17.9"/>
  </svg>`,
  networking: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="17" r="2.2"/><circle cx="19" cy="17" r="2.2"/>
    <line x1="12" y1="7.2" x2="6.4" y2="15.2"/><line x1="12" y1="7.2" x2="17.6" y2="15.2"/><line x1="7.2" y1="17" x2="16.8" y2="17"/>
  </svg>`
};
const ARROW_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="18" y2="12"/><polyline points="12 6 18 12 12 18"/></svg>`;

const PLAY_ICON = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;

function renderDashboard() {
  const grid = $("#exam-grid");
  grid.innerHTML = "";

  const visible = EXAM_ORDER.filter(k => allowedExams.includes(k));
  if (visible.length === 0) {
    grid.innerHTML = '<p class="muted" style="padding:24px">Contul tău nu are acces la niciun examen încă. Contactează administratorul.</p>';
    return;
  }

  visible.forEach(key => {
    const exam = getExam(key);
    if (!exam) return;
    const total = exam.QUESTIONS.length;
    const chapterCount = exam.CHAPTERS.length;

    const card = document.createElement("div");
    card.className = "exam-card";
    card.style.setProperty("--accent", exam.accent);
    card.innerHTML = `
      <div class="exam-card-head">
        <div class="exam-card-icon">${EXAM_ICONS[key] || ""}</div>
      </div>
      <h3>${exam.name}</h3>
      <p>${exam.description}</p>
      <div class="exam-card-meta">
        <span>${chapterCount} capitole</span>
        <span>${total} întrebări încărcate</span>
      </div>
      <div class="exam-card-actions">
        <button class="exam-card-cta" data-exam="${key}">Întrebări ${ARROW_ICON}</button>
        <button class="exam-card-cta exam-card-cta-alt" data-course="${key}">Curs ${PLAY_ICON}</button>
      </div>
    `;
    card.querySelector("[data-exam]").addEventListener("click", () => openSetup(key));
    card.querySelector("[data-course]").addEventListener("click", () => openCourse(key));
    grid.appendChild(card);
  });
}


/* =====================================================================
   CURS — capitole + video-uri + resurse (configurate în data/courses.js)
   ===================================================================== */
function openCourse(key) {
  if (!allowedExams.includes(key)) return;
  const exam = getExam(key);
  if (!window.COURSE_DATA) console.error("data/courses.js nu s-a încărcat sau are o eroare de sintaxă.");
  const cfg = (window.COURSE_DATA || {})[key] || {};
  const chapters = cfg.chapters || [];
  const resources = cfg.resources || [];
  const video = $("#course-video"), frame = $("#course-frame");
  const side = $("#course-list");
  const flat = [];
  let current = 0;

  $("#course-title").textContent = `Curs — ${exam.name}`;
  $("#course-desc").textContent = exam.description;
  $("#course-chapter-label").textContent = "";
  $("#course-video-title").textContent = "Alege un video din listă";
  video.removeAttribute("src"); video.hidden = false; frame.hidden = true; frame.src = "about:blank";
  side.innerHTML = "";

  chapters.forEach((ch, ci) => {
    const det = document.createElement("details");
    det.className = "course-chapter";
    det.open = ci === 0;
    const sum = document.createElement("summary");
    const name = document.createElement("span"); name.textContent = ch.title;
    const cnt = document.createElement("span"); cnt.className = "course-chapter-count";
    const vids = ch.videos || ((ch.youtube || ch.file) ? [ch] : []); // tolerează un video pus direct ca "capitol"
    cnt.textContent = `${vids.length} video`;
    sum.append(name, cnt);
    det.appendChild(sum);
    if (!vids.length) {
      const p = document.createElement("p"); p.className = "course-empty"; p.textContent = "În curând";
      det.appendChild(p);
    }
    vids.forEach((v, vi) => {
      const btn = document.createElement("button");
      btn.className = "course-item";
      const num = document.createElement("span"); num.className = "course-num"; num.textContent = String(vi + 1).padStart(2, "0");
      const t = document.createElement("span"); t.textContent = v.title;
      btn.append(num, t);
      const idx = flat.length;
      btn.addEventListener("click", () => play(idx));
      det.appendChild(btn);
      flat.push({ v, btn, ch, det });
    });
    side.appendChild(det);
  });

  $("#course-count").textContent = flat.length ? `${flat.length} video-uri` : "";
  if (!chapters.length) side.innerHTML = window.COURSE_DATA
    ? '<p class="course-empty">Video-urile vor fi adăugate în curând.</p>'
    : '<p class="course-empty">Eroare: fișierul data/courses.js nu s-a încărcat (lipsește sau are o greșeală de scriere). Apasă F12 → Console.</p>';

  function play(i) {
    current = i;
    const { v, btn, ch, det } = flat[i];
    $all(".course-item").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    det.open = true;
    btn.scrollIntoView({ block: "nearest" });
    $("#course-chapter-label").textContent = ch.title;
    $("#course-video-title").textContent = v.title;
    if (v.embed) {
      // orice platformă video (Viddler, Vimeo, Dailymotion etc.): link de embed sau tot codul <iframe ...>
      const m = v.embed.match(/src\s*=\s*["']([^"']+)["']/i);
      let src = (m ? m[1] : v.embed).trim();
      if (src.startsWith("//")) src = "https:" + src;
      video.pause(); video.removeAttribute("src"); video.hidden = true;
      if (/^https:\/\//i.test(src)) { frame.src = src; frame.hidden = false; }
      else { frame.src = "about:blank"; frame.hidden = true; $("#course-video-title").textContent = v.title + " — link de embed invalid (trebuie să înceapă cu https://)"; }
    } else if (v.drive) {
      // Google Drive: acceptă linkul de share sau doar ID-ul fișierului
      const m = v.drive.match(/\/d\/([\w-]+)|[?&]id=([\w-]+)/);
      const id = m ? (m[1] || m[2]) : v.drive.trim();
      video.pause(); video.removeAttribute("src"); video.hidden = true;
      frame.src = `https://drive.google.com/file/d/${id}/preview`;
      frame.hidden = false;
    } else if (v.youtube) {
      // acceptă ID-ul sau linkul întreg de YouTube
      const m = v.youtube.match(/(?:v=|youtu\.be\/|embed\/|shorts\/|live\/)([\w-]{11})/);
      video.pause(); video.removeAttribute("src"); video.hidden = true;
      const origin = location.protocol.startsWith("http") ? `&origin=${encodeURIComponent(location.origin)}` : "";
      frame.src = `https://www.youtube.com/embed/${m ? m[1] : v.youtube}?rel=0&playsinline=1${v.start ? `&start=${parseInt(v.start, 10)}` : ""}${origin}`;
      frame.hidden = false;
    } else {
      frame.src = "about:blank"; frame.hidden = true;
      video.hidden = false; video.src = v.file; video.load();
    }
    $("#course-prev-btn").disabled = i === 0;
    $("#course-next-btn").disabled = i === flat.length - 1;
  }

  $("#course-prev-btn").onclick = () => current > 0 && play(current - 1);
  $("#course-next-btn").onclick = () => current < flat.length - 1 && play(current + 1);
  video.onended = () => { if (current < flat.length - 1) play(current + 1); };
  $("#course-prev-btn").disabled = $("#course-next-btn").disabled = true;

  // resurse de descărcat
  const rw = $("#course-resources"), rl = $("#course-resource-list");
  rl.innerHTML = "";
  rw.hidden = !resources.length;
  resources.forEach(r => {
    const link = document.createElement("a");
    link.className = "resource-item"; link.href = r.file;
    if (/^https?:\/\//i.test(r.file)) { link.target = "_blank"; link.rel = "noopener"; } // link extern (Drive, MEGA, GitHub Releases...)
    else link.setAttribute("download", "");
    const badge = document.createElement("span"); badge.className = "resource-badge";
    const ext = (r.file.match(/\.([a-z0-9]{2,5})$/i) || [])[1];
    const inTitle = (r.title.match(/\((PDF|ZIP|RAR|DOCX?|WORD|XLSX?|EXCEL|PPTX?|TXT)\)/i) || [])[1];
    badge.textContent = (r.type || (/^https?:\/\//i.test(r.file) ? (inTitle || "DRIVE") : ext) || "FILE").toUpperCase();
    const t = document.createElement("span"); t.className = "resource-name"; t.textContent = r.title;
    const dl = document.createElement("span"); dl.className = "resource-dl"; dl.textContent = "Descarcă ↓";
    link.append(badge, t, dl);
    rl.appendChild(link);
  });

  showScreen("screen-course");
  if (flat.length) play(0);
}

/* =====================================================================
   5) SETUP TEST — capitole, nr. întrebări, mod
   ===================================================================== */
function openSetup(examKey) {
  if (!allowedExams.includes(examKey)) return;
  state.currentExamKey = examKey;
  const exam = getExam(examKey);

  $("#setup-exam-title").textContent = exam.name;
  $("#setup-exam-desc").textContent = exam.description;
  $("#setup-question-total").textContent = `${exam.QUESTIONS.length} întrebări în bancă`;

  // implicit: toate capitolele selectate
  state.selectedChapters = new Set(exam.CHAPTERS.map(c => c.id));
  renderChapterList();
  updateCountRangeBounds();
  showScreen("screen-setup");
}

function questionsForChapters(exam, chapterIds) {
  return exam.QUESTIONS.filter(q => chapterIds.has(q.chapter));
}

function renderChapterList() {
  const exam = getExam(state.currentExamKey);
  const list = $("#chapter-list");
  list.innerHTML = "";

  exam.CHAPTERS.forEach((ch, i) => {
    const count = exam.QUESTIONS.filter(q => q.chapter === ch.id).length;
    const row = document.createElement("label");
    row.className = "chapter-item" + (count === 0 ? " disabled" : "");
    const checked = state.selectedChapters.has(ch.id);
    row.classList.toggle("checked", checked);
    row.innerHTML = `
      <input type="checkbox" ${checked ? "checked" : ""} ${count === 0 ? "disabled" : ""} data-chapter="${ch.id}">
      <span class="chapter-num">${String(i + 1).padStart(2, "0")}</span>
      <span class="chapter-info">
        <strong>${ch.name}</strong>
        <span>${count} întreb${count === 1 ? "are" : "ări"} disponibile</span>
      </span>
      <span class="chapter-count">${count}</span>
    `;
    const input = row.querySelector("input");
    input.addEventListener("change", () => {
      if (input.checked) state.selectedChapters.add(ch.id);
      else state.selectedChapters.delete(ch.id);
      row.classList.toggle("checked", input.checked);
      updateCountRangeBounds();
    });
    list.appendChild(row);
  });
}

$("#chapters-select-all").addEventListener("click", () => {
  const exam = getExam(state.currentExamKey);
  state.selectedChapters = new Set(exam.CHAPTERS.map(c => c.id));
  renderChapterList();
  updateCountRangeBounds();
});
$("#chapters-select-none").addEventListener("click", () => {
  state.selectedChapters = new Set();
  renderChapterList();
  updateCountRangeBounds();
});

function updateCountRangeBounds() {
  const exam = getExam(state.currentExamKey);
  const available = questionsForChapters(exam, state.selectedChapters).length;
  const range = $("#question-count-range");
  const max = Math.max(available, 1);
  range.max = max;
  if (Number(range.value) > max) range.value = max;
  if (available === 0) range.value = 0;
  $("#question-count-value").textContent = range.value;
  $("#count-hint").textContent = available > 0
    ? `Sunt disponibile ${available} întrebări în capitolele selectate.`
    : "Nu există întrebări în capitolele selectate — alege alt capitol.";
  $("#start-quiz-btn").disabled = available === 0;
  $("#setup-warning").hidden = available !== 0;
}

$("#question-count-range").addEventListener("input", (e) => {
  $("#question-count-value").textContent = e.target.value;
});

$all('input[name="quiz-mode"]').forEach(radio => {
  radio.addEventListener("change", (e) => { state.quizMode = e.target.value; });
});

$all(".back-btn").forEach(btn => {
  btn.addEventListener("click", () => showScreen(btn.dataset.target));
});

$("#start-quiz-btn").addEventListener("click", startQuiz);

/* =====================================================================
   6) QUIZ ENGINE
   ===================================================================== */
function startQuiz() {
  const exam = getExam(state.currentExamKey);
  const pool = questionsForChapters(exam, state.selectedChapters);
  const count = Number($("#question-count-range").value);

  state.quizQuestions = sample(pool, count);
  state.currentIndex = 0;
  state.userAnswers = {};
  state.lockedQuestions = {};
  state.flagged = {};
  state.dndState = {};
  state.elapsedSeconds = 0;
  state.startTime = Date.now();

  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    state.elapsedSeconds = Math.floor((Date.now() - state.startTime) / 1000);
    $("#quiz-timer").textContent = formatTime(state.elapsedSeconds);
  }, 1000);

  showScreen("screen-quiz");
  renderQuizQuestion();
}

$("#quiz-exit-btn").addEventListener("click", () => {
  if (confirm("Sigur vrei să ieși din test? Progresul nu va fi salvat.")) {
    clearInterval(state.timerInterval);
    showScreen("screen-dashboard");
  }
});

function currentQuestion() {
  return state.quizQuestions[state.currentIndex];
}

function renderQuizQuestion() {
  const q = currentQuestion();
  const total = state.quizQuestions.length;
  const exam = getExam(state.currentExamKey);
  const chapterName = exam.CHAPTERS.find(c => c.id === q.chapter)?.name || "";

  // progres
  $("#quiz-progress-fill").style.width = `${((state.currentIndex) / total) * 100}%`;
  $("#quiz-progress-label").textContent = `Întrebarea ${state.currentIndex + 1} din ${total}`;

  // nav butoane
  $("#quiz-prev-btn").disabled = state.currentIndex === 0;
  const isLast = state.currentIndex === total - 1;
  $("#quiz-next-btn").hidden = isLast;
  $("#quiz-finish-btn").hidden = !isLast;

  $("#quiz-flag-btn").classList.toggle("btn-flagged", !!state.flagged[q.id]);
  $("#quiz-flag-btn").textContent = state.flagged[q.id] ? "🏳 Marcată pentru revizuire" : "🏳 Marchează pentru revizuire";

  const card = $("#quiz-card");
  const locked = !!state.lockedQuestions[q.id];

  let html = `
    <div class="q-kicker">
      <span class="q-type-badge">${typeLabel(q.type)}</span>
      <span class="q-chapter-badge">${chapterName}</span>
    </div>
    <div class="q-text">${q.question}</div>
  `;
  if (q.code) html += `<pre class="q-code">${escapeHtml(q.code)}</pre>`;

  if (q.type === "true_false") {
    html += renderTrueFalse(q, locked);
  } else if (q.type === "single") {
    html += renderSingle(q, locked);
  } else if (q.type === "multiple") {
    html += `<p class="q-hint">Selectează exact 2 răspunsuri corecte.</p>` + renderMultiple(q, locked);
  } else if (q.type === "drag_drop") {
    html += `<p class="q-hint">Atinge / trage fiecare element din lista de sus în caseta corectă.</p>` + renderDragDrop(q, locked);
  }

  if (state.quizMode === "practice") {
    if (!locked) {
      html += `<button class="btn btn-primary mt" id="check-answer-btn">Verifică răspunsul</button>`;
    } else {
      html += renderFeedback(q);
    }
  }

  card.innerHTML = html;
  attachQuestionHandlers(q, locked);
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------- Render: True / False ---------- */
function renderTrueFalse(q, locked) {
  const ans = state.userAnswers[q.id];
  let html = `<div class="tf-row">`;
  q.options.forEach((opt, idx) => {
    let cls = "tf-btn";
    if (ans === idx) cls += " selected";
    if (locked) {
      cls += " locked";
      if (idx === q.correct) cls += " correct";
      else if (ans === idx) cls += " incorrect";
    }
    html += `<button type="button" class="${cls}" data-idx="${idx}" ${locked ? "disabled" : ""}>${opt}</button>`;
  });
  html += `</div>`;
  return html;
}

/* ---------- Render: Single choice ---------- */
function renderSingle(q, locked) {
  const ans = state.userAnswers[q.id];
  let html = `<div class="option-list">`;
  q.options.forEach((opt, idx) => {
    let cls = "option-item";
    if (ans === idx) cls += " selected";
    if (locked) {
      cls += " locked";
      if (idx === q.correct) cls += " correct";
      else if (ans === idx) cls += " incorrect";
    }
    html += `
      <div class="${cls}" data-idx="${idx}">
        <span class="opt-mark">${String.fromCharCode(65 + idx)}</span>
        <span>${opt}</span>
      </div>`;
  });
  html += `</div>`;
  return html;
}

/* ---------- Render: Multiple choice (2 correct) ---------- */
function renderMultiple(q, locked) {
  const ans = state.userAnswers[q.id] || [];
  let html = `<div class="option-list multi">`;
  q.options.forEach((opt, idx) => {
    const selected = ans.includes(idx);
    let cls = "option-item";
    if (selected) cls += " selected";
    if (locked) {
      cls += " locked";
      if (q.correct.includes(idx)) cls += " correct";
      else if (selected) cls += " incorrect";
    }
    html += `
      <div class="${cls}" data-idx="${idx}">
        <span class="opt-mark">${selected ? "✓" : ""}</span>
        <span>${opt}</span>
      </div>`;
  });
  html += `</div>`;
  return html;
}

/* ---------- Render: Drag & drop ---------- */
function renderDragDrop(q, locked) {
  if (!state.dndState[q.id]) {
    const zones = {};
    q.dropZones.forEach(z => zones[z.id] = null);
    state.dndState[q.id] = zones;
  }
  const zoneState = state.dndState[q.id];
  const usedItemIds = Object.values(zoneState).filter(Boolean);

  let html = `<div class="dnd-wrap">`;
  html += `<div class="dnd-pool" id="dnd-pool">`;
  q.dragItems.forEach(item => {
    const used = usedItemIds.includes(item.id);
    html += `<div class="dnd-chip ${used ? "used" : ""}" draggable="${!locked && !used}" data-item="${item.id}">${item.text}</div>`;
  });
  html += `</div>`;

  html += `<div class="dnd-targets">`;
  q.dropZones.forEach(zone => {
    const placedId = zoneState[zone.id];
    const placedItem = placedId ? q.dragItems.find(i => i.id === placedId) : null;
    let zoneCls = "dnd-target";
    if (locked) {
      zoneCls += (placedId === zone.correctItemId) ? " correct" : " incorrect";
    }
    html += `
      <div class="${zoneCls}" data-zone="${zone.id}">
        <span class="dnd-target-label">${zone.label}</span>
        <span class="dnd-target-slot">
          ${placedItem
            ? `<span class="dnd-chip" data-placed="${placedItem.id}">${placedItem.text}</span>`
            : `<span class="dnd-empty-slot">Așază aici</span>`}
        </span>
      </div>`;
  });
  html += `</div></div>`;
  return html;
}

/* ---------- Feedback (practice mode) ---------- */
function renderFeedback(q) {
  const correct = isAnswerCorrect(q);
  const label = correct ? "Corect!" : "Incorect";
  const explanation = q.explanation ? q.explanation : "";
  return `
    <div class="q-feedback ${correct ? "ok" : "bad"}">
      <div>
        <strong>${label}</strong>
        ${explanation}
      </div>
    </div>`;
}

/* =====================================================================
   7) INTERACȚIUNE CU ÎNTREBĂRILE
   ===================================================================== */
function attachQuestionHandlers(q, locked) {
  if (locked) {
    attachDndDragHandlers(q, true); // doar pentru consistență vizuală, fără acțiuni
    return;
  }

  if (q.type === "true_false" || q.type === "single") {
    $all(`.${q.type === "true_false" ? "tf-btn" : "option-item"}`).forEach(el => {
      el.addEventListener("click", () => {
        state.userAnswers[q.id] = Number(el.dataset.idx);
        if (state.quizMode === "exam") {
          renderQuizQuestion(); // doar re-render pentru starea de selecție, fără feedback
        } else {
          renderQuizQuestion();
        }
      });
    });
  }

  if (q.type === "multiple") {
    $all(".option-item").forEach(el => {
      el.addEventListener("click", () => {
        const idx = Number(el.dataset.idx);
        let ans = state.userAnswers[q.id] ? state.userAnswers[q.id].slice() : [];
        const requiredCount = q.correct.length; // de regulă 2
        if (ans.includes(idx)) {
          ans = ans.filter(i => i !== idx);
        } else if (ans.length < requiredCount) {
          ans.push(idx);
        }
        state.userAnswers[q.id] = ans;
        renderQuizQuestion();
      });
    });
  }

  if (q.type === "drag_drop") {
    attachDndDragHandlers(q, false);
  }

  const checkBtn = $("#check-answer-btn");
  if (checkBtn) {
    checkBtn.addEventListener("click", () => {
      state.lockedQuestions[q.id] = true;
      renderQuizQuestion();
    });
  }
}

function attachDndDragHandlers(q, locked) {
  if (locked) return;

  const chips = $all("#dnd-pool .dnd-chip");
  const targets = $all(".dnd-target");

  // click-to-place fallback (funcționează și pe mobil)
  chips.forEach(chip => {
    if (chip.classList.contains("used")) return;
    chip.addEventListener("click", () => {
      $all(".dnd-chip").forEach(c => c.classList.remove("picked"));
      if (state.dndPicked === chip.dataset.item) {
        state.dndPicked = null;
      } else {
        state.dndPicked = chip.dataset.item;
        chip.classList.add("picked");
      }
    });

    chip.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", chip.dataset.item);
    });
  });

  // scoate elementul plasat înapoi în pool, la click pe el
  $all(".dnd-target-slot .dnd-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const zoneEl = chip.closest(".dnd-target");
      const zoneId = zoneEl.dataset.zone;
      state.dndState[q.id][zoneId] = null;
      renderQuizQuestion();
    });
  });

  targets.forEach(target => {
    target.addEventListener("dragover", (e) => {
      e.preventDefault();
      target.classList.add("dragover");
    });
    target.addEventListener("dragleave", () => target.classList.remove("dragover"));
    target.addEventListener("drop", (e) => {
      e.preventDefault();
      target.classList.remove("dragover");
      const itemId = e.dataTransfer.getData("text/plain");
      placeDndItem(q, itemId, target.dataset.zone);
    });
    target.addEventListener("click", () => {
      if (state.dndPicked) {
        placeDndItem(q, state.dndPicked, target.dataset.zone);
        state.dndPicked = null;
      }
    });
  });
}

function placeDndItem(q, itemId, zoneId) {
  // elimină item-ul dacă era deja plasat în altă casetă
  const zones = state.dndState[q.id];
  Object.keys(zones).forEach(z => { if (zones[z] === itemId) zones[z] = null; });
  zones[zoneId] = itemId;
  renderQuizQuestion();
}

/* =====================================================================
   8) EVALUARE RĂSPUNS
   ===================================================================== */
function isAnswerCorrect(q) {
  const ans = state.userAnswers[q.id];
  if (q.type === "true_false" || q.type === "single") {
    return ans === q.correct;
  }
  if (q.type === "multiple") {
    if (!ans || ans.length !== q.correct.length) return false;
    const a = ans.slice().sort();
    const c = q.correct.slice().sort();
    return a.every((v, i) => v === c[i]);
  }
  if (q.type === "drag_drop") {
    const zones = state.dndState[q.id];
    if (!zones) return false;
    return q.dropZones.every(z => zones[z.id] === z.correctItemId);
  }
  return false;
}

function isAnswered(q) {
  if (q.type === "drag_drop") {
    const zones = state.dndState[q.id];
    return zones && Object.values(zones).some(v => v !== null);
  }
  const ans = state.userAnswers[q.id];
  if (q.type === "multiple") return ans && ans.length > 0;
  return ans !== undefined;
}

/* =====================================================================
   9) NAVIGARE ÎN QUIZ
   ===================================================================== */
$("#quiz-next-btn").addEventListener("click", () => {
  if (state.currentIndex < state.quizQuestions.length - 1) {
    state.currentIndex++;
    renderQuizQuestion();
  }
});
$("#quiz-prev-btn").addEventListener("click", () => {
  if (state.currentIndex > 0) {
    state.currentIndex--;
    renderQuizQuestion();
  }
});
$("#quiz-flag-btn").addEventListener("click", () => {
  const q = currentQuestion();
  state.flagged[q.id] = !state.flagged[q.id];
  renderQuizQuestion();
});
$("#quiz-finish-btn").addEventListener("click", finishQuiz);

/* =====================================================================
   10) REZULTATE
   ===================================================================== */
function finishQuiz() {
  clearInterval(state.timerInterval);
  const exam = getExam(state.currentExamKey);
  const questions = state.quizQuestions;

  let correctCount = 0;
  const byChapter = {}; // chapterId -> { correct, total, name }
  const reviewData = [];

  questions.forEach(q => {
    const chName = exam.CHAPTERS.find(c => c.id === q.chapter)?.name || q.chapter;
    if (!byChapter[q.chapter]) byChapter[q.chapter] = { correct: 0, total: 0, name: chName };
    byChapter[q.chapter].total++;

    const correct = isAnswerCorrect(q);
    if (correct) { correctCount++; byChapter[q.chapter].correct++; }

    reviewData.push({ q, correct, userAnswerText: describeUserAnswer(q), correctAnswerText: describeCorrectAnswer(q) });
  });

  const total = questions.length;
  const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const passed = pct >= 70; // prag orientativ, similar celui folosit de multe examene Certiport

  $("#results-title").textContent = `${exam.name} — rezultat test`;
  $("#results-sub").textContent = `Mod: ${state.quizMode === "practice" ? "Exercițiu" : "Examen"} · ${total} întrebări`;
  $("#stat-correct").textContent = correctCount;
  $("#stat-incorrect").textContent = total - correctCount;
  $("#stat-time").textContent = formatTime(state.elapsedSeconds);
  $("#score-percent").textContent = `${pct}%`;
  $("#score-pass-label").textContent = passed ? "Scor de trecere" : "Sub pragul de trecere";
  $("#score-pass-label").style.color = passed ? "var(--green)" : "var(--red)";

  const ring = $("#score-ring-fill");
  const circumference = 389.6;
  ring.style.stroke = passed ? "var(--green)" : "var(--amber)";
  ring.style.strokeDashoffset = circumference - (circumference * pct) / 100;

  // breakdown pe capitole
  const breakdownEl = $("#chapter-breakdown");
  breakdownEl.innerHTML = "";
  Object.values(byChapter).forEach(c => {
    const p = Math.round((c.correct / c.total) * 100);
    const row = document.createElement("div");
    row.className = "cb-row";
    row.innerHTML = `
      <span class="cb-name">${c.name}</span>
      <span class="cb-bar"><span class="cb-bar-fill" style="width:${p}%"></span></span>
      <span class="cb-score">${c.correct}/${c.total}</span>
    `;
    breakdownEl.appendChild(row);
  });

  // listă recapitulare
  const reviewEl = $("#review-list");
  reviewEl.innerHTML = "";
  reviewData.forEach(({ q, correct, userAnswerText, correctAnswerText }, i) => {
    const item = document.createElement("div");
    item.className = "review-item " + (correct ? "right" : "wrong");
    item.innerHTML = `
      <div class="review-item-head ${correct ? "right" : "wrong"}">${correct ? "✓ Corect" : "✗ Greșit"} · Întrebarea ${i + 1}</div>
      <div class="review-q">${q.question}</div>
      <div class="review-answer">
        Răspunsul tău: ${userAnswerText || "<em>fără răspuns</em>"}
        ${!correct ? `<br>Răspuns corect: ${correctAnswerText}` : ""}
      </div>
      ${q.explanation ? `<div class="review-explain">${q.explanation}</div>` : ""}
    `;
    reviewEl.appendChild(item);
  });

  state.lastResults = { reviewData };
  showScreen("screen-results");
}

function describeUserAnswer(q) {
  if (q.type === "true_false" || q.type === "single") {
    const idx = state.userAnswers[q.id];
    return idx === undefined ? "" : q.options[idx];
  }
  if (q.type === "multiple") {
    const idxs = state.userAnswers[q.id] || [];
    return idxs.map(i => q.options[i]).join(", ");
  }
  if (q.type === "drag_drop") {
    const zones = state.dndState[q.id] || {};
    return q.dropZones.map(z => {
      const item = q.dragItems.find(i => i.id === zones[z.id]);
      return `${z.label}: ${item ? item.text : "—"}`;
    }).join("; ");
  }
  return "";
}

function describeCorrectAnswer(q) {
  if (q.type === "true_false" || q.type === "single") {
    return q.options[q.correct];
  }
  if (q.type === "multiple") {
    return q.correct.map(i => q.options[i]).join(", ");
  }
  if (q.type === "drag_drop") {
    return q.dropZones.map(z => {
      const item = q.dragItems.find(i => i.id === z.correctItemId);
      return `${z.label}: ${item ? item.text : "—"}`;
    }).join("; ");
  }
  return "";
}

/* =====================================================================
   11) ACȚIUNI PE PAGINA DE REZULTATE
   ===================================================================== */
$("#new-exam-btn").addEventListener("click", () => {
  renderDashboard();
  showScreen("screen-dashboard");
});

$("#retry-same-btn").addEventListener("click", () => {
  const questions = state.quizQuestions;
  restartQuizWith(questions);
});

$("#retry-incorrect-btn").addEventListener("click", () => {
  const wrongQuestions = state.quizQuestions.filter(q => !isAnswerCorrect(q));
  if (wrongQuestions.length === 0) {
    alert("Nu ai nicio întrebare greșită — felicitări!");
    return;
  }
  restartQuizWith(wrongQuestions);
});

function restartQuizWith(questions) {
  state.quizQuestions = questions;
  state.currentIndex = 0;
  state.userAnswers = {};
  state.lockedQuestions = {};
  state.flagged = {};
  state.dndState = {};
  state.elapsedSeconds = 0;
  state.startTime = Date.now();

  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    state.elapsedSeconds = Math.floor((Date.now() - state.startTime) / 1000);
    $("#quiz-timer").textContent = formatTime(state.elapsedSeconds);
  }, 1000);

  showScreen("screen-quiz");
  renderQuizQuestion();
}