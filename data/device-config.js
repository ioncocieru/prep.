/* =====================================================================
   BANCA DE ÎNTREBĂRI — IT SPECIALIST: DEVICE CONFIGURATION AND MANAGEMENT
   Vezi data/python.js pentru explicația completă a formatului de întrebări.
   ===================================================================== */

window.EXAM_DATA = window.EXAM_DATA || {};

window.EXAM_DATA.deviceConfig = {
  id: "deviceConfig",
  name: "Device Configuration and Management",
  shortLabel: "DCM",
  accent: "#7C5CFF",
  description: "Instalarea, configurarea și depanarea dispozitivelor Windows: aplicații, periferice, date și securitate.",

  CHAPTERS: [
    { id: "instalare-config",   name: "Instalarea și configurarea Windows" },
    { id: "aplicatii-periferice", name: "Aplicații, funcții și periferice" },
    { id: "acces-date",         name: "Accesul și gestionarea datelor" },
    { id: "securitate-dispozitiv", name: "Securitatea dispozitivelor" },
    { id: "management-depanare", name: "Gestionare și depanare Windows" }
  ],

  QUESTIONS: [
    {
      id: "dcm-001",
      chapter: "instalare-config",
      type: "single",
      question: "Care instrument Windows este folosit pentru a crea o partiție nouă pe un disc?",
      options: ["Task Manager", "Disk Management", "Device Manager", "Event Viewer"],
      correct: 1,
      explanation: "Disk Management permite crearea, redimensionarea și formatarea partițiilor de disc."
    },
    {
      id: "dcm-002",
      chapter: "instalare-config",
      type: "true_false",
      question: "O adresă IP de tip APIPA (169.254.x.x) indică faptul că dispozitivul a primit cu succes o adresă de la un server DHCP.",
      options: ["Adevărat", "Fals"],
      correct: 1,
      explanation: "O adresă APIPA apare atunci când dispozitivul NU a reușit să contacteze un server DHCP și își auto-atribuie o adresă temporară."
    },
    {
      id: "dcm-003",
      chapter: "aplicatii-periferice",
      type: "single",
      question: "Din ce locație implicită Windows instalează aplicații descărcate din Microsoft Store?",
      options: ["C:\\Program Files", "C:\\Windows\\System32", "C:\\Program Files\\WindowsApps", "C:\\Users\\Public"],
      correct: 2,
      explanation: "Aplicațiile din Microsoft Store (aplicații UWP) se instalează implicit în C:\\Program Files\\WindowsApps."
    },
    {
      id: "dcm-004",
      chapter: "aplicatii-periferice",
      type: "multiple",
      question: "Care dintre următoarele sunt periferice de intrare (input)? Alege 2 răspunsuri.",
      options: ["Tastatură", "Monitor", "Microfon", "Boxe"],
      correct: [0, 2],
      explanation: "Tastatura și microfonul trimit date către calculator (input); monitorul și boxele afișează/redau date (output)."
    },
    {
      id: "dcm-005",
      chapter: "acces-date",
      type: "single",
      question: "Ce tehnologie Windows permite criptarea unui întreg volum de disc?",
      options: ["EFS (Encrypting File System)", "BitLocker", "Windows Defender", "NTFS Permissions"],
      correct: 1,
      explanation: "BitLocker criptează întregul volum, în timp ce EFS criptează fișiere sau foldere individuale."
    },
    {
      id: "dcm-006",
      chapter: "acces-date",
      type: "drag_drop",
      question: "Asociază fiecare tip de backup cu descrierea corectă.",
      dragItems: [
        { id: "a", text: "Backup complet (full)" },
        { id: "b", text: "Backup incremental" },
        { id: "c", text: "Backup diferențial" }
      ],
      dropZones: [
        { id: "z1", label: "Copiază toate datele, indiferent de backup-urile anterioare", correctItemId: "a" },
        { id: "z2", label: "Copiază doar datele modificate de la ultimul backup de orice tip", correctItemId: "b" },
        { id: "z3", label: "Copiază datele modificate de la ultimul backup complet", correctItemId: "c" }
      ],
      explanation: "Full copiază tot; incremental copiază doar schimbările față de ultimul backup (complet sau incremental); diferențial copiază schimbările față de ultimul backup complet."
    },
    {
      id: "dcm-007",
      chapter: "securitate-dispozitiv",
      type: "true_false",
      question: "User Account Control (UAC) solicită confirmarea utilizatorului înainte ca o aplicație să facă modificări ce necesită drepturi de administrator.",
      options: ["Adevărat", "Fals"],
      correct: 0,
      explanation: "UAC este un mecanism de securitate care previne modificările neautorizate cerând confirmare explicită pentru acțiuni administrative."
    },
    {
      id: "dcm-008",
      chapter: "securitate-dispozitiv",
      type: "single",
      question: "Care sistem de fișiere Windows suportă permisiuni de securitate la nivel de fișier/folder (NTFS permissions)?",
      options: ["FAT32", "exFAT", "NTFS", "CDFS"],
      correct: 2,
      explanation: "NTFS suportă liste de control al accesului (ACL) și permisiuni detaliate, spre deosebire de FAT32 sau exFAT."
    },
    {
      id: "dcm-009",
      chapter: "management-depanare",
      type: "single",
      question: "Ce instrument Windows arată jurnalul evenimentelor de sistem, aplicație și securitate pentru depanare?",
      options: ["Event Viewer", "Control Panel", "File Explorer", "Task Scheduler"],
      correct: 0,
      explanation: "Event Viewer înregistrează evenimente de sistem, aplicații și securitate, utile pentru diagnosticarea problemelor."
    },
    {
      id: "dcm-010",
      chapter: "management-depanare",
      type: "multiple",
      question: "Care dintre următoarele sunt pași corecți pentru a depana o conexiune de rețea care nu funcționează? Alege 2 răspunsuri.",
      options: [
        "Verificarea cablului fizic sau a conexiunii Wi-Fi",
        "Ștergerea contului de utilizator",
        "Rularea comenzii ipconfig pentru a verifica adresa IP",
        "Reinstalarea sistemului de operare"
      ],
      correct: [0, 2],
      explanation: "Verificarea conexiunii fizice și a configurației IP (ipconfig) sunt primii pași standard de depanare a rețelei."
    }
  ]
};
