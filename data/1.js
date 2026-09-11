/* =====================================================================
   BANCA DE ÎNTREBĂRI — IT SPECIALIST: PYTHON
   =====================================================================
   CUM ADAUGI ÎNTREBĂRI (citește o dată, apoi copiază tiparele de mai jos):

   Fiecare întrebare este un obiect JavaScript în lista QUESTIONS.
   Câmpuri comune tuturor tipurilor:
     id        -> identificator unic, ex: "py-014" (nu trebuie să se repete)
     chapter   -> trebuie să fie EXACT unul din id-urile din CHAPTERS mai jos
     type      -> "true_false" | "single" | "multiple" | "drag_drop"
     question  -> textul întrebării
     code      -> (opțional) un fragment de cod Python afișat monospace
     explanation -> (opțional, dar recomandat) explicație afișată după răspuns

   TIPURI DE ÎNTREBĂRI:

   1) "true_false"  -> Adevărat / Fals
      options: ["Adevărat", "Fals"]
      correct: 0  (index-ul răspunsului corect: 0 = Adevărat, 1 = Fals)

   2) "single"  -> un singur răspuns corect din mai multe variante
      options: ["varianta A", "varianta B", "varianta C", "varianta D"]
      correct: 2   (index-ul variantei corecte, pornind de la 0)

   3) "multiple"  -> exact 2 răspunsuri corecte
      options: ["varianta A", "varianta B", "varianta C", "varianta D"]
      correct: [0, 3]   (indecșii celor 2 variante corecte)

   4) "drag_drop"  -> utilizatorul trage elemente în casetele corecte
      dragItems: [{ id:"a", text:"list" }, { id:"b", text:"tuple" }, ...]
      dropZones: [
        { id:"z1", label:"Structură mutabilă, cu paranteze pătrate", correctItemId:"a" },
        { id:"z2", label:"Structură imutabilă, cu paranteze rotunde", correctItemId:"b" }
      ]
      -> Poți avea oricâte perechi drag-item / drop-zone vrei (recomandat 3-6).

   Nu șterge capitolele din CHAPTERS — poți doar să adaugi întrebări noi
   cu "chapter" = id-ul capitolului potrivit. Poți adăuga 300+ întrebări,
   pur și simplu continuă lista din interiorul parantezelor pătrate [ ].
   ===================================================================== */

window.EXAM_DATA = window.EXAM_DATA || {};

