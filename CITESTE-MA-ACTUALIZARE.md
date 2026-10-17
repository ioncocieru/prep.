# Actualizare finală — pregătire ITS

## Ce este inclus

Site-ul complet, cu interfața existentă și întrebările integrate direct în băncile sale. Nu este o pagină demonstrativă separată și nu folosește patch-uri încărcate peste întrebări.

| Examen | Întrebări în banca finală |
|---|---:|
| Python | 761 |
| Databases | 304 |
| Networking | 625 |
| Device Configuration and Management | 728 |
| HTML5 Application Development | 304 |
| **Total** | **2.722** |

- Toate cele **2.065 de apariții** din fișierul sursă au o asociere în raport. Aparițiile repetate nu creează obligatoriu întrebări duplicate.
- Au fost completate cheile lipsă și explicațiile noilor întrebări, în engleză. Enunțurile incomplete sau contradictorii au fost clarificate când era necesar.
- **714 întrebări Choose One**, cu selecții separate pentru fiecare câmp, verificare, explicație, rezultate și reluarea sesiunii. Întrebările single/multiple/true-false și drag-and-drop rămân disponibile; nu au fost convertite arbitrar în dropdownuri.
- **112 imagini native** extrase din PDF, grupate în assets după examen. Sunt păstrate inclusiv imaginile repetate din PDF; nu toate cele 112 sunt necesare unor întrebări distincte. În întrebări există 84 referințe la imagini, către 78 fișiere diferite. Fișierele originale de imagine ale site-ului sunt păstrate.
- Python este exclusiv în `data/python.js`. Nu există încărcare `python-fix.js`.
- HTML5 este în noul fișier cerut `data/html5.js`, deja inclus în `index.html` și în lista de examene.
- Interfața este păstrată; actualizările în app/progress/style privesc tipurile noi de răspuns, afișarea codului, salvarea și evitarea suprapunerii navigării pe mobil.

## Publicare

1. Fă backup la fișiere și la Supabase.
2. Înlocuiește site-ul cu **conținutul** folderului `prep-test` din arhivă, inclusiv `data/` și `assets/`. Nu încărca numai app.js.
3. În **SETUP.md, secțiunea 2**, găsești blocul SQL complet de copiat în Supabase SQL Editor. Citește avertizarea despre înlocuirea politicilor celor două tabele.
4. SQL acordă acces celor cinci examene contului existent indicat în script. Pentru alt cont, schimbă emailul. Întrebările NU trebuie încărcate în Supabase; sunt fișiere statice.
5. Verifică Site URL/Redirect URLs în Authentication, apoi autentifică-te și testează salvarea după publicare. Configurația publică existentă este păstrată.

## Verificări efectuate

- 2.722 întrebări: ID unic, capitol valid, cheie completă și explicație prezentă.
- Toate întrebările: răspuns gol respins, răspunsul corect introdus prin controalele interfeței acceptat, răspunsul greșit respins, blocare după verificare.
- Rezultate și revizuire pentru toate cele cinci bănci; imaginile referite se încarcă fără erori.
- Choose One: tastatură, salvare locală, reîncărcare și reluare, mărirea imaginilor, afișare desktop/mobil fără depășire orizontală.
- Nu au fost executate modificări pe proiectul Supabase. Testarea browserului a izolat autentificarea printr-un mock local; autentificarea reală, RLS și sincronizarea cu cloud-ul trebuie verificate pe domeniul publicat.
- Acestea sunt teste de integritate și funcționalitate, nu o validare oficială Certiport a tuturor răspunsurilor sau a punctajului parțial.

## Rapoarte

`raport-import/rezumat.json`, `mapare-intrebari.csv`, `corectari.json`, `imagini-pdf.json` și `teste-aplicatie.json` descriu versiunea finală. Folderul `raport/` provine dintr-o verificare mai veche; fișierele sale JSON sunt marcate ca istorice, iar capturile de navigare au fost actualizate. Rapoartele și `tools/` nu sunt încărcate de site și nu sunt necesare pentru funcționare.
