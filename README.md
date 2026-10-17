# ITS PREP — site static de pregătire

Site-ul existent cu cinci examene și 2.722 de întrebări integrate. Nu necesită compilare.

## Pornire / publicare

Publică tot conținutul acestui folder pe găzduirea existentă. Pentru verificare locală folosește un server HTTP, de exemplu `python -m http.server 8080`, nu deschidere directă file://. Autentificarea necesită conexiune la Supabase, configurarea domeniului și acces la examene.

**Instrucțiuni de instalare și SQL: SETUP.md.**
**Conținutul actualizării și rezultatele verificărilor: CITESTE-MA-ACTUALIZARE.md.**

## Structură

- `index.html`, `app.js`, `style.css`: interfață și evaluarea răspunsurilor.
- `progress.js`: progres, sesiuni și reluare; stocare locală și sincronizare Supabase.
- `config.js`: configurația publică a proiectului. Nu include niciodată o cheie service_role în browser.
- `data/python.js`, `data/databases.js`, `data/device-config.js`, `data/networking.js`, `data/html5.js`: întrebări și explicații.
- `data/courses.js`, `cours.txt`: materialele existente, păstrate.
- `assets/`: imaginile existente și cele extrase din PDF, organizate pe examene.
- `landing.*`, `reviews.js`, `ghid/`: componentele existente.
- `raport-import/`: raportul final de integrare; nu este parte din runtime.

Controale: un răspuns, mai multe răspunsuri, adevărat/fals, Choose One pe fiecare câmp și drag-and-drop. Răspunsurile și explicațiile sunt în băncile JavaScript, nu în tabele Supabase. Accesul la examene se acordă prin user_exams, iar progresul se salvează în user_progress.

Verificare structurală opțională: `node tools/validate-banks.cjs`.

Conținut independent de pregătire, fără afiliere sau validare oficială Certiport. Evaluarea locală nu pretinde reproducerea punctajului parțial oficial.
