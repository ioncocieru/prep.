# ITS Prep — platformă de pregătire pentru examenele Certiport IT Specialist

Aplicație web (HTML/CSS/JS simplu, fără instalare, fără server) pentru pregătirea
la 4 examene Certiport IT Specialist: **Python, Databases, Device Configuration
and Management, Networking**.

## Ce e nou

- Logo real "Prep." (imaginea ta) folosit pe pagina de login și pe antetul dashboard-ului.
- Fundal decorativ discret (linii + puncte) pe pagina de login, păstrând simplitatea.
- Link către comunitatea de Telegram (https://t.me/prepmd) pe pagina de login.
- Banca de întrebări Python conține acum **183 de întrebări** (10 exemple inițiale + 173 extrase și verificate din PDF-ul încărcat), acoperind toate cele 4 tipuri: Adevărat/Fals, 1 răspuns corect, 2 răspunsuri corecte, și drag & drop.

## Cum o deschizi

Dă dublu-clic pe `index.html` — se deschide direct în browser (Chrome, Edge,
Firefox). Nu ai nevoie de internet, server sau instalare, cu excepția
fonturilor (dacă nu ai internet, site-ul folosește automat un font de sistem
în loc de fontul Sora/IBM Plex Mono).

Pentru a o pune online (opțional), încarci întregul folder pe orice hosting
static: GitHub Pages, Netlify, Vercel, sau chiar un simplu spațiu de hosting.

## Parola de acces

Parola este o simplă variabilă în `app.js`, chiar la început:

```js
const SITE_PASSWORD = "Certiport2026";
```

O poți schimba oricând, e text simplu (fără cont, fără bază de date).
**Notă de securitate**: parola este vizibilă oricui deschide codul sursă al
paginii (F12 → View Source) — e potrivită pentru a ține departe vizitatorii
întâmplători, nu pentru date cu adevărat sensibile.

## Cum adaugi întrebările tale (300+ per examen)

Fiecare examen are propriul fișier de întrebări, în folderul `data/`:

| Examen                          | Fișier                     |
|----------------------------------|-----------------------------|
| Python                            | `data/python.js`            |
| Databases                         | `data/databases.js`         |
| Device Configuration and Management | `data/device-config.js`  |
| Networking                        | `data/networking.js`        |

Deschide fișierul examenului dorit cu orice editor de text (Notepad, VS Code
etc.). La începutul fiecărui fișier găsești un tabel de capitole
(`CHAPTERS`) și o listă de întrebări (`QUESTIONS`) cu 10 exemple — câte unul
din fiecare tip. Instrucțiunile complete despre format sunt scrise ca
comentarii chiar în `data/python.js`.

### Structura pe scurt

```js
{
  id: "py-011",                 // unic, nu-l repeta
  chapter: "structuri-control", // trebuie să fie un id din CHAPTERS
  type: "single",               // true_false | single | multiple | drag_drop
  question: "Textul întrebării",
  code: "print('opțional, cod Python monospace')", // opțional
  options: ["A", "B", "C", "D"],
  correct: 1,                   // index-ul răspunsului corect (pornind de la 0)
  explanation: "De ce e corect (apare în modul exercițiu)."
}
```

Pentru **Adevărat/Fals**: `options: ["Adevărat", "Fals"]`, `correct: 0` sau `1`.

Pentru **2 răspunsuri corecte**: `correct: [0, 3]` (un array cu 2 indecși).

Pentru **drag & drop**:
```js
{
  id: "py-012",
  chapter: "structuri-date",
  type: "drag_drop",
  question: "Asociază fiecare termen cu definiția lui.",
  dragItems: [{ id: "a", text: "list" }, { id: "b", text: "tuple" }],
  dropZones: [
    { id: "z1", label: "Mutabilă", correctItemId: "a" },
    { id: "z2", label: "Imutabilă", correctItemId: "b" }
  ],
  explanation: "..."
}
```

Adaugă pur și simplu obiecte noi în interiorul listei `QUESTIONS: [ ... ]`,
separate prin virgulă. Poți avea sute de întrebări — nu există limită impusă
de aplicație. Capitolele din meniul de selecție se generează automat din
`CHAPTERS`, iar numărul de întrebări disponibile per capitol se calculează
automat.

## Cum funcționează platforma pentru utilizator

1. **Login** — introduce parola.
2. **Alege examenul** — cele 4 carduri (Python, Databases, Device
   Configuration and Management, Networking), fiecare arată câte întrebări
   sunt încărcate.
3. **Setup test** — bifează capitolele dorite (bazate pe domeniile oficiale
   de examinare Certiport), alege câte întrebări vrea (slider), și modul:
   - **Exercițiu** — vezi imediat dacă ai răspuns corect, cu explicație.
   - **Examen** — fără feedback până la final, cu cronometru, exact ca la
     testarea reală Certiport.
4. **Test** — bară de progres, cronometru, opțiune de a marca o întrebare
   pentru revizuire, navigare înainte/înapoi.
5. **Rezultate** — scor procentual, prag de trecere orientativ (70%), scor
   defalcat pe capitole, recapitulare completă întrebare-cu-întrebare (cu
   răspunsul dat, cel corect și explicația), și opțiunea de a relua doar
   întrebările greșite.

## Capitolele pe examen (aliniate cu domeniile oficiale Certiport)

- **Python**: Operatori și tipuri de date · Structuri de control · Structuri
  de date · Input/Output · Funcții · Module și librării · Gestionarea
  erorilor · Structura și documentarea codului.
- **Databases**: Proiectarea bazelor de date · Administrarea obiectelor
  (DDL) · Extragerea datelor · Manipularea datelor (DML) · Depanare și
  optimizare.
- **Device Configuration and Management**: Instalarea și configurarea
  Windows · Aplicații, funcții și periferice · Accesul și gestionarea
  datelor · Securitatea dispozitivelor · Gestionare și depanare Windows.
- **Networking**: Concepte de rețea · Infrastructura de rețea · Echipamente
  de rețea · Protocoale și servicii · Depanare și instrumente.

Poți redenumi/adăuga capitole direct în array-ul `CHAPTERS` din fiecare
fișier de date — doar ai grijă ca `chapter` din fiecare întrebare să
corespundă exact cu un `id` de acolo.

## Notă tehnică

Aplicația nu salvează nimic pe server și nu ține date persistente între
sesiuni de browser (nu folosește localStorage) — la reîncărcarea paginii,
testul curent se pierde, dar fiecare test nou alege aleatoriu întrebări din
banca ta, deci poți exersa oricând un test proaspăt.
