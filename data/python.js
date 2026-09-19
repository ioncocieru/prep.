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
    },

    /* =================================================================
       Întrebări importate din banca de teste încărcată de utilizator
       (verificate cu răspunsurile corecte incluse în sursă)
       ================================================================= */
    {
      id: "py-src-8",
      chapter: "operatori-tipuri",
      type: "multiple",
      question: "Consider the Variable declarations:\na='5'\nb='2'\nWhich of the following expressions are of type str",
      options: ["a+b", "a*b", "a-b", "a*2"],
      correct: [0, 3],
      explanation: "a+b concatenează două șiruri text (str), iar a*2 repetă șirul '5' de două ori — tot str. a*b și a-b generează TypeError între două șiruri, deci nu produc un rezultat de tip str."
    },
    {
      id: "py-src-15",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Consider the python code:\nWhat is the output?",
      code: "1) result=str(bool(1) + float(10)/float(2))\n2) print(result)",
      options: ["SyntaxError", "TypeError", "6", "6.0"],
      correct: 3,
      explanation: "bool(1) este True (echivalent cu 1); float(10)/float(2) = 5.0; True + 5.0 = 6.0; str(6.0) = '6.0'."
    },
    {
      id: "py-src-35",
      chapter: "structuri-date",
      type: "single",
      question: "Consider the code:\nWhat is the result?",
      code: "s='AB CD'\nlist=list(s)\nlist.append('EF')\nprint(list)",
      options: ["['A', 'B', 'C', 'D', 'E', 'F']", "{'A', 'B', '', 'C', 'D', 'EF'}", "['A', 'B', '', 'C', 'D', 'EF']", "('A', 'B', '', 'C', 'D', 'EF')"],
      correct: 3,
      explanation: "list(s) desparte fiecare caracter al șirului într-un element separat (inclusiv spațiul), iar append('EF') adaugă 'EF' ca UN SINGUR element suplimentar, nu caracter cu caracter."
    },
    {
      id: "py-src-36",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Consider the code:\n1) x='ACROTE'\n2) y='APPLE'\n3) z='TOMATO'\n\nWhich of the following won't print 'CAT' to the console",
      options: ["print(x[1]+y[0]+z[0])", "print(x[2]+y[1]+z[1])", "print(x[-5]+y[0]+z[0])", "print(x[-5]+y[0]+z[-2])"],
      correct: 1,
      explanation: "x[1]+y[0]+z[0] = 'C'+'A'+'T' = 'CAT'; x[-5]+y[0]+z[0] = 'C'+'A'+'T' = 'CAT'; x[-5]+y[0]+z[-2] = 'C'+'A'+'T' = 'CAT'. Doar x[2]+y[1]+z[1] = 'R'+'P'+'O' = 'RPO' nu afișează 'CAT'."
    },
    {
      id: "py-src-39",
      chapter: "structuri-date",
      type: "single",
      question: "Consider the code:\nt=([10,20],10,False)\n\nWhich line of the code assigns <class 'list'> to x",
      options: ["x= type(t)", "x= type(t[0])", "x= type(t[1])", "x= type(t[0:])"],
      correct: 1,
      explanation: "t[0] este [10, 20], o listă. type(t[0]) este deci <class 'list'>. type(t) e tuple, type(t[1]) e int, iar type(t[0:]) e tot tuple (slicing pe tuple întoarce tot tuple)."
    },
    {
      id: "py-src-48",
      chapter: "operatori-tipuri",
      type: "multiple",
      question: "Which of the following are valid statements?",
      options: ["5+False evaluates to False", "True+1 evaluates to 2", "True and False evaluates to False", "True or False evaluates to False", "type('') is <class 'bool'>"],
      correct: [1, 2],
      explanation: "True se comportă ca 1, deci True+1 = 2 (B corect). True and False = False (C corect). 5+False = 5+0 = 5, nu False (A greșit). True or False = True, nu False (D greșit). type('') este str, nu bool (E greșit)."
    },
    {
      id: "py-src-53",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Which of the following expression will generate max value?",
      options: ["8%3*4", "8-3*4", "8//3*4", "8/3*4"],
      correct: 3,
      explanation: "8%3*4 = 2*4 = 8; 8-3*4 = -4; 8//3*4 = 2*4 = 8; 8/3*4 ≈ 2.667*4 ≈ 10.67 — cea mai mare valoare."
    },
    {
      id: "py-src-54",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Which expression would evaluate to 2?",
      options: ["3**2", "22%5", "13//4", "11/2"],
      correct: 1,
      explanation: "3**2 = 9; 22%5 = 2; 13//4 = 3; 11/2 = 5.5. Doar 22%5 este 2."
    },
    {
      id: "py-src-55",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Consider the code\nWhich line of the code assigns 9 to the output?",
      code: "a=7\nb=3\nc=5\nd=1",
      options: ["output=a%c+1", "output=a+c//d", "output=c*d-1", "output=a+d*2"],
      correct: 3,
      explanation: "output=a+d*2 = 7 + 1*2 = 9. Celelalte: a%c+1=3, a+c//d=12, c*d-1=4."
    },
    {
      id: "py-src-58",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Consider the following expression:\n6//4%5+2**3-2//3\nThis expression results to:",
      options: ["9", "3", "-1", "25"],
      correct: 0,
      explanation: "Ordinea operațiilor: 2**3=8, 6//4=1, 1%5=1, 2//3=0. Rezultă 1+8-0 = 9."
    },
    {
      id: "py-src-68",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Consider the code\nWhich of the following expression results -4?",
      code: "1) a=1\n2) b=2\n3) c=4\n4) d=6",
      options: ["(a+b)//c%d", "(b+c)//a%d", "(a+b)//c*d", "(a+b)//d-c"],
      correct: 3,
      explanation: "(a+b)//d-c = (1+2)//6-4 = 0-4 = -4. Celelalte expresii dau 0."
    },
    {
      id: "py-src-70",
      chapter: "operatori-tipuri",
      type: "multiple",
      question: "In which cases True will be printed to the console?",
      code: "1) subjects=['java','python','sap']\n2) more_subjects=['java','python','sap']\n3) extra_subjects=more_subjects",
      options: ["print(extra_subjects is more_subjects)", "print(subjects is more_subjects)", "print(subjects is extra_subjects)", "print(subjects == extra_subjects)"],
      correct: [0, 3],
      explanation: "extra_subjects=more_subjects face ca ambele nume să indice ACELAȘI obiect din memorie, deci 'is' este True (A). subjects și extra_subjects au conținut identic dar sunt obiecte diferite, deci '==' e True (D), dar 'is' între ele ar fi False."
    },
    {
      id: "py-src-84",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Consider the code\na=float('123.456')\n\nWhich expression evaluates to 2?",
      options: ["int(a)+False", "bool(a)+True", "str(a)", "bool(a)"],
      correct: 1,
      explanation: "bool(a) pentru orice float diferit de 0 este True (adică 1); True+True = 1+1 = 2."
    },
    {
      id: "py-src-85",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Consider the following code\nFor which of the following condition True will be printed to the console?",
      code: "1) x= 'Durga'\n2) y= 'Durga'\n3) result=condition\n4) print(result)",
      options: ["x is y", "x is not y", "x != y", "x < y"],
      correct: 0,
      explanation: "Pentru șiruri scurte, simple, Python le poate 'interna' (reține un singur obiect în memorie pentru valori identice), astfel încât x is y devine True aici."
    },
    {
      id: "py-src-86",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Consider the code:\nWhat is the result?",
      code: "1) x= 8\n2) y= 10\n3) result= x//3*3/2+y%2**2\n4) print(result)",
      options: ["5", "5.0", "6.0", "7.0"],
      correct: 1,
      explanation: "Ordinea operațiilor: 2**2=4, y%4=10%4=2; x//3=2, 2*3=6, 6/2=3.0; suma finală 3.0+2=5.0."
    },
    {
      id: "py-src-96",
      chapter: "structuri-control",
      type: "single",
      question: "We are developing loan collection agent application. Consider the code:\nWhat will be the value of commission?",
      code: "1) collected_amount=3000\n2) commission=0\n3) if collected_amount <= 2000:\n4) commission=50\n5) elif collected_amount> 2500 and collected_amount<3000:\n6) commission=100\n7) elif collected_amount>2500:\n8) commission=150\n9) if collected_amount>=3000:\n10) commission+=200",
      options: ["350", "200", "150", "100"],
      correct: 0,
      explanation: "Se intră pe ramura elif collected_amount>2500 (3000>2500), deci commission=150. Apoi condiția separată if collected_amount>=3000 este True, deci commission+=200 → 150+200=350."
    },
    {
      id: "py-src-97",
      chapter: "structuri-control",
      type: "single",
      question: "You are developing online shopping application.\nConsider the code:\nWhat is the result?",
      code: "01 order_value = 1500\n02 state = 'ap'\n03 delivery_charge = 0\n\n04 if state in ['up', 'mp', 'ts']:\n05 if order_value <= 1000:\n06 delivery_charge = 50\n07 elif 1000 < order_value < 2000:\n08 delivery_charge = 100\n09 else:\n10 delivery_charge = 150\n11 else:\n12 delivery_charge = 25\n13 if state in ['lp', 'kp', 'ap']:\n14 if order_value > 1000:\n15 delivery_charge += 20\n16 if order_value < 2000 and state in ['kp', 'ap']:\n17 delivery_charge += 30\n18 else:\n19 delivery_charge += 15\n20 print(delivery_charge)",
      options: ["65", "75", "85", "55"],
      correct: 1,
      explanation: "state='ap' nu e în ['up','mp','ts'], deci delivery_charge=25. 'ap' e în ['lp','kp','ap'] și order_value>1000, deci +20 → 45. order_value<2000 și state în ['kp','ap'], deci +30 → 75."
    },
    {
      id: "py-src-101",
      chapter: "structuri-control",
      type: "single",
      question: "Consider the following code:\nWhich grade will be printed to the console?",
      code: "1) marks=[30,40,50,45,50,100]\n2) average=sum(marks)//len(marks)\n3) grades={1:'A',2:'B',3:'C',4:'D'}\n4) if average>=90 and average<=100:\n5) key=1\n6) elif average>=80 and average<90:\n7) key=2\n8) elif average>=50 and average<80:\n9) key=3\n10) else:\n11) key=4\n12) print(grades[key])",
      options: ["A", "B", "C", "D"],
      correct: 2,
      explanation: "average = sum(marks)//len(marks) = 315//6 = 52, care se încadrează în intervalul 50-79, deci key=3 și se afișează grades[3] = 'C'."
    },
    {
      id: "py-src-108",
      chapter: "structuri-control",
      type: "single",
      question: "We are developing gold loan application for XYZ company.\n\n1) amount=float(input('Enter Loan Amount:'))\n2) interest_rate=0\n3) if amount > 0 and amount<= 50000:\n4) interest_rate = 10\n5)\n6) elif amount > 50000 and amount<100000:\n7) interest_rate = 12\n8)\n9) elif amount >= 100000 and amount<150000:\n10) interest_rate = 16\n11)\n12) else:\n13) interest_rate = 22\n\nFor which of the following user input interest_rate will be 12.",
      options: ["50000", "50001", "100000", "100001", "150000"],
      correct: 1,
      explanation: "Pentru amount=50001, condiția amount>0 and amount<=50000 e False, dar amount>50000 and amount<100000 e True, deci interest_rate=12."
    },
    {
      id: "py-src-114",
      chapter: "structuri-control",
      type: "single",
      question: "Which of the following is True about else block?",
      options: ["else block will be executed if there is no exception is try bloack", "without writing except block we can't write else block", "for the same try we can write atmost one else block", "All the above"],
      correct: 3,
      explanation: "Toate afirmațiile sunt adevărate: blocul else rulează doar dacă try nu are excepții, necesită un bloc except, și poate exista cel mult un else per try."
    },
    {
      id: "py-src-115",
      chapter: "structuri-control",
      type: "single",
      question: "In which of the following cases 'Needs Director Approval' will be printed to the console?",
      code: "We are developing an application for leave approval in XYZ Company.\n\ndays=int(input('Enter number of days for leave:')) cause=input('Enter the cause:')\nif days==1:\n print('Leave will be approved immediately')\nelif days>1 and days<=3:\n if cause=='Sick':\n print('Leave will be approved immediately')\n else:\n print('Needs Lead Approval')\nelif days>3 and days<5:\n if cause=='Sick':\n print('Needs Manager Approval')\n else:\n print('Needs Director Approval')\nelif days>=5 and days<=10:\n print('Needs Director Approval')",
      options: ["days = 2 and cause='sick'", "days = 3 and cause='personal'", "days = 4 and cause='sick'", "days = 4 and cause='official'"],
      correct: 3,
      explanation: "days=4 și cause='official' (diferit de 'Sick') intră pe ramura elif days>3 and days<5, iar în interior else (cauza nu e Sick) afișează 'Needs Director Approval'."
    },
    {
      id: "py-src-116",
      chapter: "structuri-control",
      type: "single",
      question: "Consider the code\n\na=12\nb=4\ns='He shall not be happy if he does not work'\n\nIn which of the following cases result value will become 9",
      options: ["result=3 if None else a/b", "result=s.find('not') if s else None", "result=s.rfind('not') if s else None", "result=5 if len(s)>4 else 6"],
      correct: 1,
      explanation: "s.find('not') caută prima apariție a 'not' în șir și returnează indexul 9, deci result=9."
    },
    {
      id: "py-src-122",
      chapter: "structuri-control",
      type: "single",
      question: "Consider the following Python Code:\nIf the user provides input 'a' then what is the result?",
      code: "1) def count_letter(letter,word_list):\n2) count=0\n3) for word in word_list:\n4) if letter in word:\n5) count +=1\n6) return count\n7) word_list=['apple','pears','orange','mango']\n8) letter=input('Enter some alphabet symbol:')\n9) letter_count=count_letter(letter,word_list)\n10) print(letter_count)",
      options: ["1", "2", "3", "4"],
      correct: 3,
      explanation: "Cuvintele care conțin litera 'a' sunt 'apple', 'pears', 'orange', 'mango' — toate cele 4 cuvinte, deci count=4."
    },
    {
      id: "py-src-124",
      chapter: "structuri-control",
      type: "single",
      question: "Which of the following print() statement should be placed at Line-1 to meet requirement?",
      code: "The XYZ organics company needs a simple program that their call center will use to enter survey data for a new coffee\nvariety. The program must accept input and return the average rating based on a five-star scale.The output must be\nrounded to two decimal places.\nConsider the code:\n\n1) sum=count=done=0\n2) average=0.0\n3) while(done != -1):\n4) rating=float(input('Enter Next Rating(1-5),-1 for done'))\n5) if rating == -1:\n6) break\n7) sum+=rating\n8) count+=1\n9) average=float(sum/count)\n10) #Line-1",
      options: ["print('The average star rating for the new coffee is:{:.2f}'.format(average))", "print('The average star rating for the new coffee is:{:.2d}'.format(average))", "print('The average star rating for the new coffee is:{:2f}'.format(average))", "print('The average star rating for the new coffee is:{:2.2d}'.format(average))"],
      correct: 0,
      explanation: "'{:.2f}' este formatul corect pentru rotunjire la 2 zecimale; celelalte formate (.2d, 2f, 2.2d) nu sunt valide pentru un float rotunjit corect."
    },
    {
      id: "py-src-127",
      chapter: "structuri-control",
      type: "single",
      question: "Consider the code:\nWhat is the result?",
      code: "1) t = (2,4,6,8,10,12)\n2) d = {1:'A',2:'B',3:'C',4:'D',5:'E',6:'F'}\n3) result=1\n4) for t1 in t:\n5) if t1 in d:\n6) result+=t1\n7) print(result)",
      options: ["12", "13", "19", "6"],
      correct: 1,
      explanation: "Toate elementele tuplului (2,4,6,8,10,12) sunt chei valide în dicționar (1-6), deci fiecare se adaugă la result: 1+2+4+6+8+10+12=43... însă doar cheile 1-6 există; elementele tuplului 8,10,12 nu sunt chei — se adună doar 2,4,6: 1+2+4+6=13."
    },
    {
      id: "py-src-128",
      chapter: "structuri-control",
      type: "single",
      question: "Consider the code:\nWhat is the result?",
      code: "1) t = (2,4,6,8,10,12)\n2) d = {1:'A',2:'B',3:'C',4:'D',5:'E',6:'F'}\n3) result=1\n4) for t1 in t:\n5) if t1 in d:\n6) continue\n7) else:\n8) result+=t1\n9) print(result)",
      options: ["29", "30", "31", "32"],
      correct: 2,
      explanation: "Elementele care SUNT chei în d (2,4,6) fac 'continue' (sunt sărite). Elementele care NU sunt chei (8,10,12) se adaugă la result: 1+8+10+12=31."
    },
    {
      id: "py-src-129",
      chapter: "structuri-control",
      type: "single",
      question: "Consider the code:\nWhat is the result?",
      code: "1) values = [[3, 4, 5, 1], [33, 6, 1, 2]]\n2)\n3) v = values[0][0]\n4) for lst in values:\n5) for element in lst:\n6) if v > element:\n7) v = element\n8)\n9) print(v)",
      options: ["3", "2", "1", "4"],
      correct: 2,
      explanation: "Se caută valoarea minimă din toate elementele listei imbricate: min(3,4,5,1,33,6,1,2) = 1."
    },
    {
      id: "py-src-147",
      chapter: "input-output",
      type: "multiple",
      question: "Consider the following code.\nWhich of the following are valid about this code?",
      code: "1) import os\n2) def get_data(filename,mode):\n3) if os.path.isfile(filename):\n4) with open(filename,'r') as file:\n5) return file.readline()\n6) else:\n7) return None",
      options: ["This function returns the first line of the file if it is available", "This function returns None if the file does not exist", "This function returns total data present in the file", "This function returns last line of the file"],
      correct: [0, 1],
      explanation: "Funcția verifică dacă fișierul există (os.path.isfile), citește prima linie cu readline() dacă da, sau returnează None dacă fișierul nu există — deci A și B sunt corecte."
    },
    {
      id: "py-src-156",
      chapter: "input-output",
      type: "single",
      question: "Conside the file abc.txt:\n\nabc.txt:\n--------\nDurga:10\nRavi:20\nShiva:30\nPavan:40\n\nConsider the python code which is present in the same location of the file\nWhat is the result?",
      code: "test.py:\n--------\n1) values=0\n2) try:\n3) f=open('abc.txt','r')\n4) content=f.readlines()\n5) for line in content:\n6) values+=float(line.split(':')[1])\n7) f.close()\n8) except Exception:\n9) print('Unable to open the file')\n10) print(values)",
      options: ["Unable to open the file", "100", "100.0", "10.0"],
      correct: 2,
      explanation: "values este inițializat ca int (0), dar la fiecare pas i se adaugă un float (rezultatul lui float(...)), deci Python convertește automat rezultatul la float: 10.0+20.0+30.0+40.0=100.0."
    },
    {
      id: "py-src-159",
      chapter: "input-output",
      type: "single",
      question: "Which Line should be inserted at Line-1 ?",
      code: "Assume that we are writing python code for some voting application.\nYou need to open the file voters_list.txt and add new voters info and print total data to the console?\n1) with open('voters_list.txt','a+') as f:\n2) f.write('New voters info')\n3) #Line-1\n4) data=f.read()\n5) print(data)",
      options: ["f.seek(0)", "f.flush()", "f.begin()", "f.close()"],
      correct: 0,
      explanation: "f.seek(0) mută cursorul de citire înapoi la începutul fișierului, necesar înainte de f.read() ca să citească tot conținutul (inclusiv ce tocmai s-a scris)."
    },
    {
      id: "py-src-166",
      chapter: "input-output",
      type: "single",
      question: "You are intern for XYZ Cars Company.You have to create a function that calculates the average velocity of vehicle on a\n2640 foot(1/2 mile)track. Consider the python code:\n\n1) distance=xxx(input('Enter the distance travelled in feet:')) #Line-1\n2) distance_miles=distance/5280\n3) time=yyy(input('Enter the time elapsed in seconds:')) #Line-2\n4) time_hours=time/3600\n5) velocity=distance_miles/time_hours\n6) print('The average Velocity:',velocity,'miles/hour')\nTo generate most precise output, which modifications should be done at Line-1 and atLine-2.",
      options: ["xxx should be replaced with float and yyy should be replaced with float", "xxx should be replaced with float and yyy should be replaced with int", "xxx should be replaced with int and yyy should be replaced with float", "xxx should be replaced with int and yyy should be replaced with int"],
      correct: 0,
      explanation: "Pentru cea mai precisă valoare a vitezei, atât distanța cât și timpul introduse trebuie convertite la float (nu int), pentru a păstra zecimalele în calcul."
    },
    {
      id: "py-src-175",
      chapter: "structura-cod",
      type: "single",
      question: "You develop a application for your company. You want to add notes to your code so other team members will understand\nit. What should you do?",
      options: ["Place the notes after the last line of code separated by a blank line.", "Place the notes inside of parentheses on any line.", "Place the notes after the # sign on any line.", "Place the notes before the first line of code separated by a blank line."],
      correct: 2,
      explanation: "În Python, comentariile încep cu semnul # și pot fi plasate pe orice linie a codului."
    },
    {
      id: "py-src-176",
      chapter: "structura-cod",
      type: "single",
      question: "You are writing an application that uses the sqrt function. The program must reference the function using the name\nsquareRoot. You need to import the function. Which code segment should you use?",
      options: ["from math import sqrt as squareRoot", "from math.sqrt as squareRoot", "import math.sqrt as squareRoot", "import sqrt from math as squareRoot"],
      correct: 0,
      explanation: "'from math import sqrt as squareRoot' importă funcția sqrt din modulul math și îi atribuie un alt nume (squareRoot) local."
    },
    {
      id: "py-src-187",
      chapter: "functii",
      type: "single",
      question: "Consider the following code:\nFor which of the function calls we will get Error?",
      code: "def get_score(total=0,valid=0):\n result=int(valid)/int(total)\n return result",
      options: ["score = get_score('40', '4')", "score = get_score(0, 10)", "score = get_score(40, 4)", "score = get_score(40)"],
      correct: 1,
      explanation: "get_score(0, 10) înseamnă total=10, valid=0 (parametrii sunt total, apoi valid — dar aici sunt pasați pozițional ca total=0, valid=10, ceea ce duce la o împărțire int(10)/int(0) → ZeroDivisionError."
    },
    {
      id: "py-src-188",
      chapter: "functii",
      type: "single",
      question: "Consider the code\nWhat is the result?",
      code: "1) def get_names():\n2) names=['Sunny','Bunny','Chinny','Vinny','Pinny']\n3) return names[2:]\n4)\n5) def update_names(elements):\n6) new_names=[]\n7) for name in elements:\n8) new_names.append(name[:3].upper())\n9) return new_names\n10)\n11) print(update_names(get_names()))",
      options: ["['CHI', 'VIN', 'PIN']", "['VIN', 'PIN']", "['CH', 'VI', 'PI']", "['SU', 'BU']"],
      correct: 0,
      explanation: "get_names() întoarce ['Chinny','Vinny','Pinny'] (de la index 2). update_names ia primele 3 litere din fiecare, cu majuscule: ['CHI','VIN','PIN']."
    },
    {
      id: "py-src-189",
      chapter: "functii",
      type: "single",
      question: "Consider the following code\n1) def my_list(x):\n2) lst.append(a)\n3) return lst\n4)\n5) my_list('chicken')\n6) my_list('mutton')\n7) print(my_list('fish'))\n\nto print the following to the console\n['chicken','mutton','fish']\nx should be replaced with",
      options: ["a,lst=[]", "a,lst=()", "a,lst={}", "a,lst=None"],
      correct: 0,
      explanation: "Pentru ca funcția să acumuleze elementele corect la fiecare apel, lst trebuie inițializat o singură dată ca listă goală în afara funcției (a,lst=[]), altfel s-ar reseta la fiecare apel."
    },
    {
      id: "py-src-198",
      chapter: "gestionare-erori",
      type: "single",
      question: "Consider the code:\nFor the input: 10,20,30,40 what is the result?",
      code: "1) data=[]\n2) def get_data():\n3) for i in range(1,5):\n4) marks=input('Enter Marks:')\n5) data.append(marks)\n6)\n7) def get_avg():\n8) sum=0\n9) for mark in data:\n10) sum += mark\n11) return sum/len(data)\n12) get_data()\n13) print(get_avg())",
      options: ["25", "25.0", "NameError is thrown at runtime", "TypeError is thrown at runtime"],
      correct: 3,
      explanation: "input() întoarce întotdeauna un șir (str). La sum += mark se încearcă adunarea unui int (0) cu un str, ceea ce generează TypeError."
    },
    {
      id: "py-src-210",
      chapter: "gestionare-erori",
      type: "single",
      question: "Consider the code:\nWhich of the following is true about this code?",
      code: "import sys\n\ntry:\n file_in = open('in.txt', 'r')\n file_out = open('out.txt', 'w+')\nexcept IOError:\n print('Cannot open file:', 'in.txt')\nelse:\n i = 1\n for line in file_in:\n print(line.rstrip())\n file_out.write(str(i) + ': ' + line)\n i += 1\n file_in.close()\n file_out.close()\nAssume that in.txt file is available but out.txt file does not exist.",
      options: ["The code runs, but generates logical error", "This program will copy data from in.txt to out.txt", "The code will generates a runtime error", "The code will generate a syntax error"],
      correct: 1,
      explanation: "Deoarece in.txt există, blocul else se execută: se citește fiecare linie din in.txt, se scrie în out.txt (care se creează automat cu modul 'w+'), realizând efectiv o copiere a datelor."
    },
    {
      id: "py-src-211",
      chapter: "gestionare-erori",
      type: "single",
      question: "Consider the file abc.txt has the following content:\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\naliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nWe have to write python code to read total data and print to the console.\n\ntry:\nWhich code should be inserted at Line-1 to meet the given requirement?",
      code: "f=open('abc.txt','r')\n //Line-1\nexcept:\n print('Unable to open the file')\n print(data)",
      options: ["data = f.readlines()", "data = f.readline()", "data = f.read()", "data = f.load()"],
      correct: 2,
      explanation: "f.read() citește tot conținutul fișierului dintr-o singură dată, ca un singur șir de caractere — exact ce cere cerința de a afișa 'total data'."
    },
    {
      id: "py-src-213",
      chapter: "gestionare-erori",
      type: "single",
      question: "Consider the code:\nWhat is the result?",
      code: "a=10\nb=20\nc='30'\nresult=a+b+c",
      options: ["102030", "3030", "TypeError", "ArithmeticError"],
      correct: 2,
      explanation: "a și b sunt int, dar c este șirul '30'. a+b+c încearcă să adune un int cu un str, ceea ce generează TypeError."
    },
    {
      id: "py-src-217",
      chapter: "gestionare-erori",
      type: "single",
      question: "While executing this code we are getting the following error:\nConsider the code:\n Traceback (most recent call last):\n5) print(total) Which of the following code should be used to fix this error?",
      code: "1) prices=[30.5,'40.5',10.5] File 'test.py', line 4, in <module>\n2) total=0 total += price\n3) for price in prices: TypeError: unsupported operand type(s) for +=: 'float' and 'str'\n4) total += price",
      options: ["total += str(price)", "total += int(price)", "total += float(price)", "total = total+price\n\n Answer: C"],
      correct: 2,
      explanation: "price este un șir ('40.5' printre altele), deci total += price eșuează. Conversia corectă este total += float(price), pentru a păstra și valorile zecimale."
    },
    {
      id: "py-src-218",
      chapter: "gestionare-erori",
      type: "multiple",
      question: "Consider the code: While executing this code we are getting the following error\n Traceback (most recent call last):\n5) print(total) By using which of the following code segments we can fix this problem(Choose 2)?",
      code: "1) prices=[10,'20',30,'40']\n File 'test.py', line 4, in <module>\n2) total=0\n total +=price\n3) for price in prices:\n TypeError: unsupported operand type(s) for +=: 'int' and 'str'\n4) total +=price",
      options: ["total += str(price)", "total += int(price)", "total += float(price)", "total = total+price\n Answer: B and C"],
      correct: [1, 2],
      explanation: "prices conține și numere întregi și șiruri numerice ('20','40'). Atât int(price) cât și float(price) convertesc corect șirurile la numere, permițând adunarea."
    },
    {
      id: "py-src-221",
      chapter: "gestionare-erori",
      type: "single",
      question: "Which type of exception will be raised if we are trying to call a method on the inappropriate object?",
      options: ["IndexError", "TypeError", "AttributeError", "None of these"],
      correct: 2,
      explanation: "AttributeError apare atunci când se apelează o metodă sau se accesează un atribut care nu există pentru tipul respectiv de obiect."
    },
    {
      id: "py-src-222",
      chapter: "gestionare-erori",
      type: "single",
      question: "Consider the code:\nf=open('abc.txt')\nf.readall()\n\nWhich exception will be raised?",
      options: ["AttributeError", "EOFError", "SystemError", "SyntaxError"],
      correct: 0,
      explanation: "Obiectele fișier din Python nu au o metodă readall() (aceasta există la alte limbaje/module), deci apelul generează AttributeError."
    },
    {
      id: "py-src-227",
      chapter: "module-librarii",
      type: "single",
      question: "Given the command invocation:\npython tests.py Itvedant\nWhich of the following code prints 'Itvedant' to the console?",
      options: ["from sys import argv; print(argv[1])", "from sys import argv; print(argv[0])", "from sys import args; print(args[0])", "from sys import args; print(args[1])"],
      correct: 0,
      explanation: "sys.argv[0] este numele scriptului, iar argv[1] este primul argument din linia de comandă — aici 'Itvedant'."
    },
    {
      id: "py-src-228",
      chapter: "module-librarii",
      type: "single",
      question: "Consider the code:\nWhat is the result?",
      code: "1) from sys import argv\n2) print(argv[0])\nand given the command invocation:\npy test.py DURGASOFT",
      options: ["DURGASOFT", "test.py", "IndexError will be thrown at runtime", "ImportError will be thrown at runtime"],
      correct: 1,
      explanation: "argv[0] este întotdeauna numele scriptului care rulează, deci se afișează 'test.py'."
    },
    {
      id: "py-src-229",
      chapter: "module-librarii",
      type: "single",
      question: "Consider the code:\nWhat is the result?",
      code: "1) from sys import argv\n2) print(argv[1]+argv[2])\nand given the command invocation:\npy test.py 10 20",
      options: ["30", "1020", "IndexError will be thrown at runtime", "ImportError will be thrown at runtime"],
      correct: 1,
      explanation: "argv[1] și argv[2] sunt șiruri text ('10' și '20'), iar '+' pe două șiruri le concatenează: '10'+'20' = '1020'."
    },
    {
      id: "py-src-230",
      chapter: "module-librarii",
      type: "single",
      question: "Consider the code :\n1) from sys import argv\n2) sum=0\n3) for i in range(2,len(argv)):\n4) sum += float(argv[i])\n5) print(\"The Average for {0} is {1:.2f}\".format(argv[1],sum/(len(argv)-2)))\nWhich of the following command invocations will generate the output:\nThe Average for Durga is 20.00",
      options: ["py test.py Durga 10 20 30", "py test.py Durga 10 20", "py test.py Durga 10", "py test.py 20"],
      correct: 0,
      explanation: "Pentru argumentele Durga, 10, 20, 30: media este (10+20+30)/3 = 20.00, iar argv[1]='Durga' se afișează ca nume."
    },
    {
      id: "py-src-234",
      chapter: "module-librarii",
      type: "multiple",
      question: "You are creating a function that manipulates a number. The function has the following requirements:\n A float is passed into the function\n The function must take the absolute value of the float\n Any decimal points after the integer must be removed\nWhich two math functions should you use? Each correct answer is part of the solution. Choose two.",
      options: ["math.ceil(x)", "math.fmod(x)", "math.floor(x)", "math.frexp(x)", "math.fabs(x)"],
      correct: [2, 4],
      explanation: "math.fabs(x) elimină semnul (valoare absolută), iar math.floor(x) elimină zecimalele rotunjind în jos la cel mai apropiat întreg — împreună îndeplinesc cerința."
    },
    {
      id: "py-src-239",
      chapter: "module-librarii",
      type: "single",
      question: "Consider the code:\nWhat is the result?",
      code: "1) import math\n2) l =[str(round(math.pi)) for i in range (1, 6)]\n3) print(l)",
      options: ["['3', '3', '3', '3', '3']", "['3', '3', '3', '3', '3','3']", "['1', '2', '3', '4', '5']", "['1', '2', '3', '4', '5','6']"],
      correct: 0,
      explanation: "round(math.pi) rotunjește 3.14159... la cel mai apropiat întreg, adică 3, pentru toate cele 5 iterații ale listei."
    },
    {
      id: "py-src-240",
      chapter: "module-librarii",
      type: "multiple",
      question: "Consider the code:\nWhich of the following will print some random value from the list?",
      code: "1) import random\n2) fruits=['Apple','Mango','Orange','Lemon']",
      options: ["print(random.sample(fruits))", "print(random.sample(fruits,3)[0])", "print(random.choice(fruits))", "print(random.choice(fruits)[0])"],
      correct: [1, 2],
      explanation: "random.choice(fruits) alege direct un element aleatoriu din listă (C). random.sample(fruits,3)[0] alege 3 elemente aleatorii unice și ia primul dintre ele, ceea ce e tot un rezultat aleatoriu valid (B)."
    },
    {
      id: "py-src-244",
      chapter: "module-librarii",
      type: "single",
      question: "Consider the python code:\nWhich of the following is true?",
      code: "1) import random\n2) print(int(random.random()*5))",
      options: ["It will print a random int value from 0 to 5", "It will print a random int value from 1 to 5", "It will print a random int value from 0 to 5", "It will print a random int value from 0 to 4", "It will print 5"],
      correct: 3,
      explanation: "random.random() întoarce un float între 0.0 și 1.0 (exclusiv 1.0); înmulțit cu 5 și convertit la int, rezultatul poate fi doar 0, 1, 2, 3 sau 4 — niciodată 5."
    },
    {
      id: "py-src-245",
      chapter: "module-librarii",
      type: "single",
      question: "Consider the code\nWhich of the following is valid?",
      code: "1) import random\n2) print(random.sample(range(10), 7))",
      options: ["It will print list of 10 unique random numbers from 0 to 6", "It will print list of 7 unique random numbers from 0 to 9", "It will print list of 7 unique random numbers from 0 to 10", "It will print list of 7 unique random numbers from 1 to 10"],
      correct: 1,
      explanation: "random.sample(range(10), 7) alege 7 valori unice, aleatorii, din intervalul 0-9 (10 valori posibile în total)."
    }
