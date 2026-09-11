/* =====================================================================
   BANCA DE ÎNTREBĂRI — IT SPECIALIST: DATABASES
   Vezi data/python.js pentru explicația completă a formatului de întrebări,
   inclusiv câmpul opțional "table" (tabel afișat sub întrebare).
   ===================================================================== */

window.EXAM_DATA = window.EXAM_DATA || {};

window.EXAM_DATA.databases = {
  id: "databases",
  name: "Databases",
  shortLabel: "DB",
  accent: "#1E6A58",
  description: "Proiectarea și interogarea bazelor de date relaționale: DDL, DML, extragere și depanare de date.",

  CHAPTERS: [
    { id: "proiectare",      name: "Proiectarea bazelor de date" },
    { id: "ddl-obiecte",     name: "Administrarea obiectelor (DDL)" },
    { id: "extragere-date",  name: "Extragerea datelor (SELECT)" },
    { id: "manipulare-date", name: "Manipularea datelor (DML)" },
    { id: "depanare",        name: "Depanare și optimizare" }
  ],

  QUESTIONS: [
    {
      id: "db-001",
      chapter: "proiectare",
      type: "single",
      question: "Ce reprezintă o cheie primară (primary key) într-un tabel?",
      options: [
        "O coloană folosită doar pentru sortare",
        "O valoare/set de valori care identifică unic fiecare rând din tabel",
        "O coloană care poate conține valori NULL nelimitat",
        "Numele tabelului"
      ],
      correct: 1,
      explanation: "Cheia primară garantează unicitatea fiecărei înregistrări din tabel și nu poate fi NULL."
    },
    {
      id: "db-002",
      chapter: "proiectare",
      type: "true_false",
      question: "O cheie externă (foreign key) impune ca valoarea dintr-o coloană să existe deja ca valoare a cheii primare din tabelul referit.",
      options: ["Adevărat", "Fals"],
      correct: 0,
      explanation: "Cheia externă menține integritatea referențială între două tabele, legând un rând de o cheie primară existentă în alt tabel."
    },
    {
      id: "db-003",
      chapter: "ddl-obiecte",
      type: "single",
      question: "Ce comandă SQL este folosită pentru a crea un tabel nou?",
      code: "____ TABLE Clienti (\n  id INT PRIMARY KEY,\n  nume VARCHAR(50)\n);",
      options: ["CREATE", "INSERT", "ALTER", "UPDATE"],
      correct: 0,
      explanation: "CREATE TABLE definește structura unui tabel nou (coloane, tipuri de date, constrângeri)."
    },
    {
      id: "db-004",
      chapter: "ddl-obiecte",
      type: "multiple",
      question: "Care dintre următoarele sunt comenzi DDL (Data Definition Language)? Alege 2 răspunsuri.",
      options: ["CREATE", "SELECT", "ALTER", "INSERT"],
      correct: [0, 2],
      explanation: "CREATE și ALTER modifică structura bazei de date (DDL). SELECT și INSERT operează asupra datelor (DQL/DML)."
    },
    {
      id: "db-005",
      chapter: "extragere-date",
      type: "single",
      question: "Ai tabelul Angajati de mai jos. Ce returnează interogarea?",
      table: {
        caption: "Tabelul Angajati",
        headers: ["id", "nume", "salariu"],
        rows: [
          [1, "Popescu", 5200],
          [2, "Andronic", 6100],
          [3, "Croitoru", 4300],
          [4, "Balan", 5800]
        ]
      },
      code: "SELECT nume FROM Angajati\nWHERE salariu > 5000\nORDER BY nume ASC;",
      options: [
        "Toți angajații, sortați descrescător după salariu",
        "Andronic, Balan, Popescu",
        "Popescu, Andronic, Balan",
        "Eroare de sintaxă"
      ],
      correct: 1,
      explanation: "WHERE filtrează angajații cu salariu > 5000 (Popescu, Andronic, Balan), iar ORDER BY nume ASC îi sortează alfabetic crescător: Andronic, Balan, Popescu."
    },
    {
      id: "db-006",
      chapter: "extragere-date",
      type: "drag_drop",
      question: "Asociază fiecare clauză SQL cu rolul ei într-o interogare SELECT.",
      dragItems: [
        { id: "a", text: "WHERE" },
        { id: "b", text: "GROUP BY" },
        { id: "c", text: "JOIN" }
      ],
      dropZones: [
        { id: "z1", label: "Filtrează rândurile pe baza unei condiții", correctItemId: "a" },
        { id: "z2", label: "Grupează rândurile pentru funcții de agregare", correctItemId: "b" },
        { id: "z3", label: "Combină rânduri din două sau mai multe tabele", correctItemId: "c" }
      ],
      explanation: "WHERE filtrează, GROUP BY grupează pentru agregări (SUM, COUNT etc.), iar JOIN combină date din mai multe tabele."
    },
    {
      id: "db-007",
      chapter: "manipulare-date",
      type: "single",
      question: "Ce comandă SQL ștergem cu ea toate rândurile care îndeplinesc o condiție, fără a șterge tabelul?",
      options: ["DROP TABLE", "DELETE FROM", "TRUNCATE DATABASE", "REMOVE"],
      correct: 1,
      explanation: "DELETE FROM ... WHERE ... elimină rânduri specifice, spre deosebire de DROP TABLE care șterge întreg tabelul."
    },
    {
      id: "db-008",
      chapter: "manipulare-date",
      type: "true_false",
      question: "Comanda UPDATE fără o clauză WHERE va modifica toate rândurile din tabel.",
      options: ["Adevărat", "Fals"],
      correct: 0,
      explanation: "Fără WHERE, UPDATE se aplică pe toate rândurile tabelului — de aceea trebuie folosit cu atenție."
    },
    {
      id: "db-009",
      chapter: "depanare",
      type: "single",
      question: "Un utilizator primește eroarea de încălcare a constrângerii de tip UNIQUE. Care este cea mai probabilă cauză?",
      options: [
        "A încercat să insereze o valoare NULL",
        "A încercat să insereze o valoare deja existentă într-o coloană cu valori unice",
        "A folosit un tip de date greșit",
        "Tabelul nu are chei primare"
      ],
      correct: 1,
      explanation: "Constrângerea UNIQUE interzice valorile duplicate în coloana respectivă."
    },
    {
      id: "db-010",
      chapter: "depanare",
      type: "multiple",
      question: "Care dintre următoarele pot cauza rezultate lente la o interogare SELECT pe un tabel mare? Alege 2 răspunsuri.",
      options: [
        "Lipsa unui index pe coloana din WHERE",
        "Folosirea unui JOIN inutil de complex",
        "Folosirea unei chei primare",
        "Numele scurt al tabelului"
      ],
      correct: [0, 1],
      explanation: "Lipsa indexării și JOIN-urile complexe/nefiltrate sunt cauze frecvente de performanță slabă în interogări."
    }
  ]
};