window.EXAM_DATA.python = {
  id: "python",
  name: "Python",
  shortLabel: "PY",
  accent: "#2F6FED",
  description: "Scrierea, recunoașterea și depanarea codului Python: variabile, structuri de control, funcții și module.",

  CHAPTERS: [
    { id: "operatori-tipuri",   name: "Operatori și tipuri de date" },
    { id: "structuri-control",  name: "Structuri de control (if, for, while)" },
    { id: "structuri-date",     name: "Structuri de date (liste, tupluri, dicționare)" },
    { id: "input-output",       name: "Input / Output și fișiere" },
    { id: "functii",            name: "Funcții" },
    { id: "module-librarii",    name: "Module și librării" },
    { id: "gestionare-erori",   name: "Gestionarea erorilor" },
    { id: "structura-cod",      name: "Structura și documentarea codului" }
  ],

  QUESTIONS: [
    {
      id: "py-001",
      chapter: "operatori-tipuri",
      type: "true_false",
      question: "În Python, tipul unei variabile poate fi schimbat după ce a fost creată (tipare dinamică).",
      options: ["Adevărat", "Fals"],
      correct: 0,
      explanation: "Python este un limbaj cu tipare dinamică: o variabilă poate reține la un moment dat un întreg, iar ulterior un șir de caractere, fără o declarare explicită de tip."
    },
    {
      id: "py-002",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Care este rezultatul expresiei de mai jos?",
      code: "print(17 // 4)",
      options: ["4.25", "4", "1", "5"],
      correct: 1,
      explanation: "Operatorul // reprezintă împărțirea întreagă (floor division): 17 // 4 = 4."
    },
    {
      id: "py-003",
      chapter: "operatori-tipuri",
      type: "multiple",
      question: "Care dintre următoarele sunt tipuri de date primitive (de bază) în Python? Alege 2 răspunsuri.",
      options: ["int", "list", "float", "DataFrame"],
      correct: [0, 2],
      explanation: "int și float sunt tipuri numerice de bază. list este o structură de date, iar DataFrame nu există în Python standard (aparține librăriei pandas)."
    },
    {
      id: "py-004",
      chapter: "structuri-control",
      type: "drag_drop",
      question: "Asociază fiecare cuvânt cheie cu tipul corect de structură de control.",
      dragItems: [
        { id: "a", text: "for" },
        { id: "b", text: "if / elif / else" },
        { id: "c", text: "while" }
      ],
      dropZones: [
        { id: "z1", label: "Buclă cu număr cunoscut de iterații / pe o secvență", correctItemId: "a" },
        { id: "z2", label: "Decizie condițională", correctItemId: "b" },
        { id: "z3", label: "Buclă ce rulează cât timp o condiție e adevărată", correctItemId: "c" }
      ],
      explanation: "for iterează peste o secvență, if/elif/else ia decizii, iar while repetă cât timp condiția rămâne adevărată."
    },
    {
      id: "py-005",
      chapter: "structuri-date",
      type: "single",
      question: "Care structură de date din Python NU permite modificarea elementelor după creare?",
      options: ["list", "dict", "tuple", "set"],
      correct: 2,
      explanation: "tuple este imutabil: odată creat, conținutul său nu mai poate fi schimbat."
    },
    {
      id: "py-006",
      chapter: "input-output",
      type: "true_false",
      question: "Funcția input() returnează întotdeauna o valoare de tip string.",
      options: ["Adevărat", "Fals"],
      correct: 0,
      explanation: "input() citește orice ar introduce utilizatorul ca text (str); conversia la int/float trebuie făcută manual, de exemplu cu int(input())."
    },
    {
      id: "py-007",
      chapter: "functii",
      type: "single",
      question: "Ce se afișează la rularea codului de mai jos?",
      code: "def saluta(nume=\"lume\"):\n    return \"Salut, \" + nume\n\nprint(saluta())",
      options: ["Salut, nume", "Salut, lume", "Eroare", "None"],
      correct: 1,
      explanation: "Parametrul nume are o valoare implicită \"lume\", folosită atunci când funcția e apelată fără argumente."
    },
    {
      id: "py-008",
      chapter: "gestionare-erori",
      type: "multiple",
      question: "Care dintre următoarele cuvinte cheie fac parte din blocul de gestionare a excepțiilor în Python? Alege 2 răspunsuri.",
      options: ["try", "catch", "except", "throw"],
      correct: [0, 2],
      explanation: "Python folosește try / except (nu catch/throw, care aparțin altor limbaje precum Java sau C#)."
    },
    {
      id: "py-009",
      chapter: "module-librarii",
      type: "true_false",
      question: "Instrucțiunea `import math` face disponibile toate funcțiile modulului math fără a mai fi nevoie de prefixul `math.`.",
      options: ["Adevărat", "Fals"],
      correct: 1,
      explanation: "Cu `import math`, funcțiile se apelează cu prefix: math.sqrt(9). Pentru a le folosi fără prefix ar trebui `from math import *`."
    },
    {
      id: "py-010",
      chapter: "structura-cod",
      type: "single",
      question: "În Python, blocurile de cod (corpul unui if, for, funcție etc.) sunt delimitate prin:",
      options: ["Acolade { }", "Indentare (spații/tab)", "Cuvântul cheie end", "Punct și virgulă"],
      correct: 1,
      explanation: "Python folosește indentarea consistentă pentru a delimita blocurile de cod, spre deosebire de limbaje precum C sau Java."
    }
  ]
};
