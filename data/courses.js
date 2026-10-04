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
      { title: "Domain 1 — Database Design", videos: [
        { title: "Introduction", drive: "https://drive.google.com/file/d/1vmjJFZfqYfhIy1sIBCzje4WXcf9VoptF/view?usp=drive_link" },
        { title: "Entities, Rows, and Columns", drive: "https://drive.google.com/file/d/1ZRDVGG6xUnRjNM1LjXoJdG-b8M82U9b_/view?usp=drive_link" },
        { title: "Primary Key", drive: "https://drive.google.com/file/d/10fgOoOnnujuQfJixWaUBij-pluUUqRUl/view?usp=drive_link" },
        { title: "Composite/Compound Key 1", drive: "https://drive.google.com/file/d/1P8Nyg3GD88tyqmV5Yox4wFfQGkpA6N7e/view?usp=drive_link" },
        { title: "Composite/Compound Key 2", drive: "https://drive.google.com/file/d/18nuJyn2izLvz73mWVRk31GqKBPbgwiup/view?usp=drive_link" },
        { title: "Importance of Data Types", drive: "https://drive.google.com/file/d/1te99vyjinTBaaNzm4L2NNpGeaFS2PIhf/view?usp=drive_link" },
        { title: "Storage Requirements", drive: "https://drive.google.com/file/d/1vpy_lD10hzIF0AxT99mSE2h1FYeDyG-v/view?usp=drive_link" },
        { title: "Data Types for Storing Text", drive: "https://drive.google.com/file/d/1E3yeH3VzxHKHi1Bw7xfjWlxJMwDBrDfF/view?usp=drive_link" },
        { title: "Establishing Relationships", drive: "https://drive.google.com/file/d/1-8efRn7yy1dLwM9g9t2uHPQef5w-KYed/view?usp=drive_link" },
        { title: "Entity-Relationship Diagrams", drive: "https://drive.google.com/file/d/1-_q3OvLQtNjZV8ok6Lx-7RQKpRXy0YG3/view?usp=drive_link" },
        { title: "Referential Integrity", drive: "https://drive.google.com/file/d/1GVUMKs9MLQTwnSmJpvoXR2ufWkCfzsjR/view?usp=drive_link" },
        { title: "Reasons for Normalization", drive: "https://drive.google.com/file/d/16PGap_HlcWz0iGFGYYjDaKJXf7uQert5/view?usp=drive_link" },
        { title: "Third Normal Form", drive: "https://drive.google.com/file/d/1LlAtSIOHhVJHr9iK4TGwpLzIGAfiR7bN/view?usp=drive_link" },
        { title: "Backups", drive: "https://drive.google.com/file/d/1wqlzY7Z5CS77VO1R4ksYbV_VeiywXdn9/view?usp=drive_link" },
        { title: "Restore", drive: "https://drive.google.com/file/d/14e8NTy7IQvuKeBVxWAPxqTalUuqnDKIG/view?usp=drive_link" },
        { title: "Principle of Least Privilege", drive: "https://drive.google.com/file/d/18PCwcN2B2GHceXs-DixRo7-T2xEJCCai/view?usp=drive_link" },
        { title: "Permission Grants", drive: "https://drive.google.com/file/d/14FMHpukjIjoVw-XzVFWqpqUl5-8HzD6r/view?usp=drive_link" },
        { title: "Permission Revokes", drive: "https://drive.google.com/file/d/1_EK2i08t-n4_s3KJitdlOFf_iAGhSOLf/view?usp=drive_link" },
        { title: "Permission of Roles", drive: "https://drive.google.com/file/d/1XD_--4hStFh2HRlXSlZfSHCMHA0oXd1B/view?usp=drive_link" },
    
        { title: "Database Design Course (curs recomandabil de Prep. pentrui întărire)", youtube: "https://youtu.be/ztHopE5Wnpc" }
      ]},
    
      { title: "Domain 2 — Create, Alter, and Drop Tables", videos: [
        { title: "Work with Tables", drive: "https://drive.google.com/file/d/1rXtSFraeLT7BrSzdllHrVegXfSpV_iUp/view?usp=drive_link" },
        { title: "NULL and NOT NULL", drive: "https://drive.google.com/file/d/1rZuoPRPLQNFStSIt9IxgW8cyXMNaA_WB/view?usp=drive_link" },
        { title: "Create, Alter, and Drop Views", drive: "https://drive.google.com/file/d/1luym7MmHlCOEGLbF8_62V6owvJMqsrol/view?usp=drive_link" },
        { title: "Input and Output Parameters", drive: "https://drive.google.com/file/d/15NCnpGP2rhnL1LvMHUfQ8bARcfBX94vN/view?usp=drive_link" },
        { title: "Return Values", drive: "https://drive.google.com/file/d/14QKZ8atQWxlrvxGY4uLDIAhv16UQeVMk/view?usp=drive_link" },
        { title: "Clustered Indexes", drive: "https://drive.google.com/file/d/1d1R3DauUN1QEIwoxqEQ6GSE3t2C5SWM-/view?usp=drive_link" },
        { title: "Nonclustered Indexes", drive: "https://drive.google.com/file/d/1EEg623WxoGhfQJOe0V0gknR5GIsT8XLz/view?usp=drive_link" }
      ]},
    
      { title: "Domain 3 — Queries That Select Data", videos: [
        { title: "Join Types", drive: "https://drive.google.com/file/d/12xfPO4P0sznIAY7BYuUnJiMCH_X9bs0a/view?usp=drive_link" },
        { title: "Cartesian Product", drive: "https://drive.google.com/file/d/1speeBwJnFEU11ERLfFuT6aZ694cUAE8z/view?usp=drive_link" },
        { title: "Self Joins", drive: "https://drive.google.com/file/d/12AkkH5xHQS6Ti2mCRv7Yse6t4XqBZkEk/view?usp=drive_link" },
        { title: "UNIONS and INTERSECTS", drive: "https://drive.google.com/file/d/1WhNSkNBmo6wpQATwsiQUy0Esuf_24GSl/view?usp=drive_link" },
        { title: "DISTINCT", drive: "https://drive.google.com/file/d/1EEWaKHAqx1B4wrH27afSkoXXKHE85DDJ/view?usp=drive_link" },
        { title: "Column Alias", drive: "https://drive.google.com/file/d/18NVUNZdubw1oxTwwpJ8hBeCirYswfj8x/view?usp=drive_link" },
        { title: "Computed Columns", drive: "https://drive.google.com/file/d/1srDmE1OeiNXU6FMOvmklQp7i0GXGaAMd/view?usp=drive_link" },
        { title: "ORDER BY", drive: "https://drive.google.com/file/d/1srDmE1OeiNXU6FMOvmklQp7i0GXGaAMd/view?usp=drive_link" },
        { title: "WHERE", drive: "https://drive.google.com/file/d/1rVS2QgSCkvIjlrHKja0iZeUqcgc752NR/view?usp=drive_link" },
        { title: "LIKE", drive: "https://drive.google.com/file/d/1RK1Y2FDFo-W0DufiGDwqZJXPCjjO4xSo/view?usp=drive_link" },
        { title: "BETWEEN", drive: "https://drive.google.com/file/d/13n83DBIv-Y6xz0lCY-XKzbIXr-wsepFa/view?usp=drive_link" },
        { title: "AND", drive: "https://drive.google.com/file/d/1S9ANswPnx7fcxvsvgH1ihzBkPP6niAmh/view?usp=drive_link" },
        { title: "OR", drive: "https://drive.google.com/file/d/1MQEJDr-_lY8tdrtSaupG8mCL5OqD3mxC/view?usp=drive_link" },
        { title: "NOT", drive: "https://drive.google.com/file/d/12iUJAjiUYktIibqgDJNbhzpFRFlMIP2-/view?usp=drive_link" },
        { title: "TOP", drive: "https://drive.google.com/file/d/13vZWhmyrJEN2P4CUkelmtnHYQvvOkE5M/view?usp=drive_link" },
        { title: "IN and NOT IN", drive: "https://drive.google.com/file/d/12kiw6X8ug1QJEiTo3KWGHRfpImkewFs4/view?usp=drive_link" },
        { title: "ANY", drive: "https://drive.google.com/file/d/103qkt8Ttjabwp2o3Fsa5NasdvxaETg3c/view?usp=drive_link" },
        { title: "ALL", drive: "https://drive.google.com/file/d/1Bo6tVd4qLXVtBT-vXivyHbIoY9KxAO-Y/view?usp=drive_link" },
        { title: "NULL and NOT NULL Values", drive: "https://drive.google.com/file/d/1yhX1yCOlOzVuNlf95C_BPlTQreRiIQMd/view?usp=drive_link" },
        { title: "Comparison Operators", drive: "https://drive.google.com/file/d/19ya_yZbx18gMfjkasNR0SVfMwE_wGa7O/view?usp=drive_link" },
        { title: "GROUP BY and SUM", drive: "https://drive.google.com/file/d/1bjix4DTg0yiya4H3sNCjH_a9x-VHzjC9/view?usp=drive_link" },
        { title: "HAVING", drive: "https://drive.google.com/file/d/1nQ9TRd_fFBceSuPwJUtgImnyw408uJpw/view?usp=drive_link" },
        { title: "MIN and MAX", drive: "https://drive.google.com/file/d/1LvSV4LiLbqEe6ncSPDum_TezVry-QxGI/view?usp=drive_link" },
        { title: "COUNT and AVG", drive: "https://drive.google.com/file/d/1HGSHaDxGZDcMPjnwp1Y8cVFdGW7m9KqS/view?usp=drive_link" }
      ]},
    
      { title: "Domain 4 — INSERT, UPDATE, and DELETE Statements", videos: [
        { title: "INSERT INTO...SELECT", drive: "https://drive.google.com/file/d/1ZtV8Rrtgse63lcz_64bHjfFkT8qrfWcs/view?usp=drive_link" },
        { title: "INSERT INTO...VALUES", drive: "https://drive.google.com/file/d/1hPU_gRqlYhqFJFjR0gUUZ2PlGGh-bJew/view?usp=drive_link" },
        { title: "Update Data in a Single Table", drive: "https://drive.google.com/file/d/1vDZ20lG7hx0y1Jjz-8XWseleKfXbCjJX/view?usp=drive_link" },
        { title: "Delete Data from a Single Table", drive: "https://drive.google.com/file/d/1Hh91KHQvYES4qSRaBqLl1ExxmIWflDmw/view?usp=drive_link" },
        { title: "Truncate Table", drive: "https://drive.google.com/file/d/1WZSHOM3N6wRHLiCgEXd1bosxwMojI2hx/view?usp=drive_link" }
      ]},
    
      { title: "Domain 5 — Query Failures", videos: [
        { title: "Object Management Errors", drive: "https://drive.google.com/file/d/1c3QbvBcnLZRuHLLuI9upEtts8zNKqy6O/view?usp=drive_link" },
        { title: "Select Errors", drive: "https://drive.google.com/file/d/1QeQYIVu6bKfxYQrEEeifCRkKp-TG0jau/view?usp=drive_link" },
        { title: "Data Manipulation Errors", drive: "https://drive.google.com/file/d/1Zbz6H_2Q16F4v05mlwl3vnxDNAQYw1g-/view?usp=drive_link" }
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
