/* =====================================================================
   ITS PREP — app.js
   Aplicație de pregătire pentru examenele Certiport IT Specialist.
   Totul rulează local, în browser — nu se trimit date către niciun server.

   MODIFICĂRI FAȚĂ DE VERSIUNEA ANTERIOARĂ:
   - Întrebările pot avea câmpul  image: "assets/device1.png"  (afișat sub textul
     întrebării; click pe imagine = mărire). Apare și în recapitularea rezultatelor.
   - La drag & drop, un element care este răspuns corect pentru MAI MULTE casete
     (ex. "str" folosit de 2 ori) poate fi tras de mai multe ori.
   - Indentarea din elementele de cod (drag & drop / opțiuni) se păstrează.
   Stilurile necesare sunt injectate din JS, nu trebuie modificat style.css.
   ===================================================================== */

/* ---------------------------------------------------------------------
   1) SUPABASE (autentificare + acces pe examene)
   Cheile se setează în config.js
   --------------------------------------------------------------------- */
const recoveryInUrl = /(^|[#&?])type=recovery/.test(location.hash + location.search); // deschis din emailul „Resetare parolă”
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
let recoveryMode = recoveryInUrl;
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
    multiple: "Răspunsuri multiple",
    drag_drop: "Drag & drop"
  }[type] || type;
}


/* ---------------------------------------------------------------------
   TEMĂ (luminoasă / întunecată) — se salvează în contul utilizatorului
   (user_metadata.theme în Supabase) și local, pentru încărcare rapidă.
   --------------------------------------------------------------------- */
const THEME_KEY = "prep-theme";
let currentUserEmail = "";
let currentUserId = "";

function getLocalTheme() { try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; } }
function currentTheme() { return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light"; }

function applyTheme(t) {
  t = t === "dark" ? "dark" : "light";
  if (t === "dark") document.documentElement.setAttribute("data-theme", "dark");
  else document.documentElement.removeAttribute("data-theme");
  try { localStorage.setItem(THEME_KEY, t); } catch (e) {}
  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.title = t === "dark" ? "Treci la tema luminoasă" : "Treci la tema întunecată";
    btn.setAttribute("aria-pressed", t === "dark" ? "true" : "false");
  }
  document.querySelectorAll("[data-theme-set]").forEach(b => b.classList.toggle("active", b.dataset.themeSet === t));
}

async function setTheme(t) {
  applyTheme(t);
  try { await sb.auth.updateUser({ data: { theme: t } }); }   // salvat în profilul contului
  catch (e) { console.warn("Nu am putut salva tema în cont:", e); }
}

/* ---------------------------------------------------------------------
   GHID de utilizare (apare o singură dată, la primul acces la examene
   pentru conturile create prin „Creare cont”; se poate redeschide din „Ghid”)
   --------------------------------------------------------------------- */
