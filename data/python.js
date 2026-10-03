/* =====================================================================
   BANCA DE ÎNTREBĂRI — IT SPECIALIST: PYTHON  (versiune curățată)
   Tipuri: "true_false" | "single" | "multiple" (exact 2 corecte) | "drag_drop"
   Capitolele din CHAPTERS nu se șterg; întrebările noi se adaugă la finalul listei QUESTIONS.
   ===================================================================== */

window.EXAM_DATA = window.EXAM_DATA || {};

window.EXAM_DATA.python = {
  id: "python",
  name: "Python",
  shortLabel: "PY",
  accent: "#2F6FED",
  description: "Scrierea, recunoașterea și depanarea codului Python: variabile, structuri de control, funcții și module.",

  CHAPTERS: [
    { id: "operatori-tipuri", name: "Operatori și tipuri de date" },
    { id: "structuri-control", name: "Structuri de control (if, for, while)" },
    { id: "structuri-date", name: "Structuri de date (liste, tupluri, dicționare)" },
    { id: "input-output", name: "Input / Output și fișiere" },
    { id: "functii", name: "Funcții" },
    { id: "module-librarii", name: "Module și librării" },
    { id: "gestionare-erori", name: "Gestionarea erorilor" },
    { id: "structura-cod", name: "Structura și documentarea codului" }
  ],

  QUESTIONS: [
    {
      id: "py-001",
      chapter: "operatori-tipuri",
      type: "true_false",
      question: "In Python, the type of a variable can change after it has been created (dynamic typing).",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Python are tipare dinamică: aceeași variabilă poate reține întâi un int, apoi un str, fără declarare explicită de tip."
    },
    {
      id: "py-002",
      chapter: "operatori-tipuri",
      type: "true_false",
      question: "Python distinguishes between integer and floating-point values.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Python are tipuri distincte, int și float. Valorile booleene sunt True și False."
    },
    {
      id: "py-003",
      chapter: "operatori-tipuri",
      type: "true_false",
      question: "A variable's data type must always be written explicitly.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "Tipul se stabilește dinamic din valoarea atribuită; nu se declară explicit."
    },
    {
      id: "py-004",
      chapter: "operatori-tipuri",
      type: "true_false",
      question: "The Boolean literals True and False start with capital letters.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Forma corectă este True/False. true/false (litere mici) provoacă NameError."
    },
    {
      id: "py-005",
      chapter: "operatori-tipuri",
      type: "multiple",
      question: "Which TWO of the following are basic (primitive) data types in Python? (Choose 2.)",
      options: ["int","list","float","DataFrame"],
      correct: [0,2],
      explanation: "int și float sunt tipuri numerice de bază. list este o structură de date, iar DataFrame aparține librăriei pandas."
    },
    {
      id: "py-006",
      chapter: "operatori-tipuri",
      type: "drag_drop",
      question: "Complete the conversions by choosing the correct function for each blank.",
      code: "serialNumber = [1](55555)\namount = [2](44)\nprint(serialNumber, amount)",
      dragItems: [
        { id: "i1", text: "float" },
        { id: "i2", text: "bool" },
        { id: "i3", text: "int" },
        { id: "i4", text: "str" }
      ],
      dropZones: [
        { id: "z1", label: "Blank [1]", correctItemId: "i4" },
        { id: "z2", label: "Blank [2]", correctItemId: "i1" }
      ],
      explanation: "str(55555) produce '55555', iar float(44) produce 44.0."
    },
    {
      id: "py-007",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What are the types of the variables age, minor and name, in this order?",
      code: "age = 0\nminor = False\nname = 'Durga'",
      options: ["int, bool, str","bool, bool, str","int, bool, char","float, bool, str"],
      correct: 0,
      explanation: "0 este int, False este bool, 'Durga' este str. Python nu are tipul char."
    },
    {
      id: "py-008",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What are the types of weight, zip and value, in this order?",
      code: "weight = 62.4\nzip = '880098'\nvalue = +23E4",
      options: ["float, str, str","int, str, float","double, str, float","float, str, float"],
      correct: 3,
      explanation: "62.4 este float; '880098' este str (are ghilimele); +23E4 este notație științifică, deci float (230000.0). Python nu are tipul double."
    },
    {
      id: "py-009",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Identify the types of a, b and c.",
      code: "a = 10 + 20\nb = '10' + '20'\nc = '10' * 3",
      options: ["a is int, b is str, c is str","a is int, b is str, c is int","a, b and c are all int","a is int; b and c are invalid declarations"],
      correct: 0,
      explanation: "a=30 (int); b='1020' (concatenare de str); c='101010' (repetare de str)."
    },
    {
      id: "py-010",
      chapter: "operatori-tipuri",
      type: "drag_drop",
      question: "Match each variable with its data type.",
      dragItems: [
        { id: "i1", text: "str" },
        { id: "i2", text: "float" },
        { id: "i3", text: "bool" },
        { id: "i4", text: "int" }
      ],
      dropZones: [
        { id: "z1", label: "age = 2", correctItemId: "i4" },
        { id: "z2", label: "minor = False", correctItemId: "i3" },
        { id: "z3", label: "name = \"Contoso\"", correctItemId: "i1" },
        { id: "z4", label: "weight = 123.5", correctItemId: "i2" },
        { id: "z5", label: "zip = \"81000\"", correctItemId: "i1" }
      ],
      explanation: "\"81000\" este str, chiar dacă arată ca un număr: este scris între ghilimele."
    },
    {
      id: "py-011",
      chapter: "operatori-tipuri",
      type: "drag_drop",
      question: "Match each expression with the type returned by type().",
      dragItems: [
        { id: "i1", text: "bool" },
        { id: "i2", text: "float" },
        { id: "i3", text: "int" },
        { id: "i4", text: "str" }
      ],
      dropZones: [
        { id: "z1", label: "type(+1E10)", correctItemId: "i2" },
        { id: "z2", label: "type(5.0)", correctItemId: "i2" },
        { id: "z3", label: "type(\"True\")", correctItemId: "i4" },
        { id: "z4", label: "type(False)", correctItemId: "i1" }
      ],
      explanation: "+1E10 și 5.0 sunt float; \"True\" (cu ghilimele) este str; False este bool."
    },
    {
      id: "py-012",
      chapter: "operatori-tipuri",
      type: "single",
      question: "For which value of x does type(x) return <class 'int'>?",
      options: ["x = 47.0","x = '47'","x = 10+20j","x = 2**2**2"],
      correct: 3,
      explanation: "** se evaluează de la dreapta la stânga: 2**(2**2) = 16, un int. 47.0 e float, '47' e str, 10+20j e complex."
    },
    {
      id: "py-013",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is the type of x + y?",
      code: "x = '10'\ny = '20'",
      options: ["int","float","str","complex"],
      correct: 2,
      explanation: "Ambele sunt str, deci + le concatenează ('1020') și rezultatul e tot str."
    },
    {
      id: "py-014",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What are the data types of c1, c2 and c3?",
      code: "a1 = '10'\nb1 = 3\nc1 = a1 * b1\n\na2 = 10\nb2 = 3\nc2 = a2 / b2\n\na3 = 2.6\nb3 = 1\nc3 = a3 / b3",
      options: ["str, int, int","str, float, float","str, int, float","str, str, str"],
      correct: 1,
      explanation: "'10'*3 repetă șirul, deci str. Operatorul / întoarce mereu float în Python 3."
    },
    {
      id: "py-015",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Which of the variables evaluates to False?",
      code: "a = bool([False])\nb = bool(3)\nc = bool(\"\")\nd = bool(' ')",
      options: ["a","b","c","d"],
      correct: 2,
      explanation: "bool([False]) e True (listă nevidă); bool(3) e True; bool(\"\") e False (șir gol); bool(' ') e True (conține un spațiu)."
    },
    {
      id: "py-016",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Which of the following variables evaluate to True?",
      code: "a = bool([])\nb = bool(())\nc = bool(range(0))\nd = bool({})\ne = bool(set())",
      options: ["Only c","a, b, c and d","All of them","None of them"],
      correct: 3,
      explanation: "Toate colecțiile goale sunt False."
    },
    {
      id: "py-017",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Which variables evaluate to True?",
      code: "a = bool(0)\nb = bool(3)\nc = bool(0.5)\nd = bool(0.0)",
      options: ["a, b","b, c","c, d","d, a","All variables"],
      correct: 1,
      explanation: "bool(0) și bool(0.0) sunt False; bool(3) și bool(0.5) sunt True."
    },
    {
      id: "py-018",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Which expression evaluates to 2?",
      code: "a = float('123.456')",
      options: ["int(a) + False","bool(a) + True","str(a)","bool(a)"],
      correct: 1,
      explanation: "bool(a) e True (adică 1) pentru orice float nenul; True + True = 2. int(a)+False = 123."
    },
    {
      id: "py-019",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is the output?",
      code: "result = str(bool(1) + float(10) / float(2))\nprint(result)",
      options: ["SyntaxError","TypeError","6","6.0"],
      correct: 3,
      explanation: "bool(1)=True=1; 10.0/2.0=5.0; 1+5.0=6.0; str(6.0)='6.0'."
    },
    {
      id: "py-020",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Which of the following expressions results in an error?",
      options: ["float(\"10\")","int(\"10\")","float(\"10.8\")","int(\"10.8\")"],
      correct: 3,
      explanation: "int() nu poate converti direct un șir cu punct zecimal: int(\"10.8\") dă ValueError. Corect ar fi int(float(\"10.8\"))."
    },
    {
      id: "py-021",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Which expression converts 19.95 to the integer 19?",
      options: ["round(19.95)","int(19.95)","math.ceil(19.95)","float(19.95)"],
      correct: 1,
      explanation: "int() elimină partea zecimală, nu rotunjește (round(19.95) dă 20)."
    },
    {
      id: "py-022",
      chapter: "operatori-tipuri",
      type: "multiple",
      question: "A bank must show the average customer balance each day, truncating the decimal portion. Which TWO code segments should you use? (Choose 2.)",
      options: ["average_balance = total_deposits ** number_of_customers","average_balance = total_deposits // number_of_customers","average_balance = int(total_deposits / number_of_customers)","average_balance = float(total_deposits // number_of_customers)"],
      correct: [1,2],
      explanation: "// (împărțire întreagă) și int(.../...) elimină partea zecimală. ** este ridicare la putere."
    },
    {
      id: "py-023",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is the return type of the function id()?",
      options: ["int","float","bool","str"],
      correct: 0,
      explanation: "id() întoarce un număr întreg care identifică obiectul în memorie."
    },
    {
      id: "py-024",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is the result?",
      code: "print(17 // 4)",
      options: ["4.25","4","1","5"],
      correct: 1,
      explanation: "// este împărțirea întreagă: 17 // 4 = 4."
    },
    {
      id: "py-025",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What are the value and type of result?",
      code: "result = 5 / 2",
      options: ["2 (int)","2.5 (float)","2.0 (float)","5 (int)"],
      correct: 1,
      explanation: "Operatorul / face împărțire exactă și întoarce float."
    },
    {
      id: "py-026",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is printed?",
      code: "print(5 // 2)",
      options: ["2","2.5","3","0"],
      correct: 0,
      explanation: "// este împărțirea întreagă (floor division)."
    },
    {
      id: "py-027",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is printed?",
      code: "print(10 % 3)",
      options: ["0","1","2","3"],
      correct: 1,
      explanation: "% întoarce restul împărțirii: 10 = 3*3 + 1."
    },
    {
      id: "py-028",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is the result?",
      code: "a = 15\nb = 5\nprint(a / b)",
      options: ["3","3.0","0","0.0"],
      correct: 1,
      explanation: "În Python 3, / întoarce mereu float: 15/5 = 3.0."
    },
    {
      id: "py-029",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is the result?",
      code: "a = 21\nb = 6\nprint(a / b)\nprint(a // b)\nprint(a % b)",
      options: ["3 3 3","3.5 3 3","3.0 3 3","3.5 3.5 3"],
      correct: 1,
      explanation: "21/6=3.5; 21//6=3; 21%6=3."
    },
    {
      id: "py-030",
      chapter: "operatori-tipuri",
      type: "drag_drop",
      question: "Given a = 11 and b = 4, match each expression with its result.",
      dragItems: [
        { id: "i1", text: "print(a // b)" },
        { id: "i2", text: "print(a % b)" },
        { id: "i3", text: "print(a / b)" }
      ],
      dropZones: [
        { id: "z1", label: "2", correctItemId: "i1" },
        { id: "z2", label: "3", correctItemId: "i2" },
        { id: "z3", label: "2.75", correctItemId: "i3" }
      ],
      explanation: "11/4=2.75; 11//4=2; 11%4=3."
    },
    {
      id: "py-031",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is printed?",
      code: "a = 3\nb = 7\nc = 5\nresult = a + b * c\nprint(result)",
      options: ["36","38","26","50"],
      correct: 1,
      explanation: "Înmulțirea are prioritate: 7*5=35, apoi 3+35=38."
    },
    {
      id: "py-032",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Which operation is evaluated first?",
      code: "x = 2 + 3 * 4",
      options: ["2 + 3","3 * 4","the whole expression at once","the assignment to x"],
      correct: 1,
      explanation: "Înmulțirea are prioritate față de adunare."
    },
    {
      id: "py-033",
      chapter: "operatori-tipuri",
      type: "true_false",
      question: "a == 90",
      code: "a = 100 - 70 / 7\nb = (35 % 15) // 2\nc = -3 ** 2",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "a = 100 - 10.0 = 90.0, iar 90.0 == 90 este True."
    },
    {
      id: "py-034",
      chapter: "operatori-tipuri",
      type: "true_false",
      question: "b == 2.5",
      code: "a = 100 - 70 / 7\nb = (35 % 15) // 2\nc = -3 ** 2",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "b = 5 // 2 = 2 (împărțire întreagă), deci b nu este 2.5."
    },
    {
      id: "py-035",
      chapter: "operatori-tipuri",
      type: "true_false",
      question: "c == -9",
      code: "a = 100 - 70 / 7\nb = (35 % 15) // 2\nc = -3 ** 2",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "** are prioritate față de minusul unar: -(3**2) = -9."
    },
    {
      id: "py-036",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Which expression generates the maximum value?",
      options: ["8 % 3 * 4","8 - 3 * 4","8 // 3 * 4","8 / 3 * 4"],
      correct: 3,
      explanation: "Valorile sunt 8, -4, 8 și ≈10.67, deci maximul este 8 / 3 * 4."
    },
    {
      id: "py-037",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Which expression evaluates to 2?",
      options: ["3 ** 2","22 % 5","13 // 4","11 / 2"],
      correct: 1,
      explanation: "3**2=9; 22%5=2; 13//4=3; 11/2=5.5."
    },
    {
      id: "py-038",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Which expression evaluates to 4?",
      options: ["7 / 2 * 3","7 % 2 + 3","7 // 2 - 3","7 - 2 * 3"],
      correct: 1,
      explanation: "7%2+3 = 1+3 = 4. Celelalte: 10.5, 0, 1."
    },
    {
      id: "py-039",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Which line assigns 9 to output?",
      code: "a = 7\nb = 3\nc = 5\nd = 1",
      options: ["output = a % c + 1","output = a + c // d","output = c * d - 1","output = a + d * 2"],
      correct: 3,
      explanation: "a + d*2 = 7 + 2 = 9. Celelalte dau 3, 12 și 4."
    },
    {
      id: "py-040",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What does the following expression evaluate to?",
      code: "6 // 4 % 5 + 2 ** 3 - 2 // 3",
      options: ["9","3","-1","25"],
      correct: 0,
      explanation: "6//4=1; 1%5=1; 2**3=8; 2//3=0 → 1 + 8 - 0 = 9."
    },
    {
      id: "py-041",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is the output?",
      code: "x = 3 / 3 + 3 ** 3 - 3\nprint(x)",
      options: ["25","32","0.11","25.0"],
      correct: 3,
      explanation: "3/3=1.0 (float), deci rezultatul este 1.0 + 27 - 3 = 25.0."
    },
    {
      id: "py-042",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is the result?",
      code: "result = 8 // 6 % 5 + 2 ** 3 - 2\nprint(result)",
      options: ["6","7","8","9"],
      correct: 1,
      explanation: "2**3=8; 8//6=1; 1%5=1; 1 + 8 - 2 = 7."
    },
    {
      id: "py-043",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is the output?",
      code: "x = 2\ny = 6\nx += 2 ** 3\nx //= y // 2 // 3\nprint(x)",
      options: ["0","9","10","7"],
      correct: 2,
      explanation: "x = 2 + 8 = 10; y//2 = 3; 3//3 = 1; x //= 1 lasă x = 10."
    },
    {
      id: "py-044",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is the result?",
      code: "a = 3\nb = 5\na += 2 ** 3\na -= b // 2 // 3\nprint(a)",
      options: ["13","12","11","10"],
      correct: 2,
      explanation: "a = 3 + 8 = 11; b//2 = 2; 2//3 = 0; a -= 0 lasă a = 11."
    },
    {
      id: "py-045",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Which expression results in -4?",
      code: "a = 1\nb = 2\nc = 4\nd = 6",
      options: ["(a + b) // c % d","(b + c) // a % d","(a + b) // c * d","(a + b) // d - c"],
      correct: 3,
      explanation: "(1+2)//6 - 4 = 0 - 4 = -4. Celelalte trei dau 0."
    },
    {
      id: "py-046",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is the value of X?",
      code: "X = 2 + 9 * ((3 * 12) - 8) / 10",
      options: ["30.0","30.8","28.4","27.2"],
      correct: 3,
      explanation: "(3*12)-8 = 28; 9*28 = 252; 252/10 = 25.2; 2 + 25.2 = 27.2."
    },
    {
      id: "py-047",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is the result?",
      code: "(3 * (1 + 2) ** 2) - ((2 ** 2) * 3)",
      options: ["3","13","15","69"],
      correct: 2,
      explanation: "(1+2)**2 = 9; 3*9 = 27; (2**2)*3 = 12; 27 - 12 = 15."
    },
    {
      id: "py-048",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is the value of result?",
      code: "result = (2 * (3 + 4) ** 2 - (3 ** 3) * 3)",
      options: ["17","16","18","19"],
      correct: 0,
      explanation: "2*49 = 98; 27*3 = 81; 98 - 81 = 17."
    },
    {
      id: "py-049",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is the result?",
      code: "x = 8\ny = 10\nresult = x // 3 * 3 / 2 + y % 2 ** 2\nprint(result)",
      options: ["5","5.0","6.0","7.0"],
      correct: 1,
      explanation: "2**2=4; y%4=2; 8//3=2; 2*3=6; 6/2=3.0; 3.0 + 2 = 5.0."
    },
    {
      id: "py-050",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Operators with the same precedence are evaluated in which manner?",
      options: ["Left to right","Right to left","Can't say","None of the mentioned"],
      correct: 0,
      explanation: "Operatorii cu aceeași prioritate se evaluează de la stânga la dreapta (excepție: **, de la dreapta la stânga)."
    },
    {
      id: "py-051",
      chapter: "operatori-tipuri",
      type: "multiple",
      question: "Consider the expression result = a - b * c + d. Which TWO statements are valid? (Choose 2.)",
      options: ["b * c is evaluated first, then the subtraction, then the addition","b * c is evaluated first, then the addition, then the subtraction","a - b is evaluated first, then the multiplication and the addition","The expression is equivalent to a - (b * c) + d"],
      correct: [0,3],
      explanation: "* are prioritate; apoi - și + se evaluează de la stânga la dreapta, deci expresia este (a - (b*c)) + d."
    },
    {
      id: "py-052",
      chapter: "operatori-tipuri",
      type: "single",
      question: "A program must compute b as \"a multiplied by negative one, then raised to the second power\", where a is read from the user. Which expression is valid?",
      code: "a = eval(input('Enter a number: '))",
      options: ["b = (a) ** -2","b = (-a) ** 2","b = (a-) ** 2","b = -(a) ** 2"],
      correct: 1,
      explanation: "(-a) ** 2 forțează întâi negarea, apoi ridicarea la pătrat. Fără paranteze, ** are prioritate față de minusul unar."
    },
    {
      id: "py-053",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Which line should be placed at Line-1 so that a becomes 9?",
      code: "a = 2\na += 1\n# Line-1",
      options: ["a *= 2","a **= 2","a += 2","a -= 2"],
      correct: 1,
      explanation: "După a += 1, a = 3; a **= 2 înseamnă 3**2 = 9."
    },
    {
      id: "py-054",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Which line should be placed at Line-1 so that x becomes 16?",
      code: "x = 3\nx += 1\n# Line-1",
      options: ["x += 2","x -= 2","x *= 2","x **= 2"],
      correct: 3,
      explanation: "După x += 1, x = 4; x **= 2 dă 16 (x *= 2 ar da 8)."
    },
    {
      id: "py-055",
      chapter: "operatori-tipuri",
      type: "multiple",
      question: "In which TWO cases is result equal to 0? (Choose 2.)",
      code: "a = 1\nb = 3\nc = 5\nd = 7",
      options: ["result = a + b * 2","result = a % b - 1","result = a - b // d","result = a ** d - 1"],
      correct: [1,3],
      explanation: "a%b-1 = 1-1 = 0 și a**d-1 = 1-1 = 0. a+b*2 = 7, iar a - b//d = 1."
    },
    {
      id: "py-056",
      chapter: "operatori-tipuri",
      type: "multiple",
      question: "Which TWO expressions evaluate to 3? (Choose 2.)",
      options: ["23 % 5","3 ** 2","11 / 3","13 // 4"],
      correct: [0,3],
      explanation: "23%5=3 și 13//4=3. 3**2=9, iar 11/3≈3.67."
    },
    {
      id: "py-057",
      chapter: "operatori-tipuri",
      type: "drag_drop",
      question: "Analyze the order of evaluation of the expression in the function.",
      code: "def main(a, b, c, d):\n    value = a + b * c - d\n    return value",
      dragItems: [
        { id: "i1", text: "subtraction" },
        { id: "i2", text: "addition" },
        { id: "i3", text: "(a + (b*c)) - d" },
        { id: "i4", text: "(a+b) * (c-d)" },
        { id: "i5", text: "b * c" },
        { id: "i6", text: "a + b" }
      ],
      dropZones: [
        { id: "z1", label: "First expression evaluated", correctItemId: "i5" },
        { id: "z2", label: "Second operation performed", correctItemId: "i2" },
        { id: "z3", label: "Equivalent fully parenthesized expression", correctItemId: "i3" }
      ],
      explanation: "* are prioritate; apoi + și - se aplică de la stânga la dreapta: (a + (b*c)) - d."
    },
    {
      id: "py-058",
      chapter: "operatori-tipuri",
      type: "drag_drop",
      question: "Arrange the operator categories from the HIGHEST to the LOWEST precedence.",
      dragItems: [
        { id: "i1", text: "Multiplication and Division" },
        { id: "i2", text: "Exponents" },
        { id: "i3", text: "Parentheses" },
        { id: "i4", text: "Addition and Subtraction" },
        { id: "i5", text: "Unary positive, negative, not" },
        { id: "i6", text: "And" }
      ],
      dropZones: [
        { id: "z1", label: "1 (highest)", correctItemId: "i3" },
        { id: "z2", label: "2", correctItemId: "i2" },
        { id: "z3", label: "3", correctItemId: "i5" },
        { id: "z4", label: "4", correctItemId: "i1" },
        { id: "z5", label: "5", correctItemId: "i4" },
        { id: "z6", label: "6 (lowest)", correctItemId: "i6" }
      ],
      explanation: "Ordinea: paranteze, exponențiere, operatori unari, * și /, + și -, apoi operatorii logici (and)."
    },
    {
      id: "py-059",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is the output, in order?",
      code: "print(10 == 10 and 20 != 20)\nprint(10 == 10 or 20 != 20)\nprint(not 10 == 10)",
      options: ["True / True / False","False / True / True","False / True / False","True / False / True"],
      correct: 2,
      explanation: "True and False = False; True or False = True; not True = False."
    },
    {
      id: "py-060",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is the output, in order?",
      code: "print(not 0)\nprint(not 10)\nprint(not '')\nprint(not 'durga')\nprint(not None)",
      options: ["True / False / True / False / True","False / True / False / True / False","True / True / True / True / True","False / False / False / False / False"],
      correct: 0,
      explanation: "0, '' și None sunt \"falsy\" (not → True); 10 și 'durga' sunt \"truthy\" (not → False)."
    },
    {
      id: "py-061",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is the output?",
      code: "True = False\nwhile True:\n    print(True)\n    break",
      options: ["True","False","None","SyntaxError"],
      correct: 3,
      explanation: "În Python 3, True este cuvânt rezervat și nu poate fi reatribuit: \"True = False\" dă SyntaxError."
    },
    {
      id: "py-062",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Which operator means \"not equal\" in Python?",
      options: ["<>","!=","=!","not="],
      correct: 1,
      explanation: "Operatorul \"diferit\" este !=."
    },
    {
      id: "py-063",
      chapter: "operatori-tipuri",
      type: "single",
      question: "Which operator checks whether \"nine\" occurs in quote?",
      code: "quote = \"A stitch in time saves nine\"",
      options: ["is","in","==","contains"],
      correct: 1,
      explanation: "Operatorul in testează apartenența: \"nine\" in quote."
    },
    {
      id: "py-064",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is the output of the print statement?",
      code: "numList = [0, 1, 2, 3, 4]\nprint(5 in numList)",
      options: ["4","False","True","5"],
      correct: 1,
      explanation: "Lista nu conține valoarea 5, deci 5 in numList este False."
    },
    {
      id: "py-065",
      chapter: "operatori-tipuri",
      type: "true_false",
      question: "a is b",
      code: "a = [1, 2]\nb = a\nc = [1, 2]",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "b este un alt nume pentru exact același obiect ca a."
    },
    {
      id: "py-066",
      chapter: "operatori-tipuri",
      type: "true_false",
      question: "a == c",
      code: "a = [1, 2]\nb = a\nc = [1, 2]",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "a și c au același conținut, deci == este True."
    },
    {
      id: "py-067",
      chapter: "operatori-tipuri",
      type: "true_false",
      question: "a is c",
      code: "a = [1, 2]\nb = a\nc = [1, 2]",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "c este o listă separată (alt obiect) chiar dacă are același conținut."
    },
    {
      id: "py-068",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is the result (the four printed values, in order)?",
      code: "n1 = [10, 20, 30, 40, 50]\nn2 = [10, 20, 30, 40, 50]\nprint(n1 is n2)\nprint(n1 == n2)\nn1 = n2\nprint(n1 is n2)\nprint(n1 == n2)",
      options: ["False, False, True, True","False, True, False, True","False, True, True, True","True, False, True, False"],
      correct: 2,
      explanation: "Inițial: obiecte diferite, conținut egal (is=False, ==True). După n1 = n2 ambele indică același obiect (is=True, ==True)."
    },
    {
      id: "py-069",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is the result (the four printed values, in order)?",
      code: "numbers = [10, 20, 30, 40, 50]\nalphabets = ['a', 'b', 'c', 'd', 'e']\nprint(numbers is alphabets)\nprint(numbers == alphabets)\nnumbers = alphabets\nprint(numbers is alphabets)\nprint(numbers == alphabets)",
      options: ["False, False, True, True","False, True, False, True","True, False, True, False","False, True, True, True"],
      correct: 0,
      explanation: "Inițial obiecte și conținut diferite (False, False). După numbers = alphabets, ambele sunt același obiect (True, True)."
    },
    {
      id: "py-070",
      chapter: "operatori-tipuri",
      type: "multiple",
      question: "Which TWO statements about the output are correct? (Choose 2.)",
      code: "l1 = ['sunny', 'bunny', 'chinny', 'vinny']\nl2 = ['sunny', 'bunny', 'chinny', 'vinny']\nprint(l1 is not l2)   # (1)\nprint(l1 == l2)       # (2)\nl1 = l2\nprint(l1 is not l2)   # (3)\nprint(l1 != l2)       # (4)",
      options: ["(1) prints True","(2) prints False","(3) prints False","(4) prints True"],
      correct: [0,2],
      explanation: "Inițial obiecte diferite: is not → True, == → True. După l1 = l2 același obiect: is not → False, != → False."
    },
    {
      id: "py-071",
      chapter: "operatori-tipuri",
      type: "multiple",
      question: "In which TWO cases is True printed? (Choose 2.)",
      options: ["a = 45; b = 45; print(a is not b)","s1 = 'Python'; s2 = 'Python'.upper(); print(s1 is s2)","x = [1, 2, 3]; y = [1, 2, 3]; print(x is y)","print('r' in 'durga')","print('is' in 'This IS a Fake News')"],
      correct: [3,4],
      explanation: "'r' apare în 'durga'; 'is' apare ca subșir în 'This'. În celelalte cazuri rezultatul este False."
    },
    {
      id: "py-072",
      chapter: "operatori-tipuri",
      type: "multiple",
      question: "In which TWO cases is True printed? (Choose 2.)",
      code: "subjects = ['java', 'python', 'sap']\nmore_subjects = ['java', 'python', 'sap']\nextra_subjects = more_subjects",
      options: ["print(extra_subjects is more_subjects)","print(subjects is more_subjects)","print(subjects is extra_subjects)","print(subjects == extra_subjects)"],
      correct: [0,3],
      explanation: "extra_subjects și more_subjects sunt același obiect (is → True). subjects este alt obiect cu conținut egal: == → True, dar is → False."
    },
    {
      id: "py-073",
      chapter: "operatori-tipuri",
      type: "single",
      question: "For which condition will True be printed?",
      code: "x = 'Durga'\ny = 'Durga'\nresult = <condition>\nprint(result)",
      options: ["x is y","x is not y","x != y","x < y"],
      correct: 0,
      explanation: "Șirurile identice scurte sunt \"internate\" de Python (același obiect), deci x is y este True. Celelalte sunt False."
    },
    {
      id: "py-074",
      chapter: "operatori-tipuri",
      type: "single",
      question: "What is the output?",
      code: "lst = [7, 8, 9]\nb = lst[:]\nprint(b is lst)\nprint(b == lst)",
      options: ["False, then True","True, then False","False, then False","True, then True"],
      correct: 0,
      explanation: "lst[:] creează o copie (alt obiect): is → False, dar conținutul e egal: == → True."
    },
    {
      id: "py-075",
      chapter: "structuri-control",
      type: "drag_drop",
      question: "Match each keyword with the correct type of control structure.",
      dragItems: [
        { id: "i1", text: "if / elif / else" },
        { id: "i2", text: "for" },
        { id: "i3", text: "while" }
      ],
      dropZones: [
        { id: "z1", label: "Loop over a sequence / known number of iterations", correctItemId: "i2" },
        { id: "z2", label: "Conditional decision", correctItemId: "i1" },
        { id: "z3", label: "Loop that runs as long as a condition is true", correctItemId: "i3" }
      ],
      explanation: "for iterează peste o secvență; if/elif/else decide; while repetă cât timp condiția e adevărată."
    },
    {
      id: "py-076",
      chapter: "structuri-control",
      type: "single",
      question: "What is the final value of commission?",
      code: "collected_amount = 3000\ncommission = 0\nif collected_amount <= 2000:\n    commission = 50\nelif collected_amount > 2500 and collected_amount < 3000:\n    commission = 100\nelif collected_amount > 2500:\n    commission = 150\nif collected_amount >= 3000:\n    commission += 200",
      options: ["350","200","150","100"],
      correct: 0,
      explanation: "Se execută ramura elif collected_amount > 2500 (commission = 150). Al doilea if este separat și e True, deci commission += 200 → 350."
    },
    {
      id: "py-077",
      chapter: "structuri-control",
      type: "single",
      question: "What is the result?",
      code: "order_value = 1500\nstate = 'ap'\ndelivery_charge = 0\nif state in ['up', 'mp', 'ts']:\n    if order_value <= 1000:\n        delivery_charge = 50\n    elif 1000 < order_value < 2000:\n        delivery_charge = 100\n    else:\n        delivery_charge = 150\nelse:\n    delivery_charge = 25\nif state in ['lp', 'kp', 'ap']:\n    if order_value > 1000:\n        delivery_charge += 20\n        if order_value < 2000 and state in ['kp', 'ap']:\n            delivery_charge += 30\n    else:\n        delivery_charge += 15\nprint(delivery_charge)",
      options: ["65","75","85","55"],
      correct: 1,
      explanation: "'ap' nu e în prima listă → 25. Apoi order_value > 1000: +20 → 45; order_value < 2000 și state în ['kp','ap']: +30 → 75."
    },
    {
      id: "py-078",
      chapter: "structuri-control",
      type: "single",
      question: "Which grade is printed to the console?",
      code: "marks = [30, 40, 50, 45, 50, 100]\naverage = sum(marks) // len(marks)\ngrades = {1: 'A', 2: 'B', 3: 'C', 4: 'D'}\nif average >= 90 and average <= 100:\n    key = 1\nelif average >= 80 and average < 90:\n    key = 2\nelif average >= 50 and average < 80:\n    key = 3\nelse:\n    key = 4\nprint(grades[key])",
      options: ["A","B","C","D"],
      correct: 2,
      explanation: "sum = 315; 315 // 6 = 52, deci intervalul 50–79: key = 3 → 'C'."
    },
    {
      id: "py-079",
      chapter: "structuri-control",
      type: "single",
      question: "For which user input will interest_rate be 12?",
      code: "amount = float(input('Enter Loan Amount:'))\ninterest_rate = 0\nif amount > 0 and amount <= 50000:\n    interest_rate = 10\nelif amount > 50000 and amount < 100000:\n    interest_rate = 12\nelif amount >= 100000 and amount < 150000:\n    interest_rate = 16\nelse:\n    interest_rate = 22",
      options: ["50000","50001","100000","100001","150000"],
      correct: 1,
      explanation: "50001 nu respectă prima condiție (<= 50000), dar respectă a doua (> 50000 și < 100000) → 12."
    },
    {
      id: "py-080",
      chapter: "structuri-control",
      type: "single",
      question: "In which of the following cases is 'Needs Director Approval' printed?",
      code: "days = int(input('Enter number of days for leave: '))\ncause = input('Enter the cause: ')\nif days == 1:\n    print('Leave will be approved immediately')\nelif days > 1 and days <= 3:\n    if cause == 'Sick':\n        print('Leave will be approved immediately')\n    else:\n        print('Needs Lead Approval')\nelif days > 3 and days < 5:\n    if cause == 'Sick':\n        print('Needs Manager Approval')\n    else:\n        print('Needs Director Approval')\nelif days >= 5 and days <= 10:\n    print('Needs Director Approval')",
      options: ["days = 2 and cause = 'Sick'","days = 3 and cause = 'personal'","days = 4 and cause = 'Sick'","days = 4 and cause = 'official'"],
      correct: 3,
      explanation: "days = 4 intră pe ramura days > 3 and days < 5; cu cauza 'official' (diferită de 'Sick') se execută else → 'Needs Director Approval'."
    },
    {
      id: "py-081",
      chapter: "structuri-control",
      type: "single",
      question: "A company rents books at $3.00 per day. If the book is returned after 9 PM, one extra day is charged. Rented on Sunday: 50% off; rented on Saturday: 30% off. The book is rented on Sunday for 5 days and returned after 9 PM. What is the result?",
      code: "ontime = input(\"Was the book returned before 9 pm? y or n \").lower()\ndays_rented = int(input(\"How many days was the book rented? \"))\nday_rented = input(\"What day was the book rented? \").capitalize()\ncost_per_day = 3.00\nif ontime == 'n':\n    days_rented = days_rented + 1\nif day_rented == 'Sunday':\n    total = (days_rented * cost_per_day) * 0.5\nelif day_rented == 'Saturday':\n    total = (days_rented * cost_per_day) * 0.7\nelse:\n    total = days_rented * cost_per_day\nprint(\"The cost of the book rental is: $\", total)",
      options: ["The cost of the book rental is: $ 7.0","The cost of the book rental is: $ 8.0","The cost of the book rental is: $ 9.0","The cost of the book rental is: $ 10.0"],
      correct: 2,
      explanation: "După 9 PM: 5 + 1 = 6 zile; duminică: (6 * 3.00) * 0.5 = 9.0."
    },
    {
      id: "py-082",
      chapter: "structuri-control",
      type: "single",
      question: "Minors and seniors must receive a 10% discount. Which code should you add on line 03?",
      code: "def get_discount(minor, senior):\n    discount = .1\n    [Line 03]\n        discount = 0\n    return discount",
      options: ["if not (minor and senior):","if not (minor or senior):","if (not minor) and senior:","if (not minor) or senior:"],
      correct: 1,
      explanation: "Reducerea se anulează doar dacă persoana nu este nici minor, nici senior: not (minor or senior)."
    },
    {
      id: "py-083",
      chapter: "structuri-control",
      type: "single",
      question: "To print 'Valid' to the console, which condition should the if statement use?",
      code: "a = 5\nb = 10\nc = 2\nd = True\n\nx = a + b * c\ny = a + b / d\n\nif <condition>:\n    print('Valid')\nelse:\n    print('Invalid')",
      options: ["x > y","x == y","x < y","x <= y"],
      correct: 0,
      explanation: "x = 5 + 20 = 25; y = 5 + 10/True = 15.0 (True se comportă ca 1). Doar x > y este adevărată."
    },
    {
      id: "py-084",
      chapter: "structuri-control",
      type: "single",
      question: "In which of the following cases does result become 9?",
      code: "a = 12\nb = 4\ns = 'He shall not be happy if he does not work'",
      options: ["result = 3 if None else a/b","result = s.find('not') if s else None","result = s.rfind('not') if s else None","result = 5 if len(s) > 4 else 6"],
      correct: 1,
      explanation: "s.find('not') întoarce indexul primei apariții a lui 'not', adică 9."
    },
    {
      id: "py-085",
      chapter: "structuri-control",
      type: "single",
      question: "Which condition is true when age is from 18 through 65, inclusive?",
      options: ["age > 18 and age < 65","age >= 18 and age <= 65","age >= 18 or age <= 65","18 > age > 65"],
      correct: 1,
      explanation: "Pentru capete incluse se folosesc >= și <=, legate prin and."
    },
    {
      id: "py-086",
      chapter: "structuri-control",
      type: "single",
      question: "What is printed?",
      code: "score = 85\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelse:\n    print(\"C\")",
      options: ["A","B","C","Nothing"],
      correct: 1,
      explanation: "Prima condiție e falsă, a doua e adevărată → \"B\"."
    },
    {
      id: "py-087",
      chapter: "structuri-control",
      type: "single",
      question: "Which keyword is a placeholder that performs no action?",
      options: ["continue","pass","break","while"],
      correct: 1,
      explanation: "pass menține blocul valid sintactic fără să execute nimic."
    },
    {
      id: "py-088",
      chapter: "structuri-control",
      type: "single",
      question: "Which loop iterates through 1, 2, 3, 4, 5?",
      options: ["for week in range(1, 5):","for week in range(1, 6):","for week in range(0, 5):","for week in range(5, 1):"],
      correct: 1,
      explanation: "Capătul din dreapta al lui range nu este inclus."
    },
    {
      id: "py-089",
      chapter: "structuri-control",
      type: "single",
      question: "What does continue do inside a loop?",
      options: ["Stops the program","Ends the loop","Skips the rest of the current iteration","Restarts Python"],
      correct: 2,
      explanation: "continue trece imediat la următoarea iterație."
    },
    {
      id: "py-090",
      chapter: "structuri-control",
      type: "single",
      question: "What does break do inside a loop?",
      options: ["Skips one iteration","Exits the loop","Exits only the if statement","Does nothing"],
      correct: 1,
      explanation: "break iese din bucla în care se află."
    },
    {
      id: "py-091",
      chapter: "structuri-control",
      type: "single",
      question: "What numbers are printed?",
      code: "for i in range(5):\n    if i == 3:\n        break\n    print(i)",
      options: ["0 1 2","0 1 2 3","1 2 3","0 1 2 3 4"],
      correct: 0,
      explanation: "Când i devine 3, break se execută înainte de print."
    },
    {
      id: "py-092",
      chapter: "structuri-control",
      type: "single",
      question: "What numbers are printed?",
      code: "for i in range(5):\n    if i == 2:\n        continue\n    print(i)",
      options: ["0 1 2 3 4","0 1 3 4","2","0 1"],
      correct: 1,
      explanation: "Pentru i == 2, continue sare peste print doar la acea iterație."
    },
    {
      id: "py-093",
      chapter: "structuri-control",
      type: "single",
      question: "How many times is the print statement executed?",
      code: "for day in range(2):\n    for student in range(3):\n        print(day, student)",
      options: ["3","4","6","9"],
      correct: 2,
      explanation: "Bucla exterioară rulează de 2 ori, cea interioară de 3 ori: 2 * 3 = 6."
    },
    {
      id: "py-094",
      chapter: "structuri-control",
      type: "single",
      question: "What is the final value of total?",
      code: "total = 0\nfor n in range(1, 6):\n    total += n",
      options: ["6","10","15","5"],
      correct: 2,
      explanation: "1 + 2 + 3 + 4 + 5 = 15."
    },
    {
      id: "py-095",
      chapter: "structuri-control",
      type: "single",
      question: "What is printed?",
      code: "for x in range(1, 4):\n    pass\nprint(x)",
      options: ["1","2","3","4"],
      correct: 2,
      explanation: "range(1, 4) produce 1, 2, 3; după buclă x rămâne 3."
    },
    {
      id: "py-096",
      chapter: "structuri-control",
      type: "single",
      question: "What is the result?",
      code: "t = (2, 4, 6, 8, 10, 12)\nd = {1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F'}\nresult = 1\nfor t1 in t:\n    if t1 in d:\n        result += t1\nprint(result)",
      options: ["12","13","19","6"],
      correct: 1,
      explanation: "Doar 2, 4 și 6 sunt chei în d: 1 + 2 + 4 + 6 = 13."
    },
    {
      id: "py-097",
      chapter: "structuri-control",
      type: "single",
      question: "What is the result?",
      code: "t = (2, 4, 6, 8, 10, 12)\nd = {1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F'}\nresult = 1\nfor t1 in t:\n    if t1 in d:\n        continue\n    else:\n        result += t1\nprint(result)",
      options: ["29","30","31","32"],
      correct: 2,
      explanation: "2, 4, 6 sunt chei (se sare peste ele). Se adună 8, 10, 12: 1 + 8 + 10 + 12 = 31."
    },
    {
      id: "py-098",
      chapter: "structuri-control",
      type: "single",
      question: "What is the result?",
      code: "values = [[3, 4, 5, 1], [33, 6, 1, 2]]\n\nv = values[0][0]\nfor lst in values:\n    for element in lst:\n        if v > element:\n            v = element\n\nprint(v)",
      options: ["3","2","1","4"],
      correct: 2,
      explanation: "Codul găsește minimul tuturor elementelor: 1."
    },
    {
      id: "py-099",
      chapter: "structuri-control",
      type: "single",
      question: "What is the output?",
      code: "for i in range(0):\n    print(i)",
      options: ["0","No output","IndentationError","None"],
      correct: 1,
      explanation: "range(0) este gol, deci corpul buclei nu se execută niciodată."
    },
    {
      id: "py-100",
      chapter: "structuri-control",
      type: "single",
      question: "What is the output?",
      code: "a = [0, 1, 2, 3]\ni = -2\nwhile i not in a:\n    print(i)\n    i += 1",
      options: ["-2 -1","0","Error","Nothing is printed"],
      correct: 0,
      explanation: "Se afișează -2 și -1; când i devine 0, 0 este în a și bucla se oprește."
    },
    {
      id: "py-101",
      chapter: "structuri-control",
      type: "single",
      question: "What is the result?",
      code: "l = [10, (20,), {30}, {}, {}, [48, 50]]\ncount = 0\nfor i in range(len(l)):\n    if type(l[i]) == list:\n        count += 1\n    elif type(l[i]) == tuple:\n        count += 2\n    elif type(l[i]) == set:\n        count += 3\n    elif type(l[i]) == dict:\n        count += 4\n    else:\n        count += 5\nprint(count)",
      options: ["17","18","19","20"],
      correct: 2,
      explanation: "int +5, tuple +2, set +3, {} (dict) +4, {} (dict) +4, list +1 = 19."
    },
    {
      id: "py-102",
      chapter: "structuri-control",
      type: "multiple",
      question: "With numbers = [10, 20, 30, 40] and x = 0, in which TWO cases is 10 printed? (Choose 2.)",
      options: ["for i in (30, 40, 50):\n    if i in numbers:\n        x = x + 5\nprint(x)","for i in (30, 40, 50):\n    if i not in numbers:\n        x = x + 5\nprint(x)","for i in (30, 40, 50):\n    if i not in numbers:\n        x = x + 10\nprint(x)","for i in (30, 40, 50):\n    if i in numbers:\n        x = x + 10\nprint(x)"],
      correct: [0,2],
      explanation: "Cazul 1: 30 și 40 sunt în listă → 5 + 5 = 10. Cazul 3: doar 50 nu e în listă → +10. Cazul 2 dă 5, cazul 4 dă 20."
    },
    {
      id: "py-103",
      chapter: "structuri-control",
      type: "multiple",
      question: "With l = ['Apple', 'Boy', 'Cat', 'Dog'], in which TWO cases are exactly Boy, Cat and Dog printed (one per line)? (Choose 2.)",
      options: ["for x in l:\n    if len(x) == 3:\n        print(x)","for x in l:\n    if len(x) != 3:\n        print(x)","for x in l:\n    print(x)","l1 = l[1:]\nfor x in l1:\n    print(x)"],
      correct: [0,3],
      explanation: "Primul filtrează cuvintele de 3 litere; al patrulea elimină 'Apple' prin slicing. Al doilea afișează doar 'Apple', al treilea afișează toate cuvintele."
    },
    {
      id: "py-104",
      chapter: "structuri-control",
      type: "drag_drop",
      question: "Complete the grade conditions by choosing the correct operator for each blank.",
      code: "if grade [1] 100:\n    print(\"Outstanding\")\nelif grade [2] 90:\n    print(\"Great\")\nelif grade [3] 70:\n    print(\"Study hard\")\nelse:\n    print(\"Doing well\")",
      dragItems: [
        { id: "i1", text: ">=" },
        { id: "i2", text: "!=" },
        { id: "i3", text: "<=" },
        { id: "i4", text: "<" },
        { id: "i5", text: ">" },
        { id: "i6", text: "==" }
      ],
      dropZones: [
        { id: "z1", label: "Blank [1]", correctItemId: "i6" },
        { id: "z2", label: "Blank [2]", correctItemId: "i1" },
        { id: "z3", label: "Blank [3]", correctItemId: "i3" }
      ],
      explanation: "100 este un caz exact (==); 90 se include cu >=; 70 se include cu <=."
    },
    {
      id: "py-105",
      chapter: "structuri-control",
      type: "drag_drop",
      question: "Complete the loop so that it stops when product ID 6 is found.",
      code: "productIdList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\nindex = 0\n\n[1] index < 10:\n    print(productIdList[index])\n    if productIdList[index] == 6:\n        [2]\n    else:\n        index += 1",
      dragItems: [
        { id: "i1", text: "for" },
        { id: "i2", text: "if" },
        { id: "i3", text: "while" },
        { id: "i4", text: "break" },
        { id: "i5", text: "continue" }
      ],
      dropZones: [
        { id: "z1", label: "Blank [1]", correctItemId: "i3" },
        { id: "z2", label: "Blank [2]", correctItemId: "i4" }
      ],
      explanation: "Condiția index < 10 cere o buclă while; break oprește bucla când valoarea 6 este găsită."
    },
    {
      id: "py-106",
      chapter: "structuri-control",
      type: "drag_drop",
      question: "A program must report whether a name is entered in lower case, upper case or mixed case. Drag the 4 correct code segments into the right order.",
      dragItems: [
        { id: "i1", text: "if name.lower() == name:\n    print(name, \"is all lower case.\")" },
        { id: "i2", text: "else:\n    print(name, \"is lower case.\")" },
        { id: "i3", text: "name = input(\"Enter your name: \")" },
        { id: "i4", text: "elif name.upper() == name:\n    print(name, \"is all upper case.\")" },
        { id: "i5", text: "else:\n    print(name, \"is upper case.\")" },
        { id: "i6", text: "else:\n    print(name, \"is mixed case.\")" }
      ],
      dropZones: [
        { id: "z1", label: "Linia 1", correctItemId: "i3" },
        { id: "z2", label: "Linia 2", correctItemId: "i1" },
        { id: "z3", label: "Linia 3", correctItemId: "i4" },
        { id: "z4", label: "Linia 4", correctItemId: "i6" }
      ],
      explanation: "Se citește numele, se testează întâi dacă e doar cu minuscule (if), apoi doar cu majuscule (elif); else acoperă cazul mixt. Cele două segmente else rămase sunt distractori."
    },
    {
      id: "py-107",
      chapter: "structuri-control",
      type: "drag_drop",
      question: "Arrange the reward logic in the correct order (indentation matters).",
      dragItems: [
        { id: "i1", text: "        print(\"Send golf balls\")" },
        { id: "i2", text: "if monthlySales > 100000:" },
        { id: "i3", text: "    if region == \"North\" and season == \"Winter\":" },
        { id: "i4", text: "        print(\"Send skis\")" },
        { id: "i5", text: "    else:" }
      ],
      dropZones: [
        { id: "z1", label: "Linia 1", correctItemId: "i2" },
        { id: "z2", label: "Linia 2", correctItemId: "i3" },
        { id: "z3", label: "Linia 3", correctItemId: "i4" },
        { id: "z4", label: "Linia 4", correctItemId: "i5" },
        { id: "z5", label: "Linia 5", correctItemId: "i1" }
      ],
      explanation: "Este un if imbricat: întâi condiția pe vânzări, apoi (în interior) condiția pe regiune și sezon; operatorul logic corect este and."
    },
    {
      id: "py-108",
      chapter: "structuri-control",
      type: "drag_drop",
      question: "Arrange the lines of a while loop that prints the numbers 1 through 3.",
      dragItems: [
        { id: "i1", text: "i = 1" },
        { id: "i2", text: "    print(i)" },
        { id: "i3", text: "    i += 1" },
        { id: "i4", text: "while i <= 3:" }
      ],
      dropZones: [
        { id: "z1", label: "Linia 1", correctItemId: "i1" },
        { id: "z2", label: "Linia 2", correctItemId: "i4" },
        { id: "z3", label: "Linia 3", correctItemId: "i2" },
        { id: "z4", label: "Linia 4", correctItemId: "i3" }
      ],
      explanation: "Se inițializează contorul, se verifică condiția, se afișează valoarea, apoi se incrementează."
    },
    {
      id: "py-109",
      chapter: "structuri-control",
      type: "drag_drop",
      question: "Arrange a validation loop that asks for a location until one of the four allowed locations is entered.",
      dragItems: [
        { id: "i1", text: "while response not in locations:" },
        { id: "i2", text: "print(response)" },
        { id: "i3", text: "locations = [\"North\", \"South\", \"West\", \"East\"]" },
        { id: "i4", text: "    print(\"Try again.\")" },
        { id: "i5", text: "    response = input(\"Enter a location: \")" },
        { id: "i6", text: "response = input(\"Enter a location: \")" }
      ],
      dropZones: [
        { id: "z1", label: "Linia 1", correctItemId: "i3" },
        { id: "z2", label: "Linia 2", correctItemId: "i6" },
        { id: "z3", label: "Linia 3", correctItemId: "i1" },
        { id: "z4", label: "Linia 4", correctItemId: "i4" },
        { id: "z5", label: "Linia 5", correctItemId: "i5" },
        { id: "z6", label: "Linia 6", correctItemId: "i2" }
      ],
      explanation: "Prima citire se face înainte de while; în interiorul buclei se cere din nou valoarea până devine validă."
    },
    {
      id: "py-110",
      chapter: "structuri-control",
      type: "drag_drop",
      question: "Arrange the grade conditions in the correct order.",
      dragItems: [
        { id: "i1", text: "    letter_grade = \"B\"" },
        { id: "i2", text: "elif grade >= 70:" },
        { id: "i3", text: "    letter_grade = \"A\"" },
        { id: "i4", text: "else:" },
        { id: "i5", text: "if grade >= 90:" },
        { id: "i6", text: "elif grade >= 65:" },
        { id: "i7", text: "    letter_grade = \"C\"" },
        { id: "i8", text: "elif grade >= 80:" },
        { id: "i9", text: "    letter_grade = \"D\"" },
        { id: "i10", text: "    letter_grade = \"F\"" }
      ],
      dropZones: [
        { id: "z1", label: "Linia 1", correctItemId: "i5" },
        { id: "z2", label: "Linia 2", correctItemId: "i3" },
        { id: "z3", label: "Linia 3", correctItemId: "i8" },
        { id: "z4", label: "Linia 4", correctItemId: "i1" },
        { id: "z5", label: "Linia 5", correctItemId: "i2" },
        { id: "z6", label: "Linia 6", correctItemId: "i7" },
        { id: "z7", label: "Linia 7", correctItemId: "i6" },
        { id: "z8", label: "Linia 8", correctItemId: "i9" },
        { id: "z9", label: "Linia 9", correctItemId: "i4" },
        { id: "z10", label: "Linia 10", correctItemId: "i10" }
      ],
      explanation: "Condițiile se verifică de la cea mai mare la cea mai mică; după ce 90+ e exclus, elif grade >= 80 acoperă automat 80–89 etc."
    },
    {
      id: "py-111",
      chapter: "structuri-control",
      type: "drag_drop",
      question: "Arrange the code segments so that it prints all prime numbers from 2 through 100.",
      dragItems: [
        { id: "i1", text: "p = 2" },
        { id: "i2", text: "        print(p)" },
        { id: "i3", text: "    p = p + 1" },
        { id: "i4", text: "            is_prime = False" },
        { id: "i5", text: "        if p % i == 0:" },
        { id: "i6", text: "    for i in range(2, p):" },
        { id: "i7", text: "while p <= 100:" },
        { id: "i8", text: "    if is_prime == True:" },
        { id: "i9", text: "            break" },
        { id: "i10", text: "    is_prime = True" }
      ],
      dropZones: [
        { id: "z1", label: "Linia 1", correctItemId: "i1" },
        { id: "z2", label: "Linia 2", correctItemId: "i7" },
        { id: "z3", label: "Linia 3", correctItemId: "i10" },
        { id: "z4", label: "Linia 4", correctItemId: "i6" },
        { id: "z5", label: "Linia 5", correctItemId: "i5" },
        { id: "z6", label: "Linia 6", correctItemId: "i4" },
        { id: "z7", label: "Linia 7", correctItemId: "i9" },
        { id: "z8", label: "Linia 8", correctItemId: "i8" },
        { id: "z9", label: "Linia 9", correctItemId: "i2" },
        { id: "z10", label: "Linia 10", correctItemId: "i3" }
      ],
      explanation: "Pentru fiecare p presupunem că e prim, căutăm un divizor între 2 și p-1, ne oprim la primul găsit și afișăm p doar dacă is_prime a rămas True."
    },
    {
      id: "py-112",
      chapter: "structuri-control",
      type: "drag_drop",
      question: "Arrange the decision structure that computes a real b-th root of a.",
      dragItems: [
        { id: "i1", text: "    answer = a ** (1 / b)" },
        { id: "i2", text: "    else:" },
        { id: "i3", text: "        answer = \"Result is an imaginary number\"" },
        { id: "i4", text: "    if b % 2 == 0:" },
        { id: "i5", text: "        answer = -((-a) ** (1 / b))" },
        { id: "i6", text: "else:" },
        { id: "i7", text: "if a >= 0:" }
      ],
      dropZones: [
        { id: "z1", label: "Linia 1", correctItemId: "i7" },
        { id: "z2", label: "Linia 2", correctItemId: "i1" },
        { id: "z3", label: "Linia 3", correctItemId: "i6" },
        { id: "z4", label: "Linia 4", correctItemId: "i4" },
        { id: "z5", label: "Linia 5", correctItemId: "i3" },
        { id: "z6", label: "Linia 6", correctItemId: "i2" },
        { id: "z7", label: "Linia 7", correctItemId: "i5" }
      ],
      explanation: "Pentru a >= 0 se aplică direct formula. Pentru a negativ și b par rădăcina nu e reală; pentru b impar rezultatul real este negativ: -((-a)**(1/b))."
    },
    {
      id: "py-113",
      chapter: "structuri-control",
      type: "single",
      question: "Which code block correctly assigns a rating for every age, including an unknown (None) age?",
      options: ["if age is None:\n    rating = \"C\"\nelif age < 13:\n    rating = \"C\"\nelif age < 18:\n    rating = \"T\"\nelse:\n    rating = \"A\"","if age < 13:\n    rating = \"C\"\nelif age < 18:\n    rating = \"T\"\nelif age is None:\n    rating = \"C\"\nelse:\n    rating = \"A\"","if age is None:\n    rating = \"C\"\nelif age < 18:\n    rating = \"T\"\nelif age < 13:\n    rating = \"C\"\nelse:\n    rating = \"A\"","if age is None:\n    rating = \"A\"\nelif age < 13:\n    rating = \"C\"\nelif age < 18:\n    rating = \"T\"\nelse:\n    rating = \"C\""],
      correct: 0,
      explanation: "None trebuie verificat primul (altfel comparația cu < dă TypeError). Apoi: sub 13 → C, 13–17 → T, restul → A. În varianta 3, condiția age < 18 ascunde age < 13."
    },
    {
      id: "py-114",
      chapter: "structuri-control",
      type: "single",
      question: "Does the grade-converter code require a change to its if/elif conditions?",
      code: "if marks >= 90:\n    grade = 'A'\nelif marks >= 80:\n    grade = 'B'\nelif marks >= 70:\n    grade = 'C'\nelif marks >= 65:\n    grade = 'D'\nelse:\n    grade = 'E'",
      options: ["Line 1 must use marks <= 90.","Line 2 must also check marks <= 90.","Line 3 must also check marks <= 80.","No changes are required."],
      correct: 3,
      explanation: "Condițiile sunt verificate de sus în jos: dacă marks >= 90 e fals, elif marks >= 80 acoperă automat 80–89 etc."
    },
    {
      id: "py-115",
      chapter: "structuri-control",
      type: "single",
      question: "Which statement should be used when a divisor is found, so that the inner search stops immediately?",
      code: "for i in range(2, p):\n    if p % i == 0:\n        is_prime = False\n        # missing statement",
      options: ["continue","pass","break","return True"],
      correct: 2,
      explanation: "După ce s-a găsit un divizor nu mai trebuie testați ceilalți; break iese din bucla for interioară."
    },
    {
      id: "py-116",
      chapter: "structuri-date",
      type: "single",
      question: "Which Python data structure does NOT allow its elements to be changed after creation?",
      options: ["list","dict","tuple","set"],
      correct: 2,
      explanation: "tuple este imutabil: odată creat, conținutul său nu mai poate fi modificat."
    },
    {
      id: "py-117",
      chapter: "structuri-date",
      type: "single",
      question: "Which line of code assigns <class 'list'> to x?",
      code: "t = ([10, 20], 10, False)",
      options: ["x = type(t)","x = type(t[0])","x = type(t[1])","x = type(t[0:])"],
      correct: 1,
      explanation: "t[0] este [10, 20], o listă. type(t) și type(t[0:]) sunt tuple, iar type(t[1]) este int."
    },
    {
      id: "py-118",
      chapter: "structuri-date",
      type: "multiple",
      question: "Which TWO expressions access 'Mango'? (Choose 2.)",
      code: "items = ['Apple', 'Banana', 'Carrot', 'Mango']",
      options: ["items[3]","items[4]","items[-1]","items[0]"],
      correct: [0,2],
      explanation: "items[3] și items[-1] indică ultimul element. items[4] dă IndexError, iar items[0] este 'Apple'."
    },
    {
      id: "py-119",
      chapter: "structuri-date",
      type: "single",
      question: "A list named colors contains 200 colors. You need to slice the list to display every other color, starting with the second color. Which code should you use?",
      options: ["colors[1:2]","colors[::2]","colors[2:2]","colors[1::2]"],
      correct: 3,
      explanation: "colors[1::2] pornește de la indexul 1 (al doilea element) și ia din 2 în 2."
    },
    {
      id: "py-120",
      chapter: "structuri-date",
      type: "multiple",
      question: "A list named employees contains 200 employee names, the last five being company management. Which TWO slices display all employees excluding management? (Choose 2.)",
      options: ["employees[0:-4]","employees[1:-5]","employees[:-5]","employees[0:-5]","employees[1:-4]"],
      correct: [2,3],
      explanation: "employees[:-5] și employees[0:-5] sunt echivalente și exclud exact ultimele 5 elemente."
    },
    {
      id: "py-121",
      chapter: "structuri-date",
      type: "multiple",
      question: "A list named employees contains 600 employee names, the last 3 being company management. Which TWO slices display all employees excluding management? (Choose 2.)",
      options: ["employees[1:-2]","employees[:-3]","employees[1:-3]","employees[0:-2]","employees[0:-3]"],
      correct: [1,4],
      explanation: "employees[:-3] și employees[0:-3] exclud ultimele 3 elemente."
    },
    {
      id: "py-122",
      chapter: "structuri-date",
      type: "single",
      question: "A list named employees contains 500 names, the last 3 being company management. Which expression represents only the management employees?",
      options: ["employees[497:]","employees[-3:]","employees[497:500]","All of the above"],
      correct: 3,
      explanation: "Toate trei selectează ultimele 3 elemente (indecșii 497, 498, 499)."
    },
    {
      id: "py-123",
      chapter: "structuri-date",
      type: "single",
      question: "What is the output value?",
      code: "list_1 = [1, 2]\nlist_2 = [3, 4]\nlist_3 = list_1 + list_2\nlist_4 = list_3 * 3\nprint(list_4)",
      options: ["[3, 6, 9, 12]","[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]","[[1, 2], [3, 4], [1, 2], [3, 4], [1, 2], [3, 4]]","[[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]"],
      correct: 1,
      explanation: "list_3 = [1,2,3,4]; * 3 repetă lista de 3 ori (nu înmulțește elementele)."
    },
    {
      id: "py-124",
      chapter: "structuri-date",
      type: "single",
      question: "What is the output?",
      code: "names = ['itvedant', 'Thane', 'Andheri', 'Navi Mumbai']\nprint(names[-1][-1])",
      options: ["Navi Mumbai","Mumbai","i","a"],
      correct: 2,
      explanation: "names[-1] este 'Navi Mumbai', iar [-1] al acestui șir este ultimul caracter: 'i'."
    },
    {
      id: "py-125",
      chapter: "structuri-date",
      type: "single",
      question: "Which of the following does NOT print 'CAT' to the console?",
      code: "x = 'ACROTE'\ny = 'APPLE'\nz = 'TOMATO'",
      options: ["print(x[1] + y[0] + z[0])","print(x[2] + y[1] + z[1])","print(x[-5] + y[0] + z[0])","print(x[-5] + y[0] + z[-2])"],
      correct: 1,
      explanation: "x[2]+y[1]+z[1] = 'R'+'P'+'O' = 'RPO'. Celelalte trei dau 'CAT'."
    },
    {
      id: "py-126",
      chapter: "structuri-date",
      type: "single",
      question: "What is the result?",
      code: "s = 'Python is easy'\ns1 = s[-7:]\ns2 = s[-4:]\nprint(s1 + s2)",
      options: ["is easyeasy","easyeasy","iseasyeasy","s easyeasy","is easy easy"],
      correct: 0,
      explanation: "s[-7:] = 'is easy', s[-4:] = 'easy' → 'is easyeasy'."
    },
    {
      id: "py-127",
      chapter: "structuri-date",
      type: "single",
      question: "Which statement inserted at Line-1 makes the program print 2?",
      code: "s = 'Python is easy'\ns1 = s[6:-4]\n# Line-1\nprint(len(s2))",
      options: ["s2 = s1.lstrip()","s2 = s1.rstrip()","s2 = s1.lrstrip()","s2 = s1.strip()"],
      correct: 3,
      explanation: "s1 = ' is ' (spații la ambele capete). Doar strip() le elimină pe ambele, rămâne 'is' (lungime 2). lrstrip() nu există."
    },
    {
      id: "py-128",
      chapter: "structuri-date",
      type: "multiple",
      question: "Which TWO lines print 'AA' to the console? (Choose 2.)",
      code: "b = 'BANANA'",
      options: ["print(b[1] + b[2])","print(b[1] + b[3])","print(b[2] + b[4])","print(b[3] + b[5])"],
      correct: [1,3],
      explanation: "În 'BANANA' literele A sunt la indecșii 1, 3 și 5. b[1]+b[3] și b[3]+b[5] dau 'AA'; b[1]+b[2] dă 'AN', iar b[2]+b[4] dă 'NN'."
    },
    {
      id: "py-129",
      chapter: "structuri-date",
      type: "single",
      question: "Which line of code assigns the string 'TT' to output?",
      code: "x = 'TEXT'",
      options: ["output = x[1] + x[1]","output = x[1] + x[4]","output = x[0] + x[2]","output = x[0] + x[-1]"],
      correct: 3,
      explanation: "x[0] = 'T' și x[-1] = 'T' (ultimul caracter)."
    },
    {
      id: "py-130",
      chapter: "structuri-date",
      type: "single",
      question: "Which slice reverses a string?",
      options: ["[::1]","[1::]","[-1::]","[::-1]"],
      correct: 3,
      explanation: "Al treilea element din slice este pasul; pasul -1 parcurge șirul invers."
    },
    {
      id: "py-131",
      chapter: "structuri-date",
      type: "single",
      question: "Which index selects the last item in a list?",
      options: ["0","1","-1","-2"],
      correct: 2,
      explanation: "-1 este ultimul element; -2 este penultimul."
    },
    {
      id: "py-132",
      chapter: "structuri-date",
      type: "single",
      question: "What is the result of the slice?",
      code: "text = \"Python\"\nprint(text[1:4])",
      options: ["\"yth\"","\"ytho\"","\"Pyt\"","\"thon\""],
      correct: 0,
      explanation: "Începutul este inclus, sfârșitul nu: pozițiile 1, 2, 3 → \"yth\"."
    },
    {
      id: "py-133",
      chapter: "structuri-date",
      type: "multiple",
      question: "After sorting, which TWO expressions print rook? (Choose 2.)",
      code: "pieces = [\"king\", \"queen\", \"rook\", \"bishop\", \"knight\", \"pawn\"]\npieces.sort()",
      options: ["pieces[6]","pieces[5]","pieces[3]","pieces[-1]"],
      correct: [1,3],
      explanation: "După sortare: bishop, king, knight, pawn, queen, rook. rook are indexul 5 sau -1. Indexul 6 nu există, iar 3 este pawn."
    },
    {
      id: "py-134",
      chapter: "structuri-date",
      type: "single",
      question: "Which method adds an item to the end of a list?",
      options: ["add()","append()","insertEnd()","push()"],
      correct: 1,
      explanation: "list.append(valoare) adaugă la sfârșit."
    },
    {
      id: "py-135",
      chapter: "structuri-date",
      type: "single",
      question: "What is the list after the code runs?",
      code: "items = ['A', 'B']\nitems.insert(1, 'X')",
      options: ["['A', 'B', 'X']","['A', 'X', 'B']","['X', 'A', 'B']","['A', 'B']"],
      correct: 1,
      explanation: "insert(1, 'X') inserează la indexul 1 și mută restul elementelor."
    },
    {
      id: "py-136",
      chapter: "structuri-date",
      type: "single",
      question: "Which method removes the first occurrence of a specific value from a list?",
      options: ["delete()","remove()","discard()","popvalue()"],
      correct: 1,
      explanation: "list.remove(valoare) caută valoarea și o șterge prima dată când apare."
    },
    {
      id: "py-137",
      chapter: "structuri-date",
      type: "single",
      question: "What does pop() with no index return?",
      options: ["The first item","The last item","The list length","None"],
      correct: 1,
      explanation: "list.pop() șterge și întoarce ultimul element."
    },
    {
      id: "py-138",
      chapter: "structuri-date",
      type: "single",
      question: "What is printed by the final print(x)?",
      code: "x = [13, 4, 17, 10]\nw = x[1:]\nu = x[1:]\ny = x\nu[0] = 50\ny[1] = 40\nprint(x)",
      options: ["[13, 40, 17, 10]","[50, 40, 10]","[13, 4, 17, 10]","[50, 40, 17, 10]"],
      correct: 0,
      explanation: "u = x[1:] este o copie separată, deci u[0] = 50 nu modifică x. y = x este același obiect, deci y[1] = 40 modifică x."
    },
    {
      id: "py-139",
      chapter: "structuri-date",
      type: "single",
      question: "What is printed?",
      code: "s = 'AB CD'\nitems = list(s)\nitems.append('EF')\nprint(items)",
      options: ["['A', 'B', 'C', 'D', 'E', 'F']","['AB CD', 'EF']","['A', 'B', ' ', 'C', 'D', 'EF']","['A', 'B', 'C', 'D', 'EF']"],
      correct: 2,
      explanation: "list(s) separă fiecare caracter (inclusiv spațiul); append('EF') adaugă 'EF' ca UN singur element la final."
    },
    {
      id: "py-140",
      chapter: "structuri-date",
      type: "single",
      question: "What is the result of this code?",
      code: "a = ['a', 'b', 'c', 'd']\nfor i in a:\n    a.append(i.upper())\nprint(a)",
      options: ["['A', 'B', 'C', 'D']","['a', 'b', 'c', 'd']","SyntaxError","MemoryError at runtime"],
      correct: 3,
      explanation: "Lista este modificată în timpul parcurgerii: elementele adăugate sunt la rândul lor parcurse și generează alte elemente, deci bucla nu se termină până la epuizarea memoriei."
    },
    {
      id: "py-141",
      chapter: "structuri-date",
      type: "drag_drop",
      question: "Troubleshoot the room lookup program: choose the correct answer for each item.",
      code: "rooms = {1: 'Left Conference Room', 2: 'Right Conference Room'}\nroom = input('Enter the room number: ')\nif room not in rooms:\n    print('The room does not exist.')\nelse:\n    print('The room name is ' + rooms[room])",
      dragItems: [
        { id: "i1", text: "int" },
        { id: "i2", text: "Mismatched data type(s)" },
        { id: "i3", text: "int and string" },
        { id: "i4", text: "Misnamed variable(s)" },
        { id: "i5", text: "float and int" },
        { id: "i6", text: "Invalid syntax" },
        { id: "i7", text: "bool and string" },
        { id: "i8", text: "string" }
      ],
      dropZones: [
        { id: "z1", label: "Data types stored in the rooms dictionary (keys and values)", correctItemId: "i3" },
        { id: "z2", label: "Data type of the variable room", correctItemId: "i8" },
        { id: "z3", label: "Why a valid room number such as 1 is not found on line 03", correctItemId: "i2" }
      ],
      explanation: "Cheile sunt int, valorile str. input() întoarce str, iar '1' nu este același lucru cu 1, deci testul \"in\" nu găsește cheia: tipuri de date nepotrivite."
    },
    {
      id: "py-142",
      chapter: "structuri-date",
      type: "drag_drop",
      question: "Select the output of each print statement.",
      code: "a = 'Config1'\nprint(a)        # (1)\nb = a\na += 'Config2'\nprint(a)        # (2)\nprint(b)        # (3)",
      dragItems: [
        { id: "i1", text: "Config1" },
        { id: "i2", text: "Config2" },
        { id: "i3", text: "Config1Config2" }
      ],
      dropZones: [
        { id: "z1", label: "Output of print (1)", correctItemId: "i1" },
        { id: "z2", label: "Output of print (2)", correctItemId: "i3" },
        { id: "z3", label: "Output of print (3)", correctItemId: "i1" }
      ],
      explanation: "Șirurile sunt imutabile: a += 'Config2' creează un șir nou pentru a, iar b rămâne legat de 'Config1'."
    },
    {
      id: "py-143",
      chapter: "input-output",
      type: "single",
      question: "What data type does input() return?",
      code: "age = input(\"Age: \")",
      options: ["int","float","str","bool"],
      correct: 2,
      explanation: "input() întoarce mereu un șir (str), chiar dacă utilizatorul tastează cifre."
    },
    {
      id: "py-144",
      chapter: "input-output",
      type: "single",
      question: "Which line correctly reads an integer age?",
      options: ["age = input(\"Age: \")","age = int(input(\"Age: \"))","age = str(input(\"Age: \"))","int = input(\"Age: \")"],
      correct: 1,
      explanation: "input() citește text, iar int() îl convertește într-un număr întreg."
    },
    {
      id: "py-145",
      chapter: "input-output",
      type: "single",
      question: "A script asks the user for a value that must be used as a whole number in a calculation, even if the user enters a decimal value (for example 4.7). Which statement should you use?",
      options: ["totalItems = input(\"How many items would you like?\")","totalItems = float(input(\"How many items would you like?\"))","totalItems = int(input(\"How many items would you like?\"))","totalItems = int(float(input(\"How many items would you like?\")))"],
      correct: 3,
      explanation: "int(\"4.7\") dă ValueError. float() acceptă și text zecimal, iar int() apoi elimină partea zecimală: int(float(input(...)))."
    },
    {
      id: "py-146",
      chapter: "input-output",
      type: "single",
      question: "Which code should be written at Line-1 to print the sum of the two numbers entered by the user?",
      code: "x = input('Enter First Number:')\ny = input('Enter Second Number:')\n# Line-1",
      options: ["print('The Result:' + (int(x) + int(y)))","print('The Result:' + (int(x + y)))","print('The Result:' + str(int(x) + int(y)))","print('The Result:' + str(int(x + y)))"],
      correct: 2,
      explanation: "input() întoarce str. Fiecare valoare se convertește la int pentru adunare, iar suma se convertește la str pentru concatenare cu textul."
    },
    {
      id: "py-147",
      chapter: "input-output",
      type: "single",
      question: "Which code inserted at Line-1 prints 20 to the console if the user enters 15?",
      code: "count = input('Enter the number of customers of the bank:')\n# Line-1\nprint(output)",
      options: ["output = int(count) + 5","output = count + 5","output = str(count) + 5","output = float(count) + 5"],
      correct: 0,
      explanation: "count este un str ('15'); int(count) + 5 = 20. float(count) + 5 ar da 20.0."
    },
    {
      id: "py-148",
      chapter: "input-output",
      type: "single",
      question: "Which code should you write at line 02?",
      code: "print('What is your name?')\n# line 02\nprint(name)",
      options: ["name = input","input(name)","name = input()","input(\"name\")"],
      correct: 2,
      explanation: "name = input() citește valoarea și o memorează în variabila name, folosită apoi de print."
    },
    {
      id: "py-149",
      chapter: "input-output",
      type: "single",
      question: "The program must calculate and print the number of years of service. Which code should you use at line 03?",
      code: "start = input(\"How old were you on your start date?\")\nend = input(\"How old are you today?\")\n# line 03",
      options: ["print(\"congratulations on \" + int(end - start) + \" years of service!\")","print(\"congratulations on \" + (int(end) - int(start)) + \" years of service!\")","print(\"congratulations on \" + str(end - start) + \" years of service!\")","print(\"congratulations on \" + str(int(end) - int(start)) + \" years of service!\")"],
      correct: 3,
      explanation: "Valorile sunt str: se convertesc la int pentru scădere, apoi rezultatul la str pentru concatenare."
    },
    {
      id: "py-150",
      chapter: "input-output",
      type: "multiple",
      question: "A script reads an item name and a quantity and must print them in a comma-delimited format: strings enclosed in double quotes, numbers not enclosed in quotes, items separated by a comma. Which TWO code segments meet the requirements? (Choose 2.)",
      code: "item = input('Enter the item name: ')\nsales = input('Enter the quantity: ')",
      options: ["print('\"{0}\",{1}'.format(item, sales))","print(item + ',' + sales)","print('\"' + item + '\",' + sales)","print(\"{0},{1}\".format(item, sales))"],
      correct: [0,2],
      explanation: "Variantele 1 și 3 pun numele între ghilimele duble și lasă cantitatea fără ghilimele. Variantele 2 și 4 nu pun ghilimele în jurul șirului."
    },
    {
      id: "py-151",
      chapter: "input-output",
      type: "drag_drop",
      question: "Select the data type of each variable.",
      code: "age = input('Enter your age: ')\nyear = input('Enter the four digit year: ')\nborn = eval(year) - eval(age)\nmessage = 'You were born in ' + str(born)\nprint(message)",
      dragItems: [
        { id: "i1", text: "bool" },
        { id: "i2", text: "str" },
        { id: "i3", text: "float" },
        { id: "i4", text: "int" }
      ],
      dropZones: [
        { id: "z1", label: "age", correctItemId: "i2" },
        { id: "z2", label: "born", correctItemId: "i4" },
        { id: "z3", label: "message", correctItemId: "i2" }
      ],
      explanation: "input() întoarce str; eval() transformă șirurile numerice în numere, deci born este int; concatenarea cu str(born) produce str."
    },
    {
      id: "py-152",
      chapter: "input-output",
      type: "single",
      question: "Which print() statement should be placed at Line-1 to display the average rating rounded to two decimal places?",
      code: "sum = count = done = 0\naverage = 0.0\nwhile done != -1:\n    rating = float(input('Enter Next Rating(1-5), -1 for done'))\n    if rating == -1:\n        break\n    sum += rating\n    count += 1\n    average = float(sum / count)\n# Line-1",
      options: ["print('The average star rating for the new coffee is: {:.2f}'.format(average))","print('The average star rating for the new coffee is: {:.2d}'.format(average))","print('The average star rating for the new coffee is: {:2f}'.format(average))","print('The average star rating for the new coffee is: {:2.2d}'.format(average))"],
      correct: 0,
      explanation: "{:.2f} rotunjește la 2 zecimale. {:.2d} și {:2.2d} sunt invalide pentru float (d = întreg), iar {:2f} setează doar lățimea."
    },
    {
      id: "py-153",
      chapter: "input-output",
      type: "single",
      question: "What is the output?",
      code: "import datetime\nd = datetime.datetime(2017, 4, 7)\nprint('{:%B-%d-%y}'.format(d))\n\nnum = 1234567.890\nprint('{:,.4f}'.format(num))",
      options: ["2017-April-07\n1,234,567.890","Apr-07-2017\n1,234,567,8900","April-07-17\n1,234,567.8900","April-07-17\n1234567.89"],
      correct: 2,
      explanation: "%B = numele complet al lunii, %d = ziua, %y = anul pe 2 cifre → April-07-17. {:,.4f} pune separator de mii și 4 zecimale → 1,234,567.8900."
    },
    {
      id: "py-154",
      chapter: "input-output",
      type: "single",
      question: "What is the output?",
      code: "x = \"ITVEDANT\"\nprint(\"%20s\", x)",
      options: ["ITVEDANT, preceded by 12 spaces","ITVEDANT, followed by 12 spaces","%20s ITVEDANT","SyntaxError"],
      correct: 2,
      explanation: "Lipsește operatorul %: print primește două argumente separate, deci afișează literal \"%20s\" urmat de ITVEDANT. Pentru aliniere ar fi fost print(\"%20s\" % x)."
    },
    {
      id: "py-155",
      chapter: "input-output",
      type: "single",
      question: "What is the output?",
      code: "d = '{a}{b}{a}'.format(a='hello', b='world')\nprint(d)",
      options: ["hello world","hello world hello","helloworldhello","hello hello world"],
      correct: 2,
      explanation: "Șablonul înlocuiește {a}→hello, {b}→world, {a}→hello, fără spații între ele."
    },
    {
      id: "py-156",
      chapter: "input-output",
      type: "single",
      question: "Which of the following statements about number formatting are true?",
      code: "1. \"V:{:.2f}\".format(123.45678)   prints V:123.46\n2. \"V:{:.2f}\".format(123.4)       prints V:123.40\n3. \"V:{:8.2f}\".format(1.45678)    prints V:    1.46\n4. \"V:{:08.2f}\".format(1.45678)   prints V:00001.46",
      options: ["Only 1 and 2","Only 1 and 3","Only 2 and 4","1, 2, 3 and 4"],
      correct: 3,
      explanation: "Toate sunt corecte: .2f rotunjește la 2 zecimale; 8.2f aliniază pe 8 caractere cu spații; 08.2f completează cu zerouri."
    },
    {
      id: "py-157",
      chapter: "input-output",
      type: "single",
      question: "Which f-string prints the value of items?",
      options: ["f\"We have {items} items.\"","\"We have {items} items.\"","f\"We have (items) items.\"","\"We have \" + items + \" items.\""],
      correct: 0,
      explanation: "Într-un f-string, expresiile se pun între acolade."
    },
    {
      id: "py-158",
      chapter: "input-output",
      type: "single",
      question: "Which format specification right-aligns a value in a field 6 characters wide?",
      options: ["{:6<}","{:>6}","{:<6}","{:^6}"],
      correct: 1,
      explanation: "> înseamnă aliniere la dreapta, iar 6 este lățimea câmpului."
    },
    {
      id: "py-159",
      chapter: "input-output",
      type: "single",
      question: "To generate the most precise result, which functions should replace xxx and yyy?",
      code: "distance = xxx(input('Enter the distance travelled in feet:'))   # Line-1\ndistance_miles = distance / 5280\ntime = yyy(input('Enter the time elapsed in seconds:'))         # Line-2\ntime_hours = time / 3600\nvelocity = distance_miles / time_hours\nprint('The average velocity:', velocity, 'miles/hour')",
      options: ["xxx = float and yyy = float","xxx = float and yyy = int","xxx = int and yyy = float","xxx = int and yyy = int"],
      correct: 0,
      explanation: "Distanța și timpul pot avea zecimale; float păstrează precizia, int ar pierde partea zecimală."
    },
    {
      id: "py-160",
      chapter: "input-output",
      type: "single",
      question: "You need to read and write data to a text file. If the file does not exist it must be created. If the file has content, the content must be removed. Which code should you use?",
      options: ["open(\"local_data\", \"r+\")","open(\"local_data\", \"w+\")","open(\"local_data\", \"r\")","open(\"local_data\", \"w\")"],
      correct: 1,
      explanation: "\"w+\" creează fișierul dacă nu există, îi golește conținutul și permite citire și scriere. \"w\" nu permite citirea."
    },
    {
      id: "py-161",
      chapter: "input-output",
      type: "single",
      question: "Which of the following statements are true?",
      options: ["When you open a file for reading, if the file does not exist, an error occurs","When you open a file for writing, if the file does not exist, a new file is created","When you open a file for writing, if the file exists, the existing file is overwritten","All of the above"],
      correct: 3,
      explanation: "Toate afirmațiile sunt adevărate."
    },
    {
      id: "py-162",
      chapter: "input-output",
      type: "single",
      question: "To read the entire remaining contents of the file as a string from a file object infile, we use:",
      options: ["infile.read(2)","infile.read()","infile.readline()","infile.readlines()"],
      correct: 1,
      explanation: "read() fără argument întoarce tot conținutul rămas, ca un singur șir."
    },
    {
      id: "py-163",
      chapter: "input-output",
      type: "single",
      question: "What is the use of the tell() method of a file object?",
      options: ["It tells you the current position within the file","It tells you the end position within the file","It tells you whether the file is open or not","None of the above"],
      correct: 0,
      explanation: "tell() întoarce poziția curentă a cursorului în fișier."
    },
    {
      id: "py-164",
      chapter: "input-output",
      type: "single",
      question: "What is the result? The file abc.txt contains these four lines:\nDurga:10\nRavi:20\nShiva:30\nPavan:40",
      code: "values = 0\ntry:\n    f = open('abc.txt', 'r')\n    content = f.readlines()\n    for line in content:\n        values += float(line.split(':')[1])\n    f.close()\nexcept Exception:\n    print('Unable to open the file')\nprint(values)",
      options: ["Unable to open the file","100","100.0","10.0"],
      correct: 2,
      explanation: "Fișierul există. La fiecare pas se adaugă un float (float('10\\n') = 10.0), deci suma este 100.0."
    },
    {
      id: "py-165",
      chapter: "input-output",
      type: "single",
      question: "The program must open voters_list.txt, add new voter information and print all the data to the console. Which line should be inserted at Line-1?",
      code: "with open('voters_list.txt', 'a+') as f:\n    f.write('New voters info')\n    # Line-1\n    data = f.read()\n    print(data)",
      options: ["f.seek(0)","f.flush()","f.begin()","f.close()"],
      correct: 0,
      explanation: "După scriere cursorul este la finalul fișierului; f.seek(0) îl mută la început, ca read() să citească tot conținutul."
    },
    {
      id: "py-166",
      chapter: "input-output",
      type: "multiple",
      question: "Which TWO statements are valid about this code? (Choose 2.)",
      code: "import os\ndef get_data(filename, mode):\n    if os.path.isfile(filename):\n        with open(filename, 'r') as file:\n            return file.readline()\n    else:\n        return None",
      options: ["The function returns the first line of the file if it is available","The function returns None if the file does not exist","The function returns all the data present in the file","The function returns the last line of the file"],
      correct: [0,1],
      explanation: "Funcția verifică existența fișierului, întoarce prima linie cu readline() sau None dacă fișierul nu există."
    },
    {
      id: "py-167",
      chapter: "input-output",
      type: "single",
      question: "The code must read the entire contents of abc.txt and print it to the console. Which code should be inserted at Line-1?",
      code: "try:\n    f = open('abc.txt', 'r')\n    # Line-1\nexcept:\n    print('Unable to open the file')\nprint(data)",
      options: ["data = f.readlines()","data = f.readline()","data = f.read()","data = f.load()"],
      correct: 2,
      explanation: "read() citește tot conținutul ca un singur șir. readlines() întoarce o listă, readline() o singură linie, iar load() nu există."
    },
    {
      id: "py-168",
      chapter: "input-output",
      type: "drag_drop",
      question: "Arrange the lines to open a file for reading, read all of its contents and print them.",
      dragItems: [
        { id: "i1", text: "shirtFile = open(\"shirts.txt\", \"r\")" },
        { id: "i2", text: "print(shirtFileContents)" },
        { id: "i3", text: "shirtFileContents = shirtFile.read()" }
      ],
      dropZones: [
        { id: "z1", label: "Linia 1", correctItemId: "i1" },
        { id: "z2", label: "Linia 2", correctItemId: "i3" },
        { id: "z3", label: "Linia 3", correctItemId: "i2" }
      ],
      explanation: "Întâi se deschide fișierul (mod r), apoi se citește cu read(), apoi se afișează."
    },
    {
      id: "py-169",
      chapter: "input-output",
      type: "multiple",
      question: "With open('log.txt', 'w') as file, which TWO statements are true? (Choose 2.)",
      options: ["Existing content is overwritten.","Text is automatically appended.","file.close() is not required.","The file must already exist."],
      correct: [0,2],
      explanation: "Modul w suprascrie conținutul, iar blocul with închide automat fișierul."
    },
    {
      id: "py-170",
      chapter: "input-output",
      type: "drag_drop",
      question: "Complete the file modes and the newline escape sequence.",
      code: "if os.path.isfile(\"results.txt\"):\n    writeFile = open(\"results.txt\", \"[1]\")\nelse:\n    writeFile = open(\"results.txt\", \"[2]\")\nwriteFile.write(\"[3]\" + toResults)",
      dragItems: [
        { id: "i1", text: "w" },
        { id: "i2", text: "\\n" },
        { id: "i3", text: "\\t" },
        { id: "i4", text: "r" },
        { id: "i5", text: "a" }
      ],
      dropZones: [
        { id: "z1", label: "Blank [1]", correctItemId: "i5" },
        { id: "z2", label: "Blank [2]", correctItemId: "i1" },
        { id: "z3", label: "Blank [3]", correctItemId: "i2" }
      ],
      explanation: "a adaugă la sfârșit (fișier existent), w creează fișierul, iar \\n începe o linie nouă."
    },
    {
      id: "py-171",
      chapter: "input-output",
      type: "multiple",
      question: "Which TWO expressions are used to check that config.txt exists and then read only its first line? (Choose 2.)",
      options: ["os.path.isfile(\"config.txt\")","file.readline()","file.read()","os.remove(\"config.txt\")"],
      correct: [0,1],
      explanation: "os.path.isfile verifică existența fișierului, iar readline() citește o singură linie. read() citește tot, iar os.remove() șterge fișierul."
    },
    {
      id: "py-172",
      chapter: "input-output",
      type: "single",
      question: "Which expression checks whether results.txt is a file?",
      options: ["os.path.isfile(\"results.txt\")","os.file.exists(\"results.txt\")","io.isfile(\"results.txt\")","file.exists(\"results.txt\")"],
      correct: 0,
      explanation: "os.path.isfile(cale) verifică dacă există și este fișier."
    },
    {
      id: "py-173",
      chapter: "input-output",
      type: "single",
      question: "Which function deletes a file?",
      options: ["os.delete()","os.remove()","file.remove()","io.delete()"],
      correct: 1,
      explanation: "os.remove(cale) șterge fișierul indicat."
    },
    {
      id: "py-174",
      chapter: "input-output",
      type: "single",
      question: "Which file mode appends new content without deleting the existing content?",
      options: ["r","w","a","x"],
      correct: 2,
      explanation: "a = append."
    },
    {
      id: "py-175",
      chapter: "input-output",
      type: "single",
      question: "Which file mode is used for reading?",
      options: ["r","w","a","n"],
      correct: 0,
      explanation: "r = read."
    },
    {
      id: "py-176",
      chapter: "input-output",
      type: "single",
      question: "What type does file.read() normally return for a text file?",
      options: ["list","tuple","str","int"],
      correct: 2,
      explanation: "read() întoarce conținutul ca str."
    },
    {
      id: "py-177",
      chapter: "input-output",
      type: "single",
      question: "What does file.readlines() return for a text file?",
      options: ["A single string","A list of lines","An integer","A Boolean"],
      correct: 1,
      explanation: "readlines() întoarce o listă de șiruri, câte unul pentru fiecare linie."
    },
    {
      id: "py-178",
      chapter: "input-output",
      type: "single",
      question: "Which statement closes the file automatically when the block ends?",
      options: ["with open(\"data.txt\", \"r\") as f:","f = open(\"data.txt\", \"r\")","open(\"data.txt\")","file(\"data.txt\")"],
      correct: 0,
      explanation: "Blocul with se ocupă automat de închiderea fișierului."
    },
    {
      id: "py-179",
      chapter: "input-output",
      type: "single",
      question: "What does readline() return when the end of a text file is reached?",
      options: ["'\\n'","''","None","False"],
      correct: 1,
      explanation: "Pentru o linie goală din fișier se citește '\\n'; la sfârșitul fișierului readline() întoarce șirul gol ''."
    },
    {
      id: "py-180",
      chapter: "input-output",
      type: "drag_drop",
      question: "Complete the code so that blank lines are ignored and the end of the file is detected.",
      code: "inventory = open(\"inventory.txt\", \"r\")\neof = False\nwhile eof == False:\n    line = inventory.readline()\n    [1]\n        if [2]\n            print(line)\n        else:\n            print(\"End of file\")\n            eof = True\n            inventory.close()",
      dragItems: [
        { id: "i1", text: "line is None:" },
        { id: "i2", text: "if line != '\\n':" },
        { id: "i3", text: "line != '':" },
        { id: "i4", text: "if line == '\\n':" },
        { id: "i5", text: "line == '':" }
      ],
      dropZones: [
        { id: "z1", label: "Blank [1]", correctItemId: "i2" },
        { id: "z2", label: "Blank [2]", correctItemId: "i3" }
      ],
      explanation: "readline() întoarce '\\n' pentru o linie goală și '' la sfârșitul fișierului. Prima condiție ignoră liniile goale, a doua distinge o linie reală de sfârșitul fișierului."
    },
    {
      id: "py-181",
      chapter: "functii",
      type: "single",
      question: "What is displayed when the code below runs?",
      code: "def saluta(nume=\"lume\"):\n    return \"Salut, \" + nume\n\nprint(saluta())",
      options: ["Salut, nume","Salut, lume","Error","None"],
      correct: 1,
      explanation: "Parametrul nume are valoarea implicită \"lume\", folosită când funcția este apelată fără argumente."
    },
    {
      id: "py-182",
      chapter: "functii",
      type: "single",
      question: "For which of the following function calls will we get an error?",
      code: "def get_score(total=0, valid=0):\n    result = int(valid) / int(total)\n    return result",
      options: ["score = get_score('40', '4')","score = get_score(0, 10)","score = get_score(40, 4)","score = get_score(40)"],
      correct: 1,
      explanation: "get_score(0, 10) înseamnă total=0, valid=10 → împărțire la 0 (ZeroDivisionError). get_score(40) are valid=0 → 0/40 = 0.0."
    },
    {
      id: "py-183",
      chapter: "functii",
      type: "single",
      question: "What is the result?",
      code: "def get_names():\n    names = ['Sunny', 'Bunny', 'Chinny', 'Vinny', 'Pinny']\n    return names[2:]\n\ndef update_names(elements):\n    new_names = []\n    for name in elements:\n        new_names.append(name[:3].upper())\n    return new_names\n\nprint(update_names(get_names()))",
      options: ["['CHI', 'VIN', 'PIN']","['VIN', 'PIN']","['CH', 'VI', 'PI']","['SU', 'BU']"],
      correct: 0,
      explanation: "get_names() întoarce ['Chinny', 'Vinny', 'Pinny']; se iau primele 3 litere cu majuscule: ['CHI', 'VIN', 'PIN']."
    },
    {
      id: "py-184",
      chapter: "functii",
      type: "single",
      question: "The code must print ['chicken', 'mutton', 'fish']. With what should the parameter list x of my_list be replaced?",
      code: "def my_list(x):\n    lst.append(a)\n    return lst\n\nmy_list('chicken')\nmy_list('mutton')\nprint(my_list('fish'))",
      options: ["a, lst=[]","a, lst=()","a, lst={}","a, lst=None"],
      correct: 0,
      explanation: "Valoarea implicită lst=[] se creează o singură dată, la definirea funcției, deci lista păstrează elementele între apeluri. Un tuple, un dict sau None nu au metoda append."
    },
    {
      id: "py-185",
      chapter: "functii",
      type: "multiple",
      question: "Which TWO of the following calls are valid (run without an error)? (Choose 2.)",
      code: "def f1(x=0, y=0):\n    return x + y",
      options: ["f1()","f1('10', '20')","f1(10, '20')","f1('10')"],
      correct: [0,1],
      explanation: "f1() → 0+0; f1('10','20') → '1020'. f1(10,'20') și f1('10') adună int cu str → TypeError."
    },
    {
      id: "py-186",
      chapter: "functii",
      type: "multiple",
      question: "Which TWO of the following calls are valid (run without an error)? (Choose 2.)",
      code: "def f1(x=0, y=0):\n    return x * y",
      options: ["f1()","f1('10', '20')","f1(10)","f1('10', '5')"],
      correct: [0,2],
      explanation: "f1() → 0; f1(10) → 10*0 = 0. Înmulțirea str * str ('10' * '20', '10' * '5') provoacă TypeError."
    },
    {
      id: "py-187",
      chapter: "functii",
      type: "single",
      question: "If the user enters 'a', what is the result?",
      code: "def count_letter(letter, word_list):\n    count = 0\n    for word in word_list:\n        if letter in word:\n            count += 1\n    return count\n\nword_list = ['apple', 'pears', 'orange', 'mango']\nletter = input('Enter some alphabet symbol:')\nletter_count = count_letter(letter, word_list)\nprint(letter_count)",
      options: ["1","2","3","4"],
      correct: 3,
      explanation: "Toate cele 4 cuvinte conțin litera 'a', deci count = 4."
    },
    {
      id: "py-188",
      chapter: "functii",
      type: "drag_drop",
      question: "Select the function definitions for line 01 and line 04.",
      code: "01 [Line 01]\n02     name = input('What is your name? ')\n03     return name\n04 [Line 04]\n05     calories = miles * calories_per_mile\n06     return calories\n07 distance = int(input('How many miles did you bike this week? '))\n08 burn_rate = 50\n09 biker = get_name()\n10 calories_burned = calc_calories(distance, burn_rate)\n11 print(biker, ', you burned about', calories_burned, 'calories.')",
      dragItems: [
        { id: "i1", text: "def calc_calories(miles, calories_per_mile):" },
        { id: "i2", text: "def get_name():" },
        { id: "i3", text: "def calc_calories():" },
        { id: "i4", text: "def get_name(name):" },
        { id: "i5", text: "def get_name(biker):" },
        { id: "i6", text: "def calc_calories(miles, burn_rate):" }
      ],
      dropZones: [
        { id: "z1", label: "Line 01", correctItemId: "i2" },
        { id: "z2", label: "Line 04", correctItemId: "i1" }
      ],
      explanation: "get_name() se apelează fără argumente. calc_calories primește două argumente, iar parametrii trebuie să se numească exact ca variabilele folosite în corp (miles, calories_per_mile)."
    },
    {
      id: "py-189",
      chapter: "functii",
      type: "single",
      question: "Which definition gives height a default value of 12?",
      options: ["def area(width, height):","def area(width, height=12):","def area(width=height, 12):","def area(width; height=12):"],
      correct: 1,
      explanation: "Valoarea implicită se scrie în antet: parametru=valoare."
    },
    {
      id: "py-190",
      chapter: "functii",
      type: "single",
      question: "What happens when the function is called?",
      code: "def f(amount, shipping):\n    if shipping == 0:\n        pass\n    else:\n        subtotal = amount + shipping\n    return subtotal\n\nf(500, 0)",
      options: ["Returns 500","Returns 0","Returns None","A runtime error is raised"],
      correct: 3,
      explanation: "Pe ramura shipping == 0 se execută pass, deci subtotal nu este creat; return subtotal produce UnboundLocalError."
    },
    {
      id: "py-191",
      chapter: "functii",
      type: "single",
      question: "Which function definition matches the call area(5, 10)?",
      options: ["def area(x, y):","def area(x, y, z):","def calculate_area(x):","area def(x, y):"],
      correct: 0,
      explanation: "Apelul transmite două argumente, deci funcția are nevoie de doi parametri."
    },
    {
      id: "py-192",
      chapter: "functii",
      type: "drag_drop",
      question: "Arrange the function that calculates and returns a subtotal.",
      dragItems: [
        { id: "i1", text: "    subtotal = amount * (1 + salesTaxRate)" },
        { id: "i2", text: "    return subtotal" },
        { id: "i3", text: "def calcSubtotal(amount, salesTaxRate):" }
      ],
      dropZones: [
        { id: "z1", label: "Linia 1", correctItemId: "i3" },
        { id: "z2", label: "Linia 2", correctItemId: "i1" },
        { id: "z3", label: "Linia 3", correctItemId: "i2" }
      ],
      explanation: "def definește funcția, apoi se calculează variabila locală și se returnează."
    },
    {
      id: "py-193",
      chapter: "functii",
      type: "single",
      question: "Which line correctly calls subtotal and stores the returned value in order_total?",
      options: ["order_total(subtotal(500, .07))","order_total = call subtotal(500, .07)","order_total = subtotal(500, .07)","order_total = def subtotal(500, .07)"],
      correct: 2,
      explanation: "O funcție se apelează cu nume(argumente), iar rezultatul poate fi atribuit unei variabile."
    },
    {
      id: "py-194",
      chapter: "functii",
      type: "drag_drop",
      question: "Complete the function definition and the return statement.",
      code: "[1] calcSubtotal[2]\n    subtotal = amount * (1 + salesTaxRate)\n    [3]",
      dragItems: [
        { id: "i1", text: "def" },
        { id: "i2", text: "(amount, salesTaxRate):" },
        { id: "i3", text: "return subtotal" },
        { id: "i4", text: "print subtotal" },
        { id: "i5", text: "[amount, salesTaxRate]:" },
        { id: "i6", text: "function" }
      ],
      dropZones: [
        { id: "z1", label: "Blank [1]", correctItemId: "i1" },
        { id: "z2", label: "Blank [2]", correctItemId: "i2" },
        { id: "z3", label: "Blank [3]", correctItemId: "i3" }
      ],
      explanation: "Se folosește def, parametrii se scriu între paranteze rotunde urmați de :, iar return trimite valoarea înapoi."
    },
    {
      id: "py-195",
      chapter: "functii",
      type: "single",
      question: "What is printed?",
      code: "def double(x):\n    return x * 2\n\nprint(double(5))",
      options: ["5","10","None","NameError"],
      correct: 1,
      explanation: "Parametrul x primește 5, iar funcția returnează 10."
    },
    {
      id: "py-196",
      chapter: "functii",
      type: "single",
      question: "What does a Python function return if it reaches its end without a return statement?",
      options: ["0","False","None","An error"],
      correct: 2,
      explanation: "Fără return explicit, funcția întoarce None."
    },
    {
      id: "py-197",
      chapter: "functii",
      type: "single",
      question: "What is printed?",
      code: "def greet():\n    print(\"Hello\")\n\ngreet()",
      options: ["Hello","None","0","Error"],
      correct: 0,
      explanation: "Funcția execută print chiar dacă nu are return."
    },
    {
      id: "py-198",
      chapter: "functii",
      type: "single",
      question: "What is printed?",
      code: "def f(x):\n    return x\n    return x * 3\n\nprint(f(5))",
      options: ["5","10","15","Nothing"],
      correct: 0,
      explanation: "return încheie imediat funcția; linia return x*3 nu se mai execută."
    },
    {
      id: "py-199",
      chapter: "functii",
      type: "single",
      question: "Which call uses keyword arguments?",
      options: ["area(5, 10)","area(width=5, height=10)","area[5, 10]","area(width:5, height:10)"],
      correct: 1,
      explanation: "Argumentele cu nume se scriu parametru=valoare."
    },
    {
      id: "py-200",
      chapter: "functii",
      type: "true_false",
      question: "Parameters are named in the function definition.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Parametrii apar în definiție, iar argumentele la apel."
    },
    {
      id: "py-201",
      chapter: "functii",
      type: "true_false",
      question: "Arguments are values supplied when calling the function.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Argumentele sunt valorile transmise la apel."
    },
    {
      id: "py-202",
      chapter: "functii",
      type: "true_false",
      question: "A function can never return a string.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "O funcție poate returna orice tip de valoare, inclusiv str."
    },
    {
      id: "py-203",
      chapter: "functii",
      type: "single",
      question: "What error occurs?",
      code: "def make_value():\n    local_value = 10\n\nmake_value()\nprint(local_value)",
      options: ["No error","NameError","SyntaxError","ZeroDivisionError"],
      correct: 1,
      explanation: "local_value există doar în interiorul funcției; în afara ei numele nu este definit."
    },
    {
      id: "py-204",
      chapter: "functii",
      type: "single",
      question: "Which statement allows a function to change the global variable x?",
      options: ["global x","public x","extern x","nonlocal x"],
      correct: 0,
      explanation: "Cuvântul cheie global declară că numele se referă la variabila globală."
    },
    {
      id: "py-205",
      chapter: "functii",
      type: "single",
      question: "What is a variable defined outside of any function referred to as?",
      options: ["A static variable","A global variable","A local variable","An automatic variable"],
      correct: 1,
      explanation: "O variabilă definită în afara funcțiilor este globală."
    },
    {
      id: "py-206",
      chapter: "functii",
      type: "single",
      question: "What is the output?",
      code: "a = 10\nb = 20\n\ndef change():\n    global b\n    a = 45\n    b = 56\n\nchange()\nprint(a)\nprint(b)",
      options: ["10, 56","45, 56","10, 20","SyntaxError"],
      correct: 0,
      explanation: "a = 45 creează o variabilă locală (a global rămâne 10); global b face ca b = 56 să modifice variabila globală."
    },
    {
      id: "py-207",
      chapter: "functii",
      type: "single",
      question: "What is the output?",
      code: "def change(i=1, j=2):\n    i = i + j\n    j = j + 1\n    print(i, j)\n\nchange(j=1, i=2)",
      options: ["An exception is thrown because of conflicting values","1 2","3 3","3 2"],
      correct: 3,
      explanation: "Apel: i = 2, j = 1. i = 2 + 1 = 3; j = 1 + 1 = 2 → se afișează \"3 2\"."
    },
    {
      id: "py-208",
      chapter: "functii",
      type: "single",
      question: "What is the output?",
      code: "f = lambda x: bool(x % 2)\nprint(f(20), f(21))",
      options: ["False True","False False","True True","True False"],
      correct: 0,
      explanation: "f(20): 20%2 = 0 → False; f(21): 21%2 = 1 → True."
    },
    {
      id: "py-209",
      chapter: "functii",
      type: "drag_drop",
      question: "Arrange the complete function so that it returns the first line of a file if the file exists and None otherwise.",
      dragItems: [
        { id: "i1", text: "        return None" },
        { id: "i2", text: "def get_first_line(filename):" },
        { id: "i3", text: "    else:" },
        { id: "i4", text: "        with open(filename, 'r') as file:" },
        { id: "i5", text: "            return file.readline()" },
        { id: "i6", text: "    if os.path.isfile(filename):" }
      ],
      dropZones: [
        { id: "z1", label: "Linia 1", correctItemId: "i2" },
        { id: "z2", label: "Linia 2", correctItemId: "i6" },
        { id: "z3", label: "Linia 3", correctItemId: "i4" },
        { id: "z4", label: "Linia 4", correctItemId: "i5" },
        { id: "z5", label: "Linia 5", correctItemId: "i3" },
        { id: "z6", label: "Linia 6", correctItemId: "i1" }
      ],
      explanation: "Se definește funcția, se verifică existența fișierului, se deschide în modul r și se returnează readline(); altfel se returnează None."
    },
    {
      id: "py-210",
      chapter: "module-librarii",
      type: "true_false",
      question: "The statement \"import math\" makes all the functions of the math module available without the \"math.\" prefix.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "După \"import math\" funcțiile se apelează cu prefix: math.sqrt(9). Fără prefix ar trebui \"from math import *\"."
    },
    {
      id: "py-211",
      chapter: "module-librarii",
      type: "single",
      question: "You are writing an application that uses the sqrt function. The program must reference the function using the name squareRoot. Which code segment should you use?",
      options: ["from math import sqrt as squareRoot","from math.sqrt as squareRoot","import math.sqrt as squareRoot","import sqrt from math as squareRoot"],
      correct: 0,
      explanation: "Sintaxa corectă este: from modul import funcție as alias."
    },
    {
      id: "py-212",
      chapter: "module-librarii",
      type: "single",
      question: "You are writing an application that uses the pow() function. The program must reference the function using the name power. Which code segment should you use?",
      options: ["import math.pow as power","import pow from math as power","from math import pow as power","from math.pow as power"],
      correct: 2,
      explanation: "from math import pow as power importă funcția sub un alt nume."
    },
    {
      id: "py-213",
      chapter: "module-librarii",
      type: "single",
      question: "A function that reads a data file raises an error on line 03 when it runs. What is causing the error?",
      code: "01 def read_file(file):\n02     line = None\n03     if os.path.isfile(file):\n04         data = open(file, 'r')\n05         for line in data:\n06             print(line)",
      options: ["The path method does not exist in the os object.","The isfile method does not exist in the path object.","You need to import the os library.","The isfile method does not accept one parameter."],
      correct: 2,
      explanation: "Codul folosește os.path.isfile, dar lipsește \"import os\" (NameError)."
    },
    {
      id: "py-214",
      chapter: "module-librarii",
      type: "single",
      question: "What is the type of sys.argv?",
      options: ["set","list","tuple","string"],
      correct: 1,
      explanation: "sys.argv este o listă de șiruri cu argumentele din linia de comandă."
    },
    {
      id: "py-215",
      chapter: "module-librarii",
      type: "single",
      question: "From the sys module, which variable gives access to the command line arguments?",
      options: ["argv","argsv","args","arguments"],
      correct: 0,
      explanation: "sys.argv conține argumentele din linia de comandă."
    },
    {
      id: "py-216",
      chapter: "module-librarii",
      type: "single",
      question: "What is the value of __name__ when a Python file is run directly?",
      options: ["\"__main__\"","\"main\"","\"__file__\"","None"],
      correct: 0,
      explanation: "Când un fișier este rulat direct, __name__ este \"__main__\"; când este importat, __name__ este numele modulului."
    },
    {
      id: "py-217",
      chapter: "module-librarii",
      type: "single",
      question: "Given the command invocation \"python tests.py Itvedant\", which code prints 'Itvedant' to the console?",
      options: ["from sys import argv; print(argv[1])","from sys import argv; print(argv[0])","from sys import args; print(args[0])","from sys import args; print(args[1])"],
      correct: 0,
      explanation: "argv[0] este numele scriptului, argv[1] este primul argument: 'Itvedant'. Variabila args nu există în sys."
    },
    {
      id: "py-218",
      chapter: "module-librarii",
      type: "single",
      question: "What is the result? (Command: py test.py DURGASOFT)",
      code: "from sys import argv\nprint(argv[0])",
      options: ["DURGASOFT","test.py","IndexError is thrown at runtime","ImportError is thrown at runtime"],
      correct: 1,
      explanation: "argv[0] este întotdeauna numele scriptului: test.py."
    },
    {
      id: "py-219",
      chapter: "module-librarii",
      type: "single",
      question: "What is the result? (Command: py test.py 10 20)",
      code: "from sys import argv\nprint(argv[1] + argv[2])",
      options: ["30","1020","IndexError is thrown at runtime","ImportError is thrown at runtime"],
      correct: 1,
      explanation: "argv[1] și argv[2] sunt șiruri ('10' și '20'); + le concatenează: '1020'."
    },
    {
      id: "py-220",
      chapter: "module-librarii",
      type: "single",
      question: "Which command invocation generates the output \"The Average for Durga is 20.00\"?",
      code: "from sys import argv\nsum = 0\nfor i in range(2, len(argv)):\n    sum += float(argv[i])\nprint(\"The Average for {0} is {1:.2f}\".format(argv[1], sum / (len(argv) - 2)))",
      options: ["py test.py Durga 10 20 30","py test.py Durga 10 20","py test.py Durga 10","py test.py 20"],
      correct: 0,
      explanation: "Pentru Durga 10 20 30: (10+20+30)/3 = 20.00."
    },
    {
      id: "py-221",
      chapter: "module-librarii",
      type: "multiple",
      question: "A function receives a float. It must take the absolute value of the float and remove any decimal points after the integer. Which TWO math functions should you use? (Choose 2.)",
      options: ["math.ceil(x)","math.fmod(x)","math.floor(x)","math.frexp(x)","math.fabs(x)"],
      correct: [2,4],
      explanation: "math.fabs(x) dă valoarea absolută, iar math.floor(...) elimină zecimalele rotunjind în jos."
    },
    {
      id: "py-222",
      chapter: "module-librarii",
      type: "single",
      question: "What is returned by math.ceil(10.4)?",
      options: ["11","10","11.0","10.0"],
      correct: 0,
      explanation: "ceil rotunjește în sus la 11; în Python 3 întoarce un int."
    },
    {
      id: "py-223",
      chapter: "module-librarii",
      type: "single",
      question: "What is the result?",
      code: "import math\nl = [str(round(math.pi)) for i in range(1, 6)]\nprint(l)",
      options: ["['3', '3', '3', '3', '3']","['3', '3', '3', '3', '3', '3']","['1', '2', '3', '4', '5']","['1', '2', '3', '4', '5', '6']"],
      correct: 0,
      explanation: "round(math.pi) = 3 la fiecare dintre cele 5 iterații."
    },
    {
      id: "py-224",
      chapter: "module-librarii",
      type: "multiple",
      question: "Which TWO statements print a random value from the list? (Choose 2.)",
      code: "import random\nfruits = ['Apple', 'Mango', 'Orange', 'Lemon']",
      options: ["print(random.sample(fruits))","print(random.sample(fruits, 3)[0])","print(random.choice(fruits))","print(random.choice(fruits)[0])"],
      correct: [1,2],
      explanation: "random.choice(fruits) alege un element; random.sample(fruits, 3)[0] ia primul din 3 elemente alese aleatoriu. sample(fruits) fără k dă eroare, iar choice(fruits)[0] dă doar prima literă."
    },
    {
      id: "py-225",
      chapter: "module-librarii",
      type: "single",
      question: "Which of the following is true?",
      code: "import random\nprint(int(random.random() * 5))",
      options: ["It prints a random int value from 0 to 5, inclusive","It prints a random int value from 1 to 5","It prints a random int value from 1 to 4","It prints a random int value from 0 to 4"],
      correct: 3,
      explanation: "random.random() dă un float în [0.0, 1.0); înmulțit cu 5 și convertit la int dă 0, 1, 2, 3 sau 4."
    },
    {
      id: "py-226",
      chapter: "module-librarii",
      type: "single",
      question: "Which of the following is valid?",
      code: "import random\nprint(random.sample(range(10), 7))",
      options: ["It prints a list of 10 unique random numbers from 0 to 6","It prints a list of 7 unique random numbers from 0 to 9","It prints a list of 7 unique random numbers from 0 to 10","It prints a list of 7 unique random numbers from 1 to 10"],
      correct: 1,
      explanation: "sample(range(10), 7) alege 7 valori unice din 0–9."
    },
    {
      id: "py-227",
      chapter: "module-librarii",
      type: "single",
      question: "You need to generate a random float with a minimum value of 0.0 and a maximum value of 1.0. Which statement should you use?",
      options: ["random.randrange()","random.randrange(0.0, 1.0)","random.random()","random.randint(0, 1)"],
      correct: 2,
      explanation: "random.random() întoarce un float aleatoriu în intervalul [0.0, 1.0)."
    },
    {
      id: "py-228",
      chapter: "module-librarii",
      type: "multiple",
      question: "You need to generate a random integer with a minimum value of 5 and a maximum value of 11. Which TWO functions should you use? (Choose 2.)",
      options: ["random.randint(5, 11)","random.randrange(5, 12, 1)","random.randint(5, 12)","random.randrange(5, 11, 1)"],
      correct: [0,1],
      explanation: "randint include ambele capete; randrange exclude capătul din dreapta, deci randrange(5, 12, 1) produce 5–11."
    },
    {
      id: "py-229",
      chapter: "module-librarii",
      type: "multiple",
      question: "You need to generate a random number that is a multiple of 5, with the lowest number 5 and the highest number 100. Which TWO code segments meet the requirements? (Choose 2.)",
      options: ["from random import randrange\nprint(randrange(5, 105, 5))","from random import randint\nprint(randint(1, 20) * 5)","from random import randrange\nprint(randrange(5, 100, 5))","from random import randint\nprint(randint(0, 20) * 5)"],
      correct: [0,1],
      explanation: "randrange(5, 105, 5) și randint(1, 20)*5 produc 5, 10, ..., 100. randrange(5, 100, 5) nu poate produce 100, iar randint(0, 20)*5 poate produce 0."
    },
    {
      id: "py-230",
      chapter: "module-librarii",
      type: "single",
      question: "What is the output of the following code?",
      code: "from math import factorial\nprint(math.factorial(5))",
      options: ["120","Nothing is printed","Error, method factorial doesn't exist in the math module","Error, the statement should be: print(factorial(5))"],
      correct: 3,
      explanation: "\"from math import factorial\" aduce doar numele factorial, nu și math; math.factorial(5) dă NameError. Corect: print(factorial(5))."
    },
    {
      id: "py-231",
      chapter: "module-librarii",
      type: "true_false",
      question: "math.frexp(21) returns a mantissa and an exponent.",
      code: "import math",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "frexp întoarce o pereche (mantisă, exponent)."
    },
    {
      id: "py-232",
      chapter: "module-librarii",
      type: "single",
      question: "What is the value and type of c?",
      code: "import math\na = -14\nc = math.fabs(a)",
      options: ["14 (int)","14.0 (float)","-14.0 (float)","True (bool)"],
      correct: 1,
      explanation: "math.fabs întoarce valoarea absolută ca float."
    },
    {
      id: "py-233",
      chapter: "module-librarii",
      type: "single",
      question: "What is d?",
      code: "import math\nd = math.fmod(21, -14)",
      options: ["7.0","-7.0","1.5","0"],
      correct: 0,
      explanation: "fmod păstrează semnul primului operand: 21 - (-14 * -1) = 7.0."
    },
    {
      id: "py-234",
      chapter: "module-librarii",
      type: "drag_drop",
      question: "Complete the rounding functions.",
      code: "import math\nx = 77.4\nupper = [1](x)\nlower = [2](x)\nwhole = [3](x)",
      dragItems: [
        { id: "i1", text: "math.ceil" },
        { id: "i2", text: "math.trunc" },
        { id: "i3", text: "math.floor" }
      ],
      dropZones: [
        { id: "z1", label: "Blank [1]", correctItemId: "i1" },
        { id: "z2", label: "Blank [2]", correctItemId: "i3" },
        { id: "z3", label: "Blank [3]", correctItemId: "i2" }
      ],
      explanation: "ceil rotunjește în sus, floor rotunjește în jos, trunc elimină partea zecimală (spre zero)."
    },
    {
      id: "py-235",
      chapter: "module-librarii",
      type: "single",
      question: "Which expression computes 3 to the power of 2 using the math module?",
      options: ["math.pow(3, 2)","math.sqrt(3, 2)","math.power(3, 2)","pow.math(3, 2)"],
      correct: 0,
      explanation: "math.pow(a, b) calculează a la puterea b."
    },
    {
      id: "py-236",
      chapter: "module-librarii",
      type: "single",
      question: "Which expression computes the square root of 16?",
      options: ["math.sqrt(16)","math.sq(16)","sqrt.math(16)","math.root(16)"],
      correct: 0,
      explanation: "math.sqrt(x) calculează rădăcina pătrată."
    },
    {
      id: "py-237",
      chapter: "module-librarii",
      type: "multiple",
      question: "Which TWO methods return the current local date and time as a datetime object? (Choose 2.)",
      options: ["datetime.datetime.now()","datetime.datetime.today()","datetime.datetime.strftime()","datetime.datetime.strptime()"],
      correct: [0,1],
      explanation: "now() și today() dau data și ora curentă; strftime formatează, strptime interpretează un text."
    },
    {
      id: "py-238",
      chapter: "module-librarii",
      type: "single",
      question: "Which function converts a datetime object to formatted text?",
      options: ["strftime()","strptime()","today()","weekday()"],
      correct: 0,
      explanation: "strftime formatează data/ora într-un șir."
    },
    {
      id: "py-239",
      chapter: "module-librarii",
      type: "single",
      question: "What does weekday() return?",
      options: ["A weekday name","An integer from 0 to 6","An integer from 1 to 7","A formatted date"],
      correct: 1,
      explanation: "weekday() întoarce 0 pentru luni și 6 pentru duminică."
    },
    {
      id: "py-240",
      chapter: "module-librarii",
      type: "single",
      question: "What is the output if the system date is 23 September 2020?",
      code: "import datetime\nt = datetime.date.today()\nprint(t.month)",
      options: ["September","Sept","09","9"],
      correct: 3,
      explanation: "month este un atribut întreg: 9. (Cu paranteze, t.month() ar da TypeError.)"
    },
    {
      id: "py-241",
      chapter: "module-librarii",
      type: "single",
      question: "Which function chooses one random item from a list?",
      options: ["random.choice()","random.sample()","random.shuffle()","random.one()"],
      correct: 0,
      explanation: "choice(secvență) întoarce un singur element ales aleatoriu."
    },
    {
      id: "py-242",
      chapter: "module-librarii",
      type: "single",
      question: "Which function rearranges a list in random order, in place?",
      options: ["random.choice()","random.shuffle()","random.sample()","random.randint()"],
      correct: 1,
      explanation: "shuffle(listă) modifică lista pe loc."
    },
    {
      id: "py-243",
      chapter: "module-librarii",
      type: "single",
      question: "Which expression returns two distinct random items from countries?",
      options: ["random.choice(countries, 2)","random.sample(countries, 2)","random.shuffle(countries, 2)","random.randint(countries, 2)"],
      correct: 1,
      explanation: "sample(populație, k) întoarce k elemente distincte."
    },
    {
      id: "py-244",
      chapter: "module-librarii",
      type: "single",
      question: "Which values can randint(1, 3) return?",
      options: ["1 or 2 only","2 or 3 only","1, 2, or 3","0, 1, 2, or 3"],
      correct: 2,
      explanation: "randint(a, b) include ambele capete."
    },
    {
      id: "py-245",
      chapter: "module-librarii",
      type: "single",
      question: "Which expression can generate 3, 6, 9, ... up to 99?",
      options: ["random.randrange(3, 102, 3)","random.randrange(3, 99, 2)","random.randint(3, 99, 3)","random.random(3, 99)"],
      correct: 0,
      explanation: "randrange(start, stop, pas) nu include stop; cu 102, valoarea 99 este posibilă."
    },
    {
      id: "py-246",
      chapter: "module-librarii",
      type: "single",
      question: "What range of values does random.random() return?",
      options: ["0.0 <= x < 1.0","1 <= x <= 100","-1 < x < 1","Only the integers 0 and 1"],
      correct: 0,
      explanation: "random() întoarce un float în intervalul [0.0, 1.0)."
    },
    {
      id: "py-247",
      chapter: "module-librarii",
      type: "multiple",
      question: "Which of the following are possible outputs of this code? Pick the TWO that can occur. (Choose 2.)",
      code: "import random\nfruits = ['Apple', 'Mango', 'Orange', 'Lemon']\nrandom_list = [random.choice(fruits)[:2] for i in range(3)]\nprint(''.join(random_list))",
      options: ["ApApAp","ApMgOr","LeMaOr","OrOraM"],
      correct: [0,2],
      explanation: "Fiecare element este primele 2 litere ale unui fruct (Ap, Ma, Or, Le). ApApAp și LeMaOr sunt combinații posibile; \"Mg\" nu există, iar OrOraM nu se descompune în coduri de 2 litere valide."
    },
    {
      id: "py-248",
      chapter: "module-librarii",
      type: "true_false",
      question: "math.isnan(float('nan')) is True.",
      code: "import math",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "NaN se verifică cu math.isnan()."
    },
    {
      id: "py-249",
      chapter: "module-librarii",
      type: "true_false",
      question: "float('nan') == float('nan') is True.",
      code: "import math",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "NaN nu este egal nici măcar cu el însuși."
    },
    {
      id: "py-250",
      chapter: "gestionare-erori",
      type: "multiple",
      question: "Which TWO keywords are part of exception handling in Python? (Choose 2.)",
      options: ["try","catch","except","throw"],
      correct: [0,2],
      explanation: "Python folosește try / except (catch și throw aparțin altor limbaje, de exemplu Java sau C#)."
    },
    {
      id: "py-251",
      chapter: "gestionare-erori",
      type: "single",
      question: "Which of the following is true about the else block of a try statement?",
      options: ["The else block is executed if there is no exception in the try block","Without writing an except block we can't write an else block","For the same try we can write at most one else block","All of the above"],
      correct: 3,
      explanation: "Toate afirmațiile sunt adevărate."
    },
    {
      id: "py-252",
      chapter: "gestionare-erori",
      type: "single",
      question: "When will the else part of try-except-else be executed?",
      options: ["Always","When no exception occurs","When an error exception occurs","When an exception occurs in the except block"],
      correct: 1,
      explanation: "Blocul else rulează doar dacă în try nu a apărut nicio excepție."
    },
    {
      id: "py-253",
      chapter: "gestionare-erori",
      type: "single",
      question: "Is the following Python code valid?",
      code: "try:\n    print('try block')\nexcept:\n    print('except block')\nfinally:\n    print('finally block')",
      options: ["No, there is no such thing as finally","No, finally cannot be used together with except","No, finally must come before except","Yes"],
      correct: 3,
      explanation: "try-except-finally este o sintaxă validă; finally rulează indiferent dacă a apărut o excepție."
    },
    {
      id: "py-254",
      chapter: "gestionare-erori",
      type: "single",
      question: "What is the output?",
      code: "def foo():\n    try:\n        return 1\n    finally:\n        return 2\n\nk = foo()\nprint(k)",
      options: ["1","2","3","Error, there is more than one return statement in a single try-finally block"],
      correct: 1,
      explanation: "return din finally suprascrie return-ul din try, deci funcția întoarce 2."
    },
    {
      id: "py-255",
      chapter: "gestionare-erori",
      type: "single",
      question: "The base class for all exceptions in Python is:",
      options: ["Exception","ExceptionBase","BaseException","ArithmeticError"],
      correct: 2,
      explanation: "BaseException este clasa de bază pentru toate excepțiile; Exception este doar o subclasă a ei."
    },
    {
      id: "py-256",
      chapter: "gestionare-erori",
      type: "single",
      question: "Which type of exception is raised if we try to call a method that does not exist for the object?",
      options: ["IndexError","TypeError","AttributeError","None of these"],
      correct: 2,
      explanation: "AttributeError apare când se accesează un atribut sau o metodă inexistentă pentru acel obiect."
    },
    {
      id: "py-257",
      chapter: "gestionare-erori",
      type: "single",
      question: "Which exception is raised?",
      code: "f = open('abc.txt')\nf.readall()",
      options: ["AttributeError","EOFError","SystemError","SyntaxError"],
      correct: 0,
      explanation: "Obiectele fișier nu au metoda readall() (există read(), readline(), readlines()), deci apare AttributeError."
    },
    {
      id: "py-258",
      chapter: "gestionare-erori",
      type: "single",
      question: "What is the result?",
      code: "a = 10\nb = 20\nc = '30'\nresult = a + b + c",
      options: ["102030","3030","TypeError","ArithmeticError"],
      correct: 2,
      explanation: "a + b = 30 (int), dar 30 + '30' adună un int cu un str → TypeError."
    },
    {
      id: "py-259",
      chapter: "gestionare-erori",
      type: "single",
      question: "For the inputs 10, 20, 30, 40, what is the result?",
      code: "data = []\ndef get_data():\n    for i in range(1, 5):\n        marks = input('Enter Marks:')\n        data.append(marks)\n\ndef get_avg():\n    sum = 0\n    for mark in data:\n        sum += mark\n    return sum / len(data)\n\nget_data()\nprint(get_avg())",
      options: ["25","25.0","NameError is thrown at runtime","TypeError is thrown at runtime"],
      correct: 3,
      explanation: "input() întoarce str; sum += mark încearcă să adune un int (0) cu un str → TypeError."
    },
    {
      id: "py-260",
      chapter: "gestionare-erori",
      type: "single",
      question: "Running this code raises: TypeError: unsupported operand type(s) for +=: 'float' and 'str'. Which change fixes the error?",
      code: "prices = [30.5, '40.5', 10.5]\ntotal = 0\nfor price in prices:\n    total += price\nprint(total)",
      options: ["total += str(price)","total += int(price)","total += float(price)","total = total + price"],
      correct: 2,
      explanation: "'40.5' este un șir. float(price) îl convertește corect și păstrează zecimalele; int('40.5') ar da ValueError."
    },
    {
      id: "py-261",
      chapter: "gestionare-erori",
      type: "multiple",
      question: "Running this code raises: TypeError: unsupported operand type(s) for +=: 'int' and 'str'. Which TWO changes fix the error? (Choose 2.)",
      code: "prices = [10, '20', 30, '40']\ntotal = 0\nfor price in prices:\n    total += price\nprint(total)",
      options: ["total += str(price)","total += int(price)","total += float(price)","total = total + price"],
      correct: [1,2],
      explanation: "int(price) și float(price) convertesc șirurile numerice la numere, permițând adunarea."
    },
    {
      id: "py-262",
      chapter: "gestionare-erori",
      type: "single",
      question: "The code below is run. in.txt exists, out.txt does not exist. Which statement is true?",
      code: "import sys\n\ntry:\n    file_in = open('in.txt', 'r')\n    file_out = open('out.txt', 'w+')\nexcept IOError:\n    print('Cannot open file:', 'in.txt')\nelse:\n    i = 1\n    for line in file_in:\n        print(line.rstrip())\n        file_out.write(str(i) + ': ' + line)\n        i += 1\n    file_in.close()\n    file_out.close()",
      options: ["The code runs, but generates a logic error","The program copies the data from in.txt to out.txt (numbering the lines)","The code generates a runtime error","The code generates a syntax error"],
      correct: 1,
      explanation: "Modul \"w+\" creează out.txt dacă nu există. Fiind fără excepții, se execută blocul else: liniile din in.txt sunt afișate și scrise numerotat în out.txt."
    },
    {
      id: "py-263",
      chapter: "gestionare-erori",
      type: "single",
      question: "The Happy Clown program runs around in an infinite circle. Which statement identifies an error in the code?",
      code: "01 import math\n02 # default motion for happy clown\n03 power = True\n04 move = 0\n05 while power:\n06     if move == 0:\n07         turnValue = math.pi / move\n08         move += 5\n09     else:\n10         turnValue = 0\n11         move = 0",
      options: ["Line 05 has a syntax error because it should read (power == True).","Line 08 has a syntax error because += is an invalid statement.","Line 07 causes a runtime error due to division by zero.","Line 05 causes a runtime error because the expression is incomplete."],
      correct: 2,
      explanation: "La prima iterație move = 0, deci math.pi / move produce ZeroDivisionError (eroare la rulare)."
    },
    {
      id: "py-264",
      chapter: "gestionare-erori",
      type: "single",
      question: "You want to handle the case where abc.txt does not exist. Which code correctly handles FileNotFoundError?",
      code: "f = open('abc.txt')\nprint(f.read())\nf.close()",
      options: ["f = None\ntry:\n    f = open('abc.txt')\nexcept FileNotFoundError:\n    print('File does not exist')\nelse:\n    print(f.read())\nfinally:\n    if f is not None:\n        f.close()","f = None\ntry:\n    f = open('abc.txt')\nexcept FileNotFoundException:\n    print('File does not exist')\nelse:\n    print(f.read())\nfinally:\n    if f is not None:\n        f.close()","f = None\ntry:\n    f = open('abc.txt')\nelse:\n    print(f.read())\nexcept FileNotFoundError:\n    print('File does not exist')\nfinally:\n    if f is not None:\n        f.close()","None of the above"],
      correct: 0,
      explanation: "Varianta 1 folosește excepția reală FileNotFoundError și ordinea corectă try / except / else / finally. Varianta 2 folosește un nume inexistent (FileNotFoundException), iar în varianta 3 else apare înaintea lui except (SyntaxError)."
    },
    {
      id: "py-265",
      chapter: "gestionare-erori",
      type: "single",
      question: "What type of error is this?",
      code: "trees = ['fir', 'oak', 'pine']\nprint(trees[3])",
      options: ["Syntax error","Runtime error","Logic error","No error"],
      correct: 1,
      explanation: "Codul este corect sintactic, dar un index inexistent produce IndexError la rulare."
    },
    {
      id: "py-266",
      chapter: "gestionare-erori",
      type: "single",
      question: "What type of error is this?",
      code: "x = 5\nif x > 3\n    print(x)",
      options: ["Syntax error","Runtime error","Logic error","No error"],
      correct: 0,
      explanation: "Lipsește două puncte (:) după condiția if, deci interpretorul nu poate citi codul."
    },
    {
      id: "py-267",
      chapter: "gestionare-erori",
      type: "single",
      question: "A program runs, but calculates the area of a rectangle as width + height. What kind of error is this?",
      options: ["Syntax error","Runtime error","Logic error","Import error"],
      correct: 2,
      explanation: "Programul rulează, dar algoritmul dă un rezultat greșit: eroare de logică."
    },
    {
      id: "py-268",
      chapter: "gestionare-erori",
      type: "drag_drop",
      question: "Complete the exception-handling structure.",
      code: "[1]:\n    print(a / b)\n[2]:\n    print(\"This did not work.\")\n[3]:\n    print(\"Thank you.\")",
      dragItems: [
        { id: "i1", text: "except" },
        { id: "i2", text: "finally" },
        { id: "i3", text: "try" },
        { id: "i4", text: "if" },
        { id: "i5", text: "while" },
        { id: "i6", text: "else" }
      ],
      dropZones: [
        { id: "z1", label: "Blank [1]", correctItemId: "i3" },
        { id: "z2", label: "Blank [2]", correctItemId: "i1" },
        { id: "z3", label: "Blank [3]", correctItemId: "i2" }
      ],
      explanation: "try conține codul riscant, except tratează eroarea, iar finally rulează întotdeauna."
    },
    {
      id: "py-269",
      chapter: "gestionare-erori",
      type: "true_false",
      question: "finally runs whether an exception occurs or not.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "except rulează la excepție, else la succes, iar finally în ambele cazuri."
    },
    {
      id: "py-270",
      chapter: "gestionare-erori",
      type: "true_false",
      question: "try and except both execute on every successful operation.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "La succes se execută try (și else); except rulează doar când apare o excepție."
    },
    {
      id: "py-271",
      chapter: "gestionare-erori",
      type: "true_false",
      question: "else runs when the try block completes without an exception.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "else rulează doar dacă try s-a terminat fără excepții."
    },
    {
      id: "py-272",
      chapter: "gestionare-erori",
      type: "single",
      question: "Which keyword explicitly raises an exception?",
      options: ["throw","raise","except","error"],
      correct: 1,
      explanation: "În Python excepțiile se ridică cu raise."
    },
    {
      id: "py-273",
      chapter: "gestionare-erori",
      type: "single",
      question: "What does this code display?",
      code: "x = 30\ny = 10\nassert x > y, 'x is smaller than y'",
      options: ["AssertionError","10 8","No output","108"],
      correct: 2,
      explanation: "30 > 10 este True, deci assert trece fără eroare și fără output (mesajul apare doar când condiția este falsă)."
    },
    {
      id: "py-274",
      chapter: "gestionare-erori",
      type: "single",
      question: "What does this code display?",
      code: "def is_quarter(num):\n    return num % 4 == 0\n\nassert is_quarter(8) == True",
      options: ["True","False","AssertionError","Nothing"],
      correct: 3,
      explanation: "Dacă assert primește o condiție adevărată, nu afișează nimic; altfel ridică AssertionError."
    },
    {
      id: "py-275",
      chapter: "gestionare-erori",
      type: "single",
      question: "What happens?",
      code: "assert 2 + 2 == 5",
      options: ["Nothing","True is printed","AssertionError","ValueError"],
      correct: 2,
      explanation: "2 + 2 == 5 este fals, deci assert ridică AssertionError."
    },
    {
      id: "py-276",
      chapter: "gestionare-erori",
      type: "single",
      question: "Which unittest method checks whether two values are equal?",
      options: ["assertIn","assertEqual","assertIsInstance","assertTrue"],
      correct: 1,
      explanation: "self.assertEqual(a, b) verifică egalitatea valorilor."
    },
    {
      id: "py-277",
      chapter: "gestionare-erori",
      type: "single",
      question: "Which unittest method checks whether an item is in a container?",
      options: ["assertIn","assertEqual","assertIs","assertIsInstance"],
      correct: 0,
      explanation: "self.assertIn(element, container) verifică apartenența."
    },
    {
      id: "py-278",
      chapter: "gestionare-erori",
      type: "single",
      question: "Which unittest method checks whether two references point to the same object?",
      options: ["assertEqual","assertIs","assertIn","assertTrue"],
      correct: 1,
      explanation: "assertIs(a, b) echivalează conceptual cu verificarea a is b."
    },
    {
      id: "py-279",
      chapter: "gestionare-erori",
      type: "single",
      question: "Which unittest method checks whether an object belongs to a class?",
      options: ["assertIsInstance","assertEqual","assertIn","assertFalse"],
      correct: 0,
      explanation: "assertIsInstance(obj, Clasă) verifică tipul/instanța."
    },
    {
      id: "py-280",
      chapter: "gestionare-erori",
      type: "single",
      question: "Which method name is discovered by the default unittest test loader?",
      options: ["test_territory","_test_territory","territory_test","testcase_territory"],
      correct: 0,
      explanation: "Implicit, metodele de test încep cu prefixul test."
    },
    {
      id: "py-281",
      chapter: "gestionare-erori",
      type: "drag_drop",
      question: "Arrange the minimal unittest program.",
      dragItems: [
        { id: "i1", text: "if __name__ == \"__main__\":" },
        { id: "i2", text: "class TestMath(unittest.TestCase):" },
        { id: "i3", text: "    def test_add(self):" },
        { id: "i4", text: "import unittest" },
        { id: "i5", text: "    unittest.main()" },
        { id: "i6", text: "        self.assertEqual(2 + 3, 5)" }
      ],
      dropZones: [
        { id: "z1", label: "Linia 1", correctItemId: "i4" },
        { id: "z2", label: "Linia 2", correctItemId: "i2" },
        { id: "z3", label: "Linia 3", correctItemId: "i3" },
        { id: "z4", label: "Linia 4", correctItemId: "i6" },
        { id: "z5", label: "Linia 5", correctItemId: "i1" },
        { id: "z6", label: "Linia 6", correctItemId: "i5" }
      ],
      explanation: "Se importă unittest, se definește o clasă TestCase cu o metodă test_..., apoi se pornește unittest.main() când fișierul este rulat direct."
    },
    {
      id: "py-282",
      chapter: "structura-cod",
      type: "single",
      question: "In Python, code blocks (the body of an if, for, a function, etc.) are delimited by:",
      options: ["Curly braces { }","Indentation (spaces/tab)","The keyword end","Semicolons"],
      correct: 1,
      explanation: "Python folosește indentarea consecventă pentru a delimita blocurile de cod."
    },
    {
      id: "py-283",
      chapter: "structura-cod",
      type: "single",
      question: "You want to add notes to your code so other team members will understand it. What should you do?",
      options: ["Place the notes after the last line of code, separated by a blank line.","Place the notes inside parentheses on any line.","Place the notes after the # sign on any line.","Place the notes before the first line of code, separated by a blank line."],
      correct: 2,
      explanation: "Comentariile din Python încep cu # și pot apărea pe orice linie."
    },
    {
      id: "py-284",
      chapter: "structura-cod",
      type: "single",
      question: "Which character starts a single-line comment in Python?",
      options: ["//","/*","#","--"],
      correct: 2,
      explanation: "Comentariile pe o singură linie încep cu #."
    },
    {
      id: "py-285",
      chapter: "structura-cod",
      type: "single",
      question: "Which option uses the conventional triple-quoted Python docstring form?",
      options: ["\"\"\"Calculates area.\"\"\"","# Calculates area.","// Calculates area.","/* Calculates area. */"],
      correct: 0,
      explanation: "Docstring-urile sunt șiruri plasate la începutul unui modul, clase sau funcții; forma cu ghilimele triple permite și text pe mai multe rânduri."
    },
    {
      id: "py-286",
      chapter: "structura-cod",
      type: "true_false",
      question: "Lines 01 through 04 are ignored as comments.",
      code: "01 # The calc_power function calculates exponents\n02 # x is the base\n03 # y is the exponent\n04 # The value of x raised to the y power is returned\n05 def calc_power(x, y):\n06     comment = \"#Return the value\"\n07     return x ** y  # raise x to the power y",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Liniile care încep cu # sunt comentarii și sunt ignorate de Python."
    },
    {
      id: "py-287",
      chapter: "structura-cod",
      type: "true_false",
      question: "The string assigned to comment on line 06 is itself a Python comment.",
      code: "01 # The calc_power function calculates exponents\n02 # x is the base\n03 # y is the exponent\n04 # The value of x raised to the y power is returned\n05 def calc_power(x, y):\n06     comment = \"#Return the value\"\n07     return x ** y  # raise x to the power y",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "# din interiorul unui șir nu începe un comentariu; linia 06 atribuie un șir variabilei comment."
    },
    {
      id: "py-288",
      chapter: "structura-cod",
      type: "true_false",
      question: "The text after # on line 07 is ignored by Python.",
      code: "01 # The calc_power function calculates exponents\n02 # x is the base\n03 # y is the exponent\n04 # The value of x raised to the y power is returned\n05 def calc_power(x, y):\n06     comment = \"#Return the value\"\n07     return x ** y  # raise x to the power y",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Textul de după # (în afara unui șir) este comentariu și este ignorat."
    }
  ]
};
