/* =====================================================================
   ITS PREP — app.js
   Aplicație de pregătire pentru examenele Certiport IT Specialist.
   Totul rulează local, în browser — nu se trimit date către niciun server.
   ===================================================================== */

/* ---------------------------------------------------------------------
   1) PAROLA DE ACCES
   Schimb-o oricând vrei — e o simplă variabilă text.
   --------------------------------------------------------------------- */
const SITE_PASSWORD = "iontop2026";

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
$("#login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = $("#password-input");
  if (input.value === SITE_PASSWORD) {
    $("#login-error").hidden = true;
    input.value = "";
    renderDashboard();
    showScreen("screen-dashboard");
  } else {
    $("#login-error").hidden = false;
  }
});

$("#logout-btn").addEventListener("click", () => {
  showScreen("screen-login");
});

/* =====================================================================
   4) DASHBOARD — alegerea examenului
   ===================================================================== */
function renderDashboard() {
  const grid = $("#exam-grid");
  grid.innerHTML = "";

  EXAM_ORDER.forEach(key => {
    const exam = getExam(key);
    if (!exam) return;
    const total = exam.QUESTIONS.length;
    const chapterCount = exam.CHAPTERS.length;

    const card = document.createElement("div");
    card.className = "exam-card";
    card.style.setProperty("--accent", exam.accent);
    card.innerHTML = `
      <div class="exam-card-head">
        <div class="exam-card-icon">${exam.shortLabel}</div>
      </div>
      <h3>${exam.name}</h3>
      <p>${exam.description}</p>
      <div class="exam-card-meta">
        <span>${chapterCount} capitole</span>
        <span>${total} întrebări încărcate</span>
      </div>
      <button class="btn btn-primary" data-exam="${key}">Începe pregătirea</button>
    `;
    card.querySelector("button").addEventListener("click", () => openSetup(key));
    grid.appendChild(card);
  });
}

/* =====================================================================
   5) SETUP TEST — capitole, nr. întrebări, mod
   ===================================================================== */
function openSetup(examKey) {
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