const GUIDE_STEPS = [
  {
    icon: '<path d="M12 3l2.4 5 5.6.8-4 3.9.9 5.5L12 15.6 7.1 18.2 8 12.7 4 8.8 9.6 8z"/>',
    title: "Bun venit pe Prep.",
    body: `<p>Aici te pregătești pentru examenele <strong>IT Specialist by Certiport</strong>. Ghidul de mai jos îți arată, pe scurt, cum funcționează platforma.</p>
      <div class="guide-tip"><strong>Ordinea recomandată</strong>
        <ol><li>Mai întâi <strong>vizionează toate videoclipurile</strong> din curs.</li>
        <li>Abia apoi <strong>rezolvă întrebările</strong>, ca să le înțelegi, nu să le memorezi.</li></ol></div>`
  },
  {
    icon: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M10 9.5v5l4.5-2.5z"/>',
    title: "1. Cursul video",
    body: `<p>Pe cardul fiecărui examen apasă <strong>Curs</strong>.</p>
      <ul><li>În dreapta ai lista capitolelor și a videoclipurilor; ele se redau în ordine.</li>
      <li>Folosește <strong>Anterior / Următorul</strong> și marchează fiecare video cu <strong>Marchează vizionat</strong>.</li>
      <li>Sub video găsești, când există, <strong>resurse de descărcat</strong>.</li></ul>
      <p class="guide-note">Când ai marcat <strong>toate</strong> videoclipurile ca vizionate, primești certificatul de curs (îl găsești în Profil).</p>`
  },
  {
    icon: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.2a2.7 2.7 0 1 1 3.6 2.6c-.7.3-1.1.8-1.1 1.5M12 16.8v.1"/>',
    title: "2. Întrebările",
    body: `<p>Apasă <strong>Întrebări</strong> pe cardul examenului, apoi alegi:</p>
      <ul><li><strong>Capitolele</strong> pe care vrei să le exersezi;</li>
      <li><strong>Câte întrebări</strong> vrei în test;</li>
      <li><strong>Modul</strong>: <em>Exercițiu</em> (vezi imediat răspunsul și explicația) sau <em>Examen</em> (ca la Certiport: fără feedback până la final, cu cronometru).</li></ul>
      <p class="guide-note">Poți marca o întrebare pentru revizuire și te poți întoarce la ea înainte de a finaliza.</p>`
  },
  {
    icon: '<path d="M4 7h16M4 12h10M4 17h6"/>',
    title: "Tipuri de întrebări",
    body: `<ul><li><strong>Un răspuns</strong> sau <strong>Adevărat / Fals</strong>: alegi varianta corectă.</li>
      <li><strong>Răspunsuri multiple</strong>: bifezi exact atâtea variante câte cere întrebarea.</li>
      <li><strong>Drag &amp; drop</strong>: trage elementul în casetă, sau atinge elementul și apoi caseta. Click pe un element plasat îl scoate. Unele elemente pot fi folosite de mai multe ori.</li>
      <li><strong>Întrebări cu imagine</strong>: click pe imagine o mărește.</li></ul>`
  },
  {
    icon: '<path d="M5 20V10M12 20V4M19 20v-7"/>',
    title: "Rezultate și progres",
    body: `<p>La final vezi scorul total, scorul <strong>pe capitole</strong> și o recapitulare cu explicații.</p>
      <ul><li><strong>Reia doar greșelile</strong> îți dă un test nou doar cu întrebările greșite.</li>
      <li>Dacă ai sub <strong>70%</strong>, revino la videoclipurile capitolelor slabe și repetă testul.</li>
      <li>Progresul se salvează în cont. Certificatul de întrebări îl primești după ce ai răspuns <strong>cel puțin o dată la fiecare întrebare</strong> din examen; certificatele se văd în <strong>Profil</strong>.</li></ul>`
  },
  {
    icon: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5"/>',
    title: "Profil și temă",
    body: `<ul><li>Din meniul de sus poți comuta <strong>tema luminoasă / întunecată</strong> (iconița cu soare sau lună). Alegerea se salvează în contul tău.</li>
      <li>În <strong>Profil</strong> îți setezi numele (apare pe certificate) și poza.</li>
      <li>Butonul <strong>Ghid</strong> din meniu redeschide acest ghid oricând.</li></ul>
      <p class="guide-note">Mult succes la pregătire!</p>`
  }
];

function showGuide(firstTime) {
  if (document.querySelector(".guide-overlay")) return;
  let step = 0;
  const ov = document.createElement("div");
  ov.className = "modal-overlay guide-overlay";
  document.body.appendChild(ov);

  const close = () => {
    document.removeEventListener("keydown", onKey);
    ov.remove();
    if (firstTime) markGuideSeen();
  };
  const onKey = (e) => { if (e.key === "Escape") close(); };
  document.addEventListener("keydown", onKey);

  function draw() {
    const s = GUIDE_STEPS[step];
    const last = step === GUIDE_STEPS.length - 1;
    ov.innerHTML = `
      <div class="modal-panel guide-panel" role="dialog" aria-modal="true" aria-label="Ghid de utilizare">
        <div class="guide-top">
          <span class="guide-count">Pasul ${step + 1} din ${GUIDE_STEPS.length}</span>
          <button type="button" class="link-btn" data-skip>${last ? "Închide" : "Sari peste"}</button>
        </div>
        <div class="guide-icon"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${s.icon}</svg></div>
        <h3>${s.title}</h3>
        <div class="guide-body">${s.body}</div>
        <div class="guide-dots">${GUIDE_STEPS.map((_, i) => `<i class="${i === step ? "on" : ""}"></i>`).join("")}</div>
        <div class="guide-actions">
          <button type="button" class="btn btn-secondary" data-prev ${step === 0 ? "disabled" : ""}>Înapoi</button>
          <button type="button" class="btn btn-primary" data-next>${last ? "Am înțeles, începem" : "Următorul"}</button>
        </div>
      </div>`;
  }
  ov.addEventListener("click", (e) => {
    if (e.target.closest("[data-skip]")) close();
    else if (e.target.closest("[data-prev]")) { if (step > 0) { step--; draw(); } }
    else if (e.target.closest("[data-next]")) { if (step < GUIDE_STEPS.length - 1) { step++; draw(); } else close(); }
  });
  draw();
}

