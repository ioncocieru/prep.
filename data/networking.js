/* =====================================================================
   BANCA DE ÎNTREBĂRI — IT SPECIALIST: NETWORKING
   Vezi data/python.js pentru explicația completă a formatului de întrebări.
   ===================================================================== */

window.EXAM_DATA = window.EXAM_DATA || {};

window.EXAM_DATA.networking = {
  id: "networking",
  name: "Networking",
  shortLabel: "NET",
  accent: "#E8A33D",
  description: "Concepte de rețea, infrastructură, echipamente, protocoale și depanare în medii cu fir și wireless.",

  CHAPTERS: [
    { id: "concepte-retea",   name: "Concepte de rețea" },
    { id: "infrastructura",   name: "Infrastructura de rețea" },
    { id: "echipamente",      name: "Echipamente de rețea" },
    { id: "protocoale",       name: "Protocoale și servicii" },
    { id: "depanare-unelte",  name: "Depanare și instrumente" }
  ],

  QUESTIONS: [
    {
      id: "net-001",
      chapter: "concepte-retea",
      type: "single",
      question: "Într-o rețea de tip client-server, cine gestionează în mod centralizat conturile de utilizator și permisiunile?",
      options: ["Fiecare stație de lucru individual", "Un server dedicat (ex. Active Directory)", "Routerul", "Switch-ul"],
      correct: 1,
      explanation: "În arhitectura client-server, un server central (adesea rulând Active Directory) gestionează conturile și permisiunile."
    },
    {
      id: "net-002",
      chapter: "concepte-retea",
      type: "true_false",
      question: "Într-o rețea peer-to-peer, fiecare dispozitiv gestionează propriile resurse, fără un server central.",
      options: ["Adevărat", "Fals"],
      correct: 0,
      explanation: "Rețelele peer-to-peer sunt descentralizate: fiecare calculator acționează atât ca client, cât și ca server pentru resursele proprii."
    },
    {
      id: "net-003",
      chapter: "concepte-retea",
      type: "multiple",
      question: "Care dintre următoarele sunt tipuri de transmisie a datelor în rețea? Alege 2 răspunsuri.",
      options: ["Unicast", "Broadcast", "Firewall", "Subnet"],
      correct: [0, 1],
      explanation: "Unicast (1-la-1) și broadcast (1-la-toți) sunt tipuri de transmisie; firewall și subnet nu sunt tipuri de transmisie."
    },
    {
      id: "net-004",
      chapter: "infrastructura",
      type: "single",
      question: "Ce clasă de adrese private este 10.0.0.0 – 10.255.255.255?",
      options: ["Clasa A privată", "Clasa B privată", "Clasa C privată", "Adrese publice"],
      correct: 0,
      explanation: "Intervalul 10.0.0.0/8 face parte din adresele private de Clasă A, destinate rețelelor mari."
    },
    {
      id: "net-005",
      chapter: "infrastructura",
      type: "drag_drop",
      question: "Asociază fiecare topologie de rețea cu descrierea ei.",
      dragItems: [
        { id: "a", text: "Stea (star)" },
        { id: "b", text: "Magistrală (bus)" },
        { id: "c", text: "Inel (ring)" }
      ],
      dropZones: [
        { id: "z1", label: "Toate dispozitivele se conectează la un switch/hub central", correctItemId: "a" },
        { id: "z2", label: "Toate dispozitivele partajează un singur cablu principal", correctItemId: "b" },
        { id: "z3", label: "Fiecare dispozitiv este conectat la exact două vecine, formând un cerc", correctItemId: "c" }
      ],
      explanation: "Topologia stea folosește un punct central; magistrala folosește un singur cablu partajat; inelul conectează dispozitivele într-un cerc închis."
    },
    {
      id: "net-006",
      chapter: "echipamente",
      type: "single",
      question: "Ce dispozitiv de rețea direcționează pachetele de date între rețele diferite, pe baza adreselor IP?",
      options: ["Switch", "Router", "Hub", "Repeater"],
      correct: 1,
      explanation: "Router-ul lucrează la nivelul 3 (rețea) și direcționează traficul între rețele diferite folosind adrese IP."
    },
    {
      id: "net-007",
      chapter: "echipamente",
      type: "true_false",
      question: "Un switch nemanaged (unmanaged) permite configurarea VLAN-urilor prin interfață web.",
      options: ["Adevărat", "Fals"],
      correct: 1,
      explanation: "Switch-urile nemanaged funcționează plug-and-play, fără opțiuni de configurare precum VLAN-uri; acestea sunt disponibile doar la switch-urile managed."
    },
    {
      id: "net-008",
      chapter: "protocoale",
      type: "single",
      question: "Care protocol este responsabil pentru traducerea numelor de domenii (ex. exemplu.com) în adrese IP?",
      options: ["DHCP", "DNS", "FTP", "SMTP"],
      correct: 1,
      explanation: "DNS (Domain Name System) traduce numele de domenii ușor de reținut în adrese IP numerice."
    },
    {
      id: "net-009",
      chapter: "protocoale",
      type: "multiple",
      question: "Care dintre următoarele sunt straturi (layere) ale modelului TCP/IP? Alege 2 răspunsuri.",
      options: ["Aplicație", "Transport", "Prezentare", "Sesiune"],
      correct: [0, 1],
      explanation: "Modelul TCP/IP are 4 straturi: Aplicație, Transport, Internet și Acces la rețea. Prezentare și Sesiune aparțin modelului OSI (7 straturi), nu TCP/IP."
    },
    {
      id: "net-010",
      chapter: "depanare-unelte",
      type: "single",
      question: "Ce comandă se folosește pentru a verifica dacă un host de la distanță este accesibil, trimițând pachete ICMP?",
      options: ["ipconfig", "ping", "netstat", "tracert"],
      correct: 1,
      explanation: "ping trimite pachete ICMP Echo Request și așteaptă răspuns, verificând conectivitatea de bază cu un host."
    },
    {
      id: "net-011",
      chapter: "depanare-unelte",
      type: "multiple",
      question: "Care dintre următoarele unelte ajută la depanarea unei probleme de conectivitate de rețea? Alege 2 răspunsuri.",
      options: ["tracert", "netstat", "Notepad", "Paint"],
      correct: [0, 1],
      explanation: "tracert arată traseul pachetelor către o destinație, iar netstat arată conexiunile de rețea active — ambele sunt unelte de depanare."
    }
  ]
};