,

    {
      id: "py-src-1",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Consider the following python code:\nThe types of age,minor and name variables respectively:",
      code: "1) age=0\n2) minor=False\n3) name='Durga'",
      options: ["int, bool, str", "bool, bool, str", "int, bool, char", "float, bool, str"],
      correct: 0,
      explanation: "age=0 este int, minor=False este bool, name='Durga' este str."
    },
    {
      id: "py-src-2",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Consider the following python code:\nThe types of weight, zip and value variables respectively:",
      code: "weight = 62.4\nzip='880098'\nvalue=+23E4",
      options: ["float, str, str", "int, str, float", "double, str, float", "float, str, float"],
      correct: 3,
      explanation: "weight=62.4 e float; zip='880098' e str (are ghilimele); value=+23E4 e notație științifică, tot float (23E4=230000.0). 'double' nu există ca tip în Python."
    },
    {
      id: "py-src-9",
      chapter: "operatori-tipuri",
      type: "single",
      question: "You are writing a Python program. You required to handle data types properly.\nConsider the code segment:\nIdentify the types of a,b and c?",
      code: "1) a=10+20\n2) b='10'+'20'\n3) c='10'*3",
      options: ["a is of int type,b is of str type and c is of str type", "a is of int type,b is of str type and c is of int type", "a is of int type,b is of int type and c is of int type", "a is of int type ,b and c are invalid declarations\n\n 4"],
      correct: 0,
      explanation: "a=10+20=30 (int). b='10'+'20'='1020' (concatenare str). c='10'*3='101010' (repetare str)."
    },
    {
      id: "py-src-11",
      chapter: "operatori-tipuri",
      type: "single",
      question: "You have the following code:\nWhich of the variables will represent False:",
      code: "1) a=bool([False])\n2) b=bool(3)\n3) c=bool(\"\")\n4) d=bool(' ')",
      options: ["a", "b", "c", "d"],
      correct: 2,
      explanation: "bool([False]) e True (listă nevidă, chiar dacă conține False). bool(3)=True. bool(\"\")=False (șir gol). bool(' ')=True (are un spațiu, deci nu e gol)."
    },
    {
      id: "py-src-12",
      chapter: "structuri-date",
      type: "single",
      question: "Consider the following variable declarations:\nWhich of the above variables represent True ?",
      code: "1) a= bool([])\n2) b= bool(())\n3) c= bool(range(0))\n4) d= bool({})\n5) e= bool(set())",
      options: ["c", "a ,b, c, d", "All Variables represent True", "None of the variables represents True"],
      correct: 3,
      explanation: "bool([])=False, bool(())=False, bool(range(0))=False, bool({})=False, bool(set())=False — toate structurile goale sunt False. Niciuna nu e True."
    },
    {
      id: "py-src-13",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Which variables represent True?",
      code: "1) a=bool(0)\n2) b=bool(3)\n3) c=bool(0.5)\n4) d=bool(0.0)",
      options: ["a,b", "b,c", "c,d", "d,a", "All Variables"],
      correct: 1,
      explanation: "bool(0)=False, bool(3)=True, bool(0.5)=True, bool(0.0)=False. Adevărate sunt b și c."
    },
    {
      id: "py-src-14",
      chapter: "operatori-tipuri",
      type: "single",
      question: "You are writing a Python program to read two int values from the keyboard and print the sum.\nWhich of the following code we have to write at Line-1 to print sum of given numbers?",
      code: "1) x=input('Enter First Number:')\n2) y=input('Enter Second Number:')\n3) #Line-1",
      options: ["print('The Result:'+(int(x)+int(y)))", "print('The Result:'+(int(x+y)))", "print('The Result:'+str(int(x)+int(y)))", "print('The Result:'+str(int(x+y)))\n\n 6"],
      correct: 2,
      explanation: "input() întoarce str. Trebuie convertit la int pentru adunare, apoi rezultatul convertit înapoi la str pentru concatenare: str(int(x)+int(y))."
    },
    {
      id: "py-src-17",
      chapter: "structuri-date",
      type: "single",
      question: "You develop an application for your school. A list named colors contains 200 colors. You need to slice the list to display\nevery other color starting with the second color.\nWhich code should you use?",
      options: ["colors[1:2]", "colors [::2]", "colors[2:2]", "colors [1::2]\n\n\n\n\n 7"],
      correct: 3,
      explanation: "colors[1::2] pornește de la al doilea element (index 1) și ia unul din doi, exact 'every other starting with the second'."
    },
    {
      id: "py-src-18",
      chapter: "structuri-date",
      type: "multiple",
      question: "You develop an application for your company. A list named employees contains 200 employee names, the last five being\ncompany management. You need to slice the list to display all employees excluding management. Which two code\nsegments should you use? Each correct answer presents a complete solution. Choose two.",
      options: ["employees[0:-4]", "employees [1:-5]", "employees [:-5]", "employees [0:-5]", "employees [1:-4]"],
      correct: [2, 3],
      explanation: "employees[:-5] și employees[0:-5] sunt echivalente și exclud exact ultimele 5 elemente, păstrând totul de la început."
    },
    {
      id: "py-src-19",
      chapter: "structuri-date",
      type: "multiple",
      question: "You are developing a python application for your company. A list named employees contains 600 employee names,the\nlast 3 being company management. You need to slice employees to display all employees excluding management. Which\ntwo code segments we should use?",
      options: ["employees[1:-2]", "employees[:-3]", "employees[1:-3]", "employees[0:-2]", "employees[0:-3]"],
      correct: [1, 4],
      explanation: "employees[:-3] și employees[0:-3] exclud ultimele 3 elemente (managementul), păstrând restul de la început."
    },
    {
      id: "py-src-20",
      chapter: "structuri-date",
      type: "single",
      question: "You are developing a python application for your company. A list named employees contains 500 employee names,the\nlast 3 being company management. Which of the following represents only management employees.",
      options: ["employees[497:]", "employees[-3:]", "employees[497:500]", "All the above"],
      correct: 3,
      explanation: "employees[497:], employees[-3:] și employees[497:500] sunt toate echivalente și reprezintă exact ultimele 3 elemente (managementul)."
    },
    {
      id: "py-src-21",
      chapter: "structuri-date",
      type: "single",
      question: "You write the following code:\nWhat is the output value?",
      code: "list_1 = [1, 2]\nlist_2 = [3, 4]\nlist_3 = list_1 + list_2\nlist_4 = list_3 * 3\nprint(list_4)\nYou run the code.",
      options: ["[3, 6, 9, 12]", "[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]", "[[1, 2], [3, 4], [1, 2], [3, 4], [1, 2], [3, 4]]", "[[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]"],
      correct: 1,
      explanation: "list_3=[1,2,3,4]; list_4=list_3*3 REPETĂ lista de 3 ori (nu înmulțește elementele): [1,2,3,4,1,2,3,4,1,2,3,4]."
    },
    {
      id: "py-src-22",
      chapter: "operatori-tipuri",
      type: "multiple",
      question: "Woodgrove Bank must generate a report that shows the average balance for all customers each day. The report must\ntruncate the decimal portion of the balance. Which two code segments should you use? Each correct answer presents a\ncomplete solution. Choose two.",
      options: ["average_balance = total_deposits**number_of_customers", "average_balance = total_deposits//number_of_customers", "average_balance = int(total_deposits/number_of_customers)", "average_balance = float(total_deposits//number_of_customers)\n\n 8"],
      correct: [1, 2],
      explanation: "// (floor division) și int() al rezultatului diviziunii ambele elimină partea zecimală, dând un rezultat întreg trunchiat."
    },
    {
      id: "py-src-26",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is a variable defined outside a function referred to as?",
      options: ["A static variable", "A global variable", "A local variable", "An automatic variable"],
      correct: 1,
      explanation: "O variabilă definită în afara oricărei funcții este o variabilă globală, accesibilă din tot fișierul."
    },
    {
      id: "py-src-27",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What will be the output of the following Python code?\ndef change():\n global b\n a = 45\n b = 56\n\nchange()\nprint(a)\nprint(b)",
      code: "a = 10\nb = 20",
      options: ["10,56", "45,56", "10, 20", "Syntax Error"],
      correct: 0,
      explanation: "În funcție, 'a=45' creează o variabilă LOCALĂ 'a' (nu afectează global-ul), dar 'global b' face ca 'b=56' să modifice variabila globală. Deci a rămâne 10, b devine 56."
    },
    {
      id: "py-src-28",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What will be the output of the following Python code?\ndef change(i=1, j=2):\n i = i + j\n j = j + 1\n print(i, j)\n\nchange(j=1, i=2)",
      options: ["An exception is thrown because of conflicting values", "1 2", "3 3", "3 2"],
      correct: 3,
      explanation: "Apelul change(j=1, i=2) dă i=2, j=1. i=i+j=2+1=3. j=j+1=1+1=2. Se afișează '3 2'."
    },
    {
      id: "py-src-29",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What will be the output of the following python code?\nnames=['itvedant','Thane','Andheri','Navi Mumbai']\nprint(names[-1][-1])",
      options: ["Navi Mumbai", "Mumbai", "i", "a\n\n\n\n\n 10"],
      correct: 2,
      explanation: "names[-1] este 'Navi Mumbai', iar names[-1][-1] este ultimul caracter al acestui șir, adică 'i'."
    },
    {
      id: "py-src-30",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is the return type of the function id()?",
      options: ["int", "float", "bool", "str"],
      correct: 0,
      explanation: "id() întoarce un identificator numeric (adresa din memorie), de tip int."
    },
    {
      id: "py-src-31",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What will be the output of the following python code?\nf=lambda x:bool(x%2)\nprint(f(20), f(21))",
      options: ["False True", "False False", "True True", "True False"],
      correct: 0,
      explanation: "f(20): 20%2=0 → bool(0)=False. f(21): 21%2=1 → bool(1)=True. Rezultă 'False True'."
    },
    {
      id: "py-src-32",
      chapter: "structuri-date",
      type: "single",
      question: "Consider the following lists:\nWhat is the output?",
      code: "n1=[10,20,30,40,50]\nN2=[10,20,30,40,50]\nprint(n1 is n2)\nprint(n1 == n2)",
      options: ["False, False", "True, True", "True, False", "False, True"],
      correct: 3,
      explanation: "n1 și n2 sunt liste diferite (obiecte separate) create cu aceleași valori: 'is' compară identitatea (False), '==' compară conținutul (True)."
    },
    {
      id: "py-src-33",
      chapter: "structuri-date",
      type: "single",
      question: "Consider the following lists:\nWhat is the result?",
      code: "1) n1=[10,20,30,40,50]\n2) n2=[10,20,30,40,50]\n3) print(n1 is n2)\n4) print(n1 == n2)\n5) n1=n2\n6) print(n1 is n2)\n7) print(n1 == n2)",
      options: ["False, False, True, True", "False, True, False, True", "False, True, True, True", "True, False, True, False\n\n\n\n\n 11"],
      correct: 2,
      explanation: "n1 și n2 sunt inițial obiecte diferite cu conținut egal: is→False, ==→True. După n1=n2, ambele indică același obiect: is→True, ==→True."
    },
    {
      id: "py-src-34",
      chapter: "structuri-date",
      type: "single",
      question: "Consider the lists:\nWhat is the result?",
      code: "1) numbers=[10,20,30,40,50]\n2) alphabets=['a','b','c','d','e']\n3) print( numbers is alphabets)\n4) print( numbers == alphabets)\n5) numbers=alphabets\n6) print( numbers is alphabets)\n7) print( numbers == alphabets)",
      options: ["False, False, True, True", "False, True, False, True", "True, False, True, False", "False, True, True, True"],
      correct: 0,
      explanation: "numbers și alphabets sunt liste diferite, cu conținut diferit: is→False, ==→False. După numbers=alphabets, ambele indică același obiect: is→True, ==→True."
    },
    {
      id: "py-src-41",
      chapter: "structuri-date",
      type: "single",
      question: "Consider the list:\nlist = ['Apple', 'Banana', 'Carrot', 'Mango']\nWhitch of the following are the valid ways of accessing 'Mango':\nOption A : list[3]\nOption B: list[4]\nOption C: list[-1]\nOption D: list[0]",
      options: ["A and B", "B and D", "A and C", "All options"],
      correct: 2,
      explanation: "list[3] și list[-1] indică ambele ultimul element 'Mango' (index valid). list[4] ar da IndexError, list[0] e 'Apple'."
    },
    {
      id: "py-src-42",
      chapter: "operatori-tipuri",
      type: "single",
      question: "You are given the following Python code snippet:\nx = 'TEXT'\nWhich line of code will assign the string 'TT' to the variable output?",
      options: ["output = x[1] + x[1]", "output = x[1] + x[4]", "output = x[0] + x[2]", "output = x[0] + x[-1]"],
      correct: 3,
      explanation: "x[0]='T' și x[-1]='T' (ultimul caracter al 'TEXT'), deci x[0]+x[-1]='TT'."
    },
    {
      id: "py-src-43",
      chapter: "structuri-date",
      type: "single",
      question: "Consider the Python code:\nWhat is the result?",
      code: "a=['a','b','c','d']\nfor i in a:\n a.append(i.upper())\nprint(a)",
      options: ["['A', 'B', 'C', 'D']", "['a', 'b', 'c', 'd']", "SyntaxError", "MemoryError thrown at runtime"],
      correct: 3,
      explanation: "Modificarea unei liste (append) în timp ce o parcurgi cu for extinde iterația la elementele nou adăugate. Cum 'A'.upper()='A' etc. sunt puncte fixe, lista crește la nesfârșit cu fiecare pas, ducând în cele din urmă la MemoryError."
    },
    {
      id: "py-src-45",
      chapter: "structuri-date",
      type: "single",
      question: "Consider the code:\nt=([10,20],10,False)\nWhitch line of the code assigns <class 'list'> to x?",
      options: ["x = type(t)", "x = type(t[0])", "x=type(t[1])", "x = type(t[0:1])"],
      correct: 1,
      explanation: "t[0] este [10, 20], o listă — deci type(t[0]) este <class 'list'>."
    },
    {
      id: "py-src-49",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Consider the code\nWhat is the result ?",
      code: "1) a=15\n2) b=5\n3) print(a/b)",
      options: ["3", "3.0", "0", "0.0"],
      correct: 1,
      explanation: "În Python 3, împărțirea cu / întoarce întotdeauna float: 15/5 = 3.0."
    },
    {
      id: "py-src-50",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Consider the code\nWhat is the result?",
      code: "1) a=21\n2) b=6\n3) print(a/b)\n4) print(a//b)\n5) print(a%b)",
      options: ["3 3 3", "3.5 3 3", "3.0 3 3", "3.5 3.5 3"],
      correct: 1,
      explanation: "a/b=21/6=3.5 (float); a//b=21//6=3 (floor division); a%b=21%6=3 (rest). Rezultat: 3.5 3 3."
    },
    {
      id: "py-src-52",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Consider the following expression\nWhat is the result?",
      code: "1) result=8//6%5+2**3-2\n2) print(result)",
      options: ["6", "7", "8", "9\n\n 16"],
      correct: 1,
      explanation: "Ordinea operațiilor: 2**3=8; 8//6=1; 1%5=1; 1+8-2=7."
    },
    {
      id: "py-src-62",
      chapter: "structuri-date",
      type: "single",
      question: "You evaluate the following code:\nWhat is the output of the print statement?",
      code: "numList = [0,1,2,3,4]\nprint(5 in numList)",
      options: ["4", "False", "True", "5"],
      correct: 1,
      explanation: "Lista numList=[0,1,2,3,4] nu conține valoarea 5, deci '5 in numList' este False."
    },
    {
      id: "py-src-64",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Consider the expession:\nresult=a-b*c+d\nWhich of the following are valid?",
      options: ["First b*c will be evaluated followed by subtraction and addition", "First b*c will be evaluated followed by addition and subtraction", "First a-b will be evaluated followed by multiplication and addition", "The above expession is equivalent to a-(b*c)+d\n\n\n 19"],
      correct: 3,
      explanation: "Înmulțirea are prioritate mai mare decât adunarea/scăderea, deci expresia a-b*c+d este echivalentă cu a-(b*c)+d."
    },
    {
      id: "py-src-65",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Consider the code\n1) a=2\n2) a += 1\n3) # Line-1\n\nTo make a value as 9,which expression required to place at Line-1",
      options: ["a*=2", "a**=2", "a+=2", "a-=2"],
      correct: 1,
      explanation: "a=2; a+=1 → a=3. Pentru a ajunge la 9: a**=2 → 3**2=9."
    },
    {
      id: "py-src-66",
      chapter: "operatori-tipuri",
      type: "multiple",
      question: "Consider the python code\nIn Which of the following cases the result value is 0?",
      code: "1) a=1\n2) b=3\n3) c=5\n4) d=7",
      options: ["result = a+b*2", "result = a%b-1", "result = a-b//d", "result = a**d-1"],
      correct: [1, 3],
      explanation: "a%b-1 = 1%3-1 = 1-1 = 0. De asemenea a**d-1 = 1**7-1 = 1-1 = 0. Ambele expresii dau 0."
    },
    {
      id: "py-src-76",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What will be the value of X in the following Python expression?\nX = 2+9*((3*12)-8)/10",
      options: ["30.0", "30.8", "28.4", "27.2"],
      correct: 3,
      explanation: "(3*12)-8=28; 9*28=252; 252/10=25.2; 2+25.2=27.2."
    },
    {
      id: "py-src-77",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Operators with the same precedence are evaluated in which manner?",
      options: ["Left to Right", "Right to Left", "Can't say", "None of the mentioned"],
      correct: 0,
      explanation: "Operatorii cu aceeași prioritate sunt evaluați de la stânga la dreapta (cu excepția puterii, care e de la dreapta la stânga)."
    },
    {
      id: "py-src-78",
      chapter: "operatori-tipuri",
      type: "single",
      question: "You are writing a python program that evaluates an arithmetic expression.\nThe expression is described as b is equals a multiplied by negative one, then raised to\nthe second power, where a is the value which will be input and b is result.\na=eval(input('Enter a number for the expression:'))\nWhich of the following is valid expression for the given requirement?",
      options: ["b = (a) ** -2", "b = (-a) ** 2", "b = (a-) ** 2", "b = -(a) ** 2"],
      correct: 1,
      explanation: "b este a înmulțit cu -1, apoi ridicat la puterea 2: b=(-a)**2, echivalentă cu (a*-1)**2."
    },
    {
      id: "py-src-79",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Which expression evaluates to 4?",
      options: ["7//2-3", "7%2+3", "7/2*3", "7-2*3\n\n\n 23\n\n1.4 Select operators to achieve the intended results\n• Assignment (=, +=, -=, /=, %=, //=, **=), comparison (==, >=, <=, !=), logical (and, or, not), logical, arithmetic (+, -, /,\n//, %, **, unary + and -), identity (is), containment (in)"],
      correct: 1,
      explanation: "7%2+3 = 1+3 = 4."
    },
    {
      id: "py-src-80",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Evaluate the following arithmetic expression:\n(3*(1+2)**2 - (2**2)*3)\nWhat is the result?",
      options: ["3", "13", "15", "69"],
      correct: 2,
      explanation: "(1+2)**2=9; 3*9=27; 2**2=4; 4*3=12; 27-12=15."
    },
    {
      id: "py-src-82",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Which of the following expressions results in an error?",
      options: ["float(\"10')", "int(\"10')", "float('10.8')", "int('10.8'"],
      correct: 3,
      explanation: "int('10.8') generează ValueError — int() nu poate converti direct un șir cu punct zecimal la întreg."
    },
    {
      id: "py-src-94",
      chapter: "structuri-control",
      type: "single",
      question: "You need to complete the code. Which code should you add on line 03?",
      code: "You are writing a Python application for a dance studio. The studio wants to encourage youth and seniors to sign up.\nMinors and seniors must receive a 10% discount.\nYou write the following code. Line numbers are included for reference only.\n01 def get_discount(minor, senior):\n02 discount = .1\n03\n04 discount = 0\n05 return discount",
      options: ["if not (minor and senior):", "if not (minor or senior):", "if (not minor) and senior:", "if (not minor) or senior:"],
      correct: 1,
      explanation: "Dacă persoana NU e nici minor, nici senior (adult obișnuit), reducerea trebuie anulată: 'if not (minor or senior): discount=0'. Altfel reducerea de .1 rămâne."
    },
    {
      id: "py-src-107",
      chapter: "structuri-control",
      type: "single",
      question: "If the Book rented on 'Sunday',the number of days Book rented is 5 and Book returned after 9PM then what is the result?",
      code: "The XYZ Book Company needs a way to determine the cost that a student will pay for renting a Book.\n● The Cost is dependent on the time of the Book is returned.\n● However there are also special rates on Saturday and Sundays.\n● The Fee Structure is shown in the following list:\n● The cost is $3.00 per night.\nIf the Book is returned after 9PM, the student will be charged an extra day. If the Book is rented on a Sunday,the student\nwill get 50% off for as long as they the keep the book.\nIf the Book is rented on a Saturday,the student will get 30% off for as long as they keep the book.\nWe need to write the code to meet this requirements.\n# XYZ Book Rented Amount Calculator\nontime = input(\"Was Book returned before 9 pm? y or n\").lower()\ndays_rented = int(input(\"How many days was video rented? \"))\nday_rented = input(\"What day was the video rented?\").capitalize()\ncost_per_day = 3.00\nif ontime == 'n'\n days_rented = days_rented + 1\nif day_rented == 'Sunday'\n total = (days_rented * cost_per_day) *0.5\nelif day_rented == 'Saturday'\n total = (days_rented * cost_per_day) *0.7\nelse:\n total = days_rented * cost_per_day\nprint(\"The Cost of the Book rental is : $\", total)",
      options: ["The Cost of Book Rental is: $7.0", "The Cost of Book Rental is: $8.0", "The Cost of Book Rental is: $9.0", "The Cost of Book Rental is: $10.0"],
      correct: 2,
      explanation: "Returnat după 9 seara → +1 zi (5+1=6 zile). Ziua e Duminică → 50% reducere: (6*3.00)*0.5 = 9.0."
    },
    {
      id: "py-src-112",
      chapter: "structuri-control",
      type: "single",
      question: "Consider the Python code:\nTo print 'Valid' to the console, whitch condition we have to take for if statement?",
      code: "a=5\nb=10\nc=2\nd=True\n\nx=a+b*c\ny=a+b/d\n\nif(condition):\n print('Valid')\nelse:\n print('Invalid')",
      options: ["x > y", "x == y", "x < y", "x <= y"],
      correct: 0,
      explanation: "x=a+b*c=5+20=25. y=a+b/d=5+10/True=5+10.0=15.0 (True se comportă ca 1). x>y (25>15) este condiția care afișează 'Valid'."
    },
    {
      id: "py-src-133",
      chapter: "structuri-control",
      type: "single",
      question: "What will be the output of the following Python code?\nTrue = False\nwhile True:\n print(True)\n break",
      options: ["True", "False", "None", "none of the mentioned"],
      correct: 3,
      explanation: "În Python 3, True este un cuvânt cheie rezervat și nu poate fi reatribuit — 'True = False' generează de fapt o eroare de sintaxă, deci niciunul dintre răspunsurile de afișare nu e corect."
    },
    {
      id: "py-src-136",
      chapter: "structuri-control",
      type: "single",
      question: "What will be the output of the following Python code?\nfor i in range(0):\nprint(i)",
      options: ["0", "no output", "error", "None of the mentioned."],
      correct: 2,
      explanation: "Corpul lui 'for' (print(i)) nu este indentat sub linia for, ceea ce generează IndentationError la Python."
    },
    {
      id: "py-src-137",
      chapter: "structuri-control",
      type: "single",
      question: "What will be the output of the following python code.\nfor i not in a:\n print(i)\n i += 1",
      code: "a = [0, 1, 2, 3]\ni = -2",
      options: ["-2 -1", "0", "error", "none of the mentioned"],
      correct: 2,
      explanation: "'for i not in a:' nu este o sintaxă for validă în Python (for cere 'for var in iterabil:'), deci apare o eroare de sintaxă."
    },
    {
      id: "py-src-139",
      chapter: "structuri-control",
      type: "single",
      question: "Consider the code:\nWhat is the result?",
      code: "l=[10, (20,), {30}, {}, {}, [48,50]]\ncount=0\nfor i in range(len(1)):\n if type(1[i])==list:\n count+=1\n elif type(1[i])==tuple:\n count+=2\n elif type(1[i])==set:\n count+=3\n elif type(1[i])==dict:\n count+=4\n else:\n count+=5\nprint(count)",
      options: ["17", "18", "19", "20\n\n\n 45"],
      correct: 2,
      explanation: "Cu l=[10,(20,),{30},{},{},[48,50]]: int→+5(=5), tuple→+2(=7), set→+3(=10), dict(gol)→+4(=14), dict(gol)→+4(=18), list→+1(=19). Rezultat final: 19."
    },
    {
      id: "py-src-143",
      chapter: "input-output",
      type: "single",
      question: "You develop a Python application for your school. You need to read and write data to a text file. If the file does not exist it\nmust be created. If the file has content the content must be removed.\nWhich code should you use?",
      options: ["open(\"local_data\", \"r+\")", "open(\"local_data\", \"w+\")", "open(\"local_data\", \"r\")", "open(\"local_data\", \"w\")"],
      correct: 1,
      explanation: "'w+' creează fișierul dacă nu există și golește conținutul existent, permițând și citire și scriere."
    },
    {
      id: "py-src-144",
      chapter: "input-output",
      type: "single",
      question: "You develop a python application for your school. You need to read and write data to a text file. If the file does not exist,\nit must be created. If the file has the content, the content must be removed. Which code we have to use?",
      options: ["open('abc.txt', 'w+')", "open('abc.txt', 'r')", "open('abc.txt', 'a')", "open('abc.txt', 'r+')"],
      correct: 0,
      explanation: "'w+' creează fișierul dacă nu există și îi șterge conținutul, permițând citire și scriere."
    },
    {
      id: "py-src-149",
      chapter: "input-output",
      type: "single",
      question: "Which of the following statements are true?",
      options: ["When you open a file for reading, if the file does not exist, an error occurs", "When you open a file for writing, if the file does not exist, a new file is created", "When you open a file for writing, if the file exists, the existing file is overwritten with\nthe new file", "All of the mentioned\n\n\n\n\n 49"],
      correct: 3,
      explanation: "Toate cele trei afirmații sunt adevărate: citirea unui fișier inexistent dă eroare, scrierea creează fișierul dacă nu există, iar scrierea peste un fișier existent îl suprascrie."
    },
    {
      id: "py-src-150",
      chapter: "input-output",
      type: "single",
      question: "To read the entire remaining contents of the file as a string from a file object infile, we use ____",
      options: ["infile.read(2)", "infile.read()", "infile.readline()", "infile.readlines()"],
      correct: 1,
      explanation: "infile.read() (fără argument) citește tot conținutul rămas al fișierului ca un singur string."
    },
    {
      id: "py-src-151",
      chapter: "input-output",
      type: "single",
      question: "What is the use of tell() method in python?",
      options: ["tells you the current position within the file", "tells you the end position within the file", "tells you the file is opened or not", "none of the mentioned"],
      correct: 0,
      explanation: "tell() întoarce poziția curentă a cursorului de citire/scriere din fișier."
    },
    {
      id: "py-src-160",
      chapter: "input-output",
      type: "single",
      question: "You write the following code:\nWhat is the output?",
      code: "import datetime\nd = datetime.datetime(2017, 4, 7)\nprint('{:%B-%d-%y}'.format(d))\n\nnum=1234567.890\nprint('{:, .4f}'.format(num))\nYou run the program.",
      options: ["2017--April--07\n 1,234,567.890\n Press any key to continue...", "Apr--07--2017\n 1,234,567,8900\n Press any key to continue...", "April--07--17\n 1,234,567.8900\n Press any key to continue...", "April--07--17\n 1234567.89\n Press any key to continue..."],
      correct: 2,
      explanation: "%B dă numele complet al lunii ('April'), %d ziua ('07'), %y anul pe 2 cifre ('17'). Formatul cu virgulă pentru număr adaugă separator de mii și 4 zecimale: '1,234,567.8900'."
    },
    {
      id: "py-src-161",
      chapter: "input-output",
      type: "single",
      question: "Northwind Traders has hired you as an intern on the coding team that creates e-commerce applications.\nYou must write a script that asks the user for a value. The value must be used as a whole number in a calculation, even if\nthe user enters a decimal value. You need to write the code to meet the requirements.\nWhich code segment should you use?",
      options: ["totalltems = int(input(\"How many items would you like?\"))", "totalltems = str(input(\"How many items would you like?\"))", "totalltems = float(input(\"How many items would you like?\"))", "totalltems = input(\"How many items would you like?\")"],
      correct: 0,
      explanation: "int(input(...)) convertește intrarea într-un număr întreg, folosit pentru calculul cerut ca număr întreg."
    },
    {
      id: "py-src-162",
      chapter: "input-output",
      type: "single",
      question: "Which code should you write at line 02?",
      code: "You develop a Python application for your company.\nYou need to accept input from the user and print that information to the user screen.\nYou have started with the following code. Line numbers are included for reference only.\n01 print('What is your name?')\n02\n03 print(name)",
      options: ["name = input", "input(name)", "name = input()", "input(\"name\")\n\n\n\n 53"],
      correct: 2,
      explanation: "Pentru a citi și stoca ce a introdus utilizatorul, e nevoie de 'name = input()'."
    },
    {
      id: "py-src-164",
      chapter: "input-output",
      type: "single",
      question: "You are creating a program that shows a congratulation message to employees on their service anniversary.\nYou need to calculate the number of years of service and print a congratulatory message.\nWhich code should you use at line 03?",
      code: "You have written the following code. Line numbers are included for reference only.\n01 start = input(\"How old were you on your start date?\")\n02 end = input(\"How old are you today?\")\n03\nYou need to complete the program.",
      options: ["print(\"congratulations on \" + int(end - start) + \" years of service!\")", "print(\"congratulations on \" + (int(end) - int(start)) + \" years of service!\")", "print(\"congratulations on \" + str(end - start) + \" years of service!\")", "print(\"congratulations on \" + str(int(end) - int(start)) + \" years of service!\")"],
      correct: 3,
      explanation: "Ambele valori introduse sunt string-uri; trebuie convertite la int pentru scădere, apoi rezultatul convertit înapoi la str pentru concatenare: str(int(end)-int(start))."
    },
    {
      id: "py-src-167",
      chapter: "input-output",
      type: "multiple",
      question: "You are creating an ecommerce script that accepts input from the user and outputs the data in a comma delimited format.\nYou write the following lines of code to accept input:\nThe output must meet the following requirements:\n  Strings must be enclosed inside of double-quotes\n  Numbers must not be enclosed in quotes or other characters\n  Each item must be separated with a comma\nYou need to complete the code to meet the requirements. Which three code segments should you use? Each correct\nanswer presents a complete solution. Choose three.",
      code: "item = input('Enter the item name: ')\nsales = input('Enter the quantity: ')",
      options: ["print('\"{0}\",{1}'.format(item, sales))", "print(item + \",' + sales)", "print('\"' + item + \"\",\" + sales)", "print(\"{0},{1}\".format(item, sales))", "print('\"%s\", %s' % (item, sales))"],
      correct: [0, 2, 4],
      explanation: "Cele trei abordări Pythonic diferite ating cerința: .format() cu ghilimele explicite (A), concatenare manuală cu ghilimele (C), și formatarea stil %s (E) — toate pun șirurile în ghilimele duble și lasă numerele nequotate."
    },
    {
      id: "py-src-196",
      chapter: "gestionare-erori",
      type: "single",
      question: "Tailspin Toys uses Python to control its new toy Happy Clown. The program has errors that cause the clown to run around\nin an infinite circle. You have been hired to help debug the following Happy Clown code. Line numbers are included for\nreference only.\n09 else:\n10 turnValue = 0\n11 move = 0",
      code: "01 import math\n02 #default motion for happy clown\n03 power = True\n04 move = 0\n05 while(power):\n06 if move == 0:\n07 turnValue = math.pi/move\n08 move+=5",
      options: ["Line 05 has a syntax error because it should read (power == True).", "Line 08 has a syntax error because + = is an invalid statement.", "Line 07 causes a runtime error due to division by zero.", "Line 05 causes a runtime error because the expression is incomplete."],
      correct: 2,
      explanation: "La prima iterație move=0, deci turnValue=math.pi/move încearcă o împărțire la zero, generând o eroare de tip runtime (ZeroDivisionError)."
    },
    {
      id: "py-src-202",
      chapter: "gestionare-erori",
      type: "single",
      question: "You write the following code:\nfor line in file_in:\n print(line. rstrip())\n file_out.write(\"line \" + str(i) + \": \" + line)\n i = i + 1\n file_in.close()\n file_out.close ()\nThe out.txt file does not exist. You run the code. The code will execute without error. Review the underlined text. If it\nmakes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that\nmakes the statement correct.",
      code: "import sys\n try:\n file_in = open(\"in.txt\", 'r')\n file_out = open(\"out.txt\", 'w+')\n except IOError:\n print('cannot open', file_name)\n else:\n i = 1",
      options: ["No change is needed.", "The code runs but generates a logic error.", "The code will generate a runtime error.", "The code will generate a syntax error."],
      correct: 0,
      explanation: "Modul 'w+' creează automat out.txt dacă nu există, deci codul rulează fără nicio eroare — afirmația este deja corectă, nu necesită nicio schimbare."
    },
    {
      id: "py-src-205",
      chapter: "gestionare-erori",
      type: "single",
      question: "When will the else part of try-except-else be executed?",
      options: ["always", "when no exception occurs", "when error exception", "when an exception occurs in to except block"],
      correct: 1,
      explanation: "Blocul else dintr-un try-except-else rulează doar dacă NU a apărut nicio excepție în blocul try."
    },
    {
      id: "py-src-206",
      chapter: "gestionare-erori",
      type: "single",
      question: "Is the following Python code valid?\ntry :\n Try block\nexcept:\n Except block\nfinally :\n Finally Block",
      options: ["no, there is no such thing as finally", "no, finally cannot be used with except", "no, finally must come before except", "yes"],
      correct: 3,
      explanation: "Da, try-except-finally este sintaxă validă în Python; finally poate fi folosit împreună cu except."
    },
    {
      id: "py-src-207",
      chapter: "gestionare-erori",
      type: "single",
      question: "What will be the output of the following python code?\ndef foo():\n try:\n return 1\n finally:\n return 2\nk = foo()\nprint(k)",
      options: ["1", "2", "3", "error, there is more than one return statement in a single try-finally block"],
      correct: 1,
      explanation: "return din finally suprascrie orice return anterior din try. finally: return 2 face ca funcția să întoarcă 2."
    },
    {
      id: "py-src-208",
      chapter: "gestionare-erori",
      type: "single",
      question: "Consider the code\nWhat is the result?",
      code: "def f1():\n try:\n return 1\n finally:\n return 2\n\nx = f1()\nprint(x)",
      options: ["1", "2", "print both 1 and 2", "Error, because more than one return statement is not allowed\n\n\n 68"],
      correct: 1,
      explanation: "La fel ca mai sus: return din finally are prioritate și suprascrie return-ul din try, deci x=2."
    },
    {
      id: "py-src-212",
      chapter: "gestionare-erori",
      type: "single",
      question: "The base class for all exceptions in python is:",
      options: ["Exception", "ExceptioNBase", "BaseException", "ArithmeticError"],
      correct: 2,
      explanation: "BaseException este clasa de bază pentru TOATE excepțiile din Python; Exception este doar o subclasă a acesteia."
    },
    {
      id: "py-src-220",
      chapter: "gestionare-erori",
      type: "single",
      question: "What will be the output of the following python code?\n\nx =30\ny = 10\nassert x > y ,'x is smaller than y'",
      options: ["Assertion Error", "10 8", "No output", "108"],
      correct: 2,
      explanation: "assert x>y verifică 30>10, care este True, deci assert-ul trece fără eroare și fără niciun output (mesajul apare doar dacă expresia e False)."
    },
    {
      id: "py-src-223",
      chapter: "module-librarii",
      type: "single",
      question: "You write a function that reads a data file and prints each line of the file. You write the following code. Line numbers are\nWhat is causing the error?",
      code: "included for reference only.\n01 def read_file(file):\n02 line = None\n03 if os.path.isfile(file):\n04 data = open(file, 'r')\n05 for line in data:\n06 print(line)\nWhen you run the program, you receive an error on line 03.",
      options: ["The path method does not exist in the os object.", "The isfile method does not exist in the path object.", "You need to import the os library.", "The isfile method does not accept one parameter."],
      correct: 2,
      explanation: "Codul folosește os.path.isfile, dar nu conține 'import os' — de aceea apare eroarea: trebuie importat modulul os."
    },
    {
      id: "py-src-224",
      chapter: "module-librarii",
      type: "single",
      question: "What is the type of sys.argv?",
      options: ["set", "list", "tuple", "string"],
      correct: 1,
      explanation: "sys.argv este de tip list (o listă de string-uri cu argumentele din linia de comandă)."
    },
    {
      id: "py-src-225",
      chapter: "module-librarii",
      type: "single",
      question: "Which of the following isn't true about main modules?",
      options: ["When a python file is directly executed, it is considered main module of a program", "Main modules may import any number of modules", "Special name given to main modules is: _main_", "Other main modules can import main modules"],
      correct: 2,
      explanation: "Numele special al modulului principal este '__main__' (cu underscore dublu), nu '_main_' — deci afirmația C este cea falsă."
    },
    {
      id: "py-src-226",
      chapter: "module-librarii",
      type: "single",
      question: "From sys module, by using which variable we can access command line arguments?",
      options: ["argv", "argsv", "args", "arguments"],
      correct: 0,
      explanation: "Variabila sys.argv oferă acces la argumentele din linia de comandă."
    },
    {
      id: "py-src-231",
      chapter: "module-librarii",
      type: "single",
      question: "You need to write code that generates a random float with a minimum value of 0.0 and a maximum value of 1.0.\nWhich statement should you use?",
      options: ["random.randrange()", "random.randrange(0.0, 1.0)", "random.random()", "random.randint(0, 1)"],
      correct: 2,
      explanation: "random.random() generează un float aleatoriu între 0.0 (inclusiv) și 1.0 (exclusiv)."
    },
    {
      id: "py-src-232",
      chapter: "module-librarii",
      type: "multiple",
      question: "You are writing code that generates a random integer with a minimum value of 5 and a maximum value of 11.\nWhich two functions should you use? Each correct answer presents a complete solution. Choose two.",
      options: ["random.randint(5, 11)", "random.randrange(5, 12, 1)", "random.randint(5, 12)", "random.randrange(5, 11, 1)"],
      correct: [0, 1],
      explanation: "random.randint(5,11) include ambele capete (5 și 11). random.randrange(5,12,1) e echivalent, deoarece capătul din randrange e exclusiv."
    },
    {
      id: "py-src-233",
      chapter: "module-librarii",
      type: "multiple",
      question: "You work on a team that is developing a game for AdventureWorks. You need to write code that generates a random\nnumber that meets the following requirements:\n  The number is a multiple of 5.\n  The lowest number is 5.\n  The highest number is 100.\nWhich two code segments will meet the requirements? Each correct answer presents a complete solution. Choose two.",
      options: ["from random import randrange\n print(randrange(5, 100, 5))", "from random import randint\n print(randint(1, 20) * 5)", "from random import randint\n print(randint(0, 20) * 5)", "from random import randrange\n print(randrange(0, 100, 5))"],
      correct: [0, 1],
      explanation: "randrange(5,100,5) și randint(1,20)*5 rămân în limitele cerute (minim 5, fără să depășească 100) și produc multipli de 5. Celelalte două pot produce 0, sub limita minimă cerută de 5."
    },
    {
      id: "py-src-235",
      chapter: "module-librarii",
      type: "single",
      question: "What will be the output of the following Python code?\n\nfrom math import factorial\nprint(math.factorial(5))",
      options: ["120", "Nothing is printed", "Error, method factorial doesn't exist in math module", "Error, the statement should be: print(factorial(5))"],
      correct: 3,
      explanation: "'from math import factorial' aduce doar numele 'factorial' în spațiul de nume local, NU și numele 'math' — deci 'math.factorial(5)' generează NameError; ar trebui scris direct 'factorial(5)'."
    },
    {
      id: "py-src-236",
      chapter: "module-librarii",
      type: "single",
      question: "You are writing an application that uses the pow() function. The program must reference the function using the name\npower. You need to import the function.\nWhich code segment should you use?",
      options: ["import math.pow as power", "import pow from math as power", "from math import pow as power", "from math.pow as power."],
      correct: 2,
      explanation: "Sintaxa corectă pentru a importa o funcție sub alt nume este: from math import pow as power."
    },
    {
      id: "py-src-237",
      chapter: "module-librarii",
      type: "single",
      question: "What is returned by the math.ceil(10.4)?",
      options: ["11", "10", "11.0", "10.0"],
      correct: 0,
      explanation: "math.ceil(10.4) rotunjește în sus la 11, iar în Python 3 math.ceil() întoarce un int, nu un float."
    },
    {
      id: "py-src-238",
      chapter: "module-librarii",
      type: "single",
      question: "What will be the output of the following Python code if the system date is 23rd September, 2020?\nt=datetime.date.today()\nprint(t.month())",
      options: ["September", "Sept", "09", "9"],
      correct: 3,
      explanation: "'month' este un atribut, nu o metodă — t.month (fără paranteze) ar da 9. Aici se presupune interpretarea ca număr întreg al lunii, deci 9."
    },
    {
      id: "py-src-37",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Consider the code:\n1) s='Python is easy'\n2) s1=s[-7:]\n3) s2=s[-4:]\n4) print(s1+s2)\nWhat is the result?",
      options: ["is easyeasy", "easyeasy", "iseasyeasy", "s easyeasy", "is easy easy"],
      correct: 0,
      explanation: "s[-7:] ia ultimele 7 caractere ('is easy'), s[-4:] ia ultimele 4 ('easy'). Concatenate: 'is easy'+'easy'='is easyeasy'."
    },
    {
      id: "py-src-38",
      chapter: "structuri-date",
      type: "single",
      question: "Consider the code:\n1) s='Python is easy'\n2) s1=s[6:-4]\n3) #Line-1\n4) print(len(s2))\nTo print 2 as output,which code we have to insert at Line-1",
      options: ["s2 = s1.lstrip()", "s2 = s1.rstrip()", "s2 = s1.lrstrip()", "s2 = s1.strip()"],
      correct: 3,
      explanation: "s1=s[6:-4] este ' is ' (cu spații la ambele capete). Doar .strip() elimină spațiile de la AMBELE capete, lăsând 'is' (lungime 2)."
    },
    {
      id: "py-src-40",
      chapter: "operatori-tipuri",
      type: "multiple",
      question: "Consider the variable declaration\nb = 'BANANA'\nWhich of the following lines will print 'AA' to the console?",
      options: ["print(b[1]+b[2])", "print(b[1]+b[3])", "print(b[1]+b[5])", "print(b[3]+b[5])"],
      correct: [1, 2, 3],
      explanation: "b[1]='A', b[3]='A', b[5]='A' (BANANA: B-A-N-A-N-A). b[1]+b[3]='AA', b[1]+b[5]='AA', b[3]+b[5]='AA' — toate trei dau 'AA'."
    },
    {
      id: "py-src-46",
      chapter: "structuri-date",
      type: "single",
      question: "Consider the code\n\n1) count=input('Enter the number of customers of the bank:')\n2) #Line-1\n3) print(output)\n\nWhich code inserted at Line-1 will print 20 to the console if we pass 15 as count value from the console?",
      options: ["output=int(count)+5", "output=count+5", "output=str(count)+5", "output=float(count)+5"],
      correct: 0,
      explanation: "count este string '15'. output=int(count)+5 = 15+5 = 20."
    },
    {
      id: "py-src-56",
      chapter: "structuri-date",
      type: "single",
      question: "Consider the code\n1) x=3\n2) x +=1\n3) #Line-1\n\nWhich line should be inserted at Line-1 so that x value will become 16?",
      options: ["x+=2", "x-=2", "x*=2", "x**=2"],
      correct: 3,
      explanation: "x=3; x+=1 → x=4. Pentru a ajunge la 16: x**=2 → 4**2=16."
    },
    {
      id: "py-src-57",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Which expression evaluates to 4?",
      options: ["7/2*3", "7%2+3", "7//2-3", "7-2*3"],
      correct: 1,
      explanation: "7%2+3 = 1+3 = 4."
    },
    {
      id: "py-src-59",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Consider the code\n\n1) x=2\n2) y=6\n3) x+=2**3\n4) x//=y//2//3\n5) print(x)\n\nWhat is the output?",
      options: ["0", "9", "10", "7"],
      correct: 2,
      explanation: "x=2; x+=2**3 → x=10. y=6; y//2=3; 3//3=1. x//=1 → x rămâne 10."
    },
    {
      id: "py-src-60",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Consider the Code\n\n1) x=3/3+3**3-3\n2) print(x)\n\nWhat is the output?",
      options: ["25", "32", "0.11", "25.0"],
      correct: 3,
      explanation: "3/3=1.0 (float, / întoarce mereu float); 1.0+3**3-3 = 1.0+27-3 = 25.0."
    },
    {
      id: "py-src-67",
      chapter: "operatori-tipuri",
      type: "multiple",
      question: "In which of the following cases we will get same result",
      options: ["23%5", "3**1", "11/3", "13//4"],
      correct: [0, 1, 3],
      explanation: "23%5=3, 3**1=3, 13//4=3 — toate dau 3. 11/3=3.666... (float, diferit)."
    },
    {
      id: "py-src-83",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Consider the code\nx='10'\ny='20'\n\nThe type of x+y ?",
      options: ["int", "float", "str", "complex"],
      correct: 2,
      explanation: "x='10' și y='20' sunt ambele string-uri; x+y le concatenează, rezultând tot un string (str)."
    },
    {
      id: "py-src-155",
      chapter: "input-output",
      type: "multiple",
      question: "Which of the following statements are valid?\n Valid Invalid",
      options: ["s=\"Durga Sir's Python Classes are Good\"\nIt causes error because we cannot use double quotes and single quotes simultaneously 〇 〇", "result=456+456.0\ntype of result is int 〇 〇", "The followng expression evaluates to 12 〇 〇\nb=False+5-True+35//4", "The following line will print result:4.5 〇 〇\nprint('result:',(7/2)+(False or True)+(9%3))"],
      correct: [2, 3],
      explanation: "b=False+5-True+35//4 = 0+5-1+8 = 12 (opțiunea C, adevărată). print('result:',(7/2)+(False or True)+(9%3)) = 3.5+1+0 = 4.5 (opțiunea D, adevărată). Opțiunile A și B sunt false: ghilimelele mixte sunt valide în Python, iar 456+456.0 dă float, nu int."
    },
    {
      id: "py-src-190",
      chapter: "functii",
      type: "multiple",
      question: "Consider the following code:\n1) def f1(x=0,y=0):\n2) return x+y\nWhich of the following method calls are valid?",
      options: ["f1()", "f1('10','20')", "f1(10)", "f1('10')"],
      correct: [0, 1, 2],
      explanation: "f1(x=0,y=0): return x+y. f1() → 0+0. f1('10','20') → '10'+'20' (concatenare validă). f1(10) → 10+0. Toate trei rulează fără eroare. f1('10') ar încerca '10'+0, ceea ce dă TypeError (str+int)."
    },
    {
      id: "py-src-191",
      chapter: "functii",
      type: "multiple",
      question: "Consider the following code:\n\n1) def f1(x=0,y=0):\n2) return x*y\n\nWhich of the following method calls are valid?",
      options: ["f1()", "f1('10','20')", "f1(10)", "f1('10')"],
      correct: [0, 2, 3],
      explanation: "f1(x=0,y=0): return x*y. f1() → 0*0=0. f1(10) → 10*0=0. f1('10') → '10'*0='' (string*int e valid, repetă de 0 ori). f1('10','20') ar încerca '10'*'20' (str*str), ceea ce dă TypeError."
    },
    {
      id: "py-src-242",
      chapter: "module-librarii",
      type: "multiple",
      question: "Consider the code:\n1) import random\n2) fruits=['Apple','Mango','Orange','Lemon']\n3) random_list=[random.choice(fruits)[:2] for i in range(3)]\n4) print(''.join(random_list))\nWhich of the following are possible outputs?",
      options: ["ApApAp", "ApMaOr", "LeMaOr", "OrOraM"],
      correct: [0, 1, 2],
      explanation: "Fiecare selecție aleatorie ia primele 2 litere dintr-un fruct: Ap(ple), Ma(ngo), Or(ange), Le(mon). 'ApApAp', 'ApMaOr' și 'LeMaOr' sunt toate combinații posibile de 3 selecții; 'OrOraM' nu corespunde niciunei combinații valide de coduri de 2 litere."
    },
    {
      id: "py-src-209",
      chapter: "gestionare-erori",
      type: "single",
      question: "Vrei să adaugi tratarea erorii FileNotFoundError la codul de mai jos. Care variantă este corectă?",
      code: "f = open('abc.txt')\nprint(f.read())\nf.close()\n\nCod A:                          Cod B:                          Cod C:\nf = None                        f = None                        f = None\ntry:                            try:                            try:\n  f = open('abc.txt')              f = open('abc.txt')              f = open('abc.txt')\nexcept FileNotFoundError:       except FileNotFoundException:   else:\n  print('File does not exist')    print('File does not exist')    print(f.read())\nelse:                           else:                           except FileNotFoundError:\n  print(f.read())                 print(f.read())                  print('File does not exist')\nfinally:                        finally:                        finally:\n  if f is not None:                if f is not None:                if f is not None:\n    f.close()                        f.close()                        f.close()",
      options: ["Codul A", "Codul B", "Codul C", "Niciuna dintre variante"],
      correct: 0,
      explanation: "Codul A folosește corect excepția reală din Python (FileNotFoundError — Codul B inventează 'FileNotFoundException', care nu există) și pune blocurile try/except/else/finally în ordinea corectă (Codul C inversează else și except)."
    },
    {
      id: "py-src-171",
      chapter: "gestionare-erori",
      type: "single",
      question: "Verifici următorul cod care trebuie să valideze un număr de angajat cu formatul dd-ddd-dddd (doar cifre și liniuțe). Ce este adevărat despre acest cod?",
      code: "employee_number = input('Enter Your Employee Number(dd-ddd-dddd): ')\nparts = employee_number.split('-')\nvalid = False\nif len(parts) == 3:\n    if len(parts[0])==2 and len(parts[1])==3 and len(parts[2])==4:\n        if parts[0].isdigit() and parts[1].isdigit() and parts[2].isdigit():\n            valid = True\nprint(valid)",
      options: ["Va genera o eroare din cauza folosirii greșite a split()", "Va genera o eroare din cauza folosirii greșite a isdigit()", "Nu generează eroare, dar nu îndeplinește cerința", "Nu sunt necesare schimbări, codul îndeplinește cerința"],
      correct: 3,
      explanation: "split('-') separă corect cele 3 grupuri, iar verificările de lungime (2,3,4) și isdigit() corespund exact formatului dd-ddd-dddd. Codul funcționează corect fără modificări."
    },
    {
      id: "py-src-172",
      chapter: "input-output",
      type: "single",
      question: "Ce se va afișa la rularea codului?",
      code: "x = \"ITVEDANT\"\nprint(\"%20s\", x)",
      options: ["20 de spații goale după \"ITVEDANT\"", "20 de spații goale înainte de \"ITVEDANT\"", "Niciuna dintre variante", "-"],
      correct: 2,
      explanation: "Aici lipsește operatorul % care ar aplica formatarea — print primește doi parametri separați ('%20s' ca text literal și x), deci NU se produce nicio aliniere pe 20 de caractere. Se afișează literal: %20s ITVEDANT."
    },
    {
      id: "py-src-173",
      chapter: "structura-cod",
      type: "single",
      question: "Ce se va afișa la rularea acestui program?",
      code: "d = '{a}{b}{a}'.format(a='hello', b='world')\nprint(d)",
      options: ["hello world", "hello world hello", "helloworldhello", "hello hello world"],
      correct: 2,
      explanation: "Șablonul '{a}{b}{a}' înlocuiește a→'hello', b→'world', a→'hello', fără spații între ele: 'helloworldhello'."
    },
    {
      id: "py-src-174",
      chapter: "structura-cod",
      type: "single",
      question: "Care dintre următoarele afirmații despre formatarea numerelor sunt adevărate?",
      code: "1. \"V:{:.2f}\".format(123.45678) afișează V:123.46\n2. \"V:{:.2f}\".format(123.4) afișează V:123.40\n3. \"V:{:8.2f}\".format(1.45678) afișează V:1.46\n4. \"V:{:08.2f}\".format(1.45678) afișează V:00001.46",
      options: ["Doar 1 și 2", "Doar 1 și 3", "Doar 2 și 4", "1, 2, 3 și 4"],
      correct: 3,
      explanation: "Toate patru sunt corecte: {:.2f} rotunjește la 2 zecimale (1 și 2); {:8.2f} aliniază valoarea pe o lățime de 8 caractere cu spații (3); {:08.2f} face același lucru dar completează cu zerouri (4)."
    },
    {
      id: "py-src-51",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Ce rezultat va avea codul de mai jos?",
      code: "a = 3\nb = 5\na += 2**3\na -= b//2//3\nprint(a)",
      options: ["13", "12", "11", "10"],
      correct: 2,
      explanation: "a += 2**3 → a=3+8=11. b//2=2; 2//3=0. a -= 0 → a rămâne 11."
    },
    {
      id: "py-src-81",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Consider the following expression:\nresult=(2*(3+4)**2-(3**3)*3)\nWhat is result value?",
      options: ["17", "16", "18", "19"],
      correct: 0,
      explanation: "(3+4)**2=49; 2*49=98. (3**3)*3=27*3=81. 98-81=17."
    },
    {
      id: "py-src-179",
      chapter: "functii",
      type: "multiple",
      question: "Adventure Works Cycles creează un program ce trimite mesaje în funcție de câți kilometri a mers un client cu bicicleta. Care linii de cod trebuie folosite la linia 01 și linia 04?",
      code: "01 ___\n02   name = input('What is your name? ')\n03   return name\n04 ___\n05   calories = miles * calories_per_mile\n06   return calories\n07 distance = int(input('How many miles did you bike this week? '))\n08 burn_rate = 50\n09 biker = get_name()\n10 calories_burned = calc_calories(distance, burn_rate)\n11 print(biker, ', you burned about', calories_burned, 'calories.')",
      options: ["01: def get_name():", "01: def get_name(biker):", "01: def get_name(name):", "04: def calc_calories():", "04: def calc_calories(miles, burn_rate):", "04: def calc_calories(miles, calories_per_mile)"],
      correct: [0, 5],
      explanation: "get_name() este apelată fără argumente (linia09), deci definiția nu trebuie să aibă parametri. calc_calories este apelată cu (distance, burn_rate), dar în interiorul funcției variabila folosită este 'calories_per_mile' — numele parametrului trebuie să corespundă exact cu numele folosit în corpul funcției."
    },
    {
      id: "py-src-3a",
      chapter: "structuri-date",
      type: "single",
      question: "01 rooms = {1: 'Left Conference Room', 2: 'Right conference Room'}\n02 room = input('Enter the room number: ')\n03 if room not in rooms:\n04     print('The room does not exist.')\n05 else:\n06     print('The room name is ' + rooms[room])\n\nCare două tipuri de date sunt stocate în dicționarul rooms la linia 01?",
      options: ["bool and string", "float and bool", "int and string", "float and int"],
      correct: 2,
      explanation: "Cheile dicționarului (1, 2) sunt de tip int, iar valorile ('Left Conference Room', etc.) sunt de tip string."
    },
    {
      id: "py-src-3b",
      chapter: "input-output",
      type: "single",
      question: "Folosind același cod ca mai sus: ce tip de date are variabila 'room' de la linia 02?",
      options: ["bool", "float", "int", "string"],
      correct: 3,
      explanation: "input() întoarce întotdeauna un șir de caractere (string), indiferent ce a tastat utilizatorul."
    },
    {
      id: "py-src-3c",
      chapter: "structuri-date",
      type: "single",
      question: "Folosind același cod: de ce linia 03 ('if room not in rooms') nu găsește camera, deși utilizatorul introduce un număr valid de cameră (ex: '1')?",
      options: ["Invalid syntax", "Mismatched data type(s)", "Misnamed variable(s)"],
      correct: 1,
      explanation: "'room' este un string (ex: '1'), dar cheile din dicționarul rooms sunt int (1, 2) — comparația 'in' nu găsește niciodată o potrivire între tipuri diferite."
    },
    {
      id: "py-src-4a",
      chapter: "input-output",
      type: "single",
      question: "01 age = input('Enter your age: ')\n02 year = input('Enter the four digit year: ')\n03 born = eval(year) - eval(age)\n04 message = 'You were born in ' + str(born)\n05 print(message)\n\nCe tip de date are 'age' la linia 01?",
      options: ["int", "str", "float", "bool"],
      correct: 1,
      explanation: "input() întoarce întotdeauna un string, indiferent ce a introdus utilizatorul."
    },
    {
      id: "py-src-4b",
      chapter: "input-output",
      type: "single",
      question: "Folosind același cod: ce tip de date are 'born' la linia 03?",
      options: ["int", "str", "float", "bool"],
      correct: 0,
      explanation: "eval() interpretează un șir numeric ca o expresie Python — pentru cifre întregi, rezultatul eval(year)-eval(age) este de tip int."
    },
    {
      id: "py-src-4c",
      chapter: "input-output",
      type: "single",
      question: "Folosind același cod: ce tip de date are 'message' la linia 04?",
      options: ["int", "str", "float", "bool"],
      correct: 1,
      explanation: "Concatenarea unui string cu str(born) produce întotdeauna un rezultat de tip string."
    },
    {
      id: "py-src-6",
      chapter: "operatori-tipuri",
      type: "drag_drop",
      question: "Asociază fiecare tip de date cu operația type() corespunzătoare.",
      dragItems: [{"id": "int", "text": "int"}, {"id": "float", "text": "float"}, {"id": "str", "text": "str"}, {"id": "bool", "text": "bool"}],
      dropZones: [{"id": "z1", "label": "type(+1E10)", "correctItemId": "float"}, {"id": "z2", "label": "type(5.0)", "correctItemId": "float"}, {"id": "z3", "label": "type(\"True\")", "correctItemId": "str"}, {"id": "z4", "label": "type(False)", "correctItemId": "bool"}],
      explanation: "+1E10 și 5.0 sunt notații pentru numere float. \"True\" e un string (are ghilimele). False e o valoare bool. Tipul int nu se folosește aici."
    },
    {
      id: "py-src-7",
      chapter: "operatori-tipuri",
      type: "drag_drop",
      question: "Asociază fiecare tip de date cu segmentul de cod corespunzător.",
      dragItems: [{"id": "bool", "text": "bool"}, {"id": "float", "text": "float"}, {"id": "int", "text": "int"}, {"id": "str", "text": "str"}],
      dropZones: [{"id": "z1", "label": "age = 2", "correctItemId": "int"}, {"id": "z2", "label": "minor = False", "correctItemId": "bool"}, {"id": "z3", "label": "name = \"Contoso\"", "correctItemId": "str"}, {"id": "z4", "label": "weight = 123.5", "correctItemId": "float"}, {"id": "z5", "label": "zip = \"81000\"", "correctItemId": "str"}],
      explanation: "zip='81000' este un string, chiar dacă valoarea pare numerică — este scrisă între ghilimele."
    },
    {
      id: "py-src-16a",
      chapter: "structuri-date",
      type: "single",
      question: "a = 'Config1'\nprint(a)\nb = a\na += 'Config2'\nprint(a)\nprint(b)\n\nCe se afișează după primul print(a)?",
      options: ["Config1", "Config1Config2", "Config2"],
      correct: 0,
      explanation: "La acest moment, a are încă valoarea inițială 'Config1'."
    },
    {
      id: "py-src-16b",
      chapter: "structuri-date",
      type: "single",
      question: "Folosind același cod: ce se afișează după al doilea print(a) (după a += 'Config2')?",
      options: ["Config1", "Config1Config2", "Config2"],
      correct: 1,
      explanation: "a += 'Config2' creează un nou string 'Config1Config2' și îl atribuie variabilei a."
    },
    {
      id: "py-src-16c",
      chapter: "structuri-date",
      type: "single",
      question: "Folosind același cod: ce se afișează la print(b)?",
      options: ["Config1", "Config1Config2", "Config2"],
      correct: 0,
      explanation: "String-urile sunt imutabile: a += 'Config2' creează un string NOU pentru a, dar b rămâne legat de string-ul original 'Config1'."
    },
    {
      id: "py-src-23",
      chapter: "structuri-control",
      type: "drag_drop",
      question: "Vrei să verifici dacă un nume introdus e scris cu litere mici, mari sau mixte. Alege și ordonează cele 4 segmente de cod corecte din lista de mai jos.",
      dragItems: [{"id": "seg_mixed", "text": "else:\\n  print(name, \"is mixed case.\")"}, {"id": "seg_else_lower", "text": "else:\\n  print(name, \"is lower case.\")"}, {"id": "seg_input", "text": "name = input(\"Enter your name: \")"}, {"id": "seg_else_upper", "text": "else:\\n  print(name, \"is upper case.\")"}, {"id": "seg_elif_upper", "text": "elif name.upper() == name:\\n  print(name, \"is all upper case.\")"}, {"id": "seg_if_lower", "text": "if name.lower() == name:\\n  print(name, \"is all lower case.\")"}],
      dropZones: [{"id": "p1", "label": "Prima linie", "correctItemId": "seg_input"}, {"id": "p2", "label": "A doua linie", "correctItemId": "seg_if_lower"}, {"id": "p3", "label": "A treia linie", "correctItemId": "seg_elif_upper"}, {"id": "p4", "label": "A patra linie", "correctItemId": "seg_mixed"}],
      explanation: "Se citește numele, apoi se verifică întâi dacă e tot minuscule (if), apoi dacă e tot majuscule (elif), iar else acoperă orice altă combinație (mixt). Cele două segmente 'else' nefolosite sunt distractori."
    },
    {
      id: "py-src-24",
      chapter: "operatori-tipuri",
      type: "drag_drop",
      question: "a = 11\nb = 4\nAsociază fiecare expresie cu rezultatul ei corect.",
      dragItems: [{"id": "div", "text": "print(a / b)"}, {"id": "floordiv", "text": "print(a // b)"}, {"id": "mod", "text": "print(a % b)"}],
      dropZones: [{"id": "z1", "label": "2", "correctItemId": "floordiv"}, {"id": "z2", "label": "3", "correctItemId": "mod"}, {"id": "z3", "label": "2.75", "correctItemId": "div"}],
      explanation: "11/4=2.75 (împărțire exactă); 11//4=2 (împărțire întreagă); 11%4=3 (restul împărțirii)."
    },
    {
      id: "py-src-47",
      chapter: "operatori-tipuri",
      type: "single",
      question: "În care dintre următoarele cazuri vom obține <class 'int'> ca rezultat al type(x)?",
      code: "A) x=47.0        B) x='47'        C) x=10+20j        D) x=2**2**2",
      options: ["Cazul A", "Cazul B", "Cazul C", "Cazul D"],
      correct: 3,
      explanation: "Exponențierea este asociativă la dreapta: 2**2**2 = 2**(2**2) = 2**4 = 16, un întreg (int). A e float, B e str, C e complex."
    },
    {
      id: "py-src-61",
      chapter: "structuri-date",
      type: "multiple",
      question: "În care dintre următoarele cazuri se va afișa True? (alege 2 răspunsuri)",
      code: "A) a=45; b=45; print(a is not b)\nB) s1='Python'; s2='Python'.upper(); print(s1 is s2)\nC) x=[1,2,3]; y=[1,2,3]; print(x is y)\nD) print('r' in 'durga')\nE) print('is' in 'This IS a Fake News')",
      options: ["Cazul A", "Cazul B", "Cazul C", "Cazul D", "Cazul E"],
      correct: [3, 4],
      explanation: "'r' apare în 'durga' (D=True). 'is' apare ca subșir chiar în cuvântul 'This' (Th-is), deci E=True. A e False (a is b ar fi True pentru întregi mici, deci 'is not' e False). B e False ('Python'!='PYTHON'). C e False (liste diferite ca obiecte)."
    },
    {
      id: "py-src-69",
      chapter: "structuri-date",
      type: "multiple",
      question: "numList=[1,2,3,4,5]\nalphaList=['a','b','c','d','e']\nprint(numList is alphaList)   #1\nprint(numList == alphaList)   #2\nnumList = alphaList\nprint(numList is alphaList)   #3\nprint(numList == alphaList)   #4\n\nCare dintre afirmații sunt adevărate? (alege 2)",
      options: ["#1 afișează True", "#2 afișează False", "#3 afișează True", "#4 afișează False"],
      correct: [1, 2],
      explanation: "Inițial numList și alphaList sunt obiecte diferite cu conținut diferit: is→False, ==→False. După numList=alphaList, ambele indică același obiect: is→True, ==→True. Deci #2 (False) și #3 (True) sunt corecte."
    },
    {
      id: "py-src-71",
      chapter: "structuri-control",
      type: "multiple",
      question: "numbers=[10,20,30,40]\nx=0\nÎn care dintre următoarele cazuri se va afișa 10 la consolă? (alege 2 răspunsuri)",
      code: "A) for i in (30,40,50):        B) for i in (30,40,50):\n     if i in numbers:              if i not in numbers:\n       x=x+5                         x=x+5\n   print(x)                      print(x)\n\nC) for i in (30,40,50):        D) for i in (30,40,50):\n     if i not in numbers:            if i in numbers:\n       x=x+10                         x=x+10\n   print(x)                      print(x)",
      options: ["Cazul A", "Cazul B", "Cazul C", "Cazul D"],
      correct: [0, 2],
      explanation: "A: 30 și 40 sunt în listă (+5 fiecare) = 10. C: doar 50 nu e în listă (+10) = 10. B dă 5, D dă 20."
    },
    {
      id: "py-src-72",
      chapter: "structuri-control",
      type: "multiple",
      question: "l=['Apple','Boy','Cat','Dog']\nÎn care dintre următoarele cazuri se vor afișa exact 'Boy', 'Cat', 'Dog' (fiecare pe rândul lui, fără 'Apple')? Alege 2 răspunsuri.",
      code: "A) for x in l:                 B) for x in l:\n     if len(x)==3:                  if len(x)!=3:\n       print(x)                        print(x)\n\nC) for x in l:                 D) l1=l[1:]\n     print(x)                   for x in l1:\n                                    print(x)",
      options: ["Cazul A", "Cazul B", "Cazul C", "Cazul D"],
      correct: [0, 3],
      explanation: "A filtrează cuvintele cu exact 3 litere (Boy, Cat, Dog). D elimină 'Apple' prin slicing (l[1:]) și afișează restul. B afișează doar 'Apple', C afișează toate cele 4 cuvinte."
    },
    {
      id: "py-src-73",
      chapter: "operatori-tipuri",
      type: "drag_drop",
      question: "Ordonează categoriile de operatori Python de la CEA MAI MARE prioritate la CEA MAI MICĂ (ordinea de evaluare).",
      dragItems: [{"id": "paren", "text": "Parenthesis"}, {"id": "exp", "text": "Exponents"}, {"id": "unary", "text": "Unary positive, negative, not"}, {"id": "muldiv", "text": "Multiplication and Division"}, {"id": "addsub", "text": "Addition and Subtraction"}, {"id": "and_", "text": "And"}],
      dropZones: [{"id": "p1", "label": "1 (cea mai mare prioritate)", "correctItemId": "paren"}, {"id": "p2", "label": "2", "correctItemId": "exp"}, {"id": "p3", "label": "3", "correctItemId": "unary"}, {"id": "p4", "label": "4", "correctItemId": "muldiv"}, {"id": "p5", "label": "5", "correctItemId": "addsub"}, {"id": "p6", "label": "6 (cea mai mică prioritate)", "correctItemId": "and_"}],
      explanation: "Ordinea standard de evaluare în Python: parantezele întâi, apoi exponențierea, operatorii unari (+,-,not), înmulțire/împărțire, adunare/scădere, iar operatorii logici precum 'and' au prioritatea cea mai mică."
    },
    {
      id: "py-src-87",
      chapter: "structuri-date",
      type: "multiple",
      question: "l1=['sunny','bunny','chinny','vinny']\nl2=['sunny','bunny','chinny','vinny']\nprint(l1 is not l2)   #1\nprint(l1==l2)         #2\nl1=l2\nprint(l1 is not l2)   #3\nprint(l1!=l2)         #4\n\nCare afirmații despre rezultat sunt corecte? (alege 2)",
      options: ["#1 afișează True", "#2 afișează False", "#3 afișează False", "#4 afișează True"],
      correct: [0, 2],
      explanation: "Inițial l1 și l2 sunt obiecte diferite cu conținut egal: 'is not'→True (#1), '=='→True. După l1=l2, ambele indică același obiect: 'is not'→False (#3), '!='→False."
    },
    {
      id: "py-src-89",
      chapter: "structuri-control",
      type: "single",
      question: "print(10==10 and 20!=20)\nprint(10==10 or 20!=20)\nprint(not 10==10)\n\nCare este rezultatul, în ordine?",
      options: ["True / True / False", "False / True / True", "False / True / False", "True / False / True"],
      correct: 2,
      explanation: "10==10 e True, 20!=20 e False. True and False=False. True or False=True. not True=False. Rezultat: False, True, False."
    },
    {
      id: "py-src-90",
      chapter: "structuri-control",
      type: "single",
      question: "print(not 0)\nprint(not 10)\nprint(not '')\nprint(not 'durga')\nprint(not None)\n\nCare este rezultatul, în ordine?",
      options: ["True/False/True/False/True", "False/True/False/True/False", "True/True/True/True/True", "False/False/False/False/False"],
      correct: 0,
      explanation: "0, '' și None sunt 'falsy' — not le transformă în True. 10 și 'durga' sunt 'truthy' — not le transformă în False."
    },
    {
      id: "py-src-91",
      chapter: "structuri-date",
      type: "single",
      question: "lst=[7,8,9]\nb=lst[:]\nprint(b is lst)\nprint(b==lst)\n\nCare este rezultatul?",
      options: ["False, apoi True", "True, apoi False", "False, apoi False", "True, apoi True"],
      correct: 0,
      explanation: "lst[:] creează o COPIE nouă a listei (obiect diferit), deci 'is' e False, dar conținutul e identic, deci '==' e True."
    }
  ]
};
