/* =====================================================================
   CORECTURI PENTRU ÎNTREBĂRILE PYTHON
   Se încarcă DUPĂ data/python.js și îl corectează la pornirea site-ului:
   - elimină întrebările duplicate,
   - repară capitolele inexistente (operatori-tipuri-date, structura-documentare),
   - repară răspunsuri greșite și întrebări stricate,
   - mută codul din textul întrebării în blocul de cod, cu indentare corectă.
   ===================================================================== */
(function () {
  "use strict";
  const c = (s) => s.replace(/^\n/, "").replace(/\s+$/, "");

  const CHAPTER_MAP = {
    "operatori-tipuri-date": "operatori-tipuri",
    "structura-documentare": "structura-cod"
  };

  // duplicate exacte (rămâne varianta mai curată)
  const REMOVE = [
    "py-src-45", "py-src-79", "py-src-143", "py-src-52", "py-src-38", "py-src-161",
    "py-src-35", "py-637", "py-636", "py-638", "py-src-162",
    "py-src-3a", "py-src-3b", "py-src-3c", "py-src-23"
  ];

  const FIXES = {
    "py-src-45": { question: "Consider the code below. Which line assigns <class 'list'> to x?", code: "t = ([10, 20], 10, False)" },
    "py-src-79": { question: "Which expression evaluates to 4?", options: ["7//2-3", "7%2+3", "7/2*3", "7-2*3"], correct: 1 },
    "py-src-38": { question: "To print 2 as output, which code should be inserted at Line-1?", code: c(`
s = 'Python is easy'
s1 = s[6:-4]
# Line-1
print(len(s2))`) },
    "py-src-162": { question: "You develop a Python application for your company. You need to accept input from the user and print that information to the user screen. Which code should you write at line 02?", code: c(`
01 print('What is your name?')
02 ____________
03 print(name)`) },
    "py-src-3a": { question: "Care două tipuri de date sunt stocate în dicționarul rooms la linia 01?", code: c(`
01 rooms = {1: 'Left Conference Room', 2: 'Right conference Room'}
02 room = input('Enter the room number: ')
03 if room not in rooms:
04     print('The room does not exist.')
05 else:
06     print('The room name is ' + rooms[room])`) },
    "py-src-3b": { code: c(`
01 rooms = {1: 'Left Conference Room', 2: 'Right conference Room'}
02 room = input('Enter the room number: ')
03 if room not in rooms:
04     print('The room does not exist.')
05 else:
06     print('The room name is ' + rooms[room])`) },
    "py-src-3c": { code: c(`
01 rooms = {1: 'Left Conference Room', 2: 'Right conference Room'}
02 room = input('Enter the room number: ')
03 if room not in rooms:
04     print('The room does not exist.')
05 else:
06     print('The room name is ' + rooms[room])`) },
    "py-src-23": { dragItems: [
        { id: "seg_mixed", text: "else:\n    print(name, \"is mixed case.\")" },
        { id: "seg_else_lower", text: "else:\n    print(name, \"is lower case.\")" },
        { id: "seg_input", text: "name = input(\"Enter your name: \")" },
        { id: "seg_else_upper", text: "else:\n    print(name, \"is upper case.\")" },
        { id: "seg_elif_upper", text: "elif name.upper() == name:\n    print(name, \"is all upper case.\")" },
        { id: "seg_if_lower", text: "if name.lower() == name:\n    print(name, \"is all lower case.\")" }
      ] },
    "py-src-35": { question: "Consider the code below. What is the result?", code: c(`
s = 'AB CD'
items = list(s)
items.append('EF')
print(items)`),
      options: ["['A', 'B', 'C', 'D', 'E', 'F']", "{'A', 'B', ' ', 'C', 'D', 'EF'}", "['A', 'B', ' ', 'C', 'D', 'EF']", "('A', 'B', ' ', 'C', 'D', 'EF')"], correct: 2 },
    "py-src-161": { options: ["totalItems = int(float(input(\"How many items would you like?\")))", "totalItems = str(input(\"How many items would you like?\"))", "totalItems = float(input(\"How many items would you like?\"))", "totalItems = input(\"How many items would you like?\")"], correct: 0 },
    "py-src-8": { question: "Consider the variable declarations below. Which of the following expressions are of type str? (Choose 2)", code: c(`
a = '5'
b = '2'`) },
    "py-src-15": { question: "Consider the Python code below. What is the output?", code: c(`
result = str(bool(1) + float(10) / float(2))
print(result)`) },
    "py-src-36": { question: "Consider the code below. Which of the following will NOT print 'CAT' to the console?", code: c(`
x = 'ACROTE'
y = 'APPLE'
z = 'TOMATO'`) },
    "py-src-39": { question: "Consider the code below. Which line assigns <class 'list'> to x?", code: "t = ([10, 20], 10, False)" },
    "py-src-42": { question: "Which line of code will assign the string 'TT' to the variable output?", code: "x = 'TEXT'" },
    "py-src-46": { chapter: "operatori-tipuri", question: "Which code inserted at Line-1 will print 20 to the console if the user enters 15?", code: c(`
count = input('Enter the number of customers of the bank:')
# Line-1
print(output)`) },
    "py-src-56": { chapter: "operatori-tipuri", question: "Which line should be inserted at Line-1 so that the value of x becomes 16?", code: c(`
x = 3
x += 1
# Line-1`) },
    "py-src-58": { question: "What does the following expression evaluate to?", code: "6//4%5+2**3-2//3" },
    "py-src-59": { question: "What is the output?", code: c(`
x = 2
y = 6
x += 2**3
x //= y//2//3
print(x)`) },
    "py-src-60": { question: "What is the output?", code: c(`
x = 3/3 + 3**3 - 3
print(x)`) },
    "py-src-64": { question: "Consider the expression below. Which of the following statements are valid?", code: "result = a - b*c + d" },
    "py-src-65": { question: "Which expression placed at Line-1 makes the value of a equal to 9?", code: c(`
a = 2
a += 1
# Line-1`) },
    "py-src-76": { question: "What will be the value of X in the following Python expression?", code: "X = 2+9*((3*12)-8)/10" },
    "py-src-78": { question: "You are writing a Python program that evaluates an arithmetic expression: b is equal to a multiplied by negative one, then raised to the second power, where a is the input value and b is the result. Which expression is valid?", code: "a = eval(input('Enter a number for the expression:'))" },
    "py-src-80": { question: "Evaluate the following arithmetic expression. What is the result?", code: "(3*(1+2)**2 - (2**2)*3)" },
    "py-src-81": { question: "What is the value of result?", code: "result = (2*(3+4)**2 - (3**3)*3)" },
    "py-src-82": { question: "Which of the following expressions results in an error?",
      options: ["float('10')", "int('10')", "float('10.8')", "int('10.8')"], correct: 3 },
    "py-src-83": { question: "What is the type of x + y?", code: c(`
x = '10'
y = '20'`) },
    "py-src-84": { question: "Which expression evaluates to 2?", code: "a = float('123.456')" },
    "py-src-27": { question: "What will be the output of the following Python code?", code: c(`
a = 10
b = 20

def change():
    global b
    a = 45
    b = 56

change()
print(a)
print(b)`) },
    "py-src-28": { question: "What will be the output of the following Python code?", code: c(`
def change(i=1, j=2):
    i = i + j
    j = j + 1
    print(i, j)

change(j=1, i=2)`) },
    "py-src-29": { question: "What will be the output of the following Python code?", code: c(`
names = ['itvedant', 'Thane', 'Andheri', 'Navi Mumbai']
print(names[-1][-1])`) },
    "py-src-31": { question: "What will be the output of the following Python code?", code: c(`
f = lambda x: bool(x % 2)
print(f(20), f(21))`) },
    "py-src-32": { question: "Consider the following lists. What is the output?", code: c(`
n1 = [10, 20, 30, 40, 50]
n2 = [10, 20, 30, 40, 50]
print(n1 is n2)
print(n1 == n2)`) },
    "py-src-37": { question: "What is the result?", code: c(`
s = 'Python is easy'
s1 = s[-7:]
s2 = s[-4:]
print(s1 + s2)`) },
    "py-src-40": { question: "Which of the following lines will print 'AA' to the console? (Choose 3)", code: "b = 'BANANA'" },
    "py-src-41": { question: "Which of the following are valid ways of accessing 'Mango'?", code: c(`
list = ['Apple', 'Banana', 'Carrot', 'Mango']
# A: list[3]    B: list[4]    C: list[-1]    D: list[0]`) },
    "py-src-47": { question: "In which of the following cases will type(x) give <class 'int'>?", code: c(`
# A
x = 47.0
# B
x = '47'
# C
x = 10 + 20j
# D
x = 2**2**2`) },
    "py-src-61": { question: "In which of the following cases will True be printed? (Choose 2)", code: c(`
# A
a = 45
b = 45
print(a is not b)

# B
s1 = 'Python'
s2 = 'Python'.upper()
print(s1 is s2)

# C
x = [1, 2, 3]
y = [1, 2, 3]
print(x is y)

# D
print('r' in 'durga')

# E
print('is' in 'This IS a Fake News')`) },
    "py-src-69": { question: "Which of the following statements about the output are true? (Choose 2)", code: c(`
numList = [1, 2, 3, 4, 5]
alphaList = ['a', 'b', 'c', 'd', 'e']
print(numList is alphaList)    # #1
print(numList == alphaList)    # #2
numList = alphaList
print(numList is alphaList)    # #3
print(numList == alphaList)    # #4`) },
    "py-src-71": { question: "In which of the following cases will 10 be printed to the console? (Choose 2)", code: c(`
numbers = [10, 20, 30, 40]

# Case A
x = 0
for i in (30, 40, 50):
    if i in numbers:
        x = x + 5
print(x)

# Case B
x = 0
for i in (30, 40, 50):
    if i not in numbers:
        x = x + 5
print(x)

# Case C
x = 0
for i in (30, 40, 50):
    if i not in numbers:
        x = x + 10
print(x)

# Case D
x = 0
for i in (30, 40, 50):
    if i in numbers:
        x = x + 10
print(x)`) },
    "py-src-72": { question: "In which of the following cases will exactly 'Boy', 'Cat', 'Dog' be printed (each on its own line, without 'Apple')? (Choose 2)", code: c(`
l = ['Apple', 'Boy', 'Cat', 'Dog']

# Case A
for x in l:
    if len(x) == 3:
        print(x)

# Case B
for x in l:
    if len(x) != 3:
        print(x)

# Case C
for x in l:
    print(x)

# Case D
l1 = l[1:]
for x in l1:
    print(x)`) },
    "py-src-85": { question: "For which of the following conditions will True be printed to the console?", code: c(`
x = 'Durga'
y = 'Durga'
result = condition
print(result)`) },
    "py-src-86": { question: "What is the result?", code: c(`
x = 8
y = 10
result = x//3*3/2 + y%2**2
print(result)`) },
    "py-src-87": { question: "Which statements about the output are correct? (Choose 2)", code: c(`
l1 = ['sunny', 'bunny', 'chinny', 'vinny']
l2 = ['sunny', 'bunny', 'chinny', 'vinny']
print(l1 is not l2)    # #1
print(l1 == l2)        # #2
l1 = l2
print(l1 is not l2)    # #3
print(l1 != l2)        # #4`) },
    "py-src-89": { question: "What is the output, in order?", code: c(`
print(10 == 10 and 20 != 20)
print(10 == 10 or 20 != 20)
print(not 10 == 10)`) },
    "py-src-90": { question: "What is the output, in order?", code: c(`
print(not 0)
print(not 10)
print(not '')
print(not 'durga')
print(not None)`) },
    "py-src-91": { question: "What is the output?", code: c(`
lst = [7, 8, 9]
b = lst[:]
print(b is lst)
print(b == lst)`) },
    "py-src-94": { question: "You are writing a Python application for a dance studio that wants to encourage youth and seniors to sign up. Minors and seniors must receive a 10% discount. You need to complete the code. Which code should you add on line 03?", code: c(`
01 def get_discount(minor, senior):
02     discount = .1
03     ____________
04         discount = 0
05     return discount`) },
    "py-src-96": { question: "We are developing a loan collection agent application. What will be the value of commission?", code: c(`
collected_amount = 3000
commission = 0
if collected_amount <= 2000:
    commission = 50
elif collected_amount > 2500 and collected_amount < 3000:
    commission = 100
elif collected_amount > 2500:
    commission = 150
if collected_amount >= 3000:
    commission += 200`) },
    "py-src-97": { question: "You are developing an online shopping application. What is the result?", code: c(`
order_value = 1500
state = 'ap'
delivery_charge = 0
if state in ['up', 'mp', 'ts']:
    if order_value <= 1000:
        delivery_charge = 50
    elif 1000 < order_value < 2000:
        delivery_charge = 100
    else:
        delivery_charge = 150
else:
    delivery_charge = 25
    if state in ['lp', 'kp', 'ap']:
        if order_value > 1000:
            delivery_charge += 20
            if order_value < 2000 and state in ['kp', 'ap']:
                delivery_charge += 30
        else:
            delivery_charge += 15
print(delivery_charge)`) },
    "py-src-101": { question: "Which grade will be printed to the console?", code: c(`
marks = [30, 40, 50, 45, 50, 100]
average = sum(marks) // len(marks)
grades = {1: 'A', 2: 'B', 3: 'C', 4: 'D'}
if average >= 90 and average <= 100:
    key = 1
elif average >= 80 and average < 90:
    key = 2
elif average >= 50 and average < 80:
    key = 3
else:
    key = 4
print(grades[key])`) },
    "py-src-107": { question: "The XYZ Book Company needs to determine the cost a student pays for renting a book. The cost is $3.00 per night. If the book is returned after 9 PM, the student is charged an extra day. If the book is rented on a Sunday, the student gets 50% off for as long as they keep the book; on a Saturday, 30% off. If the book is rented on Sunday, for 5 days, and returned after 9 PM, what is the result?", code: c(`
# XYZ Book Rented Amount Calculator
ontime = input("Was Book returned before 9 pm? y or n").lower()
days_rented = int(input("How many days was the book rented? "))
day_rented = input("What day was the book rented?").capitalize()
cost_per_day = 3.00
if ontime == 'n':
    days_rented = days_rented + 1
if day_rented == 'Sunday':
    total = (days_rented * cost_per_day) * 0.5
elif day_rented == 'Saturday':
    total = (days_rented * cost_per_day) * 0.7
else:
    total = days_rented * cost_per_day
print("The Cost of the Book rental is : $", total)`) },
    "py-src-108": { question: "We are developing a gold loan application for XYZ company. For which of the following user inputs will interest_rate be 12?", code: c(`
amount = float(input('Enter Loan Amount:'))
interest_rate = 0
if amount > 0 and amount <= 50000:
    interest_rate = 10
elif amount > 50000 and amount < 100000:
    interest_rate = 12
elif amount >= 100000 and amount < 150000:
    interest_rate = 16
else:
    interest_rate = 22`) },
    "py-src-114": { chapter: "gestionare-erori" },
    "py-src-115": { question: "We are developing a leave approval application for XYZ Company. In which of the following cases will 'Needs Director Approval' be printed?", code: c(`
days = int(input('Enter number of days for leave:'))
cause = input('Enter the cause:')
if days == 1:
    print('Leave will be approved immediately')
elif days > 1 and days <= 3:
    if cause == 'Sick':
        print('Leave will be approved immediately')
    else:
        print('Needs Lead Approval')
elif days > 3 and days < 5:
    if cause == 'Sick':
        print('Needs Manager Approval')
    else:
        print('Needs Director Approval')
elif days >= 5 and days <= 10:
    print('Needs Director Approval')`),
      options: ["days = 2 and cause = 'Sick'", "days = 3 and cause = 'personal'", "days = 4 and cause = 'Sick'", "days = 4 and cause = 'official'"], correct: 3,
      explanation: "Cu days = 4 se intră pe ramura 'days > 3 and days < 5'. Dacă motivul este 'Sick' se afișează 'Needs Manager Approval', iar pentru orice alt motiv (ex.: 'official') se afișează 'Needs Director Approval'." },
    "py-src-116": { question: "In which of the following cases will the value of result be 9?", code: c(`
a = 12
b = 4
s = 'He shall not be happy if he does not work'`) },
    "py-src-122": { question: "If the user provides the input 'a', what is the result?", code: c(`
def count_letter(letter, word_list):
    count = 0
    for word in word_list:
        if letter in word:
            count += 1
    return count

word_list = ['apple', 'pears', 'orange', 'mango']
letter = input('Enter some alphabet symbol:')
letter_count = count_letter(letter, word_list)
print(letter_count)`) },
    "py-src-124": { question: "The XYZ Organics call center needs a program to enter survey data for a new coffee variety. The program must accept input and return the average rating on a five-star scale, rounded to two decimal places. Which print() statement should be placed at Line-1?", code: c(`
sum = count = done = 0
average = 0.0
while done != -1:
    rating = float(input('Enter Next Rating(1-5), -1 for done'))
    if rating == -1:
        break
    sum += rating
    count += 1
    average = float(sum / count)
# Line-1`) },
    "py-src-127": { question: "What is the result?", code: c(`
t = (2, 4, 6, 8, 10, 12)
d = {1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F'}
result = 1
for t1 in t:
    if t1 in d:
        result += t1
print(result)`),
      explanation: "Dicționarul d are cheile 1–6. Din tuplu, doar 2, 4 și 6 sunt chei în d, deci result = 1 + 2 + 4 + 6 = 13." },
    "py-src-128": { question: "What is the result?", code: c(`
t = (2, 4, 6, 8, 10, 12)
d = {1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F'}
result = 1
for t1 in t:
    if t1 in d:
        continue
    else:
        result += t1
print(result)`) },
    "py-src-129": { question: "What is the result?", code: c(`
values = [[3, 4, 5, 1], [33, 6, 1, 2]]

v = values[0][0]
for lst in values:
    for element in lst:
        if v > element:
            v = element

print(v)`) },
    "py-src-133": { question: "What will be the output of the following Python code?", code: c(`
True = False
while True:
    print(True)
    break`) },
    "py-src-136": { question: "What will be the output of the following Python code?", code: c(`
for i in range(0):
    print(i)`),
      correct: 1, explanation: "range(0) este o secvență goală, deci corpul buclei for nu se execută niciodată și nu se afișează nimic." },
    "py-src-137": { question: "What will be the output of the following Python code?", code: c(`
a = [0, 1, 2, 3]
i = -2
for i not in a:
    print(i)
    i += 1`) },
    "py-src-139": { question: "What is the result?", code: c(`
l = [10, (20,), {30}, {}, {}, [48, 50]]
count = 0
for i in range(len(l)):
    if type(l[i]) == list:
        count += 1
    elif type(l[i]) == tuple:
        count += 2
    elif type(l[i]) == set:
        count += 3
    elif type(l[i]) == dict:
        count += 4
    else:
        count += 5
print(count)`) },
    "py-src-147": { question: "Consider the code below. Which of the following statements are valid about this code? (Choose 2)", code: c(`
import os

def get_data(filename, mode):
    if os.path.isfile(filename):
        with open(filename, 'r') as file:
            return file.readline()
    else:
        return None`) },
    "py-src-155": { chapter: "operatori-tipuri", question: "Which of the following statements are valid? (Choose 2)",
      options: [
        "`s = \"Durga Sir's Python Classes are Good\"` causes an error, because double and single quotes cannot be used together",
        "`result = 456 + 456.0` — the type of result is int",
        "`b = False + 5 - True + 35 // 4` evaluates to 12",
        "`print('result:', (7/2) + (False or True) + (9 % 3))` prints result: 4.5"
      ], correct: [2, 3] },
    "py-src-156": { question: "Consider the file abc.txt and the Python code located in the same folder. What is the result?", code: c(`
# abc.txt
Durga:10
Ravi:20
Shiva:30
Pavan:40

# test.py
values = 0
try:
    f = open('abc.txt', 'r')
    content = f.readlines()
    for line in content:
        values += float(line.split(':')[1])
    f.close()
except Exception:
    print('Unable to open the file')
print(values)`) },
    "py-src-159": { question: "We are writing Python code for a voting application. You need to open the file voters_list.txt, add new voter info and print all the data to the console. Which line should be inserted at Line-1?", code: c(`
with open('voters_list.txt', 'a+') as f:
    f.write('New voters info')
    # Line-1
    data = f.read()
    print(data)`) },
    "py-src-160": { question: "You write the following code and run the program. What is the output?", code: c(`
import datetime
d = datetime.datetime(2017, 4, 7)
print('{:%B-%d-%y}'.format(d))

num = 1234567.890
print('{:,.4f}'.format(num))`),
      options: ["2017-April-07\n1,234,567.890", "Apr-07-2017\n1,234,567,8900", "April-07-17\n1,234,567.8900", "April-07-17\n1234567.89"], correct: 2 },
    "py-src-164": { question: "You are creating a program that shows a congratulatory message to employees on their service anniversary. You need to calculate the number of years of service and print a congratulatory message. Which code should you use at line 03?", code: c(`
01 start = input("How old were you on your start date?")
02 end = input("How old are you today?")
03 ____________`) },
    "py-src-166": { question: "You are an intern for XYZ Cars Company. You have to create a function that calculates the average velocity of a vehicle on a 2640 foot (1/2 mile) track. To generate the most precise output, which modifications should be made at Line-1 (xxx) and Line-2 (yyy)?", code: c(`
distance = xxx(input('Enter the distance travelled in feet:'))  # Line-1
distance_miles = distance / 5280
time = yyy(input('Enter the time elapsed in seconds:'))  # Line-2
time_hours = time / 3600
velocity = distance_miles / time_hours
print('The average Velocity:', velocity, 'miles/hour')`) },
    "py-src-167": { question: "You are creating an ecommerce script that accepts input and outputs the data in a comma-delimited format: strings must be enclosed in double quotes, numbers must not be quoted, and items must be separated by a comma. Which three code segments should you use? (Choose 3)", code: c(`
item = input('Enter the item name: ')
sales = input('Enter the quantity: ')`),
      options: [
        "print('\"{0}\",{1}'.format(item, sales))",
        "print(item + \",\" + sales)",
        "print('\"' + item + '\",' + sales)",
        "print(\"{0},{1}\".format(item, sales))",
        "print('\"%s\", %s' % (item, sales))"
      ], correct: [0, 2, 4] },
    "py-src-172": { options: ["20 de spații goale după \"ITVEDANT\"", "20 de spații goale înainte de \"ITVEDANT\"", "Niciuna dintre variante"], correct: 2 },
    "py-src-173": { chapter: "input-output" },
    "py-src-174": { chapter: "input-output", question: "Care dintre următoarele afirmații despre formatarea numerelor sunt adevărate?", code: c(`
1. "V:{:.2f}".format(123.45678)   ->  V:123.46
2. "V:{:.2f}".format(123.4)       ->  V:123.40
3. "V:{:8.2f}".format(1.45678)    ->  V:    1.46   (completat cu spații până la 8 caractere)
4. "V:{:08.2f}".format(1.45678)   ->  V:00001.46`) },
    "py-src-176": { chapter: "module-librarii" },
    "py-src-179": { code: c(`
01 ____________
02     name = input('What is your name? ')
03     return name
04 ____________
05     calories = miles * calories_per_mile
06     return calories
07 distance = int(input('How many miles did you bike this week? '))
08 burn_rate = 50
09 biker = get_name()
10 calories_burned = calc_calories(distance, burn_rate)
11 print(biker, ', you burned about', calories_burned, 'calories.')`) },
    "py-src-187": { question: "Consider the following code. For which of the function calls will we get an error?", code: c(`
def get_score(total=0, valid=0):
    result = int(valid) / int(total)
    return result`),
      explanation: "Parametrii sunt (total, valid). get_score(0, 10) înseamnă total=0 și valid=10, deci se calculează 10 / 0 → ZeroDivisionError. get_score(40) → valid=0 și total=40 → 0 / 40 = 0.0 (fără eroare)." },
    "py-src-188": { question: "What is the result?", code: c(`
def get_names():
    names = ['Sunny', 'Bunny', 'Chinny', 'Vinny', 'Pinny']
    return names[2:]

def update_names(elements):
    new_names = []
    for name in elements:
        new_names.append(name[:3].upper())
    return new_names

print(update_names(get_names()))`) },
    "py-src-189": { question: "Consider the code below. To print ['chicken', 'mutton', 'fish'] to the console, the parameter list x should be replaced with:", code: c(`
def my_list(x):
    lst.append(a)
    return lst

my_list('chicken')
my_list('mutton')
print(my_list('fish'))`),
      explanation: "Cu `a, lst=[]` funcția devine `def my_list(a, lst=[])`. Lista implicită este creată o singură dată, la definirea funcției, și este refolosită la fiecare apel, deci elementele se acumulează: ['chicken', 'mutton', 'fish']. Cu (), {} sau None, `lst.append` nu funcționează (AttributeError)." },
    "py-src-190": { question: "Consider the function below. Which of the following calls are valid? (Choose 3)", code: c(`
def f1(x=0, y=0):
    return x + y`) },
    "py-src-191": { question: "Consider the function below. Which of the following calls are valid? (Choose 3)", code: c(`
def f1(x=0, y=0):
    return x * y`) },
    "py-src-196": { question: "Tailspin Toys uses Python to control its new toy Happy Clown. The program has errors that cause the clown to run around in an infinite circle. You have been hired to debug the code. Which statement is true?", code: c(`
01 import math
02 # default motion for happy clown
03 power = True
04 move = 0
05 while power:
06     if move == 0:
07         turnValue = math.pi / move
08         move += 5
09     else:
10         turnValue = 0
11         move = 0`) },
    "py-src-198": { question: "Consider the code below. For the input 10, 20, 30, 40, what is the result?", code: c(`
data = []

def get_data():
    for i in range(1, 5):
        marks = input('Enter Marks:')
        data.append(marks)

def get_avg():
    sum = 0
    for mark in data:
        sum += mark
    return sum / len(data)

get_data()
print(get_avg())`) },
    "py-src-202": { question: "The in.txt file exists, but the out.txt file does not exist. You run the code. The code will execute without error. Review the statement: if it is correct, select \"No change is needed\"; otherwise select the answer that makes it correct.", code: c(`
import sys
try:
    file_in = open("in.txt", 'r')
    file_out = open("out.txt", 'w+')
except IOError:
    print('cannot open', file_name)
else:
    i = 1
    for line in file_in:
        print(line.rstrip())
        file_out.write("line " + str(i) + ": " + line)
        i = i + 1
    file_in.close()
    file_out.close()`) },
    "py-src-206": { question: "Is the following Python code valid?", code: c(`
try:
    pass  # try block
except:
    pass  # except block
finally:
    pass  # finally block`) },
    "py-src-207": { question: "What will be the output of the following Python code?", code: c(`
def foo():
    try:
        return 1
    finally:
        return 2

k = foo()
print(k)`) },
    "py-src-208": { question: "What is the result?", code: c(`
def f1():
    try:
        return 1
    finally:
        return 2

x = f1()
print(x)`) },
    "py-src-210": { question: "Which of the following is true about this code? Assume that in.txt is available but out.txt does not exist.", code: c(`
import sys

try:
    file_in = open('in.txt', 'r')
    file_out = open('out.txt', 'w+')
except IOError:
    print('Cannot open file:', 'in.txt')
else:
    i = 1
    for line in file_in:
        print(line.rstrip())
        file_out.write(str(i) + ': ' + line)
        i += 1
    file_in.close()
    file_out.close()`) },
    "py-src-211": { question: "We have to write Python code that reads the entire content of abc.txt and prints it to the console. Which code should be inserted at Line-1?", code: c(`
try:
    f = open('abc.txt', 'r')
    # Line-1
except:
    print('Unable to open the file')
print(data)`) },
    "py-src-217": { question: "While executing this code we get: TypeError: unsupported operand type(s) for +=: 'float' and 'str'. Which code should be used to fix this error?", code: c(`
prices = [30.5, '40.5', 10.5]
total = 0
for price in prices:
    total += price
print(total)`),
      options: ["total += str(price)", "total += int(price)", "total += float(price)", "total = total + price"], correct: 2 },
    "py-src-218": { question: "While executing this code we get: TypeError: unsupported operand type(s) for +=: 'int' and 'str'. Which code segments fix this problem? (Choose 2)", code: c(`
prices = [10, '20', 30, '40']
total = 0
for price in prices:
    total += price
print(total)`),
      options: ["total += str(price)", "total += int(price)", "total += float(price)", "total = total + price"], correct: [1, 2] },
    "py-src-220": { question: "What will be the output of the following Python code?", code: c(`
x = 30
y = 10
assert x > y, 'x is smaller than y'`) },
    "py-src-222": { question: "Assume that abc.txt exists. Which exception will be raised by the code below?", code: c(`
f = open('abc.txt')
f.readall()`) },
    "py-src-223": { question: "You write a function that reads a data file and prints each line of the file. When you run the program, you receive an error on line 03. What is causing the error?", code: c(`
01 def read_file(file):
02     line = None
03     if os.path.isfile(file):
04         data = open(file, 'r')
05         for line in data:
06             print(line)`) },
    "py-src-228": { question: "What is the result?", code: c(`
# Command: py test.py DURGASOFT
from sys import argv
print(argv[0])`) },
    "py-src-229": { question: "What is the result?", code: c(`
# Command: py test.py 10 20
from sys import argv
print(argv[1] + argv[2])`) },
    "py-src-230": { question: "Which of the following command invocations will generate the output: The Average for Durga is 20.00", code: c(`
from sys import argv
sum = 0
for i in range(2, len(argv)):
    sum += float(argv[i])
print("The Average for {0} is {1:.2f}".format(argv[1], sum / (len(argv) - 2)))`) },
    "py-src-233": { question: "You are developing a game. You need to generate a random number that is a multiple of 5, with a lowest value of 5 and a highest value of 100. Which two code segments will meet the requirements? (Choose 2)",
      options: [
        "from random import randrange\nprint(randrange(5, 101, 5))",
        "from random import randint\nprint(randint(1, 20) * 5)",
        "from random import randint\nprint(randint(0, 20) * 5)",
        "from random import randrange\nprint(randrange(0, 100, 5))"
      ], correct: [0, 1],
      explanation: "randrange(5, 101, 5) produce 5, 10, …, 100 (limita 101 este exclusă). randint(1, 20) * 5 produce tot 5…100. Celelalte două pot genera și 0, care este sub minimul cerut." },
    "py-src-235": { question: "What will be the output of the following Python code?", code: c(`
from math import factorial
print(math.factorial(5))`) },
    "py-src-238": { question: "What will be the output of the following Python code if the system date is 23rd September, 2020?", code: c(`
import datetime
t = datetime.date.today()
print(t.month)`) },
    "py-src-240": { question: "Which of the following will print some random value from the list? (Choose 2)", code: c(`
import random
fruits = ['Apple', 'Mango', 'Orange', 'Lemon']`) },
    "py-src-242": { question: "Which of the following are possible outputs? (Choose 3)", code: c(`
import random
fruits = ['Apple', 'Mango', 'Orange', 'Lemon']
random_list = [random.choice(fruits)[:2] for i in range(3)]
print(''.join(random_list))`) },
    "py-src-244": { options: ["It will print a random int value from 0 to 5", "It will print a random int value from 1 to 5", "It will print a random float value from 0 to 5", "It will print a random int value from 0 to 4", "It will print 5"], correct: 3 },
    "py-src-21": { question: "You write the following code and run it. What is the output value?", code: c(`
list_1 = [1, 2]
list_2 = [3, 4]
list_3 = list_1 + list_2
list_4 = list_3 * 3
print(list_4)`) },
    "py-src-4a": { question: "What is the data type of age (line 01)?", code: c(`
age = input('Enter your age: ')
year = input('Enter the four digit year: ')
born = eval(year) - eval(age)
message = 'You were born in ' + str(born)
print(message)`) },
    "py-src-4b": { question: "What is the data type of born (line 03)?", code: c(`
age = input('Enter your age: ')
year = input('Enter the four digit year: ')
born = eval(year) - eval(age)
message = 'You were born in ' + str(born)
print(message)`) },
    "py-src-4c": { question: "What is the data type of message (line 04)?", code: c(`
age = input('Enter your age: ')
year = input('Enter the four digit year: ')
born = eval(year) - eval(age)
message = 'You were born in ' + str(born)
print(message)`) },
    "py-src-16a": { question: "What is displayed by the first print(a)?", code: c(`
a = 'Config1'
print(a)
b = a
a += 'Config2'
print(a)
print(b)`) },
    "py-src-16b": { question: "What is displayed by the second print(a)?", code: c(`
a = 'Config1'
print(a)
b = a
a += 'Config2'
print(a)
print(b)`) },
    "py-src-16c": { question: "What is displayed by print(b)?", code: c(`
a = 'Config1'
print(a)
b = a
a += 'Config2'
print(a)
print(b)`) },
    "py-src-6": { question: "Asociază fiecare expresie type() cu tipul de date corect.",
      dragItems: [{ id: "int", text: "int" }, { id: "float", text: "float" }, { id: "str", text: "str" }, { id: "bool", text: "bool" }],
      dropZones: [
        { id: "z1", label: "type(+1E10)", correctItemId: "float" },
        { id: "z2", label: "type(5)", correctItemId: "int" },
        { id: "z3", label: "type(\"True\")", correctItemId: "str" },
        { id: "z4", label: "type(False)", correctItemId: "bool" }
      ],
      explanation: "+1E10 este notație științifică, deci float. 5 este int. \"True\" are ghilimele, deci este str. False este bool." },
    "py-src-7": { question: "Asociază fiecare tip de date cu linia de cod corespunzătoare.",
      dragItems: [{ id: "bool", text: "bool" }, { id: "float", text: "float" }, { id: "int", text: "int" }, { id: "str", text: "str" }],
      dropZones: [
        { id: "z1", label: "age = 2", correctItemId: "int" },
        { id: "z2", label: "minor = False", correctItemId: "bool" },
        { id: "z3", label: "name = \"Contoso\"", correctItemId: "str" },
        { id: "z4", label: "weight = 123.5", correctItemId: "float" }
      ],
      explanation: "Orice valoare scrisă între ghilimele este str, chiar dacă arată ca un număr (de exemplu zip = \"81000\")." },
    "py-src-209": { question: "Vrei să adaugi tratarea erorii FileNotFoundError la codul de mai jos. Care variantă este corectă?", code: c(`
# Codul inițial
f = open('abc.txt')
print(f.read())
f.close()

# Codul A
f = None
try:
    f = open('abc.txt')
except FileNotFoundError:
    print('File does not exist')
else:
    print(f.read())
finally:
    if f is not None:
        f.close()

# Codul B
f = None
try:
    f = open('abc.txt')
except FileNotFoundException:
    print('File does not exist')
else:
    print(f.read())
finally:
    if f is not None:
        f.close()

# Codul C
f = None
try:
    f = open('abc.txt')
else:
    print(f.read())
except FileNotFoundError:
    print('File does not exist')
finally:
    if f is not None:
        f.close()`) }
  };

  // ---------- utilitare de curățare ----------
  function cleanText(s) {
    return String(s).replace(/\s*\n\s*Answer:.*$/s, "").replace(/\s*\n[\s\n]*\d{1,3}\s*$/, "").trim();
  }
  function stripNums(code) {
    const lines = code.split("\n");
    const numbered = lines.filter(l => /^\s*\d{1,2}\)\s?/.test(l)).length;
    const nonEmpty = lines.filter(l => l.trim()).length;
    if (numbered >= 2 && numbered >= nonEmpty * 0.6) return lines.map(l => l.replace(/^\s*\d{1,2}\)\s?/, "")).join("\n");
    return code;
  }
  function reindent(code) {
    const ind = code.split("\n").filter(l => l.trim()).map(l => l.match(/^ */)[0].length).filter(n => n > 0);
    if (ind.length && Math.min.apply(null, ind) === 1 && Math.max.apply(null, ind) <= 3) {
      return code.split("\n").map(l => l.replace(/^ +/, m => " ".repeat(m.length * 4))).join("\n");
    }
    return code;
  }

  function apply() {
    const ex = window.EXAM_DATA && window.EXAM_DATA.python;
    if (!ex || !Array.isArray(ex.QUESTIONS)) return;
    window.PYTHON_ORIGINAL_COUNT = ex.QUESTIONS.length;
    window.PYTHON_WARNINGS = [];
    if (ex.__clean) { window.PYTHON_ALL = ex.QUESTIONS; return; }   // fișier deja curățat (exportat)
    const rm = new Set(REMOVE), seen = new Set(), full = [];
    ex.QUESTIONS.forEach(q => {
      if (seen.has(q.id)) return;
      seen.add(q.id);
      if (FIXES[q.id]) Object.assign(q, FIXES[q.id]);
      if (CHAPTER_MAP[q.chapter]) q.chapter = CHAPTER_MAP[q.chapter];
      q.question = cleanText(q.question);
      if (q.options) q.options = q.options.map(cleanText);
      if (q.code) q.code = reindent(stripNums(q.code));
      full.push(q);
    });
    const out = full.filter(q => !rm.has(q.id));
    window.PYTHON_ALL = full;          // toate întrebările, inclusiv dublurile
    ex.QUESTIONS = out;

    // verificare de structură (apare în consolă dacă rămâne ceva de reparat)
    const chapters = new Set(ex.CHAPTERS.map(ch => ch.id));
    out.forEach(q => {
      const bad = [];
      if (!chapters.has(q.chapter)) bad.push("capitol inexistent: " + q.chapter);
      if (q.type === "single" || q.type === "true_false") {
        if (!q.options || !(q.correct >= 0 && q.correct < q.options.length)) bad.push("răspuns corect invalid");
      } else if (q.type === "multiple") {
        if (!Array.isArray(q.correct) || q.correct.some(i => i < 0 || i >= q.options.length)) bad.push("răspunsuri corecte invalide");
      } else if (q.type === "drag_drop") {
        const ids = q.dragItems.map(i => i.id), used = q.dropZones.map(z => z.correctItemId);
        if (used.some(u => !ids.includes(u)) || new Set(used).size !== used.length) bad.push("drag&drop: element lipsă sau folosit de două ori");
      }
      if (bad.length) { window.PYTHON_WARNINGS.push(q.id + ": " + bad.join("; ")); console.warn("[python] " + q.id + ": " + bad.join("; ")); }
    });
  }

  window.PYTHON_FIXES = FIXES;
  apply();
})();