function guideLocalKey() { return "prep-guide-seen:" + (currentUserId || "anon"); }
function guideSeenLocally() { try { return localStorage.getItem(guideLocalKey()) === "1"; } catch (e) { return false; } }
async function markGuideSeen() {
  try { localStorage.setItem(guideLocalKey(), "1"); } catch (e) {}
  try { await sb.auth.updateUser({ data: { guide_seen: true } }); } catch (e) { console.warn(e); }
}

/* ---------------------------------------------------------------------
   STILURI SUPLIMENTARE (imagini în întrebări + păstrarea indentării)
   --------------------------------------------------------------------- */
(function injectExtraStyles() {
  const st = document.createElement("style");
  st.textContent = `
    .q-image-wrap { margin: 14px 0; }
    .q-image { display: block; max-width: 100%; max-height: 260px; height: auto; margin: 0 auto;
      border-radius: 10px; border: 1px solid rgba(128,128,128,.35); background: #fff; cursor: zoom-in; }
    .q-image-wrap.small .q-image { max-height: 120px; margin: 8px 0; }
    .q-image-zoom { position: fixed; inset: 0; z-index: 9999; display: flex; align-items: center;
      justify-content: center; background: rgba(0,0,0,.82); cursor: zoom-out; padding: 16px; }
    .q-image-zoom img { max-width: 94vw; max-height: 92vh; border-radius: 10px; background: #fff; }
    .q-image-missing { font-size: 13px; opacity: .7; padding: 10px; text-align: center; }
    .opt-code, .dnd-chip code, .dnd-chip .opt-code, .dnd-target-label .opt-code { white-space: pre-wrap; }
    .opt-code-block { white-space: pre; overflow-x: auto; }
  `;
  document.head.appendChild(st);
})();

