/* =====================================================================
   CURSURI — capitole, video-uri și resurse pentru fiecare examen.

   Tipuri de video (alege unul pe linie):
     { title: "Titlu", drive:   "https://drive.google.com/file/d/ID/view" }   ← Google Drive
     { title: "Titlu", youtube: "https://youtu.be/XXXXXXXXXXX" }               ← YouTube (opțional: start: 90)
     { title: "Titlu", embed:   "https://.../embed/xxxx" }                     ← Viddler, Vimeo etc.
     { title: "Titlu", file:    "videos/exam/video.mp4" }                      ← fișier din GitHub

   Resurse de descărcat (link Drive sau fișier din GitHub):
     { title: "Titlu", file: "https://drive.google.com/file/d/ID/view" }

   Cum iei linkul din Drive: clic dreapta pe fișier → Share → "Anyone with the link"
   (Oricine are linkul, rol Viewer) → Copy link.

   Placeholdere: caută "LINK_DRIVE_" (video-uri) și "PUNE_LINK" (resurse) și înlocuiește
   tot textul dintre ghilimele cu linkul tău.
   Ordinea de aici = ordinea pe site. Cheile: python, databases, deviceConfig, networking
   ===================================================================== */
   window.COURSE_DATA = {

    deviceConfig: {
      resources: [
        { title: "Student Workbook (PDF)",  file: "https://drive.google.com/file/d/1WDEIktTq9-soUxvO5zOS0-X35EnDbvGq/view?usp=sharing" },
        { title: "Support Files (ZIP)",     file: "https://drive.google.com/file/d/1BLcuhjv0XLWJ539STbUjXfwlakJS_VnQ/view?usp=drive_link" },
        { title: "Întrebări Device (Word)", file: "https://docs.google.com/document/d/1dF3YK2euUQz7VvYjU3yTVFIIvX2e9TSB/edit?usp=drive_link&ouid=110661342947742467018&rtpof=true&sd=true" },
        { title: "Răspunsuri Device (Word)", file: "https://docs.google.com/document/d/1DODUvRQZGIbTPUXnq7fe-PDPawiGYqyT/edit?usp=drive_link&ouid=110661342947742467018&rtpof=true&sd=true" },
        { title: "in.docx (Word)",          file: "https://docs.google.com/document/d/1mRa20RrJv35pGsOUhDTgcHzqBlMV9LQM/edit?usp=drive_link&ouid=110661342947742467018&rtpof=true&sd=true" }
      ],
      chapters: [
        { title: "Domain 1 — Windows Installation and Configuration", videos: [
          { title: "1.1", drive: "https://drive.google.com/file/d/1LuvbcjPxHSbfuQqnPMY0dJLq5f4UUdFB/view?usp=drive_link" },
          { title: "1.2", drive: "https://drive.google.com/file/d/1Z_XEpRgjou9jH55npsaRo3Jl1iSq6Tyz/view?usp=drive_link" },
          { title: "1.3", drive: "https://drive.google.com/file/d/1P88U8FsEOXFfz2PloV-qo9XPjfJmmQiY/view?usp=drive_link" },
          { title: "1.4", drive: "https://drive.google.com/file/d/1E6RNnLjqf0vxiliVvZC1HIwgYAygSrRR/view?usp=drive_link" },
          { title: "1.5 ", drive: "https://drive.google.com/file/d/1_cx9sQuuGStGsc15uOuljNn6Z-esA0VX/view?usp=drive_link" },
          { title: "1.6", drive: "https://drive.google.com/file/d/15LyoxHTHpM1vq3dPS_4UcquXERjybDhu/view?usp=drive_link" },
          { title: "1.7", drive: "https://drive.google.com/file/d/167F6a2fq7HI4MJc2fsn3X7IO5oGbiju8/view?usp=drive_link" },
          { title: "1.8", drive: "https://drive.google.com/file/d/11gYQg9GYm_Wv4i1hq5G_EMgL_uQZZJKT/view?usp=drive_link" },
          { title: "1.9", drive: "https://drive.google.com/file/d/1PEqVJvAolksNa9p2q-H3FATeYpCewCW6/view?usp=drive_link" },
          { title: "1.10", drive: "https://drive.google.com/file/d/1jMm_gNF9CWfJyI4j2E9S3JrC6R4ivHQe/view?usp=drive_link" },
          { title: "1.11", drive: "https://drive.google.com/file/d/1srCik58hyyd0gos0jdwnWN_YSCefS6xK/view?usp=drive_link" },
          { title: "1.12", drive: "https://drive.google.com/file/d/1c0hQf0VRJABswlHMcmFVbVT7OGTpW2S0/view?usp=drive_link" },
          { title: "1.13", drive: "https://drive.google.com/file/d/1FB7vmMEnW96fWlMd1SR6Ca0AJAwpxTCG/view?usp=drive_link" },
          { title: "1.14", drive: "https://drive.google.com/file/d/1m34RG2wt74NEPQLxrvu2VRHt015-aq8B/view?usp=drive_link" },
          { title: "1.15", drive: "https://drive.google.com/file/d/17UbJ7AvcflW-0RdEAsZocI-eWinriB2f/view?usp=drive_link" },
          { title: "1.16", drive: "https://drive.google.com/file/d/1oY6deCF0JVY1jLYciw47jbI-QJfzWxAb/view?usp=drive_link" },
          { title: "1.17", drive: "https://drive.google.com/file/d/1b7sUU9lOiz4uS5s02yq4FwnemwxQ2r2L/view?usp=drive_link" },
        ]},
        { title: "Domain 2 — Application and Peripheral Management", videos: [
          { title: "2.1", drive: "https://drive.google.com/file/d/19j8uhbAKbdHrOJN8IeHJ_uJziylc9KYI/view?usp=drive_link" },
          { title: "2.2", drive: "https://drive.google.com/file/d/1rVS3ufTNY6NMyQSOeDSgOSedZy-eCkuE/view?usp=drive_link" },
          { title: "2.3", drive: "https://drive.google.com/file/d/1KGYWvi8w18QjoBK9sqnwG_a1MkGxI-m_/view?usp=drive_link" },
          { title: "2.4", drive: "https://drive.google.com/file/d/1hAHPLSg3wuN_4Nryj9d5rYJfFTqWnJkL/view?usp=drive_link" },
          { title: "2.5", drive: "https://drive.google.com/file/d/1rko1Vro47ISJgIM129Kwct3xU6DGfIAR/view?usp=drive_link" },
          { title: "2.6", drive: "https://drive.google.com/file/d/1vnnTiqv1ZIX6jQdGwZD1lk-sEBSVKJbL/view?usp=drive_link" },
          { title: "2.7", drive: "https://drive.google.com/file/d/1s1OF_UntJ3YEqE7wVFkOMds0rng6Dj6V/view?usp=drive_link" },
          { title: "2.8", drive: "https://drive.google.com/file/d/1GUShU_zhOmDTQ4ilnxk6uC4Ur0iPNvzh/view?usp=drive_link" },
  
  
        ]},
        { title: "Domain 3 — Data Access and Management", videos: [
          { title: "3.1", drive: "https://drive.google.com/file/d/1oRQpIX7fRPq6KhZ5Gc9h2dcsA1AJQ7gx/view?usp=drive_link" },
          { title: "3.2", drive: "https://drive.google.com/file/d/1TSju9YCZ97biPgcUYuzzxSJtScXT9VCA/view?usp=drive_link" },
          { title: "3.3", drive: "https://drive.google.com/file/d/1DGwZT2Onk7m4xQlImpukbvFcMd8XptuH/view?usp=drive_link" },
          { title: "3.4", drive: "https://drive.google.com/file/d/13w51Kh6U43CLhbohlj5XkhmlgsyNEl9N/view?usp=drive_link" },
          { title: "3.5", drive: "https://drive.google.com/file/d/1-iNjNBREWPkepfqvztTJzK0_oevaU4Tw/view?usp=drive_link" },
          { title: "3.6", drive: "https://drive.google.com/file/d/11sadqPMo_BpkAzJ_T_9XIAItGotyyxkl/view?usp=drive_link" },
          { title: "3.7", drive: "https://drive.google.com/file/d/180M2TWVB1C-MfqhTp_EjEpsi6TKqrCiZ/view?usp=drive_link" },
          { title: "3.8", drive: "https://drive.google.com/file/d/1ZAWNaTrPJTeHrWUh2h7Os0WnGs1OtGIj/view?usp=drive_link" },
  
  
        ] },
        { title: "Domain 4 — Device Security", videos: [
          { title: "4.1", drive: "https://drive.google.com/file/d/1bWTNZfMNPwtQVNH-JsLF9a5FhIS9nxbi/view?usp=drive_link" },
          { title: "4.2", drive: "https://drive.google.com/file/d/1N3jmVnuNG8f-VFSuLQKHkkvDm-kRX6m3/view?usp=drive_link" },     
          { title: "4.3", drive: "https://drive.google.com/file/d/1SkRnXmZdNgqM7-CEO37bodHauP17lMJj/view?usp=drive_link" },
          { title: "4.4", drive: "https://drive.google.com/file/d/1wPR1zalWehU2I02iSKysjGhTl64pLm5p/view?usp=drive_link" },
          { title: "4.5", drive: "https://drive.google.com/file/d/1Dx7a8B-BPXGQ788Jr40IPnuc8gaTrkCF/view?usp=drive_link" },
          { title: "4.6", drive: "https://drive.google.com/file/d/1-EUT7lSgVhzV3ZYZfFSXl3GdSsK956GU/view?usp=drive_link" },
          { title: "4.7", drive: "https://drive.google.com/file/d/1UrcISdm6Oc3Sp-R7dQrwzJDfXY78o_hm/view?usp=drive_link" },
          { title: "4.8", drive: "https://drive.google.com/file/d/1KMT9fGfBoCRfq0S7o1hPIcqLEtdhl_pA/view?usp=drive_link" },
          { title: "4.9", drive: "https://drive.google.com/file/d/1X_-AaSkXhH1ORI4MiJiXpz8i2DAsJkMH/view?usp=drive_link" },
          { title: "4.10", drive: "https://drive.google.com/file/d/1bUcPyvACQ0LF-7UMZOHpd4epM8d7JOW3/view?usp=drive_link" },
  
        ] },
        { title: "Domain 5 — Troubleshooting", videos: [
          { title: "5.1", drive: "https://drive.google.com/file/d/1l_v0looZUs8vQxytYDdThcI_XQ5NeAwf/view?usp=drive_link" },
          { title: "5.2", drive: "https://drive.google.com/file/d/1-CZ8UI8leNtzON5mOTCn6n0MlHEYudn1/view?usp=drive_link" },
          { title: "5.3", drive: "https://drive.google.com/file/d/1vIAR34_xZ_rklXL2_k-HDHOILz7FKzDB/view?usp=drive_link" },
          { title: "5.4", drive: "https://drive.google.com/file/d/1qlhRTV1gHO2bnq8eAd_gEtmxMEHFJA8f/view?usp=drive_link" },
          { title: "5.5", drive: "https://drive.google.com/file/d/1nyynnrTQBRMQY4xQfR6XLB1Ah8wWYU_X/view?usp=drive_link" },
          { title: "5.6", drive: "https://drive.google.com/file/d/1-pBshGiGRbV60svSjJ8H8VfFVVP2GDPQ/view?usp=drive_link" },
          { title: "5.7", drive: "https://drive.google.com/file/d/1Aa3TdaXtuc3AWoKFw_JQip764t77hH_e/view?usp=drive_link" },
          { title: "5.8", drive: "https://drive.google.com/file/d/1apl1HtZATOOIJrMl8kvKOZuAe8hNlrWo/view?usp=drive_link" },
          { title: "5.9", drive: "https://drive.google.com/file/d/1hTXE85TstHlq0PysUvRyhorwVvggM_Zu/view?usp=drive_link" },
          { title: "5.10", drive: "https://drive.google.com/file/d/1idXlv1wQdP_XLY9JAxMT6Tl3PSqUBsq0/view?usp=drive_link" },
          { title: "5.11", drive: "https://drive.google.com/file/d/10ge96AARLlIRWIKCd5uQg4qqFxvUWH63/view?usp=drive_link" },
          { title: "5.12", drive: "https://drive.google.com/file/d/1jz4pvOGggvyLE04wnMLq-ZKAMGXQmqkU/view?usp=drive_link" },
          { title: "5.13", drive: "https://drive.google.com/file/d/1KpCWO6-FlKOe2N02sgLWY33ibu1Vip8C/view?usp=drive_link" },
          { title: "5.14", drive: "https://drive.google.com/file/d/1AW3IeXr0FMU_pqTuAeYhhUsBX_6tZRZr/view?usp=drive_link" },
          { title: "5.15", drive: "https://drive.google.com/file/d/1_UaCXYcF8EDpVD5hjVsuhPpRzqomBa3K/view?usp=drive_link" },
  
  
        ] }
      ]
    },
  
  python: {
    resources: [
      { title: "ITS OD 303 Python (PDF)",                file: "https://drive.google.com/file/d/1iwySeKm-4AWpP2s4SUaciCdTPrjOHk5o/view?usp=drive_link" },
      { title: "Microsoft certification 98-381 (Word)",  file: "https://docs.google.com/document/d/1zPgmo9FfqNFRL9qgVPX4TAY5EG32i_gs/edit?usp=drive_link&ouid=110661342947742467018&rtpof=true&sd=true" },
      { title: "MTA 19 (PDF)",                           file: "https://drive.google.com/file/d/13AwwbCS3UOnGpdOUiQ5VWN0dZ8MBo68P/view?usp=drive_link" },
      { title: "MTA 20 (PDF)",                           file: "https://drive.google.com/file/d/1cZsVAqOOUg-JNueo3veaybsGgTzc1PVP/view?usp=drive_link" },
      { title: "MTA 21 (PDF)",                           file: "https://drive.google.com/file/d/19Me9mLsSLIHuYsD3XLDdNyGlVXwqDvuF/view?usp=drive_link" },
      { title: "MTA 22 (PDF)",                           file: "https://drive.google.com/file/d/1Jj6YFVDwxucctazB9fJPb3_HEIY7M4QI/view?usp=drive_link" },
      { title: "MTA 24 (PDF)",                           file: "https://drive.google.com/file/d/1f3EEGsvuB8Ba18m2f5AC8hZr57oyECLW/view?usp=drive_link" },
      { title: "MTA 40 (PDF)",                           file: "https://drive.google.com/file/d/1pqm6BR19GxpEixE56jxGHiKpuMnUmxcA/view?usp=drive_link" },
      { title: "Python Certiport (PDF)",                 file: "https://drive.google.com/file/d/1dQmAIHy96j6q1lPOC0IfDl_C57BUJ8g0/view?usp=drive_link" },
      { title: "TESTE Python (PDF)",                     file: "https://drive.google.com/file/d/1T9a7_hAFr4NkxnNs0HMQreKf21b05HvJ/view?usp=drive_link" }
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
      { title: "1.1 Temă — Teoria",               file: "https://docs.google.com/document/d/1taHa9_PDYKIDEsgMA5Sq7qQH_bO5lZ1W/edit?usp=drive_link&ouid=110661342947742467018&rtpof=true&sd=true" },
      { title: "1.2 Temă — Teoria",               file: "https://docs.google.com/document/d/1_IYMKabUzLjEpY3pD7L02mO9eBTTDX1t/edit?usp=drive_link&ouid=110661342947742467018&rtpof=true&sd=true" },
      { title: "1.3 Temă — Teoria",               file: "https://docs.google.com/document/d/1842w07YoIj0BM2D_RI70eLGyakoM7b9K/edit?usp=drive_link&ouid=110661342947742467018&rtpof=true&sd=true" },
      { title: "1.4 Temă — Teoria",               file: "https://docs.google.com/document/d/1gd7dj5-peZZ_dK1_-ThoSxvoEulympG6/edit?usp=drive_link&ouid=110661342947742467018&rtpof=true&sd=true" },
      { title: "1.5 Normalize a database",        file: "https://docs.google.com/document/d/12eGk1073pnPRD6CsX_jzKVInc6ZMTjvS/edit?usp=drive_link&ouid=110661342947742467018&rtpof=true&sd=true" },
      { title: "1.6 Temă — Teoria (PDF)",         file: "https://drive.google.com/file/d/1y029YSSAx5gRzvRwBXODWMC8RTYIHtcT/view?usp=drive_link" },
      { title: "2.0 Teoria (PDF)",                file: "https://drive.google.com/file/d/1zaX5IKRcZCwb2GVsbPKM4uf1FwqDXL6a/view?usp=drive_link" },
      { title: "2.1 - 2.2 Temă",                  file: "https://docs.google.com/document/d/1qoMtGt9umLofpeD6aGvADR8RDNBpzj4G/edit?usp=drive_link&ouid=110661342947742467018&rtpof=true&sd=true" },
      { title: "2.3 Temă",                        file: "https://docs.google.com/document/d/1q5M4r_lEa527QD5E2axOfeZYm7-jZwwz/edit?usp=drive_link&ouid=110661342947742467018&rtpof=true&sd=true" },
      { title: "2.4 Temă",                        file: "https://docs.google.com/document/d/1eu5wJ4EKIzXNaCbGkLuRDKJ8SJX0fieu/edit?usp=drive_link&ouid=110661342947742467018&rtpof=true&sd=true" },
      { title: "3.1 JOIN",                        file: "https://docs.google.com/document/d/1wtWVpyjb78qt_yJZOZo8GPmIeS5ZxCUs/edit?usp=drive_link&ouid=110661342947742467018&rtpof=true&sd=true" },
      { title: "3.2 Temă",                        file: "https://docs.google.com/document/d/1zibJbg9CBapk47DvdOBeEiNlKPy-iPLQ/edit?usp=drive_link&ouid=110661342947742467018&rtpof=true&sd=true" },
      { title: "3.3 Temă",                        file: "https://docs.google.com/document/d/11Q2zbKwMKF2iCGKVGHwm4rPH-wC4CK9g/edit?usp=drive_link&ouid=110661342947742467018&rtpof=true&sd=true" },
      { title: "4.1 INSERT",                      file: "https://docs.google.com/document/d/1Y_SD-t_Yers_XMFCuXzTWspGYz45JZPj/edit?usp=drive_link&ouid=110661342947742467018&rtpof=true&sd=true" },
      { title: "4.2 UPDATE",                      file: "https://docs.google.com/document/d/11Fcj90oqbn6eX0W278d1piBDQUZqERVh/edit?usp=drive_link&ouid=110661342947742467018&rtpof=true&sd=true" },
      { title: "4.3 DELETE",                      file: "https://docs.google.com/document/d/18ljXPmNPhrIWW-Y_tqLOG61s7c6WENUb/edit?usp=drive_link&ouid=110661342947742467018&rtpof=true&sd=true" },
      { title: "5.1, 5.2, 5.3 Erori",             file: "https://docs.google.com/document/d/1lAXkubjUbYbVd5AhQTzqYN_H5003uI0e/edit?usp=drive_link&ouid=110661342947742467018&rtpof=true&sd=true" },
      { title: "Exemple teste DB (PDF)",          file: "https://drive.google.com/file/d/1tRMCqosqyQ9iXmkNsbUxNF8DrREZ8S2J/view?usp=drive_link" },
      { title: "GMetrix RS",                      file: "https://docs.google.com/document/d/1fvMEXOvE6HK2fo5V3SLrg-QBfz5LMMrX/edit?usp=drive_link&ouid=110661342947742467018&rtpof=true&sd=true" },
      { title: "ITS OD 201 Databases (PDF)",      file: "https://drive.google.com/file/d/1T2J-7RfMQpbxKCJknBBZTrf7Pgp3sdTJ/view?usp=drive_link" },
      { title: "Test capitolul 2 — 96 întrebări", file: "https://docs.google.com/document/d/1QE18FRiwEHCS_mTgp1ohXsz0mqSJEc8v/edit?usp=drive_link&ouid=110661342947742467018&rtpof=true&sd=true" },
      { title: "TESTE (PDF)",                     file: "https://drive.google.com/file/d/1nQ5hsBDeiJyOoXjZ7rhzOsyDRl51y8Na/view?usp=drive_link" }
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