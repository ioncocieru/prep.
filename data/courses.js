/* =====================================================================
   CURSURI — capitole, video-uri și resurse pentru fiecare examen.

   VIDEO din GitHub:   { title: "Titlu", file: "videos/deviceConfig/domain1/01-instalare.mp4" }
   VIDEO de pe YouTube:{ title: "Titlu", youtube: "https://youtu.be/XXXXXXXXXXX" }
   RESURSĂ de descărcat:{ title: "Titlu", file: "resources/deviceConfig/Workbook.pdf" }

   // varianta 1: doar linkul din src="..."
{ title: "Lecția 1", embed: "https://www.viddler.com/embed/XXXXXXXX" },

// varianta 2: tot codul <iframe>, între ghilimele oblice (backtick)
{ title: "Lecția 2", embed: `<iframe src="https://www.viddler.com/embed/XXXXXXXX" width="640" height="360"></iframe>` },



   Ordinea de aici = ordinea pe site. Cheile: python, databases, deviceConfig, networking
   ===================================================================== */
window.COURSE_DATA = {

  deviceConfig: {
    resources: [
      { title: "Student Workbook (PDF)",  file: "resources/deviceConfig/Device_Configuration_and_Management_Student_Workbook.pdf" },
      { title: "Support Files (ZIP)",     file: "resources/deviceConfig/Device_Configuration_and_Management_Support_Files.zip" },
      { title: "Întrebări Device (Word)", file: "resources/deviceConfig/device intrebari.docx" },
      { title: "Răspunsuri Device (Word)", file: "resources/deviceConfig/raspunsuri device.docx" },
      { title: "in.docx (Word)",          file: "resources/deviceConfig/in.docx" }
    ],
    chapters: [
      { title: "Domain 1 — Windows Installation and Configuration", videos: [
        { title: "1.1", file: "videos/deviceConfig/Domain1/D1001.mp4" },
        { title: "1.2", file: "videos/deviceConfig/Domain1/D1002.mp4" },
        { title: "1.3", file: "videos/deviceConfig/Domain1/D1003.mp4" },
        { title: "1.4", file: "videos/deviceConfig/Domain1/D1004.mp4" },
        { title: "1.5 ", file: "videos/deviceConfig/Domain1/D1005.mp4" },
        { title: "1.6", file: "videos/deviceConfig/Domain1/D1006.mp4" },
        { title: "1.7", file: "videos/deviceConfig/Domain1/D1007.mp4" },
        { title: "1.8", file: "videos/deviceConfig/Domain1/D1008.mp4" },
        { title: "1.9", file: "videos/deviceConfig/Domain1/D1009.mp4" },
        { title: "1.10", file: "videos/deviceConfig/Domain1/D1010.mp4" },
        { title: "1.11", file: "videos/deviceConfig/Domain1/D1011.mp4" },
        { title: "1.12", file: "videos/deviceConfig/Domain1/D1012.mp4" },
        { title: "1.13", file: "videos/deviceConfig/Domain1/D1013.mp4" },
        { title: "1.14", file: "videos/deviceConfig/Domain1/D1014.mp4" },
        { title: "1.15", file: "videos/deviceConfig/Domain1/D1015.mp4" },
        { title: "1.16", file: "videos/deviceConfig/Domain1/D1016.mp4" },
        { title: "1.17", file: "videos/deviceConfig/Domain1/D1017.mp4" },
      ]},
      { title: "Domain 2 — Application and Peripheral Management", videos: [
        { title: "2.1", file: "videos/deviceConfig/Domain2/D2001.mp4" },
        { title: "2.2", file: "videos/deviceConfig/Domain2/D2002.mp4" },
        { title: "2.3", file: "videos/deviceConfig/Domain2/D2003.mp4" },
        { title: "2.4", file: "videos/deviceConfig/Domain2/D2004.mp4" },
        { title: "2.5", file: "videos/deviceConfig/Domain2/D2005.mp4" },
        { title: "2.6", file: "videos/deviceConfig/Domain2/D2006.mp4" },
        { title: "2.7", file: "videos/deviceConfig/Domain2/D2007.mp4" },
        { title: "2.8", file: "videos/deviceConfig/Domain2/D2008.mp4" },


      ]},
      { title: "Domain 3 — Data Access and Management", videos: [
        { title: "3.1", file: "videos/deviceConfig/Domain3/D3001.mp4" },
        { title: "3.2", file: "videos/deviceConfig/Domain3/D3002.mp4" },
        { title: "3.3", file: "videos/deviceConfig/Domain3/D3003.mp4" },
        { title: "3.4", file: "videos/deviceConfig/Domain3/D3004.mp4" },
        { title: "3.5", file: "videos/deviceConfig/Domain3/D3005.mp4" },
        { title: "3.6", file: "videos/deviceConfig/Domain3/D3006.mp4" },
        { title: "3.7", file: "videos/deviceConfig/Domain3/D3007.mp4" },
        { title: "3.8", file: "videos/deviceConfig/Domain3/D3008.mp4" },


      ] },
      { title: "Domain 4 — Device Security", videos: [
        { title: "4.1", file: "videos/deviceConfig/Domain4/D4001.mp4" },
        { title: "4.2", file: "videos/deviceConfig/Domain4/D4002.mp4" },     
        { title: "4.3", file: "videos/deviceConfig/Domain4/D4003.mp4" },
        { title: "4.4", file: "videos/deviceConfig/Domain4/D4004.mp4" },
        { title: "4.5", file: "videos/deviceConfig/Domain4/D4005.mp4" },
        { title: "4.6", file: "videos/deviceConfig/Domain4/D4006.mp4" },
        { title: "4.7", file: "videos/deviceConfig/Domain4/D4007.mp4" },
        { title: "4.8", file: "videos/deviceConfig/Domain4/D4008.mp4" },
        { title: "4.9", file: "videos/deviceConfig/Domain4/D4009.mp4" },
        { title: "4.10", file: "videos/deviceConfig/Domain4/D4010.mp4" },

      ] },
      { title: "Domain 5 — Troubleshooting", videos: [
        { title: "5.1", file: "videos/deviceConfig/Domain5/D5001.mp4" },
        { title: "5.2", file: "videos/deviceConfig/Domain5/D5002.mp4" },
        { title: "5.3", file: "videos/deviceConfig/Domain5/D5003.mp4" },
        { title: "5.4", file: "videos/deviceConfig/Domain5/D5004.mp4" },
        { title: "5.5", file: "videos/deviceConfig/Domain5/D5005.mp4" },
        { title: "5.6", file: "videos/deviceConfig/Domain5/D5006.mp4" },
        { title: "5.7", file: "videos/deviceConfig/Domain5/D5007.mp4" },
        { title: "5.8", file: "videos/deviceConfig/Domain5/D5008.mp4" },
        { title: "5.9", file: "videos/deviceConfig/Domain5/D5009.mp4" },
        { title: "5.10", file: "videos/deviceConfig/Domain5/D5010.mp4" },
        { title: "5.11", file: "videos/deviceConfig/Domain5/D5011.mp4" },
        { title: "5.12", file: "videos/deviceConfig/Domain5/D5012.mp4" },
        { title: "5.13", file: "videos/deviceConfig/Domain5/D5013.mp4" },
        { title: "5.14", file: "videos/deviceConfig/Domain5/D5014.mp4" },
        { title: "5.15", file: "videos/deviceConfig/Domain5/D5015.mp4" },


      ] }
    ]
  },

python: {
  resources: [
    { title: "ITS OD 303 Python (PDF)",                file: "resources/python/ITS OD 303 Python 0225 (1).pdf" },
    { title: "Microsoft certification 98-381 (Word)",  file: "resources/python/microsoft-certification-98-381.docx" },
    { title: "MTA 19 (PDF)",                           file: "resources/python/MTA 19.pdf" },
    { title: "MTA 20 (PDF)",                           file: "resources/python/MTA 20.pdf" },
    { title: "MTA 21 (PDF)",                           file: "resources/python/MTA 21.pdf" },
    { title: "MTA 22 (PDF)",                           file: "resources/python/MTA 22.pdf" },
    { title: "MTA 24 (PDF)",                           file: "resources/python/MTA 24.pdf" },
    { title: "MTA 40 (PDF)",                           file: "resources/python/MTA 40.pdf" },
    { title: "Python Certiport (PDF)",                 file: "resources/python/Python_Certiport.pdf" },
    { title: "TESTE Python (PDF)",                     file: "resources/python/TESTE python.pdf" }
  ],
  chapters: [
    { title: "Video Online", videos: [
      { title: "Lecția EN", youtube: "https://youtu.be/s3IvdkCq2_c" },
      { title: "Lecția RU", youtube: "https://youtu.be/34Rp6KVGIEM" }
    ]}
  ]
},

databases: {
  resources: [
    { title: "1.1 Temă — Teoria",               file: "resources/databases/1.1 Tema Teoria.docx" },
    { title: "1.2 Temă — Teoria",               file: "resources/databases/1.2 Tema Teoria.docx" },
    { title: "1.3 Temă — Teoria",               file: "resources/databases/1.3Tema Teoria.docx" },
    { title: "1.4 Temă — Teoria",               file: "resources/databases/1.4Tema Teoria.docx" },
    { title: "1.5 Normalize a database",        file: "resources/databases/1.5 Normalize a database.docx" },
    { title: "1.6 Temă — Teoria (PDF)",         file: "resources/databases/1.6 Tema  teoria.pdf" },
    { title: "2.0 Teoria (PDF)",                file: "resources/databases/2.0 Teoria.pdf" },
    { title: "2.1 - 2.2 Temă",                  file: "resources/databases/2.1 2.2 Temadocx.docx" },
    { title: "2.3 Temă",                        file: "resources/databases/2.3 Tema.docx" },
    { title: "2.4 Temă",                        file: "resources/databases/2.4 Tema.docx" },
    { title: "3.1 JOIN",                        file: "resources/databases/3.1 join.docx" },
    { title: "3.2 Temă",                        file: "resources/databases/3.2 Tema.docx" },
    { title: "3.3 Temă",                        file: "resources/databases/3.3 Tema.docx" },
    { title: "4.1 INSERT",                      file: "resources/databases/4.1 INSERT.docx" },
    { title: "4.2 UPDATE",                      file: "resources/databases/4.2 UPDATE.docx" },
    { title: "4.3 DELETE",                      file: "resources/databases/4.3 DELETE.docx" },
    { title: "5.1, 5.2, 5.3 Erori",             file: "resources/databases/5.1, 5_2, 5_3 Erori.docx" },
    { title: "Exemple teste DB (PDF)",          file: "resources/databases/Exemple teste DB.pdf" },
    { title: "GMetrix RS",                      file: "resources/databases/GIMETRIX RS.docx" },
    { title: "ITS OD 201 Databases (PDF)",      file: "resources/databases/ITS OD 201 Databases 0525.pdf" },
    { title: "Test capitolul 2 — 96 întrebări", file: "resources/databases/Test_capitolul_2_96_ntrebari.docx" },
    { title: "TESTE (PDF)",                     file: "resources/databases/TESTE.pdf" }
  ],
  chapters: [
    { title: "1. Proiectarea bazelor de date", videos: [
      { title: "Database Design Course (curs complet, engleză)", youtube: "https://youtu.be/ztHopE5Wnpc" },
      { title: "Tables & Keys (Mike Dane)",              youtube: "https://youtu.be/HXV3zeQKqGY", start: 1390 },
      { title: "ER Diagrams — introducere",              youtube: "https://youtu.be/HXV3zeQKqGY", start: 13332 },
      { title: "Cum proiectezi o diagramă ER",           youtube: "https://youtu.be/HXV3zeQKqGY", start: 14153 },
      { title: "Din diagrama ER în schemă (tabele)",     youtube: "https://youtu.be/HXV3zeQKqGY", start: 14914 }
    ]},
    { title: "2. Administrarea obiectelor (DDL)", videos: [
      { title: "SQL Basics",                    youtube: "https://youtu.be/HXV3zeQKqGY", start: 2611 },
      { title: "Creating Tables",               youtube: "https://youtu.be/HXV3zeQKqGY", start: 4549 },
      { title: "Constraints",                   youtube: "https://youtu.be/HXV3zeQKqGY", start: 5897 },
      { title: "On Delete (chei străine)",      youtube: "https://youtu.be/HXV3zeQKqGY", start: 12112 },
      { title: "Triggers",                      youtube: "https://youtu.be/HXV3zeQKqGY", start: 12605 }
    ]},
    { title: "3. Extragerea datelor (SELECT, JOIN)", videos: [
      { title: "Basic Queries",                 youtube: "https://youtu.be/HXV3zeQKqGY", start: 6971 },
      { title: "Functions",                     youtube: "https://youtu.be/HXV3zeQKqGY", start: 8784 },
      { title: "Wildcards (LIKE)",              youtube: "https://youtu.be/HXV3zeQKqGY", start: 9913 },
      { title: "Union",                         youtube: "https://youtu.be/HXV3zeQKqGY", start: 10433 },
      { title: "Joins",                         youtube: "https://youtu.be/HXV3zeQKqGY", start: 10896 },
      { title: "Nested Queries (subinterogări)", youtube: "https://youtu.be/HXV3zeQKqGY", start: 11509 }
    ]},
    { title: "4. Manipularea datelor (INSERT, UPDATE, DELETE)", videos: [
      { title: "Inserting Data",                youtube: "https://youtu.be/HXV3zeQKqGY", start: 5465 },
      { title: "Update & Delete",               youtube: "https://youtu.be/HXV3zeQKqGY", start: 6491 }
    ]},
    { title: "5. Depanare și optimizare", videos: [
      { title: "Harvard CS50 SQL — curs complet (views, indexuri, optimizare)", youtube: "https://youtu.be/WXk7yDqsKxs" }
    ]},
    { title: "Video suplimentare", videos: [
      { title: "SQL Course for Beginners [Full Course]",        youtube: "https://youtu.be/7S_tz1z_5bA" },
      { title: "SQL Tutorial — Full Database Course (integral)", youtube: "https://youtu.be/HXV3zeQKqGY" }
    ]}
  ]
},

  networking: {
    resources: [],
    chapters: [
      { title: "Practical Networking Online Course", videos: [
        { title: "Network Devices - Hosts, IP Addresses, Networks - Networking Fundamentals - Lesson 1a", youtube: "https://youtu.be/bj-Yfakjllc?list=PLIFyRwBY_4bRLmKfP1KnZA6rZbRHtxmXi" },
        { title: "Hub, Bridge, Switch, Router - Network Devices - Networking Fundamentals - Lesson 1b", youtube: "https://youtu.be/H7-NR3Q3BeI?list=PLIFyRwBY_4bRLmKfP1KnZA6rZbRHtxmXi" },
        { title: "OSI Model: A Practical Perspective - Networking Fundamentals - Lesson 2a", youtube: "https://youtu.be/LkolbURrtTs?list=PLIFyRwBY_4bRLmKfP1KnZA6rZbRHtxmXi" },
        { title: "OSI Model: A Practical Perspective - Part 2 - Networking Fundamentals - Lesson 2", youtube: "https://youtu.be/0aGqGKrRE0g?list=PLIFyRwBY_4bRLmKfP1KnZA6rZbRHtxmXi" },
        { title: "Everything Hosts do to speak on the Internet - Part 1 - Networking Fundamentals - Lesson 3", youtube: "https://youtu.be/gYN2qN11-wE?list=PLIFyRwBY_4bRLmKfP1KnZA6rZbRHtxmXi" },
        { title: "Everything Hosts do to speak on the Internet - Part 2 - Networking Fundamentals - Lesson 3", youtube: "https://youtu.be/JI9Zm2tbUoE?list=PLIFyRwBY_4bRLmKfP1KnZA6rZbRHtxmXi" },
        { title: "Everything Switches do - Part 1 - Networking Fundamentals - Lesson 4", youtube: "https://youtu.be/AhOU2eOpmX0?list=PLIFyRwBY_4bRLmKfP1KnZA6rZbRHtxmXi" },
        { title: "Everything Switches do - Part 2 - Networking Fundamentals - Lesson 4", youtube: "https://youtu.be/G7GyWjJtjNs?list=PLIFyRwBY_4bRLmKfP1KnZA6rZbRHtxmXi" },
        { title: "Everything Routers do - Part 1 - Networking Fundamentals - Lesson 5", youtube: "https://youtu.be/AzXys5kxpAM?list=PLIFyRwBY_4bRLmKfP1KnZA6rZbRHtxmXi" },
        { title: "Everything Routers do - Part 2 - How Routers forward Packets - Networking Fundamentals - Lesson 5", youtube: "https://youtu.be/Ep-x_6kggKA?list=PLIFyRwBY_4bRLmKfP1KnZA6rZbRHtxmXi" },
        { title: "Router Hierarchies and Route Summarization - Networking Fundamentals - Lesson 5 - Part 3", youtube: "https://youtu.be/zmxLg4jV0ts?list=PLIFyRwBY_4bRLmKfP1KnZA6rZbRHtxmXi" },
        { title: "Network Protocols - ARP, FTP, SMTP, HTTP, SSL, TLS, HTTPS, DNS, DHCP - Networking Fundamentals - L6", youtube: "https://youtu.be/E5bSumTAHZE?list=PLIFyRwBY_4bRLmKfP1KnZA6rZbRHtxmXi" },
        { title: "How Data moves through the Internet - Networking Fundamentals", youtube: "https://youtu.be/YJGGYKAV4pA?list=PLIFyRwBY_4bRLmKfP1KnZA6rZbRHtxmXi" },
        { title: "HTTP vs HTML: Unveiling Network Protocols using Telnet", youtube: "https://youtu.be/ArXMa111x7A?list=PLIFyRwBY_4bRLmKfP1KnZA6rZbRHtxmXi" },

      ]}
    ]
  }
};