function escapeAttr(str) {
  return String(str ?? "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* HTML pentru imaginea unei întrebări (dacă are câmpul "image") */
function imageHtml(q, small = false) {
  if (!q.image) return "";
  const src = escapeAttr(q.image);
  return `<div class="q-image-wrap ${small ? "small" : ""}">
    <img class="q-image" src="${src}" alt="Imagine pentru întrebare" loading="lazy"
         onerror="this.outerHTML='<div class=&quot;q-image-missing&quot;>Imaginea nu a putut fi încărcată: ${src}</div>'">
  </div>`;
}

/* click pe imagine = mărire pe tot ecranul */
function attachImageZoom(root) {
  $all(".q-image", root).forEach(img => {
    img.addEventListener("click", () => {
      const ov = document.createElement("div");
      ov.className = "q-image-zoom";
      ov.innerHTML = `<img src="${escapeAttr(img.src)}" alt="">`;
      const close = () => { document.removeEventListener("keydown", onKey); ov.remove(); };
      const onKey = (e) => { if (e.key === "Escape") close(); };
      ov.addEventListener("click", close);
      document.addEventListener("keydown", onKey);
      document.body.appendChild(ov);
    });
  });
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
  $("#login-resend").hidden = true;
  if (error) {
    if ((error.message || "").toLowerCase().includes("not confirmed")) {
      err.textContent = "Emailul nu a fost confirmat încă. Deschide linkul din mesajul primit (verifică și Spam) sau cere un email nou.";
      pendingConfirmEmail = login;
      $("#login-resend").hidden = false;
    } else {
      err.textContent = "Login sau parolă incorectă.";
    }
    err.hidden = false;
    return;
  }
  $("#password-input").value = "";
  await enterApp();
});


/* ---------- Creare cont (autentificare / înregistrare) ---------- */
function switchAuth(mode) {
  $all(".auth-tab").forEach(t => t.classList.toggle("active", t.dataset.auth === mode));
  ["login", "register", "forgot", "recover"].forEach(m => { $("#auth-" + m + "-pane").hidden = m !== mode; });
  $("#auth-tabs").hidden = mode === "forgot" || mode === "recover";   // tab-urile se ascund la resetarea parolei
  ["#login-error", "#register-error", "#register-info", "#forgot-error", "#forgot-info", "#recover-error"].forEach(s => { $(s).hidden = true; });
  $("#login-resend").hidden = true; $("#register-resend").hidden = true;
}
$("#forgot-link").addEventListener("click", () => {
  const typed = $("#login-input").value.trim();
  switchAuth("forgot");
  if (typed.includes("@")) $("#forgot-email").value = typed;
});
$all("[data-auth-go]").forEach(b => b.addEventListener("click", () => switchAuth(b.dataset.authGo)));

/* ---------- Resetare parolă ---------- */
$("#forgot-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const err = $("#forgot-error"), info = $("#forgot-info"), btn = $("#forgot-btn");
  err.hidden = true; info.hidden = true;
  const email = $("#forgot-email").value.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { err.textContent = "Introdu o adresă de email validă."; err.hidden = false; return; }
  if (email.endsWith("@" + LOGIN_DOMAIN)) {
    err.textContent = "Acest cont nu are o adresă de email reală. Contactează administratorul pe Telegram (@thecocieru) pentru a-ți reseta parola.";
    err.hidden = false; return;
  }
  btn.disabled = true;
  const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: location.origin + location.pathname });
  setTimeout(() => { btn.disabled = false; }, 30000);   // evită trimiterea în serie
  if (error) {
    const m = (error.message || "").toLowerCase();
    err.textContent = (m.includes("rate") || m.includes("seconds") || m.includes("too many"))
      ? "Prea multe încercări. Încearcă din nou peste câteva minute."
      : "Nu am putut trimite emailul acum. Încearcă din nou mai târziu.";
    err.hidden = false; btn.disabled = false; return;
  }
  info.textContent = "Dacă există un cont cu această adresă, ți-am trimis un link de resetare. Verifică inboxul (și Spam).";
  info.hidden = false;
});

function showRecoverForm() {
  showScreen("screen-login");
  switchAuth("recover");
}
$("#recover-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const err = $("#recover-error"), btn = $("#recover-btn");
  const fail = (m) => { err.textContent = m; err.hidden = false; };
  err.hidden = true;
  const p1 = $("#recover-password").value, p2 = $("#recover-password2").value;
  if (p1.length < 6) return fail("Parola trebuie să aibă cel puțin 6 caractere.");
  if (p1 !== p2) return fail("Parolele nu coincid.");
  btn.disabled = true;
  const { error } = await sb.auth.updateUser({ password: p1 });
  btn.disabled = false;
  if (error) {
    const m = (error.message || "").toLowerCase();
    if (m.includes("same")) return fail("Parola nouă trebuie să fie diferită de cea veche.");
    return fail("Nu am putut salva parola: " + error.message + " Cere un link nou de resetare.");
  }
  $("#recover-password").value = ""; $("#recover-password2").value = "";
  recoveryMode = false;
  try { history.replaceState(null, "", location.pathname); } catch (x) {}
  switchAuth("login");
  await enterApp();       // utilizatorul este deja autentificat prin linkul din email
});
$all(".auth-tab").forEach(t => t.addEventListener("click", () => switchAuth(t.dataset.auth)));

let pendingConfirmEmail = "";

async function resendConfirmation(btn, infoEl) {
  if (!pendingConfirmEmail) return;
  btn.disabled = true;
  const { error } = await sb.auth.resend({
    type: "signup", email: pendingConfirmEmail,
    options: { emailRedirectTo: location.origin + location.pathname }
  });
  setTimeout(() => { btn.disabled = false; }, 30000);   // evită retrimiterea în serie
  if (infoEl) {
    infoEl.textContent = error
      ? "Nu am putut retrimite emailul acum. Încearcă din nou peste câteva minute."
      : "Am retrimis emailul de confirmare la " + pendingConfirmEmail + ".";
    infoEl.hidden = false;
  }
}
$("#register-resend").addEventListener("click", () => resendConfirmation($("#register-resend"), $("#register-info")));
$("#login-resend").addEventListener("click", () => {
  resendConfirmation($("#login-resend"), null);
  const err = $("#login-error"); err.textContent = "Am retrimis emailul de confirmare. Verifică inboxul (și Spam)."; err.hidden = false;
});

