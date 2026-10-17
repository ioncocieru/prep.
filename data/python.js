/* ITS PREP — integrated question bank; original IDs preserved. */
window.EXAM_DATA = window.EXAM_DATA || {};
window.EXAM_DATA.python = {
  "id": "python",
  "name": "Python",
  "shortLabel": "PY",
  "accent": "#2F6FED",
  "description": "Scrierea, recunoașterea și depanarea codului Python: variabile, structuri de control, funcții și module.",
  "CHAPTERS": [
    {
      "id": "operatori-tipuri",
      "name": "Operatori și tipuri de date"
    },
    {
      "id": "structuri-control",
      "name": "Structuri de control (if, for, while)"
    },
    {
      "id": "structuri-date",
      "name": "Structuri de date (liste, tupluri, dicționare)"
    },
    {
      "id": "input-output",
      "name": "Input / Output și fișiere"
    },
    {
      "id": "functii",
      "name": "Funcții"
    },
    {
      "id": "module-librarii",
      "name": "Module și librării"
    },
    {
      "id": "gestionare-erori",
      "name": "Gestionarea erorilor"
    },
    {
      "id": "structura-cod",
      "name": "Structura și documentarea codului"
    }
  ],
  "QUESTIONS": [
    {
      "id": "py-001",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "In Python, the type of a variable can change after it has been created (dynamic typing).",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Python are tipare dinamică: aceeași variabilă poate reține întâi un int, apoi un str, fără declarare explicită de tip."
    },
    {
      "id": "py-002",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "Python distinguishes between integer and floating-point values.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Python are tipuri distincte, int și float. Valorile booleene sunt True și False."
    },
    {
      "id": "py-003",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "A variable's data type must always be written explicitly.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Tipul se stabilește dinamic din valoarea atribuită; nu se declară explicit."
    },
    {
      "id": "py-004",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "The Boolean literals True and False start with capital letters.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Forma corectă este True/False. true/false (litere mici) provoacă NameError."
    },
    {
      "id": "py-005",
      "chapter": "operatori-tipuri",
      "type": "multiple",
      "question": "Which TWO of the following are basic (primitive) data types in Python? (Choose 2.)",
      "options": [
        "int",
        "list",
        "float",
        "DataFrame"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "int și float sunt tipuri numerice de bază. list este o structură de date, iar DataFrame aparține librăriei pandas."
    },
    {
      "id": "py-006",
      "chapter": "operatori-tipuri",
      "type": "dropdown",
      "question": "Complete the conversions by choosing the correct function for each blank.",
      "code": "serialNumber = [1](55555)\namount = [2](44)\nprint(serialNumber, amount)",
      "dragItems": [
        {
          "id": "i1",
          "text": "float"
        },
        {
          "id": "i2",
          "text": "bool"
        },
        {
          "id": "i3",
          "text": "int"
        },
        {
          "id": "i4",
          "text": "str"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i1"
        }
      ],
      "explanation": "str(55555) produce '55555', iar float(44) produce 44.0."
    },
    {
      "id": "py-007",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What are the types of the variables age, minor and name, in this order?",
      "code": "age = 0\nminor = False\nname = 'Durga'",
      "options": [
        "int, bool, str",
        "bool, bool, str",
        "int, bool, char",
        "float, bool, str"
      ],
      "correct": 0,
      "explanation": "0 este int, False este bool, 'Durga' este str. Python nu are tipul char."
    },
    {
      "id": "py-008",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What are the types of weight, zip and value, in this order?",
      "code": "weight = 62.4\nzip = '880098'\nvalue = +23E4",
      "options": [
        "float, str, str",
        "int, str, float",
        "double, str, float",
        "float, str, float"
      ],
      "correct": 3,
      "explanation": "62.4 este float; '880098' este str (are ghilimele); +23E4 este notație științifică, deci float (230000.0). Python nu are tipul double."
    },
    {
      "id": "py-009",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "Identify the types of a, b and c.",
      "code": "a = 10 + 20\nb = '10' + '20'\nc = '10' * 3",
      "options": [
        "a is int, b is str, c is str",
        "a is int, b is str, c is int",
        "a, b and c are all int",
        "a is int; b and c are invalid declarations"
      ],
      "correct": 0,
      "explanation": "a=30 (int); b='1020' (concatenare de str); c='101010' (repetare de str)."
    },
    {
      "id": "py-010",
      "chapter": "operatori-tipuri",
      "type": "drag_drop",
      "question": "Match each variable with its data type.",
      "dragItems": [
        {
          "id": "i1",
          "text": "str"
        },
        {
          "id": "i2",
          "text": "float"
        },
        {
          "id": "i3",
          "text": "bool"
        },
        {
          "id": "i4",
          "text": "int"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "age = 2",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "minor = False",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "name = \"Contoso\"",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "weight = 123.5",
          "correctItemId": "i2"
        },
        {
          "id": "z5",
          "label": "zip = \"81000\"",
          "correctItemId": "i1"
        }
      ],
      "explanation": "\"81000\" este str, chiar dacă arată ca un număr: este scris între ghilimele."
    },
    {
      "id": "py-011",
      "chapter": "operatori-tipuri",
      "type": "drag_drop",
      "question": "Match each expression with the type returned by type().",
      "dragItems": [
        {
          "id": "i1",
          "text": "bool"
        },
        {
          "id": "i2",
          "text": "float"
        },
        {
          "id": "i3",
          "text": "int"
        },
        {
          "id": "i4",
          "text": "str"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "type(+1E10)",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "type(5.0)",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "type(\"True\")",
          "correctItemId": "i4"
        },
        {
          "id": "z4",
          "label": "type(False)",
          "correctItemId": "i1"
        }
      ],
      "explanation": "+1E10 și 5.0 sunt float; \"True\" (cu ghilimele) este str; False este bool."
    },
    {
      "id": "py-012",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "For which value of x does type(x) return <class 'int'>?",
      "options": [
        "x = 47.0",
        "x = '47'",
        "x = 10+20j",
        "x = 2**2**2"
      ],
      "correct": 3,
      "explanation": "** se evaluează de la dreapta la stânga: 2**(2**2) = 16, un int. 47.0 e float, '47' e str, 10+20j e complex."
    },
    {
      "id": "py-013",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is the type of x + y?",
      "code": "x = '10'\ny = '20'",
      "options": [
        "int",
        "float",
        "str",
        "complex"
      ],
      "correct": 2,
      "explanation": "Ambele sunt str, deci + le concatenează ('1020') și rezultatul e tot str."
    },
    {
      "id": "py-014",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What are the data types of c1, c2 and c3?",
      "code": "a1 = '10'\nb1 = 3\nc1 = a1 * b1\n\na2 = 10\nb2 = 3\nc2 = a2 / b2\n\na3 = 2.6\nb3 = 1\nc3 = a3 / b3",
      "options": [
        "str, int, int",
        "str, float, float",
        "str, int, float",
        "str, str, str"
      ],
      "correct": 1,
      "explanation": "'10'*3 repetă șirul, deci str. Operatorul / întoarce mereu float în Python 3."
    },
    {
      "id": "py-015",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "Which of the variables evaluates to False?",
      "code": "a = bool([False])\nb = bool(3)\nc = bool(\"\")\nd = bool(' ')",
      "options": [
        "a",
        "b",
        "c",
        "d"
      ],
      "correct": 2,
      "explanation": "bool([False]) e True (listă nevidă); bool(3) e True; bool(\"\") e False (șir gol); bool(' ') e True (conține un spațiu)."
    },
    {
      "id": "py-016",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "Which of the following variables evaluate to True?",
      "code": "a = bool([])\nb = bool(())\nc = bool(range(0))\nd = bool({})\ne = bool(set())",
      "options": [
        "Only c",
        "a, b, c and d",
        "All of them",
        "None of them"
      ],
      "correct": 3,
      "explanation": "Toate colecțiile goale sunt False."
    },
    {
      "id": "py-017",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "Which variables evaluate to True?",
      "code": "a = bool(0)\nb = bool(3)\nc = bool(0.5)\nd = bool(0.0)",
      "options": [
        "a, b",
        "b, c",
        "c, d",
        "d, a",
        "All variables"
      ],
      "correct": 1,
      "explanation": "bool(0) și bool(0.0) sunt False; bool(3) și bool(0.5) sunt True."
    },
    {
      "id": "py-018",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "Which expression evaluates to 2?",
      "code": "a = float('123.456')",
      "options": [
        "int(a) + False",
        "bool(a) + True",
        "str(a)",
        "bool(a)"
      ],
      "correct": 1,
      "explanation": "bool(a) e True (adică 1) pentru orice float nenul; True + True = 2. int(a)+False = 123."
    },
    {
      "id": "py-019",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is the output?",
      "code": "result = str(bool(1) + float(10) / float(2))\nprint(result)",
      "options": [
        "SyntaxError",
        "TypeError",
        "6",
        "6.0"
      ],
      "correct": 3,
      "explanation": "bool(1)=True=1; 10.0/2.0=5.0; 1+5.0=6.0; str(6.0)='6.0'."
    },
    {
      "id": "py-020",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "Which of the following expressions results in an error?",
      "options": [
        "float(\"10\")",
        "int(\"10\")",
        "float(\"10.8\")",
        "int(\"10.8\")"
      ],
      "correct": 3,
      "explanation": "int() nu poate converti direct un șir cu punct zecimal: int(\"10.8\") dă ValueError. Corect ar fi int(float(\"10.8\"))."
    },
    {
      "id": "py-021",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "Which expression converts 19.95 to the integer 19?",
      "options": [
        "round(19.95)",
        "int(19.95)",
        "math.ceil(19.95)",
        "float(19.95)"
      ],
      "correct": 1,
      "explanation": "int() elimină partea zecimală, nu rotunjește (round(19.95) dă 20)."
    },
    {
      "id": "py-022",
      "chapter": "operatori-tipuri",
      "type": "multiple",
      "question": "A bank must show the average customer balance each day, truncating the decimal portion. Which TWO code segments should you use? (Choose 2.) Assume nonnegative balances and a positive number of recipients.",
      "options": [
        "average_balance = total_deposits ** number_of_customers",
        "average_balance = total_deposits // number_of_customers",
        "average_balance = int(total_deposits / number_of_customers)",
        "average_balance = float(total_deposits // number_of_customers)"
      ],
      "correct": [
        1,
        2
      ],
      "explanation": "// (împărțire întreagă) și int(.../...) elimină partea zecimală. ** este ridicare la putere."
    },
    {
      "id": "py-023",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is the return type of the function id()?",
      "options": [
        "int",
        "float",
        "bool",
        "str"
      ],
      "correct": 0,
      "explanation": "id() întoarce un număr întreg care identifică obiectul în memorie."
    },
    {
      "id": "py-024",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is the result?",
      "code": "print(17 // 4)",
      "options": [
        "4.25",
        "4",
        "1",
        "5"
      ],
      "correct": 1,
      "explanation": "// este împărțirea întreagă: 17 // 4 = 4."
    },
    {
      "id": "py-025",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What are the value and type of result?",
      "code": "result = 5 / 2",
      "options": [
        "2 (int)",
        "2.5 (float)",
        "2.0 (float)",
        "5 (int)"
      ],
      "correct": 1,
      "explanation": "Operatorul / face împărțire exactă și întoarce float."
    },
    {
      "id": "py-026",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is printed?",
      "code": "print(5 // 2)",
      "options": [
        "2",
        "2.5",
        "3",
        "0"
      ],
      "correct": 0,
      "explanation": "// este împărțirea întreagă (floor division)."
    },
    {
      "id": "py-027",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is printed?",
      "code": "print(10 % 3)",
      "options": [
        "0",
        "1",
        "2",
        "3"
      ],
      "correct": 1,
      "explanation": "% întoarce restul împărțirii: 10 = 3*3 + 1."
    },
    {
      "id": "py-028",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is the result?",
      "code": "a = 15\nb = 5\nprint(a / b)",
      "options": [
        "3",
        "3.0",
        "0",
        "0.0"
      ],
      "correct": 1,
      "explanation": "În Python 3, / întoarce mereu float: 15/5 = 3.0."
    },
    {
      "id": "py-029",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is the result?",
      "code": "a = 21\nb = 6\nprint(a / b)\nprint(a // b)\nprint(a % b)",
      "options": [
        "3 3 3",
        "3.5 3 3",
        "3.0 3 3",
        "3.5 3.5 3"
      ],
      "correct": 1,
      "explanation": "21/6=3.5; 21//6=3; 21%6=3."
    },
    {
      "id": "py-030",
      "chapter": "operatori-tipuri",
      "type": "drag_drop",
      "question": "Given a = 11 and b = 4, match each expression with its result.",
      "dragItems": [
        {
          "id": "i1",
          "text": "print(a // b)"
        },
        {
          "id": "i2",
          "text": "print(a % b)"
        },
        {
          "id": "i3",
          "text": "print(a / b)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "2",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "3",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "2.75",
          "correctItemId": "i3"
        }
      ],
      "explanation": "11/4=2.75; 11//4=2; 11%4=3."
    },
    {
      "id": "py-031",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is printed?",
      "code": "a = 3\nb = 7\nc = 5\nresult = a + b * c\nprint(result)",
      "options": [
        "36",
        "38",
        "26",
        "50"
      ],
      "correct": 1,
      "explanation": "Înmulțirea are prioritate: 7*5=35, apoi 3+35=38."
    },
    {
      "id": "py-032",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "Which operation is evaluated first?",
      "code": "x = 2 + 3 * 4",
      "options": [
        "2 + 3",
        "3 * 4",
        "the whole expression at once",
        "the assignment to x"
      ],
      "correct": 1,
      "explanation": "Înmulțirea are prioritate față de adunare."
    },
    {
      "id": "py-033",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "a == 90",
      "code": "a = 100 - 70 / 7\nb = (35 % 15) // 2\nc = -3 ** 2",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "a = 100 - 10.0 = 90.0, iar 90.0 == 90 este True."
    },
    {
      "id": "py-034",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "b == 2.5",
      "code": "a = 100 - 70 / 7\nb = (35 % 15) // 2\nc = -3 ** 2",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "b = 5 // 2 = 2 (împărțire întreagă), deci b nu este 2.5."
    },
    {
      "id": "py-035",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "c == -9",
      "code": "a = 100 - 70 / 7\nb = (35 % 15) // 2\nc = -3 ** 2",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "** are prioritate față de minusul unar: -(3**2) = -9."
    },
    {
      "id": "py-036",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "Which expression generates the maximum value?",
      "options": [
        "8 % 3 * 4",
        "8 - 3 * 4",
        "8 // 3 * 4",
        "8 / 3 * 4"
      ],
      "correct": 3,
      "explanation": "Valorile sunt 8, -4, 8 și ≈10.67, deci maximul este 8 / 3 * 4."
    },
    {
      "id": "py-037",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "Which expression evaluates to 2?",
      "options": [
        "3 ** 2",
        "22 % 5",
        "13 // 4",
        "11 / 2"
      ],
      "correct": 1,
      "explanation": "3**2=9; 22%5=2; 13//4=3; 11/2=5.5."
    },
    {
      "id": "py-038",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "Which expression evaluates to 4?",
      "options": [
        "7 / 2 * 3",
        "7 % 2 + 3",
        "7 // 2 - 3",
        "7 - 2 * 3"
      ],
      "correct": 1,
      "explanation": "7%2+3 = 1+3 = 4. Celelalte: 10.5, 0, 1."
    },
    {
      "id": "py-039",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "Which line assigns 9 to output?",
      "code": "a = 7\nb = 3\nc = 5\nd = 1",
      "options": [
        "output = a % c + 1",
        "output = a + c // d",
        "output = c * d - 1",
        "output = a + d * 2"
      ],
      "correct": 3,
      "explanation": "a + d*2 = 7 + 2 = 9. Celelalte dau 3, 12 și 4."
    },
    {
      "id": "py-040",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What does the following expression evaluate to?",
      "code": "6 // 4 % 5 + 2 ** 3 - 2 // 3",
      "options": [
        "9",
        "3",
        "-1",
        "25"
      ],
      "correct": 0,
      "explanation": "6//4=1; 1%5=1; 2**3=8; 2//3=0 → 1 + 8 - 0 = 9."
    },
    {
      "id": "py-041",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is the output?",
      "code": "x = 3 / 3 + 3 ** 3 - 3\nprint(x)",
      "options": [
        "25",
        "32",
        "0.11",
        "25.0"
      ],
      "correct": 3,
      "explanation": "3/3=1.0 (float), deci rezultatul este 1.0 + 27 - 3 = 25.0."
    },
    {
      "id": "py-042",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is the result?",
      "code": "result = 8 // 6 % 5 + 2 ** 3 - 2\nprint(result)",
      "options": [
        "6",
        "7",
        "8",
        "9"
      ],
      "correct": 1,
      "explanation": "2**3=8; 8//6=1; 1%5=1; 1 + 8 - 2 = 7."
    },
    {
      "id": "py-043",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is the output?",
      "code": "x = 2\ny = 6\nx += 2 ** 3\nx //= y // 2 // 3\nprint(x)",
      "options": [
        "0",
        "9",
        "10",
        "7"
      ],
      "correct": 2,
      "explanation": "x = 2 + 8 = 10; y//2 = 3; 3//3 = 1; x //= 1 lasă x = 10."
    },
    {
      "id": "py-044",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is the result?",
      "code": "a = 3\nb = 5\na += 2 ** 3\na -= b // 2 // 3\nprint(a)",
      "options": [
        "13",
        "12",
        "11",
        "10"
      ],
      "correct": 2,
      "explanation": "a = 3 + 8 = 11; b//2 = 2; 2//3 = 0; a -= 0 lasă a = 11."
    },
    {
      "id": "py-045",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "Which expression results in -4?",
      "code": "a = 1\nb = 2\nc = 4\nd = 6",
      "options": [
        "(a + b) // c % d",
        "(b + c) // a % d",
        "(a + b) // c * d",
        "(a + b) // d - c"
      ],
      "correct": 3,
      "explanation": "(1+2)//6 - 4 = 0 - 4 = -4. Celelalte trei dau 0."
    },
    {
      "id": "py-046",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is the value of X?",
      "code": "X = 2 + 9 * ((3 * 12) - 8) / 10",
      "options": [
        "30.0",
        "30.8",
        "28.4",
        "27.2"
      ],
      "correct": 3,
      "explanation": "(3*12)-8 = 28; 9*28 = 252; 252/10 = 25.2; 2 + 25.2 = 27.2."
    },
    {
      "id": "py-047",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is the result?",
      "code": "(3 * (1 + 2) ** 2) - ((2 ** 2) * 3)",
      "options": [
        "3",
        "13",
        "15",
        "69"
      ],
      "correct": 2,
      "explanation": "(1+2)**2 = 9; 3*9 = 27; (2**2)*3 = 12; 27 - 12 = 15."
    },
    {
      "id": "py-048",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is the value of result?",
      "code": "result = (2 * (3 + 4) ** 2 - (3 ** 3) * 3)",
      "options": [
        "17",
        "16",
        "18",
        "19"
      ],
      "correct": 0,
      "explanation": "2*49 = 98; 27*3 = 81; 98 - 81 = 17."
    },
    {
      "id": "py-049",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is the result?",
      "code": "x = 8\ny = 10\nresult = x // 3 * 3 / 2 + y % 2 ** 2\nprint(result)",
      "options": [
        "5",
        "5.0",
        "6.0",
        "7.0"
      ],
      "correct": 1,
      "explanation": "2**2=4; y%4=2; 8//3=2; 2*3=6; 6/2=3.0; 3.0 + 2 = 5.0."
    },
    {
      "id": "py-050",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "Operators with the same precedence are evaluated in which manner? Consider ordinary addition/subtraction and multiplication/division; exponentiation is a right-associative exception.",
      "options": [
        "Left to right",
        "Right to left",
        "Can't say",
        "None of the mentioned"
      ],
      "correct": 0,
      "explanation": "Operatorii cu aceeași prioritate se evaluează de la stânga la dreapta (excepție: **, de la dreapta la stânga)."
    },
    {
      "id": "py-051",
      "chapter": "operatori-tipuri",
      "type": "multiple",
      "question": "Consider the expression result = a - b * c + d. Which TWO statements are valid? (Choose 2.)",
      "options": [
        "b * c is evaluated first, then the subtraction, then the addition",
        "b * c is evaluated first, then the addition, then the subtraction",
        "a - b is evaluated first, then the multiplication and the addition",
        "The expression is equivalent to a - (b * c) + d"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "* are prioritate; apoi - și + se evaluează de la stânga la dreapta, deci expresia este (a - (b*c)) + d."
    },
    {
      "id": "py-052",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "A program must compute b as \"a multiplied by negative one, then raised to the second power\", where a is read from the user. Which expression is valid?",
      "code": "a = eval(input('Enter a number: '))",
      "options": [
        "b = (a) ** -2",
        "b = (-a) ** 2",
        "b = (a-) ** 2",
        "b = -(a) ** 2"
      ],
      "correct": 1,
      "explanation": "(-a) ** 2 forțează întâi negarea, apoi ridicarea la pătrat. Fără paranteze, ** are prioritate față de minusul unar."
    },
    {
      "id": "py-053",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "Which line should be placed at Line-1 so that a becomes 9?",
      "code": "a = 2\na += 1\n# Line-1",
      "options": [
        "a *= 2",
        "a **= 2",
        "a += 2",
        "a -= 2"
      ],
      "correct": 1,
      "explanation": "După a += 1, a = 3; a **= 2 înseamnă 3**2 = 9."
    },
    {
      "id": "py-054",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "Which line should be placed at Line-1 so that x becomes 16?",
      "code": "x = 3\nx += 1\n# Line-1",
      "options": [
        "x += 2",
        "x -= 2",
        "x *= 2",
        "x **= 2"
      ],
      "correct": 3,
      "explanation": "După x += 1, x = 4; x **= 2 dă 16 (x *= 2 ar da 8)."
    },
    {
      "id": "py-055",
      "chapter": "operatori-tipuri",
      "type": "multiple",
      "question": "In which TWO cases is result equal to 0? (Choose 2.)",
      "code": "a = 1\nb = 3\nc = 5\nd = 7",
      "options": [
        "result = a + b * 2",
        "result = a % b - 1",
        "result = a - b // d",
        "result = a ** d - 1"
      ],
      "correct": [
        1,
        3
      ],
      "explanation": "a%b-1 = 1-1 = 0 și a**d-1 = 1-1 = 0. a+b*2 = 7, iar a - b//d = 1."
    },
    {
      "id": "py-056",
      "chapter": "operatori-tipuri",
      "type": "multiple",
      "question": "Which TWO expressions evaluate to 3? (Choose 2.)",
      "options": [
        "23 % 5",
        "3 ** 2",
        "11 / 3",
        "13 // 4"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "23%5=3 și 13//4=3. 3**2=9, iar 11/3≈3.67."
    },
    {
      "id": "py-057",
      "chapter": "operatori-tipuri",
      "type": "drag_drop",
      "question": "Analyze the order of evaluation of the expression in the function.",
      "code": "def main(a, b, c, d):\n    value = a + b * c - d\n    return value",
      "dragItems": [
        {
          "id": "i1",
          "text": "subtraction"
        },
        {
          "id": "i2",
          "text": "addition"
        },
        {
          "id": "i3",
          "text": "(a + (b*c)) - d"
        },
        {
          "id": "i4",
          "text": "(a+b) * (c-d)"
        },
        {
          "id": "i5",
          "text": "b * c"
        },
        {
          "id": "i6",
          "text": "a + b"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "First expression evaluated",
          "correctItemId": "i5"
        },
        {
          "id": "z2",
          "label": "Second operation performed",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Equivalent fully parenthesized expression",
          "correctItemId": "i3"
        }
      ],
      "explanation": "* are prioritate; apoi + și - se aplică de la stânga la dreapta: (a + (b*c)) - d."
    },
    {
      "id": "py-058",
      "chapter": "operatori-tipuri",
      "type": "drag_drop",
      "question": "Arrange the listed categories by their usual precedence for expressions without a unary operator on the right of **. Parentheses explicitly group expressions.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Multiplication and Division"
        },
        {
          "id": "i2",
          "text": "Exponents"
        },
        {
          "id": "i3",
          "text": "Parentheses"
        },
        {
          "id": "i4",
          "text": "Addition and Subtraction"
        },
        {
          "id": "i5",
          "text": "Unary + and - (not logical not)"
        },
        {
          "id": "i6",
          "text": "And"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "1 (highest)",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "2",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "3",
          "correctItemId": "i5"
        },
        {
          "id": "z4",
          "label": "4",
          "correctItemId": "i1"
        },
        {
          "id": "z5",
          "label": "5",
          "correctItemId": "i4"
        },
        {
          "id": "z6",
          "label": "6 (lowest)",
          "correctItemId": "i6"
        }
      ],
      "explanation": "Among the listed categories: grouping, exponentiation, unary +/-, multiplication/division, addition/subtraction, and. Logical not has lower precedence than comparisons and is not grouped with unary +/-. Note that 2 ** -1 parses with unary minus on the right operand."
    },
    {
      "id": "py-059",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is the output, in order?",
      "code": "print(10 == 10 and 20 != 20)\nprint(10 == 10 or 20 != 20)\nprint(not 10 == 10)",
      "options": [
        "True / True / False",
        "False / True / True",
        "False / True / False",
        "True / False / True"
      ],
      "correct": 2,
      "explanation": "True and False = False; True or False = True; not True = False."
    },
    {
      "id": "py-060",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is the output, in order?",
      "code": "print(not 0)\nprint(not 10)\nprint(not '')\nprint(not 'durga')\nprint(not None)",
      "options": [
        "True / False / True / False / True",
        "False / True / False / True / False",
        "True / True / True / True / True",
        "False / False / False / False / False"
      ],
      "correct": 0,
      "explanation": "0, '' și None sunt \"falsy\" (not → True); 10 și 'durga' sunt \"truthy\" (not → False)."
    },
    {
      "id": "py-061",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is the output?",
      "code": "True = False\nwhile True:\n    print(True)\n    break",
      "options": [
        "True",
        "False",
        "None",
        "SyntaxError"
      ],
      "correct": 3,
      "explanation": "În Python 3, True este cuvânt rezervat și nu poate fi reatribuit: \"True = False\" dă SyntaxError."
    },
    {
      "id": "py-062",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "Which operator means \"not equal\" in Python?",
      "options": [
        "<>",
        "!=",
        "=!",
        "not="
      ],
      "correct": 1,
      "explanation": "Operatorul \"diferit\" este !=."
    },
    {
      "id": "py-063",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "Which operator checks whether \"nine\" occurs in quote?",
      "code": "quote = \"A stitch in time saves nine\"",
      "options": [
        "is",
        "in",
        "==",
        "contains"
      ],
      "correct": 1,
      "explanation": "Operatorul in testează apartenența: \"nine\" in quote."
    },
    {
      "id": "py-064",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is the output of the print statement?",
      "code": "numList = [0, 1, 2, 3, 4]\nprint(5 in numList)",
      "options": [
        "4",
        "False",
        "True",
        "5"
      ],
      "correct": 1,
      "explanation": "Lista nu conține valoarea 5, deci 5 in numList este False."
    },
    {
      "id": "py-065",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "a is b",
      "code": "a = [1, 2]\nb = a\nc = [1, 2]",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "b este un alt nume pentru exact același obiect ca a."
    },
    {
      "id": "py-066",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "a == c",
      "code": "a = [1, 2]\nb = a\nc = [1, 2]",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "a și c au același conținut, deci == este True."
    },
    {
      "id": "py-067",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "a is c",
      "code": "a = [1, 2]\nb = a\nc = [1, 2]",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "c este o listă separată (alt obiect) chiar dacă are același conținut."
    },
    {
      "id": "py-068",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is the result (the four printed values, in order)?",
      "code": "n1 = [10, 20, 30, 40, 50]\nn2 = [10, 20, 30, 40, 50]\nprint(n1 is n2)\nprint(n1 == n2)\nn1 = n2\nprint(n1 is n2)\nprint(n1 == n2)",
      "options": [
        "False, False, True, True",
        "False, True, False, True",
        "False, True, True, True",
        "True, False, True, False"
      ],
      "correct": 2,
      "explanation": "Inițial: obiecte diferite, conținut egal (is=False, ==True). După n1 = n2 ambele indică același obiect (is=True, ==True)."
    },
    {
      "id": "py-069",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is the result (the four printed values, in order)?",
      "code": "numbers = [10, 20, 30, 40, 50]\nalphabets = ['a', 'b', 'c', 'd', 'e']\nprint(numbers is alphabets)\nprint(numbers == alphabets)\nnumbers = alphabets\nprint(numbers is alphabets)\nprint(numbers == alphabets)",
      "options": [
        "False, False, True, True",
        "False, True, False, True",
        "True, False, True, False",
        "False, True, True, True"
      ],
      "correct": 0,
      "explanation": "Inițial obiecte și conținut diferite (False, False). După numbers = alphabets, ambele sunt același obiect (True, True)."
    },
    {
      "id": "py-070",
      "chapter": "operatori-tipuri",
      "type": "multiple",
      "question": "Which TWO statements about the output are correct? (Choose 2.)",
      "code": "l1 = ['sunny', 'bunny', 'chinny', 'vinny']\nl2 = ['sunny', 'bunny', 'chinny', 'vinny']\nprint(l1 is not l2)   # (1)\nprint(l1 == l2)       # (2)\nl1 = l2\nprint(l1 is not l2)   # (3)\nprint(l1 != l2)       # (4)",
      "options": [
        "(1) prints True",
        "(2) prints False",
        "(3) prints False",
        "(4) prints True"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "Inițial obiecte diferite: is not → True, == → True. După l1 = l2 același obiect: is not → False, != → False."
    },
    {
      "id": "py-071",
      "chapter": "operatori-tipuri",
      "type": "multiple",
      "question": "In which TWO cases is True printed? (Choose 2.)",
      "options": [
        "a = 45; b = 45; print(a is not b)",
        "s1 = 'Python'; s2 = 'Python'.upper(); print(s1 is s2)",
        "x = [1, 2, 3]; y = [1, 2, 3]; print(x is y)",
        "print('r' in 'durga')",
        "print('is' in 'This IS a Fake News')"
      ],
      "correct": [
        3,
        4
      ],
      "explanation": "'r' apare în 'durga'; 'is' apare ca subșir în 'This'. În celelalte cazuri rezultatul este False."
    },
    {
      "id": "py-072",
      "chapter": "operatori-tipuri",
      "type": "multiple",
      "question": "In which TWO cases is True printed? (Choose 2.)",
      "code": "subjects = ['java', 'python', 'sap']\nmore_subjects = ['java', 'python', 'sap']\nextra_subjects = more_subjects",
      "options": [
        "print(extra_subjects is more_subjects)",
        "print(subjects is more_subjects)",
        "print(subjects is extra_subjects)",
        "print(subjects == extra_subjects)"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "extra_subjects și more_subjects sunt același obiect (is → True). subjects este alt obiect cu conținut egal: == → True, dar is → False."
    },
    {
      "id": "py-073",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "For which condition will True be printed?",
      "code": "x = 'Durga'\ny = x\nresult = <condition>\nprint(result)",
      "options": [
        "x is y",
        "x is not y",
        "x != y",
        "x < y"
      ],
      "correct": 0,
      "explanation": "y = x explicitly makes both variables refer to the same object. Therefore x is y is True; string-literal interning is not assumed."
    },
    {
      "id": "py-074",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is the output?",
      "code": "lst = [7, 8, 9]\nb = lst[:]\nprint(b is lst)\nprint(b == lst)",
      "options": [
        "False, then True",
        "True, then False",
        "False, then False",
        "True, then True"
      ],
      "correct": 0,
      "explanation": "lst[:] creează o copie (alt obiect): is → False, dar conținutul e egal: == → True."
    },
    {
      "id": "py-075",
      "chapter": "structuri-control",
      "type": "drag_drop",
      "question": "Match each keyword with the correct type of control structure.",
      "dragItems": [
        {
          "id": "i1",
          "text": "if / elif / else"
        },
        {
          "id": "i2",
          "text": "for"
        },
        {
          "id": "i3",
          "text": "while"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Loop over a sequence / known number of iterations",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Conditional decision",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Loop that runs as long as a condition is true",
          "correctItemId": "i3"
        }
      ],
      "explanation": "for iterează peste o secvență; if/elif/else decide; while repetă cât timp condiția e adevărată."
    },
    {
      "id": "py-076",
      "chapter": "structuri-control",
      "type": "single",
      "question": "What is the final value of commission?",
      "code": "collected_amount = 3000\ncommission = 0\nif collected_amount <= 2000:\n    commission = 50\nelif collected_amount > 2500 and collected_amount < 3000:\n    commission = 100\nelif collected_amount > 2500:\n    commission = 150\nif collected_amount >= 3000:\n    commission += 200",
      "options": [
        "350",
        "200",
        "150",
        "100"
      ],
      "correct": 0,
      "explanation": "Se execută ramura elif collected_amount > 2500 (commission = 150). Al doilea if este separat și e True, deci commission += 200 → 350."
    },
    {
      "id": "py-077",
      "chapter": "structuri-control",
      "type": "single",
      "question": "What is the result?",
      "code": "order_value = 1500\nstate = 'ap'\ndelivery_charge = 0\nif state in ['up', 'mp', 'ts']:\n    if order_value <= 1000:\n        delivery_charge = 50\n    elif 1000 < order_value < 2000:\n        delivery_charge = 100\n    else:\n        delivery_charge = 150\nelse:\n    delivery_charge = 25\nif state in ['lp', 'kp', 'ap']:\n    if order_value > 1000:\n        delivery_charge += 20\n        if order_value < 2000 and state in ['kp', 'ap']:\n            delivery_charge += 30\n    else:\n        delivery_charge += 15\nprint(delivery_charge)",
      "options": [
        "65",
        "75",
        "85",
        "55"
      ],
      "correct": 1,
      "explanation": "'ap' nu e în prima listă → 25. Apoi order_value > 1000: +20 → 45; order_value < 2000 și state în ['kp','ap']: +30 → 75."
    },
    {
      "id": "py-078",
      "chapter": "structuri-control",
      "type": "single",
      "question": "Which grade is printed to the console?",
      "code": "marks = [30, 40, 50, 45, 50, 100]\naverage = sum(marks) // len(marks)\ngrades = {1: 'A', 2: 'B', 3: 'C', 4: 'D'}\nif average >= 90 and average <= 100:\n    key = 1\nelif average >= 80 and average < 90:\n    key = 2\nelif average >= 50 and average < 80:\n    key = 3\nelse:\n    key = 4\nprint(grades[key])",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 2,
      "explanation": "sum = 315; 315 // 6 = 52, deci intervalul 50–79: key = 3 → 'C'."
    },
    {
      "id": "py-079",
      "chapter": "structuri-control",
      "type": "single",
      "question": "For which user input will interest_rate be 12?",
      "code": "amount = float(input('Enter Loan Amount:'))\ninterest_rate = 0\nif amount > 0 and amount <= 50000:\n    interest_rate = 10\nelif amount > 50000 and amount < 100000:\n    interest_rate = 12\nelif amount >= 100000 and amount < 150000:\n    interest_rate = 16\nelse:\n    interest_rate = 22",
      "options": [
        "50000",
        "50001",
        "100000",
        "100001",
        "150000"
      ],
      "correct": 1,
      "explanation": "50001 nu respectă prima condiție (<= 50000), dar respectă a doua (> 50000 și < 100000) → 12."
    },
    {
      "id": "py-080",
      "chapter": "structuri-control",
      "type": "single",
      "question": "In which of the following cases is 'Needs Director Approval' printed?",
      "code": "days = int(input('Enter number of days for leave: '))\ncause = input('Enter the cause: ')\nif days == 1:\n    print('Leave will be approved immediately')\nelif days > 1 and days <= 3:\n    if cause == 'Sick':\n        print('Leave will be approved immediately')\n    else:\n        print('Needs Lead Approval')\nelif days > 3 and days < 5:\n    if cause == 'Sick':\n        print('Needs Manager Approval')\n    else:\n        print('Needs Director Approval')\nelif days >= 5 and days <= 10:\n    print('Needs Director Approval')",
      "options": [
        "days = 2 and cause = 'Sick'",
        "days = 3 and cause = 'personal'",
        "days = 4 and cause = 'Sick'",
        "days = 4 and cause = 'official'"
      ],
      "correct": 3,
      "explanation": "days = 4 intră pe ramura days > 3 and days < 5; cu cauza 'official' (diferită de 'Sick') se execută else → 'Needs Director Approval'."
    },
    {
      "id": "py-081",
      "chapter": "structuri-control",
      "type": "single",
      "question": "A company rents books at $3.00 per day. If the book is returned after 9 PM, one extra day is charged. Rented on Sunday: 50% off; rented on Saturday: 30% off. The book is rented on Sunday for 5 days and returned after 9 PM. What is the result?",
      "code": "ontime = input(\"Was the book returned before 9 pm? y or n \").lower()\ndays_rented = int(input(\"How many days was the book rented? \"))\nday_rented = input(\"What day was the book rented? \").capitalize()\ncost_per_day = 3.00\nif ontime == 'n':\n    days_rented = days_rented + 1\nif day_rented == 'Sunday':\n    total = (days_rented * cost_per_day) * 0.5\nelif day_rented == 'Saturday':\n    total = (days_rented * cost_per_day) * 0.7\nelse:\n    total = days_rented * cost_per_day\nprint(\"The cost of the book rental is: $\", total)",
      "options": [
        "The cost of the book rental is: $ 7.0",
        "The cost of the book rental is: $ 8.0",
        "The cost of the book rental is: $ 9.0",
        "The cost of the book rental is: $ 10.0"
      ],
      "correct": 2,
      "explanation": "După 9 PM: 5 + 1 = 6 zile; duminică: (6 * 3.00) * 0.5 = 9.0."
    },
    {
      "id": "py-082",
      "chapter": "structuri-control",
      "type": "single",
      "question": "Minors and seniors must receive a 10% discount. Which code should you add on line 03?",
      "code": "def get_discount(minor, senior):\n    discount = .1\n    [Line 03]\n        discount = 0\n    return discount",
      "options": [
        "if not (minor and senior):",
        "if not (minor or senior):",
        "if (not minor) and senior:",
        "if (not minor) or senior:"
      ],
      "correct": 1,
      "explanation": "Reducerea se anulează doar dacă persoana nu este nici minor, nici senior: not (minor or senior)."
    },
    {
      "id": "py-083",
      "chapter": "structuri-control",
      "type": "single",
      "question": "To print 'Valid' to the console, which condition should the if statement use?",
      "code": "a = 5\nb = 10\nc = 2\nd = True\n\nx = a + b * c\ny = a + b / d\n\nif <condition>:\n    print('Valid')\nelse:\n    print('Invalid')",
      "options": [
        "x > y",
        "x == y",
        "x < y",
        "x <= y"
      ],
      "correct": 0,
      "explanation": "x = 5 + 20 = 25; y = 5 + 10/True = 15.0 (True se comportă ca 1). Doar x > y este adevărată."
    },
    {
      "id": "py-084",
      "chapter": "structuri-control",
      "type": "single",
      "question": "In which of the following cases does result become 9?",
      "code": "a = 12\nb = 4\ns = 'He shall not be happy if he does not work'",
      "options": [
        "result = 3 if None else a/b",
        "result = s.find('not') if s else None",
        "result = s.rfind('not') if s else None",
        "result = 5 if len(s) > 4 else 6"
      ],
      "correct": 1,
      "explanation": "s.find('not') întoarce indexul primei apariții a lui 'not', adică 9."
    },
    {
      "id": "py-085",
      "chapter": "structuri-control",
      "type": "single",
      "question": "Which condition is true when age is from 18 through 65, inclusive?",
      "options": [
        "age > 18 and age < 65",
        "age >= 18 and age <= 65",
        "age >= 18 or age <= 65",
        "18 > age > 65"
      ],
      "correct": 1,
      "explanation": "Pentru capete incluse se folosesc >= și <=, legate prin and."
    },
    {
      "id": "py-086",
      "chapter": "structuri-control",
      "type": "single",
      "question": "What is printed?",
      "code": "score = 85\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelse:\n    print(\"C\")",
      "options": [
        "A",
        "B",
        "C",
        "Nothing"
      ],
      "correct": 1,
      "explanation": "Prima condiție e falsă, a doua e adevărată → \"B\"."
    },
    {
      "id": "py-087",
      "chapter": "structuri-control",
      "type": "single",
      "question": "Which keyword is a placeholder that performs no action?",
      "options": [
        "continue",
        "pass",
        "break",
        "while"
      ],
      "correct": 1,
      "explanation": "pass menține blocul valid sintactic fără să execute nimic."
    },
    {
      "id": "py-088",
      "chapter": "structuri-control",
      "type": "single",
      "question": "Which loop iterates through 1, 2, 3, 4, 5?",
      "options": [
        "for week in range(1, 5):",
        "for week in range(1, 6):",
        "for week in range(0, 5):",
        "for week in range(5, 1):"
      ],
      "correct": 1,
      "explanation": "Capătul din dreapta al lui range nu este inclus."
    },
    {
      "id": "py-089",
      "chapter": "structuri-control",
      "type": "single",
      "question": "What does continue do inside a loop?",
      "options": [
        "Stops the program",
        "Ends the loop",
        "Skips the rest of the current iteration",
        "Restarts Python"
      ],
      "correct": 2,
      "explanation": "continue trece imediat la următoarea iterație."
    },
    {
      "id": "py-090",
      "chapter": "structuri-control",
      "type": "single",
      "question": "What does break do inside a loop?",
      "options": [
        "Skips one iteration",
        "Exits the loop",
        "Exits only the if statement",
        "Does nothing"
      ],
      "correct": 1,
      "explanation": "break iese din bucla în care se află."
    },
    {
      "id": "py-091",
      "chapter": "structuri-control",
      "type": "single",
      "question": "What numbers are printed?",
      "code": "for i in range(5):\n    if i == 3:\n        break\n    print(i)",
      "options": [
        "0 1 2",
        "0 1 2 3",
        "1 2 3",
        "0 1 2 3 4"
      ],
      "correct": 0,
      "explanation": "Când i devine 3, break se execută înainte de print."
    },
    {
      "id": "py-092",
      "chapter": "structuri-control",
      "type": "single",
      "question": "What numbers are printed?",
      "code": "for i in range(5):\n    if i == 2:\n        continue\n    print(i)",
      "options": [
        "0 1 2 3 4",
        "0 1 3 4",
        "2",
        "0 1"
      ],
      "correct": 1,
      "explanation": "Pentru i == 2, continue sare peste print doar la acea iterație."
    },
    {
      "id": "py-093",
      "chapter": "structuri-control",
      "type": "single",
      "question": "How many times is the print statement executed?",
      "code": "for day in range(2):\n    for student in range(3):\n        print(day, student)",
      "options": [
        "3",
        "4",
        "6",
        "9"
      ],
      "correct": 2,
      "explanation": "Bucla exterioară rulează de 2 ori, cea interioară de 3 ori: 2 * 3 = 6."
    },
    {
      "id": "py-094",
      "chapter": "structuri-control",
      "type": "single",
      "question": "What is the final value of total?",
      "code": "total = 0\nfor n in range(1, 6):\n    total += n",
      "options": [
        "6",
        "10",
        "15",
        "5"
      ],
      "correct": 2,
      "explanation": "1 + 2 + 3 + 4 + 5 = 15."
    },
    {
      "id": "py-095",
      "chapter": "structuri-control",
      "type": "single",
      "question": "What is printed?",
      "code": "for x in range(1, 4):\n    pass\nprint(x)",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correct": 2,
      "explanation": "range(1, 4) produce 1, 2, 3; după buclă x rămâne 3."
    },
    {
      "id": "py-096",
      "chapter": "structuri-control",
      "type": "single",
      "question": "What is the result?",
      "code": "t = (2, 4, 6, 8, 10, 12)\nd = {1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F'}\nresult = 1\nfor t1 in t:\n    if t1 in d:\n        result += t1\nprint(result)",
      "options": [
        "12",
        "13",
        "19",
        "6"
      ],
      "correct": 1,
      "explanation": "Doar 2, 4 și 6 sunt chei în d: 1 + 2 + 4 + 6 = 13."
    },
    {
      "id": "py-097",
      "chapter": "structuri-control",
      "type": "single",
      "question": "What is the result?",
      "code": "t = (2, 4, 6, 8, 10, 12)\nd = {1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F'}\nresult = 1\nfor t1 in t:\n    if t1 in d:\n        continue\n    else:\n        result += t1\nprint(result)",
      "options": [
        "29",
        "30",
        "31",
        "32"
      ],
      "correct": 2,
      "explanation": "2, 4, 6 sunt chei (se sare peste ele). Se adună 8, 10, 12: 1 + 8 + 10 + 12 = 31."
    },
    {
      "id": "py-098",
      "chapter": "structuri-control",
      "type": "single",
      "question": "What is the result?",
      "code": "values = [[3, 4, 5, 1], [33, 6, 1, 2]]\n\nv = values[0][0]\nfor lst in values:\n    for element in lst:\n        if v > element:\n            v = element\n\nprint(v)",
      "options": [
        "3",
        "2",
        "1",
        "4"
      ],
      "correct": 2,
      "explanation": "Codul găsește minimul tuturor elementelor: 1."
    },
    {
      "id": "py-099",
      "chapter": "structuri-control",
      "type": "single",
      "question": "What is the output?",
      "code": "for i in range(0):\n    print(i)",
      "options": [
        "0",
        "No output",
        "IndentationError",
        "None"
      ],
      "correct": 1,
      "explanation": "range(0) este gol, deci corpul buclei nu se execută niciodată."
    },
    {
      "id": "py-100",
      "chapter": "structuri-control",
      "type": "single",
      "question": "What is the output?",
      "code": "a = [0, 1, 2, 3]\ni = -2\nwhile i not in a:\n    print(i)\n    i += 1",
      "options": [
        "-2 -1",
        "0",
        "Error",
        "Nothing is printed"
      ],
      "correct": 0,
      "explanation": "Se afișează -2 și -1; când i devine 0, 0 este în a și bucla se oprește."
    },
    {
      "id": "py-101",
      "chapter": "structuri-control",
      "type": "single",
      "question": "What is the result?",
      "code": "l = [10, (20,), {30}, {}, {}, [48, 50]]\ncount = 0\nfor i in range(len(l)):\n    if type(l[i]) == list:\n        count += 1\n    elif type(l[i]) == tuple:\n        count += 2\n    elif type(l[i]) == set:\n        count += 3\n    elif type(l[i]) == dict:\n        count += 4\n    else:\n        count += 5\nprint(count)",
      "options": [
        "17",
        "18",
        "19",
        "20"
      ],
      "correct": 2,
      "explanation": "int +5, tuple +2, set +3, {} (dict) +4, {} (dict) +4, list +1 = 19."
    },
    {
      "id": "py-102",
      "chapter": "structuri-control",
      "type": "multiple",
      "question": "With numbers = [10, 20, 30, 40] and x = 0, in which TWO cases is 10 printed? (Choose 2.)",
      "options": [
        "for i in (30, 40, 50):\n    if i in numbers:\n        x = x + 5\nprint(x)",
        "for i in (30, 40, 50):\n    if i not in numbers:\n        x = x + 5\nprint(x)",
        "for i in (30, 40, 50):\n    if i not in numbers:\n        x = x + 10\nprint(x)",
        "for i in (30, 40, 50):\n    if i in numbers:\n        x = x + 10\nprint(x)"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "Cazul 1: 30 și 40 sunt în listă → 5 + 5 = 10. Cazul 3: doar 50 nu e în listă → +10. Cazul 2 dă 5, cazul 4 dă 20."
    },
    {
      "id": "py-103",
      "chapter": "structuri-control",
      "type": "multiple",
      "question": "With l = ['Apple', 'Boy', 'Cat', 'Dog'], in which TWO cases are exactly Boy, Cat and Dog printed (one per line)? (Choose 2.)",
      "options": [
        "for x in l:\n    if len(x) == 3:\n        print(x)",
        "for x in l:\n    if len(x) != 3:\n        print(x)",
        "for x in l:\n    print(x)",
        "l1 = l[1:]\nfor x in l1:\n    print(x)"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "Primul filtrează cuvintele de 3 litere; al patrulea elimină 'Apple' prin slicing. Al doilea afișează doar 'Apple', al treilea afișează toate cuvintele."
    },
    {
      "id": "py-104",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Complete the grade conditions by choosing the correct operator for each blank.",
      "code": "if grade [1] 100:\n    print(\"Outstanding\")\nelif grade [2] 90:\n    print(\"Great\")\nelif grade [3] 70:\n    print(\"Study hard\")\nelse:\n    print(\"Doing well\")",
      "dragItems": [
        {
          "id": "i1",
          "text": ">="
        },
        {
          "id": "i2",
          "text": "!="
        },
        {
          "id": "i3",
          "text": "<="
        },
        {
          "id": "i4",
          "text": "<"
        },
        {
          "id": "i5",
          "text": ">"
        },
        {
          "id": "i6",
          "text": "=="
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i6"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i3"
        }
      ],
      "explanation": "100 este un caz exact (==); 90 se include cu >=; 70 se include cu <=."
    },
    {
      "id": "py-105",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Complete the loop so that it stops when product ID 6 is found.",
      "code": "productIdList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\nindex = 0\n\n[1] index < 10:\n    print(productIdList[index])\n    if productIdList[index] == 6:\n        [2]\n    else:\n        index += 1",
      "dragItems": [
        {
          "id": "i1",
          "text": "for"
        },
        {
          "id": "i2",
          "text": "if"
        },
        {
          "id": "i3",
          "text": "while"
        },
        {
          "id": "i4",
          "text": "break"
        },
        {
          "id": "i5",
          "text": "continue"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i4"
        }
      ],
      "explanation": "Condiția index < 10 cere o buclă while; break oprește bucla când valoarea 6 este găsită."
    },
    {
      "id": "py-106",
      "chapter": "structuri-control",
      "type": "drag_drop",
      "question": "A program must report whether a name is entered in lower case, upper case or mixed case. Drag the 4 correct code segments into the right order.",
      "dragItems": [
        {
          "id": "i1",
          "text": "if name.lower() == name:\n    print(name, \"is all lower case.\")"
        },
        {
          "id": "i2",
          "text": "else:\n    print(name, \"is lower case.\")"
        },
        {
          "id": "i3",
          "text": "name = input(\"Enter your name: \")"
        },
        {
          "id": "i4",
          "text": "elif name.upper() == name:\n    print(name, \"is all upper case.\")"
        },
        {
          "id": "i5",
          "text": "else:\n    print(name, \"is upper case.\")"
        },
        {
          "id": "i6",
          "text": "else:\n    print(name, \"is mixed case.\")"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Linia 1",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Linia 2",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Linia 3",
          "correctItemId": "i4"
        },
        {
          "id": "z4",
          "label": "Linia 4",
          "correctItemId": "i6"
        }
      ],
      "explanation": "Se citește numele, se testează întâi dacă e doar cu minuscule (if), apoi doar cu majuscule (elif); else acoperă cazul mixt. Cele două segmente else rămase sunt distractori."
    },
    {
      "id": "py-107",
      "chapter": "structuri-control",
      "type": "drag_drop",
      "question": "Arrange the reward logic in the correct order (indentation matters).",
      "dragItems": [
        {
          "id": "i1",
          "text": "        print(\"Send golf balls\")"
        },
        {
          "id": "i2",
          "text": "if monthlySales > 100000:"
        },
        {
          "id": "i3",
          "text": "    if region == \"North\" and season == \"Winter\":"
        },
        {
          "id": "i4",
          "text": "        print(\"Send skis\")"
        },
        {
          "id": "i5",
          "text": "    else:"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Linia 1",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Linia 2",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Linia 3",
          "correctItemId": "i4"
        },
        {
          "id": "z4",
          "label": "Linia 4",
          "correctItemId": "i5"
        },
        {
          "id": "z5",
          "label": "Linia 5",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Este un if imbricat: întâi condiția pe vânzări, apoi (în interior) condiția pe regiune și sezon; operatorul logic corect este and."
    },
    {
      "id": "py-108",
      "chapter": "structuri-control",
      "type": "drag_drop",
      "question": "Arrange the lines of a while loop that prints the numbers 1 through 3.",
      "dragItems": [
        {
          "id": "i1",
          "text": "i = 1"
        },
        {
          "id": "i2",
          "text": "    print(i)"
        },
        {
          "id": "i3",
          "text": "    i += 1"
        },
        {
          "id": "i4",
          "text": "while i <= 3:"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Linia 1",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Linia 2",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Linia 3",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "Linia 4",
          "correctItemId": "i3"
        }
      ],
      "explanation": "Se inițializează contorul, se verifică condiția, se afișează valoarea, apoi se incrementează."
    },
    {
      "id": "py-109",
      "chapter": "structuri-control",
      "type": "drag_drop",
      "question": "Arrange a validation loop that asks for a location until one of the four allowed locations is entered.",
      "dragItems": [
        {
          "id": "i1",
          "text": "while response not in locations:"
        },
        {
          "id": "i2",
          "text": "print(response)"
        },
        {
          "id": "i3",
          "text": "locations = [\"North\", \"South\", \"West\", \"East\"]"
        },
        {
          "id": "i4",
          "text": "    print(\"Try again.\")"
        },
        {
          "id": "i5",
          "text": "    response = input(\"Enter a location: \")"
        },
        {
          "id": "i6",
          "text": "response = input(\"Enter a location: \")"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Linia 1",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Linia 2",
          "correctItemId": "i6"
        },
        {
          "id": "z3",
          "label": "Linia 3",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "Linia 4",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "Linia 5",
          "correctItemId": "i5"
        },
        {
          "id": "z6",
          "label": "Linia 6",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Prima citire se face înainte de while; în interiorul buclei se cere din nou valoarea până devine validă."
    },
    {
      "id": "py-110",
      "chapter": "structuri-control",
      "type": "drag_drop",
      "question": "Arrange the grade conditions in the correct order.",
      "dragItems": [
        {
          "id": "i1",
          "text": "    letter_grade = \"B\""
        },
        {
          "id": "i2",
          "text": "elif grade >= 70:"
        },
        {
          "id": "i3",
          "text": "    letter_grade = \"A\""
        },
        {
          "id": "i4",
          "text": "else:"
        },
        {
          "id": "i5",
          "text": "if grade >= 90:"
        },
        {
          "id": "i6",
          "text": "elif grade >= 65:"
        },
        {
          "id": "i7",
          "text": "    letter_grade = \"C\""
        },
        {
          "id": "i8",
          "text": "elif grade >= 80:"
        },
        {
          "id": "i9",
          "text": "    letter_grade = \"D\""
        },
        {
          "id": "i10",
          "text": "    letter_grade = \"F\""
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Linia 1",
          "correctItemId": "i5"
        },
        {
          "id": "z2",
          "label": "Linia 2",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Linia 3",
          "correctItemId": "i8"
        },
        {
          "id": "z4",
          "label": "Linia 4",
          "correctItemId": "i1"
        },
        {
          "id": "z5",
          "label": "Linia 5",
          "correctItemId": "i2"
        },
        {
          "id": "z6",
          "label": "Linia 6",
          "correctItemId": "i7"
        },
        {
          "id": "z7",
          "label": "Linia 7",
          "correctItemId": "i6"
        },
        {
          "id": "z8",
          "label": "Linia 8",
          "correctItemId": "i9"
        },
        {
          "id": "z9",
          "label": "Linia 9",
          "correctItemId": "i4"
        },
        {
          "id": "z10",
          "label": "Linia 10",
          "correctItemId": "i10"
        }
      ],
      "explanation": "Condițiile se verifică de la cea mai mare la cea mai mică; după ce 90+ e exclus, elif grade >= 80 acoperă automat 80–89 etc."
    },
    {
      "id": "py-111",
      "chapter": "structuri-control",
      "type": "drag_drop",
      "question": "Arrange the code segments so that it prints all prime numbers from 2 through 100.",
      "dragItems": [
        {
          "id": "i1",
          "text": "p = 2"
        },
        {
          "id": "i2",
          "text": "        print(p)"
        },
        {
          "id": "i3",
          "text": "    p = p + 1"
        },
        {
          "id": "i4",
          "text": "            is_prime = False"
        },
        {
          "id": "i5",
          "text": "        if p % i == 0:"
        },
        {
          "id": "i6",
          "text": "    for i in range(2, p):"
        },
        {
          "id": "i7",
          "text": "while p <= 100:"
        },
        {
          "id": "i8",
          "text": "    if is_prime == True:"
        },
        {
          "id": "i9",
          "text": "            break"
        },
        {
          "id": "i10",
          "text": "    is_prime = True"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Linia 1",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Linia 2",
          "correctItemId": "i7"
        },
        {
          "id": "z3",
          "label": "Linia 3",
          "correctItemId": "i10"
        },
        {
          "id": "z4",
          "label": "Linia 4",
          "correctItemId": "i6"
        },
        {
          "id": "z5",
          "label": "Linia 5",
          "correctItemId": "i5"
        },
        {
          "id": "z6",
          "label": "Linia 6",
          "correctItemId": "i4"
        },
        {
          "id": "z7",
          "label": "Linia 7",
          "correctItemId": "i9"
        },
        {
          "id": "z8",
          "label": "Linia 8",
          "correctItemId": "i8"
        },
        {
          "id": "z9",
          "label": "Linia 9",
          "correctItemId": "i2"
        },
        {
          "id": "z10",
          "label": "Linia 10",
          "correctItemId": "i3"
        }
      ],
      "explanation": "Pentru fiecare p presupunem că e prim, căutăm un divizor între 2 și p-1, ne oprim la primul găsit și afișăm p doar dacă is_prime a rămas True."
    },
    {
      "id": "py-112",
      "chapter": "structuri-control",
      "type": "drag_drop",
      "question": "Arrange the decision structure that computes a real b-th root of a. Assume b is a positive integer. For a negative a and an even b, report that no real root exists.",
      "dragItems": [
        {
          "id": "i1",
          "text": "    answer = a ** (1 / b)"
        },
        {
          "id": "i2",
          "text": "    else:"
        },
        {
          "id": "i3",
          "text": "        answer = \"No real root\""
        },
        {
          "id": "i4",
          "text": "    if b % 2 == 0:"
        },
        {
          "id": "i5",
          "text": "        answer = -((-a) ** (1 / b))"
        },
        {
          "id": "i6",
          "text": "else:"
        },
        {
          "id": "i7",
          "text": "if a >= 0:"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Linia 1",
          "correctItemId": "i7"
        },
        {
          "id": "z2",
          "label": "Linia 2",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Linia 3",
          "correctItemId": "i6"
        },
        {
          "id": "z4",
          "label": "Linia 4",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "Linia 5",
          "correctItemId": "i3"
        },
        {
          "id": "z6",
          "label": "Linia 6",
          "correctItemId": "i2"
        },
        {
          "id": "z7",
          "label": "Linia 7",
          "correctItemId": "i5"
        }
      ],
      "explanation": "Pentru a >= 0 se aplică direct formula. Pentru a negativ și b par rădăcina nu e reală; pentru b impar rezultatul real este negativ: -((-a)**(1/b))."
    },
    {
      "id": "py-113",
      "chapter": "structuri-control",
      "type": "single",
      "question": "Which code block correctly assigns a rating for every age, including an unknown (None) age?",
      "options": [
        "if age is None:\n    rating = \"C\"\nelif age < 13:\n    rating = \"C\"\nelif age < 18:\n    rating = \"T\"\nelse:\n    rating = \"A\"",
        "if age < 13:\n    rating = \"C\"\nelif age < 18:\n    rating = \"T\"\nelif age is None:\n    rating = \"C\"\nelse:\n    rating = \"A\"",
        "if age is None:\n    rating = \"C\"\nelif age < 18:\n    rating = \"T\"\nelif age < 13:\n    rating = \"C\"\nelse:\n    rating = \"A\"",
        "if age is None:\n    rating = \"A\"\nelif age < 13:\n    rating = \"C\"\nelif age < 18:\n    rating = \"T\"\nelse:\n    rating = \"C\""
      ],
      "correct": 0,
      "explanation": "None trebuie verificat primul (altfel comparația cu < dă TypeError). Apoi: sub 13 → C, 13–17 → T, restul → A. În varianta 3, condiția age < 18 ascunde age < 13."
    },
    {
      "id": "py-114",
      "chapter": "structuri-control",
      "type": "single",
      "question": "Does the grade-converter code require a change to its if/elif conditions?",
      "code": "if marks >= 90:\n    grade = 'A'\nelif marks >= 80:\n    grade = 'B'\nelif marks >= 70:\n    grade = 'C'\nelif marks >= 65:\n    grade = 'D'\nelse:\n    grade = 'E'",
      "options": [
        "Line 1 must use marks <= 90.",
        "Line 2 must also check marks <= 90.",
        "Line 3 must also check marks <= 80.",
        "No changes are required."
      ],
      "correct": 3,
      "explanation": "Condițiile sunt verificate de sus în jos: dacă marks >= 90 e fals, elif marks >= 80 acoperă automat 80–89 etc."
    },
    {
      "id": "py-115",
      "chapter": "structuri-control",
      "type": "single",
      "question": "Which statement should be used when a divisor is found, so that the inner search stops immediately?",
      "code": "for i in range(2, p):\n    if p % i == 0:\n        is_prime = False\n        # missing statement",
      "options": [
        "continue",
        "pass",
        "break",
        "return True"
      ],
      "correct": 2,
      "explanation": "După ce s-a găsit un divizor nu mai trebuie testați ceilalți; break iese din bucla for interioară."
    },
    {
      "id": "py-116",
      "chapter": "structuri-date",
      "type": "single",
      "question": "Which Python data structure does NOT allow its elements to be changed after creation?",
      "options": [
        "list",
        "dict",
        "tuple",
        "set"
      ],
      "correct": 2,
      "explanation": "tuple este imutabil: odată creat, conținutul său nu mai poate fi modificat."
    },
    {
      "id": "py-117",
      "chapter": "structuri-date",
      "type": "single",
      "question": "Which line of code assigns <class 'list'> to x?",
      "code": "t = ([10, 20], 10, False)",
      "options": [
        "x = type(t)",
        "x = type(t[0])",
        "x = type(t[1])",
        "x = type(t[0:])"
      ],
      "correct": 1,
      "explanation": "t[0] este [10, 20], o listă. type(t) și type(t[0:]) sunt tuple, iar type(t[1]) este int."
    },
    {
      "id": "py-118",
      "chapter": "structuri-date",
      "type": "multiple",
      "question": "Which TWO expressions access 'Mango'? (Choose 2.)",
      "code": "items = ['Apple', 'Banana', 'Carrot', 'Mango']",
      "options": [
        "items[3]",
        "items[4]",
        "items[-1]",
        "items[0]"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "items[3] și items[-1] indică ultimul element. items[4] dă IndexError, iar items[0] este 'Apple'."
    },
    {
      "id": "py-119",
      "chapter": "structuri-date",
      "type": "single",
      "question": "A list named colors contains 200 colors. You need to slice the list to display every other color, starting with the second color. Which code should you use?",
      "options": [
        "colors[1:2]",
        "colors[::2]",
        "colors[2:2]",
        "colors[1::2]"
      ],
      "correct": 3,
      "explanation": "colors[1::2] pornește de la indexul 1 (al doilea element) și ia din 2 în 2."
    },
    {
      "id": "py-120",
      "chapter": "structuri-date",
      "type": "multiple",
      "question": "A list named employees contains 200 employee names, the last five being company management. Which TWO slices display all employees excluding management? (Choose 2.)",
      "options": [
        "employees[0:-4]",
        "employees[1:-5]",
        "employees[:-5]",
        "employees[0:-5]",
        "employees[1:-4]"
      ],
      "correct": [
        2,
        3
      ],
      "explanation": "employees[:-5] și employees[0:-5] sunt echivalente și exclud exact ultimele 5 elemente."
    },
    {
      "id": "py-121",
      "chapter": "structuri-date",
      "type": "multiple",
      "question": "A list named employees contains 600 employee names, the last 3 being company management. Which TWO slices display all employees excluding management? (Choose 2.)",
      "options": [
        "employees[1:-2]",
        "employees[:-3]",
        "employees[1:-3]",
        "employees[0:-2]",
        "employees[0:-3]"
      ],
      "correct": [
        1,
        4
      ],
      "explanation": "employees[:-3] și employees[0:-3] exclud ultimele 3 elemente."
    },
    {
      "id": "py-122",
      "chapter": "structuri-date",
      "type": "single",
      "question": "A list named employees contains 500 names, the last 3 being company management. Which expression represents only the management employees?",
      "options": [
        "employees[497:]",
        "employees[-3:]",
        "employees[497:500]",
        "All of the above"
      ],
      "correct": 3,
      "explanation": "Toate trei selectează ultimele 3 elemente (indecșii 497, 498, 499)."
    },
    {
      "id": "py-123",
      "chapter": "structuri-date",
      "type": "single",
      "question": "What is the output value?",
      "code": "list_1 = [1, 2]\nlist_2 = [3, 4]\nlist_3 = list_1 + list_2\nlist_4 = list_3 * 3\nprint(list_4)",
      "options": [
        "[3, 6, 9, 12]",
        "[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]",
        "[[1, 2], [3, 4], [1, 2], [3, 4], [1, 2], [3, 4]]",
        "[[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]"
      ],
      "correct": 1,
      "explanation": "list_3 = [1,2,3,4]; * 3 repetă lista de 3 ori (nu înmulțește elementele)."
    },
    {
      "id": "py-124",
      "chapter": "structuri-date",
      "type": "single",
      "question": "What is the output?",
      "code": "names = ['itvedant', 'Thane', 'Andheri', 'Navi Mumbai']\nprint(names[-1][-1])",
      "options": [
        "Navi Mumbai",
        "Mumbai",
        "i",
        "a"
      ],
      "correct": 2,
      "explanation": "names[-1] este 'Navi Mumbai', iar [-1] al acestui șir este ultimul caracter: 'i'."
    },
    {
      "id": "py-125",
      "chapter": "structuri-date",
      "type": "single",
      "question": "Which of the following does NOT print 'CAT' to the console?",
      "code": "x = 'ACROTE'\ny = 'APPLE'\nz = 'TOMATO'",
      "options": [
        "print(x[1] + y[0] + z[0])",
        "print(x[2] + y[1] + z[1])",
        "print(x[-5] + y[0] + z[0])",
        "print(x[-5] + y[0] + z[-2])"
      ],
      "correct": 1,
      "explanation": "x[2]+y[1]+z[1] = 'R'+'P'+'O' = 'RPO'. Celelalte trei dau 'CAT'."
    },
    {
      "id": "py-126",
      "chapter": "structuri-date",
      "type": "single",
      "question": "What is the result?",
      "code": "s = 'Python is easy'\ns1 = s[-7:]\ns2 = s[-4:]\nprint(s1 + s2)",
      "options": [
        "is easyeasy",
        "easyeasy",
        "iseasyeasy",
        "s easyeasy",
        "is easy easy"
      ],
      "correct": 0,
      "explanation": "s[-7:] = 'is easy', s[-4:] = 'easy' → 'is easyeasy'."
    },
    {
      "id": "py-127",
      "chapter": "structuri-date",
      "type": "single",
      "question": "Which statement inserted at Line-1 makes the program print 2?",
      "code": "s = 'Python is easy'\ns1 = s[6:-4]\n# Line-1\nprint(len(s2))",
      "options": [
        "s2 = s1.lstrip()",
        "s2 = s1.rstrip()",
        "s2 = s1.lrstrip()",
        "s2 = s1.strip()"
      ],
      "correct": 3,
      "explanation": "s1 = ' is ' (spații la ambele capete). Doar strip() le elimină pe ambele, rămâne 'is' (lungime 2). lrstrip() nu există."
    },
    {
      "id": "py-128",
      "chapter": "structuri-date",
      "type": "multiple",
      "question": "Which TWO lines print 'AA' to the console? (Choose 2.)",
      "code": "b = 'BANANA'",
      "options": [
        "print(b[1] + b[2])",
        "print(b[1] + b[3])",
        "print(b[2] + b[4])",
        "print(b[3] + b[5])"
      ],
      "correct": [
        1,
        3
      ],
      "explanation": "În 'BANANA' literele A sunt la indecșii 1, 3 și 5. b[1]+b[3] și b[3]+b[5] dau 'AA'; b[1]+b[2] dă 'AN', iar b[2]+b[4] dă 'NN'."
    },
    {
      "id": "py-129",
      "chapter": "structuri-date",
      "type": "single",
      "question": "Which line of code assigns the string 'TT' to output?",
      "code": "x = 'TEXT'",
      "options": [
        "output = x[1] + x[1]",
        "output = x[1] + x[4]",
        "output = x[0] + x[2]",
        "output = x[0] + x[-1]"
      ],
      "correct": 3,
      "explanation": "x[0] = 'T' și x[-1] = 'T' (ultimul caracter)."
    },
    {
      "id": "py-130",
      "chapter": "structuri-date",
      "type": "single",
      "question": "Which slice reverses a string?",
      "options": [
        "[::1]",
        "[1::]",
        "[-1::]",
        "[::-1]"
      ],
      "correct": 3,
      "explanation": "Al treilea element din slice este pasul; pasul -1 parcurge șirul invers."
    },
    {
      "id": "py-131",
      "chapter": "structuri-date",
      "type": "single",
      "question": "Which index selects the last item in a list?",
      "options": [
        "0",
        "1",
        "-1",
        "-2"
      ],
      "correct": 2,
      "explanation": "-1 este ultimul element; -2 este penultimul."
    },
    {
      "id": "py-132",
      "chapter": "structuri-date",
      "type": "single",
      "question": "What is the result of the slice?",
      "code": "text = \"Python\"\nprint(text[1:4])",
      "options": [
        "\"yth\"",
        "\"ytho\"",
        "\"Pyt\"",
        "\"thon\""
      ],
      "correct": 0,
      "explanation": "Începutul este inclus, sfârșitul nu: pozițiile 1, 2, 3 → \"yth\"."
    },
    {
      "id": "py-133",
      "chapter": "structuri-date",
      "type": "multiple",
      "question": "After sorting, which TWO expressions print rook? (Choose 2.)",
      "code": "pieces = [\"king\", \"queen\", \"rook\", \"bishop\", \"knight\", \"pawn\"]\npieces.sort()",
      "options": [
        "pieces[6]",
        "pieces[5]",
        "pieces[3]",
        "pieces[-1]"
      ],
      "correct": [
        1,
        3
      ],
      "explanation": "După sortare: bishop, king, knight, pawn, queen, rook. rook are indexul 5 sau -1. Indexul 6 nu există, iar 3 este pawn."
    },
    {
      "id": "py-134",
      "chapter": "structuri-date",
      "type": "single",
      "question": "Which method adds an item to the end of a list?",
      "options": [
        "add()",
        "append()",
        "insertEnd()",
        "push()"
      ],
      "correct": 1,
      "explanation": "list.append(valoare) adaugă la sfârșit."
    },
    {
      "id": "py-135",
      "chapter": "structuri-date",
      "type": "single",
      "question": "What is the list after the code runs?",
      "code": "items = ['A', 'B']\nitems.insert(1, 'X')",
      "options": [
        "['A', 'B', 'X']",
        "['A', 'X', 'B']",
        "['X', 'A', 'B']",
        "['A', 'B']"
      ],
      "correct": 1,
      "explanation": "insert(1, 'X') inserează la indexul 1 și mută restul elementelor."
    },
    {
      "id": "py-136",
      "chapter": "structuri-date",
      "type": "single",
      "question": "Which method removes the first occurrence of a specific value from a list?",
      "options": [
        "delete()",
        "remove()",
        "discard()",
        "popvalue()"
      ],
      "correct": 1,
      "explanation": "list.remove(valoare) caută valoarea și o șterge prima dată când apare."
    },
    {
      "id": "py-137",
      "chapter": "structuri-date",
      "type": "single",
      "question": "What does pop() with no index return?",
      "options": [
        "The first item",
        "The last item",
        "The list length",
        "None"
      ],
      "correct": 1,
      "explanation": "list.pop() șterge și întoarce ultimul element."
    },
    {
      "id": "py-138",
      "chapter": "structuri-date",
      "type": "single",
      "question": "What is printed by the final print(x)?",
      "code": "x = [13, 4, 17, 10]\nw = x[1:]\nu = x[1:]\ny = x\nu[0] = 50\ny[1] = 40\nprint(x)",
      "options": [
        "[13, 40, 17, 10]",
        "[50, 40, 10]",
        "[13, 4, 17, 10]",
        "[50, 40, 17, 10]"
      ],
      "correct": 0,
      "explanation": "u = x[1:] este o copie separată, deci u[0] = 50 nu modifică x. y = x este același obiect, deci y[1] = 40 modifică x."
    },
    {
      "id": "py-139",
      "chapter": "structuri-date",
      "type": "single",
      "question": "What is printed?",
      "code": "s = 'AB CD'\nitems = list(s)\nitems.append('EF')\nprint(items)",
      "options": [
        "['A', 'B', 'C', 'D', 'E', 'F']",
        "['AB CD', 'EF']",
        "['A', 'B', ' ', 'C', 'D', 'EF']",
        "['A', 'B', 'C', 'D', 'EF']"
      ],
      "correct": 2,
      "explanation": "list(s) separă fiecare caracter (inclusiv spațiul); append('EF') adaugă 'EF' ca UN singur element la final."
    },
    {
      "id": "py-140",
      "chapter": "structuri-date",
      "type": "single",
      "question": "What is the result of this code?",
      "code": "a = ['a', 'b', 'c', 'd']\nfor i in a:\n    a.append(i.upper())\nprint(a)",
      "options": [
        "['A', 'B', 'C', 'D']",
        "['a', 'b', 'c', 'd']",
        "SyntaxError",
        "The loop continually appends items and does not terminate normally; resource exhaustion may stop it"
      ],
      "correct": 3,
      "explanation": "Iteration sees newly appended list elements, so the loop keeps extending the list. MemoryError or external termination may occur, but a specific termination error is not guaranteed. The final print is not normally reached."
    },
    {
      "id": "py-141",
      "chapter": "structuri-date",
      "type": "dropdown",
      "question": "Troubleshoot the room lookup program: choose the correct answer for each item.",
      "code": "rooms = {1: 'Left Conference Room', 2: 'Right Conference Room'}\nroom = input('Enter the room number: ')\nif room not in rooms:\n    print('The room does not exist.')\nelse:\n    print('The room name is ' + rooms[room])",
      "dragItems": [
        {
          "id": "i1",
          "text": "int"
        },
        {
          "id": "i2",
          "text": "Mismatched data type(s)"
        },
        {
          "id": "i3",
          "text": "int and string"
        },
        {
          "id": "i4",
          "text": "Misnamed variable(s)"
        },
        {
          "id": "i5",
          "text": "float and int"
        },
        {
          "id": "i6",
          "text": "Invalid syntax"
        },
        {
          "id": "i7",
          "text": "bool and string"
        },
        {
          "id": "i8",
          "text": "string"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Data types stored in the rooms dictionary (keys and values)",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Data type of the variable room",
          "correctItemId": "i8"
        },
        {
          "id": "z3",
          "label": "Why a valid room number such as 1 is not found on line 03",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Cheile sunt int, valorile str. input() întoarce str, iar '1' nu este același lucru cu 1, deci testul \"in\" nu găsește cheia: tipuri de date nepotrivite."
    },
    {
      "id": "py-142",
      "chapter": "structuri-date",
      "type": "dropdown",
      "question": "Select the output of each print statement.",
      "code": "a = 'Config1'\nprint(a)        # (1)\nb = a\na += 'Config2'\nprint(a)        # (2)\nprint(b)        # (3)",
      "dragItems": [
        {
          "id": "i1",
          "text": "Config1"
        },
        {
          "id": "i2",
          "text": "Config2"
        },
        {
          "id": "i3",
          "text": "Config1Config2"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Output of print (1)",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Output of print (2)",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Output of print (3)",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Șirurile sunt imutabile: a += 'Config2' creează un șir nou pentru a, iar b rămâne legat de 'Config1'."
    },
    {
      "id": "py-143",
      "chapter": "input-output",
      "type": "single",
      "question": "What data type does input() return?",
      "code": "age = input(\"Age: \")",
      "options": [
        "int",
        "float",
        "str",
        "bool"
      ],
      "correct": 2,
      "explanation": "input() întoarce mereu un șir (str), chiar dacă utilizatorul tastează cifre."
    },
    {
      "id": "py-144",
      "chapter": "input-output",
      "type": "single",
      "question": "Which line correctly reads an integer age?",
      "options": [
        "age = input(\"Age: \")",
        "age = int(input(\"Age: \"))",
        "age = str(input(\"Age: \"))",
        "int = input(\"Age: \")"
      ],
      "correct": 1,
      "explanation": "input() citește text, iar int() îl convertește într-un număr întreg."
    },
    {
      "id": "py-145",
      "chapter": "input-output",
      "type": "single",
      "question": "A script asks the user for a value that must be used as a whole number in a calculation, even if the user enters a decimal value (for example 4.7). Which statement should you use?",
      "options": [
        "totalItems = input(\"How many items would you like?\")",
        "totalItems = float(input(\"How many items would you like?\"))",
        "totalItems = int(input(\"How many items would you like?\"))",
        "totalItems = int(float(input(\"How many items would you like?\")))"
      ],
      "correct": 3,
      "explanation": "int(\"4.7\") dă ValueError. float() acceptă și text zecimal, iar int() apoi elimină partea zecimală: int(float(input(...)))."
    },
    {
      "id": "py-146",
      "chapter": "input-output",
      "type": "single",
      "question": "Which code should be written at Line-1 to print the sum of the two numbers entered by the user?",
      "code": "x = input('Enter First Number:')\ny = input('Enter Second Number:')\n# Line-1",
      "options": [
        "print('The Result:' + (int(x) + int(y)))",
        "print('The Result:' + (int(x + y)))",
        "print('The Result:' + str(int(x) + int(y)))",
        "print('The Result:' + str(int(x + y)))"
      ],
      "correct": 2,
      "explanation": "input() întoarce str. Fiecare valoare se convertește la int pentru adunare, iar suma se convertește la str pentru concatenare cu textul."
    },
    {
      "id": "py-147",
      "chapter": "input-output",
      "type": "single",
      "question": "Which code inserted at Line-1 prints 20 to the console if the user enters 15?",
      "code": "count = input('Enter the number of customers of the bank:')\n# Line-1\nprint(output)",
      "options": [
        "output = int(count) + 5",
        "output = count + 5",
        "output = str(count) + 5",
        "output = float(count) + 5"
      ],
      "correct": 0,
      "explanation": "count este un str ('15'); int(count) + 5 = 20. float(count) + 5 ar da 20.0."
    },
    {
      "id": "py-148",
      "chapter": "input-output",
      "type": "single",
      "question": "Which code should you write at line 02?",
      "code": "print('What is your name?')\n# line 02\nprint(name)",
      "options": [
        "name = input",
        "input(name)",
        "name = input()",
        "input(\"name\")"
      ],
      "correct": 2,
      "explanation": "name = input() citește valoarea și o memorează în variabila name, folosită apoi de print."
    },
    {
      "id": "py-149",
      "chapter": "input-output",
      "type": "single",
      "question": "The program must calculate and print the number of years of service. Which code should you use at line 03?",
      "code": "start = input(\"How old were you on your start date?\")\nend = input(\"How old are you today?\")\n# line 03",
      "options": [
        "print(\"congratulations on \" + int(end - start) + \" years of service!\")",
        "print(\"congratulations on \" + (int(end) - int(start)) + \" years of service!\")",
        "print(\"congratulations on \" + str(end - start) + \" years of service!\")",
        "print(\"congratulations on \" + str(int(end) - int(start)) + \" years of service!\")"
      ],
      "correct": 3,
      "explanation": "Valorile sunt str: se convertesc la int pentru scădere, apoi rezultatul la str pentru concatenare."
    },
    {
      "id": "py-150",
      "chapter": "input-output",
      "type": "multiple",
      "question": "A script reads an item name and a quantity and must print them in a comma-delimited format: strings enclosed in double quotes, numbers not enclosed in quotes, items separated by a comma. Which TWO code segments meet the requirements? (Choose 2.) Assume the item field contains no quote characters or embedded newlines and the quantity field contains digits only.",
      "code": "item = input('Enter the item name: ')\nsales = input('Enter the quantity: ')",
      "options": [
        "print('\"{0}\",{1}'.format(item, sales))",
        "print(item + ',' + sales)",
        "print('\"' + item + '\",' + sales)",
        "print(\"{0},{1}\".format(item, sales))"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "Variantele 1 și 3 pun numele între ghilimele duble și lasă cantitatea fără ghilimele. Variantele 2 și 4 nu pun ghilimele în jurul șirului."
    },
    {
      "id": "py-151",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Assume age and year inputs are valid decimal integers. Select the data type of each variable.",
      "code": "age = input('Enter your age: ')\nyear = input('Enter the four digit year: ')\nborn = int(year) - int(age)\nmessage = 'You were born in ' + str(born)\nprint(message)",
      "dragItems": [
        {
          "id": "i1",
          "text": "bool"
        },
        {
          "id": "i2",
          "text": "str"
        },
        {
          "id": "i3",
          "text": "float"
        },
        {
          "id": "i4",
          "text": "int"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "age",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "born",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "message",
          "correctItemId": "i2"
        }
      ],
      "explanation": "input() returns str. int(year) - int(age) produces an int. Concatenating with str(born) produces a str. eval() should not be used to parse untrusted numeric input."
    },
    {
      "id": "py-152",
      "chapter": "input-output",
      "type": "single",
      "question": "Which print() statement should be placed at Line-1 to display the average rating rounded to two decimal places?",
      "code": "sum = count = done = 0\naverage = 0.0\nwhile done != -1:\n    rating = float(input('Enter Next Rating(1-5), -1 for done'))\n    if rating == -1:\n        break\n    sum += rating\n    count += 1\n    average = float(sum / count)\n# Line-1",
      "options": [
        "print('The average star rating for the new coffee is: {:.2f}'.format(average))",
        "print('The average star rating for the new coffee is: {:.2d}'.format(average))",
        "print('The average star rating for the new coffee is: {:2f}'.format(average))",
        "print('The average star rating for the new coffee is: {:2.2d}'.format(average))"
      ],
      "correct": 0,
      "explanation": "{:.2f} rotunjește la 2 zecimale. {:.2d} și {:2.2d} sunt invalide pentru float (d = întreg), iar {:2f} setează doar lățimea."
    },
    {
      "id": "py-153",
      "chapter": "input-output",
      "type": "single",
      "question": "What is the output? Assume an English-language locale.",
      "code": "import datetime\nd = datetime.datetime(2017, 4, 7)\nprint('{:%B-%d-%y}'.format(d))\n\nnum = 1234567.890\nprint('{:,.4f}'.format(num))",
      "options": [
        "2017-April-07\n1,234,567.890",
        "Apr-07-2017\n1,234,567,8900",
        "April-07-17\n1,234,567.8900",
        "April-07-17\n1234567.89"
      ],
      "correct": 2,
      "explanation": "%B = numele complet al lunii, %d = ziua, %y = anul pe 2 cifre → April-07-17. {:,.4f} pune separator de mii și 4 zecimale → 1,234,567.8900."
    },
    {
      "id": "py-154",
      "chapter": "input-output",
      "type": "single",
      "question": "What is the output?",
      "code": "x = \"ITVEDANT\"\nprint(\"%20s\", x)",
      "options": [
        "ITVEDANT, preceded by 12 spaces",
        "ITVEDANT, followed by 12 spaces",
        "%20s ITVEDANT",
        "SyntaxError"
      ],
      "correct": 2,
      "explanation": "Lipsește operatorul %: print primește două argumente separate, deci afișează literal \"%20s\" urmat de ITVEDANT. Pentru aliniere ar fi fost print(\"%20s\" % x)."
    },
    {
      "id": "py-155",
      "chapter": "input-output",
      "type": "single",
      "question": "What is the output?",
      "code": "d = '{a}{b}{a}'.format(a='hello', b='world')\nprint(d)",
      "options": [
        "hello world",
        "hello world hello",
        "helloworldhello",
        "hello hello world"
      ],
      "correct": 2,
      "explanation": "Șablonul înlocuiește {a}→hello, {b}→world, {a}→hello, fără spații între ele."
    },
    {
      "id": "py-156",
      "chapter": "input-output",
      "type": "single",
      "question": "Which of the following statements about number formatting are true?",
      "code": "1. \"V:{:.2f}\".format(123.45678)   prints V:123.46\n2. \"V:{:.2f}\".format(123.4)       prints V:123.40\n3. \"V:{:8.2f}\".format(1.45678)    prints V:    1.46\n4. \"V:{:08.2f}\".format(1.45678)   prints V:00001.46",
      "options": [
        "Only 1 and 2",
        "Only 1 and 3",
        "Only 2 and 4",
        "1, 2, 3 and 4"
      ],
      "correct": 3,
      "explanation": "Toate sunt corecte: .2f rotunjește la 2 zecimale; 8.2f aliniază pe 8 caractere cu spații; 08.2f completează cu zerouri."
    },
    {
      "id": "py-157",
      "chapter": "input-output",
      "type": "single",
      "question": "Which f-string prints the value of items?",
      "options": [
        "f\"We have {items} items.\"",
        "\"We have {items} items.\"",
        "f\"We have (items) items.\"",
        "\"We have \" + items + \" items.\""
      ],
      "correct": 0,
      "explanation": "Într-un f-string, expresiile se pun între acolade."
    },
    {
      "id": "py-158",
      "chapter": "input-output",
      "type": "single",
      "question": "Which format specification right-aligns a value in a field 6 characters wide?",
      "options": [
        "{:6<}",
        "{:>6}",
        "{:<6}",
        "{:^6}"
      ],
      "correct": 1,
      "explanation": "> înseamnă aliniere la dreapta, iar 6 este lățimea câmpului."
    },
    {
      "id": "py-159",
      "chapter": "input-output",
      "type": "single",
      "question": "To generate the most precise result, which functions should replace xxx and yyy?",
      "code": "distance = xxx(input('Enter the distance travelled in feet:'))   # Line-1\ndistance_miles = distance / 5280\ntime = yyy(input('Enter the time elapsed in seconds:'))         # Line-2\ntime_hours = time / 3600\nvelocity = distance_miles / time_hours\nprint('The average velocity:', velocity, 'miles/hour')",
      "options": [
        "xxx = float and yyy = float",
        "xxx = float and yyy = int",
        "xxx = int and yyy = float",
        "xxx = int and yyy = int"
      ],
      "correct": 0,
      "explanation": "Distanța și timpul pot avea zecimale; float păstrează precizia, int ar pierde partea zecimală."
    },
    {
      "id": "py-160",
      "chapter": "input-output",
      "type": "single",
      "question": "You need to read and write data to a text file. If the file does not exist it must be created. If the file has content, the content must be removed. Which code should you use?",
      "options": [
        "open(\"local_data\", \"r+\")",
        "open(\"local_data\", \"w+\")",
        "open(\"local_data\", \"r\")",
        "open(\"local_data\", \"w\")"
      ],
      "correct": 1,
      "explanation": "\"w+\" creează fișierul dacă nu există, îi golește conținutul și permite citire și scriere. \"w\" nu permite citirea."
    },
    {
      "id": "py-161",
      "chapter": "input-output",
      "type": "single",
      "question": "For Python open() in modes r and w, with a writable parent directory and sufficient permissions, which listed statements are true?",
      "options": [
        "When you open a file for reading, if the file does not exist, an error occurs",
        "When you open a file for writing, if the file does not exist, a new file is created",
        "When you open a file for writing, if the file exists, the existing file is overwritten",
        "All of the above"
      ],
      "correct": 3,
      "explanation": "Toate afirmațiile sunt adevărate."
    },
    {
      "id": "py-162",
      "chapter": "input-output",
      "type": "single",
      "question": "To read the entire remaining contents of the file as a string from a file object infile, we use:",
      "options": [
        "infile.read(2)",
        "infile.read()",
        "infile.readline()",
        "infile.readlines()"
      ],
      "correct": 1,
      "explanation": "read() fără argument întoarce tot conținutul rămas, ca un singur șir."
    },
    {
      "id": "py-163",
      "chapter": "input-output",
      "type": "single",
      "question": "What is the use of the tell() method of a file object?",
      "options": [
        "It tells you the current position within the file",
        "It tells you the end position within the file",
        "It tells you whether the file is open or not",
        "None of the above"
      ],
      "correct": 0,
      "explanation": "tell() întoarce poziția curentă a cursorului în fișier."
    },
    {
      "id": "py-164",
      "chapter": "input-output",
      "type": "single",
      "question": "What is the result? The file abc.txt contains these four lines:\nDurga:10\nRavi:20\nShiva:30\nPavan:40",
      "code": "values = 0\ntry:\n    f = open('abc.txt', 'r')\n    content = f.readlines()\n    for line in content:\n        values += float(line.split(':')[1])\n    f.close()\nexcept Exception:\n    print('Unable to open the file')\nprint(values)",
      "options": [
        "Unable to open the file",
        "100",
        "100.0",
        "10.0"
      ],
      "correct": 2,
      "explanation": "Fișierul există. La fiecare pas se adaugă un float (float('10\\n') = 10.0), deci suma este 100.0."
    },
    {
      "id": "py-165",
      "chapter": "input-output",
      "type": "single",
      "question": "The program must open voters_list.txt, add new voter information and print all the data to the console. Which line should be inserted at Line-1?",
      "code": "with open('voters_list.txt', 'a+') as f:\n    f.write('New voters info')\n    # Line-1\n    data = f.read()\n    print(data)",
      "options": [
        "f.seek(0)",
        "f.flush()",
        "f.begin()",
        "f.close()"
      ],
      "correct": 0,
      "explanation": "După scriere cursorul este la finalul fișierului; f.seek(0) îl mută la început, ca read() să citească tot conținutul."
    },
    {
      "id": "py-166",
      "chapter": "input-output",
      "type": "multiple",
      "question": "Which TWO statements are valid about this code? (Choose 2.)",
      "code": "import os\ndef get_data(filename, mode):\n    if os.path.isfile(filename):\n        with open(filename, 'r') as file:\n            return file.readline()\n    else:\n        return None",
      "options": [
        "The function returns the first line of the file if it is available",
        "The function returns None if the file does not exist",
        "The function returns all the data present in the file",
        "The function returns the last line of the file"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Funcția verifică existența fișierului, întoarce prima linie cu readline() sau None dacă fișierul nu există."
    },
    {
      "id": "py-167",
      "chapter": "input-output",
      "type": "single",
      "question": "The code must read the entire contents of abc.txt and print it to the console. Which code should be inserted at Line-1?",
      "code": "try:\n    with open('abc.txt', 'r') as f:\n        # Line-1\nexcept OSError:\n    print('Unable to open the file')\nelse:\n    print(data)",
      "options": [
        "data = f.readlines()",
        "data = f.readline()",
        "data = f.read()",
        "data = f.load()"
      ],
      "correct": 2,
      "explanation": "read() citește tot conținutul ca un singur șir. readlines() întoarce o listă, readline() o singură linie, iar load() nu există."
    },
    {
      "id": "py-168",
      "chapter": "input-output",
      "type": "drag_drop",
      "question": "Arrange the lines to open a file for reading, read all of its contents and print them.",
      "dragItems": [
        {
          "id": "i1",
          "text": "shirtFile = open(\"shirts.txt\", \"r\")"
        },
        {
          "id": "i2",
          "text": "print(shirtFileContents)"
        },
        {
          "id": "i3",
          "text": "shirtFileContents = shirtFile.read()"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Linia 1",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Linia 2",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Linia 3",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Întâi se deschide fișierul (mod r), apoi se citește cu read(), apoi se afișează."
    },
    {
      "id": "py-169",
      "chapter": "input-output",
      "type": "multiple",
      "question": "With open('log.txt', 'w') as file, which TWO statements are true? (Choose 2.)",
      "options": [
        "Existing content is overwritten.",
        "Text is automatically appended.",
        "file.close() is not required.",
        "The file must already exist."
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "Modul w suprascrie conținutul, iar blocul with închide automat fișierul."
    },
    {
      "id": "py-170",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Complete the file modes and the newline escape sequence.",
      "code": "if os.path.isfile(\"results.txt\"):\n    writeFile = open(\"results.txt\", \"[1]\")\nelse:\n    writeFile = open(\"results.txt\", \"[2]\")\nwriteFile.write(\"[3]\" + toResults)",
      "dragItems": [
        {
          "id": "i1",
          "text": "w"
        },
        {
          "id": "i2",
          "text": "\\n"
        },
        {
          "id": "i3",
          "text": "\\t"
        },
        {
          "id": "i4",
          "text": "r"
        },
        {
          "id": "i5",
          "text": "a"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i5"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i2"
        }
      ],
      "explanation": "a adaugă la sfârșit (fișier existent), w creează fișierul, iar \\n începe o linie nouă."
    },
    {
      "id": "py-171",
      "chapter": "input-output",
      "type": "multiple",
      "question": "Which TWO expressions are used to check that config.txt exists and then read only its first line? (Choose 2.)",
      "options": [
        "os.path.isfile(\"config.txt\")",
        "file.readline()",
        "file.read()",
        "os.remove(\"config.txt\")"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "os.path.isfile verifică existența fișierului, iar readline() citește o singură linie. read() citește tot, iar os.remove() șterge fișierul."
    },
    {
      "id": "py-172",
      "chapter": "input-output",
      "type": "single",
      "question": "Which expression checks whether results.txt is a file?",
      "options": [
        "os.path.isfile(\"results.txt\")",
        "os.file.exists(\"results.txt\")",
        "io.isfile(\"results.txt\")",
        "file.exists(\"results.txt\")"
      ],
      "correct": 0,
      "explanation": "os.path.isfile(cale) verifică dacă există și este fișier."
    },
    {
      "id": "py-173",
      "chapter": "input-output",
      "type": "single",
      "question": "Which function deletes a file?",
      "options": [
        "os.delete()",
        "os.remove()",
        "file.remove()",
        "io.delete()"
      ],
      "correct": 1,
      "explanation": "os.remove(cale) șterge fișierul indicat."
    },
    {
      "id": "py-174",
      "chapter": "input-output",
      "type": "single",
      "question": "Which file mode appends new content without deleting the existing content?",
      "options": [
        "r",
        "w",
        "a",
        "x"
      ],
      "correct": 2,
      "explanation": "a = append."
    },
    {
      "id": "py-175",
      "chapter": "input-output",
      "type": "single",
      "question": "Which file mode is used for reading?",
      "options": [
        "r",
        "w",
        "a",
        "n"
      ],
      "correct": 0,
      "explanation": "r = read."
    },
    {
      "id": "py-176",
      "chapter": "input-output",
      "type": "single",
      "question": "What type does file.read() normally return for a text file?",
      "options": [
        "list",
        "tuple",
        "str",
        "int"
      ],
      "correct": 2,
      "explanation": "read() întoarce conținutul ca str."
    },
    {
      "id": "py-177",
      "chapter": "input-output",
      "type": "single",
      "question": "What does file.readlines() return for a text file?",
      "options": [
        "A single string",
        "A list of lines",
        "An integer",
        "A Boolean"
      ],
      "correct": 1,
      "explanation": "readlines() întoarce o listă de șiruri, câte unul pentru fiecare linie."
    },
    {
      "id": "py-178",
      "chapter": "input-output",
      "type": "single",
      "question": "Which statement closes the file automatically when the block ends?",
      "options": [
        "with open(\"data.txt\", \"r\") as f:",
        "f = open(\"data.txt\", \"r\")",
        "open(\"data.txt\")",
        "file(\"data.txt\")"
      ],
      "correct": 0,
      "explanation": "Blocul with se ocupă automat de închiderea fișierului."
    },
    {
      "id": "py-179",
      "chapter": "input-output",
      "type": "single",
      "question": "What does readline() return when the end of a text file is reached?",
      "options": [
        "'\\n'",
        "''",
        "None",
        "False"
      ],
      "correct": 1,
      "explanation": "Pentru o linie goală din fișier se citește '\\n'; la sfârșitul fișierului readline() întoarce șirul gol ''."
    },
    {
      "id": "py-180",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Complete the code so that lines containing only a newline are ignored and the end of the file is detected. Assume the file opens successfully.",
      "code": "inventory = open(\"inventory.txt\", \"r\")\neof = False\nwhile eof == False:\n    line = inventory.readline()\n    [1]\n        if [2]\n            print(line)\n        else:\n            print(\"End of file\")\n            eof = True\n            inventory.close()",
      "dragItems": [
        {
          "id": "i1",
          "text": "line is None:"
        },
        {
          "id": "i2",
          "text": "if line != '\\n':"
        },
        {
          "id": "i3",
          "text": "line != '':"
        },
        {
          "id": "i4",
          "text": "if line == '\\n':"
        },
        {
          "id": "i5",
          "text": "line == '':"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i3"
        }
      ],
      "explanation": "readline() întoarce '\\n' pentru o linie goală și '' la sfârșitul fișierului. Prima condiție ignoră liniile goale, a doua distinge o linie reală de sfârșitul fișierului."
    },
    {
      "id": "py-181",
      "chapter": "functii",
      "type": "single",
      "question": "What is displayed when the code below runs?",
      "code": "def saluta(nume=\"lume\"):\n    return \"Salut, \" + nume\n\nprint(saluta())",
      "options": [
        "Salut, nume",
        "Salut, lume",
        "Error",
        "None"
      ],
      "correct": 1,
      "explanation": "Parametrul nume are valoarea implicită \"lume\", folosită când funcția este apelată fără argumente."
    },
    {
      "id": "py-182",
      "chapter": "functii",
      "type": "single",
      "question": "For which of the following function calls will we get an error?",
      "code": "def get_score(total=0, valid=0):\n    result = int(valid) / int(total)\n    return result",
      "options": [
        "score = get_score('40', '4')",
        "score = get_score(0, 10)",
        "score = get_score(40, 4)",
        "score = get_score(40)"
      ],
      "correct": 1,
      "explanation": "get_score(0, 10) înseamnă total=0, valid=10 → împărțire la 0 (ZeroDivisionError). get_score(40) are valid=0 → 0/40 = 0.0."
    },
    {
      "id": "py-183",
      "chapter": "functii",
      "type": "single",
      "question": "What is the result?",
      "code": "def get_names():\n    names = ['Sunny', 'Bunny', 'Chinny', 'Vinny', 'Pinny']\n    return names[2:]\n\ndef update_names(elements):\n    new_names = []\n    for name in elements:\n        new_names.append(name[:3].upper())\n    return new_names\n\nprint(update_names(get_names()))",
      "options": [
        "['CHI', 'VIN', 'PIN']",
        "['VIN', 'PIN']",
        "['CH', 'VI', 'PI']",
        "['SU', 'BU']"
      ],
      "correct": 0,
      "explanation": "get_names() întoarce ['Chinny', 'Vinny', 'Pinny']; se iau primele 3 litere cu majuscule: ['CHI', 'VIN', 'PIN']."
    },
    {
      "id": "py-184",
      "chapter": "functii",
      "type": "single",
      "question": "The code must print ['chicken', 'mutton', 'fish']. With what should the parameter list x of my_list be replaced?",
      "code": "def my_list(x):\n    lst.append(a)\n    return lst\n\nmy_list('chicken')\nmy_list('mutton')\nprint(my_list('fish'))",
      "options": [
        "a, lst=[]",
        "a, lst=()",
        "a, lst={}",
        "a, lst=None"
      ],
      "correct": 0,
      "explanation": "Valoarea implicită lst=[] se creează o singură dată, la definirea funcției, deci lista păstrează elementele între apeluri. Un tuple, un dict sau None nu au metoda append."
    },
    {
      "id": "py-185",
      "chapter": "functii",
      "type": "multiple",
      "question": "Which TWO of the following calls are valid (run without an error)? (Choose 2.)",
      "code": "def f1(x=0, y=0):\n    return x + y",
      "options": [
        "f1()",
        "f1('10', '20')",
        "f1(10, '20')",
        "f1('10')"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "f1() → 0+0; f1('10','20') → '1020'. f1(10,'20') și f1('10') adună int cu str → TypeError."
    },
    {
      "id": "py-186",
      "chapter": "functii",
      "type": "multiple",
      "question": "Which TWO of the following calls are valid (run without an error)? (Choose 2.)",
      "code": "def f1(x=0, y=0):\n    return x * y",
      "options": [
        "f1()",
        "f1('10', '20')",
        "f1(10)",
        "f1('10', '5')"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "f1() → 0; f1(10) → 10*0 = 0. Înmulțirea str * str ('10' * '20', '10' * '5') provoacă TypeError."
    },
    {
      "id": "py-187",
      "chapter": "functii",
      "type": "single",
      "question": "If the user enters 'a', what is the result?",
      "code": "def count_letter(letter, word_list):\n    count = 0\n    for word in word_list:\n        if letter in word:\n            count += 1\n    return count\n\nword_list = ['apple', 'pears', 'orange', 'mango']\nletter = input('Enter some alphabet symbol:')\nletter_count = count_letter(letter, word_list)\nprint(letter_count)",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correct": 3,
      "explanation": "Toate cele 4 cuvinte conțin litera 'a', deci count = 4."
    },
    {
      "id": "py-188",
      "chapter": "functii",
      "type": "dropdown",
      "question": "Select the function definitions for line 01 and line 04.",
      "code": "01 [Line 01]\n02     name = input('What is your name? ')\n03     return name\n04 [Line 04]\n05     calories = miles * calories_per_mile\n06     return calories\n07 distance = int(input('How many miles did you bike this week? '))\n08 burn_rate = 50\n09 biker = get_name()\n10 calories_burned = calc_calories(distance, burn_rate)\n11 print(biker, ', you burned about', calories_burned, 'calories.')",
      "dragItems": [
        {
          "id": "i1",
          "text": "def calc_calories(miles, calories_per_mile):"
        },
        {
          "id": "i2",
          "text": "def get_name():"
        },
        {
          "id": "i3",
          "text": "def calc_calories():"
        },
        {
          "id": "i4",
          "text": "def get_name(name):"
        },
        {
          "id": "i5",
          "text": "def get_name(biker):"
        },
        {
          "id": "i6",
          "text": "def calc_calories(miles, burn_rate):"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 01",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Line 04",
          "correctItemId": "i1"
        }
      ],
      "explanation": "get_name() se apelează fără argumente. calc_calories primește două argumente, iar parametrii trebuie să se numească exact ca variabilele folosite în corp (miles, calories_per_mile)."
    },
    {
      "id": "py-189",
      "chapter": "functii",
      "type": "single",
      "question": "Which definition gives height a default value of 12?",
      "options": [
        "def area(width, height):",
        "def area(width, height=12):",
        "def area(width=height, 12):",
        "def area(width; height=12):"
      ],
      "correct": 1,
      "explanation": "Valoarea implicită se scrie în antet: parametru=valoare."
    },
    {
      "id": "py-190",
      "chapter": "functii",
      "type": "single",
      "question": "What happens when the function is called?",
      "code": "def f(amount, shipping):\n    if shipping == 0:\n        pass\n    else:\n        subtotal = amount + shipping\n    return subtotal\n\nf(500, 0)",
      "options": [
        "Returns 500",
        "Returns 0",
        "Returns None",
        "A runtime error is raised"
      ],
      "correct": 3,
      "explanation": "Pe ramura shipping == 0 se execută pass, deci subtotal nu este creat; return subtotal produce UnboundLocalError."
    },
    {
      "id": "py-191",
      "chapter": "functii",
      "type": "single",
      "question": "Which function definition matches the call area(5, 10)?",
      "options": [
        "def area(x, y):",
        "def area(x, y, z):",
        "def calculate_area(x):",
        "area def(x, y):"
      ],
      "correct": 0,
      "explanation": "Apelul transmite două argumente, deci funcția are nevoie de doi parametri."
    },
    {
      "id": "py-192",
      "chapter": "functii",
      "type": "drag_drop",
      "question": "Arrange the function that calculates and returns a subtotal.",
      "dragItems": [
        {
          "id": "i1",
          "text": "    subtotal = amount * (1 + salesTaxRate)"
        },
        {
          "id": "i2",
          "text": "    return subtotal"
        },
        {
          "id": "i3",
          "text": "def calcSubtotal(amount, salesTaxRate):"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Linia 1",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Linia 2",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Linia 3",
          "correctItemId": "i2"
        }
      ],
      "explanation": "def definește funcția, apoi se calculează variabila locală și se returnează."
    },
    {
      "id": "py-193",
      "chapter": "functii",
      "type": "single",
      "question": "Which line correctly calls subtotal and stores the returned value in order_total?",
      "options": [
        "order_total(subtotal(500, .07))",
        "order_total = call subtotal(500, .07)",
        "order_total = subtotal(500, .07)",
        "order_total = def subtotal(500, .07)"
      ],
      "correct": 2,
      "explanation": "O funcție se apelează cu nume(argumente), iar rezultatul poate fi atribuit unei variabile."
    },
    {
      "id": "py-194",
      "chapter": "functii",
      "type": "dropdown",
      "question": "Complete the function definition and the return statement.",
      "code": "[1] calcSubtotal[2]\n    subtotal = amount * (1 + salesTaxRate)\n    [3]",
      "dragItems": [
        {
          "id": "i1",
          "text": "def"
        },
        {
          "id": "i2",
          "text": "(amount, salesTaxRate):"
        },
        {
          "id": "i3",
          "text": "return subtotal"
        },
        {
          "id": "i4",
          "text": "print subtotal"
        },
        {
          "id": "i5",
          "text": "[amount, salesTaxRate]:"
        },
        {
          "id": "i6",
          "text": "function"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i3"
        }
      ],
      "explanation": "Se folosește def, parametrii se scriu între paranteze rotunde urmați de :, iar return trimite valoarea înapoi."
    },
    {
      "id": "py-195",
      "chapter": "functii",
      "type": "single",
      "question": "What is printed?",
      "code": "def double(x):\n    return x * 2\n\nprint(double(5))",
      "options": [
        "5",
        "10",
        "None",
        "NameError"
      ],
      "correct": 1,
      "explanation": "Parametrul x primește 5, iar funcția returnează 10."
    },
    {
      "id": "py-196",
      "chapter": "functii",
      "type": "single",
      "question": "What does a Python function return if it reaches its end without a return statement?",
      "options": [
        "0",
        "False",
        "None",
        "An error"
      ],
      "correct": 2,
      "explanation": "Fără return explicit, funcția întoarce None."
    },
    {
      "id": "py-197",
      "chapter": "functii",
      "type": "single",
      "question": "What is printed?",
      "code": "def greet():\n    print(\"Hello\")\n\ngreet()",
      "options": [
        "Hello",
        "None",
        "0",
        "Error"
      ],
      "correct": 0,
      "explanation": "Funcția execută print chiar dacă nu are return."
    },
    {
      "id": "py-198",
      "chapter": "functii",
      "type": "single",
      "question": "What is printed?",
      "code": "def f(x):\n    return x\n    return x * 3\n\nprint(f(5))",
      "options": [
        "5",
        "10",
        "15",
        "Nothing"
      ],
      "correct": 0,
      "explanation": "return încheie imediat funcția; linia return x*3 nu se mai execută."
    },
    {
      "id": "py-199",
      "chapter": "functii",
      "type": "single",
      "question": "Which call uses keyword arguments?",
      "options": [
        "area(5, 10)",
        "area(width=5, height=10)",
        "area[5, 10]",
        "area(width:5, height:10)"
      ],
      "correct": 1,
      "explanation": "Argumentele cu nume se scriu parametru=valoare."
    },
    {
      "id": "py-200",
      "chapter": "functii",
      "type": "true_false",
      "question": "Parameters are named in the function definition.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Parametrii apar în definiție, iar argumentele la apel."
    },
    {
      "id": "py-201",
      "chapter": "functii",
      "type": "true_false",
      "question": "Arguments are values supplied when calling the function.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Argumentele sunt valorile transmise la apel."
    },
    {
      "id": "py-202",
      "chapter": "functii",
      "type": "true_false",
      "question": "A function can never return a string.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "O funcție poate returna orice tip de valoare, inclusiv str."
    },
    {
      "id": "py-203",
      "chapter": "functii",
      "type": "single",
      "question": "What error occurs?",
      "code": "def make_value():\n    local_value = 10\n\nmake_value()\nprint(local_value)",
      "options": [
        "No error",
        "NameError",
        "SyntaxError",
        "ZeroDivisionError"
      ],
      "correct": 1,
      "explanation": "local_value există doar în interiorul funcției; în afara ei numele nu este definit."
    },
    {
      "id": "py-204",
      "chapter": "functii",
      "type": "single",
      "question": "Which statement allows a function to change the global variable x?",
      "options": [
        "global x",
        "public x",
        "extern x",
        "nonlocal x"
      ],
      "correct": 0,
      "explanation": "Cuvântul cheie global declară că numele se referă la variabila globală."
    },
    {
      "id": "py-205",
      "chapter": "functii",
      "type": "single",
      "question": "What is a variable defined outside of any function referred to as?",
      "options": [
        "A static variable",
        "A global variable",
        "A local variable",
        "An automatic variable"
      ],
      "correct": 1,
      "explanation": "O variabilă definită în afara funcțiilor este globală."
    },
    {
      "id": "py-206",
      "chapter": "functii",
      "type": "single",
      "question": "What is the output?",
      "code": "a = 10\nb = 20\n\ndef change():\n    global b\n    a = 45\n    b = 56\n\nchange()\nprint(a)\nprint(b)",
      "options": [
        "10, 56",
        "45, 56",
        "10, 20",
        "SyntaxError"
      ],
      "correct": 0,
      "explanation": "a = 45 creează o variabilă locală (a global rămâne 10); global b face ca b = 56 să modifice variabila globală."
    },
    {
      "id": "py-207",
      "chapter": "functii",
      "type": "single",
      "question": "What is the output?",
      "code": "def change(i=1, j=2):\n    i = i + j\n    j = j + 1\n    print(i, j)\n\nchange(j=1, i=2)",
      "options": [
        "An exception is thrown because of conflicting values",
        "1 2",
        "3 3",
        "3 2"
      ],
      "correct": 3,
      "explanation": "Apel: i = 2, j = 1. i = 2 + 1 = 3; j = 1 + 1 = 2 → se afișează \"3 2\"."
    },
    {
      "id": "py-208",
      "chapter": "functii",
      "type": "single",
      "question": "What is the output?",
      "code": "f = lambda x: bool(x % 2)\nprint(f(20), f(21))",
      "options": [
        "False True",
        "False False",
        "True True",
        "True False"
      ],
      "correct": 0,
      "explanation": "f(20): 20%2 = 0 → False; f(21): 21%2 = 1 → True."
    },
    {
      "id": "py-209",
      "chapter": "functii",
      "type": "drag_drop",
      "question": "Arrange the complete function so that it returns the first line of a file if the file exists and None otherwise.",
      "dragItems": [
        {
          "id": "i1",
          "text": "        return None"
        },
        {
          "id": "i2",
          "text": "def get_first_line(filename):"
        },
        {
          "id": "i3",
          "text": "    else:"
        },
        {
          "id": "i4",
          "text": "        with open(filename, 'r') as file:"
        },
        {
          "id": "i5",
          "text": "            return file.readline()"
        },
        {
          "id": "i6",
          "text": "    if os.path.isfile(filename):"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Linia 1",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Linia 2",
          "correctItemId": "i6"
        },
        {
          "id": "z3",
          "label": "Linia 3",
          "correctItemId": "i4"
        },
        {
          "id": "z4",
          "label": "Linia 4",
          "correctItemId": "i5"
        },
        {
          "id": "z5",
          "label": "Linia 5",
          "correctItemId": "i3"
        },
        {
          "id": "z6",
          "label": "Linia 6",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Se definește funcția, se verifică existența fișierului, se deschide în modul r și se returnează readline(); altfel se returnează None."
    },
    {
      "id": "py-210",
      "chapter": "module-librarii",
      "type": "true_false",
      "question": "The statement \"import math\" makes all the functions of the math module available without the \"math.\" prefix.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "După \"import math\" funcțiile se apelează cu prefix: math.sqrt(9). Fără prefix ar trebui \"from math import *\"."
    },
    {
      "id": "py-211",
      "chapter": "module-librarii",
      "type": "single",
      "question": "You are writing an application that uses the sqrt function. The program must reference the function using the name squareRoot. Which code segment should you use?",
      "options": [
        "from math import sqrt as squareRoot",
        "from math.sqrt as squareRoot",
        "import math.sqrt as squareRoot",
        "import sqrt from math as squareRoot"
      ],
      "correct": 0,
      "explanation": "Sintaxa corectă este: from modul import funcție as alias."
    },
    {
      "id": "py-212",
      "chapter": "module-librarii",
      "type": "single",
      "question": "You are writing an application that uses the pow() function. The program must reference the function using the name power. Which code segment should you use?",
      "options": [
        "import math.pow as power",
        "import pow from math as power",
        "from math import pow as power",
        "from math.pow as power"
      ],
      "correct": 2,
      "explanation": "from math import pow as power importă funcția sub un alt nume."
    },
    {
      "id": "py-213",
      "chapter": "module-librarii",
      "type": "single",
      "question": "A function that reads a data file raises an error on line 03 when it runs. What is causing the error?",
      "code": "01 def read_file(file):\n02     line = None\n03     if os.path.isfile(file):\n04         data = open(file, 'r')\n05         for line in data:\n06             print(line)",
      "options": [
        "The path method does not exist in the os object.",
        "The isfile method does not exist in the path object.",
        "You need to import the os library.",
        "The isfile method does not accept one parameter."
      ],
      "correct": 2,
      "explanation": "Codul folosește os.path.isfile, dar lipsește \"import os\" (NameError)."
    },
    {
      "id": "py-214",
      "chapter": "module-librarii",
      "type": "single",
      "question": "What is the type of sys.argv?",
      "options": [
        "set",
        "list",
        "tuple",
        "string"
      ],
      "correct": 1,
      "explanation": "sys.argv este o listă de șiruri cu argumentele din linia de comandă."
    },
    {
      "id": "py-215",
      "chapter": "module-librarii",
      "type": "single",
      "question": "From the sys module, which variable gives access to the command line arguments?",
      "options": [
        "argv",
        "argsv",
        "args",
        "arguments"
      ],
      "correct": 0,
      "explanation": "sys.argv conține argumentele din linia de comandă."
    },
    {
      "id": "py-216",
      "chapter": "module-librarii",
      "type": "single",
      "question": "What is the value of __name__ when a Python file is run directly?",
      "options": [
        "\"__main__\"",
        "\"main\"",
        "\"__file__\"",
        "None"
      ],
      "correct": 0,
      "explanation": "Când un fișier este rulat direct, __name__ este \"__main__\"; când este importat, __name__ este numele modulului."
    },
    {
      "id": "py-217",
      "chapter": "module-librarii",
      "type": "single",
      "question": "Given the command invocation \"python tests.py Itvedant\", which code prints 'Itvedant' to the console?",
      "options": [
        "from sys import argv; print(argv[1])",
        "from sys import argv; print(argv[0])",
        "from sys import args; print(args[0])",
        "from sys import args; print(args[1])"
      ],
      "correct": 0,
      "explanation": "argv[0] este numele scriptului, argv[1] este primul argument: 'Itvedant'. Variabila args nu există în sys."
    },
    {
      "id": "py-218",
      "chapter": "module-librarii",
      "type": "single",
      "question": "What is the result? (Command: py test.py DURGASOFT)",
      "code": "from sys import argv\nprint(argv[0])",
      "options": [
        "DURGASOFT",
        "test.py",
        "IndexError is thrown at runtime",
        "ImportError is thrown at runtime"
      ],
      "correct": 1,
      "explanation": "argv[0] este întotdeauna numele scriptului: test.py."
    },
    {
      "id": "py-219",
      "chapter": "module-librarii",
      "type": "single",
      "question": "What is the result? (Command: py test.py 10 20)",
      "code": "from sys import argv\nprint(argv[1] + argv[2])",
      "options": [
        "30",
        "1020",
        "IndexError is thrown at runtime",
        "ImportError is thrown at runtime"
      ],
      "correct": 1,
      "explanation": "argv[1] și argv[2] sunt șiruri ('10' și '20'); + le concatenează: '1020'."
    },
    {
      "id": "py-220",
      "chapter": "module-librarii",
      "type": "single",
      "question": "Which command invocation generates the output \"The Average for Durga is 20.00\"?",
      "code": "from sys import argv\nsum = 0\nfor i in range(2, len(argv)):\n    sum += float(argv[i])\nprint(\"The Average for {0} is {1:.2f}\".format(argv[1], sum / (len(argv) - 2)))",
      "options": [
        "py test.py Durga 10 20 30",
        "py test.py Durga 10 20",
        "py test.py Durga 10",
        "py test.py 20"
      ],
      "correct": 0,
      "explanation": "Pentru Durga 10 20 30: (10+20+30)/3 = 20.00."
    },
    {
      "id": "py-221",
      "chapter": "module-librarii",
      "type": "multiple",
      "question": "A function receives a float. It must take the absolute value of the float and remove any decimal points after the integer. Which TWO math functions should you use? (Choose 2.) Apply absolute value first, then floor.",
      "options": [
        "math.ceil(x)",
        "math.fmod(x)",
        "math.floor(x)",
        "math.frexp(x)",
        "math.fabs(x)"
      ],
      "correct": [
        2,
        4
      ],
      "explanation": "math.fabs(x) dă valoarea absolută, iar math.floor(...) elimină zecimalele rotunjind în jos."
    },
    {
      "id": "py-222",
      "chapter": "module-librarii",
      "type": "single",
      "question": "What is returned by math.ceil(10.4)?",
      "options": [
        "11",
        "10",
        "11.0",
        "10.0"
      ],
      "correct": 0,
      "explanation": "ceil rotunjește în sus la 11; în Python 3 întoarce un int."
    },
    {
      "id": "py-223",
      "chapter": "module-librarii",
      "type": "single",
      "question": "What is the result?",
      "code": "import math\nl = [str(round(math.pi)) for i in range(1, 6)]\nprint(l)",
      "options": [
        "['3', '3', '3', '3', '3']",
        "['3', '3', '3', '3', '3', '3']",
        "['1', '2', '3', '4', '5']",
        "['1', '2', '3', '4', '5', '6']"
      ],
      "correct": 0,
      "explanation": "round(math.pi) = 3 la fiecare dintre cele 5 iterații."
    },
    {
      "id": "py-224",
      "chapter": "module-librarii",
      "type": "multiple",
      "question": "Which TWO statements print a random value from the list? (Choose 2.)",
      "code": "import random\nfruits = ['Apple', 'Mango', 'Orange', 'Lemon']",
      "options": [
        "print(random.sample(fruits))",
        "print(random.sample(fruits, 3)[0])",
        "print(random.choice(fruits))",
        "print(random.choice(fruits)[0])"
      ],
      "correct": [
        1,
        2
      ],
      "explanation": "random.choice(fruits) alege un element; random.sample(fruits, 3)[0] ia primul din 3 elemente alese aleatoriu. sample(fruits) fără k dă eroare, iar choice(fruits)[0] dă doar prima literă."
    },
    {
      "id": "py-225",
      "chapter": "module-librarii",
      "type": "single",
      "question": "Which of the following is true?",
      "code": "import random\nprint(int(random.random() * 5))",
      "options": [
        "It prints a random int value from 0 to 5, inclusive",
        "It prints a random int value from 1 to 5",
        "It prints a random int value from 1 to 4",
        "It prints a random int value from 0 to 4"
      ],
      "correct": 3,
      "explanation": "random.random() dă un float în [0.0, 1.0); înmulțit cu 5 și convertit la int dă 0, 1, 2, 3 sau 4."
    },
    {
      "id": "py-226",
      "chapter": "module-librarii",
      "type": "single",
      "question": "Which of the following is valid?",
      "code": "import random\nprint(random.sample(range(10), 7))",
      "options": [
        "It prints a list of 10 unique random numbers from 0 to 6",
        "It prints a list of 7 unique random numbers from 0 to 9",
        "It prints a list of 7 unique random numbers from 0 to 10",
        "It prints a list of 7 unique random numbers from 1 to 10"
      ],
      "correct": 1,
      "explanation": "sample(range(10), 7) alege 7 valori unice din 0–9."
    },
    {
      "id": "py-227",
      "chapter": "module-librarii",
      "type": "single",
      "question": "You need to generate a random float with a minimum value of 0.0 and a maximum value of 1.0. Which statement should you use? For random.random(), 0.0 is included and 1.0 is excluded.",
      "options": [
        "random.randrange()",
        "random.randrange(0.0, 1.0)",
        "random.random()",
        "random.randint(0, 1)"
      ],
      "correct": 2,
      "explanation": "random.random() întoarce un float aleatoriu în intervalul [0.0, 1.0)."
    },
    {
      "id": "py-228",
      "chapter": "module-librarii",
      "type": "multiple",
      "question": "You need to generate a random integer with a minimum value of 5 and a maximum value of 11. Which TWO functions should you use? (Choose 2.)",
      "options": [
        "random.randint(5, 11)",
        "random.randrange(5, 12, 1)",
        "random.randint(5, 12)",
        "random.randrange(5, 11, 1)"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "randint include ambele capete; randrange exclude capătul din dreapta, deci randrange(5, 12, 1) produce 5–11."
    },
    {
      "id": "py-229",
      "chapter": "module-librarii",
      "type": "multiple",
      "question": "You need to generate a random number that is a multiple of 5, with the lowest number 5 and the highest number 100. Which TWO code segments meet the requirements? (Choose 2.)",
      "options": [
        "from random import randrange\nprint(randrange(5, 105, 5))",
        "from random import randint\nprint(randint(1, 20) * 5)",
        "from random import randrange\nprint(randrange(5, 100, 5))",
        "from random import randint\nprint(randint(0, 20) * 5)"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "randrange(5, 105, 5) și randint(1, 20)*5 produc 5, 10, ..., 100. randrange(5, 100, 5) nu poate produce 100, iar randint(0, 20)*5 poate produce 0."
    },
    {
      "id": "py-230",
      "chapter": "module-librarii",
      "type": "single",
      "question": "What is the output of the following code?",
      "code": "from math import factorial\nprint(math.factorial(5))",
      "options": [
        "120",
        "Nothing is printed",
        "Error, method factorial doesn't exist in the math module",
        "Error, the statement should be: print(factorial(5))"
      ],
      "correct": 3,
      "explanation": "\"from math import factorial\" aduce doar numele factorial, nu și math; math.factorial(5) dă NameError. Corect: print(factorial(5))."
    },
    {
      "id": "py-231",
      "chapter": "module-librarii",
      "type": "true_false",
      "question": "math.frexp(21) returns a mantissa and an exponent.",
      "code": "import math",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "frexp întoarce o pereche (mantisă, exponent)."
    },
    {
      "id": "py-232",
      "chapter": "module-librarii",
      "type": "single",
      "question": "What is the value and type of c?",
      "code": "import math\na = -14\nc = math.fabs(a)",
      "options": [
        "14 (int)",
        "14.0 (float)",
        "-14.0 (float)",
        "True (bool)"
      ],
      "correct": 1,
      "explanation": "math.fabs întoarce valoarea absolută ca float."
    },
    {
      "id": "py-233",
      "chapter": "module-librarii",
      "type": "single",
      "question": "What is d?",
      "code": "import math\nd = math.fmod(21, -14)",
      "options": [
        "7.0",
        "-7.0",
        "1.5",
        "0"
      ],
      "correct": 0,
      "explanation": "fmod păstrează semnul primului operand: 21 - (-14 * -1) = 7.0."
    },
    {
      "id": "py-234",
      "chapter": "module-librarii",
      "type": "dropdown",
      "question": "Complete the rounding functions.",
      "code": "import math\nx = 77.4\nupper = [1](x)\nlower = [2](x)\nwhole = [3](x)",
      "dragItems": [
        {
          "id": "i1",
          "text": "math.ceil"
        },
        {
          "id": "i2",
          "text": "math.trunc"
        },
        {
          "id": "i3",
          "text": "math.floor"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i2"
        }
      ],
      "explanation": "ceil rotunjește în sus, floor rotunjește în jos, trunc elimină partea zecimală (spre zero)."
    },
    {
      "id": "py-235",
      "chapter": "module-librarii",
      "type": "single",
      "question": "Which expression computes 3 to the power of 2 using the math module?",
      "options": [
        "math.pow(3, 2)",
        "math.sqrt(3, 2)",
        "math.power(3, 2)",
        "pow.math(3, 2)"
      ],
      "correct": 0,
      "explanation": "math.pow(a, b) calculează a la puterea b."
    },
    {
      "id": "py-236",
      "chapter": "module-librarii",
      "type": "single",
      "question": "Which expression computes the square root of 16?",
      "options": [
        "math.sqrt(16)",
        "math.sq(16)",
        "sqrt.math(16)",
        "math.root(16)"
      ],
      "correct": 0,
      "explanation": "math.sqrt(x) calculează rădăcina pătrată."
    },
    {
      "id": "py-237",
      "chapter": "module-librarii",
      "type": "multiple",
      "question": "Which TWO methods return the current local date and time as a datetime object? (Choose 2.)",
      "options": [
        "datetime.datetime.now()",
        "datetime.datetime.today()",
        "datetime.datetime.strftime()",
        "datetime.datetime.strptime()"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "now() și today() dau data și ora curentă; strftime formatează, strptime interpretează un text."
    },
    {
      "id": "py-238",
      "chapter": "module-librarii",
      "type": "single",
      "question": "Which function converts a datetime object to formatted text?",
      "options": [
        "strftime()",
        "strptime()",
        "today()",
        "weekday()"
      ],
      "correct": 0,
      "explanation": "strftime formatează data/ora într-un șir."
    },
    {
      "id": "py-239",
      "chapter": "module-librarii",
      "type": "single",
      "question": "What does weekday() return?",
      "options": [
        "A weekday name",
        "An integer from 0 to 6",
        "An integer from 1 to 7",
        "A formatted date"
      ],
      "correct": 1,
      "explanation": "weekday() întoarce 0 pentru luni și 6 pentru duminică."
    },
    {
      "id": "py-240",
      "chapter": "module-librarii",
      "type": "single",
      "question": "What is the output if the system date is 23 September 2020?",
      "code": "import datetime\nt = datetime.date.today()\nprint(t.month)",
      "options": [
        "September",
        "Sept",
        "09",
        "9"
      ],
      "correct": 3,
      "explanation": "month este un atribut întreg: 9. (Cu paranteze, t.month() ar da TypeError.)"
    },
    {
      "id": "py-241",
      "chapter": "module-librarii",
      "type": "single",
      "question": "Which function chooses one random item from a list?",
      "options": [
        "random.choice()",
        "random.sample()",
        "random.shuffle()",
        "random.one()"
      ],
      "correct": 0,
      "explanation": "choice(secvență) întoarce un singur element ales aleatoriu."
    },
    {
      "id": "py-242",
      "chapter": "module-librarii",
      "type": "single",
      "question": "Which function rearranges a list in random order, in place?",
      "options": [
        "random.choice()",
        "random.shuffle()",
        "random.sample()",
        "random.randint()"
      ],
      "correct": 1,
      "explanation": "shuffle(listă) modifică lista pe loc."
    },
    {
      "id": "py-243",
      "chapter": "module-librarii",
      "type": "single",
      "question": "Which expression returns two distinct random items from countries?",
      "options": [
        "random.choice(countries, 2)",
        "random.sample(countries, 2)",
        "random.shuffle(countries, 2)",
        "random.randint(countries, 2)"
      ],
      "correct": 1,
      "explanation": "sample(populație, k) întoarce k elemente distincte."
    },
    {
      "id": "py-244",
      "chapter": "module-librarii",
      "type": "single",
      "question": "Which values can randint(1, 3) return?",
      "options": [
        "1 or 2 only",
        "2 or 3 only",
        "1, 2, or 3",
        "0, 1, 2, or 3"
      ],
      "correct": 2,
      "explanation": "randint(a, b) include ambele capete."
    },
    {
      "id": "py-245",
      "chapter": "module-librarii",
      "type": "single",
      "question": "Which expression can generate 3, 6, 9, ... up to 99?",
      "options": [
        "random.randrange(3, 102, 3)",
        "random.randrange(3, 99, 2)",
        "random.randint(3, 99, 3)",
        "random.random(3, 99)"
      ],
      "correct": 0,
      "explanation": "randrange(start, stop, pas) nu include stop; cu 102, valoarea 99 este posibilă."
    },
    {
      "id": "py-246",
      "chapter": "module-librarii",
      "type": "single",
      "question": "What range of values does random.random() return?",
      "options": [
        "0.0 <= x < 1.0",
        "1 <= x <= 100",
        "-1 < x < 1",
        "Only the integers 0 and 1"
      ],
      "correct": 0,
      "explanation": "random() întoarce un float în intervalul [0.0, 1.0)."
    },
    {
      "id": "py-247",
      "chapter": "module-librarii",
      "type": "multiple",
      "question": "Which of the following are possible outputs of this code? Pick the TWO that can occur. (Choose 2.)",
      "code": "import random\nfruits = ['Apple', 'Mango', 'Orange', 'Lemon']\nrandom_list = [random.choice(fruits)[:2] for i in range(3)]\nprint(''.join(random_list))",
      "options": [
        "ApApAp",
        "ApMgOr",
        "LeMaOr",
        "OrOraM"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "Fiecare element este primele 2 litere ale unui fruct (Ap, Ma, Or, Le). ApApAp și LeMaOr sunt combinații posibile; \"Mg\" nu există, iar OrOraM nu se descompune în coduri de 2 litere valide."
    },
    {
      "id": "py-248",
      "chapter": "module-librarii",
      "type": "true_false",
      "question": "math.isnan(float('nan')) is True.",
      "code": "import math",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "NaN se verifică cu math.isnan()."
    },
    {
      "id": "py-249",
      "chapter": "module-librarii",
      "type": "true_false",
      "question": "float('nan') == float('nan') is True.",
      "code": "import math",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "NaN nu este egal nici măcar cu el însuși."
    },
    {
      "id": "py-250",
      "chapter": "gestionare-erori",
      "type": "multiple",
      "question": "Which TWO keywords are part of exception handling in Python? (Choose 2.)",
      "options": [
        "try",
        "catch",
        "except",
        "throw"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "Python folosește try / except (catch și throw aparțin altor limbaje, de exemplu Java sau C#)."
    },
    {
      "id": "py-251",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "Which of the following is true about the else block of a try statement?",
      "options": [
        "The else block is executed if there is no exception in the try block",
        "Without writing an except block we can't write an else block",
        "For the same try we can write at most one else block",
        "All of the above"
      ],
      "correct": 3,
      "explanation": "Toate afirmațiile sunt adevărate."
    },
    {
      "id": "py-252",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "When will the else part of try-except-else be executed?",
      "options": [
        "Always",
        "When no exception occurs",
        "When an error exception occurs",
        "When an exception occurs in the except block"
      ],
      "correct": 1,
      "explanation": "Blocul else rulează doar dacă în try nu a apărut nicio excepție."
    },
    {
      "id": "py-253",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "Is the following Python code valid?",
      "code": "try:\n    print('try block')\nexcept:\n    print('except block')\nfinally:\n    print('finally block')",
      "options": [
        "No, there is no such thing as finally",
        "No, finally cannot be used together with except",
        "No, finally must come before except",
        "Yes"
      ],
      "correct": 3,
      "explanation": "try-except-finally este o sintaxă validă; finally rulează indiferent dacă a apărut o excepție."
    },
    {
      "id": "py-254",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "What is the output?",
      "code": "def foo():\n    try:\n        return 1\n    finally:\n        return 2\n\nk = foo()\nprint(k)",
      "options": [
        "1",
        "2",
        "3",
        "Error, there is more than one return statement in a single try-finally block"
      ],
      "correct": 1,
      "explanation": "return din finally suprascrie return-ul din try, deci funcția întoarce 2."
    },
    {
      "id": "py-255",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "The base class for all exceptions in Python is:",
      "options": [
        "Exception",
        "ExceptionBase",
        "BaseException",
        "ArithmeticError"
      ],
      "correct": 2,
      "explanation": "BaseException este clasa de bază pentru toate excepțiile; Exception este doar o subclasă a ei."
    },
    {
      "id": "py-256",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "Which type of exception is raised if we try to call a method that does not exist for the object?",
      "options": [
        "IndexError",
        "TypeError",
        "AttributeError",
        "None of these"
      ],
      "correct": 2,
      "explanation": "AttributeError apare când se accesează un atribut sau o metodă inexistentă pentru acel obiect."
    },
    {
      "id": "py-257",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "Assume abc.txt exists and opens successfully as a regular text file. Which exception is raised by the next line?",
      "code": "f = open('abc.txt')\nf.readall()",
      "options": [
        "AttributeError",
        "EOFError",
        "SystemError",
        "SyntaxError"
      ],
      "correct": 0,
      "explanation": "Obiectele fișier nu au metoda readall() (există read(), readline(), readlines()), deci apare AttributeError."
    },
    {
      "id": "py-258",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "What is the result?",
      "code": "a = 10\nb = 20\nc = '30'\nresult = a + b + c",
      "options": [
        "102030",
        "3030",
        "TypeError",
        "ArithmeticError"
      ],
      "correct": 2,
      "explanation": "a + b = 30 (int), dar 30 + '30' adună un int cu un str → TypeError."
    },
    {
      "id": "py-259",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "For the inputs 10, 20, 30, 40, what is the result?",
      "code": "data = []\ndef get_data():\n    for i in range(1, 5):\n        marks = input('Enter Marks:')\n        data.append(marks)\n\ndef get_avg():\n    sum = 0\n    for mark in data:\n        sum += mark\n    return sum / len(data)\n\nget_data()\nprint(get_avg())",
      "options": [
        "25",
        "25.0",
        "NameError is thrown at runtime",
        "TypeError is thrown at runtime"
      ],
      "correct": 3,
      "explanation": "input() întoarce str; sum += mark încearcă să adune un int (0) cu un str → TypeError."
    },
    {
      "id": "py-260",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "Running this code raises: TypeError: unsupported operand type(s) for +=: 'float' and 'str'. Which change fixes the error?",
      "code": "prices = [30.5, '40.5', 10.5]\ntotal = 0\nfor price in prices:\n    total += price\nprint(total)",
      "options": [
        "total += str(price)",
        "total += int(price)",
        "total += float(price)",
        "total = total + price"
      ],
      "correct": 2,
      "explanation": "'40.5' este un șir. float(price) îl convertește corect și păstrează zecimalele; int('40.5') ar da ValueError."
    },
    {
      "id": "py-261",
      "chapter": "gestionare-erori",
      "type": "multiple",
      "question": "Running this code raises: TypeError: unsupported operand type(s) for +=: 'int' and 'str'. Which TWO changes fix the error? (Choose 2.)",
      "code": "prices = [10, '20', 30, '40']\ntotal = 0\nfor price in prices:\n    total += price\nprint(total)",
      "options": [
        "total += str(price)",
        "total += int(price)",
        "total += float(price)",
        "total = total + price"
      ],
      "correct": [
        1,
        2
      ],
      "explanation": "int(price) și float(price) convertesc șirurile numerice la numere, permițând adunarea."
    },
    {
      "id": "py-262",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "The code below is run. in.txt exists, out.txt does not exist. Which statement is true? Assume the input is readable and the output directory is writable.",
      "code": "import sys\n\ntry:\n    file_in = open('in.txt', 'r')\n    file_out = open('out.txt', 'w+')\nexcept IOError:\n    print('Cannot open file:', 'in.txt')\nelse:\n    i = 1\n    for line in file_in:\n        print(line.rstrip())\n        file_out.write(str(i) + ': ' + line)\n        i += 1\n    file_in.close()\n    file_out.close()",
      "options": [
        "The code runs, but generates a logic error",
        "The program copies the data from in.txt to out.txt (numbering the lines)",
        "The code generates a runtime error",
        "The code generates a syntax error"
      ],
      "correct": 1,
      "explanation": "Modul \"w+\" creează out.txt dacă nu există. Fiind fără excepții, se execută blocul else: liniile din in.txt sunt afișate și scrise numerotat în out.txt."
    },
    {
      "id": "py-263",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "The Happy Clown program runs around in an infinite circle. Which statement identifies an error in the code?",
      "code": "01 import math\n02 # default motion for happy clown\n03 power = True\n04 move = 0\n05 while power:\n06     if move == 0:\n07         turnValue = math.pi / move\n08         move += 5\n09     else:\n10         turnValue = 0\n11         move = 0",
      "options": [
        "Line 05 has a syntax error because it should read (power == True).",
        "Line 08 has a syntax error because += is an invalid statement.",
        "Line 07 causes a runtime error due to division by zero.",
        "Line 05 causes a runtime error because the expression is incomplete."
      ],
      "correct": 2,
      "explanation": "La prima iterație move = 0, deci math.pi / move produce ZeroDivisionError (eroare la rulare)."
    },
    {
      "id": "py-264",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "You want to handle the case where abc.txt does not exist. Which code correctly handles FileNotFoundError?",
      "code": "f = open('abc.txt')\nprint(f.read())\nf.close()",
      "options": [
        "f = None\ntry:\n    f = open('abc.txt')\nexcept FileNotFoundError:\n    print('File does not exist')\nelse:\n    print(f.read())\nfinally:\n    if f is not None:\n        f.close()",
        "f = None\ntry:\n    f = open('abc.txt')\nexcept FileNotFoundException:\n    print('File does not exist')\nelse:\n    print(f.read())\nfinally:\n    if f is not None:\n        f.close()",
        "f = None\ntry:\n    f = open('abc.txt')\nelse:\n    print(f.read())\nexcept FileNotFoundError:\n    print('File does not exist')\nfinally:\n    if f is not None:\n        f.close()",
        "None of the above"
      ],
      "correct": 0,
      "explanation": "Varianta 1 folosește excepția reală FileNotFoundError și ordinea corectă try / except / else / finally. Varianta 2 folosește un nume inexistent (FileNotFoundException), iar în varianta 3 else apare înaintea lui except (SyntaxError)."
    },
    {
      "id": "py-265",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "What type of error is this?",
      "code": "trees = ['fir', 'oak', 'pine']\nprint(trees[3])",
      "options": [
        "Syntax error",
        "Runtime error",
        "Logic error",
        "No error"
      ],
      "correct": 1,
      "explanation": "Codul este corect sintactic, dar un index inexistent produce IndexError la rulare."
    },
    {
      "id": "py-266",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "What type of error is this?",
      "code": "x = 5\nif x > 3\n    print(x)",
      "options": [
        "Syntax error",
        "Runtime error",
        "Logic error",
        "No error"
      ],
      "correct": 0,
      "explanation": "Lipsește două puncte (:) după condiția if, deci interpretorul nu poate citi codul."
    },
    {
      "id": "py-267",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "A program runs, but calculates the area of a rectangle as width + height. What kind of error is this?",
      "options": [
        "Syntax error",
        "Runtime error",
        "Logic error",
        "Import error"
      ],
      "correct": 2,
      "explanation": "Programul rulează, dar algoritmul dă un rezultat greșit: eroare de logică."
    },
    {
      "id": "py-268",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "Complete the exception-handling structure.",
      "code": "[1]:\n    print(a / b)\n[2]:\n    print(\"This did not work.\")\n[3]:\n    print(\"Thank you.\")",
      "dragItems": [
        {
          "id": "i1",
          "text": "except"
        },
        {
          "id": "i2",
          "text": "finally"
        },
        {
          "id": "i3",
          "text": "try"
        },
        {
          "id": "i4",
          "text": "if"
        },
        {
          "id": "i5",
          "text": "while"
        },
        {
          "id": "i6",
          "text": "else"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i2"
        }
      ],
      "explanation": "try conține codul riscant, except tratează eroarea, iar finally rulează întotdeauna."
    },
    {
      "id": "py-269",
      "chapter": "gestionare-erori",
      "type": "true_false",
      "question": "In ordinary Python control flow, after entering a try statement, its finally block runs both on normal exit and on exception propagation.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "finally runs when control leaves the try statement, including returns and exceptions. Abrupt process termination or failure before entering the try statement is not covered."
    },
    {
      "id": "py-270",
      "chapter": "gestionare-erori",
      "type": "true_false",
      "question": "try and except both execute on every successful operation.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "La succes se execută try (și else); except rulează doar când apare o excepție."
    },
    {
      "id": "py-271",
      "chapter": "gestionare-erori",
      "type": "true_false",
      "question": "else runs when the try block completes without an exception.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "else rulează doar dacă try s-a terminat fără excepții."
    },
    {
      "id": "py-272",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "Which keyword explicitly raises an exception?",
      "options": [
        "throw",
        "raise",
        "except",
        "error"
      ],
      "correct": 1,
      "explanation": "În Python excepțiile se ridică cu raise."
    },
    {
      "id": "py-273",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "What does this code display?",
      "code": "x = 30\ny = 10\nassert x > y, 'x is smaller than y'",
      "options": [
        "AssertionError",
        "10 8",
        "No output",
        "108"
      ],
      "correct": 2,
      "explanation": "30 > 10 este True, deci assert trece fără eroare și fără output (mesajul apare doar când condiția este falsă)."
    },
    {
      "id": "py-274",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "What does this code display?",
      "code": "def is_quarter(num):\n    return num % 4 == 0\n\nassert is_quarter(8) == True",
      "options": [
        "True",
        "False",
        "AssertionError",
        "Nothing"
      ],
      "correct": 3,
      "explanation": "Dacă assert primește o condiție adevărată, nu afișează nimic; altfel ridică AssertionError."
    },
    {
      "id": "py-275",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "What happens?",
      "code": "assert 2 + 2 == 5",
      "options": [
        "Nothing",
        "True is printed",
        "AssertionError",
        "ValueError"
      ],
      "correct": 2,
      "explanation": "2 + 2 == 5 este fals, deci assert ridică AssertionError."
    },
    {
      "id": "py-276",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "Which unittest method checks whether two values are equal?",
      "options": [
        "assertIn",
        "assertEqual",
        "assertIsInstance",
        "assertTrue"
      ],
      "correct": 1,
      "explanation": "self.assertEqual(a, b) verifică egalitatea valorilor."
    },
    {
      "id": "py-277",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "Which unittest method checks whether an item is in a container?",
      "options": [
        "assertIn",
        "assertEqual",
        "assertIs",
        "assertIsInstance"
      ],
      "correct": 0,
      "explanation": "self.assertIn(element, container) verifică apartenența."
    },
    {
      "id": "py-278",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "Which unittest method checks whether two references point to the same object?",
      "options": [
        "assertEqual",
        "assertIs",
        "assertIn",
        "assertTrue"
      ],
      "correct": 1,
      "explanation": "assertIs(a, b) echivalează conceptual cu verificarea a is b."
    },
    {
      "id": "py-279",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "Which unittest method checks whether an object belongs to a class?",
      "options": [
        "assertIsInstance",
        "assertEqual",
        "assertIn",
        "assertFalse"
      ],
      "correct": 0,
      "explanation": "assertIsInstance(obj, Clasă) verifică tipul/instanța."
    },
    {
      "id": "py-280",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "Which method name is discovered by the default unittest test loader?",
      "options": [
        "test_territory",
        "_test_territory",
        "territory_test",
        "testcase_territory"
      ],
      "correct": 0,
      "explanation": "Implicit, metodele de test încep cu prefixul test."
    },
    {
      "id": "py-281",
      "chapter": "gestionare-erori",
      "type": "drag_drop",
      "question": "Arrange the minimal unittest program.",
      "dragItems": [
        {
          "id": "i1",
          "text": "if __name__ == \"__main__\":"
        },
        {
          "id": "i2",
          "text": "class TestMath(unittest.TestCase):"
        },
        {
          "id": "i3",
          "text": "    def test_add(self):"
        },
        {
          "id": "i4",
          "text": "import unittest"
        },
        {
          "id": "i5",
          "text": "    unittest.main()"
        },
        {
          "id": "i6",
          "text": "        self.assertEqual(2 + 3, 5)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Linia 1",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Linia 2",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Linia 3",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Linia 4",
          "correctItemId": "i6"
        },
        {
          "id": "z5",
          "label": "Linia 5",
          "correctItemId": "i1"
        },
        {
          "id": "z6",
          "label": "Linia 6",
          "correctItemId": "i5"
        }
      ],
      "explanation": "Se importă unittest, se definește o clasă TestCase cu o metodă test_..., apoi se pornește unittest.main() când fișierul este rulat direct."
    },
    {
      "id": "py-282",
      "chapter": "structura-cod",
      "type": "single",
      "question": "In Python, code blocks (the body of an if, for, a function, etc.) are delimited by:",
      "options": [
        "Curly braces { }",
        "Indentation (spaces/tab)",
        "The keyword end",
        "Semicolons"
      ],
      "correct": 1,
      "explanation": "Python folosește indentarea consecventă pentru a delimita blocurile de cod."
    },
    {
      "id": "py-283",
      "chapter": "structura-cod",
      "type": "single",
      "question": "You want to add notes to your code so other team members will understand it. What should you do?",
      "options": [
        "Place the notes after the last line of code, separated by a blank line.",
        "Place the notes inside parentheses on any line.",
        "Place the notes after the # sign on any line.",
        "Place the notes before the first line of code, separated by a blank line."
      ],
      "correct": 2,
      "explanation": "Comentariile din Python încep cu # și pot apărea pe orice linie."
    },
    {
      "id": "py-284",
      "chapter": "structura-cod",
      "type": "single",
      "question": "Which character starts a single-line comment in Python?",
      "options": [
        "//",
        "/*",
        "#",
        "--"
      ],
      "correct": 2,
      "explanation": "Comentariile pe o singură linie încep cu #."
    },
    {
      "id": "py-285",
      "chapter": "structura-cod",
      "type": "single",
      "question": "Which option uses the conventional triple-quoted Python docstring form?",
      "options": [
        "\"\"\"Calculates area.\"\"\"",
        "# Calculates area.",
        "// Calculates area.",
        "/* Calculates area. */"
      ],
      "correct": 0,
      "explanation": "Docstring-urile sunt șiruri plasate la începutul unui modul, clase sau funcții; forma cu ghilimele triple permite și text pe mai multe rânduri."
    },
    {
      "id": "py-286",
      "chapter": "structura-cod",
      "type": "true_false",
      "question": "Lines 01 through 04 are ignored as comments.",
      "code": "01 # The calc_power function calculates exponents\n02 # x is the base\n03 # y is the exponent\n04 # The value of x raised to the y power is returned\n05 def calc_power(x, y):\n06     comment = \"#Return the value\"\n07     return x ** y  # raise x to the power y",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Liniile care încep cu # sunt comentarii și sunt ignorate de Python."
    },
    {
      "id": "py-287",
      "chapter": "structura-cod",
      "type": "true_false",
      "question": "The string assigned to comment on line 06 is itself a Python comment.",
      "code": "01 # The calc_power function calculates exponents\n02 # x is the base\n03 # y is the exponent\n04 # The value of x raised to the y power is returned\n05 def calc_power(x, y):\n06     comment = \"#Return the value\"\n07     return x ** y  # raise x to the power y",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "# din interiorul unui șir nu începe un comentariu; linia 06 atribuie un șir variabilei comment."
    },
    {
      "id": "py-288",
      "chapter": "structura-cod",
      "type": "true_false",
      "question": "The text after # on line 07 is ignored by Python.",
      "code": "01 # The calc_power function calculates exponents\n02 # x is the base\n03 # y is the exponent\n04 # The value of x raised to the y power is returned\n05 def calc_power(x, y):\n06     comment = \"#Return the value\"\n07     return x ** y  # raise x to the power y",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Textul de după # (în afara unui șir) este comentariu și este ignorat."
    },
    {
      "id": "py-289",
      "chapter": "operatori-tipuri",
      "type": "dropdown",
      "question": "A developer wants to make sure a serial number cannot be used in a calculation, and that a dollar amount entered as a whole number can have decimals. A message must be displayed exactly as follows: \"The serial number of the product is 55555 and it will cost 44.0.\" Fill in the code with the proper functions and operators.",
      "code": "serialnumber = [1](55555)\namount = [2](44)\nprint(\"The serial number of the product is \" [3] \".\")",
      "dragItems": [
        {
          "id": "i1",
          "text": "double"
        },
        {
          "id": "i2",
          "text": "decimal"
        },
        {
          "id": "i3",
          "text": "& serialnumber & \" and it will cost \" & str(amount) &"
        },
        {
          "id": "i4",
          "text": "string"
        },
        {
          "id": "i5",
          "text": "text"
        },
        {
          "id": "i6",
          "text": "float"
        },
        {
          "id": "i7",
          "text": "fl"
        },
        {
          "id": "i8",
          "text": "+ serialnumber + \" and it will cost \" + str(amount) +"
        },
        {
          "id": "i9",
          "text": "; serialnumber ; \" and it will cost \" ; str(amount) ;"
        },
        {
          "id": "i10",
          "text": "str"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i10"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i8"
        }
      ],
      "explanation": "str(55555) turns the serial number into text, so it cannot be used in calculations. float(44) gives 44.0. In Python, strings are joined with +, not & or ;."
    },
    {
      "id": "py-290",
      "chapter": "operatori-tipuri",
      "type": "drag_drop",
      "question": "A warehouse manager needs the count of kits to be presented as a whole number of complete sets. Drag the appropriate function to the missing code area so that inventoryCount is converted to 19.",
      "code": "inventoryCount = 19.95\nprint(\"We have \" + str([1](inventoryCount)) + \" complete units in stock.\")",
      "dragItems": [
        {
          "id": "i1",
          "text": "floor"
        },
        {
          "id": "i2",
          "text": "ceil"
        },
        {
          "id": "i3",
          "text": "round"
        },
        {
          "id": "i4",
          "text": "int"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4"
        }
      ],
      "explanation": "int() drops the decimal part: int(19.95) = 19. round(19.95) and ceil(19.95) give 20, and floor is not a built-in function (it needs math.floor)."
    },
    {
      "id": "py-291",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "For the following code, which comparison expression is evaluated last before the value is assigned to z?",
      "code": "x = 5\ny = 3\nz = x + y > 7 and x * y < 15 or x - y > 2",
      "options": [
        "x + y > 7 and x * y < 15",
        "z =",
        "x - y > 2",
        "x * y < 15 or x - y > 2"
      ],
      "correct": 2,
      "explanation": "The expression is (x + y > 7 and x * y < 15) or (x - y > 2). The \"and\" part is False (8 > 7 is True, but 15 < 15 is False), so Python must still evaluate x - y > 2 last, and the result of \"or\" is then assigned to z."
    },
    {
      "id": "py-292",
      "chapter": "operatori-tipuri",
      "type": "drag_drop",
      "question": "Use the dropdown-style choices to match the correct operator to the result of each calculation, using a = 10 and b = 3.",
      "code": "a = 10\nb = 3",
      "dragItems": [
        {
          "id": "i1",
          "text": "-"
        },
        {
          "id": "i2",
          "text": "+"
        },
        {
          "id": "i3",
          "text": "%"
        },
        {
          "id": "i4",
          "text": "*"
        },
        {
          "id": "i5",
          "text": "//"
        },
        {
          "id": "i6",
          "text": "/"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "a ? b = 13",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "a ? b = 7",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "a ? b ≈ 3.33 (rounded to two decimal places)",
          "correctItemId": "i6"
        },
        {
          "id": "z4",
          "label": "a ? b = 3",
          "correctItemId": "i5"
        },
        {
          "id": "z5",
          "label": "a ? 3 = 1",
          "correctItemId": "i3"
        }
      ],
      "explanation": "10 + 3 = 13; 10 - 3 = 7; 10 / 3 is approximately 3.3333333333333335; 10 // 3 = 3; 10 % 3 = 1."
    },
    {
      "id": "py-293",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "a == b",
      "code": "a = 5\nb = 3\n\nc = b\nb = a",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "After the assignments a = 5 and b = 5, so a == b is True."
    },
    {
      "id": "py-294",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "a is b",
      "code": "a = 5\nb = 3\n\nc = b\nb = a",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Both names now refer to the same integer object 5, so \"a is b\" is True."
    },
    {
      "id": "py-295",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "b == 3",
      "code": "a = 5\nb = 3\n\nc = b\nb = a",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "b was reassigned to the value of a, so b is 5, not 3."
    },
    {
      "id": "py-296",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "c is b",
      "code": "a = 5\nb = 3\n\nc = b\nb = a",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "c still refers to 3 and b refers to 5, so they are not the same object."
    },
    {
      "id": "py-297",
      "chapter": "operatori-tipuri",
      "type": "drag_drop",
      "question": "Arrange the actual evaluation steps for the expression below, including the short-circuit decision.",
      "code": "x = 7\ny = 4\nprint(x > y and x - y >= 2 or x + y == 11 and not x * y > 25)",
      "dragItems": [
        {
          "id": "i1",
          "text": "Evaluate x > y: True"
        },
        {
          "id": "i2",
          "text": "Evaluate x - y >= 2: True, so the left side of or is True"
        },
        {
          "id": "i3",
          "text": "Skip the entire right side of or because the left side is True"
        },
        {
          "id": "i4",
          "text": "print displays True"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Step 1",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Step 2",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Step 3",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Step 4",
          "correctItemId": "i4"
        }
      ],
      "explanation": "Python evaluates operands left to right subject to short-circuiting. x > y and x - y >= 2 is True, so the expression after or is not evaluated. The output is True."
    },
    {
      "id": "py-298",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "c == 3",
      "code": "a = 5\nb = 2\nc = 3\na **= b\nb *= c\na //= b",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "c is never changed, so c == 3."
    },
    {
      "id": "py-299",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "b == 6",
      "code": "a = 5\nb = 2\nc = 3\na **= b\nb *= c\na //= b",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "b *= c gives b = 2 * 3 = 6."
    },
    {
      "id": "py-300",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "a == 1",
      "code": "a = 5\nb = 2\nc = 3\na **= b\nb *= c\na //= b",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "a **= b gives 25; then a //= b gives 25 // 6 = 4, so a is 4, not 1."
    },
    {
      "id": "py-301",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "a > b and b > c",
      "code": "a = 10\nb = 7\nc = 5",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "10 > 7 is True and 7 > 5 is True, so the result is True."
    },
    {
      "id": "py-302",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "a >= c and not (b + c > a)",
      "code": "a = 10\nb = 7\nc = 5",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "a >= c is True, but b + c = 12 > 10 is True, so not (...) is False. True and False is False."
    },
    {
      "id": "py-303",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "a + b * c == 85 or a - b * c == 15",
      "code": "a = 10\nb = 7\nc = 5",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "10 + 7*5 = 45 (not 85) and 10 - 7*5 = -25 (not 15), so both comparisons are False."
    },
    {
      "id": "py-304",
      "chapter": "operatori-tipuri",
      "type": "drag_drop",
      "question": "Match each expression with its proper default data type.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Integer"
        },
        {
          "id": "i2",
          "text": "Float"
        },
        {
          "id": "i3",
          "text": "Boolean"
        },
        {
          "id": "i4",
          "text": "String"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "False",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "\"False\"",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "1",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "1.0",
          "correctItemId": "i2"
        }
      ],
      "explanation": "False is a Boolean; \"False\" (in quotes) is a string; 1 is an integer; 1.0 is a float."
    },
    {
      "id": "py-305",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "You are building a quiz app. The code is missing an operator to indicate that a variable is not equal to a desired result. Choose the correct operator to finish the code.",
      "code": "a = 3\nb = 7\nresult = int(input(\"What is a + b?\"))\nif result [operator] 10:\n    print(\"You are incorrect. Try again\")\nelse:\n    print(\"You are correct.\")",
      "options": [
        "!=",
        "=!",
        "!>"
      ],
      "correct": 0,
      "explanation": "The \"not equal\" operator in Python is !=."
    },
    {
      "id": "py-306",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "c equals -9",
      "code": "a = 3\nb = 2\nc = -(a**b)\nd = +(c*b)",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "a**b = 9, so c = -9."
    },
    {
      "id": "py-307",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "b**a equals 8",
      "code": "a = 3\nb = 2\nc = -(a**b)\nd = +(c*b)",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "b**a = 2**3 = 8."
    },
    {
      "id": "py-308",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "d equals 18",
      "code": "a = 3\nb = 2\nc = -(a**b)\nd = +(c*b)",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "d = +(c*b) = +(-9 * 2) = -18, not 18."
    },
    {
      "id": "py-309",
      "chapter": "operatori-tipuri",
      "type": "drag_drop",
      "question": "Using drag and drop, arrange the operator groups in descending precedence (highest to lowest).",
      "dragItems": [
        {
          "id": "i1",
          "text": "Assignments"
        },
        {
          "id": "i2",
          "text": "Logical"
        },
        {
          "id": "i3",
          "text": "Comparison / Membership / Identity"
        },
        {
          "id": "i4",
          "text": "Arithmetic"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "1 (highest)",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "2",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "3",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "4 (lowest)",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Arithmetic operators are evaluated first, then comparison/membership/identity operators, then logical operators (not, and, or). Assignment happens last."
    },
    {
      "id": "py-310",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "a == 115",
      "code": "a = 100\nb = 15\nc = 10\na += b\nb -= c\na %= b",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "a becomes 115 after a += b, but then a %= b gives 115 % 5 = 0, so the final value of a is 0."
    },
    {
      "id": "py-311",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "b == 5",
      "code": "a = 100\nb = 15\nc = 10\na += b\nb -= c\na %= b",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "b -= c gives 15 - 10 = 5."
    },
    {
      "id": "py-312",
      "chapter": "operatori-tipuri",
      "type": "true_false",
      "question": "c == 10",
      "code": "a = 100\nb = 15\nc = 10\na += b\nb -= c\na %= b",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "c is never changed."
    },
    {
      "id": "py-313",
      "chapter": "structuri-control",
      "type": "drag_drop",
      "question": "The messages \"Great month\" and \"Keep it going\" must be printed for month sales of over 10000. Drag the lines of code into the correct order. Not all lines will be used.",
      "dragItems": [
        {
          "id": "i1",
          "text": "    print(\"Great month\")"
        },
        {
          "id": "i2",
          "text": "if month_sales >= 10000"
        },
        {
          "id": "i3",
          "text": "if month_sales > 10000:"
        },
        {
          "id": "i4",
          "text": "    print(\"Keep it going\")"
        },
        {
          "id": "i5",
          "text": "else"
        },
        {
          "id": "i6",
          "text": "elif month_sales <= 10000"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Step 1",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Step 2",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Step 3",
          "correctItemId": "i4"
        }
      ],
      "explanation": "The condition must be \"> 10000\" (over 10000) and end with a colon; the two print statements are indented inside the if block. The other lines are missing the colon or use the wrong comparison."
    },
    {
      "id": "py-314",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "A function must return a letter grade: 90 or higher gets an A, 80 to 89 gets a B, 70 to 79 gets a C, and everyone else gets an F. Choose the correct line for each blank.",
      "code": "def grade(score):\n    if [1]\n        grade = \"A\"\n    elif [2]\n        grade = \"B\"\n    elif [3]\n        grade = \"C\"\n    else:\n        [4]\n    return grade",
      "dragItems": [
        {
          "id": "i1",
          "text": "score < 70: grade = \"F\""
        },
        {
          "id": "i2",
          "text": "score >= 90:"
        },
        {
          "id": "i3",
          "text": "grade = \"F\""
        },
        {
          "id": "i4",
          "text": "score >= 80:"
        },
        {
          "id": "i5",
          "text": "score >= 70:"
        },
        {
          "id": "i6",
          "text": "score > 90:"
        },
        {
          "id": "i7",
          "text": "score <= 79:"
        },
        {
          "id": "i8",
          "text": "score < 90:"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i5"
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i3"
        }
      ],
      "explanation": "Conditions are checked in order, so >= 90, >= 80 and >= 70 are enough. \">\" 90 would skip a score of exactly 90. After else:, only the statement grade = \"F\" is valid."
    },
    {
      "id": "py-315",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "You loop through a list of events and must stop printing when the value \"End of Day\" is found. Select the missing code.",
      "code": "schedule = [\"Opening Comments\", \"Breakfast\", \"Breakout Session 1\", \"Lunch\", \"Breakout Session 2\", \"End of Day\", \"Opening Comments\", \"Breakfast\"]\n\nscheduledEvent = 0\n\n[1] (scheduledEvent < len(schedule)):\n    print(schedule[scheduledEvent])\n    if schedule[scheduledEvent] == \"End of Day\":\n        [2]\n    else:\n        [3]",
      "dragItems": [
        {
          "id": "i1",
          "text": "scheduledEvent += 1"
        },
        {
          "id": "i2",
          "text": "if"
        },
        {
          "id": "i3",
          "text": "for"
        },
        {
          "id": "i4",
          "text": "while"
        },
        {
          "id": "i5",
          "text": "scheduledEvent"
        },
        {
          "id": "i6",
          "text": "continue"
        },
        {
          "id": "i7",
          "text": "break"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i1"
        }
      ],
      "explanation": "A while loop repeats while the index is within the list; break leaves the loop at \"End of Day\"; scheduledEvent += 1 moves to the next item."
    },
    {
      "id": "py-316",
      "chapter": "structuri-control",
      "type": "single",
      "question": "The code needs to print the number of minutes to walk per day, starting with 10 minutes in week 1 and 50 minutes by week 5. Select the correct line of code for the iteration.",
      "code": "[loop line]\n    print(f\"You should walk for {week * 10} minutes in {week}\")",
      "options": [
        "for minutes in range(1,50):",
        "for week in range(6,1):",
        "for week in range(1,6):",
        "while week in range(6,1):",
        "while week in range(1,6):"
      ],
      "correct": 2,
      "explanation": "range(1,6) produces 1, 2, 3, 4, 5 (the end value is excluded), giving 10 to 50 minutes. range(6,1) is empty, and the while versions use week before it exists."
    },
    {
      "id": "py-317",
      "chapter": "structuri-control",
      "type": "single",
      "question": "Numerically, how many cities from the list will print?",
      "code": "cities = ['Anchorage','Juneau','Fairbanks','Ketchikan','Sitka','Wasilla']\nfor city in cities:\n    print(f'{city} is a famous Alaskan city.')\n    if city == 'Ketchikan':\n        break",
      "options": [
        "3",
        "4",
        "5",
        "6"
      ],
      "correct": 1,
      "explanation": "Anchorage, Juneau, Fairbanks and Ketchikan are printed. The print runs before the if, so Ketchikan is printed, then break stops the loop."
    },
    {
      "id": "py-318",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "You need activity for every day in a 30-day program, with no activity on day 15. Fill in the missing pieces.",
      "code": "[1] dailyProgram in range(1, [2]):\n    if dailyProgram == 15:\n        print(\"No activity on day 15\")\n        [3]\n    print(f\"This is day {dailyProgram}\")",
      "dragItems": [
        {
          "id": "i1",
          "text": "31"
        },
        {
          "id": "i2",
          "text": "skip"
        },
        {
          "id": "i3",
          "text": "while"
        },
        {
          "id": "i4",
          "text": "30"
        },
        {
          "id": "i5",
          "text": "do"
        },
        {
          "id": "i6",
          "text": "for"
        },
        {
          "id": "i7",
          "text": "break"
        },
        {
          "id": "i8",
          "text": "continue"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i6"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i8"
        }
      ],
      "explanation": "for iterates over range(1, 31) to include day 30. continue skips the rest of the iteration for day 15 only; break would end the whole loop."
    },
    {
      "id": "py-319",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "A developer is iterating to print cities and states. Complete the code to generate the expected output (each city with each state, and \"Capital\" after Springfield Illinois).",
      "code": "cities = [\"Orange\", \"Springfield\", \"Auburn\"]\nstates = [\"Florida\", \"Ohio\", \"Illinois\"]\n\n[1] x in cities:\n    [2] y in states:\n        print(x, y)\n        [3] x == \"Springfield\" and y == \"Illinois\":\n            print(\"Capital\")",
      "dragItems": [
        {
          "id": "i1",
          "text": "if"
        },
        {
          "id": "i2",
          "text": "for"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Two nested for loops produce every city/state pair, and an if statement checks for the Springfield/Illinois combination."
    },
    {
      "id": "py-320",
      "chapter": "structuri-control",
      "type": "drag_drop",
      "question": "You are building a sign-in sheet for a seven-day class with 10 students each day. Drag the correct statements into the correct order. Not all statements will be used.",
      "dragItems": [
        {
          "id": "i1",
          "text": "        print(f\"Student{student} _____________\")"
        },
        {
          "id": "i2",
          "text": "    print(f\"Day: {classDay}\")"
        },
        {
          "id": "i3",
          "text": "    for student in range(1,11):"
        },
        {
          "id": "i4",
          "text": "for classDay in range(1,8):"
        },
        {
          "id": "i5",
          "text": "    for student in range(1,10):"
        },
        {
          "id": "i6",
          "text": "for classDay in range(1,7):"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Step 1",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Step 2",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Step 3",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Step 4",
          "correctItemId": "i1"
        }
      ],
      "explanation": "range(1,8) gives 7 days and range(1,11) gives 10 students (the end value is excluded). The day is printed once, then the inner loop prints every student."
    },
    {
      "id": "py-321",
      "chapter": "structuri-date",
      "type": "drag_drop",
      "question": "A developer needs to build a data structure with animals and then sort the structure. Drag the lines of code into the correct order to produce this output: Bears, Jaguars, Lions, Panthers (one per line).",
      "dragItems": [
        {
          "id": "i1",
          "text": "animals.sort()"
        },
        {
          "id": "i2",
          "text": "    print(animal)"
        },
        {
          "id": "i3",
          "text": "animals.append(\"Jaguars\")"
        },
        {
          "id": "i4",
          "text": "    print (animal)}"
        },
        {
          "id": "i5",
          "text": "animals.add(\"Jaguars\")"
        },
        {
          "id": "i6",
          "text": "for animal in animals:"
        },
        {
          "id": "i7",
          "text": "for animal in animals {"
        },
        {
          "id": "i8",
          "text": "animals = [\"Bears\", \"Panthers\", \"Lions\"]"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Step 1",
          "correctItemId": "i8"
        },
        {
          "id": "z2",
          "label": "Step 2",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Step 3",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "Step 4",
          "correctItemId": "i6"
        },
        {
          "id": "z5",
          "label": "Step 5",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Create the list, add \"Jaguars\" with append() (lists have no add() method), sort it alphabetically, then loop and print. Braces { } are not valid Python loop syntax."
    },
    {
      "id": "py-322",
      "chapter": "structuri-date",
      "type": "multiple",
      "question": "The code is attempting to loop through and print a tuple of products by serial number, but it generates errors. Which fixes are needed? (Choose 2.)",
      "code": "products = (\"1111\",\"2222\",\"3333\",\"4444\",\"5555\",\"6666\",\"7777\",\"8888\",\"9999\")\n\nfor product in products:\n\nprint(products[product])",
      "options": [
        "Indent the for statement.",
        "Remove the colon from the for statement.",
        "Indent the print statement.",
        "Change the print statement to print(product)."
      ],
      "correct": [
        2,
        3
      ],
      "explanation": "The print statement must be indented inside the loop, and product already holds each serial number (products[product] would use a string as an index, which fails)."
    },
    {
      "id": "py-323",
      "chapter": "structuri-date",
      "type": "dropdown",
      "question": "You are writing code to list cities and then delete from the list any city that has more than five letters in the name. Fill in the missing code.",
      "code": "cities = ['Anchorage','Juneau','Fairbanks','Ketchikan','Sitka','Wasilla']\nfor city in cities[:]:\n    if [1](city) > 5:\n        cities.[2](city)\nprint(cities)",
      "dragItems": [
        {
          "id": "i1",
          "text": "len"
        },
        {
          "id": "i2",
          "text": "remove"
        },
        {
          "id": "i3",
          "text": "length"
        },
        {
          "id": "i4",
          "text": "delete"
        },
        {
          "id": "i5",
          "text": "append"
        },
        {
          "id": "i6",
          "text": "slice"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i2"
        }
      ],
      "explanation": "len() measures the name and remove() deletes the city by value. Iterating over cities[:] avoids skipping adjacent cities when the original list is modified; only Sitka remains."
    },
    {
      "id": "py-324",
      "chapter": "structuri-date",
      "type": "dropdown",
      "question": "Two softball divisions are merging into one. The completed list should be ['Angels', 'Dodgers', 'Padres', 'Sox', 'Wheelers']. Complete the code.",
      "code": "league1 = ['Angels','Dodgers','Padres']\nleague2 = ['Wheelers','Blasters']\n\nleague0 = league1 [1] league2\nleague0.[2]([3], 'Sox')\nleague0.[4]('Blasters')\nprint(league0)",
      "dragItems": [
        {
          "id": "i1",
          "text": "insert"
        },
        {
          "id": "i2",
          "text": "pop"
        },
        {
          "id": "i3",
          "text": "&"
        },
        {
          "id": "i4",
          "text": "+"
        },
        {
          "id": "i5",
          "text": "remove"
        },
        {
          "id": "i6",
          "text": "2"
        },
        {
          "id": "i7",
          "text": "add"
        },
        {
          "id": "i8",
          "text": "3"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i8"
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i5"
        }
      ],
      "explanation": "Lists are joined with +. insert(3, 'Sox') puts Sox after Padres (index 3), and remove('Blasters') deletes it by value. pop() expects an index, not a value."
    },
    {
      "id": "py-325",
      "chapter": "structuri-date",
      "type": "dropdown",
      "question": "You have daily attendance figures and want the highest and lowest counts. Fill in the missing code.",
      "code": "attendance = [300,250,200,400,150,225,325]\n\nprint([1](attendance))\nprint([2](attendance))",
      "dragItems": [
        {
          "id": "i1",
          "text": "minimum"
        },
        {
          "id": "i2",
          "text": "min"
        },
        {
          "id": "i3",
          "text": "max"
        },
        {
          "id": "i4",
          "text": "most"
        },
        {
          "id": "i5",
          "text": "maximum"
        },
        {
          "id": "i6",
          "text": "least"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i2"
        }
      ],
      "explanation": "max() returns the largest value and min() returns the smallest."
    },
    {
      "id": "py-326",
      "chapter": "structuri-date",
      "type": "dropdown",
      "question": "A tester wants to select every fifth item in the products tuple for testing, starting with the second item. The result must be in the print statement. Fill in the missing code.",
      "code": "products = ('1111','2222','3333','4444','5555','6666','7777','8888','9999')\n\n[1]\nprint([2])",
      "dragItems": [
        {
          "id": "i1",
          "text": "tester = products.slice(1,8,5)"
        },
        {
          "id": "i2",
          "text": "products[tester]"
        },
        {
          "id": "i3",
          "text": "tester = slice(2,9,5)"
        },
        {
          "id": "i4",
          "text": "products(tester)"
        },
        {
          "id": "i5",
          "text": "for tester in products:"
        },
        {
          "id": "i6",
          "text": "tester = slice(1,8,5)"
        },
        {
          "id": "i7",
          "text": "append"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i6"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i2"
        }
      ],
      "explanation": "slice(start, stop, step) is a built-in function; the second item has index 1, so slice(1,8,5) selects '2222' and '7777'. The slice object is applied with products[tester]."
    },
    {
      "id": "py-327",
      "chapter": "structuri-date",
      "type": "drag_drop",
      "question": "Match each code example with its characteristic.",
      "dragItems": [
        {
          "id": "i1",
          "text": "background_colors = ['yellow','slate','lightblue']"
        },
        {
          "id": "i2",
          "text": "offices = {'location': 'East', 'size': '4500'}"
        },
        {
          "id": "i3",
          "text": "locations = {'HQ','West','Remote1'}"
        },
        {
          "id": "i4",
          "text": "departments = ('Sales','Marketing','Operations','IT')"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Values are editable.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Values can be added or removed, but not edited.",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "An immutable list.",
          "correctItemId": "i4"
        },
        {
          "id": "z4",
          "label": "Represents a dictionary.",
          "correctItemId": "i2"
        }
      ],
      "explanation": "A list is mutable (editable); a set can have items added or removed but its items cannot be edited in place; a tuple is an immutable sequence; key: value pairs in braces form a dictionary."
    },
    {
      "id": "py-328",
      "chapter": "input-output",
      "type": "single",
      "question": "Which listed character can be inserted as an explicit line-continuation character at [symbol]? It is optional inside these parentheses; adjacent string literals concatenate without it.",
      "code": "import string\n\nannualSales = 500000\n\nif annualSales >= 700000:\n    print(\"Great year\")\nelif annualSales >= 300000:\n    print(\"Decent year\")\nelse:\n    print(\"Better luck next year\")\nprint(\"Thank you for your efforts\")\n\nprint(f\"Your sales representative is Nicole, you are in the East region, \" [symbol]\n      \"and you are based in the Potomac office.\")",
      "options": [
        "\\",
        "\\n",
        "\\t",
        "/"
      ],
      "correct": 0,
      "explanation": "A backslash is an explicit line continuation. Inside parentheses it is unnecessary: implicit continuation and adjacent string-literal concatenation already produce one output line."
    },
    {
      "id": "py-329",
      "chapter": "input-output",
      "type": "drag_drop",
      "question": "A junior programmer wants the user to input North, South, East, or West and display the entry. The user must try again if the entry does not match one of the options. Drag the code lines into the correct order. Location should be the first variable declared.",
      "dragItems": [
        {
          "id": "i1",
          "text": "    response = input(\"Enter North, South, West, or East for a location.\")"
        },
        {
          "id": "i2",
          "text": "while response not in location:"
        },
        {
          "id": "i3",
          "text": "print(response)"
        },
        {
          "id": "i4",
          "text": "response = input(\"Enter North, South, West, or East for a location.\")"
        },
        {
          "id": "i5",
          "text": "location = [\"North\", \"South\", \"West\", \"East\"]"
        },
        {
          "id": "i6",
          "text": "    print(\"Try again.\")"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Step 1",
          "correctItemId": "i5"
        },
        {
          "id": "z2",
          "label": "Step 2",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Step 3",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "Step 4",
          "correctItemId": "i6"
        },
        {
          "id": "z5",
          "label": "Step 5",
          "correctItemId": "i1"
        },
        {
          "id": "z6",
          "label": "Step 6",
          "correctItemId": "i3"
        }
      ],
      "explanation": "The first input is read before the loop; inside the while loop the program prints \"Try again.\" and asks again until the response is in the list; finally the valid response is printed."
    },
    {
      "id": "py-330",
      "chapter": "input-output",
      "type": "single",
      "question": "Add the symbol needed so the number of items is printed instead of {items}.",
      "code": "price = 9.95\nitems = 15\nprint([symbol]\"We have {items} items in stock.\")",
      "options": [
        "f",
        "format",
        "%",
        "\\"
      ],
      "correct": 0,
      "explanation": "An f prefix turns the string into an f-string, so {items} is replaced by its value: print(f\"We have {items} items in stock.\")."
    },
    {
      "id": "py-331",
      "chapter": "input-output",
      "type": "multiple",
      "question": "Which statements about the code, which writes a message to an existing log file at the start of each day, are true? (Choose 2.)",
      "code": "with open('log.txt', 'w') as file:\n    file.write('Daily Log')\n    file.close()",
      "options": [
        "A file.open() statement needs to be added at the beginning of the with statement.",
        "The log file is overwritten each time it is opened.",
        "The close function is not needed.",
        "The text in the write function adds itself to the end of the log file."
      ],
      "correct": [
        1,
        2
      ],
      "explanation": "Mode 'w' overwrites the file every time. The with statement closes the file automatically, so file.close() is not needed. Appending would require mode 'a'."
    },
    {
      "id": "py-332",
      "chapter": "input-output",
      "type": "multiple",
      "question": "A developer wants to print the first line of a configuration file. Which code snippets are needed to replace the comments and finish this code example? (Choose 2.)",
      "code": "# import module\nif os.path.isfile('config.txt'):\n    with open('config.txt', 'r') as file:\n        print(file. # read the first line)",
      "options": [
        "import io",
        "read()",
        "import os.path",
        "readline()"
      ],
      "correct": [
        2,
        3
      ],
      "explanation": "os.path.isfile requires the os module (import os.path), and readline() reads only the first line (read() would read the whole file)."
    },
    {
      "id": "py-333",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Use the code to calculate the area of a rectangle from a width and a height input by the user. The values must be integers, and the area must be right-aligned in a field with a minimum width of six characters. Complete the code.",
      "code": "width = [1]([2](\"Enter a width: \"))\nheight = [3]([4](\"Enter a height: \"))\narea = \"We have [5] square feet for the area.\"\nprint([6])",
      "dragItems": [
        {
          "id": "i1",
          "text": "{:>6}"
        },
        {
          "id": "i2",
          "text": "{ralign(6)}"
        },
        {
          "id": "i3",
          "text": "{align.right(6)}"
        },
        {
          "id": "i4",
          "text": "rightalign(area)"
        },
        {
          "id": "i5",
          "text": "area.format(width * height)"
        },
        {
          "id": "i6",
          "text": "input"
        },
        {
          "id": "i7",
          "text": "int"
        },
        {
          "id": "i8",
          "text": "float"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i7"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i7"
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i6"
        },
        {
          "id": "z5",
          "label": "Blank [5]",
          "correctItemId": "i1"
        },
        {
          "id": "z6",
          "label": "Blank [6]",
          "correctItemId": "i5"
        }
      ],
      "explanation": "int(input(...)) converts input to integers. {:>6} specifies right alignment with a minimum field width of six, not a maximum: larger values are not truncated."
    },
    {
      "id": "py-334",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Open a new results.txt in write mode (not append mode), write the input text, then explicitly close the file to flush buffered output and release the file handle. Complete the code.",
      "code": "writeFile = [1]('results.txt', '[2]')\ntoResults = input(\"What do you want to write to the results? \")\nwriteFile.[3](toResults)\nwriteFile.[4]",
      "dragItems": [
        {
          "id": "i1",
          "text": "drop()"
        },
        {
          "id": "i2",
          "text": "writeln"
        },
        {
          "id": "i3",
          "text": "close()"
        },
        {
          "id": "i4",
          "text": "write"
        },
        {
          "id": "i5",
          "text": "a"
        },
        {
          "id": "i6",
          "text": "w"
        },
        {
          "id": "i7",
          "text": "r"
        },
        {
          "id": "i8",
          "text": "fetch"
        },
        {
          "id": "i9",
          "text": "open"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i9"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i4"
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i3"
        }
      ],
      "explanation": "open(..., \"w\") opens in write mode, write() outputs text, and close() flushes and releases the file handle. Closing does not promise that the Python object uses no memory."
    },
    {
      "id": "py-335",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are writing code to delete a file if it exists, or just display a message if there is no file to remove. Select the proper code pieces.",
      "code": "import [1]\n\nif os.path.[2]('results.txt'):\n    os.[3]('results.txt')\n    print(\"The results file has been removed.\")\nelse:\n    print(\"There was no results file to remove.\")",
      "dragItems": [
        {
          "id": "i1",
          "text": "isfile"
        },
        {
          "id": "i2",
          "text": "os.file"
        },
        {
          "id": "i3",
          "text": "file_exists"
        },
        {
          "id": "i4",
          "text": "sys"
        },
        {
          "id": "i5",
          "text": "delete"
        },
        {
          "id": "i6",
          "text": "present"
        },
        {
          "id": "i7",
          "text": "close"
        },
        {
          "id": "i8",
          "text": "remove"
        },
        {
          "id": "i9",
          "text": "os"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i9"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i8"
        }
      ],
      "explanation": "The os module provides os.path.isfile() to test for a file and os.remove() to delete it."
    },
    {
      "id": "py-336",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "An app reads a configuration file named config.txt and possibly adds to it if the file is present. If the file does not exist, it must be opened for writing. Fill in the code.",
      "code": "import [1]\n\nif [2]('config.txt'):\n    writeFile = open('config.txt', '[3]')\nelse:\n    writeFile = open('config.txt', '[4]')",
      "dragItems": [
        {
          "id": "i1",
          "text": "io"
        },
        {
          "id": "i2",
          "text": "os"
        },
        {
          "id": "i3",
          "text": "r"
        },
        {
          "id": "i4",
          "text": "os.isfile"
        },
        {
          "id": "i5",
          "text": "w+"
        },
        {
          "id": "i6",
          "text": "os.path"
        },
        {
          "id": "i7",
          "text": "w"
        },
        {
          "id": "i8",
          "text": "os.path.isfile"
        },
        {
          "id": "i9",
          "text": "a"
        },
        {
          "id": "i10",
          "text": "r+"
        },
        {
          "id": "i11",
          "text": "sys"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10"
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i7"
        }
      ],
      "explanation": "import os gives access to os.path.isfile(). 'r+' opens an existing file for reading and writing; 'w' opens a (new) file for writing."
    },
    {
      "id": "py-337",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Select the code to read the text file if it already exists. If it does not exist, print a message indicating so.",
      "code": "import os.path\n\nif os.path.[1]('work.txt') == True:\n    workFile = open('work.txt', 'r')\n    workFileFirstLine = [2]\nelse:\n    print(\"The work file is not in this folder.\")",
      "dragItems": [
        {
          "id": "i1",
          "text": "file_exists"
        },
        {
          "id": "i2",
          "text": "workFile.readfirstline()"
        },
        {
          "id": "i3",
          "text": "exists"
        },
        {
          "id": "i4",
          "text": "file"
        },
        {
          "id": "i5",
          "text": "workFile.readfirst()"
        },
        {
          "id": "i6",
          "text": "workFile.seek()"
        },
        {
          "id": "i7",
          "text": "workFile.read()"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7"
        }
      ],
      "explanation": "os.path.exists() tests for the path; read() is the file method that reads the contents (readfirstline() and readfirst() do not exist, and seek() only moves the cursor)."
    },
    {
      "id": "py-338",
      "chapter": "input-output",
      "type": "single",
      "question": "The code calculates the total cost for renting storage space for a day. The cost is not printed as a dollar amount because the number of decimal places varies. Which print statement produces the total cost with two decimals using the modulo operator?",
      "code": "length = 12.5\nprice = 2.99\ncost = length * price\nprint(\"Your total cost is\", cost)",
      "options": [
        "print(\"Your total cost is \", round(cost))",
        "print(\"Your total cost is {:0.2f}\" % (cost))",
        "print(\"Your total cost is %.2f\" % (cost))",
        "print(\"Your total cost is \", math.floor(cost))"
      ],
      "correct": 2,
      "explanation": "The % operator formats a string: %.2f shows two decimals. {:0.2f} belongs to str.format(), not to %, and round()/floor() do not give two decimals."
    },
    {
      "id": "py-339",
      "chapter": "input-output",
      "type": "drag_drop",
      "question": "Drag the lines of code in the correct order to: store the actual value of pi in a variable called pi; let the user enter a radius (decimals allowed); store the circle's area in a variable called area; and print the area formatted to two decimal places. Not every line will be used.",
      "dragItems": [
        {
          "id": "i1",
          "text": "use math"
        },
        {
          "id": "i2",
          "text": "area = pi * radius ^ 2"
        },
        {
          "id": "i3",
          "text": "print(f\"A circle with a radius of {radius} will have an area of %.2d.\" %area)"
        },
        {
          "id": "i4",
          "text": "print(f\"A circle with a radius of {radius} will have an area of %.2f.\" %area)"
        },
        {
          "id": "i5",
          "text": "radius = float(input(\"Enter a radius for a circle.\"))"
        },
        {
          "id": "i6",
          "text": "area = pi * radius ** 2"
        },
        {
          "id": "i7",
          "text": "import math"
        },
        {
          "id": "i8",
          "text": "pi = math.pi"
        },
        {
          "id": "i9",
          "text": "radius = int(input(\"Enter a radius for a circle.\"))"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Step 1",
          "correctItemId": "i7"
        },
        {
          "id": "z2",
          "label": "Step 2",
          "correctItemId": "i8"
        },
        {
          "id": "z3",
          "label": "Step 3",
          "correctItemId": "i5"
        },
        {
          "id": "z4",
          "label": "Step 4",
          "correctItemId": "i6"
        },
        {
          "id": "z5",
          "label": "Step 5",
          "correctItemId": "i4"
        }
      ],
      "explanation": "import math gives math.pi; float() allows decimal radii; ** is exponentiation (^ is bitwise XOR); %.2f formats two decimals (%.2d is not valid for floats)."
    },
    {
      "id": "py-340",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "A new developer is learning to display dates in multiple formats. Complete the code to produce the display shown below, leaving open the possibility of time being displayed in the future.\n\nExample output if the system date/time is 2023-01-01 03:19:43.412476:\n2023-01-01 03:19:43.412476\nThe current date is 01/01/2023\nThe current weekday is: 6",
      "code": "[1]\ncurrent_date = [2]\n\nprint(current_date)\nprint(\"The current date is\", datetime.datetime.strftime(current_date, \"[3]\"))\n\nprint(\"The current weekday is:\", current_date.[4])",
      "dragItems": [
        {
          "id": "i1",
          "text": "%MM%DD%YYYY"
        },
        {
          "id": "i2",
          "text": "weekday"
        },
        {
          "id": "i3",
          "text": "import calendar"
        },
        {
          "id": "i4",
          "text": "weekday()"
        },
        {
          "id": "i5",
          "text": "datetime.datetime.day()"
        },
        {
          "id": "i6",
          "text": "import timeSetting"
        },
        {
          "id": "i7",
          "text": "datetime.datetime.today()"
        },
        {
          "id": "i8",
          "text": "%m/%d/%Y"
        },
        {
          "id": "i9",
          "text": "import datetime"
        },
        {
          "id": "i10",
          "text": "day()"
        },
        {
          "id": "i11",
          "text": "%mm%dd%yyyy"
        },
        {
          "id": "i12",
          "text": "datetime.datetime.currentdate()"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i9"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i8"
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i4"
        }
      ],
      "explanation": "datetime.datetime.today() returns the current date and time. %m/%d/%Y formats as 01/01/2023, and weekday() is a method returning 0 (Monday) to 6 (Sunday)."
    },
    {
      "id": "py-341",
      "chapter": "functii",
      "type": "single",
      "question": "The code is used to calculate a subtotal for an order. What is the value of order1?",
      "code": "def calcTotal(taxable, amount, salesTax, shipping):\n    if taxable == \"Yes\":\n        subtotal = amount + (1 * salesTax) + shipping\n    elif shipping == 0:\n        pass\n    else:\n        subtotal = amount + shipping\n    return subtotal\n\norder1 = calcTotal(\"No\", 500, .07, 0)\nprint(\"Your order total is \", order1)",
      "options": [
        "500.07",
        "An error is raised",
        "535",
        "500"
      ],
      "correct": 1,
      "explanation": "taxable is \"No\" and shipping is 0, so the elif branch runs pass and subtotal is never assigned. return subtotal then raises UnboundLocalError."
    },
    {
      "id": "py-342",
      "chapter": "functii",
      "type": "true_false",
      "question": "score1 = 3300",
      "code": "def score_adj(score, rank):\n    new_score = score\n    if score > 3000 and rank > 3:\n        new_score += 300\n    elif score > 2500 and rank > 2:\n        new_score += 250\n    else:\n        new_score += 50\n    return new_score\n\nscore1 = score_adj(3000, 3)\nscore2 = score_adj(2000, 2)\nscore3 = score_adj(5000, 5)\n\nprint(score1, score2, score3)",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "For (3000, 3): score > 3000 is False, so the elif applies (3000 > 2500 and 3 > 2): 3000 + 250 = 3250."
    },
    {
      "id": "py-343",
      "chapter": "functii",
      "type": "true_false",
      "question": "score3 = 5300",
      "code": "def score_adj(score, rank):\n    new_score = score\n    if score > 3000 and rank > 3:\n        new_score += 300\n    elif score > 2500 and rank > 2:\n        new_score += 250\n    else:\n        new_score += 50\n    return new_score\n\nscore1 = score_adj(3000, 3)\nscore2 = score_adj(2000, 2)\nscore3 = score_adj(5000, 5)\n\nprint(score1, score2, score3)",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "For (5000, 5): 5000 > 3000 and 5 > 3, so 5000 + 300 = 5300."
    },
    {
      "id": "py-344",
      "chapter": "functii",
      "type": "true_false",
      "question": "score2 = 2250",
      "code": "def score_adj(score, rank):\n    new_score = score\n    if score > 3000 and rank > 3:\n        new_score += 300\n    elif score > 2500 and rank > 2:\n        new_score += 250\n    else:\n        new_score += 50\n    return new_score\n\nscore1 = score_adj(3000, 3)\nscore2 = score_adj(2000, 2)\nscore3 = score_adj(5000, 5)\n\nprint(score1, score2, score3)",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "For (2000, 2) neither condition is true, so the else branch adds 50: 2050."
    },
    {
      "id": "py-345",
      "chapter": "module-librarii",
      "type": "drag_drop",
      "question": "Complete the code: result1 must be one randomly chosen country, result2 a new list containing every country in random order, and result3 a list of two distinct randomly chosen countries.",
      "code": "[1]\ncountries = ['USA','Canada','Mexico','Japan','Spain','Kenya']\nresult1 = random.[2]\nresult2 = random.[3]\nresult3 = random.[4]",
      "dragItems": [
        {
          "id": "i1",
          "text": "sample(countries,2)"
        },
        {
          "id": "i2",
          "text": "choice(countries)"
        },
        {
          "id": "i3",
          "text": "sample(countries, len(countries))"
        },
        {
          "id": "i4",
          "text": "import random"
        },
        {
          "id": "i5",
          "text": "import shuffle"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i1"
        }
      ],
      "explanation": "choice() returns one element. sample(countries, len(countries)) returns a new randomized list. sample(countries, 2) returns two distinct elements. shuffle() mutates a list in place and returns None."
    },
    {
      "id": "py-346",
      "chapter": "module-librarii",
      "type": "dropdown",
      "question": "A user gets five chances to guess a whole number from 1 to 10. If the guess is correct, a congratulatory message is shown and the game ends. Complete the code. Assume every input is a valid integer.",
      "code": "[1]\n\nrandNum = [2]\nfor i in range(5):\n    guess = int(input(\"Enter a number from 1 to 10. \"))\n    if guess == randNum:\n        print(\"We matched!\")\n        break\n    else:\n        print(\"We did not match. Try again\")",
      "dragItems": [
        {
          "id": "i1",
          "text": "randint(1,10)"
        },
        {
          "id": "i2",
          "text": "from random import randint"
        },
        {
          "id": "i3",
          "text": "from random import random"
        },
        {
          "id": "i4",
          "text": "randint(1,11)"
        },
        {
          "id": "i5",
          "text": "from random import randrange"
        },
        {
          "id": "i6",
          "text": "randrange(1,10)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i1"
        }
      ],
      "explanation": "randint(1, 10) includes both 1 and 10, and it must be imported from random. randint(1, 11) could return 11, and randrange(1, 10) never returns 10."
    },
    {
      "id": "py-347",
      "chapter": "module-librarii",
      "type": "drag_drop",
      "question": "Match each fully qualified function to its standard-library module.",
      "dragItems": [
        {
          "id": "i1",
          "text": "os"
        },
        {
          "id": "i2",
          "text": "sys"
        },
        {
          "id": "i3",
          "text": "io"
        },
        {
          "id": "i4",
          "text": "math"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "io.open()",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "math.ceil()",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "os.mkdir()",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "sys.exit()",
          "correctItemId": "i2"
        }
      ],
      "explanation": "io.open belongs to io, math.ceil to math, os.mkdir to os, and sys.exit to sys. The unqualified open() is also available as a built-in; exit() alone is a different interactive helper."
    },
    {
      "id": "py-348",
      "chapter": "module-librarii",
      "type": "dropdown",
      "question": "You are demonstrating advanced math calculations: c = 3 raised to the second power, d = the square root of a, e = the whole number of the square root of b. Fill in the missing pieces of the code. Not every piece will be used.",
      "code": "import [1]\n\na = 3\nb = 2\nc = math.[2]([3])\nd = math.[4]\ne = math.[5]",
      "dragItems": [
        {
          "id": "i1",
          "text": "isqrt(a)"
        },
        {
          "id": "i2",
          "text": "sqrt(a)"
        },
        {
          "id": "i3",
          "text": "math"
        },
        {
          "id": "i4",
          "text": "isqrt(b)"
        },
        {
          "id": "i5",
          "text": "sq(a)"
        },
        {
          "id": "i6",
          "text": "pow"
        },
        {
          "id": "i7",
          "text": "isq(a)"
        },
        {
          "id": "i8",
          "text": "isq(b)"
        },
        {
          "id": "i9",
          "text": "1, 3"
        },
        {
          "id": "i10",
          "text": "**"
        },
        {
          "id": "i11",
          "text": "sq(b)"
        },
        {
          "id": "i12",
          "text": "a, b"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12"
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i2"
        },
        {
          "id": "z5",
          "label": "Blank [5]",
          "correctItemId": "i4"
        }
      ],
      "explanation": "math.pow(a, b) raises a to the power b; math.sqrt(a) is the square root; math.isqrt(b) returns the integer part of the square root of b (isqrt(2) = 1)."
    },
    {
      "id": "py-349",
      "chapter": "module-librarii",
      "type": "drag_drop",
      "question": "You are generating 10 sets of random numbers. One random number is between 3 and 99 and is a multiple of 3; the other is between 0 and 1. Drag the snippets needed to complete the code.",
      "code": "import random\n\nfor i in range(10):\n    print(random.[1])\n    print(random.[2])",
      "dragItems": [
        {
          "id": "i1",
          "text": "randrange(3,102,3)"
        },
        {
          "id": "i2",
          "text": "randrange(3,99,3)"
        },
        {
          "id": "i3",
          "text": "randint()"
        },
        {
          "id": "i4",
          "text": "random()"
        },
        {
          "id": "i5",
          "text": "randint(3,102,3)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i4"
        }
      ],
      "explanation": "randrange(3,102,3) can return 3, 6, ..., 99 (the stop value is excluded). random() returns a float from 0.0 up to (not including) 1.0."
    },
    {
      "id": "py-350",
      "chapter": "module-librarii",
      "type": "true_false",
      "question": "d will return 33.0.",
      "code": "from math import isnan\n\na = float(\"nan\")\nb = float(33)\nc = isnan(a)\nd = isnan(b)",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "isnan() returns a Boolean, so d is False; b itself is 33.0."
    },
    {
      "id": "py-351",
      "chapter": "module-librarii",
      "type": "true_false",
      "question": "The code will fail due to a runtime error.",
      "code": "from math import isnan\n\na = float(\"nan\")\nb = float(33)\nc = isnan(a)\nd = isnan(b)",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "float(\"nan\") is valid and isnan() accepts it, so the code runs without errors (it fails only if isnan has not been imported)."
    },
    {
      "id": "py-352",
      "chapter": "module-librarii",
      "type": "true_false",
      "question": "c will return True.",
      "code": "from math import isnan\n\na = float(\"nan\")\nb = float(33)\nc = isnan(a)\nd = isnan(b)",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "a is NaN, so isnan(a) is True."
    },
    {
      "id": "py-353",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "A developer is building a unit test and needs the built-in module class, a check for running as the main module, and a check that two values are equal. Select the code needed to finish the unit test.",
      "code": "import unittest\na = 3\nb = 6\n\nclass Test_Example_UnitTest(unittest.[1]):\n    def test_equal(self):\n        self.[2](2 + 8, a + b)\n\nif [3] == '__main__':\n    unittest.main()",
      "dragItems": [
        {
          "id": "i1",
          "text": "assertIn"
        },
        {
          "id": "i2",
          "text": "assertEqual"
        },
        {
          "id": "i3",
          "text": "TestCase"
        },
        {
          "id": "i4",
          "text": "name"
        },
        {
          "id": "i5",
          "text": "__name__"
        },
        {
          "id": "i6",
          "text": "assertTrue"
        },
        {
          "id": "i7",
          "text": "TestAssert"
        },
        {
          "id": "i8",
          "text": "_name"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i5"
        }
      ],
      "explanation": "Test classes inherit from unittest.TestCase, assertEqual(first, second) compares two values, and __name__ == '__main__' checks that the file is run directly."
    },
    {
      "id": "py-354",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "Which statement tests whether a and b share the same memory space?",
      "code": "def test_memory(self):\n    a = 3\n    b = a\n    # insert assert test here",
      "options": [
        "self.assertIs(a, b)",
        "self.assertEqual(a, b)",
        "self.assertIn(a, b)",
        "self.assertTrue(a, b)"
      ],
      "correct": 0,
      "explanation": "assertIs(a, b) checks that a and b are the same object (a is b). assertEqual only compares values."
    },
    {
      "id": "py-355",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "The code divides two numbers. You want to handle errors gracefully and make sure the last print statement always prints, even if there is an error. Fill in the missing keywords.",
      "code": "[1]\n    x = float(input(\"Enter a number. \"))\n    y = float(input(\"Enter a number to divide by. \"))\n    print(f\"The answer is {x/y}.\")\n[2]\n    print(\"Uh oh. Did you enter something besides a number? Did you try to divide by zero?\")\n[3]\n    print(\"You successfully played the division game.\")\n[4]\n    print(\"Thank you for playing.\")",
      "dragItems": [
        {
          "id": "i1",
          "text": "try:"
        },
        {
          "id": "i2",
          "text": "else:"
        },
        {
          "id": "i3",
          "text": "finally:"
        },
        {
          "id": "i4",
          "text": "except:"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i3"
        }
      ],
      "explanation": "try holds the risky code, except handles errors, else runs only if no error occurred, and finally always runs."
    },
    {
      "id": "py-356",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "Select the keyword that throws an exception the calling code can catch, and the keyword for a block that runs no matter the outcome of the try portion.",
      "code": "x = float(input(\"Enter a number. \"))\ny = float(input(\"Enter a number to divide by. \"))\n\ntry:\n    print(f\"The answer is {x/y}.\")\nexcept:\n    if y == 0:\n        [1] Exception(\"You cannot divide by zero\")\n[2]:\n    print(\"Thank you for playing.\")",
      "dragItems": [
        {
          "id": "i1",
          "text": "result"
        },
        {
          "id": "i2",
          "text": "throw"
        },
        {
          "id": "i3",
          "text": "else"
        },
        {
          "id": "i4",
          "text": "finally"
        },
        {
          "id": "i5",
          "text": "raise"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i5"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i4"
        }
      ],
      "explanation": "Python raises exceptions with raise (throw does not exist), and finally always executes."
    },
    {
      "id": "py-357",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "You are dividing two numbers. The result must display as long as there are no errors; if there are errors, a message must say the user divided by zero or used an invalid number. Fill in the missing keywords.",
      "code": "[1]:\n    a = float(input(\"Enter a number. \"))\n    b = float(input(\"Enter a number to divide by. \"))\n    print(f\"The answer is {a/b}.\")\n[2] (ValueError, ZeroDivisionError):\n    print(\"Invalid number or division by zero.\")",
      "dragItems": [
        {
          "id": "i1",
          "text": "finally"
        },
        {
          "id": "i2",
          "text": "catch"
        },
        {
          "id": "i3",
          "text": "else"
        },
        {
          "id": "i4",
          "text": "except"
        },
        {
          "id": "i5",
          "text": "try"
        },
        {
          "id": "i6",
          "text": "attempt"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i5"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i4"
        }
      ],
      "explanation": "try encloses both conversion and division. except (ValueError, ZeroDivisionError) handles invalid numeric input and a zero divisor."
    },
    {
      "id": "py-358",
      "chapter": "gestionare-erori",
      "type": "true_false",
      "question": "Assume both input conversions succeed and execution enters the try statement. In ordinary control flow, its finally block runs whether the division succeeds or raises an exception.",
      "code": "a = float(input(\"Enter a number. \"))\nb = float(input(\"Enter a number to divide by. \"))\n\ntry:\n    print(f\"The answer is {a/b}.\")\nexcept:\n    print(\"This did not work. Did you try to divide by zero?\")\nelse:\n    print(\"You successfully divided two numbers.\")\nfinally:\n    print(\"Thank you for playing.\")",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "finally runs after entering the try statement. In this code, invalid input can fail before try is entered, so finally is not guaranteed for every possible input."
    },
    {
      "id": "py-359",
      "chapter": "gestionare-erori",
      "type": "true_false",
      "question": "Both the try and except parts will run if a = 0 and b != 0.",
      "code": "a = float(input(\"Enter a number. \"))\nb = float(input(\"Enter a number to divide by. \"))\n\ntry:\n    print(f\"The answer is {a/b}.\")\nexcept:\n    print(\"This did not work. Did you try to divide by zero?\")\nelse:\n    print(\"You successfully divided two numbers.\")\nfinally:\n    print(\"Thank you for playing.\")",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "0 / b (b != 0) is valid, so no exception occurs and the except block does not run."
    },
    {
      "id": "py-360",
      "chapter": "gestionare-erori",
      "type": "true_false",
      "question": "The else part will run if a = 0 and b != 0.",
      "code": "a = float(input(\"Enter a number. \"))\nb = float(input(\"Enter a number to divide by. \"))\n\ntry:\n    print(f\"The answer is {a/b}.\")\nexcept:\n    print(\"This did not work. Did you try to divide by zero?\")\nelse:\n    print(\"You successfully divided two numbers.\")\nfinally:\n    print(\"Thank you for playing.\")",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "No exception occurs (0 divided by a nonzero number is 0.0), so the else block runs."
    },
    {
      "id": "py-361",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "A junior programmer writes the following code to store a list and then retrieve an item from the list. What type of error message (if this code generates an error) will it produce?",
      "code": "trees = ['Douglas fir', 'Oak', 'Balsam fir']\nlast_tree = trees[3]\nprint(f'The last tree is {last_tree}.')",
      "options": [
        "A runtime error.",
        "A logic error.",
        "No error will be generated.",
        "A syntax error."
      ],
      "correct": 0,
      "explanation": "The syntax is valid, but index 3 does not exist (valid indexes are 0 to 2), so an IndexError is raised at runtime."
    },
    {
      "id": "py-362",
      "chapter": "gestionare-erori",
      "type": "drag_drop",
      "question": "You are setting up several assert tests for an app. Place the applicable assert test for each unit test. test1 checks whether a calculation is true or false, test2 checks whether an item is within a list of items, and test3 checks whether an object belongs to a class.",
      "code": "def test1(self):\n    self.[1](5 + 3 * 4 == 17)\n\ndef test2(self):\n    a = 'clock'\n    b = ['clock', 'watch', 'phone']\n    self.[2](a, b)\n\ndef test3(self):\n    game = Game()\n    self.[3](game, Game)",
      "dragItems": [
        {
          "id": "i1",
          "text": "assertInstance"
        },
        {
          "id": "i2",
          "text": "assertEqual"
        },
        {
          "id": "i3",
          "text": "assertIsInstance"
        },
        {
          "id": "i4",
          "text": "assertTrue"
        },
        {
          "id": "i5",
          "text": "assertInInstance"
        },
        {
          "id": "i6",
          "text": "assertIn"
        },
        {
          "id": "i7",
          "text": "assertIs"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i3"
        }
      ],
      "explanation": "assertTrue checks a condition, assertIn(item, container) checks membership, and assertIsInstance(obj, Class) checks the type. assertInInstance and assertInstance do not exist."
    },
    {
      "id": "py-363",
      "chapter": "gestionare-erori",
      "type": "multiple",
      "question": "A junior programmer enters the following code. When trying to run it, errors are generated. Which two fixes are necessary for it to work? (Choose 2.)",
      "code": "height = 5\nwidth = 5\nif height == width\nprint(\"You have a square\")",
      "options": [
        "The if condition needs to be in parentheses.",
        "The print statement needs to be indented.",
        "A colon needs to be added at the end of the if condition.",
        "The if condition needs to have a single equals sign, not a double equals sign."
      ],
      "correct": [
        1,
        2
      ],
      "explanation": "An if statement needs a colon at the end of the condition, and its body must be indented. == is the correct comparison operator."
    },
    {
      "id": "py-364",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "The financed amount is carLoan + licenseFee, and the 1.05 multiplier must apply to that entire amount. Which line correctly calculates the total?",
      "code": "carLoan = 20000\nintRate = 1.05\nlicenseFee = 500\ntotalLoan = carLoan + licenseFee * intRate",
      "options": [
        "totalLoan = carloan - licenseFee * intRate",
        "totalLoan = carLoan + (licenseFee * intRate)",
        "totalLoan = (carLoan + licenseFee) * intRate",
        "totalLoan = carLoan + licenseFee / intRate"
      ],
      "correct": 2,
      "explanation": "Multiplication happens before addition, so the interest rate only applied to the license fee (a logic error). Parentheses make it apply to both amounts: (carLoan + licenseFee) * intRate."
    },
    {
      "id": "py-365",
      "chapter": "structura-cod",
      "type": "dropdown",
      "question": "A developer wants documentation for a function to display when called in a print statement. Fill in the code necessary to generate the documentation.",
      "code": "def area(width, height):\n    [1]Generates the area of a rectangle[2]\n    totalArea = width * height\n    return totalArea\n\nprint([3])",
      "dragItems": [
        {
          "id": "i1",
          "text": "area.doc"
        },
        {
          "id": "i2",
          "text": "'''"
        },
        {
          "id": "i3",
          "text": "area(__doc__)"
        },
        {
          "id": "i4",
          "text": "///"
        },
        {
          "id": "i5",
          "text": "//"
        },
        {
          "id": "i6",
          "text": "###"
        },
        {
          "id": "i7",
          "text": "#"
        },
        {
          "id": "i8",
          "text": "area.__doc__"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i8"
        }
      ],
      "explanation": "A docstring is written between triple quotes as the first statement of the function, and it can be displayed with area.__doc__."
    },
    {
      "id": "py-366",
      "chapter": "structura-cod",
      "type": "true_false",
      "question": "The proper syntax for pydoc is: python -m pydoc module, where module represents the name of a Python module.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "pydoc is run as a module: python -m pydoc <module>."
    },
    {
      "id": "py-367",
      "chapter": "structura-cod",
      "type": "true_false",
      "question": "The pydoc documentation module can be run from a command-line prompt with python -m pydoc.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "pydoc is a Python module with a command-line interface: python -m pydoc. Some Python installations also provide a pydoc or pydoc3 launcher; this does not make it an independent self-contained executable."
    },
    {
      "id": "py-368",
      "chapter": "structura-cod",
      "type": "true_false",
      "question": "Pydoc generates documentation on Python modules.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "pydoc generates documentation from Python modules, classes and functions (using their docstrings)."
    },
    {
      "id": "py-369",
      "chapter": "operatori-tipuri",
      "type": "drag_drop",
      "question": "Order these Python operators from highest to lowest precedence.",
      "explanation": "Exponentiation precedes multiplication, addition, comparisons, not and and. This question concerns precedence, not guaranteed operand evaluation order.",
      "dragItems": [
        {
          "id": "i1",
          "text": "+"
        },
        {
          "id": "i2",
          "text": "<="
        },
        {
          "id": "i3",
          "text": "**"
        },
        {
          "id": "i4",
          "text": "and"
        },
        {
          "id": "i5",
          "text": "not"
        },
        {
          "id": "i6",
          "text": "*"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Position 1",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Position 2",
          "correctItemId": "i6"
        },
        {
          "id": "z3",
          "label": "Position 3",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "Position 4",
          "correctItemId": "i2"
        },
        {
          "id": "z5",
          "label": "Position 5",
          "correctItemId": "i5"
        },
        {
          "id": "z6",
          "label": "Position 6",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "py-370",
      "chapter": "operatori-tipuri",
      "type": "drag_drop",
      "question": "Match each Python 3 expression to the type of its result.",
      "explanation": "String addition concatenates; / produces float, integer multiplication produces int, and a comparison produces bool.",
      "dragItems": [
        {
          "id": "i1",
          "text": "float"
        },
        {
          "id": "i2",
          "text": "str"
        },
        {
          "id": "i3",
          "text": "bool"
        },
        {
          "id": "i4",
          "text": "int"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "\"5\" + \"10\"",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "10 / 2",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "4 * 2",
          "correctItemId": "i4"
        },
        {
          "id": "z4",
          "label": "len(\"cat\") == 3",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "py-371",
      "chapter": "structura-cod",
      "type": "dropdown",
      "question": "Complete the membership assertion and standard script entry-point guard.",
      "explanation": "assertIn checks membership. __name__ equals \"__main__\" when the module is executed as the main script.",
      "code": "import unittest\nclass TestListContents(unittest.TestCase):\n    def test_item_in_list(self):\n        fruits = [\"apple\", \"banana\", \"cherry\"]\n        self.[1](\"banana\", fruits)\n\nif [2] == \"[3]\":\n    unittest.main()",
      "dragItems": [
        {
          "id": "i1",
          "text": "assertIn"
        },
        {
          "id": "i2",
          "text": "assertEqual"
        },
        {
          "id": "i3",
          "text": "assertIs"
        },
        {
          "id": "i4",
          "text": "__name__"
        },
        {
          "id": "i5",
          "text": "name"
        },
        {
          "id": "i6",
          "text": "__main__"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Membership assertion",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Special module-name variable",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Entry-point string",
          "correctItemId": "i6"
        }
      ]
    },
    {
      "id": "py-372",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "Complete the function so division by zero is handled and the final message is always printed during normal exception unwinding.",
      "explanation": "try executes the division, except handles ZeroDivisionError, and finally runs on both paths.",
      "code": "def divide_numbers(a, b):\n    [1]\n        result = a / b\n    [2] ZeroDivisionError:\n        print(\"Cannot divide by zero!\")\n    [3]\n        print(\"Execution completed.\")",
      "dragItems": [
        {
          "id": "i1",
          "text": "try:"
        },
        {
          "id": "i2",
          "text": "except"
        },
        {
          "id": "i3",
          "text": "finally:"
        },
        {
          "id": "i4",
          "text": "else:"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Before division",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Before ZeroDivisionError",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Before final message",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "py-373",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "Logic errors can produce incorrect output without raising exceptions. raise triggers an exception; valid try statements require an exception handler or finalization clause.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A syntax error in the module being compiled is detected before that module starts executing.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A logic error necessarily crashes the program with a traceback.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "raise can intentionally trigger an exception.",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "A try statement requires at least an except or a finally clause.",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "py-374",
      "chapter": "structura-cod",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "The leading string documents the module. A function docstring must be its first body statement. Comments are ignored by normal execution.",
      "code": "01 \"\"\"This module calculates discounted prices.\"\"\"\n02 def apply_discount(price, discount):\n03     # Check if the price is negative\n04     if price < 0:\n05         return 0 # Price cannot be negative\n06     return price - (price * discount)",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 01 is a module docstring, not the function docstring.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Line 03 is executed as an instruction.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Line 05 contains an inline comment.",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "Removing # from line 03 makes that line invalid Python syntax.",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "py-375",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "The second if is independent of the first if/elif chain. Its else applies only to temp == 25.",
      "code": "temp = 25\nif temp >= 30:\n    print(\"Hot\")\nelif temp >= 20 and temp < 30:\n    print(\"Warm\")\nif temp == 25:\n    print(\"Perfect\")\nelse:\n    print(\"Cold\")",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "At temp=25, the output is Warm followed by Perfect.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "At temp=35, the only output is Hot.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "At temp=35, the output is Hot followed by Cold.",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "The elif condition is true at exactly 20.",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "py-376",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Skip negative readings, stop at zero, and sum positive readings.",
      "explanation": "continue skips the remainder of an iteration; break terminates the loop. The resulting total is 13.",
      "code": "readings = [5, -2, 8, 0, 10]\ntotal = 0\nfor num in readings:\n    if num < 0:\n        [1]\n    if num == 0:\n        [2]\n    total += num\nprint(total)",
      "dragItems": [
        {
          "id": "i1",
          "text": "continue"
        },
        {
          "id": "i2",
          "text": "break"
        },
        {
          "id": "i3",
          "text": "pass"
        },
        {
          "id": "i4",
          "text": "return"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Negative-reading branch",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Zero-reading branch",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "py-377",
      "chapter": "functii",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "Defaults apply only when an argument is omitted. The required name argument has no default.",
      "code": "def greet_user(name, greeting=\"Hello\"):\n    return greeting + \", \" + name",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "greet_user(\"Alice\") returns \"Hello, Alice\".",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Providing greet_user(\"Bob\", \"Welcome\") raises an error because greeting has a default.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "greet_user() raises TypeError because name is missing.",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "py-378",
      "chapter": "structuri-date",
      "type": "single",
      "question": "What is the exact output?",
      "options": [
        "['orange', 'red', 'green', 'yellow']",
        "['red', 'green', 'yellow']",
        "['red', 'orange', 'green', 'yellow']",
        "['red', 'orange', 'blue', 'green', 'yellow']"
      ],
      "correct": 2,
      "explanation": "append adds yellow, insert adds orange at index 1, and remove deletes blue.",
      "code": "colors = [\"red\", \"blue\", \"green\"]\ncolors.append(\"yellow\")\ncolors.insert(1, \"orange\")\ncolors.remove(\"blue\")\nprint(colors)"
    },
    {
      "id": "py-379",
      "chapter": "input-output",
      "type": "single",
      "question": "Read the entire existing text file into one string and close it automatically. Which code is correct?",
      "options": [
        "file = open(\"data.txt\", \"w\")\ncontent = file.read()",
        "with open(\"data.txt\", \"r\") as file:\n    content = file.write()",
        "with open(\"data.txt\", \"r\") as file:\n    content = file.read()",
        "file = open(\"data.txt\", \"a\")\ncontent = file.get()"
      ],
      "correct": 2,
      "explanation": "A with statement closes the file on exit. read() without a size returns the remaining text."
    },
    {
      "id": "py-380",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Complete positional string formatting for the product and its price.",
      "explanation": "format fills the first placeholder with item and the second with price.",
      "code": "item = \"Monitor\"\nprice = 299.99\noutput = \"The {} costs ${}\".[1]([2])\nprint(output)",
      "dragItems": [
        {
          "id": "i1",
          "text": "format"
        },
        {
          "id": "i2",
          "text": "join"
        },
        {
          "id": "i3",
          "text": "item, price"
        },
        {
          "id": "i4",
          "text": "price, item"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "String method",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Arguments in placeholder order",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "py-381",
      "chapter": "module-librarii",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "ceil rounds upward; floor rounds downward. math.pow(2,3) returns 8.0.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "math.ceil(4.7) returns the integer 5.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "math.floor(4.7) returns the integer 4.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "math.pow(2, 3) returns 6.0.",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "py-382",
      "chapter": "module-librarii",
      "type": "single",
      "question": "For this command, what is sys.argv[1]?",
      "options": [
        "output.txt",
        "python",
        "data_2026.csv",
        "process.py"
      ],
      "correct": 2,
      "explanation": "sys.argv[0] names the script. The first subsequent argument is data_2026.csv.",
      "code": "python process.py data_2026.csv output.txt"
    },
    {
      "id": "py-383",
      "chapter": "structuri-date",
      "type": "drag_drop",
      "question": "Match each operation on scores = [45,90,85,60] to its purpose. Treat each description independently.",
      "explanation": "sort and reverse mutate the list and return None. max returns the largest value.",
      "dragItems": [
        {
          "id": "i1",
          "text": "min(scores)"
        },
        {
          "id": "i2",
          "text": "scores.reverse()"
        },
        {
          "id": "i3",
          "text": "max(scores)"
        },
        {
          "id": "i4",
          "text": "scores.append(100)"
        },
        {
          "id": "i5",
          "text": "scores.sort()"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Sort ascending in place",
          "correctItemId": "i5"
        },
        {
          "id": "z2",
          "label": "Return the highest score",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Reverse the current order in place",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "py-384",
      "chapter": "module-librarii",
      "type": "dropdown",
      "question": "Complete the date/time capture and formatting.",
      "explanation": "datetime.datetime.now() returns the current local datetime. strftime formats it with the specified pattern.",
      "code": "import datetime\ncurrent_time = datetime.datetime.[1]\nformatted_time = current_time.[2](\"%Y-%m-%d %H:%M:%S\")\nprint(\"Event logged at:\", formatted_time)",
      "dragItems": [
        {
          "id": "i1",
          "text": "now()"
        },
        {
          "id": "i2",
          "text": "today"
        },
        {
          "id": "i3",
          "text": "strftime"
        },
        {
          "id": "i4",
          "text": "strptime"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Current local date/time",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Format datetime as text",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "py-385",
      "chapter": "module-librarii",
      "type": "drag_drop",
      "question": "Match the filesystem function to its task. Assume import os has already run.",
      "explanation": "exists tests path existence, remove deletes a file, and isdir tests for a directory. exists also returns True for a directory with that name; isfile is stricter for a regular-file requirement.",
      "dragItems": [
        {
          "id": "i1",
          "text": "os.check(\"data.txt\")"
        },
        {
          "id": "i2",
          "text": "os.remove(\"old_data.txt\")"
        },
        {
          "id": "i3",
          "text": "os.path.exists(\"data.txt\")"
        },
        {
          "id": "i4",
          "text": "os.delete(\"old_data.txt\")"
        },
        {
          "id": "i5",
          "text": "os.path.isdir(\"backup\")"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Test whether data.txt exists",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Delete old_data.txt",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Test whether backup identifies a directory",
          "correctItemId": "i5"
        }
      ]
    },
    {
      "id": "py-386",
      "chapter": "operatori-tipuri",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "The string contains y but not z, so check2 short-circuits to False. vowels is a list, not a str.",
      "code": "text = \"Python Exam\"\nvowels = [\"a\", \"e\", \"i\", \"o\", \"u\"]\ncheck1 = \"y\" in text\ncheck2 = \"z\" in text and \"e\" in vowels\ncheck3 = type(vowels) is str",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "check1 is True.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "check2 is True.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "check3 is False.",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "py-387",
      "chapter": "module-librarii",
      "type": "single",
      "question": "participants contains 20 distinct participant names. Select three unique winners without changing the original list. Which call is correct?",
      "options": [
        "random.shuffle(participants)",
        "random.choice(participants, 3)",
        "random.sample(participants, 3)",
        "random.randrange(3)"
      ],
      "correct": 2,
      "explanation": "sample samples without replacement and returns a new list. Distinct input names ensure distinct winner names."
    },
    {
      "id": "py-388",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Complete the loops to print exactly three rows of three asterisks.",
      "explanation": "end=\"\" suppresses the per-asterisk newline; print() after the inner loop ends each row.",
      "code": "for i in range(3):\n    for j in [1]:\n        print(\"*\", [2])\n    [3]",
      "dragItems": [
        {
          "id": "i1",
          "text": "range(3)"
        },
        {
          "id": "i2",
          "text": "range(4)"
        },
        {
          "id": "i3",
          "text": "end=\"\""
        },
        {
          "id": "i4",
          "text": "sep=\"\""
        },
        {
          "id": "i5",
          "text": "print()"
        },
        {
          "id": "i6",
          "text": "continue"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Inner range",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Print keyword argument",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "After each inner loop",
          "correctItemId": "i5"
        }
      ]
    },
    {
      "id": "py-389",
      "chapter": "input-output",
      "type": "single",
      "question": "Append error messages without truncating an existing log. Which mode is correct?",
      "options": [
        "open(\"app_log.txt\", \"w+\")",
        "open(\"app_log.txt\", \"r\")",
        "open(\"app_log.txt\", \"w\")",
        "open(\"app_log.txt\", \"a\")"
      ],
      "correct": 3,
      "explanation": "Append mode a writes at the end and creates the file if absent. w and w+ truncate an existing file."
    },
    {
      "id": "py-390",
      "chapter": "operatori-tipuri",
      "type": "drag_drop",
      "question": "Match each conversion expression to its resulting value. Quotation marks indicate strings.",
      "explanation": "int truncates toward zero, float produces a floating-point value, and string addition concatenates.",
      "dragItems": [
        {
          "id": "i1",
          "text": "\"40\""
        },
        {
          "id": "i2",
          "text": "40"
        },
        {
          "id": "i3",
          "text": "7.0"
        },
        {
          "id": "i4",
          "text": "\"4.0\""
        },
        {
          "id": "i5",
          "text": "5"
        },
        {
          "id": "i6",
          "text": "6"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "int(5.8)",
          "correctItemId": "i5"
        },
        {
          "id": "z2",
          "label": "float(7)",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "str(4) + \"0\"",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "py-391",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Validate an already parsed integer percentage inclusively from 0 to 100.",
      "explanation": "A chained comparison includes both endpoints. else handles all integers outside the range. The shown int conversion would separately need exception handling for non-integer input.",
      "code": "score = int(input(\"Enter percentage: \"))\nif [1]:\n    print(\"Valid score.\")\n[2]:\n    print(\"Invalid score.\")",
      "dragItems": [
        {
          "id": "i1",
          "text": "0 <= score <= 100"
        },
        {
          "id": "i2",
          "text": "0 < score < 100"
        },
        {
          "id": "i3",
          "text": "score >= 0 or score <= 100"
        },
        {
          "id": "i4",
          "text": "else"
        },
        {
          "id": "i5",
          "text": "elif"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Valid-range condition",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Fallback branch keyword",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "py-392",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "The output is 1, 3, 4. continue skips one iteration; n is incremented before it, so the loop still terminates.",
      "code": "n = 0\nwhile n < 4:\n    n += 1\n    if n == 2:\n        continue\n    print(n)",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The code prints 2.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "The loop terminates completely at n=2.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "The final number printed is 4.",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "continue skips print(n) when n=2.",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "py-393",
      "chapter": "structura-cod",
      "type": "dropdown",
      "question": "Complete this unittest test class and equality assertion.",
      "explanation": "TestCase supplies test fixtures and assertions. assertEqual compares the actual result with the expected result.",
      "code": "import unittest\ndef multiply(a, b):\n    return a * b\nclass TestMath(unittest.[1]):\n    def test_multiply(self):\n        self.[2](multiply(3, 4), 12)",
      "dragItems": [
        {
          "id": "i1",
          "text": "TestCase"
        },
        {
          "id": "i2",
          "text": "TestSuite"
        },
        {
          "id": "i3",
          "text": "assertEqual"
        },
        {
          "id": "i4",
          "text": "assertIn"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Base class",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Assertion method",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "py-394",
      "chapter": "structuri-date",
      "type": "single",
      "question": "What is the exact output?",
      "options": [
        "['operator', 'manager', 'tester']",
        "['admin', 'guest', 'operator']",
        "['guest', 'operator', 'manager']",
        "['guest', 'operator', 'manager', 'tester']"
      ],
      "correct": 2,
      "explanation": "The start index is inclusive and the stop index exclusive. Indices 1,2,3 select guest, operator, manager.",
      "code": "users = [\"admin\", \"guest\", \"operator\", \"manager\", \"tester\"]\nsubset = users[1:4]\nprint(subset)"
    },
    {
      "id": "py-395",
      "chapter": "functii",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "The function prints 50 but has no return statement, so it returns None.",
      "code": "def calculate_area(length, width=5):\n    area = length * width\n    print(\"Area is:\", area)\nresult = calculate_area(10)",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The call successfully uses default width 5.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "result contains the integer 50.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "The console displays Area is: 50.",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "py-396",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Read all lines into a list and close the configuration file automatically.",
      "explanation": "with handles closure and as binds the open file object. readlines returns a list of lines.",
      "code": "[1] open(\"config.txt\", \"r\") [2] file:\n    lines = file.[3]()",
      "dragItems": [
        {
          "id": "i1",
          "text": "with"
        },
        {
          "id": "i2",
          "text": "try"
        },
        {
          "id": "i3",
          "text": "as"
        },
        {
          "id": "i4",
          "text": "in"
        },
        {
          "id": "i5",
          "text": "readlines"
        },
        {
          "id": "i6",
          "text": "read"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Context-manager keyword",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "File-binding keyword",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Read-lines method",
          "correctItemId": "i5"
        }
      ]
    },
    {
      "id": "py-397",
      "chapter": "structuri-control",
      "type": "drag_drop",
      "question": "Match each statement to its effect in a loop.",
      "explanation": "break exits the nearest loop; continue starts the next iteration; pass is a null operation. return exits a function.",
      "dragItems": [
        {
          "id": "i1",
          "text": "pass"
        },
        {
          "id": "i2",
          "text": "stop"
        },
        {
          "id": "i3",
          "text": "continue"
        },
        {
          "id": "i4",
          "text": "return"
        },
        {
          "id": "i5",
          "text": "break"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Terminate the current loop",
          "correctItemId": "i5"
        },
        {
          "id": "z2",
          "label": "Skip the rest of the current iteration",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Do nothing where a statement is syntactically required",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "py-398",
      "chapter": "module-librarii",
      "type": "dropdown",
      "question": "Complete the circumference and area calculations.",
      "explanation": "Circumference is 2πr and area is πr².",
      "code": "import math\nradius = 10\ncircumference = 2 * [1] * radius\narea = [2] * math.pi",
      "dragItems": [
        {
          "id": "i1",
          "text": "math.pi"
        },
        {
          "id": "i2",
          "text": "math.e"
        },
        {
          "id": "i3",
          "text": "radius ** 2"
        },
        {
          "id": "i4",
          "text": "radius * 2"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Circle constant",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Squared radius",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "py-399",
      "chapter": "structuri-date",
      "type": "drag_drop",
      "question": "Match each list operation to its purpose.",
      "explanation": "append adds at the end; remove deletes the first matching value; insert places a value before the specified index.",
      "dragItems": [
        {
          "id": "i1",
          "text": "devices.delete(\"switch1\")"
        },
        {
          "id": "i2",
          "text": "devices.remove(\"switch1\")"
        },
        {
          "id": "i3",
          "text": "devices.add(\"server1\")"
        },
        {
          "id": "i4",
          "text": "devices.insert(1, \"modem1\")"
        },
        {
          "id": "i5",
          "text": "devices.append(\"server1\")"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Append server1",
          "correctItemId": "i5"
        },
        {
          "id": "z2",
          "label": "Remove the first occurrence of switch1",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Insert modem1 at index 1",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "py-400",
      "chapter": "module-librarii",
      "type": "single",
      "question": "What is the exact output?",
      "options": [
        "-5",
        "5",
        "4",
        "-4"
      ],
      "correct": 2,
      "explanation": "fabs(-4.8) is 4.8. trunc removes the fractional portion and returns 4.",
      "code": "import math\nvalue = -4.8\nresult = math.trunc(math.fabs(value))\nprint(result)"
    },
    {
      "id": "py-401",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "Print Success only if converting the age to int raises no ValueError.",
      "explanation": "The else clause runs when the try suite completes without an exception. finally would run on both success and failure.",
      "code": "[1]\n    age = int(input(\"Enter your age: \"))\n[2] ValueError:\n    print(\"That is not a valid number.\")\n[3]\n    print(\"Success\")",
      "dragItems": [
        {
          "id": "i1",
          "text": "try:"
        },
        {
          "id": "i2",
          "text": "except"
        },
        {
          "id": "i3",
          "text": "else:"
        },
        {
          "id": "i4",
          "text": "finally:"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Before conversion",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Before ValueError",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Success-only branch",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "py-402",
      "chapter": "structuri-date",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "Certiport[2:5] selects indices 2,3,4, producing \"rti\". Negative index -1 selects the last character.",
      "code": "text = \"Certiport\"\nchar = text[0]\npart = text[2:5]\nlast_char = text[-1]",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "char is \"C\".",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "part is \"ert\".",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "last_char is \"t\".",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "py-403",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Complete the f-string greeting.",
      "explanation": "The f prefix enables replacement fields delimited by braces.",
      "code": "first_name = \"Alex\"\nscore = 95\nmessage = [1]\"Hello [2], your final score is [3].\"\nprint(message)",
      "dragItems": [
        {
          "id": "i1",
          "text": "f"
        },
        {
          "id": "i2",
          "text": "r"
        },
        {
          "id": "i3",
          "text": "{first_name}"
        },
        {
          "id": "i4",
          "text": "first_name"
        },
        {
          "id": "i5",
          "text": "{score}"
        },
        {
          "id": "i6",
          "text": "score"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "String prefix",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Interpolated name",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Interpolated score",
          "correctItemId": "i5"
        }
      ]
    },
    {
      "id": "py-404",
      "chapter": "operatori-tipuri",
      "type": "drag_drop",
      "question": "Order these grouped Python constructs from highest to lowest binding priority. Assignment is a statement and is not included as an expression operator.",
      "explanation": "Grouping controls evaluation; exponentiation binds more tightly than multiplication/division, which precede addition/subtraction and Boolean operators. Within the Boolean group, and binds more tightly than or.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Parenthesized grouping"
        },
        {
          "id": "i2",
          "text": "Exponentiation **"
        },
        {
          "id": "i3",
          "text": "Multiply * and divide /"
        },
        {
          "id": "i4",
          "text": "Add + and subtract -"
        },
        {
          "id": "i5",
          "text": "Boolean and/or"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Position 1",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Position 2",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Position 3",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Position 4",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "Position 5",
          "correctItemId": "i5"
        }
      ]
    },
    {
      "id": "py-405",
      "chapter": "operatori-tipuri",
      "type": "dropdown",
      "question": "Select the type of each value (not the type of the object returned by type()).",
      "explanation": "False is bool, quoted \"False\" is str, 3.1415 is float, and 42 is int.",
      "dragItems": [
        {
          "id": "i1",
          "text": "bool"
        },
        {
          "id": "i2",
          "text": "str"
        },
        {
          "id": "i3",
          "text": "float"
        },
        {
          "id": "i4",
          "text": "int"
        },
        {
          "id": "i5",
          "text": "list"
        },
        {
          "id": "i6",
          "text": "dict"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "False",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "\"False\"",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "3.1415",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "42",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "py-406",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Read a user-entered integer. Assume the entered text is a valid base-ten integer.",
      "explanation": "input returns text; int parses it as an integer.",
      "code": "age = [1]([2](\"Enter your age: \"))",
      "dragItems": [
        {
          "id": "i1",
          "text": "int"
        },
        {
          "id": "i2",
          "text": "float"
        },
        {
          "id": "i3",
          "text": "input"
        },
        {
          "id": "i4",
          "text": "print"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Conversion function",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Input function",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "py-407",
      "chapter": "structura-cod",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "Python uses # comments. A # inside a quoted string is data, not a comment delimiter.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Python single-line comments start with //.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Outside string literals, # begins a comment extending to the end of the line.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "A comment can follow executable code on the same line.",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "py-408",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "Handle a missing file and close the file only if opening it succeeded.",
      "explanation": "Opening can fail before f is assigned. Initializing f to None and checking it in finally avoids an additional NameError. A with statement is normally simpler.",
      "code": "f = None\n[1]\n    f = open(\"data.txt\")\n[2] FileNotFoundError:\n    print(\"File is missing!\")\n[3]\n    if f is not None:\n        f.close()",
      "dragItems": [
        {
          "id": "i1",
          "text": "try:"
        },
        {
          "id": "i2",
          "text": "except"
        },
        {
          "id": "i3",
          "text": "finally:"
        },
        {
          "id": "i4",
          "text": "else:"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Open-attempt block",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Before FileNotFoundError",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Cleanup block",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "py-409",
      "chapter": "input-output",
      "type": "single",
      "question": "What is printed?",
      "options": [
        "My name is {name} and I am {age} years old.",
        "My name is Anna and I am 25 years old.",
        "Syntax error",
        "My name is %s and I am %d years old."
      ],
      "correct": 1,
      "explanation": "An f-string replaces brace-delimited expressions with their values.",
      "code": "name = \"Anna\"\nage = 25\nprint(f\"My name is {name} and I am {age} years old.\")"
    },
    {
      "id": "py-410",
      "chapter": "operatori-tipuri",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "Identifiers cannot start with a digit. Python uses dynamic binding and does not require explicit type declarations.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A Python identifier can begin with a digit.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Python requires an explicit variable type declaration such as int x = 5.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "A name bound to an int can later be rebound to a str.",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "py-411",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Complete this mutually exclusive temperature classification.",
      "explanation": "if starts the chain; elif tests another condition after previous failures; else handles the rest. At 15, Cold is printed.",
      "code": "t = 15\n[1] t < 0:\n    print(\"Freezing\")\n[2] t < 20:\n    print(\"Cold\")\n[3]\n    print(\"Warm\")",
      "dragItems": [
        {
          "id": "i1",
          "text": "if"
        },
        {
          "id": "i2",
          "text": "elif"
        },
        {
          "id": "i3",
          "text": "else:"
        },
        {
          "id": "i4",
          "text": "while"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "First condition",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Second condition",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Fallback branch",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "py-412",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What is the value of this expression?",
      "options": [
        "True",
        "False",
        "None",
        "Error"
      ],
      "correct": 0,
      "explanation": "True and False is False; not False is True; False or True is True.",
      "code": "(True and False) or (not False)"
    },
    {
      "id": "py-413",
      "chapter": "module-librarii",
      "type": "single",
      "question": "For python main.py start 8080, what is sys.argv[1]?",
      "options": [
        "main.py",
        "start",
        "8080",
        "python"
      ],
      "correct": 1,
      "explanation": "sys.argv[0] names the script, and sys.argv[1] is the first supplied argument."
    },
    {
      "id": "py-414",
      "chapter": "operatori-tipuri",
      "type": "drag_drop",
      "question": "Evaluate each comparison in Python 3.",
      "explanation": "Numeric and string values are not equal; != tests inequality, > excludes equality, and >= includes equality.",
      "dragItems": [
        {
          "id": "i1",
          "text": "True"
        },
        {
          "id": "i2",
          "text": "False"
        },
        {
          "id": "i3",
          "text": "Error"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "5 == \"5\"",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "5 != 4",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "10 > 10",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "10 >= 10",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "py-415",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "What does 10 // 3 return?",
      "options": [
        "3",
        "3.333",
        "1",
        "0"
      ],
      "correct": 0,
      "explanation": "For these positive integers, floor division returns 3."
    },
    {
      "id": "py-416",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Choose the method that reads all remaining text into one string.",
      "explanation": "read() without a size reads all remaining content. readlines returns a list.",
      "code": "with open(\"document.txt\", \"r\") as f:\n    content = f.[1]()",
      "dragItems": [
        {
          "id": "i1",
          "text": "read"
        },
        {
          "id": "i2",
          "text": "readline"
        },
        {
          "id": "i3",
          "text": "readlines"
        },
        {
          "id": "i4",
          "text": "write"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "File method",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "py-417",
      "chapter": "input-output",
      "type": "drag_drop",
      "question": "Match each file mode to its action.",
      "explanation": "r reads, w truncates or creates, a appends or creates, and x creates exclusively.",
      "dragItems": [
        {
          "id": "i1",
          "text": "r"
        },
        {
          "id": "i2",
          "text": "w"
        },
        {
          "id": "i3",
          "text": "a"
        },
        {
          "id": "i4",
          "text": "x"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Read an existing file",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Write and truncate an existing file",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Append without truncation",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "py-418",
      "chapter": "structuri-date",
      "type": "single",
      "question": "What is name[1:4]?",
      "options": [
        "yth",
        "ytho",
        "Pyt",
        "hon"
      ],
      "correct": 0,
      "explanation": "The slice selects indices 1 through 3 and excludes index 4.",
      "code": "name = \"Python\""
    },
    {
      "id": "py-419",
      "chapter": "structuri-date",
      "type": "single",
      "question": "What does my_list[::-1] return?",
      "options": [
        "[50, 40, 30, 20, 10]",
        "[10, 20, 30, 40, 50]",
        "[50]",
        "Error"
      ],
      "correct": 0,
      "explanation": "A step of -1 with omitted bounds returns a reversed copy.",
      "code": "my_list = [10, 20, 30, 40, 50]"
    },
    {
      "id": "py-420",
      "chapter": "module-librarii",
      "type": "dropdown",
      "question": "Select a random integer from 1 through 10, inclusive.",
      "explanation": "randint(a,b) includes both bounds; randrange(a,b) excludes b.",
      "code": "import random\nnumber = random.[1](1, 10)",
      "dragItems": [
        {
          "id": "i1",
          "text": "randint"
        },
        {
          "id": "i2",
          "text": "random"
        },
        {
          "id": "i3",
          "text": "randrange"
        },
        {
          "id": "i4",
          "text": "choice"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Function name",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "py-421",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "break works in for and while loops. continue skips to the next iteration.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "break terminates the nearest enclosing while loop.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "break merely skips the current iteration.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "break is allowed only in for loops, not while loops.",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "py-422",
      "chapter": "structuri-control",
      "type": "single",
      "question": "With the indentation shown, how many numbers are printed?",
      "options": [
        "Four: 1, 2, 3, 4",
        "Five: 1, 2, 3, 4, 5",
        "Three",
        "One"
      ],
      "correct": 0,
      "explanation": "range(1,5) includes 1 and excludes 5.",
      "code": "for i in range(1, 5):\n    print(i)"
    },
    {
      "id": "py-423",
      "chapter": "structuri-date",
      "type": "dropdown",
      "question": "Loop through key/value pairs in the dictionary.",
      "explanation": "items() yields (key,value) pairs suitable for unpacking.",
      "code": "scores = {\"John\": 10, \"Mary\": 9}\nfor key, value in scores.[1]():\n    print(key, value)",
      "dragItems": [
        {
          "id": "i1",
          "text": "items"
        },
        {
          "id": "i2",
          "text": "keys"
        },
        {
          "id": "i3",
          "text": "values"
        },
        {
          "id": "i4",
          "text": "pairs"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Dictionary method",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "py-424",
      "chapter": "functii",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "Local names belong to function scope. Reading globals normally needs no declaration, but rebinding one inside a function requires global.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A name bound only as a function-local variable is not directly accessible through that local name outside the function.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "global lets an assignment in a function rebind a module-global name.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "A function must declare global merely to read a global name.",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "py-425",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Which keyword can occur repeatedly after if to check additional mutually exclusive conditions?",
      "explanation": "Python uses elif, not elseif. More than one elif clause may appear.",
      "code": "if x == 1:\n    pass\n[1] x == 2:\n    pass",
      "dragItems": [
        {
          "id": "i1",
          "text": "elif"
        },
        {
          "id": "i2",
          "text": "else"
        },
        {
          "id": "i3",
          "text": "elseif"
        },
        {
          "id": "i4",
          "text": "while"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Keyword used for additional conditions",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "py-426",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "Which listed value is falsy?",
      "options": [
        "0",
        "\"False\"",
        "[1, 2]",
        "-1"
      ],
      "correct": 0,
      "explanation": "Numeric zero is falsy. Nonempty strings and lists and nonzero integers are truthy."
    },
    {
      "id": "py-427",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "pass does nothing and execution continues. break terminates a loop.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "pass is a null-operation placeholder for a required statement.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "pass stops the entire program.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "pass has the same effect as break.",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "py-428",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "Which statement swaps a and b without a temporary variable?",
      "options": [
        "a, b = b, a",
        "a = b; b = a",
        "swap(a, b)"
      ],
      "correct": 0,
      "explanation": "The right-hand expressions are evaluated before their values are assigned to the left-hand targets."
    },
    {
      "id": "py-429",
      "chapter": "operatori-tipuri",
      "type": "dropdown",
      "question": "Complete the non-membership test.",
      "explanation": "not in tests that a value is absent from a container.",
      "code": "if \"A\" [1] text:\n    print(\"Missing!\")",
      "dragItems": [
        {
          "id": "i1",
          "text": "not in"
        },
        {
          "id": "i2",
          "text": "is not"
        },
        {
          "id": "i3",
          "text": "!="
        },
        {
          "id": "i4",
          "text": "not"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Operator",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "py-430",
      "chapter": "operatori-tipuri",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "Distinct objects may compare equal. is tests whether the operands refer to the same object.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "== performs equality comparison.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "is tests object identity.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "is and == always mean the same thing.",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "py-431",
      "chapter": "structuri-date",
      "type": "dropdown",
      "question": "Append one new item to the end of an existing list.",
      "explanation": "append adds its argument as one item. extend iterates its argument and adds each element.",
      "code": "my_list.[1](new_item)",
      "dragItems": [
        {
          "id": "i1",
          "text": "append"
        },
        {
          "id": "i2",
          "text": "extend"
        },
        {
          "id": "i3",
          "text": "insert"
        },
        {
          "id": "i4",
          "text": "add"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "List method",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "py-432",
      "chapter": "structuri-date",
      "type": "single",
      "question": "Which expression returns \"John likes oranges\" from text = \"John likes apples\"?",
      "options": [
        "text.replace(\"apples\", \"oranges\")",
        "text.split(\"apples\", \"oranges\")",
        "text[\"apples\"] = \"oranges\"",
        "text.strip(\"apples\")"
      ],
      "correct": 0,
      "explanation": "replace returns a new string; strings are immutable. Assign the result back to text if the variable must retain the replacement."
    },
    {
      "id": "py-433",
      "chapter": "functii",
      "type": "single",
      "question": "What is printed?",
      "options": [
        "14",
        "68",
        "7",
        "Error"
      ],
      "correct": 0,
      "explanation": "The calls return 6 and 8, whose sum is 14.",
      "code": "def test_func(x):\n    return x * 2\nprint(test_func(3) + test_func(4))"
    },
    {
      "id": "py-434",
      "chapter": "operatori-tipuri",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "a = 100 - 10.0 = 90.0, iar 90.0 == 90 este True. b = 5 // 2 = 2 (împărțire întreagă), deci b nu este 2.5. ** are prioritate față de minusul unar: -(3**2) = -9.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "a == 90",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "b == 2.5",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "c == -9",
          "correctItemId": "i1"
        }
      ],
      "assembledFrom": [
        "py-033",
        "py-034",
        "py-035"
      ]
    },
    {
      "id": "py-435",
      "chapter": "operatori-tipuri",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "After the assignments a = 5 and b = 5, so a == b is True. b este un alt nume pentru exact același obiect ca a. b was reassigned to the value of a, so b is 5, not 3. c still refers to 3 and b refers to 5, so they are not the same object.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "a == b",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "a is b",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "b == 3",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "c is b",
          "correctItemId": "i2"
        }
      ],
      "assembledFrom": [
        "py-293",
        "py-065",
        "py-295",
        "py-296"
      ]
    },
    {
      "id": "py-436",
      "chapter": "operatori-tipuri",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "c is never changed, so c == 3. b *= c gives b = 2 * 3 = 6. a **= b gives 25; then a //= b gives 25 // 6 = 4, so a is 4, not 1.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "c == 3",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "b == 6",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "a == 1",
          "correctItemId": "i2"
        }
      ],
      "assembledFrom": [
        "py-298",
        "py-299",
        "py-300"
      ]
    },
    {
      "id": "py-437",
      "chapter": "operatori-tipuri",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "10 > 7 is True and 7 > 5 is True, so the result is True. a >= c is True, but b + c = 12 > 10 is True, so not (...) is False. True and False is False. 10 + 7*5 = 45 (not 85) and 10 - 7*5 = -25 (not 15), so both comparisons are False.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "a > b and b > c",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "a >= c and not (b + c > a)",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "a + b * c == 85 or a - b * c == 15",
          "correctItemId": "i2"
        }
      ],
      "assembledFrom": [
        "py-301",
        "py-302",
        "py-303"
      ]
    },
    {
      "id": "py-438",
      "chapter": "functii",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "For (3000, 3): score > 3000 is False, so the elif applies (3000 > 2500 and 3 > 2): 3000 + 250 = 3250. For (5000, 5): 5000 > 3000 and 5 > 3, so 5000 + 300 = 5300. For (2000, 2) neither condition is true, so the else branch adds 50: 2050.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "score1 = 3300",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "score3 = 5300",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "score2 = 2250",
          "correctItemId": "i2"
        }
      ],
      "assembledFrom": [
        "py-342",
        "py-343",
        "py-344"
      ]
    },
    {
      "id": "py-439",
      "chapter": "module-librarii",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "isnan() returns a Boolean, so d is False; b itself is 33.0. float(\"nan\") is valid and isnan() accepts it, so the code runs without errors (it fails only if isnan has not been imported). a is NaN, so isnan(a) is True.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "d will return 33.0",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "The code will fail due to a runtime error.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "c will return True",
          "correctItemId": "i1"
        }
      ],
      "assembledFrom": [
        "py-350",
        "py-351",
        "py-352"
      ]
    },
    {
      "id": "py-440",
      "chapter": "operatori-tipuri",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "a becomes 115 after a += b, but then a %= b gives 115 % 5 = 0, so the final value of a is 0. b -= c gives 15 - 10 = 5. c is never changed.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "a = 115",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "b = 5",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "c = 10",
          "correctItemId": "i1"
        }
      ],
      "assembledFrom": [
        "py-310",
        "py-311",
        "py-312"
      ]
    },
    {
      "id": "py-441",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Evaluate each situation regarding data types and answer Yes if it is true or No if it is false.",
      "explanation": "Python distinguishes int from float and infers a variable's type from its assigned object. The Boolean literals are True and False, with capital initials; bool() can also produce Boolean values.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Python makes the distinction between integers and floating variables.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "When declaring variables in Python, a data type must be specified.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "When setting a boolean variable, the value must start with a capital letter.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-442",
      "chapter": "functii",
      "type": "dropdown",
      "question": "Complete the code to store a serial number as text, the amount as a float, and concatenate a single message.",
      "explanation": "str(55555) stores the identifier as text. float(44) produces 44.0. The plus operator concatenates strings; converting the amount with str() is necessary when concatenating it into one message.",
      "dragItems": [
        {
          "id": "i1",
          "text": "str"
        },
        {
          "id": "i2",
          "text": "input"
        },
        {
          "id": "i3",
          "text": "print"
        },
        {
          "id": "i4",
          "text": "eval"
        },
        {
          "id": "i5",
          "text": "int"
        },
        {
          "id": "i6",
          "text": "str"
        },
        {
          "id": "i7",
          "text": "bool"
        },
        {
          "id": "i8",
          "text": "float"
        },
        {
          "id": "i9",
          "text": "*"
        },
        {
          "id": "i10",
          "text": "/"
        },
        {
          "id": "i11",
          "text": "+"
        },
        {
          "id": "i12",
          "text": "-"
        },
        {
          "id": "i13",
          "text": "/"
        },
        {
          "id": "i14",
          "text": "+"
        },
        {
          "id": "i15",
          "text": "-"
        },
        {
          "id": "i16",
          "text": "*"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i14",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ],
      "code": "serialnumber = [1](55555)\namount = [2](44)\nmessage = \"The serial number of the product is \" [3] serialnumber [4] \" and it will cost \" + str(amount) + \".\""
    },
    {
      "id": "py-443",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "A developer needs to write code to reverse the character output of a product code.\nWhich variable declaration will reverse one of the product codes?",
      "explanation": "A slice with a step of -1 traverses the entire string in reverse. The other slices remove characters or select only a suffix.",
      "options": [
        "[::-1]",
        "[1::]",
        "[:-1]",
        "[-1::]"
      ],
      "correct": 0
    },
    {
      "id": "py-444",
      "chapter": "structuri-control",
      "type": "single",
      "question": "Which comparison expression is evaluated last before the result is assigned to z?",
      "explanation": "Arithmetic and comparisons bind more tightly than and, which binds more tightly than or. Here the left and expression is false, so x - y > 2 is evaluated before the final or result is assigned to z.",
      "options": [
        "x + y > 7 and x * y < 15",
        "The assignment z =",
        "x - y > 2",
        "x * y < 15 or x - y > 2"
      ],
      "correct": 2,
      "code": "x = 5\ny = 3\nz = x + y > 7 and x * y < 15 or x - y > 2"
    },
    {
      "id": "py-445",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "As part of a student app, the following messages need to be delivered for the following grades:\n\nGrade Message\n100 Outstanding\n90-99 Great\n71-89 You are doing well. Strive to improve.\n70 and under Study hard\n\nUse this information and the dropdown arrows to complete the code as needed.\n\nif grade \n[1]\n 100:\n    print(\"Outstanding\")\nelif grade \n[2]\n 90:\n    print(\"Great\")\nelif grade \n[3]\n 70:\n    print(\"Study hard\")\nelse:\n    print(\"You are doing well. Strive to improve\")",
      "explanation": "Test 100 first, then grades at least 90. Grades at most 70 receive the study message; the remaining 71-89 grades reach else.",
      "dragItems": [
        {
          "id": "i1",
          "text": "<="
        },
        {
          "id": "i2",
          "text": "=="
        },
        {
          "id": "i3",
          "text": "!="
        },
        {
          "id": "i4",
          "text": ">="
        },
        {
          "id": "i5",
          "text": ">="
        },
        {
          "id": "i6",
          "text": "=="
        },
        {
          "id": "i7",
          "text": "!="
        },
        {
          "id": "i8",
          "text": "<="
        },
        {
          "id": "i9",
          "text": "=="
        },
        {
          "id": "i10",
          "text": "!="
        },
        {
          "id": "i11",
          "text": ">="
        },
        {
          "id": "i12",
          "text": "<="
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "py-446",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Choose the arithmetic operator for each indicated result. The comments show the required output; the division result is displayed to two decimal places.",
      "explanation": "Addition gives 13, subtraction gives 7, true division gives 3.333..., floor division gives 3, and 10 modulo 3 gives 1. Format true division to two decimal places to display 3.33.",
      "dragItems": [
        {
          "id": "i1",
          "text": "+"
        },
        {
          "id": "i2",
          "text": "-"
        },
        {
          "id": "i3",
          "text": "*"
        },
        {
          "id": "i4",
          "text": "/"
        },
        {
          "id": "i5",
          "text": "+"
        },
        {
          "id": "i6",
          "text": "*"
        },
        {
          "id": "i7",
          "text": "/"
        },
        {
          "id": "i8",
          "text": "-"
        },
        {
          "id": "i9",
          "text": "-"
        },
        {
          "id": "i10",
          "text": "*"
        },
        {
          "id": "i11",
          "text": "/"
        },
        {
          "id": "i12",
          "text": "+"
        },
        {
          "id": "i13",
          "text": "*"
        },
        {
          "id": "i14",
          "text": "//"
        },
        {
          "id": "i15",
          "text": "+"
        },
        {
          "id": "i16",
          "text": "-"
        },
        {
          "id": "i17",
          "text": "%"
        },
        {
          "id": "i18",
          "text": "+"
        },
        {
          "id": "i19",
          "text": "-"
        },
        {
          "id": "i20",
          "text": "*"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i14",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        },
        {
          "id": "z5",
          "label": "Blank [5]",
          "correctItemId": "i17",
          "optionIds": [
            "i17",
            "i18",
            "i19",
            "i20"
          ]
        }
      ],
      "code": "a = 10\nb = 3\na [1] b  # 13\na [2] b  # 7\nf\"{a [3] b:.2f}\"  # \"3.33\"\na [4] b  # 3\na [5] b  # 1"
    },
    {
      "id": "py-447",
      "chapter": "functii",
      "type": "dropdown",
      "question": "Look at the following code and then select the correct keyword to use to check to see if the word \"nine\" is part of the quote. If this code runs, it should return a value of True.\n\nquote = \"A stitch in time saves nine\"\nprint (\"nine\" \n[1]\n quote)",
      "explanation": "The in operator tests substring membership. The substring nine occurs in the quote, so the expression is True.",
      "dragItems": [
        {
          "id": "i1",
          "text": "as"
        },
        {
          "id": "i2",
          "text": "from"
        },
        {
          "id": "i3",
          "text": "in"
        },
        {
          "id": "i4",
          "text": "with"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "py-448",
      "chapter": "functii",
      "type": "dropdown",
      "question": "Choose the correct lines of code to satisfy the needs of the following function:\n\nStudents with scores of 90 or higher get an A.\nStudents with scores from 80 to 89 get a B.\nStudents with scores from 70 to 79 get a C.\nEveryone else gets an F.\n\ndef grade(score):\n\nif \n[1]\n\n    grade = \"A\"\nelif \n[2]\n\n    grade = \"B\"\nelif \n[3]\n\n    grade = \"C\"\nelse:\n    \n[4]\n\n\nreturn grade",
      "explanation": "An if/elif chain selects the first matching branch, so descending lower bounds correctly partition the grades. The final else assigns F.",
      "dragItems": [
        {
          "id": "i1",
          "text": "score >= 90:"
        },
        {
          "id": "i2",
          "text": "score >= 90;"
        },
        {
          "id": "i3",
          "text": "score >= 90"
        },
        {
          "id": "i4",
          "text": "score >= 90 ="
        },
        {
          "id": "i5",
          "text": "score >= 80;"
        },
        {
          "id": "i6",
          "text": "score >= 80"
        },
        {
          "id": "i7",
          "text": "score >= 80 ="
        },
        {
          "id": "i8",
          "text": "score >= 80:"
        },
        {
          "id": "i9",
          "text": "score >= 70"
        },
        {
          "id": "i10",
          "text": "score >= 70 ="
        },
        {
          "id": "i11",
          "text": "score >= 70:"
        },
        {
          "id": "i12",
          "text": "score >= 70;"
        },
        {
          "id": "i13",
          "text": "grade = \"F\""
        },
        {
          "id": "i14",
          "text": "score >= 90:"
        },
        {
          "id": "i15",
          "text": "score >= 80:"
        },
        {
          "id": "i16",
          "text": "score >= 70:"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i13",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ]
    },
    {
      "id": "py-449",
      "chapter": "structuri-control",
      "type": "drag_drop",
      "question": "Order the conceptual Boolean grouping stages: left-hand and group; negation in the right-hand branch; complete right-hand and group; complete outer or. This is grouping, not a claim that every branch executes.",
      "explanation": "This ordering describes syntactic grouping, not unconditional execution: each and binds before the final or and not binds within the right-hand branch. In this particular example the left and is True, so or short-circuits and the right-hand branch is not evaluated at runtime.",
      "dragItems": [
        {
          "id": "i1",
          "text": "not x * y > 25"
        },
        {
          "id": "i2",
          "text": "x > y and x - y >= 2"
        },
        {
          "id": "i3",
          "text": "x + y == 11 and not x * y > 25"
        },
        {
          "id": "i4",
          "text": "x > y and x - y >= 2 or x + y == 11 and not x * y > 25"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Stage 1",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Stage 2",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Stage 3",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Stage 4",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "py-450",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "The following code example needs to print the number of minutes per day to walk, starting with 10 minutes a day in week 1 and ending with 50 minutes a day in week 5.",
      "explanation": "range excludes its stop value, so range(1, 6) generates weeks 1 through 5. An f-string with single braces evaluates week * 10.",
      "dragItems": [
        {
          "id": "i1",
          "text": "for week in range(1, 6) = None"
        },
        {
          "id": "i2",
          "text": "for week in range(1, 6)"
        },
        {
          "id": "i3",
          "text": "for week in range[1, 6]"
        },
        {
          "id": "i4",
          "text": "for week in range(1, 6)()"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ],
      "code": "[1]:\n    print(f\"You should walk for {week * 10} minutes in week {week}\")"
    },
    {
      "id": "py-451",
      "chapter": "structuri-control",
      "type": "single",
      "question": "A developer needs to add, to an existing app, code that will print a message a set number of times.\nHowever, the developer does not yet know the message but the variables used in the loop for a message are used elsewhere in the app.\nWhich keyword, when added to the end of the code, will serve as a placeholder for future text?\nHere is the code example:\n\nfor x in range(1,5):",
      "explanation": "pass is a no-operation statement that supplies a syntactically valid loop body until the implementation is added. Python keywords are lowercase.",
      "options": [
        "while",
        "pass",
        "continue",
        "break"
      ],
      "correct": 1
    },
    {
      "id": "py-452",
      "chapter": "functii",
      "type": "dropdown",
      "question": "Complete the code example to build a function that does the following:\n\n- Its name is calcSubtotal\n- The function takes an amount and a sales tax rate and calculates a subtotal\n- The new subtotal is returned\n\n\n[1]\n \n[2]\n\n    subtotal = amount * (1 + salesTaxRate)\n    \n[3]",
      "explanation": "def introduces the function and its parameters. The calculation applies the tax multiplier, and return sends the result back to the caller.",
      "dragItems": [
        {
          "id": "i1",
          "text": "import"
        },
        {
          "id": "i2",
          "text": "from"
        },
        {
          "id": "i3",
          "text": "class"
        },
        {
          "id": "i4",
          "text": "def"
        },
        {
          "id": "i5",
          "text": "calcSubtotal(amount, salesTaxRate)"
        },
        {
          "id": "i6",
          "text": "calcSubtotal(amount, salesTaxRate) ="
        },
        {
          "id": "i7",
          "text": "calcSubtotal(amount, salesTaxRate):"
        },
        {
          "id": "i8",
          "text": "calcSubtotal(amount, salesTaxRate);"
        },
        {
          "id": "i9",
          "text": "def"
        },
        {
          "id": "i10",
          "text": "calcSubtotal(amount, salesTaxRate):"
        },
        {
          "id": "i11",
          "text": "return subtotal"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11"
          ]
        }
      ]
    },
    {
      "id": "py-453",
      "chapter": "structura-cod",
      "type": "single",
      "question": "In Python, which character(s) should be placed before text in a line of code to make that line of code a comment?",
      "explanation": "The # character starts a comment outside a string. C-style comment delimiters and // do not introduce Python comments.",
      "options": [
        "'",
        "/*",
        "#",
        "//"
      ],
      "correct": 2
    },
    {
      "id": "py-454",
      "chapter": "input-output",
      "type": "drag_drop",
      "question": "Using drag and drop, drag over the lines of code that will accomplish the following:\n• Open the shirts file in a mode to where it cannot be written to\n• Read the contents of the entire file\n• Print the contents of the entire file\n\nNot every line of code will be used.\n\n Line 1\n Line 2\n Line 3",
      "explanation": "Opening in r mode prevents writing through that file handle. read() obtains the entire text, which is then passed to print().",
      "dragItems": [
        {
          "id": "i1",
          "text": "print(shirtFileContents)"
        },
        {
          "id": "i2",
          "text": "shirtFileContents = shirtFile.read()"
        },
        {
          "id": "i3",
          "text": "for shirtLines = range(shirtFile):"
        },
        {
          "id": "i4",
          "text": "shirtFile = open(\"shirts.txt\",\"a\")"
        },
        {
          "id": "i5",
          "text": "shirtFile = open(\"shirts.txt\", \"r\")"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 1",
          "correctItemId": "i5"
        },
        {
          "id": "z2",
          "label": "Line 2",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Line 3",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "py-455",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "A developer is starting to build a unit test and needs help figuring out the built-in module that is needed for the test, the way to check to see if the unit test is run as the main module, and the actual unit test to run to see if two values are equal to each other.",
      "explanation": "unittest.TestCase supplies assertion methods. assertEqual compares values, and the __name__ == '__main__' guard starts tests only when the file runs directly. The shown test intentionally fails because 10 does not equal 9.",
      "dragItems": [
        {
          "id": "i1",
          "text": "TextTestRunner"
        },
        {
          "id": "i2",
          "text": "TestCase"
        },
        {
          "id": "i3",
          "text": "TestSuite"
        },
        {
          "id": "i4",
          "text": "TestLoader"
        },
        {
          "id": "i5",
          "text": "assertEqual"
        },
        {
          "id": "i6",
          "text": "assertIs"
        },
        {
          "id": "i7",
          "text": "assertIn"
        },
        {
          "id": "i8",
          "text": "assertTrue"
        },
        {
          "id": "i9",
          "text": "__main__"
        },
        {
          "id": "i10",
          "text": "__file__"
        },
        {
          "id": "i11",
          "text": "__doc__"
        },
        {
          "id": "i12",
          "text": "__name__"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ],
      "code": "import unittest\na = 3\nb = 6\nclass Test_Example_UnitTest(unittest.[1]):\n    def test_equal(self):\n        self.[2](2 + 8, a + b)\nif [3] == \"__main__\":\n    unittest.main()"
    },
    {
      "id": "py-456",
      "chapter": "input-output",
      "type": "single",
      "question": "When using the sys.argv[0] command as part of running a Python app in a command prompt, what does the 0 represent in sys.argv?",
      "explanation": "sys.argv[0] contains the script name or path used to invoke the Python program. User-supplied arguments begin at index 1.",
      "options": [
        "The first function in the file",
        "The file name",
        "The main class in the file",
        "The first argument in a function"
      ],
      "correct": 1
    },
    {
      "id": "py-457",
      "chapter": "structuri-date",
      "type": "dropdown",
      "question": "An inventory manager needs to take data from calculations, an average inventory number in this case, and have three possible outcomes:\n- the nearest whole number up, represented by the upper_bound variable,\n- the nearest whole number down, represented by the lower_bound variable,\n- and the integer of the whole number, represented by the bound variable.\n\nUsing the dropdown lists, complete the code snippet needed to fulfill the inventory manager's need.\n\n\n[1]\n\naverage_inventory = 77.4\n\nupper_bound = \n[2]\n (average_inventory)\nlower_bound = \n[3]\n (average_inventory)\nbound = \n[4]\n (average_inventory)\n\nprint(upper_bound)\nprint(lower_bound)\nprint(bound)",
      "explanation": "ceil returns 78, floor returns 77, and int truncates 77.4 toward zero to 77. For negative numbers, floor and truncation can differ.",
      "dragItems": [
        {
          "id": "i1",
          "text": "include math"
        },
        {
          "id": "i2",
          "text": "using math"
        },
        {
          "id": "i3",
          "text": "require math"
        },
        {
          "id": "i4",
          "text": "import math"
        },
        {
          "id": "i5",
          "text": "math_ceil"
        },
        {
          "id": "i6",
          "text": "None"
        },
        {
          "id": "i7",
          "text": "math.ceil"
        },
        {
          "id": "i8",
          "text": "math::ceil"
        },
        {
          "id": "i9",
          "text": "None"
        },
        {
          "id": "i10",
          "text": "math.floor"
        },
        {
          "id": "i11",
          "text": "math::floor"
        },
        {
          "id": "i12",
          "text": "math_floor"
        },
        {
          "id": "i13",
          "text": "int"
        },
        {
          "id": "i14",
          "text": "float"
        },
        {
          "id": "i15",
          "text": "str"
        },
        {
          "id": "i16",
          "text": "bool"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i13",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ]
    },
    {
      "id": "py-458",
      "chapter": "module-librarii",
      "type": "dropdown",
      "question": "A game developer is testing some random number generators. The results should be as follows:\n\n- result1 should have a random country from a list of countries\n- result2 should display the list in a random order\n- result3 should display two random countries from a list of countries\n\nUsing the dropdown arrows, fill in the code needed to generate the proper random numbers for each variable.\n\n\n[1]\n\ncountries = ['USA','Canada','Mexico','Japan','Spain','Kenya']\nresult1 = random.\n[2]\n\nresult2 = random.\n[3]\n\nresult3 = random.\n[4]",
      "explanation": "choice returns one element. sample with the list's length returns a shuffled copy, while sample with 2 returns two distinct selections. shuffle modifies a list in place and returns None, so assigning shuffle to result2 would not produce a list.",
      "dragItems": [
        {
          "id": "i1",
          "text": "using random"
        },
        {
          "id": "i2",
          "text": "require random"
        },
        {
          "id": "i3",
          "text": "import random"
        },
        {
          "id": "i4",
          "text": "include random"
        },
        {
          "id": "i5",
          "text": "choice(\"countries\")"
        },
        {
          "id": "i6",
          "text": "choice(countries)"
        },
        {
          "id": "i7",
          "text": "choice[countries]"
        },
        {
          "id": "i8",
          "text": "choice()"
        },
        {
          "id": "i9",
          "text": "sample(countries, len(countries))"
        },
        {
          "id": "i10",
          "text": "sample[countries, len(countries)]"
        },
        {
          "id": "i11",
          "text": "sample()"
        },
        {
          "id": "i12",
          "text": "sample(\"countries, len(countries)\")"
        },
        {
          "id": "i13",
          "text": "sample[countries, 2]"
        },
        {
          "id": "i14",
          "text": "sample()"
        },
        {
          "id": "i15",
          "text": "sample(\"countries, 2\")"
        },
        {
          "id": "i16",
          "text": "sample(countries, 2)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i16",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ]
    },
    {
      "id": "py-459",
      "chapter": "input-output",
      "type": "drag_drop",
      "question": "Match each operation with a standard-library module that supplies it. For open(), select the explicit io.open equivalent of the built-in function.",
      "explanation": "io provides file-stream operations such as io.open; math.ceil rounds upward, os.mkdir creates a directory, and sys.exit raises SystemExit to terminate normal program execution.",
      "dragItems": [
        {
          "id": "i1",
          "text": "math"
        },
        {
          "id": "i2",
          "text": "sys"
        },
        {
          "id": "i3",
          "text": "os"
        },
        {
          "id": "i4",
          "text": "io"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "open()",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "ceil()",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "mkdir()",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "exit()",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "py-460",
      "chapter": "module-librarii",
      "type": "multiple",
      "question": "A developer is building a code block to log a current date and time for app activity.\nWhich two code snippets will replace the #current date and time comment with the correct date and time?\n\nimport datetime\nlog_time = #current date and time\nprint(\"entry time: \", log_time)",
      "explanation": "datetime.datetime.today() and datetime.datetime.now() return the current local date and time. strptime parses supplied text and strftime formats an existing date-time; neither obtains the current time by itself.",
      "options": [
        "datetime.datetime.today()",
        "datetime.datetime.strptime()",
        "datetime.datetime.now()",
        "datetime.datetime.strftime()"
      ],
      "correct": [
        0,
        2
      ]
    },
    {
      "id": "py-461",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Using the dropdown arrows for the missing code pieces, complete the following code example so that it accomplishes the functionality of this game:\n\nA user gets five chances to correctly guess a whole number from 1 to 10. If the user guesses correctly, they get a congratulatory message and the game ends. If not, they get a message thanking them for playing.\n\n\n[1]\n\nfor i in range(5):\n    guess = int(input(\"Enter a number from 1 to 10. \"))\n    randNum = \n[2]\n\n    if guess == randNum:\n        print(\"We matched!\")\n        break\n    else:\n        print(\"We did not match. Try again\")",
      "explanation": "randint includes both endpoints. range(5) allows five attempts and break exits immediately after a matching guess. This version draws a fresh target each attempt.",
      "dragItems": [
        {
          "id": "i1",
          "text": "import random"
        },
        {
          "id": "i2",
          "text": "include random"
        },
        {
          "id": "i3",
          "text": "using random"
        },
        {
          "id": "i4",
          "text": "require random"
        },
        {
          "id": "i5",
          "text": "random::randint(1, 10)"
        },
        {
          "id": "i6",
          "text": "random_randint(1, 10)"
        },
        {
          "id": "i7",
          "text": "None"
        },
        {
          "id": "i8",
          "text": "random.randint(1, 10)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-462",
      "chapter": "functii",
      "type": "single",
      "question": "Examine the following code:\n\ndef area (width, height):\n    area = width * height\n    return area\nbox1area = area(5, 2)\nbox2area = area(6)\n\nWhat needs to change in order for the height in the area function to be 12 if a height is not specified when calling the function?",
      "explanation": "A default parameter height=12 is used when the caller omits height, while callers can still supply an explicit value.",
      "options": [
        "height variable setting height =12 inside the function",
        "height variable setting height =12 before the function is declared",
        "def to def area (width, height = 12)",
        "box2area line to box2area = area(6,12)"
      ],
      "correct": 2
    },
    {
      "id": "py-463",
      "chapter": "module-librarii",
      "type": "dropdown",
      "question": "For a standard Python installation with its pydoc command-line launcher available, evaluate each statement. Treat the command name python as lowercase.",
      "explanation": "The module can be invoked with python -m pydoc module. Python installations commonly provide a pydoc command-line launcher as well. It generates documentation from modules and docstrings; the exact launcher name depends on the installation.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The proper syntax for pydoc is Python -m pydoc module where module represents the name of a Python module.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Pydoc is a self-contained executable that can be run from a command-line prompt.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Pydoc generates documentation on Python modules.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-464",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are in the process of writing some code to divide two numbers. You want the result to display so long as there are no errors.\nIf there are errors, you want to display a message indicating that the user either tried to divide by zero or used an invalid number.",
      "explanation": "Put both float conversions and the division inside try. ValueError catches invalid numeric input and ZeroDivisionError catches division by zero.",
      "dragItems": [
        {
          "id": "i1",
          "text": "else"
        },
        {
          "id": "i2",
          "text": "try"
        },
        {
          "id": "i3",
          "text": "except"
        },
        {
          "id": "i4",
          "text": "finally"
        },
        {
          "id": "i5",
          "text": "except (ValueError, ZeroDivisionError)"
        },
        {
          "id": "i6",
          "text": "except [ValueError, ZeroDivisionError]"
        },
        {
          "id": "i7",
          "text": "except (ValueError, ZeroDivisionError)()"
        },
        {
          "id": "i8",
          "text": "except (ValueError, ZeroDivisionError) = None"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "[1]:\n    a = float(input(\"Enter a number: \"))\n    b = float(input(\"Enter a divisor: \"))\n    print(f\"The answer is {a / b}.\")\n[2]:\n    print(\"Invalid number or division by zero.\")"
    },
    {
      "id": "py-465",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "Analyze the following code and then answer Yes for the statements that are true and No for the statements that are false.\na = float(input(\"Enter a number. \"))\nb = float(input(\"Enter a number to divide by. \"))\n\ntry:\n    print(f\"The answer is {a/b}.\")\nexcept:\n    print(\"This did not work. Did you try to divide by zero?\")\nelse:\n    print(\"You successfully divided two numbers.\")\nfinally:\n    print(\"Thank you for playing.\")",
      "explanation": "finally executes when control leaves the try statement. With a=0 and nonzero b the division succeeds, except is skipped, and else runs. Invalid input before try would not be caught by this original code.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The finally statement will run regardless of which pieces of code above it run.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Both the try and except parts will run if a = 0 and b != 0.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The else part will run if a = 0 and b != 0.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-466",
      "chapter": "structuri-control",
      "type": "drag_drop",
      "question": "You need to write code that sends northern sales staff skis and everyone else golf balls if they exceed sales of $100,000 for a month.\nThe staff should only get skis if the season is winter.\n\nUsing drag and drop, arrange the code pieces needed in the correct order. Not every code snippet will be used.",
      "explanation": "First require monthlySales > 100000. Within that branch, North combined with Winter selects skis; all other qualifying staff receive golf balls. Python uses and and a colon, not && or else;.",
      "dragItems": [
        {
          "id": "i1",
          "text": "if region == \"North\" and season == \"Winter\":"
        },
        {
          "id": "i2",
          "text": "else;"
        },
        {
          "id": "i3",
          "text": "else:"
        },
        {
          "id": "i4",
          "text": "if region IS \"North:\""
        },
        {
          "id": "i5",
          "text": "if monthlySales > 100000:"
        },
        {
          "id": "i6",
          "text": "print(\"Send golf balls\")"
        },
        {
          "id": "i7",
          "text": "print(\"Send skis\")"
        },
        {
          "id": "i8",
          "text": "if monthlySales = 100000"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 1 (level 0)",
          "correctItemId": "i5"
        },
        {
          "id": "z2",
          "label": "Line 2 (level 1)",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Line 3 (level 2)",
          "correctItemId": "i7"
        },
        {
          "id": "z4",
          "label": "Line 4 (level 1)",
          "correctItemId": "i3"
        },
        {
          "id": "z5",
          "label": "Line 5 (level 2)",
          "correctItemId": "i6"
        }
      ]
    },
    {
      "id": "py-467",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Complete the code to read integer dimensions and right-align the area in a minimum-width six-character field. The field may expand for larger results.",
      "explanation": "input returns text, so int converts each dimension before multiplication. A >6 format field right-aligns in a minimum width of six; it does not truncate a result longer than six characters.",
      "dragItems": [
        {
          "id": "i1",
          "text": "str"
        },
        {
          "id": "i2",
          "text": "bool"
        },
        {
          "id": "i3",
          "text": "int"
        },
        {
          "id": "i4",
          "text": "float"
        },
        {
          "id": "i5",
          "text": "output"
        },
        {
          "id": "i6",
          "text": "input"
        },
        {
          "id": "i7",
          "text": "meter"
        },
        {
          "id": "i8",
          "text": "progress"
        },
        {
          "id": "i9",
          "text": "int"
        },
        {
          "id": "i10",
          "text": "float"
        },
        {
          "id": "i11",
          "text": "str"
        },
        {
          "id": "i12",
          "text": "bool"
        },
        {
          "id": "i13",
          "text": "meter"
        },
        {
          "id": "i14",
          "text": "progress"
        },
        {
          "id": "i15",
          "text": "output"
        },
        {
          "id": "i16",
          "text": "input"
        },
        {
          "id": "i17",
          "text": "{:>6}"
        },
        {
          "id": "i18",
          "text": "area.format(width * height)"
        },
        {
          "id": "i19",
          "text": "int"
        },
        {
          "id": "i20",
          "text": "input"
        },
        {
          "id": "i21",
          "text": "area.format(width * height)"
        },
        {
          "id": "i22",
          "text": "int"
        },
        {
          "id": "i23",
          "text": "input"
        },
        {
          "id": "i24",
          "text": "{:>6}"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i16",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        },
        {
          "id": "z5",
          "label": "Blank [5]",
          "correctItemId": "i17",
          "optionIds": [
            "i17",
            "i18",
            "i19",
            "i20"
          ]
        },
        {
          "id": "z6",
          "label": "Blank [6]",
          "correctItemId": "i21",
          "optionIds": [
            "i21",
            "i22",
            "i23",
            "i24"
          ]
        }
      ],
      "code": "width = [1]([2](\"Enter a width: \"))\nheight = [3]([4](\"Enter a height: \"))\narea = \"We have [5] square feet for the area.\"\nprint([6])"
    },
    {
      "id": "py-468",
      "chapter": "input-output",
      "type": "single",
      "question": "Evaluate the following code:\n\nimport sys\nx = len(sys.argv)\nprint(x)\nprint(sys.argv[0])\nprint(sys.argv[1])\n\nWhat does sys.argv[0] represent when a command is run to refer to this file as:\nPython testargs.py Hello",
      "explanation": "The script is testargs.py, so sys.argv[0] is testargs.py and sys.argv[1] is Hello.",
      "options": [
        "The number of arguments passed through the file.",
        "Hello",
        "testargs.py",
        "sys.argv"
      ],
      "correct": 2
    },
    {
      "id": "py-469",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are attempting to write code to a text file called results. The file does not exist prior to your writing to it.\n\nUsing the dropdown arrow, complete the code to fulfill this task, making sure the file does not take up memory after the write is complete.\n\nwriteFile = \n[1]\n ('results.txt', '\n[2]\n ')\ntoResults = input(\"What do you want to write to the results? \")\nwriteFile. \n[3]\n(toResults)\nwriteFile. \n[4]",
      "explanation": "Opening in w mode creates the file or truncates existing content. write stores the text and close releases the handle and flushes buffered data.",
      "dragItems": [
        {
          "id": "i1",
          "text": "open"
        },
        {
          "id": "i2",
          "text": "read"
        },
        {
          "id": "i3",
          "text": "write"
        },
        {
          "id": "i4",
          "text": "close"
        },
        {
          "id": "i5",
          "text": "r"
        },
        {
          "id": "i6",
          "text": "a"
        },
        {
          "id": "i7",
          "text": "r+"
        },
        {
          "id": "i8",
          "text": "w"
        },
        {
          "id": "i9",
          "text": "read"
        },
        {
          "id": "i10",
          "text": "close"
        },
        {
          "id": "i11",
          "text": "write"
        },
        {
          "id": "i12",
          "text": "open"
        },
        {
          "id": "i13",
          "text": "close(\"\")"
        },
        {
          "id": "i14",
          "text": "close()"
        },
        {
          "id": "i15",
          "text": "close[]"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i14",
          "optionIds": [
            "i13",
            "i14",
            "i15"
          ]
        }
      ]
    },
    {
      "id": "py-470",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Complete the file-writing code. Append to results.txt if it exists; otherwise create it. Prefix the new user-entered text with a newline, preserve existing contents, and close the file.",
      "explanation": "Append mode preserves an existing file. Write mode creates a missing file. Writing '\\n' before the entered text starts a new line; append mode alone does not insert newlines.",
      "dragItems": [
        {
          "id": "i1",
          "text": "r"
        },
        {
          "id": "i2",
          "text": "w"
        },
        {
          "id": "i3",
          "text": "r+"
        },
        {
          "id": "i4",
          "text": "a"
        },
        {
          "id": "i5",
          "text": "a"
        },
        {
          "id": "i6",
          "text": "r+"
        },
        {
          "id": "i7",
          "text": "w"
        },
        {
          "id": "i8",
          "text": "r"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "import os.path\nif os.path.isfile(\"results.txt\"):\n    writeFile = open(\"results.txt\", \"[1]\")\nelse:\n    writeFile = open(\"results.txt\", \"[2]\")\ntoResults = input(\"What do you want to write? \")\nwriteFile.write(\"\\n\" + toResults)\nwriteFile.close()"
    },
    {
      "id": "py-471",
      "chapter": "module-librarii",
      "type": "dropdown",
      "question": "Evaluate the following code and then select Yes for any true statement related to the code and No for any false statement related to the code:\n\nimport math\na = -14\nb = 21\nc = math.fabs(a)\nd = math.fmod(b, a)\ne = math.frexp(b)",
      "explanation": "frexp returns a mantissa/exponent pair. fabs(-14) is 14.0. fmod(21, -14) is 7.0 because its remainder has the dividend's sign, not 1.5.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "frexp returns the mantissa and exponent of a number",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "c == 14.0",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "d == 1.5",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "py-472",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "Evaluate the following code:\n\ndef is_quarter(num):\n    if num % 4 == 0:\n        return True\n    else:\n        return False\nassert is_quarter(8) == True\n\nWhat will the code return?",
      "explanation": "The function returns True internally, so the assertion succeeds. An assert statement does not print its condition and this program produces no output.",
      "options": [
        "True",
        "An AssertionError error",
        "False",
        "Nothing"
      ],
      "correct": 3
    },
    {
      "id": "py-473",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Evaluate the following code. For each statement regarding the results of the calculations, select Yes if the statement is true and No if the statement is false.\n\na = 3\nb = 2\nc = -(a**b)\nd = +(c*b)",
      "explanation": "Exponentiation gives 3**2=9, then unary minus makes c=-9. 2**3=8, while +(c*b) is -18 rather than 18.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "c = -9",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "b**a = 8",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "d = 18",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "py-474",
      "chapter": "operatori-tipuri",
      "type": "dropdown",
      "question": "Complete the nested loops to print all city/state combinations in city-major order. Print Capital once, immediately after Springfield Illinois and before Auburn Florida.\n\nRequired output:\nOrange Florida\nOrange Ohio\nOrange Illinois\nSpringfield Florida\nSpringfield Ohio\nSpringfield Illinois\nCapital\nAuburn Florida\nAuburn Ohio\nAuburn Illinois",
      "explanation": "The outer loop selects a city and the inner loop prints it with all three states. The conditional is placed after the inner loop and prints Capital once for Springfield.",
      "dragItems": [
        {
          "id": "i1",
          "text": "for x in cities:"
        },
        {
          "id": "i2",
          "text": "for x in cities;"
        },
        {
          "id": "i3",
          "text": "for x in cities"
        },
        {
          "id": "i4",
          "text": "for x in cities ="
        },
        {
          "id": "i5",
          "text": "for y in states;"
        },
        {
          "id": "i6",
          "text": "for y in states"
        },
        {
          "id": "i7",
          "text": "for y in states ="
        },
        {
          "id": "i8",
          "text": "for y in states:"
        },
        {
          "id": "i9",
          "text": "if x == \"Springfield\""
        },
        {
          "id": "i10",
          "text": "if x = \"Springfield\":"
        },
        {
          "id": "i11",
          "text": "if x == \"Springfield\":"
        },
        {
          "id": "i12",
          "text": "if x == \"Springfield\";"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ],
      "code": "cities = [\"Orange\", \"Springfield\", \"Auburn\"]\nstates = [\"Florida\", \"Ohio\", \"Illinois\"]\n[1]\n    [2]\n        print(x, y)\n    [3]\n        print(\"Capital\")"
    },
    {
      "id": "py-475",
      "chapter": "gestionare-erori",
      "type": "multiple",
      "question": "Which TWO listed method names are discovered by unittest with its default test prefix?",
      "explanation": "The default unittest discovery prefix is test. Both test_territory and testcase_territory start with test and are discoverable; a leading underscore or a suffix-only test is not enough.",
      "options": [
        "test_territory",
        "_test_territory",
        "testcase_territory",
        "territory_test"
      ],
      "correct": [
        0,
        2
      ],
      "code": "import unittest\nclass TestMain(unittest.TestCase):\n    def METHOD_NAME(self):\n        self.assertEqual(\"North\", \"North\")\nif __name__ == \"__main__\":\n    unittest.main()"
    },
    {
      "id": "py-476",
      "chapter": "operatori-tipuri",
      "type": "drag_drop",
      "question": "Using drag and drop, arrange each group of operators in the correct order of precedence, with the highest precedence on top.\n 1\n 2\n 3\n 4\n 5\n 6",
      "explanation": "Arithmetic binds more tightly than comparison operations; comparisons, identity tests and membership tests share one precedence level. Logical operators follow (not, then and, then or). Assignment occurs outside the evaluated expression. The grouped comparison level avoids falsely ranking is above in.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Arithmetic"
        },
        {
          "id": "i2",
          "text": "Comparison / identity / membership (same level)"
        },
        {
          "id": "i3",
          "text": "Logical not"
        },
        {
          "id": "i4",
          "text": "Logical and"
        },
        {
          "id": "i5",
          "text": "Logical or"
        },
        {
          "id": "i6",
          "text": "Assignment statement"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Highest",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "2",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "3",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "4",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "5",
          "correctItemId": "i5"
        },
        {
          "id": "z6",
          "label": "Last",
          "correctItemId": "i6"
        }
      ]
    },
    {
      "id": "py-477",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "An app needs to read information from a configuration file, named config.txt and possibly add to the configuration file if the file is present in a home directory. If the file does not exist, it needs to be open for write purposes.\n\nUsing the drop-down arrows, fill in the code necessary to complete this task.\n\nimport \n[1]\n\n\nif \n[2]\n ('config.txt'):\n\n    writeFile = open('config.txt', ' \n[3]\n ')\n\nelse:\n\n    writeFile = open('config.txt', ' \n[4]\n ')",
      "explanation": "os.path.isfile checks for an existing regular file. a+ permits reading and appending while preserving content; w+ creates or truncates and permits reading/writing. Seek to the beginning before reading from a+ when needed.",
      "dragItems": [
        {
          "id": "i1",
          "text": "os_path"
        },
        {
          "id": "i2",
          "text": "None"
        },
        {
          "id": "i3",
          "text": "os.path"
        },
        {
          "id": "i4",
          "text": "os::path"
        },
        {
          "id": "i5",
          "text": "None"
        },
        {
          "id": "i6",
          "text": "os.path.isfile"
        },
        {
          "id": "i7",
          "text": "os::path.isfile"
        },
        {
          "id": "i8",
          "text": "os_path.isfile"
        },
        {
          "id": "i9",
          "text": "a+"
        },
        {
          "id": "i10",
          "text": "r"
        },
        {
          "id": "i11",
          "text": "w"
        },
        {
          "id": "i12",
          "text": "a"
        },
        {
          "id": "i13",
          "text": "r"
        },
        {
          "id": "i14",
          "text": "w"
        },
        {
          "id": "i15",
          "text": "a"
        },
        {
          "id": "i16",
          "text": "w+"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i16",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ]
    },
    {
      "id": "py-478",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "You have daily attendance figures for a conference and want to know the highest attendance for the conference and the lowest attendance for the conference.\nUsing the dropdown arrows, fill in the missing code pieces necessary to obtain those amounts.\n\nattendance = [300,250,200,400,150,225,325]\n\nprint(\n[1]\n (attendance))\n\nprint(\n[2]\n (attendance))",
      "explanation": "max returns the largest attendance, 400; min returns the smallest, 150.",
      "dragItems": [
        {
          "id": "i1",
          "text": "max"
        },
        {
          "id": "i2",
          "text": "min"
        },
        {
          "id": "i3",
          "text": "len"
        },
        {
          "id": "i4",
          "text": "sum"
        },
        {
          "id": "i5",
          "text": "max"
        },
        {
          "id": "i6",
          "text": "len"
        },
        {
          "id": "i7",
          "text": "sum"
        },
        {
          "id": "i8",
          "text": "min"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-479",
      "chapter": "structuri-date",
      "type": "drag_drop",
      "question": "Order these six arithmetic/grouping/Boolean stages from first to last for ordinary expressions. Boolean not is deliberately not grouped with arithmetic unary +/-.",
      "explanation": "Parentheses control grouping. Exponentiation binds before unary plus/minus on its left, followed by multiplication/division, addition/subtraction, and Boolean and. Boolean not has lower precedence than comparisons, so it must not be grouped with arithmetic unary operators.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Addition and subtraction"
        },
        {
          "id": "i2",
          "text": "and"
        },
        {
          "id": "i3",
          "text": "Exponentiation"
        },
        {
          "id": "i4",
          "text": "Multiplication and division"
        },
        {
          "id": "i5",
          "text": "Parenthesized grouping"
        },
        {
          "id": "i6",
          "text": "Unary + and - (on the left of exponentiation)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Operation type performed first:",
          "correctItemId": "i5"
        },
        {
          "id": "z2",
          "label": "Operation type performed second:",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Operation type performed third:",
          "correctItemId": "i6"
        },
        {
          "id": "z4",
          "label": "Operation type performed fourth:",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "Operation type performed fifth:",
          "correctItemId": "i1"
        },
        {
          "id": "z6",
          "label": "Operation type performed last:",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "py-480",
      "chapter": "structuri-date",
      "type": "drag_drop",
      "question": "You need to identify the data types of various type operations.\n\nMove the appropriate data types from the list to the correct type operations on the\nright.\nYou may use each data type once, more than once, or not at all.\n\ntype(+1E10) → \ntype(5.0) → \ntype(\"True\") → \ntype(False) →",
      "explanation": "Scientific notation and decimal-point literals produce floats. Quoted True is a string; unquoted False is a Boolean. type(...) itself returns a type object; the labels describe the types being inspected.",
      "dragItems": [
        {
          "id": "i1",
          "text": "int"
        },
        {
          "id": "i2",
          "text": "float"
        },
        {
          "id": "i3",
          "text": "str"
        },
        {
          "id": "i4",
          "text": "bool"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "type(+1E10) →",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "type(5.0) →",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "type(\"True\") →",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "type(False) →",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "py-481",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "You need to test whether an object is an instance of a specific class.",
      "explanation": "A TestCase subclass defines a method beginning with test. assertIsInstance verifies that an object is an instance of a class, including its subclasses.",
      "dragItems": [
        {
          "id": "i1",
          "text": "import"
        },
        {
          "id": "i2",
          "text": "from"
        },
        {
          "id": "i3",
          "text": "def"
        },
        {
          "id": "i4",
          "text": "class"
        },
        {
          "id": "i5",
          "text": "unittest.TestCase"
        },
        {
          "id": "i6",
          "text": "test_instance(self)"
        },
        {
          "id": "i7",
          "text": "self.assertIsInstance(3, int)"
        },
        {
          "id": "i8",
          "text": "import"
        },
        {
          "id": "i9",
          "text": "test_instance()"
        },
        {
          "id": "i10",
          "text": "test_instance(\"self\")"
        },
        {
          "id": "i11",
          "text": "test_instance(self)"
        },
        {
          "id": "i12",
          "text": "test_instance[self]"
        },
        {
          "id": "i13",
          "text": "self.assertIsInstance(3, int)"
        },
        {
          "id": "i14",
          "text": "import"
        },
        {
          "id": "i15",
          "text": "unittest.TestCase"
        },
        {
          "id": "i16",
          "text": "test_instance(self)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i13",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ],
      "code": "[1] unittest\nclass TestIsInstance([2]):\n    def [3]:\n        [4]\nif __name__ == \"__main__\":\n    unittest.main()"
    },
    {
      "id": "py-482",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are creating a program that accepts user input. The program must cast the input into\nan integer, and properly handle the error if it cannot do so.\n\nwhile True:\n\n[1]\n\nx = int(input(\"Please enter a number: \"))\nbreak\n\n[2]\n ValueError:\nprint(\"Not a valid number. Try again...\")",
      "explanation": "The conversion may raise ValueError for non-integer text. Catching it inside the loop allows another attempt; break exits after successful conversion.",
      "dragItems": [
        {
          "id": "i1",
          "text": "try;"
        },
        {
          "id": "i2",
          "text": "try"
        },
        {
          "id": "i3",
          "text": "try ="
        },
        {
          "id": "i4",
          "text": "try:"
        },
        {
          "id": "i5",
          "text": "finally"
        },
        {
          "id": "i6",
          "text": "else"
        },
        {
          "id": "i7",
          "text": "except"
        },
        {
          "id": "i8",
          "text": "try"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-483",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "For each statement about try statements, select True or False.",
      "explanation": "A try may have multiple except clauses and one finally clause. A finally clause can also appear without except. It cannot have multiple finally clauses in one try statement.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A try statement can have one or more except clauses.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "A try statement can have a finally clause without an except clause.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "A try statement can have a finally clause and an except clause.",
          "correctItemId": "yes"
        },
        {
          "id": "z4",
          "label": "A try statement can have one or more finally clauses.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "py-484",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "You create the following Python function to calculate the power of a number. Line\nnumbers are included for reference only.\n\n01 # The calc_power function calculates exponents\n02 # x is the base\n03 # y is the exponent\n04 # The value of x raised to the y power is returned\n05 def calc_power(x, y):\n06 comment = \"# Return the value\"\n07 return x ** y # raise x to the y power\n\nFor each statement, select True or False.",
      "explanation": "Comment-only lines are not parsed as Python statements. Each such line still needs #. A # inside a quoted string is literal text, whereas # following executable code starts an inline comment.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Python will not check the syntax of lines 01 through 04.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The pound sign (#) is optional for lines 02 and 03.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The string in line 06 will be interpreted as a comment.",
          "correctItemId": "no"
        },
        {
          "id": "z4",
          "label": "Line 07 contains an inline comment.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-485",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Assume the spacing of if num1 and the indentation are corrected. Analyze each indicated condition independently; line 09 is intentionally invalid, so the whole original script cannot execute as written.",
      "explanation": "The == branch tests equality. <= also includes equality, so its less-than-only message is inaccurate. > tests greater-than. A single = cannot be used as this if condition.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The print statement at line 04 will print only if the two numbers are equal in value.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The print statement at line 06 will print only if num1 is less than num2.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The print statement at line 08 will print only if num1 is greater than num2.",
          "correctItemId": "yes"
        },
        {
          "id": "z4",
          "label": "The statement at line 09 is an invalid comparison.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-486",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are writing a Python program to determine if a number (num) the user inputs is one,\ntwo, or more than two digits (digits).",
      "explanation": "Absolute values below 10 have one digit, including zero; values below 100 have two digits. Taking abs prevents a negative sign from being counted as a digit.",
      "dragItems": [
        {
          "id": "i1",
          "text": "if abs(num) < 10;"
        },
        {
          "id": "i2",
          "text": "if abs(num) < 10"
        },
        {
          "id": "i3",
          "text": "if abs(num) < 10 ="
        },
        {
          "id": "i4",
          "text": "if abs(num) < 10:"
        },
        {
          "id": "i5",
          "text": "elif abs(num) < 100"
        },
        {
          "id": "i6",
          "text": "elif abs(num) < 100 ="
        },
        {
          "id": "i7",
          "text": "elif abs(num) < 100:"
        },
        {
          "id": "i8",
          "text": "elif abs(num) < 100;"
        },
        {
          "id": "i9",
          "text": "else ="
        },
        {
          "id": "i10",
          "text": "else:"
        },
        {
          "id": "i11",
          "text": "else;"
        },
        {
          "id": "i12",
          "text": "else"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ],
      "code": "num = int(input(\"Enter an integer: \"))\n[1]\n    digits = \"1\"\n[2]\n    digits = \"2\"\n[3]\n    digits = \">2\"\nprint(digits + \" digits.\")"
    },
    {
      "id": "py-487",
      "chapter": "functii",
      "type": "dropdown",
      "question": "You are writing a function that increments the player score in a game.\n\nThe function has the following requirements:\n- If no value is specified for points, then points start at one.\n- If bonus is True, then points must be doubled.\n\nYou write the following code. Line numbers are included for reference only.\n\n01 def increment_score(score, bonus, points):\n02 if bonus == True:\n03 points = points * 2\n04 score = score + points\n05 return score\n06 points = 5\n07 score = 10\n08 new_score = increment_score(score, True, points)\n\nFor each statement, select True or False.\n\nNote: You will receive partial credit for each correct selection.",
      "explanation": "A default points=1 permits a two-argument call. Without that default the call raises TypeError. Rebinding the integer parameter inside the function does not change the caller's points variable.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "To meet the requirements, you must change line 01 to: def increment_score(score, bonus, points = 1).",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "If you do not change line 01 and the function is called with only two parameters, an error occurs.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Line 03 will also modify the value of the variable points declared at line 06.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "py-488",
      "chapter": "structura-cod",
      "type": "single",
      "question": "A friend asks you to refactor and document the following Python code:\n\nvalue1 = 9\nvalue2 = 4\n\nanswer = (value1 % value2 * 10) // 2.0 ** 3.0 + value2\n\nYou run the code.\n\nWhat is the result?",
      "explanation": "9 % 4 is 1, then 1*10 is 10. 2.0**3.0 is 8.0 and 10//8.0 is 1.0, giving 5.0 after adding 4. The original snippet assigns answer but does not print it.",
      "options": [
        "answer becomes 5.0; the snippet itself prints nothing",
        "A syntax error occurs",
        "answer becomes 129",
        "answer becomes 5.667"
      ],
      "correct": 0
    },
    {
      "id": "py-489",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "The following function calculates the value of an expression that uses an exponent.\nLine numbers are included for reference only.\n\n01 def calc_power(a, b):\n02 return a ** b\n03 base = input(\"Enter the number for the base: \")\n04 exponent = input(\"Enter the number for the exponent: \")\n05 result = calc_power(base, exponent)\n06 print(\"The result is \" + result)\n\nFor each statement, select True or False.",
      "explanation": "input succeeds and returns strings. The call on line 05 reaches line 02, where exponentiation of strings raises TypeError. The program never reaches the final print.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The code will generate an error in line 03 and line 04.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "The code will generate an error in line 02 and line 05.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The code will correctly output data to the console.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "py-490",
      "chapter": "input-output",
      "type": "single",
      "question": "What does the following statement do?\\n\\ndata = input()",
      "explanation": "input reads a line from standard input and returns it as a string, without its trailing newline.",
      "options": [
        "Allows a user to enter text in the console",
        "Creates an HTML input element",
        "Displays all input peripheral devices on the computer",
        "Displays a message box that allows user input"
      ],
      "correct": 0
    },
    {
      "id": "py-491",
      "chapter": "input-output",
      "type": "single",
      "question": "Review the following code:\nx = \"oranges\"\ny = \"apples\"\nz = \"bananas\"\ndata = \"{1} and {0} and {2}\"\nprint(data.format(z, y, x))\n\nWhat is the output of the print statement?",
      "explanation": "The format arguments are z, y, x. Index 1 is apples, index 0 is bananas and index 2 is oranges.",
      "options": [
        "oranges and apples and bananas",
        "apples and bananas and oranges",
        "bananas and oranges and apples",
        "apples and oranges and bananas"
      ],
      "correct": 1
    },
    {
      "id": "py-492",
      "chapter": "input-output",
      "type": "single",
      "question": "The Script.py file contains the following code:\nimport sys\nprint(sys.argv[2])\nYou run the following command:\npython Script.py Cheese Bacon Bread\nWhat is the output of the command?",
      "explanation": "The script name occupies argv[0], Cheese occupies argv[1], and Bacon occupies argv[2].",
      "options": [
        "Bread",
        "Script.py",
        "Cheese",
        "Bacon"
      ],
      "correct": 3
    },
    {
      "id": "py-493",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "A company needs help updating their file system.\nYou must create a simple file-manipulation program that performs the following actions:\n- Checks to see whether a file exists.\n- If the file exists, displays its contents.\nComplete the code by selecting the correct code segment from each drop-down list.\nimport os\nif \n[1]\n\nfile = open('myFile.txt')\n\n[2]\n\nfile.close()",
      "explanation": "isfile checks for an existing regular file. read retrieves its text and print displays it before the handle is closed.",
      "dragItems": [
        {
          "id": "i1",
          "text": "os.path.isfile(\"myFile.txt\");"
        },
        {
          "id": "i2",
          "text": "os.path.isfile(\"myFile.txt\")"
        },
        {
          "id": "i3",
          "text": "os.path.isfile(\"myFile.txt\") ="
        },
        {
          "id": "i4",
          "text": "os.path.isfile(\"myFile.txt\"):"
        },
        {
          "id": "i5",
          "text": "print()"
        },
        {
          "id": "i6",
          "text": "print(\"file.read()\")"
        },
        {
          "id": "i7",
          "text": "print(file.read())"
        },
        {
          "id": "i8",
          "text": "print[file.read()]"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-494",
      "chapter": "functii",
      "type": "dropdown",
      "question": "For each statement about the following function, select True or False.\ndef\ngrosspay(hours=40, rate=25, pieces=0, piecerate=0, salary=0):\novertime=0\nif pieces > 0:\nreturn pieces * piecerate\nif salary > 0:\npass\nif hours > 40:\novertime = (hours-40) * (1.5 * rate)\nreturn overtime + (40 * rate)\nelse:\nreturn hours * rate\nNote: You will receive partial credit for each correct selection.",
      "explanation": "With normal indentation the function is valid and grosspay() returns 1000. pass does not return, so salary=50000 also falls through to the hourly calculation. The pieces branch returns 500*4=2000.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A function call of grosspay() will create a syntax error.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "A function call of grosspay(salary=50000) will return nothing.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "A function call of grosspay(pieces=500, piecerate=4) will return a result of 2000.",
          "correctItemId": "yes"
        }
      ],
      "code": "def grosspay(hours=40, rate=25, pieces=0, piecerate=0, salary=0):\n    overtime = 0\n    if pieces > 0:\n        return pieces * piecerate\n    if salary > 0:\n        pass\n    if hours > 40:\n        overtime = (hours - 40) * (1.5 * rate)\n        return overtime + 40 * rate\n    else:\n        return hours * rate"
    },
    {
      "id": "py-495",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Complete the code to print prime numbers from 2 through 100.",
      "explanation": "Reset is_prime for each candidate, test potential divisors, and break when one divides evenly. Increment p after the primality check so the loop progresses through 100.",
      "dragItems": [
        {
          "id": "i1",
          "text": "break"
        },
        {
          "id": "i2",
          "text": "p += 1"
        },
        {
          "id": "i3",
          "text": "p = 2"
        },
        {
          "id": "i4",
          "text": "while p <= 100:"
        },
        {
          "id": "i5",
          "text": "is_prime = True"
        },
        {
          "id": "i6",
          "text": "while p <= 100;"
        },
        {
          "id": "i7",
          "text": "while p <= 100"
        },
        {
          "id": "i8",
          "text": "while p <= 100 ="
        },
        {
          "id": "i9",
          "text": "while p <= 100:"
        },
        {
          "id": "i10",
          "text": "p = 2"
        },
        {
          "id": "i11",
          "text": "while p <= 100:"
        },
        {
          "id": "i12",
          "text": "is_prime = True"
        },
        {
          "id": "i13",
          "text": "break"
        },
        {
          "id": "i14",
          "text": "p += 1"
        },
        {
          "id": "i15",
          "text": "pass"
        },
        {
          "id": "i16",
          "text": "break"
        },
        {
          "id": "i17",
          "text": "raise"
        },
        {
          "id": "i18",
          "text": "return"
        },
        {
          "id": "i19",
          "text": "is_prime = True"
        },
        {
          "id": "i20",
          "text": "break"
        },
        {
          "id": "i21",
          "text": "p += 1"
        },
        {
          "id": "i22",
          "text": "p = 2"
        },
        {
          "id": "i23",
          "text": "while p <= 100:"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4",
            "i5"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i9",
          "optionIds": [
            "i6",
            "i7",
            "i8",
            "i9"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i10",
            "i11",
            "i12",
            "i13",
            "i14"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i16",
          "optionIds": [
            "i15",
            "i16",
            "i17",
            "i18"
          ]
        },
        {
          "id": "z5",
          "label": "Blank [5]",
          "correctItemId": "i21",
          "optionIds": [
            "i19",
            "i20",
            "i21",
            "i22",
            "i23"
          ]
        }
      ],
      "code": "[1]\n[2]\n    [3]\n    for i in range(2, p):\n        if p % i == 0:\n            is_prime = False\n            [4]\n    if is_prime:\n        print(p)\n    [5]"
    },
    {
      "id": "py-496",
      "chapter": "input-output",
      "type": "multiple",
      "question": "You are creating an eCommerce script that accepts input from the user and outputs the\ndata in a comma-delimited format.\n\nYou write the following code to accept input:\n\nitem = input(\"Enter the item name: \")\nsales = int(input(\"Enter the quantity: \"))\n\nThe output must meet the following requirements:\n- Enclose strings in double quotes.\n- Do not enclose numbers in quotes or other characters.\n- Separate items by commas.\n\nYou need to complete the code to meet the requirements.\n\nWhich two code segments could you use? Each correct answer presents a complete solution.\n(Choose 2.)",
      "explanation": "Explicit double quotes around the item string preserve the required representation, while the integer is printed without quotes. Concatenating an integer directly with a string raises TypeError. Default print separators can add spaces around the comma; use sep=\"\" for exact CSV-style spacing.",
      "options": [
        "print(item + \",\" + sales)",
        "print(\"{0},{1}\".format(item, sales))",
        "print('\"{0}\",{1}'.format(item, sales))",
        "print('\"' + item + '\"', \",\", sales, sep=\"\")"
      ],
      "correct": [
        2,
        3
      ]
    },
    {
      "id": "py-497",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are writing a program to randomly assign rooms (room_number) and team-building\ngroups (group) for a company retreat.\n\nComplete the code by selecting the correct code segment from each drop-down list.\n\nimport random\nroomsAssigned=[1]\nroom_number=1\ngroupList=[\"Ropes\",\"Rafting\",\"Obstacle\",\"Wellness\"]\ncount=0\nprint(\"Welcome to CompanyPro's Team-Building Weekend!\")\nname=input(\"Please enter your name (q to quit)? \")\nwhile name.lower() != 'q' and count < 50:\nwhile room_number in roomsAssigned:\n\n[1]\n\nprint(f\"{name}, your room number is {room_number}\")\nroomsAssigned.append(room_number)\n\n[2]\n\nprint(f\"You will meet with the {group} Group this afternoon.\")\ncount+=1\nname=input(\"Please enter your name (q to quit)? \")",
      "explanation": "randint picks a room number including both bounds. The loop rejects already assigned rooms. choice selects one group from the supplied list. A 100-room range leaves enough candidates for at most 50 guests.",
      "dragItems": [
        {
          "id": "i1",
          "text": "room_number = random.randint[1, 100]"
        },
        {
          "id": "i2",
          "text": "room_number = random::randint(1, 100)"
        },
        {
          "id": "i3",
          "text": "room_number = random.randint(1, 100)"
        },
        {
          "id": "i4",
          "text": "room_number == random.randint(1, 100)"
        },
        {
          "id": "i5",
          "text": "group = random::choice(groupList)"
        },
        {
          "id": "i6",
          "text": "group = random.choice(groupList)"
        },
        {
          "id": "i7",
          "text": "group == random.choice(groupList)"
        },
        {
          "id": "i8",
          "text": "group = random.choice[groupList]"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-498",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "A company needs help updating their file system. You must create a simple\nfile-manipulation program that performs the following actions:\nCreates a file using the specified name.\nAppends the phrase \"End of listing\" to the file.\n\nYou need to complete the code to meet the requirements.\n\nComplete the code by selecting the correct code segment from each drop-down list.\nimport os\nfile = \n[1]\n\n\n[2]\n(\"End of listing\")\nfile.close()",
      "explanation": "Append mode creates a missing file or preserves existing content. write adds the requested text at the end.",
      "dragItems": [
        {
          "id": "i1",
          "text": "open(\"listing.txt, a\")"
        },
        {
          "id": "i2",
          "text": "open(\"listing.txt\", \"a\")"
        },
        {
          "id": "i3",
          "text": "open[\"listing.txt\", \"a\"]"
        },
        {
          "id": "i4",
          "text": "open()"
        },
        {
          "id": "i5",
          "text": "file.write"
        },
        {
          "id": "i6",
          "text": "file::write"
        },
        {
          "id": "i7",
          "text": "file.write()"
        },
        {
          "id": "i8",
          "text": "file.write = None"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-499",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Review the following code segment:\n\nf = open(\"python.txt\", \"a\")\nf.write(\"This is a line of text.\")\nf.close()\n\nFor each statement about the code segment, select True or False.",
      "explanation": "Mode a creates the file if missing and appends instead of truncating. close releases the handle; later code can open the file normally.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A file named python.txt is created if it does not exist.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The data in the file will be overwritten.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Other code can open the file after this code runs.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-500",
      "chapter": "structuri-date",
      "type": "drag_drop",
      "question": "You need to identify the results of performing various slicing operations on the\nfollowing sequence structure:\nalph = \"abcdefghijklmnopqrstuvwxyz\"\n\nMove the appropriate results from the list on the left to the correct slicing operations\non the right.\nYou may use each result once, more than once, or not at all.\nalph[3:6]\nalph[:6]",
      "explanation": "Slices include the start index and exclude the stop index. Indexes 3 through 5 spell def, and the first six characters spell abcdef.",
      "dragItems": [
        {
          "id": "i1",
          "text": "def"
        },
        {
          "id": "i2",
          "text": "abcdef"
        },
        {
          "id": "i3",
          "text": "cde"
        },
        {
          "id": "i4",
          "text": "defg"
        },
        {
          "id": "i5",
          "text": "cdef"
        },
        {
          "id": "i6",
          "text": "abcde"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "alph[3:6]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "alph[:6]",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "py-501",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "You find errors while evaluating the following code. Line numbers are included for\nreference only.\n\n01 numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n02 index = 0\n03 while(index < 0)\n04 print(numbers[index])\n05\n06 if numbers(index) = 6\n07 break\n08 else:\n09 index += 1\n\nYou need to correct the code at line 03 and line 06.\n\nEvaluate the code and answer the questions by selecting the correct option from each\ndrop-down list.\nWhich code segment should use at line 03? \n[1]\n\nWhich code segment should use at line 06? \n[2]",
      "explanation": "The loop bound permits indexes 0 through 9. Square brackets index the list, == compares the value and both compound statements require a colon.",
      "dragItems": [
        {
          "id": "i1",
          "text": "while index < len(numbers) ="
        },
        {
          "id": "i2",
          "text": "while index < len(numbers):"
        },
        {
          "id": "i3",
          "text": "while index < len(numbers);"
        },
        {
          "id": "i4",
          "text": "while index < len(numbers)"
        },
        {
          "id": "i5",
          "text": "if numbers[index] == 6:"
        },
        {
          "id": "i6",
          "text": "if numbers[index] == 6;"
        },
        {
          "id": "i7",
          "text": "if numbers[index] == 6"
        },
        {
          "id": "i8",
          "text": "if numbers[index] = 6:"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-502",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "You develop a Python application for your company.\n\nYou need to complete the code so that the print statements are accurate.\n\nComplete the code by selecting the correct code segment from each drop-down list.\n\nnumList = [1, 2, 3, 4, 5]\nalphaList = [\"a\", \"b\", \"c\", \"d\", \"e\"]\n\n[1]\n\nprint(\"The values in numList are equal to alphaList\")\n\n[2]\n\nprint(\"The values in numList are not equal to alphaList\")",
      "explanation": "== compares list contents; these lists differ, so the else message is printed. is would compare object identity rather than values.",
      "dragItems": [
        {
          "id": "i1",
          "text": "if numList == alphaList:"
        },
        {
          "id": "i2",
          "text": "if numList == alphaList;"
        },
        {
          "id": "i3",
          "text": "if numList == alphaList"
        },
        {
          "id": "i4",
          "text": "if numList = alphaList:"
        },
        {
          "id": "i5",
          "text": "else;"
        },
        {
          "id": "i6",
          "text": "else"
        },
        {
          "id": "i7",
          "text": "else ="
        },
        {
          "id": "i8",
          "text": "else:"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-503",
      "chapter": "functii",
      "type": "dropdown",
      "question": "You are creating a function to calculate admission fees (admission_fee) based on the\nfollowing rules:\n• Anyone under age 5 = free admission\n• Anyone age 5 or older who is in school = $10\n• Anyone age 5 to 17 who is not in school = $20\n• Anyone older than age 17 who is not in school = $50",
      "explanation": "Check free admission first. All remaining school attendees pay 10; remaining ages through 17 pay 20; older nonstudents pay 50.",
      "dragItems": [
        {
          "id": "i1",
          "text": "if age < 5;"
        },
        {
          "id": "i2",
          "text": "if age < 5"
        },
        {
          "id": "i3",
          "text": "if age < 5 ="
        },
        {
          "id": "i4",
          "text": "if age < 5:"
        },
        {
          "id": "i5",
          "text": "elif school"
        },
        {
          "id": "i6",
          "text": "elif school ="
        },
        {
          "id": "i7",
          "text": "elif school:"
        },
        {
          "id": "i8",
          "text": "elif school;"
        },
        {
          "id": "i9",
          "text": "elif age <= 17 ="
        },
        {
          "id": "i10",
          "text": "elif age <= 17:"
        },
        {
          "id": "i11",
          "text": "elif age <= 17;"
        },
        {
          "id": "i12",
          "text": "elif age <= 17"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ],
      "code": "def admission_fee(age, school):\n    [1]\n        return 0\n    [2]\n        return 10\n    [3]\n        return 20\n    else:\n        return 50"
    },
    {
      "id": "py-504",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are writing code to meet the following requirements:\n• Allow users to repeatedly enter words.\n• Output the number of characters in each word.\n\nComplete the code by selecting the correct option from each drop-down list.\n\nx = \"Hello\"\n\n[1]\n x != \"QUIT\":\nnum = 0\n\n[2]\n char \n[3]\n x:\nnum += 1\nprint(num)\nx = input(\"Enter a new word or QUIT to exit: \")",
      "explanation": "while repeats until the sentinel QUIT. for char in x visits every character and increments the counter once per character.",
      "dragItems": [
        {
          "id": "i1",
          "text": "from"
        },
        {
          "id": "i2",
          "text": "def"
        },
        {
          "id": "i3",
          "text": "while"
        },
        {
          "id": "i4",
          "text": "import"
        },
        {
          "id": "i5",
          "text": "id"
        },
        {
          "id": "i6",
          "text": "for"
        },
        {
          "id": "i7",
          "text": "list"
        },
        {
          "id": "i8",
          "text": "name"
        },
        {
          "id": "i9",
          "text": "in"
        },
        {
          "id": "i10",
          "text": "with"
        },
        {
          "id": "i11",
          "text": "as"
        },
        {
          "id": "i12",
          "text": "from"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "py-505",
      "chapter": "functii",
      "type": "dropdown",
      "question": "A coworker wrote a program that inputs names into a database. Unfortunately, the program\nreversed the letters in each name.\n\nYou need to write a Python function that outputs the characters in a name in the correct\norder.\n\nComplete the code by selecting the code segment from each drop-down list.\n\n# Function reverses characters in a string.\n# returns new string in reversed order.\n\ndef reverse_name(backward_name):\nforward_name = \"\"\nlength = \n[1]\n\nwhile length >= 0:\nforward_name += \n[2]\n\nlength = length - 1\nreturn forward_name\n\nprint(reverse_name(\"nohtyp\"))",
      "explanation": "The last valid string index is len-1. Walking down to index zero builds the string in reverse and turns nohtyp into python.",
      "dragItems": [
        {
          "id": "i1",
          "text": "len(backward_name) - 1 = None"
        },
        {
          "id": "i2",
          "text": "len(backward_name) - 1"
        },
        {
          "id": "i3",
          "text": "len[backward_name] - 1"
        },
        {
          "id": "i4",
          "text": "len(backward_name) - 1()"
        },
        {
          "id": "i5",
          "text": "backward_name[length]"
        },
        {
          "id": "i6",
          "text": "backward_name(length)"
        },
        {
          "id": "i7",
          "text": "backward_name[length]()"
        },
        {
          "id": "i8",
          "text": "backward_name[length] = None"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-506",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "A game development company needs a way to find the number of words in a list that\ncontain a specific letter.\n\nComplete the code by selecting the correct code segment from each drop-down list.\n\nNote: You will receive partial credit for each correct selection.\n\n# Function accepts list of words and letter to search for.\n# Returns count of the number of words that contain that letter.\ndef count_letter(letter, word_list):\ncount = 0\nfor \n[1]\n\nif \n[2]\n\ncount += 1\nreturn count\n\n# word_list is populated by the readWords() function. Code not shown.\nword_list = readWords()\n\nletter = input(\"Which letter would you like to count\")\nletter_count = count_letter(letter, word_list)\nprint(\"There are: \", letter_count, \" words that contain \", letter)",
      "explanation": "Iterate each word once and use substring membership. Incrementing once per matching word counts words containing the letter, not every occurrence of the letter.",
      "dragItems": [
        {
          "id": "i1",
          "text": "word in word_list:"
        },
        {
          "id": "i2",
          "text": "word in word_list;"
        },
        {
          "id": "i3",
          "text": "word in word_list"
        },
        {
          "id": "i4",
          "text": "word in word_list ="
        },
        {
          "id": "i5",
          "text": "letter in word;"
        },
        {
          "id": "i6",
          "text": "letter in word"
        },
        {
          "id": "i7",
          "text": "letter in word ="
        },
        {
          "id": "i8",
          "text": "letter in word:"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-507",
      "chapter": "structuri-control",
      "type": "single",
      "question": "Review the following code segment:\n\nproduct = 2\nn = 5\nwhile (n != 0):\nproduct *= n\nprint (product)\nn -= 1\nif n == 3:\nbreak\n\nHow many lines of output does the code print?",
      "explanation": "The first iteration prints 10 and decrements n to 4. The second prints 40, decrements n to 3 and breaks, so two lines are printed.",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correct": 1
    },
    {
      "id": "py-508",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are creating a Python program that will let a user guess a number from 1 to 10.\nThe user is allowed up to three guesses. If the user guesses the correct number, the\nprogram must stop asking for guesses. Complete the code by moving the appropriate code\nsegments from the list on the left to the correct locations on the right. You may use\neach code segment once, more than once, or not at all.",
      "explanation": "Starting chance at 1 and using <=3 permits three attempts. break ends a successful game; incrementing the counter after an unsuccessful guess prevents an infinite loop.",
      "dragItems": [
        {
          "id": "i1",
          "text": "while chance <= 3"
        },
        {
          "id": "i2",
          "text": "while chance <= 3 ="
        },
        {
          "id": "i3",
          "text": "while chance <= 3:"
        },
        {
          "id": "i4",
          "text": "while chance <= 3;"
        },
        {
          "id": "i5",
          "text": "pass"
        },
        {
          "id": "i6",
          "text": "break"
        },
        {
          "id": "i7",
          "text": "raise"
        },
        {
          "id": "i8",
          "text": "return"
        },
        {
          "id": "i9",
          "text": "chance += 1"
        },
        {
          "id": "i10",
          "text": "while chance <= 3:"
        },
        {
          "id": "i11",
          "text": "break"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11"
          ]
        }
      ],
      "code": "from random import randint\ntarget = randint(1, 10)\nchance = 1\n[1]\n    guess = int(input(\"Guess: \"))\n    if guess > target:\n        print(\"Too high\")\n    elif guess < target:\n        print(\"Too low\")\n    else:\n        print(\"Just right!\")\n        [2]\n    [3]"
    },
    {
      "id": "py-509",
      "chapter": "structuri-control",
      "type": "single",
      "question": "You write the following code to determine a student's final grade based on their current\ngrade (grade) and rank (rank):\n\ngrade = 76\nrank = 3\n\nif grade > 80 and rank >= 3:\ngrade += 10\nelif grade >= 70 and rank > 3:\ngrade += 5\nelse:\ngrade -= 5\n\nprint(grade)\n\nWhat value will print?",
      "explanation": "76 is not greater than 80 and rank 3 is not greater than 3. Neither condition matches, so else subtracts 5 and prints 71.",
      "options": [
        "71",
        "76",
        "81",
        "86"
      ],
      "correct": 0
    },
    {
      "id": "py-510",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are designing a decision structure to convert student’s numeric grades (`grade`) to\nletter grades (`letter_grade`).\nThe program must assign letter grades as specified in the following table:\nPercentage range Letter grade\n90 through 100 A\n80 through 89 B\n70 through 79 C\n65 through 69 D\n0 through 64 F\n\nFor example, if the user enters a 90, the output should be `\"Your letter grade is A\"`.\nLikewise, if a user enters an 89, the output should be `\"Your letter grade is B\"`.\nComplete the code by selecting the correct code segment from each drop-down list.\n```python\n#Letter Grade Converter\ngrade = int(input(\"Enter a numeric grade\"))\n\n\n[1]\n # dropdown 1\nletter_grade = 'A'\n\n[2]\n # dropdown 2\nletter_grade = 'B'\n\n[3]\n # dropdown 3\nletter_grade = 'C'\n\n[4]\n # dropdown 4\nletter_grade = 'D'\nelse:\nletter_grade = 'F'",
      "explanation": "Descending lower bounds make the first matching branch correspond to A, B, C or D; else covers grades below 65. The input is assumed to be from 0 through 100.",
      "dragItems": [
        {
          "id": "i1",
          "text": "if grade >= 90;"
        },
        {
          "id": "i2",
          "text": "if grade >= 90"
        },
        {
          "id": "i3",
          "text": "if grade >= 90 ="
        },
        {
          "id": "i4",
          "text": "if grade >= 90:"
        },
        {
          "id": "i5",
          "text": "elif grade >= 80"
        },
        {
          "id": "i6",
          "text": "elif grade >= 80 ="
        },
        {
          "id": "i7",
          "text": "elif grade >= 80:"
        },
        {
          "id": "i8",
          "text": "elif grade >= 80;"
        },
        {
          "id": "i9",
          "text": "elif grade >= 70 ="
        },
        {
          "id": "i10",
          "text": "elif grade >= 70:"
        },
        {
          "id": "i11",
          "text": "elif grade >= 70;"
        },
        {
          "id": "i12",
          "text": "elif grade >= 70"
        },
        {
          "id": "i13",
          "text": "elif grade >= 65:"
        },
        {
          "id": "i14",
          "text": "elif grade >= 65;"
        },
        {
          "id": "i15",
          "text": "elif grade >= 65"
        },
        {
          "id": "i16",
          "text": "elif grade >= 65 ="
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i13",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ]
    },
    {
      "id": "py-511",
      "chapter": "input-output",
      "type": "single",
      "question": "You are developing a Python application for your company.\n\nYou need to accept input from the user and print that information to the user's screen.\nYou start with the following code. Line numbers are included for reference only:\n01 print(\"What is your name?\")\n02 __\n03 print(name)\nWhich code should you write at line 02?",
      "explanation": "Calling input() returns the user's text, which must be assigned to name. Assigning input without parentheses stores the function instead of calling it.",
      "options": [
        "input(name)",
        "name = input",
        "name = input()",
        "input(\"name\")"
      ],
      "correct": 2
    },
    {
      "id": "py-512",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are writing a program to display special offers for My Healthy Eats Delivery. Line\nnumbers are for reference only:\n\n01 import datetime\n02 dailySpecials=(\"Spaghetti\",\"Macaroni and Cheese\",\"Meatloaf\",\"Fried Chicken\")\n03 weekendSpecials=(\"Lobster\",\"Prime Rib\",\"Parmesan-Crusted Cod\")\n04\n05\n06 print(\"My Healthy Eats Delivery\")\n07 if today == \"Friday\" or today == \"Saturday\" or today ==\"Sunday\":\n08 print(\"The weekend specials include:\")\n09 for item in weekendSpecials:\n10 print(item)\n11 else:\n12 print(\"The weekday specials include: \")\n13 for item in dailySpecials:\n14 print(item)\n15\n16 print(f\"Pricing specials change in {daysLeft} days\")\nComplete the code in lines 04, 05, and 15 by selecting the correct option from each\ndrop-down list.\nIn line 04, retrieve the current date. \n[1]\n\n\nIn line 05, retrieve the weekday. \n[2]\n\n\nIn line 15, calculate the number of days left in the week. \n[3]",
      "explanation": "now obtains the current local date/time. %A gives the weekday name. weekday numbers Monday as 0 and Sunday as 6, so 6-weekday counts days until Sunday, excluding the current day.",
      "dragItems": [
        {
          "id": "i1",
          "text": "daysLeft = 6 - current_date.weekday()"
        },
        {
          "id": "i2",
          "text": "current_date = datetime.datetime.now()"
        },
        {
          "id": "i3",
          "text": "today = current_date.strftime(\"%A\")"
        },
        {
          "id": "i4",
          "text": "current_date = datetime.datetime.now()"
        },
        {
          "id": "i5",
          "text": "today = current_date.strftime(\"%A\")"
        },
        {
          "id": "i6",
          "text": "daysLeft = 6 - current_date.weekday()"
        },
        {
          "id": "i7",
          "text": "today = current_date.strftime(\"%A\")"
        },
        {
          "id": "i8",
          "text": "daysLeft = 6 - current_date.weekday()"
        },
        {
          "id": "i9",
          "text": "current_date = datetime.datetime.now()"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i4",
            "i5",
            "i6"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i8",
          "optionIds": [
            "i7",
            "i8",
            "i9"
          ]
        }
      ]
    },
    {
      "id": "py-513",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "A company asks you to debug some code that is causing problems with their payroll. They\nask you to find the source of the payroll errors.\n\nThe following variables have been declared:\n\nemployee_pay = [15000, 120000, 35000, 45000]\ncount = 0\nsum = 0\n\nThere are two errors in the following code:\n\nfor index in range(0, len(employee_pay)-1):\ncount += 1\nsum += employee_pay[index]\naverage = sum/count\nprint(\"The total payroll is:\", sum)\nprint(\"The average salary is:\", average)\n\nWhich code should you use to fix the errors?\n\nTo answer, select the appropriate code segments in the answer area.\nfor index in range \n[1]\n\ncount += 1\nsum += employee_pay[index]\naverage = \n[2]\n\nprint(\"The total payroll is:\", sum)\nprint(\"The average salary is:\",average)",
      "explanation": "range excludes its stop, so stopping at len includes every employee. Compute the average after the loop using the total divided by the count. In Python 3, / is true division.",
      "dragItems": [
        {
          "id": "i1",
          "text": "(0, len(employee_pay))"
        },
        {
          "id": "i2",
          "text": "[0, len(employee_pay])"
        },
        {
          "id": "i3",
          "text": "(0, len(employee_pay))()"
        },
        {
          "id": "i4",
          "text": "(0, len(employee_pay)) = None"
        },
        {
          "id": "i5",
          "text": "sum * count"
        },
        {
          "id": "i6",
          "text": "count / sum"
        },
        {
          "id": "i7",
          "text": "sum + count"
        },
        {
          "id": "i8",
          "text": "sum / count"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-514",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are creating a program to calculate the rental fee for DVDs. The fee structure is as\nfollows:\n\n• The default cost (`cost_per_night`) is $1.59 per night.\n• If the customer returns the DVD after 8 PM, they are charged for an extra night.\n• Sunday DVD rentals receive a 30% discount for the full length of the rental.\n• Thursday DVD rentals receive a 50% discount for the full length of the rental.\n\nComplete the code to meet the requirements by selecting the correct code segment from\neach dropdown list.\n\n#DVD Rental Calculator\nontime = input(\"Was the video returned before 8 PM? Y or N\").lower()\ndays_rented = int(input(\"How many days was the video rented?\"))\nweekday = input(\"What day was the video rented?\").capitalize()\ncost_per_night = 1.59\nif ontime \n[1]\n\ndays_rented +=1\nif weekday \n[2]\n\ntotal = (days_rented * cost_per_night) * 0.7\nelif weekday \n[3]\n\ntotal = (days_rented * cost_per_night) * 0.5\nelse:\ntotal = days_rented * cost_per_night\nprint(\"Cost of the DVD rental is : $\", total)",
      "explanation": "A return not marked y adds a night. Sunday uses 70% of the normal total for a 30% discount, and Thursday uses 50% for a 50% discount.",
      "dragItems": [
        {
          "id": "i1",
          "text": "!= \"y\";"
        },
        {
          "id": "i2",
          "text": "!= \"y\""
        },
        {
          "id": "i3",
          "text": "!= \"y\" ="
        },
        {
          "id": "i4",
          "text": "!= \"y\":"
        },
        {
          "id": "i5",
          "text": "== \"Sunday\""
        },
        {
          "id": "i6",
          "text": "= \"Sunday\":"
        },
        {
          "id": "i7",
          "text": "== \"Sunday\":"
        },
        {
          "id": "i8",
          "text": "== \"Sunday\";"
        },
        {
          "id": "i9",
          "text": "= \"Thursday\":"
        },
        {
          "id": "i10",
          "text": "== \"Thursday\":"
        },
        {
          "id": "i11",
          "text": "== \"Thursday\";"
        },
        {
          "id": "i12",
          "text": "== \"Thursday\""
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "py-515",
      "chapter": "input-output",
      "type": "multiple",
      "question": "Students are attending an activity night at their school. The following function tells\nstudents where to go for their activities:\n\ndef roomAssignment(student, year):\n\"\"\"Assign rooms to students\"\"\"\nif year == 1:\nprint(f\"\\n{student.title()}, please report to room 115\")\nelif year == 2:\nprint(f\"\\n{student.title()}, please report to room 210\")\nelif year == 3:\nprint(f\"\\n{student.title()}, please report to room 320\")\nelif year == 4:\nprint(f\"\\n{student.title()}, please report to room 405\")\nelif year == 5:\nprint(f\"\\n{student.title()}, please report to room 515\")\nelse:\nprint(f\"\\n{student.title()}, please report to room 625\")\n\nWhich two code segments can be used to call the function? (Choose 2.)\nEach correct code segment is a complete solution.",
      "explanation": "Both calls supply the required student and year arguments. The keyword is student, not name. Calling with undefined student/year variables is not a complete solution.",
      "options": [
        "name = input('What is your name?') grade = 0 while grade not in (1, 2, 3, 4, 5, 6): grade = int(input('What grade are you in (1-6)?')) roomAssignment(name, year=grade)",
        "name = input('What is your name?') grade = 0 while grade not in (1, 2, 3, 4, 5, 6): grade = int(input('What grade are you in (1-6)?')) roomAssignment(student, year)",
        "roomAssignment('Sherlock Sassafrass', 4)",
        "roomAssignment(year=6, name='Minnie George')"
      ],
      "correct": [
        0,
        2
      ]
    },
    {
      "id": "py-516",
      "chapter": "structuri-control",
      "type": "multiple",
      "question": "Assume all balances are nonnegative. Which TWO code segments produce an integer result by discarding the fractional portion of total_deposits / number_of_customers?",
      "explanation": "For nonnegative balances int(total/count) truncates the decimal portion. Floor division has the same result for nonnegative values, but returns a float if an operand is a float; negative balances would require special care.",
      "options": [
        "average_balance = round(total_deposits / number_of_customers)",
        "average_balance = total_deposits ** number_of_customers",
        "average_balance = int(total_deposits / number_of_customers)",
        "average_balance = int(total_deposits // number_of_customers)"
      ],
      "correct": [
        2,
        3
      ]
    },
    {
      "id": "py-517",
      "chapter": "input-output",
      "type": "single",
      "question": "You are developing a Python application for your school. The application must read and\nwrite data to a text file.\nIf the file does not exist, the application must create it. If the file contains\ncontent, the application must delete the content.\n\nWhich code segment should you use?",
      "explanation": "w+ creates a missing file, truncates an existing file, and allows both reading and writing. w alone does not permit reading and r+ does not create or truncate.",
      "options": [
        "open(\"local_data\", \"w\")",
        "open(\"local_data\", \"r\")",
        "open(\"local_data\", \"w+\")",
        "open(\"local_data\", \"r+\")"
      ],
      "correct": 2
    },
    {
      "id": "py-518",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "Complete the exception-handling structure: call process(); if it raises an exception, call logError(); always call displayResult() whether processing succeeds or fails.",
      "explanation": "The try block runs process. An exception handler logs ordinary exceptions, while finally runs displayResult whether or not an exception occurred.",
      "dragItems": [
        {
          "id": "i1",
          "text": "try"
        },
        {
          "id": "i2",
          "text": "try ="
        },
        {
          "id": "i3",
          "text": "try:"
        },
        {
          "id": "i4",
          "text": "try;"
        },
        {
          "id": "i5",
          "text": "except Exception ="
        },
        {
          "id": "i6",
          "text": "except Exception:"
        },
        {
          "id": "i7",
          "text": "except Exception;"
        },
        {
          "id": "i8",
          "text": "except Exception"
        },
        {
          "id": "i9",
          "text": "finally:"
        },
        {
          "id": "i10",
          "text": "finally;"
        },
        {
          "id": "i11",
          "text": "finally"
        },
        {
          "id": "i12",
          "text": "finally ="
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ],
      "code": "[1]\n    process()\n[2]\n    logError()\n[3]\n    displayResult()"
    },
    {
      "id": "py-519",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "You are writing code to create an E shape from asterisks. You need to print five lines\nof code,\nwith four asterisks each on the first, third, and fifth lines and one asterisk each on\nthe second and fourth lines, as shown.\n\n****\n*\n****\n*\n****\n\nComplete the code by selecting the correct numbers in the boxes. Enter each number as an\ninteger.\n\nresult_str = \"\"\nfor row in range(1, \n[1]\n):\nfor column in range(1, \n[2]\n):\nif (row == 1 or row == 3 or row == 5):\nresult_str = result_str + \"*\"\nelif column == 1:\nresult_str = result_str + \"*\"\nresult_str = result_str + \"\\n\"\nprint(result_str)",
      "explanation": "The exclusive range bounds produce five rows and four columns. Odd rows receive four stars; even rows receive a star only at column 1.",
      "dragItems": [
        {
          "id": "i1",
          "text": "6"
        },
        {
          "id": "i2",
          "text": "0"
        },
        {
          "id": "i3",
          "text": "1"
        },
        {
          "id": "i4",
          "text": "2"
        },
        {
          "id": "i5",
          "text": "0"
        },
        {
          "id": "i6",
          "text": "1"
        },
        {
          "id": "i7",
          "text": "2"
        },
        {
          "id": "i8",
          "text": "5"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-520",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Fill the five fragments to compute (-a)**2, including the parentheses.",
      "explanation": "Parenthesizing -a ensures the negative value is squared: (-a)**2. Without parentheses, -a**2 negates the square instead.",
      "dragItems": [
        {
          "id": "i1",
          "text": "a"
        },
        {
          "id": "i2",
          "text": ")"
        },
        {
          "id": "i3",
          "text": "**2"
        },
        {
          "id": "i4",
          "text": "("
        },
        {
          "id": "i5",
          "text": "-"
        },
        {
          "id": "i6",
          "text": "*"
        },
        {
          "id": "i7",
          "text": "/"
        },
        {
          "id": "i8",
          "text": "-"
        },
        {
          "id": "i9",
          "text": "+"
        },
        {
          "id": "i10",
          "text": "r+"
        },
        {
          "id": "i11",
          "text": "a"
        },
        {
          "id": "i12",
          "text": "r"
        },
        {
          "id": "i13",
          "text": "w"
        },
        {
          "id": "i14",
          "text": "("
        },
        {
          "id": "i15",
          "text": "-"
        },
        {
          "id": "i16",
          "text": "a"
        },
        {
          "id": "i17",
          "text": ")"
        },
        {
          "id": "i18",
          "text": "**2"
        },
        {
          "id": "i19",
          "text": "-"
        },
        {
          "id": "i20",
          "text": "a"
        },
        {
          "id": "i21",
          "text": ")"
        },
        {
          "id": "i22",
          "text": "**2"
        },
        {
          "id": "i23",
          "text": "("
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4",
            "i5"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i6",
            "i7",
            "i8",
            "i9"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i10",
            "i11",
            "i12",
            "i13"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i17",
          "optionIds": [
            "i14",
            "i15",
            "i16",
            "i17",
            "i18"
          ]
        },
        {
          "id": "z5",
          "label": "Blank [5]",
          "correctItemId": "i22",
          "optionIds": [
            "i19",
            "i20",
            "i21",
            "i22",
            "i23"
          ]
        }
      ],
      "code": "a = int(input(\"Enter a number: \"))\nb = [1][2][3][4][5]"
    },
    {
      "id": "py-521",
      "chapter": "functii",
      "type": "dropdown",
      "question": "Answer the questions about documenting Python code by selecting the correct option from\neach drop-down list.\nWhitch caracter(s) signal the beginning and ending of single-line docstring? \n[1]\n\nWhen documenting a function, what is the standart location for the docstring? \n[2]\n\n\nReview the following function:\ndef cube(n):\n\"\"\" Returns the cube of number n \"\"\"\nreturn n*n*n\nWhitch command will print the docstring? \n[3]",
      "explanation": "A function's first string literal becomes its docstring. Triple-quoted strings are conventional, and __doc__ retrieves the stored documentation.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Double forward slashes"
        },
        {
          "id": "i2",
          "text": "A slash-star comment"
        },
        {
          "id": "i3",
          "text": "Triple double quotes (\"\"\")"
        },
        {
          "id": "i4",
          "text": "A hash prefix on each line"
        },
        {
          "id": "i5",
          "text": "In a separate text file"
        },
        {
          "id": "i6",
          "text": "First statement in the function body"
        },
        {
          "id": "i7",
          "text": "After the return statement"
        },
        {
          "id": "i8",
          "text": "Only outside the function"
        },
        {
          "id": "i9",
          "text": "print(cube.__doc__)"
        },
        {
          "id": "i10",
          "text": "print[cube.__doc__]"
        },
        {
          "id": "i11",
          "text": "print()"
        },
        {
          "id": "i12",
          "text": "print(\"cube.__doc__\")"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "py-522",
      "chapter": "module-librarii",
      "type": "multiple",
      "question": "You are creating a function that manipulates a number passed into the function as a\nfloat value. The function must perform the following tasks: • Take the absolute\nvalue of the float. • Remove any decimal points after the integer. Which\ntwo math functions should you use? Each correct answer is part of the solution. (Choose\n2.)",
      "explanation": "fabs produces a nonnegative float; floor then removes its fractional part by rounding down. Apply fabs first so negative input is handled correctly.",
      "options": [
        "math.floor(x)",
        "math.fabs(x)",
        "math.fmod(x)",
        "math.frexp(x)"
      ],
      "correct": [
        0,
        1
      ]
    },
    {
      "id": "py-523",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "You are developing a Python application for your company. You write the following code:\nnumList = [1, 2, 3, 4, 5]\nalphaList = [\"a\", \"b\", \"c\", \"d\", \"e\"]\nprint(numList is alphaList)\nprint(numList == alphaList)\nnumList = alphaList\nprint(numList is alphaList)\nprint(numList == alphaList)\n\nEvaluate the code and answer the questions by selecting the correct option from each\ndrop-down list.\nWhat is displayed after thr first print? \n[1]\n\nWhat is displayed after thr second print? \n[2]\n\nWhat is displayed after thr third print? \n[3]\n\nWhat is displayed after thr fourth print? \n[4]",
      "explanation": "Initially the two lists have different identities and contents. After numList = alphaList both names reference the same list, so both identity and equality are True.",
      "dragItems": [
        {
          "id": "i1",
          "text": "false"
        },
        {
          "id": "i2",
          "text": "True"
        },
        {
          "id": "i3",
          "text": "False"
        },
        {
          "id": "i4",
          "text": "true"
        },
        {
          "id": "i5",
          "text": "True"
        },
        {
          "id": "i6",
          "text": "False"
        },
        {
          "id": "i7",
          "text": "true"
        },
        {
          "id": "i8",
          "text": "false"
        },
        {
          "id": "i9",
          "text": "True"
        },
        {
          "id": "i10",
          "text": "true"
        },
        {
          "id": "i11",
          "text": "false"
        },
        {
          "id": "i12",
          "text": "False"
        },
        {
          "id": "i13",
          "text": "true"
        },
        {
          "id": "i14",
          "text": "false"
        },
        {
          "id": "i15",
          "text": "False"
        },
        {
          "id": "i16",
          "text": "True"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i16",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ]
    },
    {
      "id": "py-524",
      "chapter": "structuri-date",
      "type": "dropdown",
      "question": "You write the following code:\n\na = 'Config1'\nprint(a)\nb = a\na += 'Config2'\nprint(a)\nprint(b)\n\nEvaluate the code and answer the questions by selecting the correct option from each\ndrop-down list.\n\nWhat is displayed after the second print? \n[1]\n\nWhat is displayed after the third print? \n[2]",
      "explanation": "Strings are immutable. += creates and binds a new combined string to a, while b retains the original Config1 string.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Config1Config2"
        },
        {
          "id": "i2",
          "text": "Config2"
        },
        {
          "id": "i3",
          "text": "Config1"
        },
        {
          "id": "i4",
          "text": "Config1 Config2"
        },
        {
          "id": "i5",
          "text": "Config1Config2"
        },
        {
          "id": "i6",
          "text": "Config2"
        },
        {
          "id": "i7",
          "text": "Config1 Config2"
        },
        {
          "id": "i8",
          "text": "Config1"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-525",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "You are developing a Python program for an online product distribution company.\nThe program must iterate through a list of products (`productIdList`) and escape when it\nfinds a specific product ID.\nComplete the code by selecting the correct code segment\nfrom each drop-down list.\n\nproductIdList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\nindex= 0\n\n[1]\n (index < 10):\nprint(productIdList[index])\nif productIdList[index] == 6:\n\n[2]\n\nelse:\n\n[3]",
      "explanation": "while advances through the list, break exits at product ID 6, and incrementing index in the else branch prevents repeatedly processing the same product.",
      "dragItems": [
        {
          "id": "i1",
          "text": "import"
        },
        {
          "id": "i2",
          "text": "from"
        },
        {
          "id": "i3",
          "text": "def"
        },
        {
          "id": "i4",
          "text": "while"
        },
        {
          "id": "i5",
          "text": "return"
        },
        {
          "id": "i6",
          "text": "pass"
        },
        {
          "id": "i7",
          "text": "break"
        },
        {
          "id": "i8",
          "text": "raise"
        },
        {
          "id": "i9",
          "text": "break"
        },
        {
          "id": "i10",
          "text": "index += 1"
        },
        {
          "id": "i11",
          "text": "while"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11"
          ]
        }
      ]
    },
    {
      "id": "py-526",
      "chapter": "functii",
      "type": "dropdown",
      "question": "You are writing code to return a letter grade based on the following criteria:\n- Thevariable `grade` stores the numeric grade as a whole number between 0 and 100.\n- Grades from 90 to 100 = A.\n- Grades from 80 to 89 = B.\n- Grades from 70 to 79 = C.\n- All other grades are failing.\nComplete the code by selecting the correct code segment from each drop-down list.\n\n[1]\n grade <= 100:\n\n[2]\n grade>= 90:\nprint(\"Your grade is A.\")\n\n[3]\n grade >= 80:\nprint(\"Your grade is B.\")\n\n[4]\n grade < 80 \n[5]\n grade> 69:\nprint(\"Your grade is C.\")\n\n[6]\n:\nprint(\"Your grade is failing.\")\n\n[7]\n:\nprint(\"Invalid grade entered.\")",
      "explanation": "The outer condition validates 0-100. The descending inner chain checks 90 and 80, then requires both bounds for C; the inner else is failing, and the outer else is invalid input.",
      "dragItems": [
        {
          "id": "i1",
          "text": "elif"
        },
        {
          "id": "i2",
          "text": "and"
        },
        {
          "id": "i3",
          "text": "else"
        },
        {
          "id": "i4",
          "text": "if 0 <="
        },
        {
          "id": "i5",
          "text": "if"
        },
        {
          "id": "i6",
          "text": "if"
        },
        {
          "id": "i7",
          "text": "case"
        },
        {
          "id": "i8",
          "text": "default"
        },
        {
          "id": "i9",
          "text": "switch"
        },
        {
          "id": "i10",
          "text": "else if"
        },
        {
          "id": "i11",
          "text": "if else"
        },
        {
          "id": "i12",
          "text": "then"
        },
        {
          "id": "i13",
          "text": "elif"
        },
        {
          "id": "i14",
          "text": "if else"
        },
        {
          "id": "i15",
          "text": "then"
        },
        {
          "id": "i16",
          "text": "elif"
        },
        {
          "id": "i17",
          "text": "else if"
        },
        {
          "id": "i18",
          "text": "not"
        },
        {
          "id": "i19",
          "text": "and"
        },
        {
          "id": "i20",
          "text": "or"
        },
        {
          "id": "i21",
          "text": "else"
        },
        {
          "id": "i22",
          "text": "try"
        },
        {
          "id": "i23",
          "text": "except"
        },
        {
          "id": "i24",
          "text": "finally"
        },
        {
          "id": "i25",
          "text": "try"
        },
        {
          "id": "i26",
          "text": "except"
        },
        {
          "id": "i27",
          "text": "finally"
        },
        {
          "id": "i28",
          "text": "else"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4",
            "i5"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i6",
            "i7",
            "i8",
            "i9"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i13",
          "optionIds": [
            "i10",
            "i11",
            "i12",
            "i13"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i16",
          "optionIds": [
            "i14",
            "i15",
            "i16",
            "i17"
          ]
        },
        {
          "id": "z5",
          "label": "Blank [5]",
          "correctItemId": "i19",
          "optionIds": [
            "i18",
            "i19",
            "i20"
          ]
        },
        {
          "id": "z6",
          "label": "Blank [6]",
          "correctItemId": "i21",
          "optionIds": [
            "i21",
            "i22",
            "i23",
            "i24"
          ]
        },
        {
          "id": "z7",
          "label": "Blank [7]",
          "correctItemId": "i28",
          "optionIds": [
            "i25",
            "i26",
            "i27",
            "i28"
          ]
        }
      ]
    },
    {
      "id": "py-527",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Complete the formatted table row from fields. Fruit name: left-aligned, minimum width 10. Weight: right-aligned, minimum width 5, one decimal place. Price: right-aligned, minimum width 7, two decimal places. Use each indexed formatting fragment in its matching column.",
      "explanation": "String fields default to left alignment. Numeric f fields default to right alignment and specify one or two decimal places. Width is a minimum, not a truncation limit.",
      "dragItems": [
        {
          "id": "i1",
          "text": "{0:10}"
        },
        {
          "id": "i2",
          "text": "{1:5.1f}"
        },
        {
          "id": "i3",
          "text": "{2:7.2f}"
        },
        {
          "id": "i4",
          "text": "{1:5.1f}"
        },
        {
          "id": "i5",
          "text": "{2:7.2f}"
        },
        {
          "id": "i6",
          "text": "{0:10}"
        },
        {
          "id": "i7",
          "text": "{2:7.2f}"
        },
        {
          "id": "i8",
          "text": "{0:10}"
        },
        {
          "id": "i9",
          "text": "{1:5.1f}"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i4",
          "optionIds": [
            "i4",
            "i5",
            "i6"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i7",
          "optionIds": [
            "i7",
            "i8",
            "i9"
          ]
        }
      ],
      "code": "name, weight, price = fields\nprint(\"[1] [2] [3]\".format(name, float(weight), float(price)))"
    },
    {
      "id": "py-528",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are writing a program that calculates a user's approximate year of birth.\nThe program asks users for the user's age (`age`) and the current year (`year`),\nthen outputs the user's approximate year of birth (`born`) in a message (`message`).\n\nYou write the following code:\n\nage = input(\"Enter your age: \")\nyear = 2000\nborn = year - int(age)\nmessage = \"You were born in \" + str(born)\nprint(message)\n\nEvaluate the code and answer the questions by selecting the correct option from each drop-down list.\nWhat data type is age in line 01? \n[1]\n\nWhat data type is born in line 03? \n[2]\n\nWhat data type is message in line 05?\n[3]",
      "explanation": "input returns a string, subtraction of integers produces an integer, and concatenating the converted year with text produces a string.",
      "dragItems": [
        {
          "id": "i1",
          "text": "print"
        },
        {
          "id": "i2",
          "text": "eval"
        },
        {
          "id": "i3",
          "text": "str"
        },
        {
          "id": "i4",
          "text": "input"
        },
        {
          "id": "i5",
          "text": "bool"
        },
        {
          "id": "i6",
          "text": "int"
        },
        {
          "id": "i7",
          "text": "float"
        },
        {
          "id": "i8",
          "text": "str"
        },
        {
          "id": "i9",
          "text": "str"
        },
        {
          "id": "i10",
          "text": "input"
        },
        {
          "id": "i11",
          "text": "print"
        },
        {
          "id": "i12",
          "text": "eval"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "py-529",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Evaluate the normally indented petStore function. For the first statement, interpret \"returns a value\" as explicitly returning a useful result rather than the implicit None.",
      "explanation": "The function only prints and implicitly returns None, not an explicit computed result. Positional and correctly named keyword arguments are valid, and breed is optional with a default of none.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The function explicitly returns a computed result.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "petStore(category, species, breed) and petStore(breed=\"Maltese\", species=\"Canine\", category=\"dog\") are valid calls.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "petStore(category, species) and petStore(\"bird\", species=\"Scarlet Macaw\") will result in an argument error.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "py-530",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "Complete the statements about assert methods by selecting the correct option from each drop-down list.\nTo test that the value of variables a and b are the same, use: \n[1]\n\nTo test that objects a and b are the same, use: \n[2]\n\nTo test weather a value exists in a list, use \n[3]",
      "explanation": "assertEqual compares values, assertIs checks that both references point to the same object, and assertIn tests membership in a container.",
      "dragItems": [
        {
          "id": "i1",
          "text": "assertEqual()"
        },
        {
          "id": "i2",
          "text": "assertEqual(\"a, b\")"
        },
        {
          "id": "i3",
          "text": "assertEqual(a, b)"
        },
        {
          "id": "i4",
          "text": "assertEqual[a, b]"
        },
        {
          "id": "i5",
          "text": "assertIs(\"a, b\")"
        },
        {
          "id": "i6",
          "text": "assertIs(a, b)"
        },
        {
          "id": "i7",
          "text": "assertIs[a, b]"
        },
        {
          "id": "i8",
          "text": "assertIs()"
        },
        {
          "id": "i9",
          "text": "assertIn(a, items)"
        },
        {
          "id": "i10",
          "text": "assertIn[a, items]"
        },
        {
          "id": "i11",
          "text": "assertIn()"
        },
        {
          "id": "i12",
          "text": "assertIn(\"a, items\")"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "py-531",
      "chapter": "functii",
      "type": "dropdown",
      "question": "You are writing a function to perform safe division of numbers.\nYou need to ensure that a denominator and numerator are passed to the function and that the denominator is not zero.\nComplete the code by selecting the correct code segment from each drop-down list.\n\ndef safe_divide(numerator, denominator):\n\n[1]\n\nprint(\"A required value is missing.\")\n\n[2]\n\nprint(\"The denominator is zero.\")\nelse:\nreturn numerator / denominator",
      "explanation": "Check explicitly for None rather than falsiness so a zero numerator remains valid. A zero denominator must be handled before attempting division.",
      "dragItems": [
        {
          "id": "i1",
          "text": "if numerator is None or denominator is None ="
        },
        {
          "id": "i2",
          "text": "if numerator is None or denominator is None:"
        },
        {
          "id": "i3",
          "text": "if numerator is None or denominator is None;"
        },
        {
          "id": "i4",
          "text": "if numerator is None or denominator is None"
        },
        {
          "id": "i5",
          "text": "elif denominator == 0:"
        },
        {
          "id": "i6",
          "text": "elif denominator == 0;"
        },
        {
          "id": "i7",
          "text": "elif denominator == 0"
        },
        {
          "id": "i8",
          "text": "elif denominator = 0:"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-532",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You create the following program to locate a conference room and display the room name.\nThe program outputs \"Room does not exist.\" even when 1 or 2 is entered.\n\n01 rooms = {1: 'Foyer', 2: 'Conference Room'}\n02 room = input('Enter the room number: ')\n03 if not room in rooms:\n04 print('Room does not exist.')\n05 else:\n06 print(\"The room name is \" + rooms[room])\n\nEvaluate the code and answer the questions by selecting the correct option from each drop-down list.\nWhich two data types are stored in the rooms dictionary at line 01? \n[1]\n\nWhat is the data type of room at line 02? \n[2]\n\nWhy does line 03 fail to find the rooms? \n[3]",
      "explanation": "Dictionary membership checks keys. input returns '1' rather than integer 1, so conversion with int is needed before lookup.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Integer keys and string values"
        },
        {
          "id": "i2",
          "text": "String keys and integer values"
        },
        {
          "id": "i3",
          "text": "Boolean keys only"
        },
        {
          "id": "i4",
          "text": "Floating-point values only"
        },
        {
          "id": "i5",
          "text": "input"
        },
        {
          "id": "i6",
          "text": "print"
        },
        {
          "id": "i7",
          "text": "eval"
        },
        {
          "id": "i8",
          "text": "str"
        },
        {
          "id": "i9",
          "text": "Dictionary keys cannot be integers"
        },
        {
          "id": "i10",
          "text": "str() deletes dictionary entries"
        },
        {
          "id": "i11",
          "text": "The input string does not match the integer dictionary keys"
        },
        {
          "id": "i12",
          "text": "input() returns an integer automatically"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "py-533",
      "chapter": "functii",
      "type": "single",
      "question": "A bank is migrating their legacy bank transaction code to Python.\n\nThe bank hires you to document the migrated code.\n\nWhich documentation syntax is correct?",
      "explanation": "# starts a Python comment. // is floor division and C-style delimiters do not define Python comments.",
      "options": [
        "def get_balance():\\n # Returns the current balance of the bank account\\n return balance",
        "// Returns the current balance of the bank account\\ndef get_balance():\\n return balance",
        "def get_balance():\\n /* Returns the current balance of the bank account */\\n return balance",
        "' Returns the current balance of the bank account\\ndef get_balance():\\n return balance"
      ],
      "correct": 0
    },
    {
      "id": "py-534",
      "chapter": "functii",
      "type": "dropdown",
      "question": "You are creating an interactive Times Table Helper program intended for elementary school children.\n\nYou need to complete a function named times_tables that computes and displays all multiplication table results from 2 to 12, as shown below:\n\n4 6 8 10 12 14 16 18 20 22 24\n6 9 12 15 18 21 24 27 30 33 36\n8 12 16 20 24 28 32 36 40 44 48\n10 15 20 25 30 35 40 45 50 55 60\n12 18 24 30 36 42 48 54 60 66 72\n14 21 28 35 42 49 56 63 70 77 84\n16 24 32 40 48 56 64 72 80 88 96\n18 27 36 45 54 63 72 81 90 99 108\n20 30 40 50 60 70 80 90 100 110 120\n22 33 44 55 66 77 88 99 110 121 132\n24 36 48 60 72 84 96 108 120 132 144\n\nComplete the missing code segments by selecting the correct options from each drop-down list.\n# Display time tables 2 - 12\ndef times_tables():\n\n[1]\n\n\n[2]\n\nprint(row * col, end = \" \")\nprint()\n# main\ntimes_tables()",
      "explanation": "Both ranges include 2 through 12 because their stop is 13. The inner print stays on one line and the print after the inner loop starts the next row.",
      "dragItems": [
        {
          "id": "i1",
          "text": "for row in range(2, 13) ="
        },
        {
          "id": "i2",
          "text": "for row in range(2, 13):"
        },
        {
          "id": "i3",
          "text": "for row in range(2, 13);"
        },
        {
          "id": "i4",
          "text": "for row in range(2, 13)"
        },
        {
          "id": "i5",
          "text": "for col in range(2, 13):"
        },
        {
          "id": "i6",
          "text": "for col in range(2, 13);"
        },
        {
          "id": "i7",
          "text": "for col in range(2, 13)"
        },
        {
          "id": "i8",
          "text": "for col in range(2, 13) ="
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-535",
      "chapter": "operatori-tipuri",
      "type": "dropdown",
      "question": "Evaluate each statement about Python data types and indicate whether it is true (Yes) or\nfalse (No).",
      "explanation": "Numeric types support arithmetic appropriate to each type, and int can parse a suitable string. Strong typing prevents unsupported implicit type combinations, but dynamic typing permits rebinding a name to an object of another type.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "All numeric data types in Python can be used with arithmetic operators.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Data type conversion can be used to convert a string to an integer.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Python is a strongly typed language, which prevents changing the data type of a variable after it has been initialized.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "py-536",
      "chapter": "functii",
      "type": "dropdown",
      "question": "A developer is creating a program to track product inventory. They need to store a\nunique product code as text and the quantity of an item as a whole number that might\nlater be\nused in a calculation.",
      "explanation": "str stores and displays text, while int converts 15.0 to the whole number 15 for arithmetic. The final str avoids concatenating a number directly with strings.",
      "dragItems": [
        {
          "id": "i1",
          "text": "eval"
        },
        {
          "id": "i2",
          "text": "str"
        },
        {
          "id": "i3",
          "text": "input"
        },
        {
          "id": "i4",
          "text": "print"
        },
        {
          "id": "i5",
          "text": "int"
        },
        {
          "id": "i6",
          "text": "float"
        },
        {
          "id": "i7",
          "text": "str"
        },
        {
          "id": "i8",
          "text": "bool"
        },
        {
          "id": "i9",
          "text": "input"
        },
        {
          "id": "i10",
          "text": "print"
        },
        {
          "id": "i11",
          "text": "eval"
        },
        {
          "id": "i12",
          "text": "str"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ],
      "code": "product_code = [1](1024)\nquantity = [2](15.0)\nprint(\"Product Code: \" + product_code + \", Quantity: \" + [3](quantity) + \".\")"
    },
    {
      "id": "py-537",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "A programmer wants to extract the first three digits of a part number stored as a string\nto use as a category identifier.\nWhich of the following slicing methods will correctly retrieve the first three\ncharacters from the string 'part_number'?",
      "explanation": "The slice [0:3] includes indexes 0, 1 and 2, returning the first three characters.",
      "options": [
        "part_number[0:3]",
        "part_number[1:3]",
        "part_number[0:2]",
        "part_number[3:]"
      ],
      "correct": 0
    },
    {
      "id": "py-538",
      "chapter": "module-librarii",
      "type": "multiple",
      "question": "Which TWO math functions convert the positive value 25.87 to 25? Select both valid functions.",
      "explanation": "For positive 25.87, both floor and trunc produce 25. ceil and ordinary rounding produce 26. Negative values would distinguish floor from trunc.",
      "options": [
        "math.ceil",
        "math.floor",
        "round",
        "math.trunc"
      ],
      "correct": [
        1,
        3
      ]
    },
    {
      "id": "py-539",
      "chapter": "input-output",
      "type": "drag_drop",
      "question": "A programmer needs to create a list of fruits, add a new element, and then display the\nsorted list alphabetically, with each element on a new line.\nDrag the following lines of code into the correct order to produce the specified output.\nApples\nBananas\nGrapes\nOranges\n\n Step 1\n Step 2\n Step 3\n Step 4\n     Step 5",
      "explanation": "Create the list, append Apples, sort it, loop over the sorted elements, then print the loop variable with indentation inside the loop.",
      "dragItems": [
        {
          "id": "i1",
          "text": "fruits.sort()"
        },
        {
          "id": "i2",
          "text": "for fruit in fruits:"
        },
        {
          "id": "i3",
          "text": "fruits.append(\"Apples\")"
        },
        {
          "id": "i4",
          "text": "print(fruit)"
        },
        {
          "id": "i5",
          "text": "fruits = [\"Oranges\", \"Bananas\", \"Grapes\"]"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Step 1",
          "correctItemId": "i5"
        },
        {
          "id": "z2",
          "label": "Step 2",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Step 3",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "Step 4",
          "correctItemId": "i2"
        },
        {
          "id": "z5",
          "label": "Step 5",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "py-540",
      "chapter": "operatori-tipuri",
      "type": "multiple",
      "question": "Analyze this code example:\n\nplanets = [\"Mars\", \"Saturn\", \"Jupiter\", \"Venus\", \"Earth\"]\nplanets.sort()\n\nWhich two commands will display \"Venus\"?",
      "explanation": "The sorted list is Earth, Jupiter, Mars, Saturn, Venus. Venus is at index 4 and index -1.",
      "options": [
        "print(planets[3])",
        "print(planets[4])",
        "print(planets[-1])",
        "print(planets[-3])"
      ],
      "correct": [
        1,
        2
      ]
    },
    {
      "id": "py-541",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "Analyze the following code:\n\na = 10\nb = 5\nc = 2\nd = a % b * c + a // c\n\nWhich expression is evaluated first to calculate the value of d?",
      "explanation": "%, * and // have the same precedence and associate left to right. The first operation is a % b before multiplying its result by c.",
      "options": [
        "a % b",
        "a // c",
        "a % b * c",
        "a % b * c + a // c"
      ],
      "correct": 0
    },
    {
      "id": "py-542",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Evaluate each of these variables and assignments and then indicate, for each expression,\nYes if the expression is true or No if it is false.\n\nx = 5 + 4 * 2\ny = 20 // 6\nz = 2 ** 3 ** 2\n\nFor each comparison statement, select Yes if it is true or No if it is false.",
      "explanation": "Multiplication makes x=13, floor division makes y=3, and right-associative exponentiation makes z=2**(3**2)=512.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "x == 18",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "y == 3.3",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "z == 512",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-543",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "A programmer is building a security system that provides different access levels based\non a user's ID.\n\nID Range Access Level\n1000 and higher Administrator\n500-999 Manager\n1-499 Employee\n0 or less Guest\n\nUse this information and the dropdown arrows to complete the code as needed.\n\nif user_id \n[1]\n 1000:\n    print(\"Administrator access granted.\")\nelif user_id \n[2]\n 500:\n    print(\"Manager access granted.\")\nelif user_id \n[3]\n 1:\n    print(\"Employee access granted.\")\nelse:\n    print(\"Guest access granted.\")",
      "explanation": "Checking descending lower bounds gives administrator at 1000+, manager at 500-999 and employee at 1-499; else handles zero and negatives.",
      "dragItems": [
        {
          "id": "i1",
          "text": "!="
        },
        {
          "id": "i2",
          "text": "<="
        },
        {
          "id": "i3",
          "text": ">="
        },
        {
          "id": "i4",
          "text": "=="
        },
        {
          "id": "i5",
          "text": "<="
        },
        {
          "id": "i6",
          "text": ">="
        },
        {
          "id": "i7",
          "text": "=="
        },
        {
          "id": "i8",
          "text": "!="
        },
        {
          "id": "i9",
          "text": ">="
        },
        {
          "id": "i10",
          "text": "=="
        },
        {
          "id": "i11",
          "text": "!="
        },
        {
          "id": "i12",
          "text": "<="
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "py-544",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "The following variables have been assigned the following values:\n\nx = 12\ny = 5\n\nUsing the dropdown arrows, match each operator to the desired result for each\ncalculation.\n\nx \n[1]\n y = 7\nx \n[2]\n y = 60\nx \n[3]\n y = 2.4\nx \n[4]\n y = 2\nx \n[5]\n y = 2",
      "explanation": "12-5=7, 12*5=60, 12/5=2.4, 12//5=2, and 12%5=2. The final two fields intentionally distinguish quotient from remainder.",
      "dragItems": [
        {
          "id": "i1",
          "text": "/"
        },
        {
          "id": "i2",
          "text": "-"
        },
        {
          "id": "i3",
          "text": "+"
        },
        {
          "id": "i4",
          "text": "*"
        },
        {
          "id": "i5",
          "text": "*"
        },
        {
          "id": "i6",
          "text": "+"
        },
        {
          "id": "i7",
          "text": "-"
        },
        {
          "id": "i8",
          "text": "/"
        },
        {
          "id": "i9",
          "text": "+"
        },
        {
          "id": "i10",
          "text": "-"
        },
        {
          "id": "i11",
          "text": "*"
        },
        {
          "id": "i12",
          "text": "/"
        },
        {
          "id": "i13",
          "text": "-"
        },
        {
          "id": "i14",
          "text": "*"
        },
        {
          "id": "i15",
          "text": "//"
        },
        {
          "id": "i16",
          "text": "+"
        },
        {
          "id": "i17",
          "text": "*"
        },
        {
          "id": "i18",
          "text": "%"
        },
        {
          "id": "i19",
          "text": "+"
        },
        {
          "id": "i20",
          "text": "-"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Subtraction giving 7",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Multiplication giving 60",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "True division giving 2.4",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Floor-division quotient giving 2",
          "correctItemId": "i15",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        },
        {
          "id": "z5",
          "label": "Remainder giving 2",
          "correctItemId": "i18",
          "optionIds": [
            "i17",
            "i18",
            "i19",
            "i20"
          ]
        }
      ]
    },
    {
      "id": "py-545",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Look at the following code. For each statement, select Yes if the statement is True from\na Boolean standpoint and No if the statement is False from a Boolean standpoint.\n\nx = 10\ny = x\nz = 10\nx = 20",
      "explanation": "With z explicitly assigned from y, both reference the same original integer object 10. Rebinding x to 20 does not alter y or z. This avoids relying on implementation-specific integer interning.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "x == 20",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "y == 10",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "y is z",
          "correctItemId": "yes"
        },
        {
          "id": "z4",
          "label": "x is z",
          "correctItemId": "no"
        }
      ],
      "code": "x = 10\ny = x\nz = y\nx = 20"
    },
    {
      "id": "py-546",
      "chapter": "functii",
      "type": "dropdown",
      "question": "Look at the following code and then select the correct keyword to check if the substring\n\"Python\" is present in the provided slogan. If the code runs, it should return a value\nof True.\n\nslogan = \"Learning to code with Python is fun!\"\nprint (\"Python\" \n[1]\n slogan)",
      "explanation": "Substring membership returns True because Python occurs in the slogan with the same capitalization.",
      "dragItems": [
        {
          "id": "i1",
          "text": "with"
        },
        {
          "id": "i2",
          "text": "as"
        },
        {
          "id": "i3",
          "text": "from"
        },
        {
          "id": "i4",
          "text": "in"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "py-547",
      "chapter": "structuri-control",
      "type": "drag_drop",
      "question": "A developer is writing a program to manage user accounts.\nA user with the role \"admin\" should be able to view and edit all data, while a user with\nany other role can only view data.\nDrag the lines of code into the correct order to accomplish this, using the `if` and\n`else` statements.\n Line 1\n     Line 2\n Line 3\n     Line 4",
      "explanation": "The if branch displays editing/viewing access for admins; else displays viewing-only access for other roles. The print statements are indented within their branches.",
      "dragItems": [
        {
          "id": "i1",
          "text": "else:"
        },
        {
          "id": "i2",
          "text": "print(\"Viewing data...\")"
        },
        {
          "id": "i3",
          "text": "if user_role == \"admin\":"
        },
        {
          "id": "i4",
          "text": "print(\"Editing and viewing data...\")"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 1",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Line 2",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Line 3",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "Line 4",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "py-548",
      "chapter": "functii",
      "type": "dropdown",
      "question": "Choose the correct lines of code to satisfy the needs of the following function:\n\nA store offers the following discounts:\n- 10% off for 100 or more items\n- 5% off for 50 to 99 items\n- No discount for 49 items or fewer\n\ndef calculate_price(item_count):\n    discount = 0\n    if \n[1]\n\n        discount = 0.10\n    elif \n[2]\n\n        discount = 0.05\n    else:\n        \n[3]\n\n    return discount",
      "explanation": "The first matching threshold supplies 10% or 5%; quantities under 50 fall through to zero discount.",
      "dragItems": [
        {
          "id": "i1",
          "text": "item_count >= 100 ="
        },
        {
          "id": "i2",
          "text": "item_count >= 100:"
        },
        {
          "id": "i3",
          "text": "item_count >= 100;"
        },
        {
          "id": "i4",
          "text": "item_count >= 100"
        },
        {
          "id": "i5",
          "text": "item_count >= 50:"
        },
        {
          "id": "i6",
          "text": "item_count >= 50;"
        },
        {
          "id": "i7",
          "text": "item_count >= 50"
        },
        {
          "id": "i8",
          "text": "item_count >= 50 ="
        },
        {
          "id": "i9",
          "text": "item_count >= 50:"
        },
        {
          "id": "i10",
          "text": "discount = 0"
        },
        {
          "id": "i11",
          "text": "item_count >= 100:"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11"
          ]
        }
      ]
    },
    {
      "id": "py-549",
      "chapter": "structuri-control",
      "type": "drag_drop",
      "question": "Analyze the following code:\n\na = 15\nb = 8\nprint(a < b or a + b > 20 and not a - b == 7)\n\nUsing drag and drop, arrange the sequence of execution order for the print statement.\n\n 1\n 2\n 3\n 4",
      "explanation": "Python first tests a < b for the outer or. Since it is false, the right and expression is evaluated; its comparison succeeds and then its not expression is false. The completed and and then or results are false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "not a - b == 7"
        },
        {
          "id": "i2",
          "text": "a < b"
        },
        {
          "id": "i3",
          "text": "a + b > 20 and not a - b == 7"
        },
        {
          "id": "i4",
          "text": "a < b or a + b > 20 and not a - b == 7"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "1",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "2",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "3",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "4",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "py-550",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "You are writing code to find a specific product in a list of product IDs. You need to\nprint each ID as you search, and if you find the one you're looking for, the search\nshould stop.\n\nSelect the missing code examples to finish writing this code block.\n\nproduct_ids = [\"A101\", \"B202\", \"C303\", \"D404\", \"E505\"]\ntarget_id = \"D404\"\n\nfor product in product_ids:\n    print(product)\n    if product == target_id:\n        \n[1]\n\n    else:\n        \n[2]",
      "explanation": "break exits when the target product is found. continue skips to the next iteration on nonmatching products.",
      "dragItems": [
        {
          "id": "i1",
          "text": "raise"
        },
        {
          "id": "i2",
          "text": "return"
        },
        {
          "id": "i3",
          "text": "pass"
        },
        {
          "id": "i4",
          "text": "break"
        },
        {
          "id": "i5",
          "text": "from"
        },
        {
          "id": "i6",
          "text": "def"
        },
        {
          "id": "i7",
          "text": "continue"
        },
        {
          "id": "i8",
          "text": "import"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-551",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "A programmer is creating a log for a system that performs a task over a series of steps.\nThe program needs to print the step number and a status message for 3 steps, starting\nwith step 1.\n\nChoose the correct line of code to start this iteration and finish this code example.\n\n\n[1]\n :\n    print(f\"Step {step}: In progress...\")",
      "explanation": "range(1,4) generates steps 1, 2 and 3 because the stop bound is excluded.",
      "dragItems": [
        {
          "id": "i1",
          "text": "for step in range(1, 4)()"
        },
        {
          "id": "i2",
          "text": "for step in range(1, 4) = None"
        },
        {
          "id": "i3",
          "text": "for step in range(1, 4)"
        },
        {
          "id": "i4",
          "text": "for step in range[1, 4]"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "py-552",
      "chapter": "functii",
      "type": "single",
      "question": "A programmer is writing a function that checks the validity of a password. The function\nneeds to check if the password contains a special character. If it does, no action\nshould be taken yet, as further checks are needed. The programmer wants to use a keyword\nto act as a temporary placeholder for future code. Which keyword should be added to the\nblank space to act as this placeholder?\n\nHere is the code example:\n\nif has_special_character:\n    __",
      "explanation": "pass supplies a no-op body without ending or skipping any enclosing loop.",
      "options": [
        "continue",
        "break",
        "pass",
        "end"
      ],
      "correct": 2
    },
    {
      "id": "py-553",
      "chapter": "functii",
      "type": "dropdown",
      "question": "Complete the code example to build a function that does the following:\n\n- Its name is `calculate_area`\n- The function takes a length and width and calculates the area\n- The new area is returned\n\n\n[1]\n \n[2]\n\n    area = length * width\n    \n[3]",
      "explanation": "The def statement declares the parameters and return passes the calculated area to the caller.",
      "dragItems": [
        {
          "id": "i1",
          "text": "def"
        },
        {
          "id": "i2",
          "text": "import"
        },
        {
          "id": "i3",
          "text": "from"
        },
        {
          "id": "i4",
          "text": "class"
        },
        {
          "id": "i5",
          "text": "calculate_area(length, width);"
        },
        {
          "id": "i6",
          "text": "calculate_area(length, width)"
        },
        {
          "id": "i7",
          "text": "calculate_area(length, width) ="
        },
        {
          "id": "i8",
          "text": "calculate_area(length, width):"
        },
        {
          "id": "i9",
          "text": "def"
        },
        {
          "id": "i10",
          "text": "calculate_area(length, width):"
        },
        {
          "id": "i11",
          "text": "return area"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11"
          ]
        }
      ]
    },
    {
      "id": "py-554",
      "chapter": "functii",
      "type": "single",
      "question": "Take a look at the following code example, used to check the status of a system based on\ntemperature and a given state:\n\ndef check_status(temp, state):\n    if state == \"warning\" and temp > 100:\n        return \"High Alert\"\n    elif state == \"normal\" and temp <= 100:\n        return \"OK\"\n    else:\n        return \"Unknown\"\n\nsystem_status = check_status(95, \"normal\")\nprint(\"System status is:\", system_status)\n\nWhat is the value of system_status?",
      "explanation": "state is normal and 95<=100, so the second branch returns OK.",
      "options": [
        "High Alert",
        "Unknown",
        "OK",
        "An error is raised"
      ],
      "correct": 2
    },
    {
      "id": "py-555",
      "chapter": "functii",
      "type": "single",
      "question": "Take a look at the following function:\n\ndef calculate_discount(price, discount_rate):\n    final_price = price * (1 - discount_rate)\n    return final_price\n\nWhich code example properly calls the function and returns a calculation, stored in a\nvariable called `final_price`?",
      "explanation": "Calling calculate_discount(100,0.10) returns 90.0, and assignment stores that return value in final_price.",
      "options": [
        "final_price = calculate_discount(100, 0.10)",
        "final_price(calculate_discount(100, 0.10))",
        "final_price = def calculate_discount(100, 0.10)",
        "final_price = call calculate_discount(100, 0.10)"
      ],
      "correct": 0
    },
    {
      "id": "py-556",
      "chapter": "functii",
      "type": "single",
      "question": "Which option shows the conventional TRIPLE-QUOTED form of a Python docstring? Place it as the first statement in the function body.",
      "explanation": "A triple-quoted literal as the first function statement is the conventional docstring syntax. Single-quoted literals can also be docstrings when positioned there, so the question specifies the conventional triple-quoted form.",
      "options": [
        "# This is a docstring",
        "// This is a docstring",
        "\"This is a docstring\"",
        "\"\"\"This is a docstring\"\"\""
      ],
      "correct": 3
    },
    {
      "id": "py-557",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "The backslash already continues the expression onto the next line. Select the arithmetic operator needed before 600.",
      "explanation": "The existing trailing backslash continues the statement. The next line needs + to add 600 to the previous sum.",
      "dragItems": [
        {
          "id": "i1",
          "text": "+"
        },
        {
          "id": "i2",
          "text": "-"
        },
        {
          "id": "i3",
          "text": "*"
        },
        {
          "id": "i4",
          "text": "/"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ],
      "code": "total = 100 + 200 + 300 + 400 + 500 \\\n    [1] 600"
    },
    {
      "id": "py-558",
      "chapter": "input-output",
      "type": "drag_drop",
      "question": "Drag the lines of code into the correct order to accomplish the following:\n\n• Open the `data.txt` file in a mode to where it can only be read\n• Read the contents of the entire file\n• Print the contents of the entire file\n\nNot every line of code will be used.\n\n Line 1\n Line 2\n Line 3",
      "explanation": "Open in r mode, call read to retrieve all contents, then print the returned text.",
      "dragItems": [
        {
          "id": "i1",
          "text": "file_content = data_file.read()"
        },
        {
          "id": "i2",
          "text": "data_file = open(\"data.txt\", \"w\")"
        },
        {
          "id": "i3",
          "text": "print(file_content)"
        },
        {
          "id": "i4",
          "text": "for line in data_file:"
        },
        {
          "id": "i5",
          "text": "data_file = open(\"data.txt\", \"r\")"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 1",
          "correctItemId": "i5"
        },
        {
          "id": "z2",
          "label": "Line 2",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Line 3",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "py-559",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "A developer is writing a unit test to verify that a value exists within a list. They\nneed to find the correct built-in module for the test, the method to check if the script\nis the main module being run, and the specific assertion method to check for\ncontainment.",
      "explanation": "TestCase supplies assertIn for membership checks. The __name__ == '__main__' guard invokes the runner when the script is executed directly.",
      "dragItems": [
        {
          "id": "i1",
          "text": "TestLoader"
        },
        {
          "id": "i2",
          "text": "TextTestRunner"
        },
        {
          "id": "i3",
          "text": "TestCase"
        },
        {
          "id": "i4",
          "text": "TestSuite"
        },
        {
          "id": "i5",
          "text": "assertTrue"
        },
        {
          "id": "i6",
          "text": "assertIn"
        },
        {
          "id": "i7",
          "text": "assertEqual"
        },
        {
          "id": "i8",
          "text": "assertIs"
        },
        {
          "id": "i9",
          "text": "__name__"
        },
        {
          "id": "i10",
          "text": "__main__"
        },
        {
          "id": "i11",
          "text": "__file__"
        },
        {
          "id": "i12",
          "text": "__doc__"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ],
      "code": "import unittest\nlist_of_tools = [\"hammer\", \"screwdriver\", \"wrench\"]\nclass Test_Tool_List(unittest.[1]):\n    def test_tools(self):\n        self.[2](\"wrench\", list_of_tools)\nif [3] == \"__main__\":\n    unittest.main()"
    },
    {
      "id": "py-560",
      "chapter": "module-librarii",
      "type": "dropdown",
      "question": "A programmer is creating a script to process user data. The script should check if a\nfolder named 'logs' already exists. If it doesn't, the program should create the folder.\nFill in the necessary code to tell Python to check for the folder and create it if\nneeded.\n\nimport os\n\nif not os.\n[1]\n('logs'):\n    os.\n[2]\n('logs')\n    print(\"Logs folder created.\")\nelse:\n    print(\"Logs folder already exists.\")",
      "explanation": "isdir checks for an existing directory, and mkdir creates it when missing. A production program should also handle races and conflicting files.",
      "dragItems": [
        {
          "id": "i1",
          "text": "path.isdir = None"
        },
        {
          "id": "i2",
          "text": "path.isdir"
        },
        {
          "id": "i3",
          "text": "path::isdir"
        },
        {
          "id": "i4",
          "text": "path.isdir()"
        },
        {
          "id": "i5",
          "text": "mkdir"
        },
        {
          "id": "i6",
          "text": "listdir"
        },
        {
          "id": "i7",
          "text": "remove"
        },
        {
          "id": "i8",
          "text": "rmdir"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-561",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Complete a working password-length validation loop.",
      "explanation": "Read an initial password, repeat input while it is too short, then print acceptance after the loop. Re-prompting inside the loop prevents an infinite loop.",
      "dragItems": [
        {
          "id": "i1",
          "text": "password = input(\"Enter a password: \")"
        },
        {
          "id": "i2",
          "text": "while len(password) < 8:"
        },
        {
          "id": "i3",
          "text": "password = input(\"At least 8 characters. Try again: \")"
        },
        {
          "id": "i4",
          "text": "print(\"Password accepted.\")"
        },
        {
          "id": "i5",
          "text": "while len(password) < 8;"
        },
        {
          "id": "i6",
          "text": "while len(password) < 8"
        },
        {
          "id": "i7",
          "text": "while len(password) < 8 ="
        },
        {
          "id": "i8",
          "text": "while len(password) < 8:"
        },
        {
          "id": "i9",
          "text": "password = input(\"At least 8 characters. Try again: \")"
        },
        {
          "id": "i10",
          "text": "print(\"Password accepted.\")"
        },
        {
          "id": "i11",
          "text": "password = input(\"Enter a password: \")"
        },
        {
          "id": "i12",
          "text": "while len(password) < 8:"
        },
        {
          "id": "i13",
          "text": "print(\"Password accepted.\")"
        },
        {
          "id": "i14",
          "text": "print[\"Password accepted.\"]"
        },
        {
          "id": "i15",
          "text": "print()"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i13",
          "optionIds": [
            "i13",
            "i14",
            "i15"
          ]
        }
      ],
      "code": "[1]\n[2]\n    [3]\n[4]"
    },
    {
      "id": "py-562",
      "chapter": "operatori-tipuri",
      "type": "dropdown",
      "question": "Using the dropdown arrow, add the symbol needed to get the item number and price to\nprint instead of {item_number} and {price}.\nThe following code example, as is, prints \"Your item number is {item_number} and the\nprice is {price}\" instead of the actual values.\n\nitem_number = 1024\nprice = 19.99\nprint(\n[1]\n \"Your item number is {item_number} and the price is {price}.\")",
      "explanation": "The f prefix makes braces interpolate the values of item_number and price.",
      "dragItems": [
        {
          "id": "i1",
          "text": "r"
        },
        {
          "id": "i2",
          "text": "b"
        },
        {
          "id": "i3",
          "text": "u"
        },
        {
          "id": "i4",
          "text": "f"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "py-563",
      "chapter": "input-output",
      "type": "multiple",
      "question": "Evaluate the following code that writes a message to an existing log file at the end of\neach day:\n\nwith open('daily_report.txt', 'a') as report_file:\n    report_file.write('End of day report.')\n\nWhich statements about the code are true? (Choose two)",
      "explanation": "The with statement closes the file automatically. Mode a appends and preserves existing content rather than truncating it.",
      "options": [
        "The `with` statement ensures the file is automatically closed.",
        "A `report_file.close()` statement is required for proper file management.",
        "The file's previous content is overwritten each time the code is executed.",
        "The new text is added to the end of the file, preserving its previous content."
      ],
      "correct": [
        0,
        3
      ]
    },
    {
      "id": "py-564",
      "chapter": "input-output",
      "type": "single",
      "question": "When a Python app is run from a command prompt with the command python my_app.py run,\nwhich part of the command does sys.argv[1] represent?",
      "explanation": "argv[0] is my_app.py and argv[1] is the first user argument, run.",
      "options": [
        "The file name",
        "The first argument, \"run\"",
        "The second argument",
        "The first function in the file"
      ],
      "correct": 1
    },
    {
      "id": "py-565",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "Take a look at the following code example:\n\nitemPrice = 100\ntaxRate = 0.08\nshipping = 5\ntotalCost = itemPrice + shipping * taxRate\n\nA user is complaining that the total cost is much lower than what is expected.\n\nChoose the line of code that needs to be adjusted and the adjusted code to make the code\ncalculate the total cost based on the tax rate being applied to the item price before\nshipping is added.",
      "explanation": "Apply 1+taxRate to itemPrice, then add the untaxed shipping charge: 100*1.08+5=113.",
      "options": [
        "totalCost = (itemPrice * (1 + taxRate)) + shipping",
        "totalCost = itemPrice * taxRate + shipping",
        "totalCost = itemPrice / taxRate + shipping",
        "totalCost = itemPrice + shipping + taxRate"
      ],
      "correct": 0
    },
    {
      "id": "py-566",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "Evaluate the following anatomy of a unit test, part of a larger block of code:\n\ndef test_value_equality(self):\n    list_a = [1, 2, 3]\n    list_b = [1, 2, 3]\n    # insert assert test here\n\nWhich statement will test to see if `list_a` and `list_b` have the same content?",
      "explanation": "assertEqual compares the contents of the lists. assertIs would require them to be the same object.",
      "options": [
        "self.assertIs(list_a, list_b)",
        "self.assertEqual(list_a, list_b)",
        "self.assertIn(list_a, list_b)",
        "self.assertTrue(list_a, list_b)"
      ],
      "correct": 1
    },
    {
      "id": "py-567",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "A developer is writing a script to read and process data from a file. They want to\nhandle potential errors gracefully, such as the file not existing. The script should\nprint a success message only if no error occurs, and a \"processing complete\" message\nregardless of whether an error occurred or not.\n\nUsing the dropdown arrows, fill in the missing keywords in the code to accomplish this.\n\n[1]\n\n    with open(\"data.txt\", \"r\") as file:\n        content = file.read()\n    print(\"File content processed successfully.\")\n\n\n[2]\n\n    print(\"Error: The file was not found.\")\n\n\n[3]\n\n    print(\"Processing complete.\")",
      "explanation": "The try block processes the file and prints success only after reading succeeds. The handler reports a missing file and finally reports completion in either case.",
      "dragItems": [
        {
          "id": "i1",
          "text": "try"
        },
        {
          "id": "i2",
          "text": "try ="
        },
        {
          "id": "i3",
          "text": "try:"
        },
        {
          "id": "i4",
          "text": "try;"
        },
        {
          "id": "i5",
          "text": "except FileNotFoundError ="
        },
        {
          "id": "i6",
          "text": "except FileNotFoundError:"
        },
        {
          "id": "i7",
          "text": "except FileNotFoundError;"
        },
        {
          "id": "i8",
          "text": "except FileNotFoundError"
        },
        {
          "id": "i9",
          "text": "finally:"
        },
        {
          "id": "i10",
          "text": "finally;"
        },
        {
          "id": "i11",
          "text": "finally"
        },
        {
          "id": "i12",
          "text": "finally ="
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "py-568",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "Take a look at the code example below.\nIn the missing code area, indicate the keyword or method necessary to throw an exception\nif a value is out of range. Also, indicate the missing keyword to show a block of code\nthat runs regardless of the outcome of the try portion of the error handling process.\n\ndef validate_range(value):\n    if value < 10 or value > 20:\n        \n[1]\n Exception(\"Value is out of the allowed range\")\n    return value\n\n    try:\n        result = validate_range(30)\n        print(f\"Result: {result}\")\n    except Exception as e:\n        print(f\"An error occurred: {e}\")\n    \n[2]\n :\n        print(\"Operation complete.\")",
      "explanation": "raise creates the failure when validation rejects a value. finally executes after the try/except path whether validation succeeded or failed.",
      "dragItems": [
        {
          "id": "i1",
          "text": "pass"
        },
        {
          "id": "i2",
          "text": "raise"
        },
        {
          "id": "i3",
          "text": "return"
        },
        {
          "id": "i4",
          "text": "break"
        },
        {
          "id": "i5",
          "text": "finally"
        },
        {
          "id": "i6",
          "text": "try"
        },
        {
          "id": "i7",
          "text": "except"
        },
        {
          "id": "i8",
          "text": "else"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-569",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "A shipping manager needs to calculate the number of boxes to send for an order with a\ntotal weight of 125.75 kg. They need three possible outcomes:\n- The nearest whole number of boxes up, represented by the boxes_up variable.\n- The nearest whole number of boxes down, represented by the boxes_down variable.\n- The integer portion of the number of boxes, represented by the boxes_int variable.\nUsing the dropdown lists, complete the code snippet needed to fulfill the shipping\nmanager's need.\n\n\n[1]\n\ntotal_weight = 125.75\n\nboxes_up = \n[2]\n (total_weight)\nboxes_down = \n[3]\n (total_weight)\nboxes_int = \n[4]\n (total_weight)\n\nprint(boxes_up)\nprint(boxes_down)\nprint(boxes_int)",
      "explanation": "ceil(125.75)=126, floor=125 and int=125. The last truncates rather than rounding.",
      "dragItems": [
        {
          "id": "i1",
          "text": "import math"
        },
        {
          "id": "i2",
          "text": "include math"
        },
        {
          "id": "i3",
          "text": "using math"
        },
        {
          "id": "i4",
          "text": "require math"
        },
        {
          "id": "i5",
          "text": "math::ceil"
        },
        {
          "id": "i6",
          "text": "math_ceil"
        },
        {
          "id": "i7",
          "text": "None"
        },
        {
          "id": "i8",
          "text": "math.ceil"
        },
        {
          "id": "i9",
          "text": "math_floor"
        },
        {
          "id": "i10",
          "text": "None"
        },
        {
          "id": "i11",
          "text": "math.floor"
        },
        {
          "id": "i12",
          "text": "math::floor"
        },
        {
          "id": "i13",
          "text": "bool"
        },
        {
          "id": "i14",
          "text": "int"
        },
        {
          "id": "i15",
          "text": "float"
        },
        {
          "id": "i16",
          "text": "str"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i14",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ]
    },
    {
      "id": "py-570",
      "chapter": "module-librarii",
      "type": "dropdown",
      "question": "A data analyst is running a report on customer demographics. The results should be as\nfollows:\n\n- `result1` should display a random age from a list of ages\n- `result2` should display the list of ages in a random order\n- `result3` should display three unique random ages from a list of ages\n\nUsing the dropdown arrows, fill in the code needed to generate the proper random data\nfor each variable.\n\n\n[1]\n\nages = [22, 35, 41, 28, 50, 64, 19]\nresult1 = random.\n[2]\n\nresult2 = random.\n[3]\n\nresult3 = random.\n[4]",
      "explanation": "choice selects one age, sample with the list length creates a shuffled copy, and sample of 3 selects three different list entries. shuffle would return None if assigned directly.",
      "dragItems": [
        {
          "id": "i1",
          "text": "include random"
        },
        {
          "id": "i2",
          "text": "using random"
        },
        {
          "id": "i3",
          "text": "require random"
        },
        {
          "id": "i4",
          "text": "import random"
        },
        {
          "id": "i5",
          "text": "choice()"
        },
        {
          "id": "i6",
          "text": "choice(\"ages\")"
        },
        {
          "id": "i7",
          "text": "choice(ages)"
        },
        {
          "id": "i8",
          "text": "choice[ages]"
        },
        {
          "id": "i9",
          "text": "sample(\"ages, len(ages)\")"
        },
        {
          "id": "i10",
          "text": "sample(ages, len(ages))"
        },
        {
          "id": "i11",
          "text": "sample[ages, len(ages)]"
        },
        {
          "id": "i12",
          "text": "sample()"
        },
        {
          "id": "i13",
          "text": "sample(ages, 3)"
        },
        {
          "id": "i14",
          "text": "sample[ages, 3]"
        },
        {
          "id": "i15",
          "text": "sample()"
        },
        {
          "id": "i16",
          "text": "sample(\"ages, 3\")"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i13",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ]
    },
    {
      "id": "py-571",
      "chapter": "module-librarii",
      "type": "drag_drop",
      "question": "A new Python developer is learning about built-in modules and the methods used in those\nmodules. Specifically, they need to know the modules used to perform common tasks like\ncreating directories, getting the current date and time, calculating a square root, and\npicking a random item from a list. Using drag and drop, match each method with the\nbuilt-in module used.\n\n mkdir()\n now()\n sqrt()\n choice()",
      "explanation": "os.mkdir creates directories, datetime.datetime.now obtains the current date/time, math.sqrt computes a square root, and random.choice selects an element.",
      "dragItems": [
        {
          "id": "i1",
          "text": "math"
        },
        {
          "id": "i2",
          "text": "random"
        },
        {
          "id": "i3",
          "text": "os"
        },
        {
          "id": "i4",
          "text": "datetime"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "mkdir()",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "now()",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "sqrt()",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "choice()",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "py-572",
      "chapter": "input-output",
      "type": "drag_drop",
      "question": "Use the snippets of code below, use the drag-and-drop method to build code that will do\nthe following:\n\n• Store the value of the golden ratio in a variable called `phi`\n• A user will enter a length for a rectangle\n• Use `phi` to calculate the width of a golden rectangle and store it in a variable\ncalled `width`\n• Print the result (the width), formatted to three decimal places.\n\n Line 1\n Line 2\n Line 3\n Line 4",
      "explanation": "Set phi before dividing by it, read length as a float, calculate width and format the output with three digits after the decimal point.",
      "dragItems": [
        {
          "id": "i1",
          "text": "width = length / phi"
        },
        {
          "id": "i2",
          "text": "phi = 1.618"
        },
        {
          "id": "i3",
          "text": "print(f\"The width is {width:.3f}\")"
        },
        {
          "id": "i4",
          "text": "length = float(input(\"Enter the length of the rectangle.\"))"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 1",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Line 2",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Line 3",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "Line 4",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "py-573",
      "chapter": "module-librarii",
      "type": "multiple",
      "question": "A developer is building a code block to log the current time of app activity.\nWhich two code snippets will replace the #current date and time comment with the correct\ndate and time?\n\nimport datetime\nlog_time = #current date and time\nprint(\"entry time: \", log_time)",
      "explanation": "datetime.datetime.now and today both return the current local datetime. Formatting/parsing functions need input values rather than generating the current datetime.",
      "options": [
        "datetime.datetime.now()",
        "datetime.datetime.today()",
        "datetime.datetime.strftime()",
        "datetime.datetime.strptime()"
      ],
      "correct": [
        0,
        1
      ]
    },
    {
      "id": "py-574",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Analyze the following code:\n\nx = 10\ny = 5\nz = 2\nx /= y\ny += z\nx %= z\n\nFor each statement regarding the values of these variables, indicate Yes if the\nstatement is true and No if the statement is false.",
      "explanation": "x becomes 2.0 after division and 0.0 after modulo 2. y becomes 7 and z remains 2; numeric equality considers 0.0 equal to 0.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "x == 0",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "y == 7",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "z == 2",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-575",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Evaluate the following code:\n\nx = 8\ny = 4\nz = 2\n\nUsing these variables, determine if each calculation is true. Indicate a Yes if it is\ntrue and a No if it is not.",
      "explanation": "The first expression is true because 4*2=8. The second fails because not(6>=6) is false. The third fails because 8**2 is not 16 and 4+8/2 is 8, not above 10.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "x < y or y * z == x",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "x * z > 15 and not (y + z >= 6)",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "x ** z == 16 or y + x / z > 10",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "py-576",
      "chapter": "structuri-date",
      "type": "drag_drop",
      "question": "You are writing a Python application that includes multiple operations on the same line\nof code. You need to determine the correct order of operations.\n\nMove the type of operation from the list on the left to the correct locations on the\nright, with the type of operation that will be performed first at the top and the type\nof operation that will be performed last at the bottom.\n\nOperation type performed first: \nOperation type performed second: \nOperation type performed third: \nOperation type performed fourth: \nOperation type performed fifth: \nOperation type performed last:",
      "explanation": "Arithmetic precedes the shared comparison/identity/membership level, then not, and, or. Assignment stores the fully evaluated result and is not itself an ordinary expression operator.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Arithmetic"
        },
        {
          "id": "i2",
          "text": "Comparisons / identity / membership (same precedence)"
        },
        {
          "id": "i3",
          "text": "Logical not"
        },
        {
          "id": "i4",
          "text": "Logical and"
        },
        {
          "id": "i5",
          "text": "Logical or"
        },
        {
          "id": "i6",
          "text": "Assignment statement"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "First",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "2",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "3",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "4",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "5",
          "correctItemId": "i5"
        },
        {
          "id": "z6",
          "label": "Last",
          "correctItemId": "i6"
        }
      ]
    },
    {
      "id": "py-577",
      "chapter": "structuri-date",
      "type": "drag_drop",
      "question": "You need to identify the data types of various expressions.\n\nMove the appropriate data types from the list to the correct type operations on the\nright.\nYou may use each data type once, more than once, or not at all.\n\ntype(100) → \ntype(3.14) → \ntype(\"Hello World\") → \ntype(1 > 0) →",
      "explanation": "100 is an integer, 3.14 is a float, quoted text is a string and 1>0 produces a Boolean.",
      "dragItems": [
        {
          "id": "i1",
          "text": "int"
        },
        {
          "id": "i2",
          "text": "float"
        },
        {
          "id": "i3",
          "text": "str"
        },
        {
          "id": "i4",
          "text": "bool"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "type(100) →",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "type(3.14) →",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "type(\"Hello World\") →",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "type(1 > 0) →",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "py-578",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "You need to test whether a variable is an instance of a specific data type.",
      "explanation": "The test class inherits TestCase, its discoverable method calls assertIsInstance with str, and the standard main guard starts the test runner.",
      "dragItems": [
        {
          "id": "i1",
          "text": "from"
        },
        {
          "id": "i2",
          "text": "def"
        },
        {
          "id": "i3",
          "text": "class"
        },
        {
          "id": "i4",
          "text": "import"
        },
        {
          "id": "i5",
          "text": "import"
        },
        {
          "id": "i6",
          "text": "unittest.TestCase"
        },
        {
          "id": "i7",
          "text": "test_string(self)"
        },
        {
          "id": "i8",
          "text": "str"
        },
        {
          "id": "i9",
          "text": "__name__"
        },
        {
          "id": "i10",
          "text": "test_string(\"self\")"
        },
        {
          "id": "i11",
          "text": "test_string(self)"
        },
        {
          "id": "i12",
          "text": "test_string[self]"
        },
        {
          "id": "i13",
          "text": "test_string()"
        },
        {
          "id": "i14",
          "text": "str"
        },
        {
          "id": "i15",
          "text": "input"
        },
        {
          "id": "i16",
          "text": "print"
        },
        {
          "id": "i17",
          "text": "eval"
        },
        {
          "id": "i18",
          "text": "__main__"
        },
        {
          "id": "i19",
          "text": "__file__"
        },
        {
          "id": "i20",
          "text": "__doc__"
        },
        {
          "id": "i21",
          "text": "__name__"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8",
            "i9"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i10",
            "i11",
            "i12",
            "i13"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i14",
          "optionIds": [
            "i14",
            "i15",
            "i16",
            "i17"
          ]
        },
        {
          "id": "z5",
          "label": "Blank [5]",
          "correctItemId": "i21",
          "optionIds": [
            "i18",
            "i19",
            "i20",
            "i21"
          ]
        }
      ],
      "code": "[1] unittest\nclass TestDataType([2]):\n    def [3]:\n        test_variable = \"hello world\"\n        self.assertIsInstance(test_variable, [4])\nif [5] == \"__main__\":\n    unittest.main()"
    },
    {
      "id": "py-579",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are creating a program that accepts user input, specifically a filename. The program\nmust properly handle the error if the file does not exist.\n\nwhile True:\n    \n[1]\n\n    filename = input(\"Please enter a filename: \")\n    with open(filename, 'r') as file:\n    print(\"File opened successfully.\")\n    break\n    \n[2]\n\n    print(\"File not found. Please try again...\")",
      "explanation": "Open may raise FileNotFoundError. Handling it within the loop allows another filename; break ends the loop after a successful open.",
      "dragItems": [
        {
          "id": "i1",
          "text": "try"
        },
        {
          "id": "i2",
          "text": "try ="
        },
        {
          "id": "i3",
          "text": "try:"
        },
        {
          "id": "i4",
          "text": "try;"
        },
        {
          "id": "i5",
          "text": "except FileNotFoundError ="
        },
        {
          "id": "i6",
          "text": "except FileNotFoundError:"
        },
        {
          "id": "i7",
          "text": "except FileNotFoundError;"
        },
        {
          "id": "i8",
          "text": "except FileNotFoundError"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-580",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "For each statement about try statements, select True or False.",
      "explanation": "try can have finally without except. else runs only if no exception escapes try, and finally runs regardless of success. A try/except may contain both else and finally.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A try block must be followed by at least one except block.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Code in the else block will execute if an exception is caught.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Code in the finally block is executed only if no exceptions occur.",
          "correctItemId": "no"
        },
        {
          "id": "z4",
          "label": "A try statement can have both an else and a finally block.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-581",
      "chapter": "functii",
      "type": "dropdown",
      "question": "You create the following Python function to log an event. Line numbers are included for\nreference only.\n\n01 # The log_event function records a system event\n02 # type is the event category\n03 # message is the event description\n04 # The function returns a log entry string\n05 def log_event(type, message):\n06     print(\"Event logged.\") # This prints a confirmation\n07     event_log = \"Event Type: \" + type # create a partial log entry\n08     event_log += \", Message: \" + message # append to the log entry\n09     return event_log\n\nFor each statement, select True or False.",
      "explanation": "Full-line comments are ignored as statements. Removing an inline # leaves plain text that is invalid Python. Quoted strings remain strings even when near comments.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Python will not check the syntax of lines 01 through 04.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The pound sign (#) is optional for line 06.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The string in line 07 is interpreted as a comment.",
          "correctItemId": "no"
        },
        {
          "id": "z4",
          "label": "Line 06 contains an inline comment.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-582",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Analyze each condition independently. For predictions of printed output, omit deliberately invalid line 08 and its body; the whole original script otherwise fails to parse.",
      "explanation": "With the deliberately invalid line 08 removed, independent if statements print Good and Perfect for 85. For 95 both Excellent and Good print. A single = in an if condition is invalid syntax.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The code will print \"Good\" and \"Perfect!\" for a score of 85.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "If the score is 95, the code will print only \"Excellent\".",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The `if` statements at lines 02, 04, and 06 are correctly structured.",
          "correctItemId": "yes"
        },
        {
          "id": "z4",
          "label": "The statement at line 08 is an invalid comparison.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-583",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Classify a nonnegative integer age as Child (under 13), Teen (13-17), or Adult (18+). Complete the code.",
      "explanation": "Assuming nonnegative integer ages and a child threshold of 13, descending categories cover children below 13, teens 13-17 and adults 18+.",
      "dragItems": [
        {
          "id": "i1",
          "text": "if age < 13"
        },
        {
          "id": "i2",
          "text": "if age < 13 ="
        },
        {
          "id": "i3",
          "text": "if age < 13:"
        },
        {
          "id": "i4",
          "text": "if age < 13;"
        },
        {
          "id": "i5",
          "text": "elif age < 18 ="
        },
        {
          "id": "i6",
          "text": "elif age < 18:"
        },
        {
          "id": "i7",
          "text": "elif age < 18;"
        },
        {
          "id": "i8",
          "text": "elif age < 18"
        },
        {
          "id": "i9",
          "text": "else:"
        },
        {
          "id": "i10",
          "text": "else;"
        },
        {
          "id": "i11",
          "text": "else"
        },
        {
          "id": "i12",
          "text": "else ="
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ],
      "code": "age = int(input(\"Age: \"))\n[1]\n    category = \"Child\"\n[2]\n    category = \"Teen\"\n[3]\n    category = \"Adult\""
    },
    {
      "id": "py-584",
      "chapter": "functii",
      "type": "dropdown",
      "question": "You are writing a function that calculates the total cost of an order.\n\nThe function has the following requirements:\n- The `tip_rate` defaults to 15% if no value is specified.\n- The `sales_tax` defaults to 8% if no value is specified.\n\nYou write the following code. Line numbers are included for reference only.\n\n01 def calculate_total(subtotal, tip_rate, sales_tax):\n02     total = subtotal * (1 + sales_tax) * (1 + tip_rate)\n03     return total\n04\n05 sales_tax = 0.09\n06 tip_rate = 0.18\n07 final_price = calculate_total(100)\n\nFor each statement, select True or False.",
      "explanation": "Defaults allow calculate_total(100) to use 15% tip and 8% tax. Without defaults the missing arguments raise TypeError. Reading a parameter does not modify an outer variable.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "To meet the requirements, you must change line 01 to: def calculate_total(subtotal, tip_rate = 0.15, sales_tax = 0.08).",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "If you do not change line 01 and the function is called with only one parameter, an error occurs.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Line 02 will modify the value of the variable `sales_tax` declared at line 05.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "py-585",
      "chapter": "structura-cod",
      "type": "single",
      "question": "A friend asks you to refactor and document the following Python code:\n\nnum1 = 5\nnum2 = 3\nnum3 = 2\nnum4 = 4\n\nanswer = num1 + num2 * num3 ** num3 - num4 // num3\n\nYou run the code.\n\nWhat is the result?",
      "explanation": "Exponentiation first gives 2**2=4, then 3*4=12 and 4//2=2. The assigned result is 5+12-2=15; the snippet does not print it.",
      "options": [
        "27",
        "37",
        "15",
        "An error is raised."
      ],
      "correct": 2
    },
    {
      "id": "py-586",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "The following function calculates the value of an expression that multiplies two\nnumbers. Line numbers are included for reference only.\n\n01 def calculate_product(a, b):\n02     return a * b\n03 factor1 = input(\"Enter the first factor: \")\n04 factor2 = input(\"Enter the second factor: \")\n05 result = calculate_product(factor1, factor2)\n06 print(\"The product is \" + str(result))\n\nFor each statement, select True or False.",
      "explanation": "input returns strings without error. Multiplying two strings raises TypeError inside the function, so the product is never printed.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The code will generate an error in line 03 or line 04.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "The code will generate a `TypeError` in line 02.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The code will correctly output the product of the two numbers to the console.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "py-587",
      "chapter": "input-output",
      "type": "single",
      "question": "A programmer is creating a script that asks for the user's name and then displays it on\nthe console. Which statement is the correct one to get the user's name?",
      "explanation": "input prompts for and returns the user's text, which is assigned to name. print does not collect input.",
      "options": [
        "name = get.user()",
        "name = input(\"Enter your name: \")",
        "name = get_name()",
        "name = print(\"Enter your name: \")"
      ],
      "correct": 1
    },
    {
      "id": "py-588",
      "chapter": "input-output",
      "type": "single",
      "question": "Review the following code:\nproduct = \"TV\"\nprice = 750\ndate = \"2025-10-01\"\nreport_template = \"The product {0} was sold on {2} for ${1}.\"\nprint(report_template.format(product, price, date))\n\nWhat is the output of the print statement?",
      "explanation": "Format indexes 0,2,1 insert TV, the date and 750 into their corresponding positions.",
      "options": [
        "The product TV was sold on 2025-10-01 for $750.",
        "The product 2025-10-01 was sold on TV for $750.",
        "The product TV was sold on 750 for $2025-10-01.",
        "The product 750 was sold on 2025-10-01 for $TV."
      ],
      "correct": 0
    },
    {
      "id": "py-589",
      "chapter": "input-output",
      "type": "single",
      "question": "The file app.py contains import sys followed by print(sys.argv[1]). What is printed by python app.py apple orange banana?",
      "explanation": "Assuming the shown code is saved as app.py, argv[1] is apple. The original mismatched filename is corrected in the question.",
      "options": [
        "banana",
        "apple",
        "app.py",
        "orange"
      ],
      "correct": 1
    },
    {
      "id": "py-590",
      "chapter": "functii",
      "type": "single",
      "question": "A developer is creating a Python script that calculates the area of a circle. They\nwant to add notes to explain the purpose of a function and its parameters. What is the\ncorrect way to add these notes?",
      "explanation": "# adds a Python single-line comment; the other shown comment delimiters are not valid Python comments.",
      "options": [
        "Place the notes after `/*` on any line.",
        "Use the `#` character to create a single-line comment.",
        "Place the notes within ``.",
        "Use the `//` character to create a single-line comment."
      ],
      "correct": 1
    },
    {
      "id": "py-591",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "A company needs help updating their file system.\nYou must create a simple file-manipulation program that performs the following actions:\n- Checks to see whether a folder exists.\n- If the folder exists, displays its contents.\nComplete the code by selecting the correct code segment from each drop-down list.",
      "explanation": "isdir tests for a directory and listdir returns its entries, which can then be printed by the loop.",
      "dragItems": [
        {
          "id": "i1",
          "text": "os_path.isdir(\"logs\")"
        },
        {
          "id": "i2",
          "text": "None"
        },
        {
          "id": "i3",
          "text": "os.path.isdir(\"logs\")"
        },
        {
          "id": "i4",
          "text": "os::path.isdir(\"logs\")"
        },
        {
          "id": "i5",
          "text": "None"
        },
        {
          "id": "i6",
          "text": "os.listdir(\"logs\")"
        },
        {
          "id": "i7",
          "text": "os::listdir(\"logs\")"
        },
        {
          "id": "i8",
          "text": "os_listdir(\"logs\")"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "import os\nif [1]:\n    for file in [2]:\n        print(file)"
    },
    {
      "id": "py-592",
      "chapter": "input-output",
      "type": "multiple",
      "question": "A company is creating a program that calculates a loan's final amount. You write the\nfollowing Python code. Line numbers are included for reference only.\n\n01\n02 loan = float(input(\"Enter loan amount: \"))\n03 return loan\n04\n05 interest = loan_amount * interest_rate\n06 return loan_amount + interest\n07 loan_value = get_loan_amount()\n08 rate = 0.05\n09 final_amount = calculate_final_amount(loan_value, rate)\n10 print(f\"Final loan amount: {final_amount}\")\n\nYou need to define the two required functions.\nWhich two code segments should you use for line 01 and line 04?\nEach correct answer presents part of the solution. (Choose 2.)",
      "explanation": "get_loan_amount takes no arguments. calculate_final_amount requires the exact loan_amount and interest_rate parameter names used in its body.",
      "options": [
        "01 def get_loan_amount():",
        "01 def get_loan_amount(amount):",
        "04 def calculate_final_amount(loan_amount, interest_rate):",
        "04 def calculate_final_amount(amount, rate):",
        "04 def calculate_final_amount(loan_amount):",
        "04 def calculate_final_amount():"
      ],
      "correct": [
        0,
        2
      ]
    },
    {
      "id": "py-593",
      "chapter": "functii",
      "type": "dropdown",
      "question": "For each statement about the following function, select True or False.\n\ndef calculate_bonus(base_salary=50000, years_of_service=1, performance_rating=1):\n    if years_of_service > 5:\n        base_salary += 500\n\n    if performance_rating > 3:\n        return base_salary + 1000\n\n    if base_salary > 60000:\n        pass\n\n    return base_salary",
      "explanation": "The default returns 50000. Ten years adds 500, while rating 4 adds 1000. The pass statement does not change control flow.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A function call of `calculate_bonus()` will result in a return value of 50000.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "A function call of `calculate_bonus(years_of_service=10)` will return a result of 50500.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "A function call of `calculate_bonus(performance_rating=4)` will return a result of 51000.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-594",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "You are building a Python program that calculates the sum of all odd numbers from 1 to 50.\nComplete the code by moving the appropriate code segments from the list on the left to\nthe correct locations on the right.",
      "explanation": "Initialize before the loop, include only odd values, and add each once. The odd numbers 1 through 49 sum to 625.",
      "dragItems": [
        {
          "id": "i1",
          "text": "total_sum = 0"
        },
        {
          "id": "i2",
          "text": "if num % 2 != 0:"
        },
        {
          "id": "i3",
          "text": "total_sum += num"
        },
        {
          "id": "i4",
          "text": "if num % 2 != 0"
        },
        {
          "id": "i5",
          "text": "if num % 2 != 0 ="
        },
        {
          "id": "i6",
          "text": "if num % 2 != 0:"
        },
        {
          "id": "i7",
          "text": "if num % 2 != 0;"
        },
        {
          "id": "i8",
          "text": "total_sum += num"
        },
        {
          "id": "i9",
          "text": "total_sum = 0"
        },
        {
          "id": "i10",
          "text": "if num % 2 != 0:"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i4",
            "i5",
            "i6",
            "i7"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i8",
          "optionIds": [
            "i8",
            "i9",
            "i10"
          ]
        }
      ],
      "code": "[1]\nfor num in range(1, 51):\n    [2]\n        [3]\nprint(total_sum)"
    },
    {
      "id": "py-595",
      "chapter": "input-output",
      "type": "multiple",
      "question": "You are creating a weather application that accepts input from the user and outputs the\ndata.\n\nYou write the following code to accept input:\n\ncity = input(\"Enter the city: \")\ntemp = float(input(\"Enter the temperature: \"))\n\nThe output must meet the following requirements:\n- The city name must be in a string.\n- The temperature must be a floating-point number formatted to one decimal place.\n- The output must be separated by commas.\n\nYou need to complete the code to meet the requirements.\n\nWhich two code segments could you use? Each correct answer presents a complete solution.\n(Choose 2.)",
      "explanation": "Both the f-string and format field :.1f guarantee one decimal place and a comma separator. Direct string/float concatenation fails; plain str(temp) does not guarantee exactly one decimal place.",
      "options": [
        "print(city + ', ' + temp)",
        "print(f\"{city}, {temp:.1f}\")",
        "print(\"{0}, {1:.1f}\".format(city, temp))",
        "print('\"' + city + '\"' + ', ' + str(temp))"
      ],
      "correct": [
        1,
        2
      ]
    },
    {
      "id": "py-596",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are writing a program that simulates a dice game. The program needs to randomly roll\na standard six-sided die and randomly select a winner from a list of players.\n\nComplete the code by selecting the correct code segment from each drop-down list.\n\nimport random\nplayers = [\"Alex\", \"Sarah\", \"Mike\", \"Emily\"]\nplay_again = \"yes\"\nwhile play_again.lower() == \"yes\":\n    dice_roll = random.\n[1]\n\n    winner = random.\n[2]\n\n    print(f\"The dice rolled a {dice_roll}.\")\n    print(f\"The winner of this round is {winner}!\")\n    play_again = input(\"Play again? (yes/no): \")",
      "explanation": "randint includes both 1 and 6 for a fair die, and choice selects one listed player.",
      "dragItems": [
        {
          "id": "i1",
          "text": "randint(1, 6)"
        },
        {
          "id": "i2",
          "text": "randint[1, 6]"
        },
        {
          "id": "i3",
          "text": "randint()"
        },
        {
          "id": "i4",
          "text": "randint(\"1, 6\")"
        },
        {
          "id": "i5",
          "text": "choice[players]"
        },
        {
          "id": "i6",
          "text": "choice()"
        },
        {
          "id": "i7",
          "text": "choice(\"players\")"
        },
        {
          "id": "i8",
          "text": "choice(players)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-597",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "A company needs help updating their file system. You must create a simple\nfile-manipulation program that performs the following actions:\n- Creates a file if it doesn't exist.\n- Writes new data to the file, overwriting any previous content.\n\nYou need to complete the code to meet the requirements.\n\nComplete the code by selecting the correct code segment from each drop-down list.\nimport os\nfile = \n[1]\n\nfile.\n[2]\n(\"New sales data.\")\nfile.close()",
      "explanation": "w creates a missing file or truncates an existing one. write stores the replacement text.",
      "dragItems": [
        {
          "id": "i1",
          "text": "open[\"sales.txt\", \"w\"]"
        },
        {
          "id": "i2",
          "text": "open()"
        },
        {
          "id": "i3",
          "text": "open(\"sales.txt, w\")"
        },
        {
          "id": "i4",
          "text": "open(\"sales.txt\", \"w\")"
        },
        {
          "id": "i5",
          "text": "read"
        },
        {
          "id": "i6",
          "text": "close"
        },
        {
          "id": "i7",
          "text": "write"
        },
        {
          "id": "i8",
          "text": "open"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-598",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Review the following code segment:\n\nf = open(\"report.txt\", \"a\")\nf.write(\"New data entry.\\n\")\nf.close()\n\nFor each statement about the code segment, select True or False.",
      "explanation": "Append mode creates a missing file, preserves existing text and releases the handle on close so other code can reopen it.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A file named report.txt is created if it does not exist.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The data in the file will be overwritten.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Other code can open the file after this code runs.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-599",
      "chapter": "structuri-date",
      "type": "drag_drop",
      "question": "You need to identify the results of performing various slicing operations on the\nfollowing sequence structures:\n\nproduct = \"PYT-H0N\"\nnums = [1, 2, 3, 4, 5, 6]\n\nMove the appropriate results from the list on the left to the correct slicing operations\non the right.\nYou may use each result once, more than once, or not at all.\n\nproduct[4:] \nnums[1:4] \nnums[::-1]",
      "explanation": "product[4:] begins with H. nums[1:4] includes indexes 1-3. A step of -1 reverses the whole list.",
      "dragItems": [
        {
          "id": "i1",
          "text": "\"H0N\""
        },
        {
          "id": "i2",
          "text": "\"PYT\""
        },
        {
          "id": "i3",
          "text": "[1, 2, 3]"
        },
        {
          "id": "i4",
          "text": "[2, 3, 4]"
        },
        {
          "id": "i5",
          "text": "[6, 5, 4, 3, 2, 1]"
        },
        {
          "id": "i6",
          "text": "[1, 2, 3, 4, 5]"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "product[4:]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "nums[1:4]",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "nums[::-1]",
          "correctItemId": "i5"
        }
      ]
    },
    {
      "id": "py-600",
      "chapter": "module-librarii",
      "type": "multiple",
      "question": "You are developing a weather application.\nYou need to write code that generates a random temperature that meets the following\nrequirements:\n- The number is an even integer.\n- The lowest number is 10.\n- The highest number is 30.\n\nWhich two code segments will meet the requirements? Each correct answer presents a\ncomplete solution. (Choose 2.)",
      "explanation": "randrange(10,31,2) includes even values through 30. randint(5,15)*2 does likewise. The other choices can generate odd values or exclude 30.",
      "options": [
        "from random import randrange print(randrange(10, 31, 2))",
        "from random import randint print(randint(5, 15) * 2)",
        "from random import randint print(randint(10, 30))",
        "from random import randrange print(randrange(10, 30, 2))"
      ],
      "correct": [
        0,
        1
      ]
    },
    {
      "id": "py-601",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You find errors while evaluating the following code. Line numbers are included for\nreference only.\n\n01 score = 0\n02 while score < 100\n03     score = int(input(\"Enter score: \"))\n04     if score > 50\n05         print(\"You're a winner!\")\n06     else:\n07         print(\"Better luck next time.\")\n\nYou need to correct the code at line 02 and line 04.\n\nEvaluate the code and answer the questions by selecting the correct option from each\ndrop-down list.\nWhich code segment should you use at line 02? \n[1]\n\nWhich code segment should you use at line 04? \n[2]",
      "explanation": "Both compound statement headers require colons. Their existing conditions implement the loop and winner test.",
      "dragItems": [
        {
          "id": "i1",
          "text": "while score < 100;"
        },
        {
          "id": "i2",
          "text": "while score < 100"
        },
        {
          "id": "i3",
          "text": "while score < 100 ="
        },
        {
          "id": "i4",
          "text": "while score < 100:"
        },
        {
          "id": "i5",
          "text": "if score > 50"
        },
        {
          "id": "i6",
          "text": "if score > 50 ="
        },
        {
          "id": "i7",
          "text": "if score > 50:"
        },
        {
          "id": "i8",
          "text": "if score > 50;"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-602",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "You develop a Python application for your company.\n\nYou need to complete the code so that the print statements are accurate.\n\nComplete the code by selecting the correct code segment from each drop-down list.\n\nx = 100\ny = 50\n\n[1]\n\n    print(\"x is greater than y\")\n\n[2]\n\n    print(\"x is less than or equal to y\")",
      "explanation": "The first branch handles x>y and the else covers all other comparisons, including equality.",
      "dragItems": [
        {
          "id": "i1",
          "text": "if x > y"
        },
        {
          "id": "i2",
          "text": "if x > y ="
        },
        {
          "id": "i3",
          "text": "if x > y:"
        },
        {
          "id": "i4",
          "text": "if x > y;"
        },
        {
          "id": "i5",
          "text": "else ="
        },
        {
          "id": "i6",
          "text": "else:"
        },
        {
          "id": "i7",
          "text": "else;"
        },
        {
          "id": "i8",
          "text": "else"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-603",
      "chapter": "functii",
      "type": "dropdown",
      "question": "You are creating a function to calculate a ticket price based on a person's age. The\nrules are as follows:\n• Under age 13 = $5\n• Age 13 to 17 = $10\n• Age 18 or older = $15\n\nComplete the code by selecting the correct code segment from each drop-down list.\n\ndef get_ticket_price(age):\n    rate = 0\n    \n[1]\n\n        rate = 5\n    \n[2]\n\n        rate = 10\n    \n[3]\n\n        rate = 15\n    return rate",
      "explanation": "The first condition charges 5 under age 13. Ages 13-17 reach the second branch and adults reach else.",
      "dragItems": [
        {
          "id": "i1",
          "text": "if age < 13 ="
        },
        {
          "id": "i2",
          "text": "if age < 13:"
        },
        {
          "id": "i3",
          "text": "if age < 13;"
        },
        {
          "id": "i4",
          "text": "if age < 13"
        },
        {
          "id": "i5",
          "text": "elif age < 18:"
        },
        {
          "id": "i6",
          "text": "elif age < 18;"
        },
        {
          "id": "i7",
          "text": "elif age < 18"
        },
        {
          "id": "i8",
          "text": "elif age < 18 ="
        },
        {
          "id": "i9",
          "text": "else;"
        },
        {
          "id": "i10",
          "text": "else"
        },
        {
          "id": "i11",
          "text": "else ="
        },
        {
          "id": "i12",
          "text": "else:"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "py-604",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are writing code to meet the following requirements:\n• Allow users to repeatedly enter numbers.\n• Sum the entered numbers until the user enters \"end\".\n• Output the final sum.\n\nComplete the code by selecting the correct option from each drop-down list.\n\ntotal = 0\nuser_input = \"0\"\n\n[1]\n user_input != \"end\":\n    total += int(user_input)\n    user_input = input(\"Enter a number or 'end' to finish: \")\nprint(total)",
      "explanation": "The sentinel-controlled while loop accumulates each numeric entry and stops before trying to convert end to int.",
      "dragItems": [
        {
          "id": "i1",
          "text": "while"
        },
        {
          "id": "i2",
          "text": "import"
        },
        {
          "id": "i3",
          "text": "from"
        },
        {
          "id": "i4",
          "text": "def"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "py-605",
      "chapter": "functii",
      "type": "dropdown",
      "question": "A coworker wrote a program that reversed the order of numbers in a list.\n\nYou need to write a Python function that outputs the numbers in the correct order.\nComplete the code by selecting the code segment from each drop-down list.\n\n# Function reverses numbers in a list.\n# returns new list in reversed order.\n\ndef reverse_list(backward_list):\n    forward_list = []\n    length = \n[1]\n\n    while length >= 0:\n        forward_list.append(\n[2]\n)\n        length = length - 1\n    return forward_list\n\nprint(reverse_list([5, 4, 3, 2, 1]))",
      "explanation": "Start at the last valid index and walk backward, appending each element to a new list.",
      "dragItems": [
        {
          "id": "i1",
          "text": "len[backward_list] - 1"
        },
        {
          "id": "i2",
          "text": "len(backward_list) - 1()"
        },
        {
          "id": "i3",
          "text": "len(backward_list) - 1 = None"
        },
        {
          "id": "i4",
          "text": "len(backward_list) - 1"
        },
        {
          "id": "i5",
          "text": "backward_list[length]()"
        },
        {
          "id": "i6",
          "text": "backward_list[length] = None"
        },
        {
          "id": "i7",
          "text": "backward_list[length]"
        },
        {
          "id": "i8",
          "text": "backward_list(length)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-606",
      "chapter": "functii",
      "type": "dropdown",
      "question": "A data analyst needs a way to find the number of times a specific value appears in a\nlist.\n\nComplete the code by selecting the correct code segment from each drop-down list.\n\n# Function accepts a list of data and a target value to search for.\n# Returns count of the number of times the target is found.\ndef count_occurrences(data_list, target):\n    count = 0\n    for \n[1]\n:\n        if \n[2]\n:\n            count += 1\n    return count\n\n# data_list is populated by some function. Code not shown.\ndata_list = [10, 20, 10, 30, 40, 10]\ntarget = 10\ntotal_count = count_occurrences(data_list, target)\nprint(\"The target was found: \", total_count, \" times.\")",
      "explanation": "Iterate every entry and increment only on equality. The given list contains three occurrences of 10.",
      "dragItems": [
        {
          "id": "i1",
          "text": "data_list in value"
        },
        {
          "id": "i2",
          "text": "value is data_list"
        },
        {
          "id": "i3",
          "text": "value in data_list"
        },
        {
          "id": "i4",
          "text": "value == data_list"
        },
        {
          "id": "i5",
          "text": "value == target = None"
        },
        {
          "id": "i6",
          "text": "value == target"
        },
        {
          "id": "i7",
          "text": "value === target"
        },
        {
          "id": "i8",
          "text": "value == target()"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-607",
      "chapter": "structuri-control",
      "type": "single",
      "question": "Review the following code segment:\n\ni = 10\ntotal = 0\nwhile (i > 0):\n    total += i\n    i -= 1\n    if i == 7:\n        break\n\nprint(total)\n\nWhat is the final value of the `total` variable?",
      "explanation": "The loop adds 10,9,8, then decrements i to 7 and breaks. Their sum is 27.",
      "options": [
        "27",
        "34",
        "30",
        "10"
      ],
      "correct": 0
    },
    {
      "id": "py-608",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are creating a Python program that will let a user guess a number from 1 to 10. The\nuser is allowed up to five guesses. If the user guesses the correct number, the program\nmust stop asking for guesses. Complete the code by moving the appropriate code segments\nfrom the list on the left to the correct locations on the right. You may use each code\nsegment once, more than once, or not at all.",
      "explanation": "The inclusive bound allows attempts 1-5. break exits after success; incrementing advances an unsuccessful attempt.",
      "dragItems": [
        {
          "id": "i1",
          "text": "while tries <= 5:"
        },
        {
          "id": "i2",
          "text": "while tries <= 5;"
        },
        {
          "id": "i3",
          "text": "while tries <= 5"
        },
        {
          "id": "i4",
          "text": "while tries <= 5 ="
        },
        {
          "id": "i5",
          "text": "raise"
        },
        {
          "id": "i6",
          "text": "return"
        },
        {
          "id": "i7",
          "text": "pass"
        },
        {
          "id": "i8",
          "text": "break"
        },
        {
          "id": "i9",
          "text": "tries += 1"
        },
        {
          "id": "i10",
          "text": "while tries <= 5:"
        },
        {
          "id": "i11",
          "text": "break"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11"
          ]
        }
      ],
      "code": "from random import randint\ntarget = randint(1, 10)\ntries = 1\n[1]\n    guess = int(input(\"Guess: \"))\n    if guess == target:\n        print(\"Correct\")\n        [2]\n    [3]"
    },
    {
      "id": "py-609",
      "chapter": "module-librarii",
      "type": "single",
      "question": "You write the following function to generate a random number. Line numbers are included\nfor reference only.\n\n01 def generate_number():\n02     number = randint(1, 100)\n03     return number\n\nWhen you run the program, you receive an error on line 02.\n\nWhat is causing the error?",
      "explanation": "The unqualified randint name must be imported with from random import randint. import random alone would require calling random.randint instead.",
      "options": [
        "The unqualified randint name was not imported; add from random import randint",
        "randint does not accept two parameters",
        "randint does not exist in Python",
        "The random library does not exist"
      ],
      "correct": 0
    },
    {
      "id": "py-610",
      "chapter": "input-output",
      "type": "single",
      "question": "You write the following code to determine a customer's discount based on their order\ntotal and their membership status:\n\norder_total = 120\nnew_customer = False\n\nif order_total > 100 and new_customer == True:\n    discount = 0.20\nelif order_total > 50 and new_customer == False:\n    discount = 0.10\nelse:\n    discount = 0.05\n\nfinal_price = order_total * (1 - discount)\nprint(final_price)\n\nWhat value will print?",
      "explanation": "The second branch applies a 10% discount because 120>50 and new_customer is False. The price is 120*0.9=108.0.",
      "options": [
        "114.0",
        "96.0",
        "108.0",
        "112.5"
      ],
      "correct": 2
    },
    {
      "id": "py-611",
      "chapter": "structuri-control",
      "type": "single",
      "question": "What will the following Python code segment output?\n\ncount = 0\nfor i in range(5):\n    if i % 2 == 0:\n        continue\n    count += 1\nprint(count)",
      "explanation": "continue skips even values 0,2,4. Only 1 and 3 increment count, so it prints 2.",
      "options": [
        "5",
        "2",
        "3",
        "A syntax error"
      ],
      "correct": 1
    },
    {
      "id": "py-612",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "For each statement about loop control statements in Python, select True or False.",
      "explanation": "break exits a loop; continue advances to its next iteration. pass does nothing and a while loop can be infinite.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The `break` statement only stops the current iteration and proceeds to the next one.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "The `continue` statement exits the entire loop structure completely.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The `pass` statement is used as a placeholder and performs no operation.",
          "correctItemId": "yes"
        },
        {
          "id": "z4",
          "label": "A `while` loop can run infinitely if its condition never becomes false.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-613",
      "chapter": "structuri-control",
      "type": "drag_drop",
      "question": "Analyze the following code segment that uses nested loops.\n\nfor i in range(2):\n    for j in ['a', 'b']:\n        print(i, j)\n\nMove the items from the left into the list on the right to show the correct console output, from top to bottom.\n\nFirst line of output: \nSecond line of output: \nThird line of output: \nFourth line of output:",
      "explanation": "The inner loop runs a then b for each outer value 0 and 1.",
      "dragItems": [
        {
          "id": "i1",
          "text": "0 a"
        },
        {
          "id": "i2",
          "text": "0 b"
        },
        {
          "id": "i3",
          "text": "1 a"
        },
        {
          "id": "i4",
          "text": "1 b"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "First line of output:",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Second line of output:",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Third line of output:",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Fourth line of output:",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "py-614",
      "chapter": "structuri-control",
      "type": "single",
      "question": "A developer wants to print the sum of all **even** numbers in a list. The code runs but produces the wrong output (it outputs 9). What is the logic error in the code?\n\nmy_list = [1, 2, 3, 4, 5, 6]\ntotal_sum = 0\nfor num in my_list:\n    if num % 2 == 1:\n        total_sum += num\nprint(total_sum)",
      "explanation": "The remainder test ==1 selects odd numbers. Change it to ==0 to sum the even values.",
      "options": [
        "The `for` loop syntax is incorrect.",
        "The `total_sum` variable was not initialized.",
        "The `if` condition is checking for odd numbers (`num % 2 == 1`) instead of even numbers.",
        "The `print()` statement is incorrectly indented inside the loop."
      ],
      "correct": 2
    },
    {
      "id": "py-615",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "You need to fix a code segment that is intended to find the largest number in a list. The code currently has a logic error and finds the smallest number instead.\n\nComplete the code by selecting the correct option from each drop-down list.\n\nnumbers = [10, 50, 20, 90, 40]\nmax_val = \n[1]\n\n\nfor num in numbers:\n    if num \n[2]\n max_val:\n        max_val = num\nprint(max_val)",
      "explanation": "Initialize with an actual element and replace it whenever a larger value is found; the result is 90.",
      "dragItems": [
        {
          "id": "i1",
          "text": "numbers[0] = None"
        },
        {
          "id": "i2",
          "text": "numbers[0]"
        },
        {
          "id": "i3",
          "text": "numbers(0)"
        },
        {
          "id": "i4",
          "text": "numbers[0]()"
        },
        {
          "id": "i5",
          "text": ">"
        },
        {
          "id": "i6",
          "text": "=="
        },
        {
          "id": "i7",
          "text": "!="
        },
        {
          "id": "i8",
          "text": ">="
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-616",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Analyze the following code segment, which is intended to calculate the sum of numbers from 0 to 4 (which should be 10).\n\nmy_sum = 0\nfor i in range(5):\n    my_sum =+ i\nprint(my_sum)\n\nFor each statement about this code, select True or False.",
      "explanation": "=+ assigns the unary-positive current value instead of adding to the old sum. It is valid syntax and ends at 4; print is outside the loop.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The code will fail with a `SyntaxError` because of `my_sum =+ i`.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "The code has a logic error and will incorrectly output `4` instead of `10`.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The `print(my_sum)` statement will execute 5 times.",
          "correctItemId": "no"
        },
        {
          "id": "z4",
          "label": "The operator `my_sum =+ i` is a valid Python assignment statement.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-617",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "Complete the code to accept decimal or integer-looking numbers and perform numeric addition. Use a conversion that accepts values such as 2.5; input strings must not be concatenated.",
      "explanation": "Convert both numeric input strings before addition. The revised requirement permits decimal values, for which float is appropriate.",
      "dragItems": [
        {
          "id": "i1",
          "text": "int"
        },
        {
          "id": "i2",
          "text": "str"
        },
        {
          "id": "i3",
          "text": "bool"
        },
        {
          "id": "i4",
          "text": "float"
        },
        {
          "id": "i5",
          "text": "str"
        },
        {
          "id": "i6",
          "text": "bool"
        },
        {
          "id": "i7",
          "text": "float"
        },
        {
          "id": "i8",
          "text": "int"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "first = input(\"First number: \")\nsecond = input(\"Second number: \")\nprint([1](first) + [2](second))"
    },
    {
      "id": "py-618",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "A user runs the following code and enters \"10\" at the first prompt and \"20\" at the second prompt. What will be printed to the console?\n\nx = input(\"Enter x: \")\ny = input(\"Enter y: \")\nresult = x + y\nprint(result)",
      "explanation": "input returns strings, so + concatenates '10' and '20' to '1020'.",
      "options": [
        "30",
        "1020",
        "A TypeError will occur.",
        "10 20"
      ],
      "correct": 1
    },
    {
      "id": "py-619",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Analyze the following code segment:\n\nx = 5\ny = \"2.5\"\nz = 3.0\n\nFor each statement, select True or False.",
      "explanation": "x is int, y is a string and z is float. Mixed numeric addition yields 8.0; str(5)+'2.5' yields '52.5'.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The expression `type(x) == int` will evaluate to True.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The expression `type(y) == float` will evaluate to True.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The code `x + z` will result in a float value of 8.0.",
          "correctItemId": "yes"
        },
        {
          "id": "z4",
          "label": "The code `str(x) + y` will result in the string \"52.5\".",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-620",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "What will the following Python code segment output?\n\ndef check_age(age):\n    if age < 18:\n        raise ValueError(\"Age must be 18 or older\")\n    return \"Allowed\"\n\ntry:\n    print(check_age(15))\nexcept ValueError as e:\n    print(e)",
      "explanation": "The function raises ValueError, which is caught and printed as its message without an uncaught traceback.",
      "options": [
        "Allowed",
        "Age must be 18 or older",
        "A full ValueError traceback message",
        "Nothing will be printed"
      ],
      "correct": 1
    },
    {
      "id": "py-621",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "For each statement about exception handling blocks, select True or False.",
      "explanation": "else runs after successful try completion; finally runs on either path. A try needs except or finally.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The `else` block executes only if an exception occurs in the `try` block.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "The `finally` block executes only if no exception occurs in the `try` block.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "A `try` block must be followed by at least one `except` block OR one `finally` block.",
          "correctItemId": "yes"
        },
        {
          "id": "z4",
          "label": "Code in the `else` block runs after the `try` block, but only if the `try` block completes successfully without an error.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-622",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You need to write code that ensures a file is *always* closed, even if a runtime error occurs while writing to it.\n\nComplete the code by selecting the correct option from each drop-down list.\n\nfile = None\n\n[1]\n:\n    file = open(\"data.txt\", \"w\")\n    file.write(\"Hello\")\n    # Simulate a write error\n    x = 10 / 0\n\n[2]\n:\n    print(\"An error occurred\")\n\n[3]\n:\n    if file:\n        file.close()",
      "explanation": "The handler catches the simulated division error. finally closes an opened handle even after failure; a with statement is an alternative.",
      "dragItems": [
        {
          "id": "i1",
          "text": "finally"
        },
        {
          "id": "i2",
          "text": "else"
        },
        {
          "id": "i3",
          "text": "try"
        },
        {
          "id": "i4",
          "text": "except"
        },
        {
          "id": "i5",
          "text": "except Exception"
        },
        {
          "id": "i6",
          "text": "finally"
        },
        {
          "id": "i7",
          "text": "try"
        },
        {
          "id": "i8",
          "text": "finally"
        },
        {
          "id": "i9",
          "text": "try"
        },
        {
          "id": "i10",
          "text": "except"
        },
        {
          "id": "i11",
          "text": "else"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i8",
          "optionIds": [
            "i8",
            "i9",
            "i10",
            "i11"
          ]
        }
      ]
    },
    {
      "id": "py-623",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "A developer writes the following code to convert a user's input to a floating-point number.\n\nuser_input = \"hello\"\nnumber = float(user_input)\nprint(number)\n\nWhich type of runtime error will this code segment produce?",
      "explanation": "float accepts strings but 'hello' is not a valid numeric representation, causing ValueError.",
      "options": [
        "SyntaxError",
        "TypeError",
        "ValueError",
        "NameError"
      ],
      "correct": 2
    },
    {
      "id": "py-624",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "You are writing a script that must get a valid age (an integer) from the user. The script should keep asking until a valid integer is entered.",
      "explanation": "Try conversion, break on success and catch ValueError to repeat after bad input.",
      "dragItems": [
        {
          "id": "i1",
          "text": "try:"
        },
        {
          "id": "i2",
          "text": "try;"
        },
        {
          "id": "i3",
          "text": "try"
        },
        {
          "id": "i4",
          "text": "try ="
        },
        {
          "id": "i5",
          "text": "raise"
        },
        {
          "id": "i6",
          "text": "return"
        },
        {
          "id": "i7",
          "text": "pass"
        },
        {
          "id": "i8",
          "text": "break"
        },
        {
          "id": "i9",
          "text": "except ValueError"
        },
        {
          "id": "i10",
          "text": "except ValueError ="
        },
        {
          "id": "i11",
          "text": "except ValueError:"
        },
        {
          "id": "i12",
          "text": "except ValueError;"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ],
      "code": "while True:\n    [1]\n        age = int(input(\"Enter your age: \"))\n        [2]\n    [3]\n        print(\"Invalid input. Please enter a number.\")"
    },
    {
      "id": "py-625",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "Analyze the following code segment designed for user input validation:\n\nwhile True:\n    try:\n        x = int(input(\"Enter a number: \"))\n        break\n    except ValueError:\n        print(\"Try again.\")\n    finally:\n        print(\"Input attempt complete.\")\n\nFor each statement, select True or False.",
      "explanation": "Bad input skips break and enters the handler. finally runs on both success and failure, including before a successful break exits.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "If the user enters \"abc\", the `break` statement will be executed.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "If the user enters \"123\", the `finally` block will execute before the loop terminates.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "If the user enters \"abc\", \"Try again.\" will be printed, followed by \"Input attempt complete.\"",
          "correctItemId": "yes"
        },
        {
          "id": "z4",
          "label": "This loop will continue to run until the user successfully enters a valid integer.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-626",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "You are writing a unit test and need to verify that the variable `my_var` contains an object of type `str` (string).\n\nWhich `unittest` assert method should you use?",
      "explanation": "assertIsInstance verifies that an object has the requested class/type or an appropriate subclass.",
      "options": [
        "self.assertEqual(my_var, str)",
        "self.assertIs(my_var, str)",
        "self.assertIsInstance(my_var, str)",
        "self.assertTrue(my_var, str)"
      ],
      "correct": 2
    },
    {
      "id": "py-627",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "You are writing unit tests for a new Python application using the `unittest` module.\n\nFor each statement about the `unittest` framework, select True or False.",
      "explanation": "Ordinary instance test methods receive the instance (conventionally self), discovery uses the test prefix, the base class is TestCase and assertEqual compares values.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Ordinary instance test methods take the test instance as their first parameter, conventionally called self.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "By default, discovered test method names start with test.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "A test class inherits from unittest.Test rather than unittest.TestCase.",
          "correctItemId": "no"
        },
        {
          "id": "z4",
          "label": "assertEqual compares values.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-628",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "You need to complete a unit test for a function `add_numbers(x, y)` that should return the sum of two numbers.",
      "explanation": "Inherit TestCase and call self.assertEqual to verify add_numbers(5,10) returns 15.",
      "dragItems": [
        {
          "id": "i1",
          "text": "unittest.TestCase"
        },
        {
          "id": "i2",
          "text": "self"
        },
        {
          "id": "i3",
          "text": "assertEqual"
        },
        {
          "id": "i4",
          "text": "this"
        },
        {
          "id": "i5",
          "text": "super"
        },
        {
          "id": "i6",
          "text": "window"
        },
        {
          "id": "i7",
          "text": "self"
        },
        {
          "id": "i8",
          "text": "assertIn"
        },
        {
          "id": "i9",
          "text": "assertTrue"
        },
        {
          "id": "i10",
          "text": "assertEqual"
        },
        {
          "id": "i11",
          "text": "assertIs"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i4",
            "i5",
            "i6",
            "i7"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i8",
            "i9",
            "i10",
            "i11"
          ]
        }
      ],
      "code": "import unittest\nclass TestAddition([1]):\n    def test_positive_numbers(self):\n        result = add_numbers(5, 10)\n        [2].[3](result, 15)\nif __name__ == \"__main__\":\n    unittest.main()"
    },
    {
      "id": "py-629",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "Analyze the following code:\n\na = [1, 2, 3]\nb = [1, 2, 3]\nc = a\n\nWhich of the following `unittest` assertions will *fail*?",
      "explanation": "a and b have equal contents but are separate list objects. c references a, so assertIs(a,c) succeeds.",
      "options": [
        "self.assertEqual(a, b)",
        "self.assertIs(a, c)",
        "self.assertIs(a, b)",
        "self.assertEqual(a, c)"
      ],
      "correct": 2
    },
    {
      "id": "py-630",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "Analyze the following code:\n\nmy_list = [\"apple\", \"banana\", \"cherry\"]\nmy_var = True\n\nFor each statement about `unittest` assertions, select True or False.",
      "explanation": "True and nonempty strings are truthy. grape is absent while apple is present in the list.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The assertion `self.assertTrue(my_var)` will pass.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The assertion `self.assertIn(\"grape\", my_list)` will pass.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The assertion `self.assertIn(\"apple\", my_list)` will pass.",
          "correctItemId": "yes"
        },
        {
          "id": "z4",
          "label": "The assertion `self.assertTrue(\"banana\")` will pass.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-631",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "You are writing a test method to check a list and a boolean value.\n\nComplete the code by selecting the correct assert method from each drop-down list.\n\ndef test_values(self):\n    fruits = [\"apple\", \"orange\"]\n    is_ready = True\n\n    # Test that \"orange\" is in the list\n    self.\n[1]\n( \"orange\", fruits)\n\n    # Test that is_ready is True\n    self.\n[2]\n(is_ready)",
      "explanation": "assertIn checks membership and assertTrue checks truthiness.",
      "dragItems": [
        {
          "id": "i1",
          "text": "assertTrue"
        },
        {
          "id": "i2",
          "text": "assertIn"
        },
        {
          "id": "i3",
          "text": "assertEqual"
        },
        {
          "id": "i4",
          "text": "assertIs"
        },
        {
          "id": "i5",
          "text": "assertTrue"
        },
        {
          "id": "i6",
          "text": "assertEqual"
        },
        {
          "id": "i7",
          "text": "assertIs"
        },
        {
          "id": "i8",
          "text": "assertIn"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-632",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "A developer runs the following code but the program does not start and the interpreter highlights the `print` statement.\n\nx = 10\nif x > 5\n    print(\"x is greater than 5\")\n\nWhat type of error is this?",
      "explanation": "The if header lacks its required colon, preventing the script from parsing.",
      "options": [
        "SyntaxError",
        "LogicError",
        "RuntimeError",
        "TypeError"
      ],
      "correct": 0
    },
    {
      "id": "py-633",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "For each description of an error, select True or False.",
      "explanation": "Invalid grammar is a syntax error; wrong results are logic errors. An exception such as division by zero occurs at runtime; a missing colon is not a logic error.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A `SyntaxError` occurs when the code is grammatically incorrect, and it will not run at all.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "A `LogicError` occurs when the code runs successfully but produces an incorrect or unexpected result.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "A `RuntimeError` (like `ZeroDivisionError`) occurs while the program is running, typically when an operation fails.",
          "correctItemId": "yes"
        },
        {
          "id": "z4",
          "label": "Forgetting a colon (`:`) at the end of a `def` statement is an example of a `LogicError`.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "py-634",
      "chapter": "structuri-date",
      "type": "dropdown",
      "question": "The following code is intended to print the last element of a list. The code runs, but then crashes.\n\nComplete the statements about this code by selecting the correct option from each drop-down list.\n\nmy_list = [10, 20, 30]\nindex = 3\nprint(my_list[index])\n\nThis code fails with a(n) \n[1]\n error.\nThis type of error is classified as a \n[2]\n error.",
      "explanation": "A three-element list has indexes 0-2. Accessing index 3 raises IndexError during execution.",
      "dragItems": [
        {
          "id": "i1",
          "text": "ValueError"
        },
        {
          "id": "i2",
          "text": "KeyError"
        },
        {
          "id": "i3",
          "text": "IndexError"
        },
        {
          "id": "i4",
          "text": "TypeError"
        },
        {
          "id": "i5",
          "text": "Compilation"
        },
        {
          "id": "i6",
          "text": "Runtime"
        },
        {
          "id": "i7",
          "text": "Syntax"
        },
        {
          "id": "i8",
          "text": "Logical"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-635",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "What will be the output of the following code segment?\n\ntry:\n    x = 10 / 0\n    print(\"Success\")\nexcept TypeError:\n    print(\"Caught a TypeError\")\nexcept:\n    print(\"Caught a general error\")",
      "explanation": "ZeroDivisionError does not match TypeError, so the final bare handler catches it and prints the general-error message.",
      "options": [
        "Success",
        "Caught a TypeError",
        "Caught a general error",
        "The program will crash with a ZeroDivisionError"
      ],
      "correct": 2
    },
    {
      "id": "py-636",
      "chapter": "structuri-date",
      "type": "dropdown",
      "question": "You need to fix the following code so that it prints \"Variable not found\" instead of crashing when a variable is not defined.\n\nComplete the code by selecting the correct option from each drop-down list.\n\n\n[1]\n:\n    print(my_undefined_variable)\n\n[2]\n:\n    print(\"Variable not found\")",
      "explanation": "Accessing an undefined name raises NameError, handled by the matching except clause.",
      "dragItems": [
        {
          "id": "i1",
          "text": "try"
        },
        {
          "id": "i2",
          "text": "except"
        },
        {
          "id": "i3",
          "text": "finally"
        },
        {
          "id": "i4",
          "text": "else"
        },
        {
          "id": "i5",
          "text": "except TypeError"
        },
        {
          "id": "i6",
          "text": "except ValueError"
        },
        {
          "id": "i7",
          "text": "except KeyError"
        },
        {
          "id": "i8",
          "text": "except NameError"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-637",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "Analyze the following code block:\n\ntry:\n    result = int(\"abc\")\nexcept Exception as e:\n    print(\"Caught general exception\")\nexcept ValueError as v:\n    print(\"Caught value error\")\n\nFor each statement, select True or False.",
      "explanation": "ValueError subclasses Exception, so the first handler catches it. More-specific handlers should precede broad handlers; this order is valid but makes the later handler unreachable.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The code will print \"Caught value error\".",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "The code will print \"Caught general exception\".",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The `except Exception` block should always be placed *after* more specific blocks like `except ValueError`.",
          "correctItemId": "yes"
        },
        {
          "id": "z4",
          "label": "This code will fail with a `SyntaxError` because the `except Exception` block is first.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "py-638",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "What will be the output of the following code segment?\n\ntry:\n    print(\"1\")\n    x = 10 / 2\n    print(\"2\")\nexcept ZeroDivisionError:\n    print(\"3\")\nelse:\n    print(\"4\")\nfinally:\n    print(\"5\")",
      "explanation": "The division succeeds: try prints 1 and 2, else prints 4 and finally prints 5, each on its own line.",
      "options": [
        "1, 2, 4, 5",
        "1, 2, 3, 5",
        "1, 3, 5",
        "1, 2, 5"
      ],
      "correct": 0
    },
    {
      "id": "py-639",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "What will be the output of the following code segment?\n\ntry:\n    print(\"A\")\n    x = 10 / 0\n    print(\"B\")\nexcept ZeroDivisionError:\n    print(\"C\")\nelse:\n    print(\"D\")\nfinally:\n    print(\"E\")",
      "explanation": "A prints before the failure, C prints in the handler and E in finally. B and else's D are skipped.",
      "options": [
        "A, B, D, E",
        "A, B, C, E",
        "A, C, E",
        "A, C, D, E"
      ],
      "correct": 2
    },
    {
      "id": "py-640",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "You need to write a program that divides two numbers. The program must:\n1. Try to perform the division.\n2. If the division is successful (no error), print the result.\n3. No matter what happens, print \"Execution complete.\"",
      "explanation": "An except clause makes else legal; else prints a successful result and finally always prints completion.",
      "dragItems": [
        {
          "id": "i1",
          "text": "except Exception:"
        },
        {
          "id": "i2",
          "text": "except Exception;"
        },
        {
          "id": "i3",
          "text": "except Exception"
        },
        {
          "id": "i4",
          "text": "except Exception ="
        },
        {
          "id": "i5",
          "text": "else;"
        },
        {
          "id": "i6",
          "text": "else"
        },
        {
          "id": "i7",
          "text": "else ="
        },
        {
          "id": "i8",
          "text": "else:"
        },
        {
          "id": "i9",
          "text": "finally"
        },
        {
          "id": "i10",
          "text": "finally ="
        },
        {
          "id": "i11",
          "text": "finally:"
        },
        {
          "id": "i12",
          "text": "finally;"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ],
      "code": "try:\n    result = 100 / 10\n[1]\n    print(\"Division failed\")\n[2]\n    print(result)\n[3]\n    print(\"Execution complete.\")"
    },
    {
      "id": "py-641",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "A developer wants to log an error and then let the original error stop the program. What will be the output of the following code?\n\ntry:\n    x = 10 / 0\nexcept ZeroDivisionError as e:\n    print(\"Error logged:\", e)\n    raise\n\nprint(\"Program continues\")",
      "explanation": "The handler logs the message and bare raise rethrows the original exception. The final Program continues line is not reached.",
      "options": [
        "Error logged: division by zero",
        "Error logged: division by zero (followed by) Program continues",
        "Error logged: division by zero (followed by) a ZeroDivisionError traceback",
        "Program continues"
      ],
      "correct": 2
    },
    {
      "id": "py-642",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "You are writing a function that sells tickets, but only if the user is 18 or older. If the age is less than 18, the function must raise a `ValueError`.\n\nComplete the function by selecting the correct option from each drop-down list.\n\ndef sell_ticket(age):\n    if age < 18:\n        \n[1]\n \n[2]\n(\"Must be 18 or older\")\n    else:\n        print(\"Ticket sold\")",
      "explanation": "raise ValueError creates the specified exception for ages below 18.",
      "dragItems": [
        {
          "id": "i1",
          "text": "break"
        },
        {
          "id": "i2",
          "text": "pass"
        },
        {
          "id": "i3",
          "text": "raise"
        },
        {
          "id": "i4",
          "text": "return"
        },
        {
          "id": "i5",
          "text": "KeyError"
        },
        {
          "id": "i6",
          "text": "ValueError"
        },
        {
          "id": "i7",
          "text": "IndexError"
        },
        {
          "id": "i8",
          "text": "TypeError"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-643",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "Analyze the following code which defines and uses a custom exception:\n\nclass NegativeNumberError(Exception):\n    pass\n\ndef check_positive(num):\n    if num < 0:\n        raise NegativeNumberError(\"Number cannot be negative\")\n\nFor each statement, select True or False.",
      "explanation": "Normal custom application exceptions subclass Exception. An uncaught negative-number error stops execution, pass is a valid empty body, and the custom class can be caught.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The `NegativeNumberError` class must inherit from `Exception` (or a subclass) to work in a `try... except` block.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Running `check_positive(-5)` will cause the program to crash with a `NegativeNumberError`.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The `pass` keyword in the class definition indicates a `SyntaxError`.",
          "correctItemId": "no"
        },
        {
          "id": "z4",
          "label": "This custom exception can be caught using a standard `except NegativeNumberError:` block.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-644",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "You are running a unit test using the `assertTrue` method.\n\nWhich of the following assertions will *fail*?",
      "explanation": "Zero is falsy; the other listed nonempty/nonzero values are truthy.",
      "options": [
        "self.assertTrue(\"Hello\")",
        "self.assertTrue([1, 2, 3])",
        "self.assertTrue(1)",
        "self.assertTrue(0)"
      ],
      "correct": 3
    },
    {
      "id": "py-645",
      "chapter": "functii",
      "type": "dropdown",
      "question": "You are writing a unit test for a function that returns a list of strings. You need to verify the data type of the return value and check for a specific item.\n\nComplete the test method by selecting the correct option from each drop-down list.\n\ndef test_function_output(self):\n    result = get_data() # Assume this returns [\"cat\", \"dog\", \"fish\"]\n\n    # 1. Check if 'result' is a list\n    self.\n[1]\n(result, list)\n\n    # 2. Check if \"dog\" is in the 'result' list\n    self.\n[2]\n( \"dog\", result)",
      "explanation": "The first assertion verifies the list type; the second verifies membership of dog.",
      "dragItems": [
        {
          "id": "i1",
          "text": "assertEqual"
        },
        {
          "id": "i2",
          "text": "assertIs"
        },
        {
          "id": "i3",
          "text": "assertIn"
        },
        {
          "id": "i4",
          "text": "assertIsInstance"
        },
        {
          "id": "i5",
          "text": "assertIs"
        },
        {
          "id": "i6",
          "text": "assertTrue"
        },
        {
          "id": "i7",
          "text": "assertIn"
        },
        {
          "id": "i8",
          "text": "assertEqual"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-646",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "Analyze the following `unittest` code:\n\ndef test_data(self):\n    my_string = \"Hello World\"\n    my_list = [10, 20, 30]\n\nFor each assertion, select True if it will PASS or False if it will FAIL.",
      "explanation": "List equality succeeds, substring checks are case-sensitive, 20 belongs to the list and the full string is not equal to Hello.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "self.assertEqual(my_list, [10, 20, 30])",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "self.assertIn(\"hello\", my_string)",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "self.assertIn(20, my_list)",
          "correctItemId": "yes"
        },
        {
          "id": "z4",
          "label": "self.assertEqual(my_string, \"Hello\")",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "py-647",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "Complete the guard that runs unittest.main() when the file is executed directly. The guard is not required merely for discovery.",
      "explanation": "The main guard allows direct execution without starting tests merely on import. Test discovery itself does not require this guard.",
      "dragItems": [
        {
          "id": "i1",
          "text": "__doc__"
        },
        {
          "id": "i2",
          "text": "__name__"
        },
        {
          "id": "i3",
          "text": "__main__"
        },
        {
          "id": "i4",
          "text": "__file__"
        },
        {
          "id": "i5",
          "text": "__main__"
        },
        {
          "id": "i6",
          "text": "__name__"
        },
        {
          "id": "i7",
          "text": "__file__"
        },
        {
          "id": "i8",
          "text": "__doc__"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "if [1] == \"[2]\":\n    unittest.main()"
    },
    {
      "id": "py-648",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "Which of the following is the **correct** signature for a test method within a class that inherits from `unittest.TestCase`?",
      "explanation": "A normal instance test method takes self only; the runner supplies no additional required arguments.",
      "options": [
        "def test_add(x, y):",
        "def test_add(self, x, y):",
        "def test_add():",
        "def test_add(self):"
      ],
      "correct": 3
    },
    {
      "id": "py-649",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "For each statement about setting up and running unit tests in Python, select True or False.",
      "explanation": "TestCase can be inherited indirectly. unittest is standard-library. A test module may be explicitly run under any valid filename, while default discover searches test*.py. main runs tests in its target module.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Test classes must inherit DIRECTLY from TestCase; indirect subclasses are not supported.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "unittest must be installed with pip.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "A test file can have any valid module filename when explicitly selected, although default discover searches test*.py.",
          "correctItemId": "yes"
        },
        {
          "id": "z4",
          "label": "unittest.main() loads and runs tests from its target module.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-650",
      "chapter": "gestionare-erori",
      "type": "single",
      "question": "What will be the output of the following code if the user enters the letter 'a' at the input prompt?\n\ntry:\n    num = int(input(\"Enter a number: \"))\n    result = 10 / num\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero.\")\nexcept ValueError:\n    print(\"Invalid input.\")\nelse:\n    print(\"Result:\", result)",
      "explanation": "int('a') raises ValueError, so the matching handler prints Invalid input and else is skipped.",
      "options": [
        "Cannot divide by zero.",
        "Invalid input.",
        "Result: 10",
        "The program will crash with an unhandled error."
      ],
      "correct": 1
    },
    {
      "id": "py-651",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "You need to ensure that the code below does not crash if the variable `y` is zero. Instead, it should print \"Division skipped\".",
      "explanation": "The division error is handled, so Division skipped prints and execution continues to Done.",
      "dragItems": [
        {
          "id": "i1",
          "text": "else"
        },
        {
          "id": "i2",
          "text": "try"
        },
        {
          "id": "i3",
          "text": "except"
        },
        {
          "id": "i4",
          "text": "finally"
        },
        {
          "id": "i5",
          "text": "except ZeroDivisionError"
        },
        {
          "id": "i6",
          "text": "except ValueError"
        },
        {
          "id": "i7",
          "text": "except TypeError"
        },
        {
          "id": "i8",
          "text": "except NameError"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "x = 10\ny = 0\n[1]:\n    result = x / y\n[2]:\n    print(\"Division skipped\")\nprint(\"Done\")"
    },
    {
      "id": "py-652",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "For each statement about common Python errors, select True or False.",
      "explanation": "Missing keys raise KeyError, out-of-range indexes raise IndexError and incompatible operations raise TypeError. These are runtime exceptions, not necessarily the specific RuntimeError class.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Accessing a dictionary key that does not exist (e.g., `my_dict['new_key']`) results in a `KeyError`.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Attempting to access an index outside the range of a list (e.g., `my_list[100]`) results in a `TypeError`.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "A `TypeError` occurs when you attempt an operation on incompatible data types, like adding a string and an integer.",
          "correctItemId": "yes"
        },
        {
          "id": "z4",
          "label": "The `KeyError` and `IndexError` are both classified as Runtime Errors.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-653",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is developing a quality control script for a winery in Cricova, Republic of Moldova.\nThe program needs to classify wine batches into quality categories (`category`) based on their laboratory score (`wine_score`).\nThe classification rules are strictly defined as follows:\n\nScore Range Category\n90 through 100 A (Tezaur)\n80 through 89 B (Rezerva)\n70 through 79 C (Vinoteca)\n65 through 69 D (Standard)\n0 through 64 F (Industrial)\n\nFor example, if Vladislav enters a score of 92, the output must be `\"Category: A\"`.\nIf he enters an 85, the output must be `\"Category: B\"`.\nComplete the code by selecting the correct decision structure segments from each drop-down list.\n\n# Cricova Wine Quality Classifier\nwine_score = int(input(\"Enter the wine quality score: \"))\n\n\n[1]\n # dropdown 1\n    category = 'A'\n\n[2]\n # dropdown 2\n    category = 'B'\n\n[3]\n # dropdown 3\n    category = 'C'\n\n[4]\n # dropdown 4\n    category = 'D'\nelse:\n    category = 'F'",
      "explanation": "The first matching descending threshold selects the correct quality category; else covers 0-64. Input is assumed valid from 0-100.",
      "dragItems": [
        {
          "id": "i1",
          "text": "if wine_score >= 90;"
        },
        {
          "id": "i2",
          "text": "if wine_score >= 90"
        },
        {
          "id": "i3",
          "text": "if wine_score >= 90 ="
        },
        {
          "id": "i4",
          "text": "if wine_score >= 90:"
        },
        {
          "id": "i5",
          "text": "elif wine_score >= 80"
        },
        {
          "id": "i6",
          "text": "elif wine_score >= 80 ="
        },
        {
          "id": "i7",
          "text": "elif wine_score >= 80:"
        },
        {
          "id": "i8",
          "text": "elif wine_score >= 80;"
        },
        {
          "id": "i9",
          "text": "elif wine_score >= 70 ="
        },
        {
          "id": "i10",
          "text": "elif wine_score >= 70:"
        },
        {
          "id": "i11",
          "text": "elif wine_score >= 70;"
        },
        {
          "id": "i12",
          "text": "elif wine_score >= 70"
        },
        {
          "id": "i13",
          "text": "elif wine_score >= 65:"
        },
        {
          "id": "i14",
          "text": "elif wine_score >= 65;"
        },
        {
          "id": "i15",
          "text": "elif wine_score >= 65"
        },
        {
          "id": "i16",
          "text": "elif wine_score >= 65 ="
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i13",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ]
    },
    {
      "id": "py-654",
      "chapter": "input-output",
      "type": "single",
      "question": "Voitcovschi Vladislav is developing a Python script for the \"Start-up City Cahul\" registration kiosk.\n\nHe needs to accept the name of a participant's startup from the console and display it on the screen.\nHe starts with the following code. Line numbers are included for reference only:\n\n01 print(\"Enter your startup name:\")\n02 __\n03 print(startup_name)\n\nWhich code should Vladislav write at line 02 to correctly capture the input?",
      "explanation": "Calling input() returns text, and assigning it stores the startup name.",
      "options": [
        "input(startup_name)",
        "startup_name = input",
        "startup_name = input()",
        "input(\"startup_name\")"
      ],
      "correct": 2
    },
    {
      "id": "py-655",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is writing a program to display the rotating menu specials for the \"Vatra Neamului\" restaurant in Chișinău.\nLine numbers are for reference only:\nComplete the code in lines 04, 05, and 15 by selecting the correct option from each drop-down list.\n\nIn line 04, retrieve the current date and time object.\nIn line 05, retrieve the full name of the weekday (e.g., \"Monday\").\nIn line 15, calculate the number of days left until the end of the week (Sunday).\n\n01 import datetime\n02 traditional_menu = (\"Zeama\", \"Mamaliga cu Branza\", \"Placinte cu Cartofi\")\n03 festive_menu = (\"Sarmale\", \"Rata la Cuptor\", \"Friptura de Miel\")\n04 \n[1]\n\n05 \n[2]\n\n06 print(\"Vatra Neamului - Daily Specials\")\n07 if day_name == \"Friday\" or day_name == \"Saturday\" or day_name == \"Sunday\":\n08     print(\"The festive weekend menu includes:\")\n09     for dish in festive_menu:\n10         print(dish)\n11 else:\n12     print(\"The traditional weekday menu includes:\")\n13     for dish in traditional_menu:\n14         print(dish)\n15 \n[3]\n\n16 print(f\"Specials rotation in {days_remaining} days\")",
      "explanation": "now obtains the datetime, %A produces the full weekday and 6-weekday counts remaining days until Sunday, excluding today.",
      "dragItems": [
        {
          "id": "i1",
          "text": "current_date = datetime.datetime.now()"
        },
        {
          "id": "i2",
          "text": "day_name = current_date.strftime(\"%A\")"
        },
        {
          "id": "i3",
          "text": "days_remaining = 6 - current_date.weekday()"
        },
        {
          "id": "i4",
          "text": "day_name = current_date.strftime(\"%A\")"
        },
        {
          "id": "i5",
          "text": "days_remaining = 6 - current_date.weekday()"
        },
        {
          "id": "i6",
          "text": "current_date = datetime.datetime.now()"
        },
        {
          "id": "i7",
          "text": "days_remaining = 6 - current_date.weekday()"
        },
        {
          "id": "i8",
          "text": "current_date = datetime.datetime.now()"
        },
        {
          "id": "i9",
          "text": "day_name = current_date.strftime(\"%A\")"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i4",
          "optionIds": [
            "i4",
            "i5",
            "i6"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i7",
          "optionIds": [
            "i7",
            "i8",
            "i9"
          ]
        }
      ]
    },
    {
      "id": "py-656",
      "chapter": "module-librarii",
      "type": "dropdown",
      "question": "For each statement about `datetime.strftime()` codes, select True or False.",
      "explanation": "%H is 24-hour, %a is abbreviated weekday, %M is minutes and %A is the full weekday. Month is %m.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The format code `%H` displays the hour using a 12-hour clock (e.g., 03 PM).",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "The format code `%a` displays the abbreviated weekday name (e.g., 'Mon', 'Fri').",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The format code `%M` displays the month number (e.g., 01 for January).",
          "correctItemId": "no"
        },
        {
          "id": "z4",
          "label": "The format code `%A` displays the full weekday name (e.g., 'Monday', 'Friday').",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-657",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav has been asked to debug a Python script for the National Bureau of Statistics in Moldova.\nThe script is intended to calculate the average monthly salary across different economic sectors in Chișinău, but the current output is incorrect.\n\nThe following variables have been declared:\n\nsector_salaries = [15000, 120000, 35000, 45000]\ncounter = 0\ntotal_val = 0\n\nThere are two errors in the iteration and calculation logic below:\n\nfor index in range(0, len(sector_salaries)-1):\n    counter += 1\n    total_val += sector_salaries[index]\naverage_salary = total_val/counter\nprint(\"The total payroll is:\", total_val)\nprint(\"The average salary is:\", average_salary)\n\nWhich code segments should Vladislav use to fix the errors?\n\nTo answer, select the appropriate code segments in the answer area.\nfor index in range \n[1]\n\n    counter += 1\n    total_val += sector_salaries[index]\naverage_salary = \n[2]\n\nprint(\"The total payroll is:\", total_val)\nprint(\"The average salary is:\", average_salary)",
      "explanation": "The exclusive range stop must equal the list length. Divide the final total by the number processed after the loop.",
      "dragItems": [
        {
          "id": "i1",
          "text": "[0, len(sector_salaries])"
        },
        {
          "id": "i2",
          "text": "(0, len(sector_salaries))()"
        },
        {
          "id": "i3",
          "text": "(0, len(sector_salaries)) = None"
        },
        {
          "id": "i4",
          "text": "(0, len(sector_salaries))"
        },
        {
          "id": "i5",
          "text": "counter / total_val"
        },
        {
          "id": "i6",
          "text": "total_val + counter"
        },
        {
          "id": "i7",
          "text": "total_val / counter"
        },
        {
          "id": "i8",
          "text": "total_val * counter"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-658",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is creating a program to calculate the rental fees for traditional Moldovan costumes at the \"Orheiul Vechi\" Cultural Center.\nThe fee structure is established as follows:\n\n• The standard daily rate (`daily_rate`) is 200 MDL.\n• If the customer returns the costume after the center closes (6 PM), they are charged for an extra day.\n• Rentals starting on a \"Sunday\" receive a 30% discount for the full duration to encourage weekend events.\n• Rentals starting on a \"Thursday\" receive a 50% discount for the full duration.\n\nComplete the code to meet the requirements by selecting the correct code segment from each dropdown list.\n\n# Traditional Costume Rental Calculator\nreturned_ontime = input(\"Was the costume returned before 6 PM? Y or N\").lower()\ndays_rented = int(input(\"How many days was the costume rented?\"))\nrental_day = input(\"What day did the rental start?\").capitalize()\ndaily_rate = 200\n\nif returned_ontime \n[1]\n\n    days_rented += 1\n\nif rental_day \n[2]\n\n    total_cost = (days_rented * daily_rate) * 0.7\nelif rental_day \n[3]\n\n    total_cost = (days_rented * daily_rate) * 0.5\nelse:\n    total_cost = days_rented * daily_rate\n\nprint(\"Total cost for the costume rental is : MDL\", total_cost)",
      "explanation": "A late return adds a day; Sunday uses 70% of normal cost and Thursday uses 50%.",
      "dragItems": [
        {
          "id": "i1",
          "text": "!= \"y\""
        },
        {
          "id": "i2",
          "text": "!= \"y\" ="
        },
        {
          "id": "i3",
          "text": "!= \"y\":"
        },
        {
          "id": "i4",
          "text": "!= \"y\";"
        },
        {
          "id": "i5",
          "text": "= \"Sunday\":"
        },
        {
          "id": "i6",
          "text": "== \"Sunday\":"
        },
        {
          "id": "i7",
          "text": "== \"Sunday\";"
        },
        {
          "id": "i8",
          "text": "== \"Sunday\""
        },
        {
          "id": "i9",
          "text": "== \"Thursday\":"
        },
        {
          "id": "i10",
          "text": "== \"Thursday\";"
        },
        {
          "id": "i11",
          "text": "== \"Thursday\""
        },
        {
          "id": "i12",
          "text": "= \"Thursday\":"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "py-659",
      "chapter": "input-output",
      "type": "multiple",
      "question": "Voitcovschi Vladislav is organizing a hackathon at the Technical University of Moldova in Chișinău.\nHe wrote the following function to direct participants to specific computer labs based on their year of study:\n\ndef assign_lab(participant, study_year):\n    \"\"\"Assign labs to university students\"\"\"\n    if study_year == 1:\n        print(f\"\\n{participant.title()}, please proceed to Lab 101 (Block 3)\")\n    elif study_year == 2:\n        print(f\"\\n{participant.title()}, please proceed to Lab 202 (Block 3)\")\n    elif study_year == 3:\n        print(f\"\\n{participant.title()}, please proceed to Lab 305 (Block 6)\")\n    elif study_year == 4:\n        print(f\"\\n{participant.title()}, please proceed to Lab 410 (Block 6)\")\n    elif study_year == 5:\n        print(f\"\\n{participant.title()}, please proceed to the Master's Hall\")\n    else:\n        print(f\"\\n{participant.title()}, please check in at the Info Desk\")\n\nWhich two code segments can be used to call the function correctly? (Choose 2.)\nEach correct code segment is a complete solution.",
      "explanation": "Both valid solutions supply participant and study_year correctly. name/year are not the function's keyword parameters.",
      "options": [
        "full_name = input('Enter your full name:') current_year = 0 while current_year not in (1, 2, 3, 4, 5, 6):     current_year = int(input('Enter your year of study (1-6):')) assign_lab(full_name, study_year=current_year)",
        "full_name = input('Enter your full name:') current_year = 0 while current_year not in (1, 2, 3, 4, 5, 6):     current_year = int(input('Enter your year of study (1-6):')) assign_lab(participant, year)",
        "assign_lab('Sandu Grecu', 3)",
        "assign_lab(study_year=4, name='Elena Vieru')"
      ],
      "correct": [
        0,
        2
      ]
    },
    {
      "id": "py-660",
      "chapter": "structuri-control",
      "type": "multiple",
      "question": "Assume all loan totals are nonnegative and member_count is positive. Which TWO options produce an integer average with the fractional part removed?",
      "explanation": "For nonnegative totals, int(true division) and int(floor division) discard the fractional portion and produce integers. Float conversion does not produce an integer result type.",
      "options": [
        "avg_loan_mdl = round(total_disbursed_mdl / member_count)",
        "avg_loan_mdl = total_disbursed_mdl ** member_count",
        "avg_loan_mdl = int(total_disbursed_mdl / member_count)",
        "avg_loan_mdl = int(total_disbursed_mdl // member_count)"
      ],
      "correct": [
        2,
        3
      ]
    },
    {
      "id": "py-661",
      "chapter": "input-output",
      "type": "single",
      "question": "Voitcovschi Vladislav is developing a Python application for an automated weather station in Ștefan Vodă.\nThe application needs to both read and write data to a text file.\n\nThe requirements for opening the file are strict:\n• If the file does not exist, the application must create it.\n• If the file already contains data, the application must completely erase (truncate) the existing content upon opening.\n\nWhich code segment should Vladislav use?",
      "explanation": "w+ permits reading/writing, creates a missing file and truncates an existing file.",
      "options": [
        "open(\"meteo_log\", \"w\")",
        "open(\"meteo_log\", \"r\")",
        "open(\"meteo_log\", \"w+\")",
        "open(\"meteo_log\", \"r+\")"
      ],
      "correct": 2
    },
    {
      "id": "py-662",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "Complete the MPay transaction handler: attempt execute_payment(); if it raises an exception, call log_transaction_error(); always call close_session() on success or failure.",
      "explanation": "Run the payment in try, log ordinary exceptions in except and close the session in finally.",
      "dragItems": [
        {
          "id": "i1",
          "text": "try ="
        },
        {
          "id": "i2",
          "text": "try:"
        },
        {
          "id": "i3",
          "text": "try;"
        },
        {
          "id": "i4",
          "text": "try"
        },
        {
          "id": "i5",
          "text": "except Exception:"
        },
        {
          "id": "i6",
          "text": "except Exception;"
        },
        {
          "id": "i7",
          "text": "except Exception"
        },
        {
          "id": "i8",
          "text": "except Exception ="
        },
        {
          "id": "i9",
          "text": "finally;"
        },
        {
          "id": "i10",
          "text": "finally"
        },
        {
          "id": "i11",
          "text": "finally ="
        },
        {
          "id": "i12",
          "text": "finally:"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ],
      "code": "[1]\n    execute_payment()\n[2]\n    log_transaction_error()\n[3]\n    close_session()"
    },
    {
      "id": "py-663",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is managing the digital archives for the Primăria (Mayor's Office) of Soroca.\nHe needs to create a file-manipulation script that performs the following actions:\n\n- Checks to see whether the annual budget file (`buget_soroca.txt`) actually exists in the system.\n- If the file exists, the program must display its full contents to the console.\n\nComplete the code by selecting the correct code segment from each drop-down list.\n\nimport os\nif \n[1]\n\n    doc = open('buget_soroca.txt')\n    \n[2]\n\n    doc.close()",
      "explanation": "isfile verifies the regular file; read retrieves all its text for display.",
      "dragItems": [
        {
          "id": "i1",
          "text": "os.path.isfile(\"buget_soroca.txt\"):"
        },
        {
          "id": "i2",
          "text": "os.path.isfile(\"buget_soroca.txt\");"
        },
        {
          "id": "i3",
          "text": "os.path.isfile(\"buget_soroca.txt\")"
        },
        {
          "id": "i4",
          "text": "os.path.isfile(\"buget_soroca.txt\") ="
        },
        {
          "id": "i5",
          "text": "print[doc.read()]"
        },
        {
          "id": "i6",
          "text": "print()"
        },
        {
          "id": "i7",
          "text": "print(\"doc.read()\")"
        },
        {
          "id": "i8",
          "text": "print(doc.read())"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-664",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is programming a pixel art pattern for the \"Eco-Verde Moldova\" digital billboard.\nHe needs to generate an 'E' shape using asterisks to represent \"Ecologie\".\n\nThe requirement is to print five lines of code to form the letter:\n• Lines 1, 3, and 5 must have four asterisks each (the horizontal bars).\n• Lines 2 and 4 must have only one asterisk each (the vertical connector).\n\nThe target output is:\n****\n*\n****\n*\n****\n\nComplete the code logic by selecting the correct integer limits for the loops.\n\n# Eco-Verde Logo Generator\ndisplay_output = \"\"\nfor line_num in range(1, \n[1]\n):\n    for pixel_pos in range(1, \n[2]\n):\n        if (line_num == 1 or line_num == 3 or line_num == 5):\n            display_output = display_output + \"*\"\n        elif pixel_pos == 1:\n            display_output = display_output + \"*\"\n    display_output = display_output + \"\\n\"\nprint(display_output)",
      "explanation": "range excludes its stop, so the loops cover five rows and four columns.",
      "dragItems": [
        {
          "id": "i1",
          "text": "0"
        },
        {
          "id": "i2",
          "text": "1"
        },
        {
          "id": "i3",
          "text": "2"
        },
        {
          "id": "i4",
          "text": "6"
        },
        {
          "id": "i5",
          "text": "1"
        },
        {
          "id": "i6",
          "text": "2"
        },
        {
          "id": "i7",
          "text": "5"
        },
        {
          "id": "i8",
          "text": "0"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-665",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Fill five fragments to compute (-signal_strength)**2.",
      "explanation": "(-signal_strength)**2 squares the negated value. Parentheses distinguish it from negating the square.",
      "dragItems": [
        {
          "id": "i1",
          "text": "-"
        },
        {
          "id": "i2",
          "text": "signal_strength"
        },
        {
          "id": "i3",
          "text": ")"
        },
        {
          "id": "i4",
          "text": "**2"
        },
        {
          "id": "i5",
          "text": "("
        },
        {
          "id": "i6",
          "text": "/"
        },
        {
          "id": "i7",
          "text": "-"
        },
        {
          "id": "i8",
          "text": "+"
        },
        {
          "id": "i9",
          "text": "*"
        },
        {
          "id": "i10",
          "text": ")"
        },
        {
          "id": "i11",
          "text": "**2"
        },
        {
          "id": "i12",
          "text": "("
        },
        {
          "id": "i13",
          "text": "-"
        },
        {
          "id": "i14",
          "text": "signal_strength"
        },
        {
          "id": "i15",
          "text": "**2"
        },
        {
          "id": "i16",
          "text": "("
        },
        {
          "id": "i17",
          "text": "-"
        },
        {
          "id": "i18",
          "text": "signal_strength"
        },
        {
          "id": "i19",
          "text": ")"
        },
        {
          "id": "i20",
          "text": "("
        },
        {
          "id": "i21",
          "text": "-"
        },
        {
          "id": "i22",
          "text": "signal_strength"
        },
        {
          "id": "i23",
          "text": ")"
        },
        {
          "id": "i24",
          "text": "**2"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i5",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4",
            "i5"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i6",
            "i7",
            "i8",
            "i9"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i14",
          "optionIds": [
            "i10",
            "i11",
            "i12",
            "i13",
            "i14"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i19",
          "optionIds": [
            "i15",
            "i16",
            "i17",
            "i18",
            "i19"
          ]
        },
        {
          "id": "z5",
          "label": "Blank [5]",
          "correctItemId": "i24",
          "optionIds": [
            "i20",
            "i21",
            "i22",
            "i23",
            "i24"
          ]
        }
      ],
      "code": "intensity = [1][2][3][4][5]"
    },
    {
      "id": "py-666",
      "chapter": "module-librarii",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is writing the Python Coding Guidelines for a student project at the Technical University of Moldova.\nHe needs to specify the correct rules for documenting code using docstrings.\n\nAnswer the questions about Python code documentation by selecting the correct option from each drop-down list.\n\nWhich character(s) are used to signal the beginning and ending of a single-line docstring? \n[1]\n\nWhen documenting a function, what is the standard location for the docstring to be placed? \n[2]\n\n\nReview the following function found in the project's financial module:\ndef convert_mdl(lei):\n    \"\"\" Converts Moldovan Lei to Euro at the daily rate \"\"\"\n    return lei / 19.50\n\nWhich command will print the docstring text to the console? \n[3]",
      "explanation": "A first-statement string literal becomes the function docstring, conventionally triple-quoted, and __doc__ retrieves it.",
      "dragItems": [
        {
          "id": "i1",
          "text": "A slash-star comment"
        },
        {
          "id": "i2",
          "text": "Triple double quotes (\"\"\")"
        },
        {
          "id": "i3",
          "text": "A hash prefix on each line"
        },
        {
          "id": "i4",
          "text": "Double forward slashes"
        },
        {
          "id": "i5",
          "text": "First statement inside the function body"
        },
        {
          "id": "i6",
          "text": "After every executable statement"
        },
        {
          "id": "i7",
          "text": "Only at the end of the file"
        },
        {
          "id": "i8",
          "text": "Inside a commented-out block"
        },
        {
          "id": "i9",
          "text": "print[convert_mdl.__doc__]"
        },
        {
          "id": "i10",
          "text": "print()"
        },
        {
          "id": "i11",
          "text": "print(\"convert_mdl.__doc__\")"
        },
        {
          "id": "i12",
          "text": "print(convert_mdl.__doc__)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "py-667",
      "chapter": "structuri-control",
      "type": "multiple",
      "question": "Voitcovschi Vladislav is developing a reporting script for the Moldova IT Park administration.\nA list named `registered_companies` contains 200 entries.\nThe last five entries in this list are internal system placeholders and not actual companies.\n\nVladislav needs to slice the list to display all legitimate companies, strictly excluding the last five system placeholders.\n\nWhich two code segments should he use? Each correct answer presents a complete solution. (Choose 2.)",
      "explanation": "Both [0:-5] and [:-5] include the first element and stop before the final five entries.",
      "options": [
        "registered_companies[1:-5]",
        "registered_companies[0:-5]",
        "registered_companies[1:-4]",
        "registered_companies[0:-4]",
        "registered_companies[:-5]"
      ],
      "correct": [
        1,
        4
      ]
    },
    {
      "id": "py-668",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is writing a Python script to calculate the exponential power output for a new turbine at the Costești-Stânca Hydro Power Plant.\nLine numbers are included for reference only.\n\n01 def compute_output(base_val, exp_val):\n02     return base_val**exp_val\n03 turbine_load = input(\"Enter the base load value: \")\n04 time_factor = input(\"Enter the exponential factor: \")\n05 total_energy = compute_output(turbine_load, time_factor)\n06 print(\"The projected output is \" + total_energy)\n\nFor each statement regarding the execution of this code, select True or False.",
      "explanation": "input returns strings successfully. Exponentiating two strings fails inside the function called on line 05; no energy result prints.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The script will trigger a runtime error specifically at line 03 and line 04 during input collection.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "The script will fail and generate an error during the execution of line 02 (calculation) and line 05 (function call).",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The script will execute successfully and print the correct energy data to the console.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "py-669",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is testing the object identity logic for the \"Poșta Moldovei\" tracking system.\nHe is comparing lists of numeric sorting center IDs with string-based regional codes.\n\nHe writes the following code:\n\ncenter_ids = [10, 20, 30, 40, 50]\nregion_codes = [\"N\", \"S\", \"E\", \"W\", \"C\"]\n\n# Check 1: Identity comparison\nprint(center_ids is region_codes)\n\n# Check 2: Value equality comparison\nprint(center_ids == region_codes)\n\n# Reassignment\ncenter_ids = region_codes\n\n# Check 3: Identity comparison after assignment\nprint(center_ids is region_codes)\n\n# Check 4: Value equality comparison after assignment\nprint(center_ids == region_codes)\n\n\nEvaluate the code and answer the questions by selecting the correct option from each drop-down list.\n\nWhat is displayed after the first print (Check 1)? \n[1]\n\nWhat is displayed after the second print (Check 2)? \n[2]\n\nWhat is displayed after the third print (Check 3)? \n[3]\n\nWhat is displayed after the fourth print (Check 4)? \n[4]",
      "explanation": "The initial lists differ in both content and identity. Assignment makes both names refer to the same list.",
      "dragItems": [
        {
          "id": "i1",
          "text": "True"
        },
        {
          "id": "i2",
          "text": "False"
        },
        {
          "id": "i3",
          "text": "true"
        },
        {
          "id": "i4",
          "text": "false"
        },
        {
          "id": "i5",
          "text": "False"
        },
        {
          "id": "i6",
          "text": "true"
        },
        {
          "id": "i7",
          "text": "false"
        },
        {
          "id": "i8",
          "text": "True"
        },
        {
          "id": "i9",
          "text": "true"
        },
        {
          "id": "i10",
          "text": "false"
        },
        {
          "id": "i11",
          "text": "False"
        },
        {
          "id": "i12",
          "text": "True"
        },
        {
          "id": "i13",
          "text": "false"
        },
        {
          "id": "i14",
          "text": "False"
        },
        {
          "id": "i15",
          "text": "True"
        },
        {
          "id": "i16",
          "text": "true"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i15",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ]
    },
    {
      "id": "py-670",
      "chapter": "input-output",
      "type": "single",
      "question": "Voitcovschi Vladislav is testing a Python script named `meniu_soroca.py` that handles catering orders.\nThe file contains the following code:\n\nimport sys\nprint(sys.argv[2])\n\nVladislav runs the following command in the terminal:\n\n    python meniu_soroca.py Placinte Sarmale Mamaliga\n\nWhat is the output of the command?",
      "explanation": "argv[0] is the script, argv[1] is Placinte and argv[2] is Sarmale.",
      "options": [
        "Sarmale",
        "meniu_soroca.py",
        "Mamaliga",
        "Placinte"
      ],
      "correct": 0
    },
    {
      "id": "py-671",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is writing a script to manage tour route names for a travel agency in Moldova.\nHe writes the following code:\n\ncurrent_tour = 'Cricova'\nprint(current_tour)\ntour_backup = current_tour\ncurrent_tour += 'Milestii'\nprint(current_tour)\nprint(tour_backup)\n\nEvaluate the code regarding string immutability and answer the questions by selecting the correct option from each drop-down list.\n\nWhat is displayed after the second print command (printing `current_tour`)? \n[1]\n\nWhat is displayed after the third print command (printing `tour_backup`)? \n[2]",
      "explanation": "String concatenation rebinds current_tour to a new object; the backup retains the original string.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Cricova"
        },
        {
          "id": "i2",
          "text": "Milestii"
        },
        {
          "id": "i3",
          "text": "Cricova Milestii"
        },
        {
          "id": "i4",
          "text": "CricovaMilestii"
        },
        {
          "id": "i5",
          "text": "Milestii"
        },
        {
          "id": "i6",
          "text": "Cricova Milestii"
        },
        {
          "id": "i7",
          "text": "Cricova"
        },
        {
          "id": "i8",
          "text": "CricovaMilestii"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-672",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is developing a scanning program for a logistics hub in the Free Economic Zone \"Bălți\".\nThe program must iterate through a list of parcel identifiers (`parcel_list`) and immediately stop execution (escape the loop) when it detects a specific restricted ID (ID 6).\n\nComplete the code by selecting the correct code segment from each drop-down list.\n\nparcel_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\ncurrent_idx = 0\n\n\n[1]\n (current_idx < 10):\n    print(parcel_list[current_idx])\n    if parcel_list[current_idx] == 6:\n        \n[2]\n\n    else:\n        \n[3]",
      "explanation": "while advances through indexes; break exits on restricted ID 6 and increment progresses after nonmatches.",
      "dragItems": [
        {
          "id": "i1",
          "text": "from"
        },
        {
          "id": "i2",
          "text": "def"
        },
        {
          "id": "i3",
          "text": "while"
        },
        {
          "id": "i4",
          "text": "import"
        },
        {
          "id": "i5",
          "text": "pass"
        },
        {
          "id": "i6",
          "text": "break"
        },
        {
          "id": "i7",
          "text": "raise"
        },
        {
          "id": "i8",
          "text": "return"
        },
        {
          "id": "i9",
          "text": "while"
        },
        {
          "id": "i10",
          "text": "break"
        },
        {
          "id": "i11",
          "text": "current_idx += 1"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11"
          ]
        }
      ]
    },
    {
      "id": "py-673",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is developing a simple lexical analysis tool for students celebrating \"Limba Noastră\" (National Language Day) in Moldova.\nThe program has the following requirements:\n• Allow students to repeatedly enter Romanian words.\n• Output the exact character count for each word to help with spelling exercises.\n• Terminate the program strictly when the user types \"STOP\".\n\nComplete the code by selecting the correct option from each drop-down list.\n\nword_input = \"Limba\"\n\n[1]\n word_input != \"STOP\":\n    count_val = 0\n    \n[2]\n letter \n[3]\n word_input:\n        count_val += 1\n    print(count_val)\n    word_input = input(\"Enter a new word or STOP to exit: \")",
      "explanation": "The sentinel while loop repeats; for/in counts each Unicode code point in the entered string.",
      "dragItems": [
        {
          "id": "i1",
          "text": "def"
        },
        {
          "id": "i2",
          "text": "while"
        },
        {
          "id": "i3",
          "text": "import"
        },
        {
          "id": "i4",
          "text": "from"
        },
        {
          "id": "i5",
          "text": "for"
        },
        {
          "id": "i6",
          "text": "list"
        },
        {
          "id": "i7",
          "text": "name"
        },
        {
          "id": "i8",
          "text": "id"
        },
        {
          "id": "i9",
          "text": "with"
        },
        {
          "id": "i10",
          "text": "as"
        },
        {
          "id": "i11",
          "text": "from"
        },
        {
          "id": "i12",
          "text": "in"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "py-674",
      "chapter": "functii",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is programming a scoring system for the Tekwill IT Academy in Chișinău.\nThe system needs to return a text qualification based on the student's final percentage.\n\nThe criteria are defined as follows:\n- The variable `exam_score` stores the numeric score as a whole number between 0 and 100.\n- Scores from 90 to 100 = \"Excelent\" (Excellent).\n- Scores from 80 to 89 = \"Foarte Bine\" (Very Good).\n- Scores from 70 to 79 = \"Bine\" (Good).\n- All other valid scores are considered \"Respins\" (Failed).\n\nComplete the code by selecting the correct code segment from each drop-down list.\n\n# Tekwill Grading Logic\n\n[1]\n exam_score <= 100:\n    \n[2]\n exam_score >= 90:\n        print(\"Result: Excelent.\")\n    \n[3]\n exam_score >= 80:\n        print(\"Result: Foarte Bine.\")\n    \n[4]\n exam_score < 80 \n[5]\n exam_score > 69:\n        print(\"Result: Bine.\")\n    \n[6]\n:\n        print(\"Result: Respins.\")\n\n[7]\n:\n    print(\"Error: Invalid score entered.\")",
      "explanation": "The outer range test validates 0-100, then descending thresholds classify results. and requires both bounds of the 70-79 interval.",
      "dragItems": [
        {
          "id": "i1",
          "text": "if"
        },
        {
          "id": "i2",
          "text": "elif"
        },
        {
          "id": "i3",
          "text": "and"
        },
        {
          "id": "i4",
          "text": "else"
        },
        {
          "id": "i5",
          "text": "if 0 <="
        },
        {
          "id": "i6",
          "text": "case"
        },
        {
          "id": "i7",
          "text": "default"
        },
        {
          "id": "i8",
          "text": "switch"
        },
        {
          "id": "i9",
          "text": "if"
        },
        {
          "id": "i10",
          "text": "if else"
        },
        {
          "id": "i11",
          "text": "then"
        },
        {
          "id": "i12",
          "text": "elif"
        },
        {
          "id": "i13",
          "text": "else if"
        },
        {
          "id": "i14",
          "text": "then"
        },
        {
          "id": "i15",
          "text": "elif"
        },
        {
          "id": "i16",
          "text": "else if"
        },
        {
          "id": "i17",
          "text": "if else"
        },
        {
          "id": "i18",
          "text": "or"
        },
        {
          "id": "i19",
          "text": "not"
        },
        {
          "id": "i20",
          "text": "and"
        },
        {
          "id": "i21",
          "text": "try"
        },
        {
          "id": "i22",
          "text": "except"
        },
        {
          "id": "i23",
          "text": "finally"
        },
        {
          "id": "i24",
          "text": "else"
        },
        {
          "id": "i25",
          "text": "except"
        },
        {
          "id": "i26",
          "text": "finally"
        },
        {
          "id": "i27",
          "text": "else"
        },
        {
          "id": "i28",
          "text": "try"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i5",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4",
            "i5"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i9",
          "optionIds": [
            "i6",
            "i7",
            "i8",
            "i9"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i10",
            "i11",
            "i12",
            "i13"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i15",
          "optionIds": [
            "i14",
            "i15",
            "i16",
            "i17"
          ]
        },
        {
          "id": "z5",
          "label": "Blank [5]",
          "correctItemId": "i20",
          "optionIds": [
            "i18",
            "i19",
            "i20"
          ]
        },
        {
          "id": "z6",
          "label": "Blank [6]",
          "correctItemId": "i24",
          "optionIds": [
            "i21",
            "i22",
            "i23",
            "i24"
          ]
        },
        {
          "id": "z7",
          "label": "Blank [7]",
          "correctItemId": "i27",
          "optionIds": [
            "i25",
            "i26",
            "i27",
            "i28"
          ]
        }
      ]
    },
    {
      "id": "py-675",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is maintaining a server activity log for a data center in Chișinău.\nReview the following code segment he wrote to handle the log file:\n\nlog_file = open(\"log_acces_chisinau.txt\", \"a\")\nlog_file.write(\"New session started via secure port.\")\nlog_file.close()\n\nFor each statement about the behavior of this code, select True or False.",
      "explanation": "Append mode creates a missing file, preserves old text and closes the handle at the end.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "If the file `log_acces_chisinau.txt` does not currently exist, Python will create it automatically.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Any existing text inside the file will be completely erased and replaced by the new line.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The file resource is released, allowing other parts of the program to open and access it afterward.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-676",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Complete the receipt row from market_data. Product name: left-aligned, minimum width 10. Weight in kg: right-aligned, minimum width 5, one decimal place. Price in MDL: right-aligned, minimum width 7, two decimal places. Use each indexed formatting fragment in its matching column.",
      "explanation": "The first string field is left-aligned; numeric fields are right-aligned with one and two decimal places respectively.",
      "dragItems": [
        {
          "id": "i1",
          "text": "{2:7.2f}"
        },
        {
          "id": "i2",
          "text": "{0:10}"
        },
        {
          "id": "i3",
          "text": "{1:5.1f}"
        },
        {
          "id": "i4",
          "text": "{0:10}"
        },
        {
          "id": "i5",
          "text": "{1:5.1f}"
        },
        {
          "id": "i6",
          "text": "{2:7.2f}"
        },
        {
          "id": "i7",
          "text": "{1:5.1f}"
        },
        {
          "id": "i8",
          "text": "{2:7.2f}"
        },
        {
          "id": "i9",
          "text": "{0:10}"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i4",
            "i5",
            "i6"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i8",
          "optionIds": [
            "i7",
            "i8",
            "i9"
          ]
        }
      ],
      "code": "name, weight, price = market_data\nprint(\"[1] [2] [3]\".format(name, float(weight), float(price)))"
    },
    {
      "id": "py-677",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is writing a program to calculate the birth year of volunteers registering for the \"Chișinău Marathon\".\nThe program asks volunteers for their age (`volunteer_age`) and uses the current event year (`event_year`) to output the approximate birth year (`birth_year`) in a formatted string (`notification`).\n\nHe writes the following code:\n\n01 volunteer_age = input(\"Enter your age: \")\n02 event_year = 2025\n03 birth_year = event_year - int(volunteer_age)\n04 notification = \"Registration confirmed for birth year: \" + str(birth_year)\n05 print(notification)\n\nEvaluate the code and answer the questions by selecting the correct option from each drop-down list.\nWhat is the data type of `volunteer_age` in line 01? \n[1]\n\nWhat is the data type of `birth_year` in line 03? \n[2]\n\nWhat is the data type of `notification` in line 05? \n[3]",
      "explanation": "input returns str, integer subtraction returns int and concatenating strings returns str.",
      "dragItems": [
        {
          "id": "i1",
          "text": "eval"
        },
        {
          "id": "i2",
          "text": "str"
        },
        {
          "id": "i3",
          "text": "input"
        },
        {
          "id": "i4",
          "text": "print"
        },
        {
          "id": "i5",
          "text": "int"
        },
        {
          "id": "i6",
          "text": "float"
        },
        {
          "id": "i7",
          "text": "str"
        },
        {
          "id": "i8",
          "text": "bool"
        },
        {
          "id": "i9",
          "text": "input"
        },
        {
          "id": "i10",
          "text": "print"
        },
        {
          "id": "i11",
          "text": "eval"
        },
        {
          "id": "i12",
          "text": "str"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "py-678",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is developing a stock management script for a wine shop in Chișinău.\nReview the following program. Line numbers are for reference only:\n\n01 def wine_registry(drink_type, grape_var, winery=\"Generic\"):\n02     print(f\"\\nRegistry entry for {drink_type}.\")\n03     if winery == \"Generic\":\n04         print(f\"Standard {drink_type}: {grape_var}\")\n05     else:\n06         print(f\"Premium {drink_type}: {grape_var} from {winery}\")\n07\n08 d_type = input(\"Enter type (Red, White, or Rose):\")\n09 g_var = input(\"Enter grape variety:\")\n10 if d_type == \"Red\" or d_type == \"White\":\n11     w_name = input(\"Enter winery name:\")\n12     wine_registry(d_type, g_var, w_name)\n13 else:\n14     wine_registry(d_type, g_var)\n15\n16 wine_registry(winery=\"Purcari\", grape_var=\"Rara Neagra\", drink_type=\"Red\")\n17 wine_registry(\"Rose\", grape_var=\"Cabernet\")\n\nFor each statement about the program, select True or False.",
      "explanation": "The function prints but has no explicit return. Positional, named and default-argument calls shown are all valid.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The `wine_registry` function explicitly returns a value to the code that calls it.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "The function calls executing at lines 14 and 16 are valid Python syntax.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The function calls executing at lines 12 and 17 will cause the program to crash with an error.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "py-679",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is coding a loyalty program module for a supermarket in Drochia.\nThe function `add_bonus_points` calculates the new balance based on specific business rules:\n\n• If the cashier does not specify the number of points to add (`new_points`), the system should automatically default to adding 1 point.\n• If the customer has VIP status (`vip_status` is True), the points to be added must be doubled.\n\nHe writes the following code. Line numbers are included for reference only:\n\n01 def add_bonus_points(balance, vip_status, new_points):\n02     if vip_status == True:\n03         new_points = new_points * 2\n04     balance = balance + new_points\n05     return balance\n06 new_points = 5\n07 balance = 10\n08 final_balance = add_bonus_points(balance, True, new_points)\n\nFor each statement regarding the behavior of this code, select True or False.",
      "explanation": "A default new_points=1 permits omitted points. Without it, the call lacks a required argument. Local integer rebinding does not modify the global variable.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "To correctly implement the default value requirement, Vladislav must modify line 01 to read: def add_bonus_points(balance, vip_status, new_points = 1):",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "If line 01 is left unchanged and the function is subsequently called with only two arguments, the script will raise a TypeError.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The multiplication operation at line 03 will permanently modify the value of the global variable `new_points` initialized at line 06.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "py-680",
      "chapter": "module-librarii",
      "type": "multiple",
      "question": "Voitcovschi Vladislav is programming a digital raffle (\"Tombola\") for a community event in Ungheni.\nHe needs to write code to generate a winning ticket number that is a random integer with a minimum value of 5 and a maximum value of 11 (inclusive).\n\nWhich two functions should he use? Each correct answer presents a complete solution. (Choose 2.)",
      "explanation": "randint includes both endpoints, while randrange excludes its stop, requiring 12 to include 11.",
      "options": [
        "random.randint(5, 12)",
        "random.randrange(5, 11, 1)",
        "random.randint(5, 11)",
        "random.randrange(5, 12, 1)"
      ],
      "correct": [
        2,
        3
      ]
    },
    {
      "id": "py-681",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is writing unit tests for a module that validates data integrity in an agricultural export system in Chișinău.\nHe needs to choose the correct assertion methods to check specific conditions on variables `a` (a potential value) and `b` (an expected value or list).\n\nComplete the statements about assert methods by selecting the correct option from each drop-down list.\n\nTo confirm that the **contents (values)** of variables `a` and `b` are equivalent, use: \n[1]\n\nTo verify that variables `a` and `b` point to the **exact same object** instance in memory, use: \n[2]\n\nTo test whether a target value (`a`) exists within a collection (`b`), use: \n[3]",
      "explanation": "Equality compares contents, identity checks the same object and membership checks a inside b.",
      "dragItems": [
        {
          "id": "i1",
          "text": "assertEqual(\"a, b\")"
        },
        {
          "id": "i2",
          "text": "assertEqual(a, b)"
        },
        {
          "id": "i3",
          "text": "assertEqual[a, b]"
        },
        {
          "id": "i4",
          "text": "assertEqual()"
        },
        {
          "id": "i5",
          "text": "assertIs(a, b)"
        },
        {
          "id": "i6",
          "text": "assertIs[a, b]"
        },
        {
          "id": "i7",
          "text": "assertIs()"
        },
        {
          "id": "i8",
          "text": "assertIs(\"a, b\")"
        },
        {
          "id": "i9",
          "text": "assertIn[a, b]"
        },
        {
          "id": "i10",
          "text": "assertIn()"
        },
        {
          "id": "i11",
          "text": "assertIn(\"a, b\")"
        },
        {
          "id": "i12",
          "text": "assertIn(a, b)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "py-682",
      "chapter": "functii",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is writing a function for a financial application in Chișinău to perform safe rate calculation.  \nThe function must ensure that both the investment amount (`amount`) and the duration (`duration`) are provided, and that the duration is not zero.  \nComplete the code by selecting the correct code segment from each drop-down list.\n\ndef calculate_rate(amount, duration):\n    \n[1]\n\n        print(\"A required financial value is missing.\")\n    \n[2]\n\n        print(\"The calculation duration is zero.\")\n    else:\n        return amount / duration",
      "explanation": "Explicit None checks distinguish missing values from a valid zero amount. Check the denominator before division.",
      "dragItems": [
        {
          "id": "i1",
          "text": "if amount is None or duration is None:"
        },
        {
          "id": "i2",
          "text": "if amount is None or duration is None;"
        },
        {
          "id": "i3",
          "text": "if amount is None or duration is None"
        },
        {
          "id": "i4",
          "text": "if amount is None or duration is None ="
        },
        {
          "id": "i5",
          "text": "elif duration == 0;"
        },
        {
          "id": "i6",
          "text": "elif duration == 0"
        },
        {
          "id": "i7",
          "text": "elif duration = 0:"
        },
        {
          "id": "i8",
          "text": "elif duration == 0:"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-683",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is programming a script to locate a wine barrel at the Cricova Cellars and display the wine variety.\nThe program incorrectly outputs \"Barrel ID not found.\" even when a valid number like 101 or 202 is entered.\n\n01 wine_barrels = {101: 'Fetească Neagră', 202: 'Merlot Reserve'}\n02 barrel_id = input('Enter the barrel ID number: ')\n03 if not barrel_id in wine_barrels:\n04     print('Barrel ID not found.')\n05 else:\n06     print(\"The wine variety is \" + wine_barrels[barrel_id])\n\nEvaluate the code and answer the questions by selecting the correct option from each drop-down list.\n\nWhich two data types are stored in the `wine_barrels` dictionary at line 01? \n[1]\n\nWhat is the data type of `barrel_id` at line 02? \n[2]\n\nWhy does the membership test at line 03 fail to find the IDs? \n[3]",
      "explanation": "input returns text, but dictionary keys are integers. Convert the input to int for matching.",
      "dragItems": [
        {
          "id": "i1",
          "text": "String keys and integer values"
        },
        {
          "id": "i2",
          "text": "Boolean keys only"
        },
        {
          "id": "i3",
          "text": "Floating-point values only"
        },
        {
          "id": "i4",
          "text": "Integer keys and string values"
        },
        {
          "id": "i5",
          "text": "print"
        },
        {
          "id": "i6",
          "text": "eval"
        },
        {
          "id": "i7",
          "text": "str"
        },
        {
          "id": "i8",
          "text": "input"
        },
        {
          "id": "i9",
          "text": "Integer keys are invalid"
        },
        {
          "id": "i10",
          "text": "The input string does not equal the integer keys"
        },
        {
          "id": "i11",
          "text": "Dictionaries compare keys using their printed appearance only"
        },
        {
          "id": "i12",
          "text": "input() always returns a float"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "py-684",
      "chapter": "input-output",
      "type": "multiple",
      "question": "Voitcovschi Vladislav is developing an export data logging script for a winery in Purcari, Moldova.\nThe script accepts input and must output the data in a strict comma-delimited format (CSV).\n\nHe writes the following code to accept input:\n\nwine_label = input(\"Enter the wine label: \")\nbottles_exported = int(input(\"Enter quantity of bottles exported: \"))\n\nThe output must meet the following requirements:\n• Enclose the string (`wine_label`) in double quotes.\n• Do not enclose the number (`bottles_exported`) in quotes or any other characters.\n• The items must be separated by a single comma, with no spaces.\n\nWhich two code segments could Vladislav use? Each correct answer presents a complete solution. (Choose 2.)",
      "explanation": "Both corrected outputs explicitly quote the label and separate it from the unquoted integer with exactly one comma.",
      "options": [
        "print(wine_label + \",\" + bottles_exported)",
        "print('\"{}\",{1}'.format(wine_label, bottles_exported))",
        "print('\"' + wine_label + '\"', \",\", bottles_exported, sep=\"\")",
        "print('\"{0}\",{1}'.format(wine_label, bottles_exported))"
      ],
      "correct": [
        2,
        3
      ]
    },
    {
      "id": "py-685",
      "chapter": "functii",
      "type": "single",
      "question": "Voitcovschi Vladislav is migrating legacy financial code for the National Bank of Moldova (BNM) to Python.\n\nHe hires you to ensure the documentation meets Python's standard practice for a function docstring.\n\nWhich documentation syntax is correct for the function that returns the current foreign exchange rate?",
      "explanation": "The corrected first option puts a string literal first in the function body, making it a docstring. A # comment alone would not create __doc__.",
      "options": [
        "def get_fx_rate():\n    \"\"\"Return the current MDL/EUR exchange rate.\"\"\"\n    return rate",
        "// Return the rate\ndef get_fx_rate():\n    return rate",
        "def get_fx_rate():\n    /* Return the rate */\n    return rate",
        "' Return the rate\ndef get_fx_rate():\n    return rate"
      ],
      "correct": 0
    },
    {
      "id": "py-686",
      "chapter": "functii",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is creating a training script for a math competition team at the \"Liceul Prometeu\" in Chișinău.\n\nHe needs to complete a function named `multiplication_board` that computes and displays all multiplication table results from 2x2 up to 12x12, with each row corresponding to a multiplier (2 through 12).\n\nThe desired output starts as shown:\n\n4 6 8 10 12 14 16 18 20 22 24\n6 9 12 15 18 21 24 27 30 33 36\n8 12 16 20 24 28 32 36 40 44 48\n... (up to 12x12 = 144)\n\nComplete the missing code segments by selecting the correct options from each drop-down list to define the nested loops.\n\n# Display multiplication tables 2 - 12\ndef multiplication_board():\n    \n[1]\n\n        \n[2]\n\n            print(row * col, end = \" \")\n        print()\n\n# main program call\nmultiplication_board()",
      "explanation": "Nested inclusive 2-12 ranges generate the complete multiplication grid.",
      "dragItems": [
        {
          "id": "i1",
          "text": "for row in range(2, 13):"
        },
        {
          "id": "i2",
          "text": "for row in range(2, 13);"
        },
        {
          "id": "i3",
          "text": "for row in range(2, 13)"
        },
        {
          "id": "i4",
          "text": "for row in range(2, 13) ="
        },
        {
          "id": "i5",
          "text": "for col in range(2, 13);"
        },
        {
          "id": "i6",
          "text": "for col in range(2, 13)"
        },
        {
          "id": "i7",
          "text": "for col in range(2, 13) ="
        },
        {
          "id": "i8",
          "text": "for col in range(2, 13):"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-687",
      "chapter": "structuri-date",
      "type": "drag_drop",
      "question": "You need to identify the resulting data types from the evaluation of various expressions\nin Python.\n\nMove the appropriate data types from the list on the left to the correct operations on\nthe right. You may use each data type once, more than once, or not at all.\n\nData Types:\n[ int ] [ float ] [ str ] [ bool ]\n\nAnswer Area\ntype(4 ** 2) \ntype(5 / 2) \ntype(3 < 8 and 1 == 1) \ntype(str(5.5))",
      "explanation": "Integer exponentiation gives int, / gives float, logical comparison gives bool and str converts to text.",
      "dragItems": [
        {
          "id": "i1",
          "text": "bool"
        },
        {
          "id": "i2",
          "text": "str"
        },
        {
          "id": "i3",
          "text": "int"
        },
        {
          "id": "i4",
          "text": "float"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "type(4 ** 2)",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "type(5 / 2)",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "type(3 < 8 and 1 == 1)",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "type(str(5.5))",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "py-688",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "In the Python code below, variable `a` is an `int` and `b` is a `str`. The goal is to\ncalculate the sum of the two numerical values and ensure the result is an integer.\n\na = 15\nb = \"7\"\nc = __\n\nWhich line of code correctly completes the scenario to set `c` to the integer value 22?",
      "explanation": "int(b) converts '7' to integer 7 before adding to 15, giving integer 22.",
      "options": [
        "c = float(a) + float(b)",
        "c = str(a) + b",
        "c = a + int(b)",
        "c = a + b"
      ],
      "correct": 2
    },
    {
      "id": "py-689",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "For each statement regarding fundamental Python data types, select True or False.",
      "explanation": "Integer // returns int on successful division, / returns float, bool is an int subclass and string/int concatenation needs conversion.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The result of the floor division operator (`//`) is always an `int` if both operands are integers.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The expression `type(25 / 5)` will evaluate to a result of type `int`.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The boolean value `True` can be treated as the numerical value 1 in arithmetic operations.",
          "correctItemId": "yes"
        },
        {
          "id": "z4",
          "label": "The `str` data type can be implicitly concatenated with an `int` type without explicit conversion.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "py-690",
      "chapter": "structuri-date",
      "type": "multiple",
      "question": "You have a list named `colors` containing 50 items. The last three colors are primary\ncolors (Red, Yellow, Blue) which you want to exclude. You need to slice the list to\ndisplay all colors **except** the last three.\n\nWhich two code segments should you use? Each correct answer presents a complete\nsolution. (Choose 2.)",
      "explanation": "Starting at zero and stopping before the last three, or at absolute index 47, returns all 47 desired items.",
      "options": [
        "colors[::47]",
        "colors[1:-3]",
        "colors[:-2]",
        "colors[0:-3]",
        "colors[0:47]"
      ],
      "correct": [
        3,
        4
      ]
    },
    {
      "id": "py-691",
      "chapter": "structuri-date",
      "type": "dropdown",
      "question": "Insert X at index 1, then select the index that prints X.",
      "explanation": "insert(1,'X') places X at index 1, and reading data[1] displays it.",
      "dragItems": [
        {
          "id": "i1",
          "text": "append"
        },
        {
          "id": "i2",
          "text": "extend"
        },
        {
          "id": "i3",
          "text": "remove"
        },
        {
          "id": "i4",
          "text": "insert"
        },
        {
          "id": "i5",
          "text": "2"
        },
        {
          "id": "i6",
          "text": "3"
        },
        {
          "id": "i7",
          "text": "1"
        },
        {
          "id": "i8",
          "text": "0"
        },
        {
          "id": "i9",
          "text": "3"
        },
        {
          "id": "i10",
          "text": "1"
        },
        {
          "id": "i11",
          "text": "0"
        },
        {
          "id": "i12",
          "text": "2"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ],
      "code": "data = [10, 20, 30]\ndata.[1]([2], \"X\")\nprint(data[[3]])"
    },
    {
      "id": "py-692",
      "chapter": "functii",
      "type": "dropdown",
      "question": "Answer the questions about documenting Python code by selecting the correct option from each drop-down list.\n\nAnswer Area\nWhich character(s) are commonly used to begin a block of code comments? \n[1]\n\nA multi-line docstring is typically enclosed by: \n[2]\n\nTo view the documentation for a function named `calculate`, what command should you use in the console? \n[3]",
      "explanation": "Python comments start with # per line. A first-statement triple-quoted string can be a docstring; help displays documentation.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Double forward slashes"
        },
        {
          "id": "i2",
          "text": "A slash-star block"
        },
        {
          "id": "i3",
          "text": "# on each comment line"
        },
        {
          "id": "i4",
          "text": "Triple quotes"
        },
        {
          "id": "i5",
          "text": "A slash-star block"
        },
        {
          "id": "i6",
          "text": "Triple quotes"
        },
        {
          "id": "i7",
          "text": "# on each comment line"
        },
        {
          "id": "i8",
          "text": "Double forward slashes"
        },
        {
          "id": "i9",
          "text": "help(calculate)"
        },
        {
          "id": "i10",
          "text": "help[calculate]"
        },
        {
          "id": "i11",
          "text": "help()"
        },
        {
          "id": "i12",
          "text": "help(\"calculate\")"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "py-693",
      "chapter": "structuri-date",
      "type": "dropdown",
      "question": "You are tracking the values of variables `x` and `y` during execution.\n\nYou write the following code:\nx = 100\nprint(x)\ny = x\nx += 50\nprint(x)\nprint(y)\n\nEvaluate the code and answer the questions by selecting the correct option from each\ndrop-down list.\n\nAnswer Area\nWhat is displayed after the second print? \n[1]\n\nWhat is displayed after the third print? \n[2]",
      "explanation": "Integer += rebinds x to 150, leaving y bound to the original 100.",
      "dragItems": [
        {
          "id": "i1",
          "text": "152"
        },
        {
          "id": "i2",
          "text": "150"
        },
        {
          "id": "i3",
          "text": "151"
        },
        {
          "id": "i4",
          "text": "149"
        },
        {
          "id": "i5",
          "text": "100"
        },
        {
          "id": "i6",
          "text": "101"
        },
        {
          "id": "i7",
          "text": "99"
        },
        {
          "id": "i8",
          "text": "102"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-694",
      "chapter": "structuri-date",
      "type": "single",
      "question": "You run the following Python code using a list.\n\nmy_list = [1, 2, 3]\nnew_list = my_list\nnew_list.append(4)\nprint(my_list)\n\nWhat is the output of the code?",
      "explanation": "Both variables reference the same mutable list, so appending through new_list is visible through my_list.",
      "options": [
        "An error occurs because `new_list` is an immutable copy.",
        "[1, 2, 3]",
        "[1, 2, 3, [4]]",
        "[1, 2, 3, 4]"
      ],
      "correct": 3
    },
    {
      "id": "py-695",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "For each statement about Python data types and assignment, select True or False.",
      "explanation": "In-place behavior depends on the type. Strings are immutable; list aliases share mutations. Assignment does not copy objects.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The `+=` operator always performs in-place modification for all Python objects.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Strings are immutable, so operations that appear to modify a string actually create a new string object.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Lists are mutable, meaning that if `b = a` and you change `b`, `a` will also be changed.",
          "correctItemId": "yes"
        },
        {
          "id": "z4",
          "label": "When you assign `b = a`, `b` becomes a copy of `a`'s value, regardless of whether `a` is mutable or immutable.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "py-696",
      "chapter": "structuri-date",
      "type": "dropdown",
      "question": "You have a list of numbers: `numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`.\nYou need to create a slice that contains `[3, 4, 5]`.\n\nComplete the code segment.\n\nsubset = numbers[ \n[1]\n : \n[2]\n ]",
      "explanation": "Slice starts are inclusive and stops exclusive, selecting indexes 3,4,5.",
      "dragItems": [
        {
          "id": "i1",
          "text": "1"
        },
        {
          "id": "i2",
          "text": "2"
        },
        {
          "id": "i3",
          "text": "3"
        },
        {
          "id": "i4",
          "text": "0"
        },
        {
          "id": "i5",
          "text": "2"
        },
        {
          "id": "i6",
          "text": "6"
        },
        {
          "id": "i7",
          "text": "0"
        },
        {
          "id": "i8",
          "text": "1"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-697",
      "chapter": "functii",
      "type": "dropdown",
      "question": "For each statement about Python functions and loops, select True or False.",
      "explanation": "Ordinary function locals are not global. while repeats while true and return sends a result to the caller.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Variables created inside a function are available globally outside that function.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "A `while` loop will continue to execute as long as its condition remains True.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The `return` statement is used to send a value back from a function to its caller.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-698",
      "chapter": "functii",
      "type": "dropdown",
      "question": "You are writing a function to calculate the sum of all numbers from `n` down to 1.\nComplete the code by selecting the correct code segment from each drop-down list.\n\ndef calculate_sum(n):\n    total = 0\n    while n > 0:\n        total += \n[1]\n\n        n = \n[2]\n\n    return total",
      "explanation": "Add the current n and decrement it so the loop reaches zero and stops.",
      "dragItems": [
        {
          "id": "i1",
          "text": "n"
        },
        {
          "id": "i2",
          "text": "n - 1"
        },
        {
          "id": "i3",
          "text": "n + 1"
        },
        {
          "id": "i4",
          "text": "0"
        },
        {
          "id": "i5",
          "text": "n"
        },
        {
          "id": "i6",
          "text": "n + 1"
        },
        {
          "id": "i7",
          "text": "0"
        },
        {
          "id": "i8",
          "text": "n - 1"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-699",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are writing a program to calculate the total cost of items. The program asks the\nuser for the quantity, performs a calculation, and formats a message.\n\nYou write the following code:\n\n01 price = 50\n02 qty = input(\"Enter quantity: \")\n03 total = price * int(qty)\n04 result = \"Total cost is: \" + str(total)\n05 print(result)\n\nEvaluate the code and answer the questions by selecting the correct option from each\ndrop-down list.\n\nAnswer Area\nWhat data type is qty in line 02? \n[1]\n\nWhat data type is total in line 03? \n[2]\n\nWhat data type is result in line 04? \n[3]",
      "explanation": "qty comes from input, total multiplies integers and result is constructed text.",
      "dragItems": [
        {
          "id": "i1",
          "text": "input"
        },
        {
          "id": "i2",
          "text": "print"
        },
        {
          "id": "i3",
          "text": "eval"
        },
        {
          "id": "i4",
          "text": "str"
        },
        {
          "id": "i5",
          "text": "str"
        },
        {
          "id": "i6",
          "text": "bool"
        },
        {
          "id": "i7",
          "text": "int"
        },
        {
          "id": "i8",
          "text": "float"
        },
        {
          "id": "i9",
          "text": "eval"
        },
        {
          "id": "i10",
          "text": "str"
        },
        {
          "id": "i11",
          "text": "input"
        },
        {
          "id": "i12",
          "text": "print"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "py-700",
      "chapter": "operatori-tipuri",
      "type": "dropdown",
      "question": "You are analyzing how Python handles data types during operations.\n\nReview the following code segment:\n\nval_a = \"10\"\nval_b = 2\nval_c = val_a * val_b\nval_d = int(val_a) + val_b\n\nComplete the sentences by selecting the correct data types.\n\nAnswer Area\nThe data type of val_c is: \n[1]\n\nThe data type of val_d is: \n[2]",
      "explanation": "String multiplication repeats '10' to '1010'; int('10')+2 gives integer 12.",
      "dragItems": [
        {
          "id": "i1",
          "text": "print"
        },
        {
          "id": "i2",
          "text": "eval"
        },
        {
          "id": "i3",
          "text": "str"
        },
        {
          "id": "i4",
          "text": "input"
        },
        {
          "id": "i5",
          "text": "bool"
        },
        {
          "id": "i6",
          "text": "int"
        },
        {
          "id": "i7",
          "text": "float"
        },
        {
          "id": "i8",
          "text": "str"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-701",
      "chapter": "operatori-tipuri",
      "type": "single",
      "question": "A colleague asks you to review a Python script that calculates a complex mathematical\nformula.\n\na = 3\nb = 2\nc = 4.0\n\nresult = (a * b ** 3) // c + a\n\nWhat is the displayed result when you run this code?",
      "explanation": "2**3=8, 3*8=24, 24//4.0=6.0 and adding 3 gives 9.0. print is added to make the output question executable.",
      "options": [
        "The value 27.0 is displayed.",
        "The value 6.0 is displayed.",
        "The value 9 is displayed.",
        "The value 9.0 is displayed."
      ],
      "correct": 3,
      "code": "a = 3\nb = 2\nc = 4.0\nresult = (a * b ** 3) // c + a\nprint(result)"
    },
    {
      "id": "py-702",
      "chapter": "structuri-date",
      "type": "dropdown",
      "question": "You are refactoring a code segment that calculates the average of three test scores.\nThe current code produces an incorrect result because of operator precedence.\n\n# Current incorrect code:\n# average = score1 + score2 + score3 / 3\n\nYou need to correct the code to ensure the addition happens before the division.\n\nComplete the code by selecting the correct option from the drop-down list.\n\nscore1 = 90\nscore2 = 80\nscore3 = 100\naverage = \n[1]\n\nprint(average)",
      "explanation": "Parentheses force the entire sum to be divided by 3, yielding 90.0.",
      "dragItems": [
        {
          "id": "i1",
          "text": "(score1 + score2 + score3) / 3"
        },
        {
          "id": "i2",
          "text": "[score1 + score2 + score3] / 3"
        },
        {
          "id": "i3",
          "text": "(score1 + score2 + score3) / 3()"
        },
        {
          "id": "i4",
          "text": "(score1 + score2 + score3) / 3 = None"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "py-703",
      "chapter": "operatori-tipuri",
      "type": "dropdown",
      "question": "You are verifying the behavior of division operators in Python 3.\n\nComplete the sentences by choosing the correct values and types.\n\nx = 15\ny = 4\nz = 4.0\n\nop1 = x // y\nop2 = x // z\nop3 = x / y\n\nAnswer Area\nThe value of op1 is: \n[1]\n\nThe value of op2 is: \n[2]\n\nThe value of op3 is: \n[3]",
      "explanation": "Integer floor division yields 3; a float operand yields 3.0; true division yields 3.75.",
      "dragItems": [
        {
          "id": "i1",
          "text": "3.0 (float)"
        },
        {
          "id": "i2",
          "text": "3.75 (float)"
        },
        {
          "id": "i3",
          "text": "4 (int)"
        },
        {
          "id": "i4",
          "text": "3 (int)"
        },
        {
          "id": "i5",
          "text": "3.75 (float)"
        },
        {
          "id": "i6",
          "text": "4 (int)"
        },
        {
          "id": "i7",
          "text": "3.0 (float)"
        },
        {
          "id": "i8",
          "text": "3 (int)"
        },
        {
          "id": "i9",
          "text": "4 (int)"
        },
        {
          "id": "i10",
          "text": "3.75 (float)"
        },
        {
          "id": "i11",
          "text": "3 (int)"
        },
        {
          "id": "i12",
          "text": "3.0 (float)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "py-704",
      "chapter": "operatori-tipuri",
      "type": "multiple",
      "question": "For nonnegative INTEGER item counts and a positive integer box capacity, which TWO options return an INTEGER number of full boxes?",
      "explanation": "For nonnegative counts, int(total/items) and integer // produce whole-box counts. The float conversion preserves a float result type, not an integer count.",
      "options": [
        "full_boxes = total_items % items_per_box",
        "full_boxes = int(total_items / items_per_box)",
        "full_boxes = float(total_items // items_per_box)",
        "full_boxes = total_items / items_per_box",
        "full_boxes = total_items // items_per_box"
      ],
      "correct": [
        1,
        4
      ]
    },
    {
      "id": "py-705",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "You are testing division operations to ensure data types are handled correctly.\n\nYou execute the following code:\n\nval = 11.5\ndivisor = 2.0\n\nres_a = val // divisor\nres_b = int(val / divisor)\n\nSelect the correct value and data type for each result.\n\n[1]\n\n[2]",
      "explanation": "Floor division with float operands returns 5.0; int(11.5/2.0) truncates to integer 5.",
      "dragItems": [
        {
          "id": "i1",
          "text": "0 (int)"
        },
        {
          "id": "i2",
          "text": "5.0 (float)"
        },
        {
          "id": "i3",
          "text": "5 (int)"
        },
        {
          "id": "i4",
          "text": "2.5 (float)"
        },
        {
          "id": "i5",
          "text": "5 (int)"
        },
        {
          "id": "i6",
          "text": "5.0 (float)"
        },
        {
          "id": "i7",
          "text": "2.5 (float)"
        },
        {
          "id": "i8",
          "text": "0 (int)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-706",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are writing a program to categorize a number input by the user.\nThe program must determine if the number is Positive, Negative, or Zero.",
      "explanation": "The mutually exclusive branches classify positive, negative and zero values.",
      "dragItems": [
        {
          "id": "i1",
          "text": "if"
        },
        {
          "id": "i2",
          "text": "case"
        },
        {
          "id": "i3",
          "text": "default"
        },
        {
          "id": "i4",
          "text": "switch"
        },
        {
          "id": "i5",
          "text": "else if"
        },
        {
          "id": "i6",
          "text": "if else"
        },
        {
          "id": "i7",
          "text": "then"
        },
        {
          "id": "i8",
          "text": "elif"
        },
        {
          "id": "i9",
          "text": "except"
        },
        {
          "id": "i10",
          "text": "finally"
        },
        {
          "id": "i11",
          "text": "else"
        },
        {
          "id": "i12",
          "text": "try"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ],
      "code": "num = int(input(\"Enter a number: \"))\n[1] num > 0:\n    result = \"Positive\"\n[2] num < 0:\n    result = \"Negative\"\n[3]:\n    result = \"Zero\"\nprint(result)"
    },
    {
      "id": "py-707",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "You are creating a grading script that assigns a letter grade based on a score.\n\nComplete the code segment to ensure the syntax is correct.\n\nscore = 85\nif score >= 90 \n[1]\n\n    grade = \"A\"\nelif score >= 80 \n[2]\n\n    grade = \"B\"\nelse \n[3]\n\n    grade = \"C\"\n\nprint(grade)",
      "explanation": "Every if/elif/else header ends with a colon before its indented body.",
      "dragItems": [
        {
          "id": "i1",
          "text": ";"
        },
        {
          "id": "i2",
          "text": ""
        },
        {
          "id": "i3",
          "text": " ="
        },
        {
          "id": "i4",
          "text": ":"
        },
        {
          "id": "i5",
          "text": ""
        },
        {
          "id": "i6",
          "text": " ="
        },
        {
          "id": "i7",
          "text": ":"
        },
        {
          "id": "i8",
          "text": ";"
        },
        {
          "id": "i9",
          "text": " ="
        },
        {
          "id": "i10",
          "text": ":"
        },
        {
          "id": "i11",
          "text": ";"
        },
        {
          "id": "i12",
          "text": ""
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "py-708",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "You are writing a script to control an automated vehicle based on traffic light colors.\nComplete the code segment to ensure the vehicle behaves correctly.\n\nlight_color = \"Red\"\n\nif light_color \n[1]\n \"Green\":\n    action = \"Go\"\nelif light_color \n[2]\n \"Yellow\":\n    action = \"Slow Down\"\nelse:\n    action = \"Stop\"\n\nprint(action)",
      "explanation": "== compares the light-color string; assignment is not valid here and identity is not a string-value test.",
      "dragItems": [
        {
          "id": "i1",
          "text": ">="
        },
        {
          "id": "i2",
          "text": "<="
        },
        {
          "id": "i3",
          "text": "=="
        },
        {
          "id": "i4",
          "text": "!="
        },
        {
          "id": "i5",
          "text": "<="
        },
        {
          "id": "i6",
          "text": "=="
        },
        {
          "id": "i7",
          "text": "!="
        },
        {
          "id": "i8",
          "text": ">="
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-709",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are writing a program to calculate the shipping cost for a package.\n- The base rate is $10.00.\n- If the user requests \"Priority\" shipping, $5.00 is added to the base rate.\n- If the destination is \"International\", the rate is multiplied by 2.0.\n- If the destination is \"Domestic\", the rate is multiplied by 1.2.\n\nComplete the code by selecting the correct code segment from each drop-down list.\npriority = input(\"Priority shipping? (Y/N): \").upper()\ndestination = input(\"Destination (International/Domestic): \").capitalize()\ncost = 10.00\n\nif priority == \"Y\":\n    \n[1]\n\nif destination == \"International\":\n    cost = cost * 2.0\n\n[2]\n destination == \"Domestic\":\n    cost = cost * 1.2\nelse:\n    print(\"Invalid Destination\")\n\nprint(\"Total Cost: $\", cost)",
      "explanation": "Add the priority surcharge, then use one destination branch so the correct multiplier applies once.",
      "dragItems": [
        {
          "id": "i1",
          "text": "cost += 5.00()"
        },
        {
          "id": "i2",
          "text": "cost += 5.00"
        },
        {
          "id": "i3",
          "text": "cost +== 5.00"
        },
        {
          "id": "i4",
          "text": "cost += 5::00"
        },
        {
          "id": "i5",
          "text": "elif"
        },
        {
          "id": "i6",
          "text": "else if"
        },
        {
          "id": "i7",
          "text": "if else"
        },
        {
          "id": "i8",
          "text": "then"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-710",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "You need to determine the bonus amount for employees based on their performance rating\n(1-5) and years of service.\n\n- Employees with a rating of 5 get a bonus.\n- Inside that group, those with more than 10 years experience get $1000.\n- Others with a rating of 5 get $500.\n- All other ratings get $0.\n\nComplete the code logic.\n\nrating = 5\nyears = 12\nbonus = 0\n\nif rating == 5:\n    if years > 10:\n        \n[1]\n\n    else:\n        bonus = 500\n\n[2]\n :\n    bonus = 0\n\nprint(bonus)",
      "explanation": "The nested branch assigns 1000 for rating 5 and more than 10 years. The outer else assigns zero for other ratings.",
      "dragItems": [
        {
          "id": "i1",
          "text": "bonus = 1000"
        },
        {
          "id": "i2",
          "text": "bonus == 1000"
        },
        {
          "id": "i3",
          "text": "bonus = 1000()"
        },
        {
          "id": "i4",
          "text": "bonus = 1000 = None"
        },
        {
          "id": "i5",
          "text": "try"
        },
        {
          "id": "i6",
          "text": "except"
        },
        {
          "id": "i7",
          "text": "finally"
        },
        {
          "id": "i8",
          "text": "else"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-711",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Analyze each valid comparison independently. For output predictions, omit the intentionally invalid line 07 and its body; otherwise the script cannot parse.",
      "explanation": "Analyzed independently, 10>=5 executes line 04; single = is invalid in this if; equal fives satisfy both == and >=. Remove the invalid branch before running the complete script.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "If val_a is 10 and val_b is 5, the code at line 04 will execute.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Line 07 will cause a SyntaxError because the single equals sign (=) is an assignment operator, not a comparison operator.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "If val_a and val_b are both 5, the program will print \"Equal\" and \"Greater or Equal\".",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-712",
      "chapter": "input-output",
      "type": "single",
      "question": "You are debugging a Python script that checks if a user's input matches a specific\npassword.\nThe script fails to run and displays a syntax error.\n\n# Current Code:\n# password = input(\"Enter password: \")\n# if password = \"Secret\":\n#     print(\"Access Granted\")\n\nWhich change fixes the syntax error?",
      "explanation": "== tests string value equality. A single = is assignment; is is not the correct value comparison.",
      "options": [
        "Change line 2 to: if password equals \"Secret\":",
        "Change line 1 to: password == input(\"Enter password: \")",
        "Change line 2 to: if password is \"Secret\":",
        "Change line 2 to: if password == \"Secret\":"
      ],
      "correct": 3
    },
    {
      "id": "py-713",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are writing a program that repeatedly asks the user for a text input.\nFor each input, it prints every character on a new line.\nThe program stops when the user enters \"STOP\".\n\nComplete the code by selecting the correct keywords.\n\ntext = \"Start\"\n\n\n[1]\n text != \"STOP\":\n    \n[2]\n letter \n[3]\n text:\n        print(letter)\n    text = input(\"Enter text or STOP to exit: \")",
      "explanation": "The outer sentinel loop repeats and the inner for visits every character until STOP is entered.",
      "dragItems": [
        {
          "id": "i1",
          "text": "def"
        },
        {
          "id": "i2",
          "text": "while"
        },
        {
          "id": "i3",
          "text": "import"
        },
        {
          "id": "i4",
          "text": "from"
        },
        {
          "id": "i5",
          "text": "for"
        },
        {
          "id": "i6",
          "text": "list"
        },
        {
          "id": "i7",
          "text": "name"
        },
        {
          "id": "i8",
          "text": "id"
        },
        {
          "id": "i9",
          "text": "with"
        },
        {
          "id": "i10",
          "text": "as"
        },
        {
          "id": "i11",
          "text": "from"
        },
        {
          "id": "i12",
          "text": "in"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "py-714",
      "chapter": "operatori-tipuri",
      "type": "dropdown",
      "question": "You are writing a countdown timer script.\nThe script should print numbers starting from 5 down to 1, then stop.\n\nComplete the code segment.\n\ncount = 5\n\n[1]\n count > 0:\n    print(count)\n    count = \n[2]",
      "explanation": "The condition permits 5 through 1 and decrement ensures termination at zero.",
      "dragItems": [
        {
          "id": "i1",
          "text": "while"
        },
        {
          "id": "i2",
          "text": "import"
        },
        {
          "id": "i3",
          "text": "from"
        },
        {
          "id": "i4",
          "text": "def"
        },
        {
          "id": "i5",
          "text": "count"
        },
        {
          "id": "i6",
          "text": "count + 1"
        },
        {
          "id": "i7",
          "text": "1"
        },
        {
          "id": "i8",
          "text": "count - 1"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-715",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are writing a program to print the coordinates for a chessboard (8x8 grid).\nThe rows are numbered 1 to 8, and the columns are numbered 1 to 8.\nThe output should look like: `(1,1) (1,2) ... (1,8)` for the first row, and so on.\nComplete the code by selecting the correct options.\n\ndef print_board():\n    # Loop for rows 1 to 8\n    \n[1]\n row in range(1, 9):\n        # Loop for columns 1 to 8\n        \n[2]\n col in range(1, 9):\n            print(f\"({row},{col})\",\nend=\" \")\n        print()\n\nprint_board()",
      "explanation": "Two for loops iterate rows and columns 1-8, producing 64 coordinate pairs.",
      "dragItems": [
        {
          "id": "i1",
          "text": "list"
        },
        {
          "id": "i2",
          "text": "name"
        },
        {
          "id": "i3",
          "text": "id"
        },
        {
          "id": "i4",
          "text": "for"
        },
        {
          "id": "i5",
          "text": "name"
        },
        {
          "id": "i6",
          "text": "id"
        },
        {
          "id": "i7",
          "text": "for"
        },
        {
          "id": "i8",
          "text": "list"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-716",
      "chapter": "functii",
      "type": "single",
      "question": "You are writing a loop to iterate through a list of months numbered 1 through 12.\nYou want to ensure the loop variable `month` takes on the values 1, 2, ..., 12 exactly.\nWhich `range` function call should you use?",
      "explanation": "range(1,13) includes 1 through 12 because its stop is exclusive.",
      "options": [
        "range(1, 12, 1)",
        "range(0, 12)",
        "range(1, 12)",
        "range(1, 13)"
      ],
      "correct": 3
    },
    {
      "id": "py-717",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "You review the following code segment meant to save user logs.\n\nfile = open(\"user_logs.txt\", \"w\")\nfile.write(\"Session started.\")\nfile.close()\n\nFor each statement about the code segment, select True or False.",
      "explanation": "w creates a missing file, begins at the start and truncates existing content.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "If \"user_logs.txt\" does not exist, the code will raise a FileNotFoundError.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "The \"w\" mode stands for \"write\" and places the file pointer at the beginning of the file.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "If \"user_logs.txt\" already exists, its previous content will be deleted and replaced.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-718",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are writing a program to read the contents of a configuration file.\nYou want to ensure the file is properly closed automatically after reading, even if an\nerror occurs.\n\nComplete the code by selecting the correct keywords.\n\n\n[1]\n open(\"config.txt\", \"r\") \n[2]\n config_file:\n    content = config_file.read()\n    print(content)",
      "explanation": "The file context manager closes the handle on normal exit and on exceptions.",
      "dragItems": [
        {
          "id": "i1",
          "text": "with"
        },
        {
          "id": "i2",
          "text": "as"
        },
        {
          "id": "i3",
          "text": "in"
        },
        {
          "id": "i4",
          "text": "from"
        },
        {
          "id": "i5",
          "text": "with"
        },
        {
          "id": "i6",
          "text": "in"
        },
        {
          "id": "i7",
          "text": "from"
        },
        {
          "id": "i8",
          "text": "as"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-719",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are writing a script to update a system log.\nYou need to open an existing file named \"sys_log.txt\" and add the line \"Backup Complete\"\nto the end of it, without deleting existing content.",
      "explanation": "a preserves existing content and writes at the end. The corrected text includes a newline so the added content is a line.",
      "dragItems": [
        {
          "id": "i1",
          "text": "open[\"sys_log.txt\", \"a\"]"
        },
        {
          "id": "i2",
          "text": "open()"
        },
        {
          "id": "i3",
          "text": "open(\"sys_log.txt, a\")"
        },
        {
          "id": "i4",
          "text": "open(\"sys_log.txt\", \"a\")"
        },
        {
          "id": "i5",
          "text": "log_file.write()"
        },
        {
          "id": "i6",
          "text": "log_file.write = None"
        },
        {
          "id": "i7",
          "text": "log_file.write"
        },
        {
          "id": "i8",
          "text": "log_file::write"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "log_file = [1]\n[2](\"\\nBackup Complete\\n\")\nlog_file.close()"
    },
    {
      "id": "py-720",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are writing a file cleanup script using the `os` module.\nYou need to check if a temporary file exists before attempting to remove it to avoid\nerrors.\n\nComplete the code segment.\n\nimport os\n\nfilename = \"temp_data.tmp\"\n\nif \n[1]\n (filename):\n    os.remove(filename)\n    print(\"File deleted.\")\nelse:\n    print(\"File not found.\")",
      "explanation": "isfile tests for a regular file before removal. A race or permissions error still needs handling in production.",
      "dragItems": [
        {
          "id": "i1",
          "text": "os_path.isfile"
        },
        {
          "id": "i2",
          "text": "None"
        },
        {
          "id": "i3",
          "text": "os.path.isfile"
        },
        {
          "id": "i4",
          "text": "os::path.isfile"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "py-721",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are formatting a string to display the winners of a competition in a specific order.\nThe variables are defined as follows:\nfirst = \"Gold\"\nsecond = \"Silver\"\nthird = \"Bronze\"\n\nYou want the output to be: \"Silver, Bronze, Gold\"\n\nComplete the code by selecting the correct format string.\n\nresult = \"{\n[1]\n}, {\n[2]\n}, {\n[3]\n}\".format(first, second, third)\nprint(result)",
      "explanation": "The format arguments are first,second,third, so indexes 1,2,0 yield Silver,Bronze,Gold.",
      "dragItems": [
        {
          "id": "i1",
          "text": "3"
        },
        {
          "id": "i2",
          "text": "1"
        },
        {
          "id": "i3",
          "text": "0"
        },
        {
          "id": "i4",
          "text": "2"
        },
        {
          "id": "i5",
          "text": "2"
        },
        {
          "id": "i6",
          "text": "0"
        },
        {
          "id": "i7",
          "text": "1"
        },
        {
          "id": "i8",
          "text": "3"
        },
        {
          "id": "i9",
          "text": "True"
        },
        {
          "id": "i10",
          "text": "False"
        },
        {
          "id": "i11",
          "text": "None"
        },
        {
          "id": "i12",
          "text": "0"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "py-722",
      "chapter": "input-output",
      "type": "single",
      "question": "You review the following Python code that uses f-strings to format output.\nitem = \"Notebook\"\nprice = 5\nquantity = 3\n\nprint(f\"Total for {quantity} {item}s: ${price * quantity}\")\n\nWhat is the output of the code?",
      "explanation": "The f-string substitutes quantity/item and calculates price*quantity=15.",
      "options": [
        "Total for 3 Notebooks: $price * quantity",
        "Total for 3 Notebooks: $15",
        "Total for {quantity} {item}s: ${price * quantity}",
        "Total for 3 Notebooks: $5 * 3"
      ],
      "correct": 1
    },
    {
      "id": "py-723",
      "chapter": "input-output",
      "type": "single",
      "question": "You are writing a script that asks the user for their favorite color and then prints it.\n01 print(\"What is your favorite color?\")\n02 # Missing Code\n03 print(color)\n\nWhich line of code should you write at line 02 to correctly assign the user's input to\nthe variable `color`?",
      "explanation": "Call input() and assign its returned string to color.",
      "options": [
        "input(color)",
        "color = input",
        "input(\"color\")",
        "color = input()"
      ],
      "correct": 3
    },
    {
      "id": "py-724",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You want to optimize your code to prompt the user and capture input in a single line.\nCurrent Code:\nprint(\"Enter your username:\")\nuser = input()\n\nComplete the code to achieve the same result in one line.\n\nuser = \n[1]\n (\"Enter your username: \")",
      "explanation": "input can display its prompt and return the user's entered text in one call.",
      "dragItems": [
        {
          "id": "i1",
          "text": "progress"
        },
        {
          "id": "i2",
          "text": "output"
        },
        {
          "id": "i3",
          "text": "input"
        },
        {
          "id": "i4",
          "text": "meter"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "py-725",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "For each statement regarding the `input()` function in Python, select True or False.",
      "explanation": "input accepts a prompt, returns a string and waits for a completed input line rather than automatically converting numbers.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "You can display a prompt message to the user by passing a string argument inside the parentheses, like `input(\"Name: \")`.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The `input()` function automatically converts numbers typed by the user into integers.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "When `input()` is called, the program pause execution and waits for the user to press Enter.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-726",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are writing a function to print a formatted payroll report.\nThe requirements for the columns are:\n1. Employee Name (Index 0): Left-aligned, 15 characters wide.\n2. Hours Worked (Index 1): Right-aligned, 5 characters wide, 1 decimal place.\nComplete the code logic by selecting the correct format strings.\n\ndata = [\"Alice\", 40.5]\nprint(\"{\n[1]\n}, {\n[2]\n}\".format(data[0], data[1]))",
      "explanation": "<15 left-aligns the name; >5.1f right-aligns the numeric hours with one decimal place.",
      "dragItems": [
        {
          "id": "i1",
          "text": "0:<15"
        },
        {
          "id": "i2",
          "text": "0:<15()"
        },
        {
          "id": "i3",
          "text": "0:<15 = None"
        },
        {
          "id": "i4",
          "text": "1:>5::1f"
        },
        {
          "id": "i5",
          "text": "1:>5.1f()"
        },
        {
          "id": "i6",
          "text": "1:>5.1f = None"
        },
        {
          "id": "i7",
          "text": "1:>5.1f"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i4",
            "i5",
            "i6",
            "i7"
          ]
        }
      ]
    },
    {
      "id": "py-727",
      "chapter": "structuri-control",
      "type": "drag_drop",
      "question": "Vladislav is writing a Python script to calculate the annual budget for a project in Chisinau. The script includes multiple operations on the same line. You need to determine the correct order of precedence.\n\nMove the type of operation from the list on the left to the correct locations on the\nright, with the type of operation that will be performed first at the top and the type\nof operation that will be performed last at the bottom.\n\nOperation type performed first: \nOperation type performed second: \nOperation type performed third: \nOperation type performed fourth: \nOperation type performed fifth: \nOperation type performed last:",
      "explanation": "Arithmetic precedes the shared comparison/identity/membership precedence level, followed by not, and, and or. Assignment statements bind the resulting values and are not a higher-precedence expression operator.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Arithmetic"
        },
        {
          "id": "i2",
          "text": "Comparisons, identity and membership"
        },
        {
          "id": "i3",
          "text": "not"
        },
        {
          "id": "i4",
          "text": "and"
        },
        {
          "id": "i5",
          "text": "or"
        },
        {
          "id": "i6",
          "text": "Assignment statement"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "First precedence level",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Second precedence level",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Third precedence level",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Fourth precedence level",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "Fifth precedence level",
          "correctItemId": "i5"
        },
        {
          "id": "z6",
          "label": "Bind the completed result",
          "correctItemId": "i6"
        }
      ]
    },
    {
      "id": "py-728",
      "chapter": "structuri-date",
      "type": "drag_drop",
      "question": "Vladislav needs to verify the data types of various expressions used in his \"Moldova Tours\" application.\n\nMove the appropriate data types from the list to the correct type operations on the\nright.\nYou may use each data type once, more than once, or not at all.\n\ntype(2025) → \ntype(19.99) → \ntype(\"Voitcovschi\") → \ntype(50 > 10) →",
      "explanation": "An integer literal is int, a decimal literal is float, quoted text is str, and a comparison produces bool.",
      "dragItems": [
        {
          "id": "i1",
          "text": "int"
        },
        {
          "id": "i2",
          "text": "float"
        },
        {
          "id": "i3",
          "text": "str"
        },
        {
          "id": "i4",
          "text": "bool"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "type(2025) →",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "type(19.99) →",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "type(\"Voitcovschi\") →",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "type(50 > 10) →",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "py-729",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "You are writing a test for a function that validates user input for a Moldovan e-governance app.\nYou need to test whether the user's name is stored as a string.",
      "explanation": "unittest tests inherit from TestCase and use test-prefixed methods. assertIsInstance checks the supplied type, while the main guard runs the test runner only when executed directly.",
      "dragItems": [
        {
          "id": "i1",
          "text": "def"
        },
        {
          "id": "i2",
          "text": "class"
        },
        {
          "id": "i3",
          "text": "import"
        },
        {
          "id": "i4",
          "text": "from"
        },
        {
          "id": "i5",
          "text": "import"
        },
        {
          "id": "i6",
          "text": "unittest.TestCase"
        },
        {
          "id": "i7",
          "text": "test_name_is_string(self)"
        },
        {
          "id": "i8",
          "text": "str"
        },
        {
          "id": "i9",
          "text": "__name__"
        },
        {
          "id": "i10",
          "text": "test_name_is_string(self)"
        },
        {
          "id": "i11",
          "text": "test_name_is_string[self]"
        },
        {
          "id": "i12",
          "text": "test_name_is_string()"
        },
        {
          "id": "i13",
          "text": "test_name_is_string(\"self\")"
        },
        {
          "id": "i14",
          "text": "input"
        },
        {
          "id": "i15",
          "text": "print"
        },
        {
          "id": "i16",
          "text": "eval"
        },
        {
          "id": "i17",
          "text": "str"
        },
        {
          "id": "i18",
          "text": "__file__"
        },
        {
          "id": "i19",
          "text": "__doc__"
        },
        {
          "id": "i20",
          "text": "__name__"
        },
        {
          "id": "i21",
          "text": "__main__"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8",
            "i9"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i10",
            "i11",
            "i12",
            "i13"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i17",
          "optionIds": [
            "i14",
            "i15",
            "i16",
            "i17"
          ]
        },
        {
          "id": "z5",
          "label": "Blank [5]",
          "correctItemId": "i20",
          "optionIds": [
            "i18",
            "i19",
            "i20",
            "i21"
          ]
        }
      ],
      "code": "[1] unittest\nclass TestVladislavInput([2]):\n    def [3]:\n        user_name = \"Vladislav\"\n        self.assertIsInstance(user_name, [4])\n\nif [5] == \"__main__\":\n    unittest.main()"
    },
    {
      "id": "py-730",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Vladislav is creating a program that reads a configuration file named \"moldova_settings.cfg\".\nThe program must properly handle the error if the file is missing from the directory.",
      "explanation": "try protects the file-opening operation and FileNotFoundError handles the specific missing-file condition.",
      "dragItems": [
        {
          "id": "i1",
          "text": "try ="
        },
        {
          "id": "i2",
          "text": "try:"
        },
        {
          "id": "i3",
          "text": "try;"
        },
        {
          "id": "i4",
          "text": "try"
        },
        {
          "id": "i5",
          "text": "except FileNotFoundError:"
        },
        {
          "id": "i6",
          "text": "except FileNotFoundError;"
        },
        {
          "id": "i7",
          "text": "except FileNotFoundError"
        },
        {
          "id": "i8",
          "text": "except FileNotFoundError ="
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "while True:\n    [1]\n        filename = \"moldova_settings.cfg\"\n        with open(filename, \"r\") as config:\n            print(\"Settings loaded successfully.\")\n        break\n    [2]\n        print(\"Settings file not found. Creating default...\")\n        break"
    },
    {
      "id": "py-731",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "Vladislav is documenting exception handling standards for his team in Chisinau.\nFor each statement about try statements, select True or False.",
      "explanation": "try may be paired with finally without except; else runs only after a successful try block; finally normally runs regardless of an exception; both else and finally are permitted with except.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A try block must be followed by at least one except block.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Code in the else block will execute if an exception is caught.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Code in the finally block is executed only if no exceptions occur.",
          "correctItemId": "no"
        },
        {
          "id": "z4",
          "label": "A try statement can have both an else and a finally block.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-732",
      "chapter": "input-output",
      "type": "single",
      "question": "Vladislav is writing a script to prompt a user for their city of residence in Moldova. Which statement is the correct one to get this input?",
      "explanation": "input displays a prompt and returns the entered text as a string.",
      "options": [
        "city = get.user()",
        "city = input(\"Enter your city: \")",
        "city = get_name()",
        "city = print(\"Enter your city: \")"
      ],
      "correct": 1
    },
    {
      "id": "py-733",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are debugging a loop that counts votes for a local election in Balti. There are syntax errors at lines 02 and 04.\n\n01 votes = 0\n02 while votes < 100\n03     votes = int(input(\"Enter batch size: \"))\n04     if votes > 50\n05         print(\"Majority batch!\")\n06     else:\n07         print(\"Minority batch.\")\n\nSelect the correct code corrections.\nLine 02: \n[1]\n\nLine 04: \n[2]",
      "explanation": "Python compound statement headers require a trailing colon before their indented suites.",
      "dragItems": [
        {
          "id": "i1",
          "text": "while votes < 100"
        },
        {
          "id": "i2",
          "text": "while votes < 100 ="
        },
        {
          "id": "i3",
          "text": "while votes < 100:"
        },
        {
          "id": "i4",
          "text": "while votes < 100;"
        },
        {
          "id": "i5",
          "text": "if votes > 50 ="
        },
        {
          "id": "i6",
          "text": "if votes > 50:"
        },
        {
          "id": "i7",
          "text": "if votes > 50;"
        },
        {
          "id": "i8",
          "text": "if votes > 50"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-734",
      "chapter": "structura-cod",
      "type": "single",
      "question": "Vladislav wants to add a note to his code explaining that the currency used is MDL.\nWhat is the correct way to create a single-line comment in Python?",
      "explanation": "The hash character starts a Python comment outside a string literal.",
      "options": [
        "Place the note after `/*` on any line.",
        "Use the `#` character before the text.",
        "Place the note within ``.",
        "Use the `//` character before the text."
      ],
      "correct": 1
    },
    {
      "id": "py-735",
      "chapter": "functii",
      "type": "dropdown",
      "question": "Review the function below which calculates the total price of a product including Moldovan VAT.\n\n01 def calculate_price(price, vat=0.20, discount=0.0):\n02     total = price * (1 + vat) - discount\n03     return total\n04\n05 vat = 0.08\n06 final = calculate_price(100)\n\nSelect True or False for each statement.",
      "explanation": "The parameter default is defined in the function signature. A separate global vat does not replace that parameter, and the other two parameters have defaults.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "To change the default VAT to 8%, line 01 must be: def calculate_price(price, vat=0.08, discount=0.0).",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Calling `calculate_price(100)` uses the global variable `vat` from line 05 inside the function.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The function can be called with just one argument.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "py-736",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Vladislav is creating a simple lottery game for a raffle in Chisinau.\nThe code needs to pick a random winner from a list.\n\nimport random\nparticipants = [\"Ion\", \"Maria\", \"Elena\", \"Andrei\"]\n\n# Select a random winner\nwinner = random.\n[1]\n\nprint(f\"The winner is {winner}!\")",
      "explanation": "random.choice selects one element from a nonempty sequence.",
      "dragItems": [
        {
          "id": "i1",
          "text": "choice[participants]"
        },
        {
          "id": "i2",
          "text": "choice()"
        },
        {
          "id": "i3",
          "text": "choice(\"participants\")"
        },
        {
          "id": "i4",
          "text": "choice(participants)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "py-737",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Vladislav is creating a script to organize files for the \"Moldova IT Summit\". The program needs to check if a folder named \"Presentations\" exists, and if so, list its contents.",
      "explanation": "isdir checks that the path is a directory, and listdir enumerates its entry names.",
      "dragItems": [
        {
          "id": "i1",
          "text": "os_path.isdir(\"Presentations\")"
        },
        {
          "id": "i2",
          "text": "None"
        },
        {
          "id": "i3",
          "text": "os.path.isdir(\"Presentations\")"
        },
        {
          "id": "i4",
          "text": "os::path.isdir(\"Presentations\")"
        },
        {
          "id": "i5",
          "text": "None"
        },
        {
          "id": "i6",
          "text": "os.listdir(\"Presentations\")"
        },
        {
          "id": "i7",
          "text": "os::listdir(\"Presentations\")"
        },
        {
          "id": "i8",
          "text": "os_listdir(\"Presentations\")"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "import os\nif [1]:\n    for file in [2]:\n        print(file)"
    },
    {
      "id": "py-738",
      "chapter": "structuri-control",
      "type": "drag_drop",
      "question": "Vladislav needs to slice data strings for vehicle registration plates in Chisinau.\n\nplate = \"CJA-123\"\nnums = [10, 20, 30, 40, 50]\n\nMatch the code to the result.\n\nplate[0:3] \nnums[1:3] \nnums[::-1]",
      "explanation": "Slice endpoints exclude the stop index. A step of -1 reverses the sequence.",
      "dragItems": [
        {
          "id": "i1",
          "text": "\"CJA\""
        },
        {
          "id": "i2",
          "text": "\"123\""
        },
        {
          "id": "i3",
          "text": "[20, 30]"
        },
        {
          "id": "i4",
          "text": "[10, 20, 30]"
        },
        {
          "id": "i5",
          "text": "[50, 40, 30, 20, 10]"
        },
        {
          "id": "i6",
          "text": "[50, 40, 30]"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "plate[0:3]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "nums[1:3]",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "nums[::-1]",
          "correctItemId": "i5"
        }
      ]
    },
    {
      "id": "py-739",
      "chapter": "input-output",
      "type": "multiple",
      "question": "You are writing a weather script for \"Meteo Moldova\".\nThe output must format the city and temperature (1 decimal place) like this:\n\"Chisinau, 25.5\"\n\ncity = \"Chisinau\"\ntemp = 25.46\n\nWhich two code segments work? (Choose 2)",
      "explanation": "Both format specifications round the displayed value to one decimal place. String concatenation with a float fails, and placing .1f outside braces prints literal text.",
      "options": [
        "print(f\"{city}, {temp:.1f}\")",
        "print(\"{0}, {1:.1f}\".format(city, temp))",
        "print(city + \", \" + round(temp, 1))",
        "print(f\"{city}, {temp}.1f\")"
      ],
      "correct": [
        0,
        1
      ]
    },
    {
      "id": "py-740",
      "chapter": "gestionare-erori",
      "type": "dropdown",
      "question": "Vladislav is calculating the total cost of equipment for a school lab.\n\n01 def calculate_total(price, count):\n02     return price * count\n03 cost = input(\"Enter price: \")\n04 qty = input(\"Enter quantity: \")\n05 total = calculate_total(cost, qty)\n06 print(\"Total is \" + str(total))\n\nSelect True or False.",
      "explanation": "input returns strings. Multiplying two strings raises TypeError rather than calculating a numeric product.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 05 successfully calculates the numeric product of the entered values.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Line 05 raises TypeError inside the function because both inputs are strings.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "input() returns an integer by default.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "py-741",
      "chapter": "functii",
      "type": "dropdown",
      "question": "A data analyst in Tiraspol needs to count how many times the value \"Error\" appears in a log list.\n\ndef count_errors(log_list, target):\n    count = 0\n    for \n[1]\n:\n        if \n[2]\n:\n            count += 1\n    return count",
      "explanation": "Iterate over every entry and increment the counter only when it equals the target.",
      "dragItems": [
        {
          "id": "i1",
          "text": "log_list in entry"
        },
        {
          "id": "i2",
          "text": "entry is log_list"
        },
        {
          "id": "i3",
          "text": "entry in log_list"
        },
        {
          "id": "i4",
          "text": "entry == log_list"
        },
        {
          "id": "i5",
          "text": "entry == target = None"
        },
        {
          "id": "i6",
          "text": "entry == target"
        },
        {
          "id": "i7",
          "text": "entry === target"
        },
        {
          "id": "i8",
          "text": "entry == target()"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-742",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Vladislav is writing a script to calculate the sum of donations collected for a charity in Chisinau. The program should accept numbers until the user types \"end\".\n\ntotal = 0\nuser_input = \"0\"\n\n[1]\n user_input != \"end\":\n    total += int(user_input)\n    user_input = input(\"Enter amount or 'end': \")\nprint(total)",
      "explanation": "while repeatedly accumulates numeric input until the sentinel end is read. The initial zero contributes nothing.",
      "dragItems": [
        {
          "id": "i1",
          "text": "def"
        },
        {
          "id": "i2",
          "text": "while"
        },
        {
          "id": "i3",
          "text": "import"
        },
        {
          "id": "i4",
          "text": "from"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "py-743",
      "chapter": "input-output",
      "type": "multiple",
      "question": "Vladislav needs to define two functions for a banking app in Moldova.\nLine 01 must define a function to get a loan amount.\nLine 04 must define a function that takes the amount and interest rate as parameters.\n\n01 __\n02     amount = float(input(\"Enter loan MDL: \"))\n03     return amount\n04 __\n05     return amount * (1 + rate)\n\nWhich two code segments should be used? (Choose 2)",
      "explanation": "get_loan_amount needs no input parameter because it prompts internally; calculate_final needs both amount and rate.",
      "options": [
        "01 def get_loan_amount():",
        "01 def get_loan_amount(amount):",
        "04 def calculate_final(amount, rate):",
        "04 def calculate_final():",
        "04 def calculate_final(rate):"
      ],
      "correct": [
        0,
        2
      ]
    },
    {
      "id": "py-744",
      "chapter": "module-librarii",
      "type": "single",
      "question": "Vladislav wrote a function to generate a random ticket ID for an event in Soroca.\n\n01 def generate_id():\n02     ticket = randint(1, 1000)\n03     return ticket\n\nRunning the code causes an error on line 02. What is the cause?",
      "explanation": "The unqualified name randint must be imported, for example with from random import randint, before it can be called.",
      "options": [
        "The `random` library or `randint` function was not imported.",
        "randint only accepts one parameter.",
        "Python does not have a random library.",
        "Line 02 should be `ticket = random(1, 1000)`."
      ],
      "correct": 0
    },
    {
      "id": "py-745",
      "chapter": "functii",
      "type": "dropdown",
      "question": "Vladislav is manually implementing a function to reverse a list of task IDs without using `.reverse()`.\n\ndef reverse_tasks(task_list):\n    new_list = []\n    index = \n[1]\n\n    while index >= 0:\n        new_list.append(\n[2]\n)\n        index -= 1\n    return new_list",
      "explanation": "Start at the last valid index, append that element, and decrement through index zero.",
      "dragItems": [
        {
          "id": "i1",
          "text": "len(task_list) - 1()"
        },
        {
          "id": "i2",
          "text": "len(task_list) - 1 = None"
        },
        {
          "id": "i3",
          "text": "len(task_list) - 1"
        },
        {
          "id": "i4",
          "text": "len[task_list] - 1"
        },
        {
          "id": "i5",
          "text": "task_list[index] = None"
        },
        {
          "id": "i6",
          "text": "task_list[index]"
        },
        {
          "id": "i7",
          "text": "task_list(index)"
        },
        {
          "id": "i8",
          "text": "task_list[index]()"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-746",
      "chapter": "input-output",
      "type": "single",
      "question": "Vladislav calculates discounts for an online store.\n\norder_total = 120\nnew_customer = False\n\nif order_total > 100 and new_customer == True:\n    discount = 0.20\nelif order_total > 50 and new_customer == False:\n    discount = 0.10\nelse:\n    discount = 0.05\n\nfinal_price = order_total * (1 - discount)\nprint(final_price)\n\nWhat value is printed?",
      "explanation": "The first branch fails because new_customer is False; the second applies a 10% discount, giving 120 times 0.9 = 108.0.",
      "options": [
        "108.0",
        "96.0",
        "114.0",
        "120.0"
      ],
      "correct": 0
    },
    {
      "id": "py-747",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Vladislav is creating a file-manipulation program to save daily logs for a server in Chisinau. The program must: - Create the file if it doesn't exist. - Overwrite any existing content with the new log data.\n\nimport os\nfile = \n[1]\n\nfile.\n[2]\n(\"Server started successfully.\")\nfile.close()",
      "explanation": "Mode w creates a missing file or truncates an existing one. write stores the supplied text.",
      "dragItems": [
        {
          "id": "i1",
          "text": "open(\"daily.log\", \"w\")"
        },
        {
          "id": "i2",
          "text": "open[\"daily.log\", \"w\"]"
        },
        {
          "id": "i3",
          "text": "open()"
        },
        {
          "id": "i4",
          "text": "open(\"daily.log, w\")"
        },
        {
          "id": "i5",
          "text": "open"
        },
        {
          "id": "i6",
          "text": "read"
        },
        {
          "id": "i7",
          "text": "close"
        },
        {
          "id": "i8",
          "text": "write"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-748",
      "chapter": "module-librarii",
      "type": "single",
      "question": "Vladislav is writing a script to calculate the area of a circular zone in \"Stefan cel Mare\" park.\nHe needs to use the value of Pi.\n\nWhich code segment correctly imports and uses the constant?",
      "explanation": "math.pi is the correctly named constant in the math module. Pi and pie are different names.",
      "options": [
        "import math\narea = math.pi * (radius ** 2)",
        "import math\narea = math.pie * (radius ** 2)",
        "from math import pi\narea = Pi * (radius ** 2)",
        "import pi\narea = pi.value * (radius ** 2)"
      ],
      "correct": 0
    },
    {
      "id": "py-749",
      "chapter": "module-librarii",
      "type": "dropdown",
      "question": "You are building a Python program for a Moldovan quiz game.\nThe program needs to generate a random even number between 10 and 20 (inclusive of 10, exclusive of 22).",
      "explanation": "randrange(10,22,2) chooses from 10,12,14,16,18,20 because the stop value is excluded.",
      "dragItems": [
        {
          "id": "i1",
          "text": "choice"
        },
        {
          "id": "i2",
          "text": "sample"
        },
        {
          "id": "i3",
          "text": "randrange"
        },
        {
          "id": "i4",
          "text": "randint"
        },
        {
          "id": "i5",
          "text": "2"
        },
        {
          "id": "i6",
          "text": "10"
        },
        {
          "id": "i7",
          "text": "0"
        },
        {
          "id": "i8",
          "text": "1"
        },
        {
          "id": "i9",
          "text": "22"
        },
        {
          "id": "i10",
          "text": "0"
        },
        {
          "id": "i11",
          "text": "1"
        },
        {
          "id": "i12",
          "text": "2"
        },
        {
          "id": "i13",
          "text": "0"
        },
        {
          "id": "i14",
          "text": "1"
        },
        {
          "id": "i15",
          "text": "3"
        },
        {
          "id": "i16",
          "text": "2"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i16",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ],
      "code": "from random import randrange\nrandom_num = [1]([2], [3], [4])\nprint(random_num)"
    },
    {
      "id": "py-750",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Vladislav is processing a list of cities in Moldova.\nHe needs to stop the loop immediately when \"Balti\" is found.\n\ncities = [\"Chisinau\", \"Orhei\", \"Balti\", \"Cahul\"]\nfor city in cities:\n    print(city)\n    if city == \"Balti\":\n        \n[1]",
      "explanation": "break exits the nearest enclosing loop immediately after Balti is printed.",
      "dragItems": [
        {
          "id": "i1",
          "text": "pass"
        },
        {
          "id": "i2",
          "text": "break"
        },
        {
          "id": "i3",
          "text": "raise"
        },
        {
          "id": "i4",
          "text": "return"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "py-751",
      "chapter": "structuri-date",
      "type": "single",
      "question": "Vladislav wants to add a new student \"Elena\" to the end of his class list.\n\nstudents = [\"Ion\", \"Ana\", \"Mihai\"]\n\nWhich method should he use?",
      "explanation": "append adds one element at the end of a Python list.",
      "options": [
        "students.append(\"Elena\")",
        "students.insert(\"Elena\")",
        "students.add(\"Elena\")",
        "students.push(\"Elena\")"
      ],
      "correct": 0
    },
    {
      "id": "py-752",
      "chapter": "input-output",
      "type": "single",
      "question": "Vladislav is running a Python script from the command line to process election data. Script: vote_counter.py Command: python vote_counter.py chisinau balti\n\nCode:\nimport sys\nprint(sys.argv[1])\n\nWhat is the output?",
      "explanation": "sys.argv[0] is the script name and sys.argv[1] is the first supplied argument, chisinau.",
      "options": [
        "chisinau",
        "balti",
        "vote_counter.py",
        "sys.argv"
      ],
      "correct": 0
    },
    {
      "id": "py-753",
      "chapter": "structuri-control",
      "type": "single",
      "question": "Vladislav is double-checking a calculation for a construction project.\n\na = 5\nb = 3\nc = 2\n\nresult = a + b * c ** c\n\nWhat is the `result`?",
      "explanation": "Exponentiation gives 2**2 = 4, multiplication gives 3*4 = 12, and addition gives 17.",
      "options": [
        "17",
        "32",
        "20",
        "11"
      ],
      "correct": 0
    },
    {
      "id": "py-754",
      "chapter": "operatori-tipuri",
      "type": "dropdown",
      "question": "Vladislav is writing logic to compare the population of two Moldovan villages.\n\npop_a = 1500\npop_b = 2000\n\n\n[1]\n\n    print(\"Village A is larger\")\n\n[2]\n\n    print(\"Village A is smaller or equal\")",
      "explanation": "The if branch handles a larger population and else handles every remaining comparison outcome.",
      "dragItems": [
        {
          "id": "i1",
          "text": "if pop_a > pop_b ="
        },
        {
          "id": "i2",
          "text": "if pop_a > pop_b:"
        },
        {
          "id": "i3",
          "text": "if pop_a > pop_b;"
        },
        {
          "id": "i4",
          "text": "if pop_a > pop_b"
        },
        {
          "id": "i5",
          "text": "else:"
        },
        {
          "id": "i6",
          "text": "else;"
        },
        {
          "id": "i7",
          "text": "else"
        },
        {
          "id": "i8",
          "text": "else ="
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "py-755",
      "chapter": "functii",
      "type": "dropdown",
      "question": "Vladislav needs to set ticket prices for \"Cinema Patria\" based on age.\n- Under 12: 50 MDL\n- 12 to 18: 80 MDL\n- Over 18: 120 MDL\n\ndef get_price(age):\n    price = 0\n    \n[1]\n\n        price = 50\n    \n[2]\n\n        price = 80\n    \n[3]\n\n        price = 120\n    return price",
      "explanation": "The first test handles under-12 ages, the second includes 12 through 18, and else handles older customers.",
      "dragItems": [
        {
          "id": "i1",
          "text": "if age < 12:"
        },
        {
          "id": "i2",
          "text": "if age < 12;"
        },
        {
          "id": "i3",
          "text": "if age < 12"
        },
        {
          "id": "i4",
          "text": "if age < 12 ="
        },
        {
          "id": "i5",
          "text": "elif age <= 18;"
        },
        {
          "id": "i6",
          "text": "elif age <= 18"
        },
        {
          "id": "i7",
          "text": "elif age <= 18 ="
        },
        {
          "id": "i8",
          "text": "elif age <= 18:"
        },
        {
          "id": "i9",
          "text": "else"
        },
        {
          "id": "i10",
          "text": "else ="
        },
        {
          "id": "i11",
          "text": "else:"
        },
        {
          "id": "i12",
          "text": "else;"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "py-756",
      "chapter": "structuri-control",
      "type": "single",
      "question": "Review the code loop used in a countdown script.\n\ni = 5\ntotal = 0\nwhile (i > 0):\n    total += i\n    i -= 1\n    if i == 2:\n        break\nprint(total)\n\nWhat is the final value of `total`?",
      "explanation": "The loop adds 5, 4, and 3. After decrementing i to 2 it breaks, so total is 12.",
      "options": [
        "12",
        "15",
        "9",
        "5"
      ],
      "correct": 0
    },
    {
      "id": "py-757",
      "chapter": "structuri-control",
      "type": "dropdown",
      "question": "Vladislav is writing a script to sum up all even invoice numbers from a list in a Chisinau accounting office.",
      "explanation": "Initialize the accumulator, test divisibility by two, and add only even numbers; the final sum is 650.",
      "dragItems": [
        {
          "id": "i1",
          "text": "if num % 2 == 0:"
        },
        {
          "id": "i2",
          "text": "total_sum += num"
        },
        {
          "id": "i3",
          "text": "total_sum = 0"
        },
        {
          "id": "i4",
          "text": "if num % 2 = 0:"
        },
        {
          "id": "i5",
          "text": "if num % 2 == 0:"
        },
        {
          "id": "i6",
          "text": "if num % 2 == 0;"
        },
        {
          "id": "i7",
          "text": "if num % 2 == 0"
        },
        {
          "id": "i8",
          "text": "total_sum = 0"
        },
        {
          "id": "i9",
          "text": "if num % 2 == 0:"
        },
        {
          "id": "i10",
          "text": "total_sum += num"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i4",
            "i5",
            "i6",
            "i7"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i8",
            "i9",
            "i10"
          ]
        }
      ],
      "code": "[1]\nfor num in range(1, 51):\n    [2]\n        [3]\nprint(total_sum)"
    },
    {
      "id": "py-758",
      "chapter": "functii",
      "type": "dropdown",
      "question": "Vladislav is reviewing a colleague's code for a Moldovan logistics app.\n\n01 # Function to log delivery status\n02 def log_status(status):\n03     print(status) # Prints to console\n04     return True\n\nSelect True or False for each statement.",
      "explanation": "A leading hash starts a comment, an inline hash starts a trailing comment, and that comment is not required for print to execute.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 01 is ignored by the Python interpreter.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Line 03 contains an inline comment.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The hash symbol (#) is mandatory on line 03 for the code to run.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "py-759",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "You are creating a \"Guess the Lucky Number\" game for a raffle in Comrat.\nThe user has 3 attempts to guess the number.",
      "explanation": "The loop allows three guesses, break exits after success, and incrementing tries limits failed attempts.",
      "dragItems": [
        {
          "id": "i1",
          "text": "while tries <= 3:"
        },
        {
          "id": "i2",
          "text": "while tries <= 3;"
        },
        {
          "id": "i3",
          "text": "while tries <= 3"
        },
        {
          "id": "i4",
          "text": "while tries <= 3 ="
        },
        {
          "id": "i5",
          "text": "raise"
        },
        {
          "id": "i6",
          "text": "return"
        },
        {
          "id": "i7",
          "text": "pass"
        },
        {
          "id": "i8",
          "text": "break"
        },
        {
          "id": "i9",
          "text": "tries += 1"
        },
        {
          "id": "i10",
          "text": "while tries <= 3:"
        },
        {
          "id": "i11",
          "text": "break"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11"
          ]
        }
      ],
      "code": "from random import randint\ntarget = randint(1, 10)\ntries = 1\n[1]\n    guess = int(input(\"Guess: \"))\n    if guess == target:\n        print(\"Win!\")\n        [2]\n    [3]"
    },
    {
      "id": "py-760",
      "chapter": "input-output",
      "type": "dropdown",
      "question": "Vladislav needs to categorize wine vintages for \"Cricova\" based on age.\n- Less than 3 years: \"Fresh\"\n- 3 to 10 years: \"Mature\"\n- Over 10 years: \"Vintage\"\n\nage = int(input(\"Enter wine age: \"))\ncategory = \"Unknown\"\n\n\n[1]\n\n    category = \"Fresh\"\n\n[2]\n\n    category = \"Mature\"\n\n[3]\n\n    category = \"Vintage\"",
      "explanation": "The ordered conditions cover ages below 3, ages 3 through 10, and ages above 10 without overlap.",
      "dragItems": [
        {
          "id": "i1",
          "text": "if age < 3;"
        },
        {
          "id": "i2",
          "text": "if age < 3"
        },
        {
          "id": "i3",
          "text": "if age < 3 ="
        },
        {
          "id": "i4",
          "text": "if age < 3:"
        },
        {
          "id": "i5",
          "text": "elif age <= 10"
        },
        {
          "id": "i6",
          "text": "elif age <= 10 ="
        },
        {
          "id": "i7",
          "text": "elif age <= 10:"
        },
        {
          "id": "i8",
          "text": "elif age <= 10;"
        },
        {
          "id": "i9",
          "text": "else ="
        },
        {
          "id": "i10",
          "text": "else:"
        },
        {
          "id": "i11",
          "text": "else;"
        },
        {
          "id": "i12",
          "text": "else"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "py-761",
      "chapter": "structuri-control",
      "type": "single",
      "question": "Vladislav is testing the order of operations for a financial report calculation.\n\nx = 10\ny = 5\nz = 2\n\nresult = x + y * z ** 2\n\nWhat is the result?",
      "explanation": "Exponentiation occurs first: 2**2 = 4. Then 5*4 = 20 and 10+20 = 30.",
      "options": [
        "30",
        "60",
        "40",
        "100"
      ],
      "correct": 0
    }
  ]
};