$("#register-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const err = $("#register-error"), info = $("#register-info"), btn = $("#register-btn");
  const fail = (m) => { err.textContent = m; err.hidden = false; };
  err.hidden = true; info.hidden = true; $("#register-resend").hidden = true;

  const email = $("#reg-login").value.trim().toLowerCase();
  const p1 = $("#reg-password").value, p2 = $("#reg-password2").value;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return fail("Introdu o adresă de email validă. Pe ea primești mesajul de confirmare.");
  if (p1.length < 6) return fail("Parola trebuie să aibă cel puțin 6 caractere.");
  if (p1 !== p2) return fail("Parolele nu coincid.");

  btn.disabled = true;
  const { data, error } = await sb.auth.signUp({
    email,
    password: p1,
    options: { data: { self_registered: true }, emailRedirectTo: location.origin + location.pathname }
  });
  btn.disabled = false;

  if (error) {
    const m = (error.message || "").toLowerCase();
    if (m.includes("already")) return fail("Acest email este deja înregistrat. Autentifică-te.");
    if (m.includes("rate") || m.includes("too many") || m.includes("seconds")) return fail("Prea multe încercări. Încearcă din nou peste câteva minute.");
    if (m.includes("not allowed") || m.includes("disabled")) return fail("Crearea de conturi este dezactivată momentan.");
    if (m.includes("password")) return fail("Parola nu este acceptată. Alege una mai lungă.");
    if (m.includes("email") && (m.includes("send") || m.includes("sending"))) return fail("Nu am putut trimite emailul de confirmare. Încearcă mai târziu sau contactează administratorul.");
    return fail("Nu am putut crea contul: " + error.message);
  }
  // email deja existent și confirmat: Supabase nu dă eroare, ci întoarce un utilizator fără identități
  if (data.user && Array.isArray(data.user.identities) && data.user.identities.length === 0) {
    return fail("Acest email este deja înregistrat. Autentifică-te.");
  }
  if (!data.session) {   // confirmarea prin email este activă: utilizatorul trebuie să apese linkul din mesaj
    pendingConfirmEmail = email;
    info.textContent = "Ți-am trimis un email de confirmare la " + email + ". Apasă linkul din mesaj (verifică și Spam), apoi autentifică-te.";
    info.hidden = false;
    $("#register-resend").hidden = false;
    $("#reg-password").value = ""; $("#reg-password2").value = "";
    return;
  }
  $("#reg-password").value = ""; $("#reg-password2").value = "";
  await enterApp();       // dacă confirmarea e dezactivată în Supabase, intră direct
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
  const meta = sess.session?.user?.user_metadata || {};
  currentUserEmail = email;
  currentUserId = sess.session?.user?.id || "";
  if (meta.theme) applyTheme(meta.theme);     // tema salvată în profil
  let name = email.split("@")[0];
  name = name.charAt(0).toUpperCase() + name.slice(1);
  $("#welcome-title").textContent = name ? `Bine ai revenit, ${name}` : "Bine ai revenit!";

  renderDashboard();
  showScreen("screen-dashboard");

  // ghid de utilizare: doar la prima intrare cu examene, pentru conturi create prin „Creare cont”
  if (allowedExams.length && meta.self_registered && !meta.guide_seen && !guideSeenLocally()) {
    setTimeout(() => showGuide(true), 350);
  }
}

$("#logout-btn").addEventListener("click", async () => {
  await sb.auth.signOut();
  allowedExams = [];
  showScreen("screen-login");
});

// păstrează sesiunea la reîncărcarea paginii
sb.auth.onAuthStateChange((event) => {
  if (event === "PASSWORD_RECOVERY") { recoveryMode = true; showRecoverForm(); }
});
sb.auth.getSession().then(({ data }) => {
  if (recoveryMode) { showRecoverForm(); return; }
  if (data.session) enterApp();
});

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


const TG_ICON = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.5 3.5 2.7 10.9c-1.2.5-1.2 1.2-.2 1.5l4.8 1.5 1.9 5.8c.2.6.4.8.9.8.4 0 .6-.2.9-.5l2.2-2.1 4.6 3.4c.8.5 1.4.2 1.6-.7l3-14.1c.3-1.2-.4-1.7-1.2-1.2Zm-12 11.4-1.6-.5 9.5-6-7.9 6.5Zm1 1.1 1.2 3.7.9-2.7c1.9-1.6 3.4-2.9 4.5-3.9l-6.6 2.9Z"/></svg>`;
const LOCK_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="10.5" width="15" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/><path d="M12 14.5v2.5"/></svg>`;

/* Pagina afișată când contul nu are încă niciun examen */
function renderNoAccess(grid) {
  const login = currentUserEmail ? currentUserEmail.split("@")[0] : "";
  grid.innerHTML = `
    <section class="noaccess">
      <div class="noaccess-icon">${LOCK_ICON}</div>
      <span class="noaccess-badge">Cont creat cu succes</span>
      <h2>Mai ai un singur pas</h2>
      <p class="noaccess-lead">Contul tău este activ, dar nu include încă niciun examen.
        Pentru a primi accesul, <strong>contactează un administrator</strong> pe Telegram.</p>

      <a class="noaccess-tg" href="https://t.me/thecocieru" target="_blank" rel="noopener">
        <span class="noaccess-tg-icon">${TG_ICON}</span>
        <span class="noaccess-tg-text"><strong>Scrie administratorului</strong><small>Telegram · @thecocieru</small></span>
        <span class="noaccess-tg-arrow">${ARROW_ICON}</span>
      </a>

      <ol class="noaccess-steps">
        <li><span>1</span><div><strong>Trimite-i login-ul contului</strong>
          <small>${login ? `Login-ul tău: <code>${escapeHtml(login)}</code>` : "Scrie-i login-ul cu care te-ai înregistrat."}</small></div></li>
        <li><span>2</span><div><strong>Spune-i la ce examene vrei acces</strong>
          <small>Python, Databases, Device Configuration and Management sau Networking.</small></div></li>
        <li><span>3</span><div><strong>Apasă „Verifică accesul”</strong>
          <small>După ce primești confirmarea, examenele apar aici.</small></div></li>
      </ol>

      <div class="noaccess-actions">
        <button class="btn btn-primary" id="recheck-access-btn" type="button">Verifică accesul</button>
      </div>
      <p class="noaccess-hint" id="recheck-hint" hidden>Încă nu ai primit acces. Dacă ai scris deja administratorului, mai așteaptă puțin.</p>
    </section>`;
  const b = $("#recheck-access-btn");
  b.addEventListener("click", async () => {
    b.disabled = true; b.textContent = "Se verifică…";
    await enterApp();                       // re-randează dashboard-ul (cu examene, dacă au fost adăugate)
    const h = $("#recheck-hint"); if (h) h.hidden = false;
  });
}

function renderDashboard() {
  const grid = $("#exam-grid");
  grid.innerHTML = "";

  const visible = EXAM_ORDER.filter(k => allowedExams.includes(k));
  const heroP = $(".dash-hero-copy p");
  if (heroP) heroP.textContent = visible.length
    ? "Alege examenul la care vrei să te pregătești astăzi."
    : "Contul tău este creat, dar nu are încă acces la niciun examen.";
  if (visible.length === 0) {
    renderNoAccess(grid);
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
        <span>${total} întrebări</span>
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
  $("#setup-question-total").textContent = `${exam.QUESTIONS.length} întrebări`;

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
  askConfirm({
    title: "Ieși din test?",
    text: "Sesiunea se păstrează și o poți continua cu butonul «Reia sesiunea».",
    ok: "Ieși din test", cancel: "Rămân în test"
  }).then((ok) => {
    if (!ok) return;
    if (window.saveSession) window.saveSession();
    clearInterval(state.timerInterval);
    renderDashboard();
    showScreen("screen-dashboard");
  });
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
  $("#quiz-flag-btn").innerHTML = ICON.flag + (state.flagged[q.id] ? " Marcată pentru revizuire" : " Marchează pentru revizuire");

  const card = $("#quiz-card");
  const locked = !!state.lockedQuestions[q.id];

  let html = `
    <div class="q-kicker">
      <span class="q-type-badge">${typeLabel(q.type)}</span>
      <span class="q-chapter-badge">${chapterName}</span>
    </div>
    <div class="q-text">${fmt(q.question)}</div>
  `;
  html += imageHtml(q);                                   // imaginea întrebării (dacă există)
  if (q.code) html += `<pre class="q-code"><code>${highlightCode(q.code)}</code></pre>`;

  if (q.type === "true_false") {
    html += renderTrueFalse(q, locked);
  } else if (q.type === "single") {
    html += renderSingle(q, locked);
  } else if (q.type === "multiple") {
    html += `<p class="q-hint">Selectează exact ${q.correct.length} răspunsuri corecte.</p>` + renderMultiple(q, locked);
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
  attachImageZoom(card);
  attachQuestionHandlers(q, locked);
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------- Iconițe (SVG) și fereastră de confirmare ---------- */
const svgIc = (p, cls = "") => `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`;
const ICON = {
  flag: svgIc('<path d="M5 21V4m0 0h11l-2 4 2 4H5"/>'),
  check: svgIc('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
  x: svgIc('<path d="M6 6l12 12M18 6L6 18"/>'),
  play: svgIc('<path d="M8 5.5v13l11-6.5z"/>', "ic-fill"),
  download: svgIc('<path d="M12 4v11m0 0l-4-4m4 4l4-4M5 20h14"/>'),
  award: svgIc('<circle cx="12" cy="9" r="5.5"/><path d="M8.5 13.5L7 21l5-3 5 3-1.5-7.5"/>'),
  pencil: svgIc('<path d="M4 20h4L19 9l-4-4L4 16v4zM13.5 6.5l4 4"/>'),
  alert: svgIc('<circle cx="12" cy="12" r="9"/><path d="M12 7.5v5M12 16.2v.1"/>'),
  info: svgIc('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.8v.1"/>')
};

function askConfirm({ title, text, ok = "Confirmă", cancel = "Anulează", danger = false }) {
  return new Promise((resolve) => {
    const m = document.createElement("div");
    m.className = "modal-overlay";
    m.innerHTML = `<div class="modal-panel modal-confirm" role="dialog" aria-modal="true">
        <div class="modal-icon ${danger ? "danger" : ""}">${ICON.info}</div>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(text)}</p>
        <div class="modal-actions">
          <button class="btn btn-primary" data-ok>${escapeHtml(ok)}</button>
          <button class="btn btn-secondary" data-cancel>${escapeHtml(cancel)}</button>
        </div></div>`;
    const done = (v) => { document.removeEventListener("keydown", onKey); m.remove(); resolve(v); };
    const onKey = (e) => { if (e.key === "Escape") done(false); };
    m.addEventListener("click", (e) => {
      if (e.target.closest("[data-ok]")) done(true);
      else if (e.target.closest("[data-cancel]") || e.target === m) done(false);
    });
    document.addEventListener("keydown", onKey);
    document.body.appendChild(m);
    m.querySelector("[data-ok]").focus();
  });
}

/* ---------- Formatare text / cod (escape + blocuri de cod + culori) ---------- */
function fmt(str) {
  return escapeHtml(String(str ?? ""))
    .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
    .replace(/\n/g, "<br>");
}

function isCodeLike(s) {
  s = String(s).trim();
  if (!s || s.includes("`")) return false;
  if (s.includes("\n") && /[:=()\[\]]/.test(s)) return true;
  return /[A-Za-z_]\w*\s*\(/.test(s) ||
    /\w\[[^\]]*\]/.test(s) ||
    /[A-Za-z_\]\)]\s*(\*\*|\/\/|[+\-*\/%])?=(?!=)\s*\S/.test(s) ||
    /[=!<>]=/.test(s) ||
    /\d\s*(\*\*|\/\/|[%*\/+\-])\s*\d/.test(s) ||
    /^(import|from|for|while|if|elif|else|def|return|print|with|assert|raise|try|except|global|pass|break|continue)\b/.test(s) ||
    /^\s*[\[\{\(]['"\d].*[\]\}\)]$/.test(s) ||
    /^["'].*["']$/.test(s);
}

function optionsAreCode(q) {
  if (q.optionsCode === true) return true;
  if (q.optionsCode === false || !q.options || q.options.length < 2) return false;
  const n = q.options.filter(isCodeLike).length;
  return n / q.options.length >= 0.75;
}

function renderCodeText(text) {
  const t = String(text);
  return t.includes("\n")
    ? `<pre class="opt-code-block">${highlightCode(t)}</pre>`
    : `<code class="opt-code">${highlightCode(t)}</code>`;
}

function renderOpt(q, opt) {
  return optionsAreCode(q) ? renderCodeText(opt) : fmt(opt);
}

function renderChip(text) {
  return isCodeLike(text) ? renderCodeText(text) : fmt(text);
}

function highlightCode(code) {
  const esc = escapeHtml(String(code));
  if (!state.currentExamKey || state.currentExamKey !== "python") return esc;
  return esc.replace(
    /(#.*$)|("(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|\b(def|return|if|elif|else|for|while|in|not|and|or|is|import|from|as|try|except|finally|with|break|continue|pass|class|lambda|raise|assert|global|None|True|False)\b|\b(\d+(?:\.\d+)?)\b|\b(print|input|int|str|float|bool|len|range|list|dict|set|tuple|open|sum|type|round|eval)\b(?=\()/gm,
    (m, com, str, kw, num, bi) =>
      com ? `<span class="tok-c">${com}</span>` :
      str ? `<span class="tok-s">${str}</span>` :
      kw  ? `<span class="tok-k">${kw}</span>` :
      num ? `<span class="tok-n">${num}</span>` :
            `<span class="tok-b">${bi}</span>`
  );
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
    html += `<button type="button" class="${cls}" data-idx="${idx}" ${locked ? "disabled" : ""}>${fmt(opt)}</button>`;
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
        <span class="opt-text">${renderOpt(q, opt)}</span>
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
        <span class="opt-mark">${selected ? ICON.check : ""}</span>
        <span class="opt-text">${renderOpt(q, opt)}</span>
      </div>`;
  });
  html += `</div>`;
  return html;
}

/* ---------- Drag & drop ---------- */
/* Un element este "reutilizabil" dacă este răspunsul corect pentru mai multe casete
   (ex. același tip de date folosit de 2 ori). Atunci poate fi plasat în mai multe casete. */
function isReusableItem(q, itemId) {
  return q.dropZones.filter(z => z.correctItemId === itemId).length > 1;
}

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
    const used = usedItemIds.includes(item.id) && !isReusableItem(q, item.id);
    html += `<div class="dnd-chip ${used ? "used" : ""}" draggable="${!locked && !used}" data-item="${item.id}">${renderChip(item.text)}</div>`;
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
        <span class="dnd-target-label">${renderChip(zone.label)}</span>
        <span class="dnd-target-slot">
          ${placedItem
            ? `<span class="dnd-chip" data-placed="${placedItem.id}">${renderChip(placedItem.text)}</span>`
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
        ${fmt(explanation)}
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
  const zones = state.dndState[q.id];
  // un element obișnuit poate sta într-o singură casetă; unul reutilizabil poate sta în mai multe
  if (!isReusableItem(q, itemId)) {
    Object.keys(zones).forEach(z => { if (zones[z] === itemId) zones[z] = null; });
  }
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
      <div class="review-item-head ${correct ? "right" : "wrong"}">${correct ? ICON.check + " Corect" : ICON.x + " Greșit"} · Întrebarea ${i + 1}</div>
      <div class="review-q">${fmt(q.question)}</div>
      ${imageHtml(q, true)}
      <div class="review-answer">
        Răspunsul tău: ${userAnswerText ? fmt(userAnswerText) : "<em>fără răspuns</em>"}
        ${!correct ? `<br>Răspuns corect: ${fmt(correctAnswerText)}` : ""}
      </div>
      ${q.explanation ? `<div class="review-explain">${fmt(q.explanation)}</div>` : ""}
    `;
    reviewEl.appendChild(item);
  });
  attachImageZoom(reviewEl);

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


/* =====================================================================
   12) TEMĂ + GHID — butoane din meniu / profil
   ===================================================================== */
applyTheme(getLocalTheme() || "light");
$("#theme-toggle").addEventListener("click", () => setTheme(currentTheme() === "dark" ? "light" : "dark"));
$all("[data-theme-set]").forEach(b => b.addEventListener("click", () => setTheme(b.dataset.themeSet)));
$("#guide-btn").addEventListener("click", () => showGuide(false));
