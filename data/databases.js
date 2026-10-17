/* ITS PREP — integrated question bank; original IDs preserved. */
window.EXAM_DATA = window.EXAM_DATA || {};
window.EXAM_DATA.databases = {
  "id": "databases",
  "name": "Databases",
  "shortLabel": "DB",
  "accent": "#17A398",
  "description": "Proiectarea și interogarea bazelor de date relaționale: DDL, DML, extragere și depanare de date.",
  "CHAPTERS": [
    {
      "id": "proiectare",
      "name": "Proiectarea bazelor de date"
    },
    {
      "id": "ddl-obiecte",
      "name": "Administrarea obiectelor (DDL)"
    },
    {
      "id": "extragere-date",
      "name": "Extragerea datelor (SELECT)"
    },
    {
      "id": "manipulare-date",
      "name": "Manipularea datelor (DML)"
    },
    {
      "id": "depanare",
      "name": "Depanare și optimizare"
    }
  ],
  "QUESTIONS": [
    {
      "id": "db-001",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "For each statement about relational database storage, select Yes or No.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Data in a relational database is primarily organized in tables.",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Queries are the primary structures used to permanently store all database data.",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "A table organizes data in rows and columns.",
          "correctItemId": "a"
        }
      ],
      "explanation": "Tabelele stochează și organizează datele în rânduri și coloane. Interogările sunt utilizate pentru a solicita sau prelucra date, nu ca structură principală de stocare. Traducere: Pentru fiecare afirmație despre stocarea datelor într-o bază de date relațională, selectați Yes sau No."
    },
    {
      "id": "db-002",
      "chapter": "proiectare",
      "type": "single",
      "question": "The component that holds information for a single entry in a table is called a:",
      "options": [
        "Data type",
        "Row",
        "Column",
        "Attribute"
      ],
      "correct": 1,
      "explanation": "Răspuns corect: Row. Traducere: Componenta care conține informațiile pentru o singură înregistrare dintr-un tabel se numește:"
    },
    {
      "id": "db-003",
      "chapter": "proiectare",
      "type": "single",
      "question": "Evaluate the following statement. A row holds information for a single record in a table. Instructions: Review the statement. If it makes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that makes the statement correct",
      "options": [
        "No change is needed",
        "Column",
        "Data type",
        "View"
      ],
      "correct": 0,
      "explanation": "A row represents one record; the statement is correct, so no change is needed."
    },
    {
      "id": "db-004",
      "chapter": "proiectare",
      "type": "single",
      "question": "Evaluate the following statement. In a database table, each column represents a unique record. Instructions: Review the statement. If it makes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that makes the statement correct",
      "options": [
        "No change is needed",
        "Table",
        "Index",
        "Row"
      ],
      "correct": 3,
      "explanation": "A row represents a record. A column represents an attribute, not an entire unique record."
    },
    {
      "id": "db-005",
      "chapter": "proiectare",
      "type": "single",
      "question": "You need to store the contact information for each student in your school database. You should store each student's information in a:",
      "options": [
        "Stored procedure",
        "Function",
        "Row",
        "Variable"
      ],
      "correct": 2,
      "explanation": "Răspuns corect: Row. Traducere: Trebuie să stocați informațiile de contact pentru fiecare elev. În ce componentă a tabelului trebuie păstrate informațiile fiecărui elev?"
    },
    {
      "id": "db-006",
      "chapter": "proiectare",
      "type": "drag_drop",
      "question": "Match each database term to the correct description.",
      "dragItems": [
        {
          "id": "a",
          "text": "Field"
        },
        {
          "id": "b",
          "text": "Column"
        },
        {
          "id": "c",
          "text": "Table"
        },
        {
          "id": "d",
          "text": "Row / Record"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A horizontal collection describing one record",
          "correctItemId": "d"
        },
        {
          "id": "z2",
          "label": "A vertical collection for one attribute",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "A single stored data value at a row/column position",
          "correctItemId": "a"
        },
        {
          "id": "z4",
          "label": "A structure that organizes data in rows and columns",
          "correctItemId": "c"
        }
      ],
      "explanation": "A row describes one record; a column describes an attribute across records; a field is a value at a row/column position; a table organizes rows and columns."
    },
    {
      "id": "db-007",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "You are structuring a table in a relational database. Instructions: For each of the following statement, select Yes if the statement is true. Otherwise, select No. Use the relational model (a relation is a set of tuples), not an unconstrained SQL table that can contain duplicate rows.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Each value in a field in a table must be unique.",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "Each row in a table must be unique.",
          "correctItemId": "a"
        },
        {
          "id": "z3",
          "label": "Each column name in a table must be unique.",
          "correctItemId": "a"
        }
      ],
      "explanation": "A primary key makes each row identifiable. Individual nonkey column values can repeat, while column names within a table must be unique."
    },
    {
      "id": "db-008",
      "chapter": "proiectare",
      "type": "single",
      "question": "You need to store the first name, last name, and student ID for 100 students. This information will be stored in a table as:",
      "options": [
        "100 items and three cells.",
        "100 rows and three columns.",
        "three rows and 100 columns.",
        "three items and 100 cells."
      ],
      "correct": 1,
      "explanation": "Răspuns corect: 100 rows and three columns. Traducere: Trebuie să stocați prenumele, numele și StudentID pentru 100 de elevi. Cum va fi organizată informația într-un tabel?"
    },
    {
      "id": "db-009",
      "chapter": "proiectare",
      "type": "multiple",
      "question": "Which two elements are required to define a column? (Choose two.)",
      "options": [
        "A name",
        "A key",
        "An index",
        "A data type"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "Răspuns corect: A name, A data type. Traducere: Care două elemente sunt necesare pentru definirea unei coloane? (Alegeți două.)"
    },
    {
      "id": "db-010",
      "chapter": "proiectare",
      "type": "single",
      "question": "What defines the amount of storage space that is allocated to a value in a column?",
      "options": [
        "data type",
        "foreign key",
        "view",
        "ORDER BY clause"
      ],
      "correct": 0,
      "explanation": "Tipul de date determină modul de stocare și spațiul necesar valorilor din coloană. Traducere: Cantitatea de spațiu utilizată pentru o valoare dintr-o coloană este determinată în principal de ______."
    },
    {
      "id": "db-011",
      "chapter": "proiectare",
      "type": "single",
      "question": "You need to store whole-number product quantities. From the available choices, which data type is appropriate without using a floating-point type?",
      "options": [
        "INTEGER",
        "DOUBLE",
        "COUNT",
        "FLOAT"
      ],
      "correct": 0,
      "explanation": "INTEGER este destinat numerelor întregi. DOUBLE și FLOAT sunt tipuri cu virgulă mobilă, iar COUNT nu este un tip de date. Traducere: Trebuie să stocați cantități întregi de produse. Dintre variante, ce tip de date este potrivit fără a folosi un tip cu virgulă mobilă?"
    },
    {
      "id": "db-012",
      "chapter": "proiectare",
      "type": "single",
      "question": "In SQL Server, choose the smallest listed integer type that can store all whole numbers from 1 through 100. This range will not change.",
      "options": [
        "Bit",
        "Tinyint",
        "Smallint",
        "Integer"
      ],
      "correct": 1,
      "explanation": "SQL Server TINYINT stores integers from 0 through 255. It can store the stated range using one byte."
    },
    {
      "id": "db-013",
      "chapter": "proiectare",
      "type": "single",
      "question": "You have a column that will only contain values from 0 to 1024. What is the most economical data type to use for the column?",
      "options": [
        "INT",
        "TINYINT",
        "DECIMAL(3)",
        "SMALLINT"
      ],
      "correct": 3,
      "explanation": "SMALLINT acoperă intervalul cerut și ocupă mai puțin spațiu decât INT. Traducere: O coloană va conține numai valori de la 0 la 1024. Care este cel mai economic tip de date potrivit?"
    },
    {
      "id": "db-014",
      "chapter": "proiectare",
      "type": "single",
      "question": "When you are defining the cost of a product, it is best to use the ___________ data type.",
      "options": [
        "int",
        "varchar",
        "decimal",
        "bit"
      ],
      "correct": 2,
      "explanation": "Pentru valori financiare este preferată o reprezentare numerică exactă, nu un tip aproximativ precum FLOAT. Traducere: Pentru stocarea costului unui produs este recomandat tipul de date:"
    },
    {
      "id": "db-015",
      "chapter": "proiectare",
      "type": "single",
      "question": "What type of data type would you use to store true/false or yes/no answers?",
      "options": [
        "Int",
        "Float",
        "Bit",
        "Char"
      ],
      "correct": 2,
      "explanation": "In SQL Server BIT stores 0, 1 or NULL when nullable. It represents a binary flag; NOT NULL is needed if missing values must be forbidden."
    },
    {
      "id": "db-016",
      "chapter": "proiectare",
      "type": "single",
      "question": "You need to store product names that vary from three to 30 characters. You also need to minimize the amount of storage space that is used. Which data type should you use?",
      "options": [
        "VARCHAR (3, 30)",
        "CHAR (3, 30)",
        "VARCHAR (30)",
        "CHAR (30)"
      ],
      "correct": 2,
      "explanation": "VARCHAR stochează șiruri cu lungime variabilă, astfel încât este eficient când lungimea textului diferă de la un rând la altul. Traducere: Trebuie să stocați denumiri de produse cu lungimi între 3 și 30 de caractere și să minimizați spațiul utilizat. Ce tip de date este potrivit?"
    },
    {
      "id": "db-017",
      "chapter": "proiectare",
      "type": "single",
      "question": "Product names vary in length and may contain characters from multiple languages. Which data type is the best fit? Assume the SQL Server data types taught in this item; NVARCHAR is the explicit Unicode choice.",
      "options": [
        "CHAR",
        "VARCHAR",
        "NCHAR",
        "NVARCHAR"
      ],
      "correct": 3,
      "explanation": "NVARCHAR păstrează text Unicode cu lungime variabilă, fiind potrivit pentru denumiri în mai multe limbi fără spațiul fix consumat de NCHAR. Traducere: Denumirile produselor au lungimi diferite și pot conține caractere din mai multe limbi. Ce tip de date este cel mai potrivit?"
    },
    {
      "id": "db-018",
      "chapter": "proiectare",
      "type": "single",
      "question": "You are creating a table to store customer data. The AccountNumber column uses values that always consist of one letter and four digits. Which data type should you use for the AccountNumber column?",
      "options": [
        "CHAR",
        "BYTE",
        "DOUBLE",
        "SMALLINT"
      ],
      "correct": 0,
      "explanation": "AccountNumber is a fixed-length five-character identifier containing a letter. CHAR(5) stores it as text; arithmetic integer types cannot store its letter."
    },
    {
      "id": "db-019",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "For each of the following statements, select Yes if the statement is true and No if it is not.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Char(size) holds a fixed-length string.",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Text holds a fixed-length string.",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "Varchar(size) can hold a string of differing lengths.",
          "correctItemId": "a"
        }
      ],
      "explanation": "CHAR is fixed length, VARCHAR is variable length and the legacy TEXT type stores variable-length text rather than a fixed-length string."
    },
    {
      "id": "db-020",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "Instructions: For each of the following statements, select Yes if the statement is true. Otherwise, select No. Each correct selection is worth one point.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The VARCHAR data type contains only numeric characters.",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "The NUMERIC data type contains only numbers that have decimal places.",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "The INT data type contains only whole numbers.",
          "correctItemId": "a"
        }
      ],
      "explanation": "Răspuns corect: No / No / Yes. Traducere: Pentru fiecare afirmație despre VARCHAR, NUMERIC și INT, selectați Yes dacă este adevărată și No dacă este falsă."
    },
    {
      "id": "db-021",
      "chapter": "proiectare",
      "type": "drag_drop",
      "question": "You have a database table that stores information about school attendance. You have a data set that is defined as follows: You have the following requirements: • StudentName must consist of a string of characters. • GradeLevel must be only a whole number. • DaysAbsent can have one number after the decimal. Match the data types to the column names.",
      "dragItems": [
        {
          "id": "a",
          "text": "VARCHAR"
        },
        {
          "id": "b",
          "text": "DECIMAL"
        },
        {
          "id": "c",
          "text": "INT"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "StudentName",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "GradeLevel",
          "correctItemId": "c"
        },
        {
          "id": "z3",
          "label": "DaysAbsent",
          "correctItemId": "b"
        }
      ],
      "explanation": "StudentName needs a character type, GradeLevel needs an integer and DaysAbsent needs an exact decimal with one fractional digit.",
      "code": "StudentName | GradeLevel | DaysAbsent\nJohn        | 12         | 2.5\nHolly       | 12         | 0.0\nDavid       | 12         | 3.0"
    },
    {
      "id": "db-022",
      "chapter": "proiectare",
      "type": "single",
      "question": "You work at a coffee shop. They ask you to set up a website that stores charges on purchases. You need to recommend a data type in a database table to run financial functions against the charged amounts. Which data type should you recommend?",
      "options": [
        "DECIMAL",
        "BIT",
        "VARCHAR",
        "BINARY"
      ],
      "correct": 0,
      "explanation": "DECIMAL stores exact fixed-point values and is appropriate for currency calculations. Floating-point types can introduce binary rounding approximation."
    },
    {
      "id": "db-023",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which constraint designates the table’s primary non-NULL row identifier?",
      "options": [
        "PRIMARY KEY",
        "FOREIGN KEY",
        "VIEW",
        "DEFAULT"
      ],
      "correct": 0,
      "explanation": "A primary key uniquely identifies each student row even when two students have the same first and last names."
    },
    {
      "id": "db-024",
      "chapter": "proiectare",
      "type": "single",
      "question": "You accept an IT internship at a local charity. The charity wants you to help them with compliance and auditing requirements. You need to ensure that a column or combination of columns uniquely identifies each row of a table. Which constraint should you define?",
      "options": [
        "Primary key",
        "Secondary key",
        "Foreign key",
        "Default key"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Primary key."
    },
    {
      "id": "db-025",
      "chapter": "proiectare",
      "type": "multiple",
      "question": "You accept an IT internship at a local charity. The charity has two tables in their data model named Chapter and Language, as defined below: You create a third table named ChapterLanguage to relate the Chapter table and the Language table. You need to select columns from the Chapter and Language tables to create a composite primary key for the ChapterLanguage table. Which two columns should you select? (Choose two.)",
      "options": [
        "ChapterId",
        "LanguageId",
        "Country",
        "Region",
        "City",
        "LanguageName"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "The junction table uses the parent ChapterId and LanguageId as its composite key, preventing duplicate chapter/language links.",
      "image": "assets/databases/pdf-060-chapter-language.png",
      "imageAlt": "chapter language"
    },
    {
      "id": "db-026",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "For each of the following statements, select Yes if the statement is true and No if the statement is false.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "An enforced foreign key requires non-NULL referencing values to match a referenced candidate key",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "A table can contain only one Foreign Key",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "A foreign key may reference a primary key or a suitable unique key, including in the same table",
          "correctItemId": "a"
        },
        {
          "id": "z4",
          "label": "A NULL single-column foreign key does not require a matching parent row",
          "correctItemId": "a"
        }
      ],
      "explanation": "Yes / No / Yes / Yes. A table may have multiple foreign keys. References can target an eligible unique key and can be self-referential; a NULL single-column reference does not require a parent match."
    },
    {
      "id": "db-027",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "For each statement about the relationship between Department and Employee, select Yes or No.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Employee.DepartmentID can be a foreign key that references Department.DepartmentID.",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "A foreign key helps prevent assigning an employee to a department that does not exist.",
          "correctItemId": "a"
        },
        {
          "id": "z3",
          "label": "Employee.DepartmentID must be the primary key of Employee in order to create the relationship.",
          "correctItemId": "b"
        }
      ],
      "explanation": "Cheia externă asigură integritatea referențială: valoarea din Employee trebuie să facă referire la un departament existent. Traducere: Pentru fiecare afirmație despre relația dintre Department și Employee, selectați Yes sau No."
    },
    {
      "id": "db-028",
      "chapter": "proiectare",
      "type": "single",
      "question": "You have two tables named Salesperson and Sales. You need to ensure that each record in the Sales table has a valid associated salesperson record in the Salesperson table. Which database object should you add to the Sales table?",
      "options": [
        "Nonclustered index",
        "Primary key",
        "Foreign key",
        "Clustered index"
      ],
      "correct": 2,
      "explanation": "A foreign key in Sales references a candidate key in SalesPerson and prevents non-NULL references to missing salespeople."
    },
    {
      "id": "db-029",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "StateID is unique in State, and Address references State through StateID. Complete each statement.",
      "dragItems": [
        {
          "id": "a",
          "text": "primary key"
        },
        {
          "id": "b",
          "text": "foreign key"
        },
        {
          "id": "c",
          "text": "union"
        },
        {
          "id": "d",
          "text": "index"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "StateID is a/an ______ in the State table.",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "StateID is a/an ______ in the Address table.",
          "correctItemId": "b"
        }
      ],
      "explanation": "State.StateID identifică unic rândul din State. Address.StateID face referire la el, deci este cheie externă. Traducere: StateID este unic în State, iar Address face referire la State prin StateID. Completați fiecare afirmație despre rolul coloanei StateID."
    },
    {
      "id": "db-030",
      "chapter": "proiectare",
      "type": "multiple",
      "question": "Which two keys establish a relationship between two tables? (Choose two.)",
      "options": [
        "candidate",
        "foreign",
        "superkey",
        "local",
        "primary"
      ],
      "correct": [
        1,
        4
      ],
      "explanation": "Răspuns corect: foreign, primary. Traducere: Care două tipuri de chei stabilesc relația dintre două tabele? (Alegeți două.)"
    },
    {
      "id": "db-031",
      "chapter": "proiectare",
      "type": "drag_drop",
      "question": "Match each student to the course referenced by CourseID.",
      "image": "assets/databasesimg/q031_1.png",
      "dragItems": [
        {
          "id": "a",
          "text": "History"
        },
        {
          "id": "b",
          "text": "Science"
        },
        {
          "id": "c",
          "text": "Math"
        },
        {
          "id": "d",
          "text": "Reading"
        },
        {
          "id": "e",
          "text": "Geography"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Brad",
          "correctItemId": "d"
        },
        {
          "id": "z2",
          "label": "Joe",
          "correctItemId": "c"
        },
        {
          "id": "z3",
          "label": "Susan",
          "correctItemId": "b"
        }
      ],
      "explanation": "Se urmărește CourseID din Students în tabelul Courses: Brad are 4 → Reading, Joe are 1 → Math, iar Susan are 2 → Science. Traducere: Asociați fiecare elev cu cursul indicat de valoarea CourseID."
    },
    {
      "id": "db-032",
      "chapter": "proiectare",
      "type": "single",
      "question": "Among the following, which sets limits or rules placed on a table or a column to ensure that the data is considered valid for a database?",
      "options": [
        "checker",
        "validator",
        "scanner",
        "constraint"
      ],
      "correct": 3,
      "explanation": "Constraints enforce valid values and relationships. Indexes primarily optimize access, and an attribute alone does not enforce a validation rule."
    },
    {
      "id": "db-033",
      "chapter": "proiectare",
      "type": "drag_drop",
      "question": "Match each scenario to the correct relationship type. Assume each employee has exactly one recorded passport and each passport belongs to exactly one employee.",
      "dragItems": [
        {
          "id": "a",
          "text": "Teacher ↔ Classes"
        },
        {
          "id": "b",
          "text": "Employee ↔ Passport"
        },
        {
          "id": "c",
          "text": "Students ↔ Courses"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "One-to-One",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "One-to-Many",
          "correctItemId": "a"
        },
        {
          "id": "z3",
          "label": "Many-to-Many",
          "correctItemId": "c"
        }
      ],
      "explanation": "Un angajat are un pașaport, un profesor poate avea mai multe clase, iar elevii și cursurile formează o relație many-to-many. Traducere: Asociați fiecare scenariu cu tipul corect de relație."
    },
    {
      "id": "db-034",
      "chapter": "proiectare",
      "type": "single",
      "question": "If a teacher can teach multiple classes, but each class is assigned to only one teacher, what type of relationship does this describe?",
      "options": [
        "One-to-One",
        "One-to-Many",
        "Many-to-Many",
        "Circular relationship"
      ],
      "correct": 1,
      "explanation": "Răspuns corect: One-to-Many. Traducere: Un profesor poate preda mai multe clase, iar fiecare clasă este atribuită unui singur profesor. Ce tip de relație este aceasta?"
    },
    {
      "id": "db-035",
      "chapter": "proiectare",
      "type": "single",
      "question": "What type of relationship exists if a student can enroll in multiple courses, and each course can have multiple students?",
      "options": [
        "One-to-One",
        "One-to-Many",
        "Many-to-Many",
        "Self-referencing"
      ],
      "correct": 2,
      "explanation": "Răspuns corect: Many-to-Many. Traducere: Un elev se poate înscrie la mai multe cursuri, iar fiecare curs poate avea mai mulți elevi. Ce tip de relație este aceasta?"
    },
    {
      "id": "db-036",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "Model the many-to-many relationship between Machine and Operator using the Assignment junction table.",
      "dragItems": [
        {
          "id": "a",
          "text": "primary key"
        },
        {
          "id": "b",
          "text": "index"
        },
        {
          "id": "c",
          "text": "union"
        },
        {
          "id": "d",
          "text": "foreign key"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Operator.ID is a/an ______ in Operator.",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Machine.ID is a/an ______ in Machine.",
          "correctItemId": "a"
        },
        {
          "id": "z3",
          "label": "Assignment.OperatorID is a/an ______ referencing Operator.ID.",
          "correctItemId": "d"
        },
        {
          "id": "z4",
          "label": "Assignment.MachineID is a/an ______ referencing Machine.ID.",
          "correctItemId": "d"
        }
      ],
      "explanation": "Both parent ID columns are primary keys. Assignment stores corresponding foreign keys, allowing a many-to-many relationship while preserving referential integrity.",
      "code": "Machine(ID PRIMARY KEY, Name, Model)\nOperator(ID PRIMARY KEY, Name, Experience)\nAssignment(ID PRIMARY KEY, MachineID FOREIGN KEY -> Machine.ID,\n           OperatorID FOREIGN KEY -> Operator.ID)",
      "image": "assets/databases/pdf-058-machine-assignment-erd.png",
      "imageAlt": "machine assignment erd"
    },
    {
      "id": "db-037",
      "chapter": "proiectare",
      "type": "single",
      "question": "Assume the business rule says each ProductID determines exactly one ProductCategory. What term describes this dependency?",
      "image": "assets/databases/pdf-079-product-categories.png",
      "options": [
        "Cohort",
        "Relationally dependent",
        "Deterministic",
        "Functionally dependent",
        "Compositional"
      ],
      "correct": 3,
      "explanation": "Under the stated business rule, each ProductID determines one ProductCategory: a functional dependency.",
      "imageAlt": "product categories"
    },
    {
      "id": "db-038",
      "chapter": "proiectare",
      "type": "single",
      "question": "You have a table that contains the following data. You break the table into the following two tables. This process is referred to as:",
      "images": [
        "assets/databasesimg/q086_1.jpeg",
        "assets/databasesimg/q086_2.jpeg"
      ],
      "options": [
        "defragmentation",
        "normalization",
        "fragmentation",
        "denormalization"
      ],
      "correct": 1,
      "explanation": "Procesul este normalizarea: datele sunt reorganizate în tabele separate pentru a reduce repetarea și redundanța. Traducere: Aveți tabelul prezentat mai jos și îl împărțiți în două tabele pentru a elimina grupurile repetitive. Cum se numește acest proces?"
    },
    {
      "id": "db-039",
      "chapter": "proiectare",
      "type": "multiple",
      "question": "Which two requirements are characteristic of First Normal Form (1NF)? (Choose two.)",
      "options": [
        "Eliminate repeating groups",
        "Store atomic (single) values in each field",
        "Eliminate all foreign keys",
        "Eliminate all composite keys"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "First normal form excludes repeating groups and requires atomic values in the modeled domains. It does not prohibit composite keys."
    },
    {
      "id": "db-040",
      "chapter": "proiectare",
      "type": "single",
      "question": "A table has atomic values, no repeating groups, and each row can be uniquely identified. Which normal form does this describe?",
      "options": [
        "1NF",
        "2NF",
        "3NF",
        "5NF"
      ],
      "correct": 0,
      "explanation": "1NF cere valori atomice și eliminarea grupurilor repetitive. Identificarea unică a rândurilor este de asemenea o proprietate fundamentală a unei relații bine proiectate. Traducere: Un tabel are valori atomice, nu are grupuri repetitive și fiecare rând poate fi identificat în mod unic. Ce formă normală descrie această situație?"
    },
    {
      "id": "db-041",
      "chapter": "proiectare",
      "type": "single",
      "question": "A table is in 1NF. Every non-prime attribute depends on each whole candidate key, with no partial dependency on part of a composite key. Which additional normal form is guaranteed, without assuming absence of transitive dependencies?",
      "options": [
        "4 NF",
        "2 NF",
        "1 NF",
        "3 NF"
      ],
      "correct": 1,
      "explanation": "În 2NF, fiecare atribut non-cheie trebuie să depindă de întreaga cheie compusă, nu doar de o parte a acesteia. Traducere: Un tabel are o cheie compusă, iar un atribut care nu face parte din cheie depinde de întreaga cheie compusă. Ce formă normală este descrisă?"
    },
    {
      "id": "db-042",
      "chapter": "proiectare",
      "type": "single",
      "question": "Linda, a Database Designer at Lion Inc., is designing an Author table with a composite key (AuthorID and TitleID) and attributes Royalty and LiteraryAgent. The functional dependencies are such that AuthorID + TitleID-> Royalty (i.e. Royalty is functionally dependent on AuthorID and TitleID) and AuthorID->LiteraryAgent (i.e. LiteraryAgent is functionally dependent on AuthorID). Based on the functional dependencies, which statement about the table is correct?",
      "code": "Rezumatul dependențelor funcționale\nAtribut       | Depinde de\n--------------+-------------------\nRoyalty       | AuthorID + TitleID\nLiteraryAgent | AuthorID",
      "options": [
        "It violates 4 NF.",
        "It violates 2 NF.",
        "It violates 1 NF.",
        "There is no violation."
      ],
      "correct": 1,
      "explanation": "LiteraryAgent depends on AuthorID alone, which is only part of the composite key (AuthorID, TitleID). This partial dependency violates 2NF."
    },
    {
      "id": "db-043",
      "chapter": "proiectare",
      "type": "single",
      "question": "A table contains a primary key and several non-key attributes. You want every non-key attribute to depend on the key and not on another non-key attribute. Which normal form addresses this requirement?",
      "options": [
        "1NF",
        "2NF",
        "3NF",
        "4NF"
      ],
      "correct": 2,
      "explanation": "3NF elimină dependențele tranzitive: atributele non-cheie trebuie să depindă de cheie, nu de alte atribute non-cheie. Traducere: Un tabel conține o cheie primară și mai multe atribute non-cheie. Doriți ca fiecare atribut non-cheie să depindă de cheie și nu de un alt atribut non-cheie. Ce formă normală corespunde acestei cerințe?"
    },
    {
      "id": "db-044",
      "chapter": "proiectare",
      "type": "single",
      "question": "The recipe data shown below must be normalized to Third Normal Form (3NF). Based on the dependencies represented in the item, how many tables should the design contain?",
      "image": "assets/databasesimg/q092_1.jpeg",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correct": 2,
      "explanation": "În itemul-sursă, descompunerea corectă produce 3 tabele. Ideea este separarea datelor care au dependențe diferite pentru a reduce redundanța. Traducere: Datele despre rețete din tabelul de mai jos trebuie normalizate până la 3NF. Pe baza dependențelor din item, câte tabele trebuie să conțină proiectarea?"
    },
    {
      "id": "db-045",
      "chapter": "proiectare",
      "type": "single",
      "question": "You create the following table, which displays winners of past pet shows. Pet Competition Winners Which column prevents the table from being in third normal form?",
      "image": "assets/databases/pdf-082-pet-winners.png",
      "options": [
        "PetID",
        "Birthdate",
        "ID",
        "Year"
      ],
      "correct": 1,
      "explanation": "Birthdate belongs to the Pet entity and depends on PetID, not directly on the winning-event row ID. Keeping it here introduces a transitive dependency.",
      "imageAlt": "pet winners"
    },
    {
      "id": "db-046",
      "chapter": "proiectare",
      "type": "single",
      "question": "Denormalization is performed in order to:",
      "options": [
        "Reduce redundancy.",
        "Eliminate repeating groups.",
        "Create smaller tables.",
        "Improve query performance."
      ],
      "correct": 3,
      "explanation": "Denormalization deliberately introduces controlled redundancy, often to reduce joins and improve selected query performance. It can increase storage and update-maintenance costs."
    },
    {
      "id": "db-047",
      "chapter": "proiectare",
      "type": "single",
      "question": "You intentionally combine data from several normalized tables into a structure that contains some redundancy in order to improve read performance. What is this process called?",
      "options": [
        "denormalization",
        "normalization",
        "truncation",
        "index deletion"
      ],
      "correct": 0,
      "explanation": "Denormalizarea introduce controlat redundanță pentru a reduce uneori costul interogărilor. Traducere: Completarea termenului: adăugarea intenționată a unei anumite redundanțe pentru performanță se numește ______."
    },
    {
      "id": "db-048",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which SQL Server statement creates a composite primary key that makes each OrderID/OrderItemID pair unique?",
      "options": [
        "CREATE TABLE OrderItems (OrderID INT NOT NULL, OrderItemID INT NOT NULL, PRIMARY KEY (OrderID, OrderItemID));",
        "CREATE TABLE OrderItems (OrderID INT UNIQUE, OrderItemID INT UNIQUE);",
        "CREATE TABLE OrderItems (OrderID INT PRIMARY KEY, OrderItemID INT PRIMARY KEY);",
        "CREATE TABLE OrderItems (OrderID INT, OrderItemID INT);"
      ],
      "correct": 0,
      "explanation": "A composite primary key is declared as PRIMARY KEY(OrderID,OrderItemID). It makes the pair unique, not each component separately. Reserved table names such as Order require quoting."
    },
    {
      "id": "db-049",
      "chapter": "proiectare",
      "type": "single",
      "question": "You need to establish a set of permissions that you can routinely assign to new users. What should you create?",
      "options": [
        "role",
        "view",
        "index",
        "backup"
      ],
      "correct": 0,
      "explanation": "A database role groups permissions so they can be assigned and managed consistently for its members."
    },
    {
      "id": "db-050",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "The user is a member of the public and sysadmin server roles. Complete each statement.",
      "image": "assets/databasesimg/q190_1.jpeg",
      "dragItems": [
        {
          "id": "a",
          "text": "no"
        },
        {
          "id": "b",
          "text": "unlimited"
        },
        {
          "id": "c",
          "text": "read-only"
        },
        {
          "id": "d",
          "text": "configuration"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The user can perform ______ actions on data on the server.",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "The user can perform ______ actions on database objects on the server.",
          "correctItemId": "b"
        }
      ],
      "explanation": "Rolul sysadmin oferă control complet asupra instanței SQL Server, deci utilizatorul are acces nelimitat. Acesta este un item specific SQL Server. Traducere: Utilizatorul aparține rolurilor public și sysadmin. Completați afirmațiile despre permisiunile sale."
    },
    {
      "id": "db-051",
      "chapter": "proiectare",
      "type": "single",
      "question": "What role gives full access to an individual database?",
      "options": [
        "db_owner",
        "db_accessadmin",
        "db_securityadmin",
        "db_ddladmin"
      ],
      "correct": 0,
      "explanation": "Un rol grupează permisiuni care pot fi atribuite utilizatorilor, simplificând administrarea accesului. Traducere: Ce rol SQL Server oferă acces complet la o bază de date individuală?"
    },
    {
      "id": "db-052",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which SQL Server fixed database role grants SELECT access to all user tables and views, without itself granting write access?",
      "options": [
        "db_datawriter",
        "db_owner",
        "db_securityadmin",
        "db_datareader"
      ],
      "correct": 3,
      "explanation": "db_datareader grants read access to user tables and views. Other roles or explicit grants/denials can affect a user’s effective permissions."
    },
    {
      "id": "db-053",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which command creates a database user principal?",
      "options": [
        "ALLOW USER",
        "CREATE USER",
        "ADD USER",
        "INSERT USER",
        "ALTER USER"
      ],
      "correct": 1,
      "explanation": "CREATE USER creează un utilizator la nivelul bazei de date. În unele sisteme autentificarea la nivel de server este gestionată separat. Traducere: Ce comandă creează un utilizator (user principal) în baza de date?"
    },
    {
      "id": "db-054",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which command is used to give a user permission to access a database object?",
      "options": [
        "GRANT",
        "DENY",
        "PERMIT",
        "ALTER"
      ],
      "correct": 0,
      "explanation": "GRANT acordă o permisiune asupra unui obiect sau asupra bazei de date. Traducere: Ce comandă acordă utilizatorilor acces la obiecte din baza de date?"
    },
    {
      "id": "db-055",
      "chapter": "proiectare",
      "type": "single",
      "question": "Evaluate the following statement. Use the ALLOW SELECT command to give a user permission to read the data in a table. Instructions: Review the statement. If it makes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that makes the statement correct",
      "options": [
        "No change is needed",
        "GRANT SELECT",
        "LET HEAD",
        "PERMIT READ"
      ],
      "correct": 1,
      "explanation": "GRANT SELECT grants read permission. ALLOW SELECT is not the corresponding SQL permission command."
    },
    {
      "id": "db-056",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "Choose the correct GRANT syntax for each requirement.",
      "dragItems": [
        {
          "id": "a",
          "text": "GRANT EXECUTE ON sp_current_sales TO inside_sales WITH GRANT OPTION"
        },
        {
          "id": "b",
          "text": "GRANT EXECUTE ON sp_current_sales TO inside_sales"
        },
        {
          "id": "c",
          "text": "GRANT SELECT ON vw_sales_today TO ROLE sales_manager WITH GRANT OPTION"
        },
        {
          "id": "d",
          "text": "GRANT EXECUTE ON sp_current_sales TO GROUP inside_sales"
        },
        {
          "id": "e",
          "text": "GRANT SELECT ON vw_sales_today TO sales_manager WITH GRANT OPTION"
        },
        {
          "id": "f",
          "text": "GRANT OPTION SELECT ON vw_sales_today TO sales_manager"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Allow inside_sales to execute sp_current_sales.",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "Allow sales_manager to SELECT from vw_sales_today and delegate that permission.",
          "correctItemId": "e"
        }
      ],
      "explanation": "GRANT EXECUTE permits procedure execution. GRANT SELECT permits reading a view, and WITH GRANT OPTION permits the grantee to delegate the granted permission."
    },
    {
      "id": "db-057",
      "chapter": "proiectare",
      "type": "single",
      "question": "You assign User1 a set of permissions that include the WITH GRANT OPTION. The WITH GRANT OPTION enables User1 to:",
      "options": [
        "request a log of permission use.",
        "delegate permissions to other users.",
        "create new database users.",
        "view other users' permissions."
      ],
      "correct": 1,
      "explanation": "GRANT acordă o permisiune. WITH GRANT OPTION permite beneficiarului să acorde mai departe aceeași permisiune. Traducere: Ce îi permite unui utilizator opțiunea WITH GRANT OPTION?"
    },
    {
      "id": "db-058",
      "chapter": "proiectare",
      "type": "single",
      "question": "What is the purpose of the DENY permission in SQL Server?",
      "options": [
        "It deletes the user",
        "It temporarily disables a user",
        "It explicitly blocks a permission",
        "It allows SELECT but denies INSERT"
      ],
      "correct": 2,
      "explanation": "Răspuns corect: It explicitly blocks a permission. Traducere: Care este scopul permisiunii DENY în SQL Server?"
    },
    {
      "id": "db-059",
      "chapter": "proiectare",
      "type": "single",
      "question": "User1 was directly granted SELECT permission on the Customer table. Which statement removes that direct grant?",
      "options": [
        "REMOVE User1 FROM Customer",
        "REMOVE SELECT ON Customer FROM User1",
        "REVOKE SELECT ON Customer FROM User1",
        "REVOKE User1 FROM Customer"
      ],
      "correct": 2,
      "explanation": "REVOKE SELECT ON Customer FROM User1 removes a direct SELECT grant. It does not necessarily block access inherited through a role; DENY is a different permission operation."
    },
    {
      "id": "db-060",
      "chapter": "proiectare",
      "type": "single",
      "question": "What is the main purpose of performing regular database backups?",
      "options": [
        "To increase query performance",
        "To prevent loss of critical information",
        "To allow users to edit data faster",
        "To reset permissions automatically"
      ],
      "correct": 1,
      "explanation": "Backup-ul creează o copie utilizabilă pentru recuperarea datelor. Tipul de backup determină ce schimbări sunt salvate și de la ce punct. Traducere: Care este scopul principal al efectuării regulate a copiilor de siguranță?"
    },
    {
      "id": "db-061",
      "chapter": "proiectare",
      "type": "single",
      "question": "In which situation do you need to perform a restore on a database?",
      "options": [
        "when data becomes corrupted in the database",
        "when you need to roll back a transaction",
        "when you encounter an error in your application",
        "when data needs to be deleted from the database"
      ],
      "correct": 0,
      "explanation": "RESTORE aplică o copie de siguranță pentru a recupera o bază de date sau o parte a ei. Traducere: În ce situație este necesară restaurarea (restore) unei baze de date?"
    },
    {
      "id": "db-062",
      "chapter": "proiectare",
      "type": "single",
      "question": "In a backup system that supports incremental backups, a full backup already exists. Only a small fraction of a 10 TB database changes every two hours. Which listed backup type saves changes since the previous backup, avoiding repeated full copies?",
      "options": [
        "archive",
        "incremental",
        "partial",
        "full"
      ],
      "correct": 1,
      "explanation": "An incremental backup saves changes since the previous backup. Database-specific strategies differ: SQL Server normally combines full/differential backups with transaction-log backups rather than a backup command called incremental."
    },
    {
      "id": "db-063",
      "chapter": "proiectare",
      "type": "single",
      "question": "At 3:00 P.M. (15:00 hours), you create a backup of your database. At 4:00 P.M. (16:00 hours), you create a table named Customer and import data into the table. At 5:00 P.M. (17:00 hours), your server fails. You run a script to apply only the 3:00 P.M. backup to your database. What is the result of the script? Assume you restore only the 15:00 backup; no later differential or log backups are applied.",
      "options": [
        "The Customer table no longer exists.",
        "The Customer table is unaffected.",
        "The Customer table exists but has no data.",
        "The script fails."
      ],
      "correct": 0,
      "explanation": "Customer was created at 16:00, after the 15:00 backup. Restoring only that earlier backup returns the earlier database state, so the newly created Customer table is absent."
    },
    {
      "id": "db-064",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which statement correctly describes a Full Backup?",
      "options": [
        "It only backs up data that has changed since the last backup.",
        "It performs a complete copy of the entire database, including all data and structures.",
        "It backs up the transaction log changes only.",
        "It saves the most recent changes made in a specific time window."
      ],
      "correct": 1,
      "explanation": "A full backup contains the database data needed to restore that backup point, together with the log information required by the database engine for consistency."
    },
    {
      "id": "db-065",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which of the following best describes a Differential Backup?",
      "options": [
        "It backs up all data and structures, creating a complete copy of the database.",
        "It only backs up changes made since the last incremental backup.",
        "It backs up changes made since the last full backup.",
        "It only backs up the transaction log changes."
      ],
      "correct": 2,
      "explanation": "A differential backup records changes since the last applicable full backup; restoration normally needs that full backup plus the chosen differential."
    },
    {
      "id": "db-066",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which of the following best describes an Incremental Backup?",
      "options": [
        "It backs up data that was modified since the last full or incremental backup.",
        "It backs up all data modified since the last differential backup.",
        "It backs up changes since the last transaction log backup.",
        "It always performs a complete copy of the database."
      ],
      "correct": 0,
      "explanation": "An incremental backup records changes since the previous backup. Restoring normally requires the base full backup and the subsequent incremental chain."
    },
    {
      "id": "db-067",
      "chapter": "proiectare",
      "type": "single",
      "question": "What is the purpose of a transaction log backup in SQL Server?",
      "options": [
        "To reset the database to factory settings",
        "To back up only system tables",
        "To capture all transactions since the last log backup",
        "To compress full backups into smaller files"
      ],
      "correct": 2,
      "explanation": "SQL Server transaction-log backups support recovery through the log chain, including point-in-time recovery when the recovery model and backup chain permit it."
    },
    {
      "id": "db-068",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "Instructions: For each of the following statements, select Yes if the statement is true. Otherwise, select No. Each correct selection is worth one point. Description of Behavior:",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A full database backup is a copy of all of the data in the entire database.",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "A transaction log backup backs up all the data in the database.",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "A differential backup copies only data that was changed before the last full backup.",
          "correctItemId": "b"
        },
        {
          "id": "z4",
          "label": "A file or filegroup restore specifies a portion of the database to recover.",
          "correctItemId": "a"
        }
      ],
      "explanation": "A full database backup covers the database data. A log backup captures transaction-log records. A differential backup tracks changes since the latest differential base, normally the last full backup, not changes before it."
    },
    {
      "id": "db-069",
      "chapter": "proiectare",
      "type": "drag_drop",
      "question": "Compare SQL Server Simple recovery with Full recovery when both have the same data-backup schedule and Full also has frequent successful transaction-log backups.",
      "image": "assets/databasesimg/q210_1.jpeg",
      "dragItems": [
        {
          "id": "a",
          "text": "less"
        },
        {
          "id": "b",
          "text": "the same"
        },
        {
          "id": "c",
          "text": "more"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Simple recovery provides ______ work-loss exposure than full recovery.",
          "correctItemId": "c"
        },
        {
          "id": "z2",
          "label": "Simple recovery provides ______ log file backups than full recovery.",
          "correctItemId": "a"
        }
      ],
      "explanation": "Modelul simple nu permite backupuri de transaction log pentru recuperare point-in-time, deci poate exista mai multă pierdere de lucru și mai puține backupuri de log. Traducere: Comparați modelele de recuperare Simple și Full."
    },
    {
      "id": "db-070",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which database term describes applying a backup to recover a damaged or corrupt database?",
      "options": [
        "Truncate",
        "Commit",
        "Attach",
        "Restore"
      ],
      "correct": 3,
      "explanation": "Restore înseamnă restaurarea bazei de date folosind o copie de siguranță. Traducere: Ce termen descrie aplicarea unei copii de siguranță pentru recuperarea unei baze de date deteriorate sau corupte?"
    },
    {
      "id": "db-071",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "Choose the correct SQL Server statements for a full backup and restore of the sales database.",
      "dragItems": [
        {
          "id": "a",
          "text": "BACKUP DATABASE sales TO 'E:\\backups\\sales.bak'"
        },
        {
          "id": "b",
          "text": "BACKUP DATABASE sales TO DISK = 'E:\\backups\\sales.bak'"
        },
        {
          "id": "c",
          "text": "CREATE RESTORE sales FROM 'E:\\backups\\sales.bak'"
        },
        {
          "id": "d",
          "text": "RESTORE DATABASE sales FROM DISK = 'E:\\backups\\sales.bak'"
        },
        {
          "id": "e",
          "text": "RESTORE DATABASE sales FROM 'E:\\backups\\sales.bak'"
        },
        {
          "id": "f",
          "text": "CREATE BACKUP TO DISK = 'E:\\backups\\sales.bak' FROM SALES"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Backup statement",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "Restore statement",
          "correctItemId": "d"
        }
      ],
      "explanation": "În SQL Server se folosesc BACKUP DATABASE ... TO DISK și RESTORE DATABASE ... FROM DISK. Acest item este specific SQL Server. Traducere: Alegeți instrucțiunile SQL Server corecte pentru backup complet și restore al bazei sales."
    },
    {
      "id": "db-072",
      "chapter": "proiectare",
      "type": "single",
      "question": "The main data files used on a Microsoft SQL server have an extension ___________",
      "options": [
        ".ldf",
        ".ndf",
        ".mdf",
        ".bak"
      ],
      "correct": 2,
      "explanation": "Răspuns corect: .mdf. Traducere: Ce extensie are fișierul principal de date Microsoft SQL Server?"
    },
    {
      "id": "db-073",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which of the following, is the filename extension of Microsoft SQL Server transaction log?",
      "options": [
        ".mdf",
        ".ldf",
        ".ndf",
        ".log"
      ],
      "correct": 1,
      "explanation": "Răspuns corect: .ldf. Traducere: Ce extensie are fișierul transaction log în Microsoft SQL Server?"
    },
    {
      "id": "db-074",
      "chapter": "proiectare",
      "type": "single",
      "question": "You delete rows in a table named Order. The corresponding rows in the OrderItem table are automatically deleted. This process is an example of a/an:",
      "options": [
        "Inherited delete",
        "Cascade delete",
        "Functional delete",
        "Waterfall delete",
        "Domino delete"
      ],
      "correct": 1,
      "explanation": "With ON DELETE CASCADE, deleting a parent order deletes its referencing order-detail rows, not the reverse."
    },
    {
      "id": "db-075",
      "chapter": "proiectare",
      "type": "single",
      "question": "You work for a small auto trading company. You need to remove a car from the company database. Information about the car is stored in the following tables. All of the car's parts are custom made, so they each have a row in every table. Cascading deletes are not enabled but referential integrity is. From which table must you first make your deletion?",
      "image": "assets/databasesimg/q217_1.jpeg",
      "options": [
        "Make",
        "Model",
        "Engine",
        "ModelEngine"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: ModelEngine."
    },
    {
      "id": "db-076",
      "chapter": "proiectare",
      "type": "multiple",
      "question": "Which TWO measures directly help protect sensitive patient data from unauthorized access? (Choose two.)",
      "options": [
        "Auditing and monitoring",
        "Strong data encryption",
        "Role-based access control",
        "De-identification only"
      ],
      "correct": [
        1,
        2
      ],
      "explanation": "Criptarea protejează conținutul datelor, iar controlul accesului bazat pe roluri limitează cine poate citi sau modifica datele. Traducere: Care două măsuri ajută direct la protejarea datelor sensibile împotriva accesului neautorizat?"
    },
    {
      "id": "db-077",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which database encryption method can you use to encrypt data at rest?",
      "options": [
        "Transparent data encryption",
        "Column-level encryption",
        "Trusted Platform Module",
        "Application-level encryption"
      ],
      "correct": 0,
      "explanation": "Criptarea transformă datele într-o formă protejată. Metoda se alege în funcție de ce trebuie protejat: fișiere, backupuri, coloane sau date procesate la client. Traducere: Ce metodă de criptare a bazei de date poate proteja datele aflate în repaus (at rest)?"
    },
    {
      "id": "db-078",
      "chapter": "proiectare",
      "type": "single",
      "question": "What does TDE (Transparent Data Encryption) protect?",
      "options": [
        "Network traffic",
        "Database files/backups at rest",
        "Passwords in a table",
        "User permissions"
      ],
      "correct": 1,
      "explanation": "Transparent Data Encryption encrypts database and log files at rest; backups of a TDE database are also encrypted. It does not by itself hide query results from authorized users."
    },
    {
      "id": "db-079",
      "chapter": "proiectare",
      "type": "single",
      "question": "Your organization hosts a web site with a back-end database. The database stores customer data, including credit card numbers. Which of the following is the BEST way to protect the credit card data?",
      "options": [
        "Full database encryption",
        "Whole disk encryption",
        "Database column encryption",
        "File-level encryption"
      ],
      "correct": 2,
      "explanation": "Criptarea transformă datele într-o formă protejată. Metoda se alege în funcție de ce trebuie protejat: fișiere, backupuri, coloane sau date procesate la client. Traducere: Baza de date păstrează numere de card. Care metodă protejează cel mai direct coloana care conține aceste date?"
    },
    {
      "id": "db-080",
      "chapter": "proiectare",
      "type": "single",
      "question": "For classic SQL Server Always Encrypted without secure enclaves, with column keys held outside the server, what is the effect of encrypting the IDNP column?",
      "options": [
        "The server can sort by the ID in plaintext",
        "The server never sees plaintext; some operations are limited",
        "Tables become read-only",
        "Keys are no longer needed"
      ],
      "correct": 1,
      "explanation": "With classic Always Encrypted and keys held by the client, protected column plaintext is encrypted/decrypted at the client, not exposed to the server. Supported operations depend on encryption type; secure-enclave configurations are a separate case."
    },
    {
      "id": "db-081",
      "chapter": "proiectare",
      "type": "single",
      "question": "You want to encrypt database files at rest with minimal changes to application queries. Which approach best matches this requirement?",
      "options": [
        "Column-level encryption",
        "File-level / transparent database encryption",
        "Table-level encryption",
        "Record-level encryption"
      ],
      "correct": 1,
      "explanation": "Criptarea transparentă la nivel de fișiere protejează datele la rest fără a necesita, de regulă, rescrierea fiecărei interogări a aplicației. Traducere: Doriți să criptați fișierele bazei de date în repaus, cu modificări minime ale interogărilor aplicației. Ce abordare se potrivește cel mai bine?"
    },
    {
      "id": "db-082",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which technique is suitable for storing passwords?",
      "options": [
        "TDE",
        "Salted hashing",
        "Masking",
        "Backup Encryption"
      ],
      "correct": 1,
      "explanation": "Hashingul este unidirecțional și este potrivit pentru verificarea parolelor; folosirea unui salt reduce eficiența tabelelor rainbow precompute. Traducere: Ce tehnică este potrivită pentru stocarea parolelor?"
    },
    {
      "id": "db-083",
      "chapter": "proiectare",
      "type": "single",
      "question": "An attacker retrieves hashed passwords from a breached database and uses a precomputed set of hash values to crack the original passwords. Which type of attack is it?",
      "options": [
        "Brute force attack",
        "Dictionary attack",
        "Spraying attack",
        "Rainbow attack"
      ],
      "correct": 3,
      "explanation": "Hashingul este unidirecțional și este potrivit pentru verificarea parolelor; folosirea unui salt reduce eficiența tabelelor rainbow precompute. Traducere: Un atacator folosește un set precomputat de valori hash pentru a recupera parole din hash-uri furate. Ce tip de atac este acesta?"
    },
    {
      "id": "db-084",
      "chapter": "proiectare",
      "type": "single",
      "question": "What does Dynamic Data Masking do?",
      "options": [
        "Encrypts the column on disk",
        "Hides values at display time for certain users",
        "Computes an HMAC",
        "Restores passwords"
      ],
      "correct": 1,
      "explanation": "Mascarea ascunde valorile sensibile la afișare pentru utilizatorii care nu trebuie să vadă datele complete. Traducere: Ce face Dynamic Data Masking?"
    },
    {
      "id": "db-085",
      "chapter": "proiectare",
      "type": "single",
      "question": "What measures can be taken to protect sensitive data from unauthorized access in data security?",
      "options": [
        "Data masking and anonymization",
        "Data aggregation",
        "Data retention",
        "Data classification"
      ],
      "correct": 0,
      "explanation": "Mascarea ascunde valorile sensibile la afișare pentru utilizatorii care nu trebuie să vadă datele complete. Traducere: Ce măsuri pot proteja datele sensibile împotriva accesului neautorizat?"
    },
    {
      "id": "db-086",
      "chapter": "proiectare",
      "type": "single",
      "question": "What is the purpose of database auditing?",
      "options": [
        "To encrypt sensitive data",
        "To track and record database activities for security and compliance",
        "To enhance user experience",
        "To optimize query performance"
      ],
      "correct": 1,
      "explanation": "Auditarea înregistrează activități importante pentru trasabilitate, securitate și conformitate. Traducere: Care este scopul auditării unei baze de date?"
    },
    {
      "id": "db-087",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which activity is typically monitored by network-security tools rather than by the database audit log itself?",
      "options": [
        "Database object changes",
        "Network traffic",
        "Data changes",
        "User access and authentication"
      ],
      "correct": 1,
      "explanation": "Auditul bazei urmărește în principal autentificări, acces, modificări de date și schimbări de schemă. Traficul de rețea este de regulă monitorizat separat. Traducere: Care activitate este monitorizată de obicei de instrumente de securitate a rețelei, nu direct de jurnalul de audit al bazei de date?"
    },
    {
      "id": "db-088",
      "chapter": "proiectare",
      "type": "single",
      "question": "A database has an audit log to track user activities such as login attempts, data modifications, and schema changes. This log helps identify unauthorized or suspicious behavior. What is the primary purpose of enabling database auditing?",
      "options": [
        "Improve performance",
        "Ensure data normalization",
        "Enhance accountability and security",
        "Automate transaction management"
      ],
      "correct": 2,
      "explanation": "Auditing records activity so actions can be attributed and investigated. Its primary purpose here is accountability and security, not counting application rows."
    },
    {
      "id": "db-089",
      "chapter": "proiectare",
      "type": "multiple",
      "question": "What are two main benefits of assigning appropriate data types instead of making every column VARCHAR? (Choose two.)",
      "options": [
        "More efficient data storage",
        "The ability to use values correctly in calculations",
        "Fewer restrictions on invalid data",
        "No need for constraints"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Tipurile corecte economisesc spațiu și permit operații/calcul numeric corect. Traducere: Care sunt două beneficii importante ale folosirii tipurilor de date potrivite în loc de VARCHAR pentru toate coloanele?"
    },
    {
      "id": "db-090",
      "chapter": "proiectare",
      "type": "single",
      "question": "Users receive only the permissions required to perform their assigned tasks. Which security principle is this?",
      "options": [
        "Metadata",
        "Referential integrity",
        "Least privilege",
        "Normalization"
      ],
      "correct": 2,
      "explanation": "Principiul least privilege reduce suprafața de risc prin acordarea strictului necesar. Traducere: Utilizatorii primesc numai permisiunile necesare pentru sarcinile lor. Ce principiu de securitate este aplicat?"
    },
    {
      "id": "db-091",
      "chapter": "proiectare",
      "type": "single",
      "question": "SQL injection is best described as:",
      "options": [
        "A technique that exploits SQL/database-layer input vulnerabilities",
        "An INSERT statement",
        "The normal execution of a stored procedure",
        "Any SQL used from a high-level language"
      ],
      "correct": 0,
      "explanation": "SQL injection exploatează interogări construite nesigur, introducând date care schimbă sensul instrucțiunii SQL. Traducere: Cum este descris cel mai corect SQL injection?"
    },
    {
      "id": "db-092",
      "chapter": "proiectare",
      "type": "single",
      "question": "What is collation in a database?",
      "options": [
        "A method for joining SQL Servers",
        "A database normalization process",
        "A way to link all data about the same real-world object",
        "A set of rules that determines how character data is sorted and compared"
      ],
      "correct": 3,
      "explanation": "Collation reprezintă setul de reguli utilizate pentru compararea și sortarea șirurilor de caractere. Traducere: Ce reprezintă collation într-o bază de date?"
    },
    {
      "id": "db-093",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "For each statement about primary keys, select Yes if it is true. Otherwise, select No.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A UNIQUE constraint is the same as a primary key.",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "A user ID can be an example of a primary key.",
          "correctItemId": "a"
        },
        {
          "id": "z3",
          "label": "Relationships between tables can be enforced with foreign key constraints.",
          "correctItemId": "a"
        }
      ],
      "explanation": "A PRIMARY KEY is unique and non-NULL; UNIQUE is not identical to it. An appropriate UserID can identify a row, and foreign keys enforce relationships."
    },
    {
      "id": "db-094",
      "chapter": "proiectare",
      "type": "single",
      "question": "What does SQL stand for?",
      "options": [
        "Strong Question Language",
        "Structured Query Language",
        "Structured Query Log",
        "Structured Question Language"
      ],
      "correct": 1,
      "explanation": "SQL înseamnă Structured Query Language. Traducere: Ce înseamnă abrevierea SQL?"
    },
    {
      "id": "db-095",
      "chapter": "proiectare",
      "type": "multiple",
      "question": "Which three statements about foreign keys are true? (Choose three.)",
      "options": [
        "A foreign key can use one or more columns to establish a link between two tables.",
        "A foreign key enforces referential integrity by allowing only valid referenced values.",
        "A foreign key is always the same as a primary key.",
        "A table can contain only one foreign key.",
        "A foreign key constraint can be defined when a table is created or altered."
      ],
      "correct": [
        0,
        1,
        4
      ],
      "explanation": "O cheie externă stabilește legătura dintre tabele, contribuie la integritatea referențială și poate fi definită la CREATE TABLE sau ALTER TABLE. Traducere: Care trei afirmații despre cheile externe sunt adevărate? (Alegeți trei.)"
    },
    {
      "id": "db-096",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which statement correctly creates OrderDetails so that OrderID references Orders(OrderID)?",
      "options": [
        "CREATE TABLE OrderDetails (\n OrderDetailID INT NOT NULL PRIMARY KEY,\n OrderID INT,\n FOREIGN KEY (OrderID) REFERENCES Orders(OrderID)\n);",
        "CREATE TABLE OrderDetails (\n OrderDetailID INT NOT NULL PRIMARY KEY,\n OrderID INT,\n PRIMARY KEY (OrderDetailID) REFERENCES Orders(OrderID)\n);",
        "CREATE TABLE OrderDetails (\n OrderDetailID INT NOT NULL PRIMARY KEY,\n OrderID INT,\n FOREIGN KEY REFERENCES Orders(OrderID)\n);"
      ],
      "correct": 0,
      "explanation": "Sintaxa corectă este FOREIGN KEY (OrderID) REFERENCES Orders(OrderID). Traducere: Care instrucțiune creează corect tabelul OrderDetails astfel încât OrderID să facă referire la Orders(OrderID)?"
    },
    {
      "id": "db-097",
      "chapter": "proiectare",
      "type": "multiple",
      "question": "Which two are important reasons for normalizing data? (Choose two.)",
      "options": [
        "Reduce undesirable data dependencies",
        "Reduce redundant data",
        "Reduce the number of tables in every database",
        "Always make the database physically smaller"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Normalization reduces redundant data and undesirable dependencies, helping prevent insertion, update and deletion anomalies. It does not necessarily reduce the number of tables or always reduce physical size."
    },
    {
      "id": "db-098",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which statement best describes a table in Third Normal Form (3NF)?",
      "options": [
        "Every non-prime attribute is non-transitively dependent on every candidate key in the table.",
        "Every non-trivial join dependency is implied by the superkeys.",
        "No non-prime attribute is functionally dependent on a proper subset of a candidate key.",
        "The table has no repeating groups."
      ],
      "correct": 0,
      "explanation": "In 3NF, non-prime attributes must not depend transitively on candidate keys; the relation must also meet the lower normal forms."
    },
    {
      "id": "db-099",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which SQL statement correctly creates a database named testDB?",
      "options": [
        "CREATE DATABASE 'testDB';",
        "CREATE testDB DATABASE;",
        "CREATE DB testDB;",
        "CREATE DATABASE testDB;"
      ],
      "correct": 3,
      "explanation": "Sintaxa este CREATE DATABASE nume_bază;. Numele bazei nu se scrie ca șir între ghilimele simple. Traducere: Ce instrucțiune SQL creează corect o bază de date numită testDB?"
    },
    {
      "id": "db-100",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "What SQL command is used to change the context of the database?",
      "options": [
        "SELECT",
        "ALTER",
        "USE",
        "UPDATE"
      ],
      "correct": 2,
      "explanation": "Răspuns corect: USE. Traducere: Ce comandă SQL schimbă baza de date curentă în care se execută comenzile?"
    },
    {
      "id": "db-101",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Write the correct SQL statement to delete a database named testDB.",
      "options": [
        "DELETE DATABASE testDB",
        "DROP DATABASE testDB",
        "REMOVE DATABASE testDB",
        "CLEAR DATABASE testDB"
      ],
      "correct": 1,
      "explanation": "DROP DATABASE testDB removes the database. DELETE FROM removes table rows and is not the command for dropping a database."
    },
    {
      "id": "db-102",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which SQL statement is used to create a new table? To create a new table, use ______.",
      "options": [
        "CREATE TABLE",
        "ALTER TABLE",
        "UPDATE",
        "INSERT"
      ],
      "correct": 0,
      "explanation": "CREATE TABLE definește structura unui tabel nou. Traducere: Completați instrucțiunea SQL folosită pentru crearea unui tabel nou."
    },
    {
      "id": "db-103",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "You are creating a database object named Student to store the following data: Which syntax should you use to create the object?",
      "options": [
        "CREATE TABLE Student ( ID INT, Name VARCHAR(100), Age INT )",
        "CREATE ( TABLE Student ID INT, Name VARCHAR(100), Age INT )",
        "CREATE Student ( ID INT, Name VARCHAR(100), Age INT )",
        "CREATE TABLE ID INT, Name VARCHAR(100), Age INT )"
      ],
      "correct": 0,
      "explanation": "CREATE TABLE defines the Student table and its columns. INSERT adds rows but does not create that table definition."
    },
    {
      "id": "db-104",
      "chapter": "ddl-obiecte",
      "type": "dropdown",
      "question": "Complete this legacy SQL Server Member table definition. Use the supplied legacy IMAGE type for Photo.",
      "dragItems": [
        {
          "id": "i1",
          "text": "INT NOT NULL PRIMARY KEY"
        },
        {
          "id": "i2",
          "text": "NCHAR(255) NULL"
        },
        {
          "id": "i3",
          "text": "DATE NULL"
        },
        {
          "id": "i4",
          "text": "IMAGE NULL"
        },
        {
          "id": "i5",
          "text": "TIMESTAMP"
        },
        {
          "id": "i6",
          "text": "INT NOT NULL FOREIGN KEY"
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
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i4"
        }
      ],
      "explanation": "INT NOT NULL PRIMARY KEY uniquely identifies rows. NCHAR holds fixed-length Unicode text, DATE stores birth dates and IMAGE is a legacy binary type; new SQL Server designs should use VARBINARY(MAX).",
      "code": "CREATE TABLE dbo.Member (\n Id [1],\n FirstName NCHAR(255) NULL,\n LastName [2],\n DateOfBirth [3],\n PhoneNumber NCHAR(10) NULL,\n Photo [4]\n);"
    },
    {
      "id": "db-105",
      "chapter": "ddl-obiecte",
      "type": "multiple",
      "question": "Which two keywords can validly appear in a CREATE TABLE definition? (Choose two.)",
      "options": [
        "ORDER BY",
        "PRIMARY KEY",
        "INSERT INTO",
        "CONSTRAINT"
      ],
      "correct": [
        1,
        3
      ],
      "explanation": "CONSTRAINT and PRIMARY KEY can appear in CREATE TABLE definitions. INSERT INTO and ORDER BY are not table-definition clauses."
    },
    {
      "id": "db-106",
      "chapter": "ddl-obiecte",
      "type": "true_false",
      "question": "A PRIMARY KEY column can contain NULL values.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "PRIMARY KEY trebuie să identifice fiecare rând; de aceea valorile NULL nu sunt permise. Traducere: Poate o coloană PRIMARY KEY să conțină valori NULL?"
    },
    {
      "id": "db-107",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which keyword can be used in a create table statement?",
      "options": [
        "ORDER BY",
        "DISTINCT",
        "GROUP BY",
        "UNIQUE"
      ],
      "correct": 3,
      "explanation": "CREATE TABLE definește un tabel nou, coloanele sale, tipurile de date și eventualele constrângeri. Traducere: Ce cuvânt-cheie poate fi utilizat într-o definiție CREATE TABLE?"
    },
    {
      "id": "db-108",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Why would you use the AUTO INCREMENT feature in a database table?",
      "options": [
        "To manually set the value of the primary key",
        "To automatically create a unique primary key value for each new record",
        "To allow duplicate values in the primary key",
        "To limit the number of records in the table"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: To automatically create a unique primary key value for each new record."
    },
    {
      "id": "db-109",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which field typically uses the AUTO INCREMENT feature in a database?",
      "options": [
        "Address field",
        "City field",
        "Primary Key field",
        "Foreign Key field"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Primary Key field."
    },
    {
      "id": "db-110",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "What is the purpose of a FOREIGN KEY in a database?",
      "options": [
        "To uniquely identify each record in a table",
        "To enforce references to an eligible primary or unique key",
        "To allow duplicate values in a column",
        "To store NULL values in a table"
      ],
      "correct": 1,
      "explanation": "A foreign key from Employee.DepartmentID to Department.DepartmentID enforces that each non-NULL employee department exists."
    },
    {
      "id": "db-111",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which command should you use to add a column to an existing table?",
      "options": [
        "ALTER",
        "UPDATE",
        "INSERT",
        "SELECT"
      ],
      "correct": 0,
      "explanation": "ALTER TABLE modifică structura tabelului, inclusiv prin ADD COLUMN. Traducere: Ce comandă se utilizează pentru a adăuga o coloană într-un tabel existent?"
    },
    {
      "id": "db-112",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which description best matches ALTER TABLE?",
      "options": [
        "Modify the structure of an existing table, such as adding/dropping columns or constraints",
        "Update row values in a table",
        "Retrieve rows from a table",
        "Create a new database"
      ],
      "correct": 0,
      "explanation": "ALTER TABLE modifică structura unui tabel existent, nu valorile rândurilor. Traducere: Care descriere corespunde cel mai bine instrucțiunii ALTER TABLE?"
    },
    {
      "id": "db-113",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "In PostgreSQL, which DDL statement renames column OldName to NewName in Customer?",
      "options": [
        "ALTER TABLE Customer RENAME COLUMN OldName TO NewName;",
        "UPDATE Customer SET OldName = NewName;",
        "CREATE COLUMN NewName FROM OldName;",
        "INSERT COLUMN NewName;"
      ],
      "correct": 0,
      "explanation": "PostgreSQL supports ALTER TABLE Customer RENAME COLUMN OldName TO NewName. SQL Server commonly uses sp_rename instead; syntax is dialect-dependent."
    },
    {
      "id": "db-114",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which statement correctly removes a foreign key constraint named FK_Order_Customer from the Orders table?",
      "options": [
        "ALTER TABLE Orders DROP CONSTRAINT FK_Order_Customer;",
        "DELETE TABLE Orders FOREIGN KEY FK_Order_Customer;",
        "DELETE FOREIGN KEY FK_Order_Customer;",
        "ALTER FOREIGN KEY FK_Order_Customer;"
      ],
      "correct": 0,
      "explanation": "Drop a named foreign key using ALTER TABLE table_name DROP CONSTRAINT constraint_name. ALTER FOREIGN KEY and DELETE FOREIGN KEY are not the correct commands."
    },
    {
      "id": "db-115",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "The Person table already contains rows. A developer tries to add BirthDate as NOT NULL and the statement fails because existing rows have no value for the new column. Which statement fixes the problem by supplying a default value?",
      "code": "-- Person already contains rows.\nALTER TABLE Person ADD DateOfBirth DATE NOT NULL;",
      "options": [
        "ALTER TABLE Person ADD DateOfBirth VARCHAR(10) NOT NULL;",
        "ALTER TABLE Person ADD DateOfBirth DATE NOT NULL DEFAULT '19000101';",
        "DELETE FROM Person;",
        "ALTER TABLE Person ADD DateOfBirth INT NOT NULL;"
      ],
      "correct": 1,
      "explanation": "Existing rows need a value when a new NOT NULL date column is added. A DEFAULT supplies a value without deleting those rows.",
      "image": "assets/databases/pdf-077-person.png",
      "imageAlt": "person"
    },
    {
      "id": "db-116",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "You have a table named Customer. You need to add a new column named District. Which statement should you use?",
      "options": [
        "MODIFY TABLE Customer ADD District INTEGER",
        "ALTER TABLE Customer MODIFY District INTEGER",
        "MODIFY TABLE Customer District INTEGER",
        "ALTER TABLE Customer ADD District INTEGER"
      ],
      "correct": 3,
      "explanation": "ALTER TABLE Customer ADD District INTEGER adds the new integer column to an existing table in SQL Server."
    },
    {
      "id": "db-117",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "How would you remove a column in a table using the ALTER statement?",
      "options": [
        "ALTER TABLE table_name REMOVE COLUMN column_name",
        "ALTER TABLE table_name DROP column_name",
        "ALTER TABLE table_name DROP COLUMN column_name",
        "ALTER TABLE table_name DELETE column_name"
      ],
      "correct": 2,
      "explanation": "ALTER TABLE modifică structura unui tabel existent, de exemplu prin ADD, ALTER sau DROP COLUMN/CONSTRAINT. Traducere: Cum eliminați o coloană folosind ALTER TABLE?"
    },
    {
      "id": "db-118",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "The statement below fails because REMOVE is not the correct keyword for deleting a column. Which replacement statement is correct?",
      "code": "ALTER TABLE Customers\nREMOVE SSN;",
      "options": [
        "ALTER TABLE Customers DELETE SSN;",
        "ALTER TABLE Customers DELETE COLUMN SSN;",
        "ALTER TABLE Customers DROP SSN;",
        "ALTER TABLE Customers DROP COLUMN SSN;"
      ],
      "correct": 3,
      "explanation": "SQL Server removes a column with ALTER TABLE Customers DROP COLUMN SSN. REMOVE is not the correct keyword."
    },
    {
      "id": "db-119",
      "chapter": "ddl-obiecte",
      "type": "drag_drop",
      "question": "Match each command to what it removes.",
      "dragItems": [
        {
          "id": "a",
          "text": "TRUNCATE TABLE"
        },
        {
          "id": "b",
          "text": "DELETE FROM table"
        },
        {
          "id": "c",
          "text": "DROP TABLE"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Selected rows (or all rows if WHERE is omitted), while keeping the table",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "All rows while keeping the table definition",
          "correctItemId": "a"
        },
        {
          "id": "z3",
          "label": "The table definition together with its data",
          "correctItemId": "c"
        }
      ],
      "explanation": "DELETE lucrează cu rânduri, TRUNCATE golește tabelul, iar DROP elimină obiectul tabel. Traducere: Asociați fiecare comandă cu ceea ce elimină."
    },
    {
      "id": "db-120",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "What statement would you use to delete the Equipment table?",
      "options": [
        "DELETE TABLE Equipment",
        "DROP TABLE Equipment",
        "REMOVE TABLE Equipment",
        "TRUNCATE TABLE Equipment"
      ],
      "correct": 1,
      "explanation": "DROP TABLE removes the table object and its data. DELETE and TRUNCATE remove rows while retaining the table."
    },
    {
      "id": "db-121",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which statement removes all rows from a table while keeping the table definition and without logging each individual row deletion?",
      "options": [
        "DELETE TABLE",
        "DROP TABLE",
        "TRUNCATE TABLE",
        "REMOVE TABLE"
      ],
      "correct": 2,
      "explanation": "TRUNCATE TABLE removes rows by deallocating data pages rather than logging each individual row deletion, subject to database restrictions. It retains the table definition and is still logged at allocation level."
    },
    {
      "id": "db-122",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "You have a table named Product that contains one million rows. You need to search for product information in the Product table by using the product's unique ID. What will make this type of search more efficient?",
      "options": [
        "A cursor",
        "A subquery",
        "A trigger",
        "An index"
      ],
      "correct": 3,
      "explanation": "Un index accelerează căutările. Un clustered index determină ordinea fizică a datelor, iar un nonclustered index este o structură separată cu chei și referințe către rânduri. Traducere: Tabelul Product are un milion de rânduri și căutați după un ID unic. Ce obiect poate face căutarea mai eficientă?"
    },
    {
      "id": "db-123",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "The query below is slow on a very large ProAthlete table. Which database object added on Salary can improve filtering performance?",
      "code": "SELECT *\nFROM ProAthlete\nWHERE Salary > 500000;",
      "options": [
        "NOT NULL constraint",
        "DEFAULT constraint",
        "Index",
        "Foreign key"
      ],
      "correct": 2,
      "explanation": "Un index pe coloana folosită frecvent în condiția WHERE poate reduce numărul de rânduri citite. Traducere: Interogarea de mai jos este lentă pe un tabel ProAthlete foarte mare. Ce obiect de bază de date adăugat pe Salary poate îmbunătăți performanța filtrării?"
    },
    {
      "id": "db-124",
      "chapter": "ddl-obiecte",
      "type": "dropdown",
      "question": "For each statement about indexes, select Yes or No.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "An appropriate index can improve SELECT performance.",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Indexes require additional storage space.",
          "correctItemId": "a"
        },
        {
          "id": "z3",
          "label": "Adding indexes always makes INSERT and UPDATE faster.",
          "correctItemId": "b"
        }
      ],
      "explanation": "Indexurile pot accelera citirea, dar ocupă spațiu și pot adăuga cost la operațiile de scriere. Traducere: Analizați afirmațiile despre avantajele și costurile unui index."
    },
    {
      "id": "db-125",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "What does a non-clustered index create?",
      "options": [
        "Additional rows in the base table",
        "Additional columns in the base table",
        "A separate index structure containing key values and row locators",
        "A full duplicate copy of the table"
      ],
      "correct": 2,
      "explanation": "Un index non-clustered este o structură separată de date care păstrează cheile indexului și referințe către rândurile tabelului. Traducere: Ce creează un index non-clustered?"
    },
    {
      "id": "db-126",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "The terms \"bitmap,\" \"b-tree,\" and \"hash\" refer to which type of database structure?",
      "options": [
        "View",
        "Function",
        "Index",
        "Stored procedure",
        "Trigger"
      ],
      "correct": 2,
      "explanation": "Un index accelerează căutările. Un clustered index determină ordinea fizică a datelor, iar un nonclustered index este o structură separată cu chei și referințe către rânduri. Traducere: Termenii bitmap, b-tree și hash descriu ce tip de structură de bază de date?"
    },
    {
      "id": "db-127",
      "chapter": "ddl-obiecte",
      "type": "dropdown",
      "question": "Identify whether each index characteristic describes a clustered or a non-clustered index. Use the introductory SQL Server clustered-index model; physical page layout does not guarantee SELECT result order.",
      "dragItems": [
        {
          "id": "a",
          "text": "Non-clustered"
        },
        {
          "id": "b",
          "text": "Clustered"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Sorts the physical table data by the indexed key.",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "Stores index entries in a separate structure from the table data.",
          "correctItemId": "a"
        }
      ],
      "explanation": "A clustered index organizes data at its leaf level by the clustering key; a nonclustered index is a separate structure with locators. ORDER BY is still required to guarantee result order."
    },
    {
      "id": "db-128",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which type of index determines the physical order of table rows according to the indexed key? Use the introductory SQL Server index model. ORDER BY is still required to guarantee query result order.",
      "options": [
        "non-sequential",
        "sequential",
        "non-clustered",
        "clustered"
      ],
      "correct": 3,
      "explanation": "Un clustered index stabilește ordinea fizică a datelor după cheia indexată. Un non-clustered index păstrează o structură separată cu referințe către rânduri. Traducere: Ce tip de index determină ordinea fizică a rândurilor după cheia indexată?"
    },
    {
      "id": "db-129",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "You have a table product that contains one million row. You need to search for product information using the following query What will make this type of search more efficient?",
      "code": "SELECT ProductName, Price FROM Product WHERE Category = 'Science Books'",
      "options": [
        "A clustered index on the ProductName column",
        "A clusterd index on the Price column",
        "A non-clustered index on the Category column",
        "A non-clustered on the Price column"
      ],
      "correct": 2,
      "explanation": "A nonclustered index whose leading key is Category can locate matching category rows. Including ProductName and Price can cover this query; actual plan efficiency depends on selectivity and workload."
    },
    {
      "id": "db-130",
      "chapter": "ddl-obiecte",
      "type": "dropdown",
      "question": "Complete each statement about the Flight table indexes.",
      "image": "assets/databasesimg/q163_1.png",
      "dragItems": [
        {
          "id": "a",
          "text": "foreign key"
        },
        {
          "id": "b",
          "text": "clustered index"
        },
        {
          "id": "c",
          "text": "nonclustered index"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Adding a ______ on FlightNumber physically sorts rows by FlightNumber.",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "Adding a ______ on Airline speeds retrieval but does not physically sort rows by Airline.",
          "correctItemId": "c"
        }
      ],
      "explanation": "Clustered index ordonează fizic rândurile; nonclustered index accelerează căutarea fără a schimba ordinea fizică. Traducere: Completați afirmațiile despre indicii din tabelul Flight. Alegeți clustered index când ordinea fizică a rândurilor este relevantă și nonclustered index când se dorește doar accelerarea căutării."
    },
    {
      "id": "db-131",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which ANSI-style statement creates an index named IX_Employee_EmployeeID on Employee(EmployeeID)?",
      "options": [
        "CREATE INDEX IX_Employee_EmployeeID ON Employee (EmployeeID);",
        "CREATE TABLE INDEX IX_Employee_EmployeeID ON Employee (EmployeeID);",
        "ALTER INDEX Employee ADD EmployeeID;",
        "INSERT INDEX IX_Employee_EmployeeID INTO Employee (EmployeeID);"
      ],
      "correct": 0,
      "explanation": "Sintaxa standard este CREATE INDEX nume_index ON tabel (coloană). Traducere: Ce instrucțiune creează corect un index pe o coloană?"
    },
    {
      "id": "db-132",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "What is a view? A virtual table defined by a query is a ______.",
      "options": [
        "view",
        "trigger",
        "index",
        "stored procedure"
      ],
      "correct": 0,
      "explanation": "Un view prezintă rezultatul unei interogări ca un obiect reutilizabil. Traducere: Ce este un view într-o bază de date?"
    },
    {
      "id": "db-133",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Evaluate the following statement. A view can be used to ensure referential integrity. Instructions: Review the statement. If it makes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that makes the statement correct",
      "options": [
        "No change is needed.",
        "Save an extra copy of data stored in a separate table.",
        "Limit access to specific rows or columns of data in a table.",
        "Save historical data before deleting it from the base table."
      ],
      "correct": 2,
      "explanation": "A view can expose selected rows or columns. Referential integrity is enforced by appropriate constraints such as foreign keys, not merely by a regular view."
    },
    {
      "id": "db-134",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "When you query a regular (non-materialized) view, where do the returned values normally come from?",
      "options": [
        "From a permanently stored copy inside the view",
        "From the current data in the underlying tables evaluated by the view query",
        "From an automatic backup file",
        "Only from an index created on the view"
      ],
      "correct": 1,
      "explanation": "Un view obișnuit păstrează definiția interogării, nu o copie permanentă a rândurilor; la interogare se folosesc datele curente din tabelele de bază. Traducere: Când interogați un view obișnuit, de unde provin datele returnate?"
    },
    {
      "id": "db-135",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "You have a table named Product. You create a view that includes all the products from the Product table that are in the Furniture category. You execute a statement on the Product table that deletes all the products in the Furniture category. After you execute the statement, the result set of the view is:",
      "options": [
        "Empty",
        "Deleted",
        "Unchanged",
        "Archived"
      ],
      "correct": 0,
      "explanation": "A regular view evaluates its definition against current underlying data. After all Furniture rows are deleted, a view restricted to Furniture returns no rows."
    },
    {
      "id": "db-136",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which syntax correctly creates a view named ActiveProducts from a SELECT query?",
      "options": [
        "CREATE VIEW ActiveProducts AS SELECT * FROM Product WHERE Active = 1;",
        "CREATE VIEW ActiveProducts AS UPDATE Product;",
        "DROP VIEW ActiveProducts AS SELECT * FROM Product;",
        "CREATE ActiveProducts VIEW SELECT * FROM Product;"
      ],
      "correct": 0,
      "explanation": "Sintaxa de bază este CREATE VIEW nume AS SELECT ... . Traducere: Ce sintaxă creează corect un view numit ActiveProducts pe baza unei interogări SELECT?"
    },
    {
      "id": "db-137",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which keyword must be included in a create view statement?",
      "options": [
        "WHERE",
        "ORDER BY",
        "UPDATE",
        "SELECT"
      ],
      "correct": 3,
      "explanation": "O vedere (VIEW) este un tabel virtual definit printr-o interogare SELECT. De regulă afișează datele curente din tabelele de bază. Traducere: Ce cuvânt-cheie trebuie inclus într-o instrucțiune CREATE VIEW?"
    },
    {
      "id": "db-138",
      "chapter": "ddl-obiecte",
      "type": "dropdown",
      "question": "Complete the view definition for endangered European birds.",
      "image": "assets/databasesimg/q172_1.jpeg",
      "dragItems": [
        {
          "id": "a",
          "text": "JOIN Birds b"
        },
        {
          "id": "b",
          "text": "ADD VIEW [dbo].[EndangeredEuropeanBirds_View]"
        },
        {
          "id": "c",
          "text": "CREATE VIEW [dbo].[EndangeredEuropeanBirds_View]"
        },
        {
          "id": "d",
          "text": "AS SELECT b.Id, b.Name, b.Status"
        },
        {
          "id": "e",
          "text": "SELECT b.Id, b.Name, b.Status"
        },
        {
          "id": "f",
          "text": "FROM Birds b"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 1",
          "correctItemId": "c"
        },
        {
          "id": "z2",
          "label": "Line 2",
          "correctItemId": "d"
        },
        {
          "id": "z3",
          "label": "Line 3",
          "correctItemId": "f"
        }
      ],
      "explanation": "O vedere se definește cu CREATE VIEW ... AS SELECT ... FROM ..., după care pot urma condițiile WHERE din scenariu. Traducere: Completați definiția view-ului pentru păsările europene pe cale de dispariție."
    },
    {
      "id": "db-139",
      "chapter": "ddl-obiecte",
      "type": "dropdown",
      "question": "Complete the view definition for North American mammals.",
      "dragItems": [
        {
          "id": "a",
          "text": "AS JOIN a.Id, a.Name"
        },
        {
          "id": "b",
          "text": "GENERATE VIEW [dbo].[NorthAmericanMammals_View]"
        },
        {
          "id": "c",
          "text": "CREATE VIEW [dbo].[NorthAmericanMammals_View]"
        },
        {
          "id": "d",
          "text": "JOIN Animal a"
        },
        {
          "id": "e",
          "text": "AS SELECT a.Id, a.Name"
        },
        {
          "id": "f",
          "text": "FROM Animal a"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 1",
          "correctItemId": "c"
        },
        {
          "id": "z2",
          "label": "Line 2",
          "correctItemId": "e"
        },
        {
          "id": "z3",
          "label": "Line 3",
          "correctItemId": "f"
        }
      ],
      "explanation": "The syntax is CREATE VIEW name AS SELECT columns FROM table WHERE conditions. The class and region conditions restrict the view to North American mammals.",
      "code": "[1]\n[2]\n[3]\nWHERE a.Class = 'Mammals' AND a.InNorthAmerica = 1;"
    },
    {
      "id": "db-140",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which of the following statements are true of a view?",
      "options": [
        "A view can insert data into tables",
        "A view simplifies how users work with data.",
        "A view is not reusable.",
        "A view joins static tables using user-defined parameters."
      ],
      "correct": 1,
      "explanation": "O vedere (VIEW) este un tabel virtual definit printr-o interogare SELECT. De regulă afișează datele curente din tabelele de bază. Traducere: Care afirmații despre view-uri sunt adevărate?"
    },
    {
      "id": "db-141",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "What is the correct syntax for deleting a view?",
      "options": [
        "DELETE VIEW view_name",
        "REMOVE VIEW view_name",
        "DROP VIEW view_name",
        "ALTER VIEW view_name"
      ],
      "correct": 2,
      "explanation": "DROP VIEW view_name removes the view definition; it does not delete the underlying table data."
    },
    {
      "id": "db-142",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "You need a view that exposes the Name column from Games. When the view is queried, the result must be sorted by Name. Which two-statement sequence is correct?",
      "options": [
        "CREATE VIEW vw_Mygames AS SELECT Name FROM Games ORDER BY Name;",
        "CREATE VIEW vw_Mygames AS SELECT * FROM Games;",
        "CREATE VIEW vw_Mygames AS SELECT Name FROM Games;\nSELECT Name FROM vw_Mygames ORDER BY Name;",
        "CREATE VIEW vw_Mygames AS SELECT * FROM Games WHERE Name BETWEEN 'A' AND 'Z';"
      ],
      "correct": 2,
      "explanation": "A regular SQL Server view cannot guarantee alphabetical result order. Create a view selecting Name, then SELECT Name FROM the view ORDER BY Name."
    },
    {
      "id": "db-143",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "You need to remove a view named EmployeeView from your database. Which statement should you use?",
      "options": [
        "DELETE VIEW EmployeeView",
        "DELETE EmployeeView",
        "DROP EmployeeView",
        "DROP VIEW EmployeeView"
      ],
      "correct": 3,
      "explanation": "DROP VIEW removes the view definition without deleting its source rows."
    },
    {
      "id": "db-144",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "A named group of SQL statements that can be executed in a database is called a:",
      "options": [
        "Subroutine",
        "Formula",
        "Stored procedure",
        "Method"
      ],
      "correct": 2,
      "explanation": "O procedură stocată păstrează instrucțiuni SQL reutilizabile și se execută explicit; poate primi parametri și poate modifica date. Traducere: Cum se numește un grup de instrucțiuni SQL cu nume, care poate fi executat în baza de date?"
    },
    {
      "id": "db-145",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which is a valid purpose of a stored procedure?",
      "options": [
        "Encapsulate and reuse database logic",
        "Reduce the size of every table",
        "Bypass all permissions",
        "Replace primary keys"
      ],
      "correct": 0,
      "explanation": "Procedurile stocate permit păstrarea și reutilizarea logicii SQL pe server și pot primi parametri. Traducere: Care este un scop valid al unei proceduri stocate?"
    },
    {
      "id": "db-146",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "You develop a database to store data about textbooks. The data must be stored to process at a later time. Which database object should you use to store the data?",
      "options": [
        "View",
        "Table",
        "Function",
        "Stored procedure"
      ],
      "correct": 1,
      "explanation": "Răspuns corect: Table. Traducere: Datele despre manuale trebuie stocate pentru prelucrare ulterioară. Ce obiect de bază de date trebuie utilizat?"
    },
    {
      "id": "db-147",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "You write a series of SQL statements that perform a long, complex query. The statements then send the result in an email. You want to be able to manually call the code any time you need to. Which database object can you use to store the code ?",
      "options": [
        "Stored procedure",
        "Function",
        "Trigger",
        "View"
      ],
      "correct": 0,
      "explanation": "A stored procedure stores an executable named routine that can run multiple SQL statements and be called on demand."
    },
    {
      "id": "db-148",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which permission does a user need in order to run a stored procedure?",
      "options": [
        "EXECUTE",
        "SELECT",
        "ALTER",
        "CONNECT"
      ],
      "correct": 0,
      "explanation": "Permisiunea EXECUTE permite executarea unei proceduri stocate. Traducere: Ce permisiune este necesară pentru rularea unei proceduri stocate?"
    },
    {
      "id": "db-149",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "A group of commands that return a value is called _________.",
      "options": [
        "Procedure",
        "Function",
        "Trigger",
        "View"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Function."
    },
    {
      "id": "db-150",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "One difference between a function and a stored procedure is that a function:",
      "options": [
        "Must be called from a trigger.",
        "Must return a value.",
        "Cannot contain a transaction.",
        "Cannot accept parameters."
      ],
      "correct": 1,
      "explanation": "A SQL Server function must return a scalar or table. Stored procedures have different calling conventions and can return result sets and output parameters."
    },
    {
      "id": "db-151",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which SQL query calls a scalar function named CalculateAge to calculate and display the age of employees?",
      "options": [
        "SELECT Name, dbo.CalculateAge(BirthDate) AS Age FROM Employees;",
        "EXEC CalculateAge @BirthDate = '1990-01-01';",
        "SELECT dbo.CalculateAge() FROM Employees;",
        "SELECT * FROM dbo.CalculateAge();"
      ],
      "correct": 0,
      "explanation": "O funcție returnează o valoare sau un tabel și poate fi folosită în expresii/interogări conform tipului ei. Traducere: Ce interogare apelează corect funcția scalară CalculateAge pentru fiecare angajat?"
    },
    {
      "id": "db-152",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which SQL query calls a table-valued function named GetEmployeesByDepartment and displays all employees in department 3?",
      "options": [
        "SELECT * FROM dbo.GetEmployeesByDepartment(3);",
        "SELECT * FROM Employees WHERE DepartmentID = dbo.GetEmployeesByDepartment(3);",
        "EXEC GetEmployeesByDepartment 3;",
        "SELECT dbo.GetEmployeesByDepartment();"
      ],
      "correct": 0,
      "explanation": "O funcție returnează o valoare sau un tabel și poate fi folosită în expresii/interogări conform tipului ei. Traducere: Ce interogare apelează corect funcția tabelară GetEmployeesByDepartment pentru departamentul 3?"
    },
    {
      "id": "db-153",
      "chapter": "ddl-obiecte",
      "type": "dropdown",
      "question": "For each statement about views, select Yes or No.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Views can help limit what people see within a database.",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Views can be created from multiple tables.",
          "correctItemId": "a"
        },
        {
          "id": "z3",
          "label": "Views can be altered using an ADD COLUMN clause.",
          "correctItemId": "b"
        },
        {
          "id": "z4",
          "label": "Views normally store temporary copies of table data.",
          "correctItemId": "b"
        }
      ],
      "explanation": "View-urile pot limita expunerea datelor și pot combina tabele; nu stochează în mod normal copii temporare ale datelor și nu se modifică prin ADD COLUMN. Traducere: Pentru fiecare afirmație despre VIEW, selectați Yes sau No."
    },
    {
      "id": "db-154",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "A view vw_customers currently selects FirstName and LastName. You must add CustomerID as the first column. Which statement should you use?",
      "options": [
        "CREATE VIEW vw_customers AS SELECT CustomerID, FirstName, LastName FROM Customers",
        "DROP VIEW vw_customers; CREATE VIEW vw_customers AS SELECT CustomerID, FirstName, LastName FROM Customers",
        "ALTER VIEW vw_customers AS SELECT CustomerID, FirstName, LastName FROM Customers",
        "ALTER TABLE vw_customers ADD CustomerID"
      ],
      "correct": 2,
      "explanation": "ALTER VIEW replaces the view SELECT definition. Put CustomerID first in the SELECT list to expose it as the first output column."
    },
    {
      "id": "db-155",
      "chapter": "ddl-obiecte",
      "type": "multiple",
      "question": "Which two are common benefits of stored procedures? (Choose two.)",
      "options": [
        "Complex SQL code can be reused",
        "Speed / reduced repeated parsing and network work",
        "They remove all permission requirements",
        "They make every database portable between vendors"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Stored procedures can reduce network round trips and reuse cached plans, which may improve performance. Performance improvement is not automatic for every workload."
    },
    {
      "id": "db-156",
      "chapter": "ddl-obiecte",
      "type": "dropdown",
      "question": "For each statement about ALTER TABLE, select Yes or No.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "ALTER TABLE can add a new column.",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "In SQL Server, ALTER TABLE can directly change the IDENTITY specification of an existing column.",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "ALTER TABLE can drop columns.",
          "correctItemId": "a"
        },
        {
          "id": "z4",
          "label": "ALTER TABLE can modify the data type of an existing column when the conversion is valid.",
          "correctItemId": "a"
        }
      ],
      "explanation": "SQL Server ALTER TABLE can add or drop columns and alter compatible types. It cannot directly toggle the IDENTITY property of an existing column."
    },
    {
      "id": "db-157",
      "chapter": "ddl-obiecte",
      "type": "drag_drop",
      "question": "Arrange the essential parts needed to create an index named idx_last_name on Customers(LastName).",
      "dragItems": [
        {
          "id": "a",
          "text": "CREATE INDEX idx_last_name"
        },
        {
          "id": "b",
          "text": "Customers(LastName)"
        },
        {
          "id": "c",
          "text": "ON"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Step 1",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Step 2",
          "correctItemId": "c"
        },
        {
          "id": "z3",
          "label": "Step 3",
          "correctItemId": "b"
        }
      ],
      "explanation": "Sintaxa de bază este CREATE INDEX nume ON tabel(coloană). Traducere: Aranjați elementele necesare pentru a crea indexul idx_last_name pe Customers(LastName)."
    },
    {
      "id": "db-158",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "An OrderDetails table must reject non-NULL quantities lower than 1. Which column definition enforces this condition? NULL remains allowed unless NOT NULL is added.",
      "options": [
        "Qty INT CONSTRAINT (Qty >= 1)",
        "Qty INT UNIQUE (Qty >= 1)",
        "Qty INT CHECK (Qty >= 1)",
        "Qty INT HAVING (Qty >= 1)"
      ],
      "correct": 2,
      "explanation": "Constrângerea CHECK verifică valoarea înainte ca rândul să fie acceptat. Traducere: Tabelul OrderDetails trebuie să respingă cantitățile mai mici decât 1. Ce definiție de coloană aplică corect regula?"
    },
    {
      "id": "db-159",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which statement suppresses the '(n row(s) affected)' message after SQL statements in a stored procedure?",
      "options": [
        "SET NO COUNT",
        "SET NO COUNTING",
        "SET NO COUNTING ON",
        "SET NOCOUNT ON"
      ],
      "correct": 3,
      "explanation": "SET NOCOUNT ON împiedică afișarea numărului de rânduri afectate după fiecare instrucțiune. Traducere: Ce instrucțiune suprimă mesajul „(n row(s) affected)\" după executarea instrucțiunilor SQL într-o procedură stocată?"
    },
    {
      "id": "db-160",
      "chapter": "ddl-obiecte",
      "type": "drag_drop",
      "question": "A stored procedure receives @orderDetailID as an input parameter and returns the related @orderID as an output parameter. Choose the correct part for each step.",
      "dragItems": [
        {
          "id": "a",
          "text": "CREATE PROCEDURE uspGetOrderID"
        },
        {
          "id": "b",
          "text": "AS BEGIN"
        },
        {
          "id": "c",
          "text": "SELECT @OrderID = OrderID FROM OrderDetails WHERE OrderDetailID = @OrderDetailID"
        },
        {
          "id": "d",
          "text": "WHERE orderdetailid = @OrderDetailID"
        },
        {
          "id": "e",
          "text": "END"
        },
        {
          "id": "f",
          "text": "RETURN @OrderID"
        },
        {
          "id": "g",
          "text": "@OrderDetailID int"
        },
        {
          "id": "h",
          "text": "SELECT @orderid = orderid FROM orderdetails"
        },
        {
          "id": "i",
          "text": "@OrderDetailID int, @OrderID int OUTPUT"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Step 1",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Step 2",
          "correctItemId": "i"
        },
        {
          "id": "z3",
          "label": "Step 3",
          "correctItemId": "b"
        },
        {
          "id": "z4",
          "label": "Step 4",
          "correctItemId": "c"
        },
        {
          "id": "z5",
          "label": "Step 5",
          "correctItemId": "e"
        }
      ],
      "explanation": "Declare the procedure and its input/output parameters, open BEGIN, assign the output using SELECT filtered by OrderDetailID, and close END. An OUTPUT parameter is distinct from a RETURN status."
    },
    {
      "id": "db-161",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "A clustered index is especially useful for which type of query?",
      "options": [
        "Queries that access rows randomly with no ordering",
        "Queries that never use ORDER BY or GROUP BY",
        "Queries that return a range of values",
        "Queries that always return very large result sets"
      ],
      "correct": 2,
      "explanation": "Deoarece datele sunt ordonate fizic după cheia indexului clustered, interogările pe intervale pot fi foarte eficiente. Traducere: Pentru ce tip de interogare este deosebit de util un index clustered?"
    },
    {
      "id": "db-162",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which SQL statement is used to retrieve rows from a table? To retrieve rows from a table, use the ______ statement.",
      "options": [
        "SELECT",
        "INSERT",
        "UPDATE",
        "DELETE"
      ],
      "correct": 0,
      "explanation": "SELECT este instrucțiunea folosită pentru interogarea și preluarea datelor din tabele. Traducere: Ce instrucțiune SQL se utilizează pentru a prelua rânduri dintr-un tabel?"
    },
    {
      "id": "db-163",
      "chapter": "extragere-date",
      "type": "single",
      "question": "What command do you use to perform a query in SQL?",
      "options": [
        "USE",
        "SELECT",
        "QUERY",
        "CHOSE"
      ],
      "correct": 1,
      "explanation": "Răspuns corect: SELECT. Traducere: Ce comandă se utilizează pentru a executa o interogare în SQL?"
    },
    {
      "id": "db-164",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You execute a SELECT statement without an ORDER BY clause. How are the rows organized in the result set?",
      "options": [
        "In no predictable order",
        "In alphabetical order by FirstName",
        "In chronological order by DateJoined",
        "Always in the order in which the rows were inserted"
      ],
      "correct": 0,
      "explanation": "Fără ORDER BY, SQL nu garantează ordinea rândurilor. Ordinea fizică sau ordinea de inserare nu trebuie presupusă. Traducere: Executați un SELECT fără clauza ORDER BY. În ce ordine sunt garantate rândurile rezultatului?"
    },
    {
      "id": "db-165",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You have a table named Employee that includes four columns. You execute the following statement Which columns are returned?",
      "code": "SELECT * FROM Employee",
      "options": [
        "all columns",
        "only the last column",
        "only the first column",
        "only the first and last columns"
      ],
      "correct": 0,
      "explanation": "Răspuns corect: all columns. Traducere: Executați SELECT * FROM Employee. Ce coloane sunt returnate?"
    },
    {
      "id": "db-166",
      "chapter": "extragere-date",
      "type": "single",
      "question": "A flower shop wants to see every flower ordered, but each flower should only show once. Which SQL statement will fulfill that need?",
      "options": [
        "DISTINCT",
        "UNIQUE",
        "ONLY",
        "TOP"
      ],
      "correct": 0,
      "explanation": "DISTINCT removes duplicate flower names from the selected result. TOP 1 would return only one row, not one of each flower."
    },
    {
      "id": "db-167",
      "chapter": "extragere-date",
      "type": "single",
      "question": "A stored procedure contains the following query The stored procedure return all null values. You verify that there is data in the person table What is likely the cause of the problem Assume SQL Server with CONCAT_NULL_YIELDS_NULL enabled.",
      "code": "SELECT 'Greetings' + Prefix + ' ' + FirstName FROM Person;",
      "options": [
        "You must specify the NULLIF keyword in the query",
        "The plus (+) operator cannot be used to append character data",
        "The Prefix or FirstName columns have null values",
        "You must specify the join keyword in the select statement"
      ],
      "correct": 2,
      "explanation": "A NULL operand makes a + string concatenation expression NULL under normal SQL Server CONCAT_NULL_YIELDS_NULL behavior."
    },
    {
      "id": "db-168",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Evaluate the following statement. Use the FROM keyword in a SELECT statement to return rows that meet a specific condition. Instructions: Review the statement. If it makes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that makes the statement correct",
      "options": [
        "No change is needed",
        "ORDER BY",
        "UNION",
        "WHERE"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: WHERE."
    },
    {
      "id": "db-169",
      "chapter": "extragere-date",
      "type": "true_false",
      "question": "The AND operator is used when both conditions in a WHERE clause must be true.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "AND returnează rândul numai dacă ambele condiții sunt adevărate. Traducere: Operatorul AND este utilizat atunci când ambele condiții din clauza WHERE trebuie să fie adevărate."
    },
    {
      "id": "db-170",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You have a database table named SongInformation as defined below: You need to create a Structured Query Language (SQL) query to retrieve only the names of songs that sold more than 1000 compact discs (CDs). Which query should you use?",
      "image": "assets/databasesimg/q044_1.png",
      "options": [
        "SELECT Name FROM SongInformation WHERE CDsSold > 1000",
        "SELECT Name FROM CDsSold WHERE CDsSold > 1000",
        "SELECT FROM SongInformation WHERE CDsSold > 1000",
        "SELECT * FROM SongInformation"
      ],
      "correct": 0,
      "explanation": "WHERE filtrează rândurile înainte ca rezultatul să fie returnat sau agregat. Traducere: Trebuie să afișați doar numele melodiilor care au vândut mai mult de 1000 de CD-uri. Ce interogare este corectă?"
    },
    {
      "id": "db-171",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which query correctly returns all orders where Ship_State excludes Texas (TX) and Arizona (AZ)?",
      "options": [
        "SELECT * FROM Orders WHERE NOT Ship_State = 'TX' AND NOT Ship_State = 'AZ';",
        "SELECT * FROM Orders WHERE NOT Ship_State = 'TX' OR NOT Ship_State = 'AZ';",
        "SELECT * FROM Orders WHERE Ship_State NOT = 'TX' AND Ship_State NOT = 'AZ';",
        "SELECT * FROM Orders WHERE Ship_State NOT = 'TX' OR Ship_State NOT = 'AZ';"
      ],
      "correct": 0,
      "explanation": "Use AND between the two inequality conditions, or NOT IN(TX,AZ). OR between the inequalities would admit every non-NULL state."
    },
    {
      "id": "db-172",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You have the Cars table shown below. How many rows are returned by the following SQL query?",
      "code": "SELECT *\nFROM Cars AS c\nWHERE c.Origin <> 'USA'\n  AND c.Color <> 'Black';",
      "image": "assets/databases/pdf-074-cars.png",
      "options": [
        "4",
        "5",
        "6",
        "7"
      ],
      "correct": 0,
      "explanation": "Both conditions must be true: Origin is not USA and Color is not Black. Sedan, Minivan, Hatchback and SUV match, so four rows are returned.",
      "imageAlt": "cars"
    },
    {
      "id": "db-173",
      "chapter": "extragere-date",
      "type": "single",
      "question": "The Product table contains the data shown below. How many rows are returned by the following query?",
      "code": "SELECT Name\nFROM Product\nWHERE Quantity IS NOT NULL;",
      "image": "assets/databasesimg/q047_1.png",
      "options": [
        "0",
        "1",
        "2",
        "3",
        "4"
      ],
      "correct": 3,
      "explanation": "IS NOT NULL păstrează rândurile în care Quantity are o valoare. Valorile 33, 0 și 29 nu sunt NULL; ultimul rând este NULL. Prin urmare sunt returnate 3 rânduri. Traducere: Tabelul Product conține datele de mai jos. Câte rânduri sunt returnate de următoarea interogare?"
    },
    {
      "id": "db-174",
      "chapter": "extragere-date",
      "type": "single",
      "question": "A sales manager wants to see all customers with sales of at least 50000 who either reside in Los Angeles, California, or in the states of Nevada or Arizona. Which SQL statement will satisfy the request?",
      "options": [
        "SELECT LastName, FirstName FROM Customers WHERE Sales >= 50000 OR ((City = 'Los Angeles' AND State = 'California') OR State IN ('Nevada','Arizona'));",
        "SELECT LastName, FirstName FROM Customers WHERE Sales > 50000 AND ((City = 'Los Angeles' AND State = 'California') OR State IN ('Nevada','Arizona'));",
        "SELECT LastName, FirstName FROM Customers WHERE Sales >= 50000 AND ((City = 'Los Angeles' AND State = 'California') OR State IN ('Nevada','Arizona'));",
        "SELECT LastName, FirstName FROM Customers WHERE Sales > 50000 OR ((City = 'Los Angeles' AND State = 'California') AND State IN ('Nevada','Arizona'));"
      ],
      "correct": 2,
      "explanation": "Use Sales>=50000 and parenthesize the location alternatives. AND requires both the sales threshold and one eligible location."
    },
    {
      "id": "db-175",
      "chapter": "extragere-date",
      "type": "single",
      "question": "What clause would you use with the SELECT command that would pull records based on a range?",
      "options": [
        "BETWEEN",
        "LIKE",
        "DISTINCT",
        "UNION"
      ],
      "correct": 0,
      "explanation": "BETWEEN este utilizat pentru filtrarea valorilor cuprinse între două limite. Traducere: Pentru a filtra valori dintr-un interval inclusiv, completați operatorul corect."
    },
    {
      "id": "db-176",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You are writing a select statement to find every product whose name contains a specific character. Which keyword should you use in your where clause?",
      "options": [
        "LIKE",
        "IN",
        "BETWEEN",
        "ALL"
      ],
      "correct": 0,
      "explanation": "LIKE with percent wildcards performs a substring pattern match; underscore matches a single character."
    },
    {
      "id": "db-177",
      "chapter": "extragere-date",
      "type": "single",
      "question": "The products table contains the following data Which query will retrieve ItemName and Price when chocolate appears in the ItemDescription column?",
      "image": "assets/databases/pdf-080-products.png",
      "options": [
        "SELECT ItemName, Price FROM Products Where ItemDescription = 'chocolate';",
        "SELECT ItemName, Price FROM Products WHERE ItemDescription LIKE '%chocolate%';",
        "SELECT ItemName, Price FROM Products WHERE ItemDEscription LIKE 'chocolate';",
        "SELECT ItemName, Price FROM Products WHERE ItemDescription IN '%chocolate%';"
      ],
      "correct": 1,
      "explanation": "LIKE with leading and trailing percent wildcards finds chocolate anywhere in the description. Actual case matching depends on database collation.",
      "imageAlt": "products"
    },
    {
      "id": "db-178",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which query returns orders with Order_Date strictly greater than January 1, 2017, and a non-NULL state other than California (CA)?",
      "options": [
        "SELECT * FROM Orders WHERE Order_Date > '2017-01-01' AND Ship_State <> 'CA';",
        "SELECT * FROM Orders WHERE Order_Date > '2017-01-01' OR Ship_State <> 'CA';",
        "SELECT * FROM Orders WHERE Order_Date = '2017-01-01' AND Ship_State LIKE 'CA';",
        "SELECT * FROM Orders WHERE Order_Date > '2017-01-01' OR Ship_State LIKE 'CA';"
      ],
      "correct": 0,
      "explanation": "Trebuie îndeplinite simultan două condiții: data să fie după 1 ianuarie 2017 și statul să fie diferit de CA, deci folosim AND și <>. Traducere: Ce interogare returnează comenzile plasate după ianuarie 2017 din toate statele, cu excepția Californiei (CA)?"
    },
    {
      "id": "db-179",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You need to list the name and price of each product, sorted by price from highest to lowest. Which statement should you use?",
      "options": [
        "SELECT Name, Price FROM Product ORDER BY Price DESC",
        "SELECT Name, Price FROM Product ORDER BY Price ASC",
        "SELECT Name, BOTTOM Price FROM Product",
        "SELECT Name, TOP Price FROM Product"
      ],
      "correct": 0,
      "explanation": "ORDER BY stabilește explicit ordinea rezultatului; DESC sortează descrescător, iar ASC crescător. Traducere: Trebuie să afișați numele și prețul produselor, sortate de la prețul cel mai mare la cel mai mic. Ce instrucțiune este corectă?"
    },
    {
      "id": "db-180",
      "chapter": "extragere-date",
      "type": "dropdown",
      "question": "Complete the query to display customers from Utah, sorted by last name.",
      "dragItems": [
        {
          "id": "a",
          "text": "ORDER BY"
        },
        {
          "id": "b",
          "text": "HAVING"
        },
        {
          "id": "c",
          "text": "WHEN"
        },
        {
          "id": "d",
          "text": "SORT BY"
        },
        {
          "id": "e",
          "text": "WHERE"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "SELECT lastname, firstname FROM customers ______ state = 'UT'",
          "correctItemId": "e"
        },
        {
          "id": "z2",
          "label": "______ lastname",
          "correctItemId": "a"
        }
      ],
      "explanation": "WHERE filters customers to State=UT and ORDER BY LastName sorts the returned rows."
    },
    {
      "id": "db-181",
      "chapter": "extragere-date",
      "type": "dropdown",
      "question": "Complete the query to return LastName, PhoneNumber, and Extension only for customers whose Extension has a value (is not NULL). Sort the result by LastName.",
      "code": "SELECT LastName, PhoneNumber, Extension\nFROM Customers\nWHERE [Blank 1] [Blank 2]\n[Blank 3] LastName;",
      "dragItems": [
        {
          "id": "a",
          "text": "HAVING"
        },
        {
          "id": "b",
          "text": "SORT BY"
        },
        {
          "id": "c",
          "text": "ORDER BY"
        },
        {
          "id": "d",
          "text": "= NULL"
        },
        {
          "id": "e",
          "text": "ID"
        },
        {
          "id": "f",
          "text": "IS NOT NULL"
        },
        {
          "id": "g",
          "text": "LastName"
        },
        {
          "id": "h",
          "text": "Extension"
        },
        {
          "id": "i",
          "text": "PhoneNumber"
        },
        {
          "id": "j",
          "text": "IS VALID"
        },
        {
          "id": "k",
          "text": "GROUP BY"
        },
        {
          "id": "l",
          "text": "IS NULL"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank 1 — coloana verificată",
          "correctItemId": "h"
        },
        {
          "id": "z2",
          "label": "Blank 2 — condiția pentru valori existente",
          "correctItemId": "f"
        },
        {
          "id": "z3",
          "label": "Blank 3 — clauza de sortare",
          "correctItemId": "c"
        }
      ],
      "explanation": "Extension IS NOT NULL selects customers with an extension, and ORDER BY LastName sorts them.",
      "image": "assets/databases/pdf-054-customer-extension.png",
      "imageAlt": "customer extension"
    },
    {
      "id": "db-182",
      "chapter": "extragere-date",
      "type": "dropdown",
      "question": "Complete a SQL Server query for flights arriving at LGA later today, latest arrival first. Flight may contain dates other than today.",
      "image": "assets/databases/pdf-083-flight.png",
      "dragItems": [
        {
          "id": "i1",
          "text": "AND"
        },
        {
          "id": "i2",
          "text": "OR"
        },
        {
          "id": "i3",
          "text": ">"
        },
        {
          "id": "i4",
          "text": "<"
        },
        {
          "id": "i5",
          "text": "ORDER BY"
        },
        {
          "id": "i6",
          "text": "GROUP BY"
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
          "correctItemId": "i5"
        }
      ],
      "explanation": "AND combines the airport condition with both lower and upper arrival-time bounds. ArrivalTime>GETDATE() selects future times and the next-day boundary excludes tomorrow. DESC sorts latest first.",
      "code": "SELECT FlightNumber FROM Flight\nWHERE DestinationAirport='LGA' [1] ArrivalTime [2] GETDATE()\nAND ArrivalTime < DATEADD(day,1,CAST(GETDATE() AS date))\n[3] ArrivalTime DESC;",
      "imageAlt": "flight"
    },
    {
      "id": "db-183",
      "chapter": "extragere-date",
      "type": "single",
      "question": "A report must include students who enrolled on or after June 1, 2020 OR students who graduated during calendar year 2020. Sort by Enrollment_Date from newest to oldest. Which query is correct?",
      "options": [
        "SELECT * FROM Student WHERE Enrollment_Date >= '2020-06-01' OR (Academic_Status = 'Graduated' AND Graduation_Date >= '2020-01-01' AND Graduation_Date < '2021-01-01') ORDER BY Enrollment_Date DESC;",
        "SELECT * FROM Student WHERE Enrollment_Date >= '2020-06-01' AND Academic_Status = 'Graduated' AND Graduation_Date >= '2020-01-01' ORDER BY Enrollment_Date ASC;",
        "SELECT * FROM Student WHERE Enrollment_Date >= '2020-06-01' OR Graduation_Date >= '2020-01-01' ORDER BY Enrollment_Date ASC;",
        "SELECT * FROM Student WHERE Academic_Status = 'Graduated' AND Graduation_Date < '2020-01-01' ORDER BY Enrollment_Date DESC;"
      ],
      "correct": 0,
      "explanation": "Prima parte selectează înscrierile de la 1 iunie 2020. A doua parte selectează numai absolvenții cu Graduation_Date în intervalul [2020-01-01, 2021-01-01). ORDER BY ... DESC pune înscrierile cele mai recente primele. Traducere: Raportul trebuie să includă elevii înscriși la sau după 1 iunie 2020 ori elevii care au absolvit în anul 2020 și să sorteze rezultatul după Enrollment_Date descrescător. Ce interogare este corectă?"
    },
    {
      "id": "db-184",
      "chapter": "extragere-date",
      "type": "dropdown",
      "question": "Complete the query to display the addresses of the earliest 10 buildings that have been inspected.",
      "image": "assets/databases/pdf-055-building.png",
      "dragItems": [
        {
          "id": "a",
          "text": "IS NOT NULL"
        },
        {
          "id": "b",
          "text": "HAVING"
        },
        {
          "id": "c",
          "text": "GROUP BY 10"
        },
        {
          "id": "d",
          "text": "COUNT"
        },
        {
          "id": "e",
          "text": "ORDER BY"
        },
        {
          "id": "f",
          "text": "IS NULL"
        },
        {
          "id": "g",
          "text": "TOP 10"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "SELECT ______ Address",
          "correctItemId": "g"
        },
        {
          "id": "z2",
          "label": "WHERE InspectionDate ______",
          "correctItemId": "a"
        },
        {
          "id": "z3",
          "label": "______ InspectionDate",
          "correctItemId": "e"
        }
      ],
      "explanation": "TOP 10 limits the result, IS NOT NULL excludes uninspected buildings and ORDER BY InspectionDate ASC returns the earliest inspection dates first.",
      "imageAlt": "building"
    },
    {
      "id": "db-185",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which SQL function returns the total sum of values in a numeric column?",
      "options": [
        "SUM()",
        "COUNT()",
        "AVG()",
        "MAX()"
      ],
      "correct": 0,
      "explanation": "SUM() adună valorile numerice din coloană. Traducere: Ce funcție SQL returnează suma totală a valorilor dintr-o coloană numerică?"
    },
    {
      "id": "db-186",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which function returns the average value from a column? To return the arithmetic mean of a numeric column, use ______.",
      "options": [
        "AVG()",
        "SUM()",
        "COUNT()",
        "MIN()"
      ],
      "correct": 0,
      "explanation": "AVG() calculează media valorilor numerice nenule. Traducere: Ce funcție returnează media valorilor dintr-o coloană?"
    },
    {
      "id": "db-187",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Evaluate the Employee table. What value is returned by the query below?",
      "code": "-- Employee salaries: Gomez 83000, Parker 38000, Smith 70000, Tang 68000\nSELECT MAX(Salary) FROM Employee;",
      "options": [
        "83000",
        "1",
        "Gomez",
        "38000"
      ],
      "correct": 0,
      "explanation": "MAX(Salary) returns the highest salary, 83000. It does not return the employee name or the row ID."
    },
    {
      "id": "db-188",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which SQL statement returns the number of customers in each city?",
      "options": [
        "SELECT City, COUNT(*) FROM Customers;",
        "SELECT City FROM Customers GROUP BY COUNT(*);",
        "SELECT COUNT(*) FROM Customers GROUP BY City;",
        "SELECT City, COUNT(*) FROM Customers GROUP BY City;"
      ],
      "correct": 3,
      "explanation": "GROUP BY formează grupuri de rânduri cu aceleași valori, astfel încât funcțiile agregate să poată fi calculate pentru fiecare grup. Traducere: Ce instrucțiune SQL returnează numărul de clienți pentru fiecare oraș?"
    },
    {
      "id": "db-189",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You have a table named Employee that includes the following columns: EmployeeID, Emp1oyeeName. Which statement should you use to return the number of rows in the table?",
      "options": [
        "SELECT * FROM Employee",
        "SELECT SUM(*) FROM Employee",
        "SELECT COUNT (rows) FROM Employee",
        "SELECT COUNT(*) FROM Employee"
      ],
      "correct": 3,
      "explanation": "COUNT(*) returns the number of rows in Employee, including rows with NULL values in other columns."
    },
    {
      "id": "db-190",
      "chapter": "extragere-date",
      "type": "single",
      "question": "The Product table contains the following data. You execute the following statement What is the value returned by this statement?",
      "code": "SELECT COUNT(*) FROM Product WHERE Quantity > 18",
      "image": "assets/databasesimg/q064_1.png",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: 3."
    },
    {
      "id": "db-191",
      "chapter": "extragere-date",
      "type": "single",
      "question": "ID identifies an order and can repeat across line items. Which query returns the distinct order count, average line total, maximum line total and grand total?",
      "image": "assets/databases/pdf-057-items-on-order.png",
      "options": [
        "SELECT COUNT(DISTINCT ID), AVG(LineItemTotal), MAX(LineItemTotal), SUM(LineItemTotal) FROM ItemsOnOrder;",
        "SELECT COUNT(ID), AVG(LineItemTotal), MAX(LineItemTotal), SUM(LineItemTotal) FROM ItemsOnOrder;",
        "SELECT SUM(ID), AVG(LineItemTotal), MAX(LineItemTotal), SUM(LineItemTotal) FROM ItemsOnOrder;"
      ],
      "correct": 0,
      "explanation": "ID identifies an order and repeats across its line items, so COUNT(DISTINCT ID) counts orders. AVG, MAX and SUM aggregate the per-line LineItemTotal values; COUNT(ID) alone would count line items, not orders.",
      "imageAlt": "items on order"
    },
    {
      "id": "db-192",
      "chapter": "extragere-date",
      "type": "dropdown",
      "question": "Complete the query to display total points per player for TeamID = 1.",
      "dragItems": [
        {
          "id": "a",
          "text": "COUNT"
        },
        {
          "id": "b",
          "text": "HAVING"
        },
        {
          "id": "c",
          "text": "GROUP BY"
        },
        {
          "id": "d",
          "text": "WHERE"
        },
        {
          "id": "e",
          "text": "PlayerID"
        },
        {
          "id": "f",
          "text": "SUM(Points)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "SELECT PlayerID, ______",
          "correctItemId": "f"
        },
        {
          "id": "z2",
          "label": "______ TeamID = 1",
          "correctItemId": "d"
        },
        {
          "id": "z3",
          "label": "______ PlayerID",
          "correctItemId": "c"
        }
      ],
      "explanation": "SUM totals Points, WHERE selects TeamID=1 and GROUP BY PlayerID returns one total per player.",
      "image": "assets/databases/pdf-056-player-stat.png",
      "imageAlt": "player stat"
    },
    {
      "id": "db-193",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which clause groups rows by ProductName so SUM(Amount) can calculate total sales for each product?",
      "options": [
        "GROUP BY",
        "ORDER BY",
        "WHERE",
        "HAVING"
      ],
      "correct": 0,
      "explanation": "ProductName este coloana non-agregată, deci rezultatele trebuie grupate după ProductName. Traducere: Completați interogarea pentru a returna suma vânzărilor pentru fiecare produs."
    },
    {
      "id": "db-194",
      "chapter": "extragere-date",
      "type": "single",
      "question": "What does this query return? SELECT Department, COUNT(*) FROM Employees GROUP BY Department HAVING COUNT(*) > 5;",
      "options": [
        "Departments with more than 5 employees",
        "All employees in each department",
        "Only departments that have exactly 5 employees",
        "An error, because HAVING can't be used with COUNT()"
      ],
      "correct": 0,
      "explanation": "GROUP BY formează grupuri de rânduri cu aceleași valori, astfel încât funcțiile agregate să poată fi calculate pentru fiecare grup. Traducere: Ce returnează interogarea care grupează angajații după Department și păstrează numai grupurile cu COUNT(*) > 5?"
    },
    {
      "id": "db-195",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which SQL statement will return the country and number of orders in each country where the number of orders is less than 50? OrderID represent an individual order, Country represent the country, and Orders represents the number of orders.",
      "options": [
        "SELECT COUNT (OrderId), Country FROM Orders HAVING COUNT(OrderId) < 50; GROUP BY Country",
        "SELECT Country, OrderId FROM Orders GROUP BY Country WHERE COUNT(OrderId) < 50;",
        "SELECT COUNT (OrderId), Country FROM Orders GROUP BY Country HAVING COUNT(OrderId) < 50;",
        "SELECT Country, OrderId FROM Orders WHERE Count(OrderId) < 50; GROUP BY Country"
      ],
      "correct": 2,
      "explanation": "GROUP BY Country forms the country groups. HAVING COUNT(OrderId) < 50 filters those groups after aggregation; COUNT(OrderId) counts non-NULL order identifiers."
    },
    {
      "id": "db-196",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You want to determine whether 'Sample Movie' appears only once in the Movie table. The query below returns a syntax error. What should you change so the query runs correctly?",
      "code": "SELECT Title\nFROM Movie\nWHERE Title = 'Sample Movie'\nORDER BY Title\nGROUP BY Title\nHAVING COUNT(*) = 1;",
      "options": [
        "Remove the GROUP BY clause",
        "Change HAVING to HAVING COUNT(Title) = 1",
        "Remove the ORDER BY clause",
        "Change HAVING to HAVING COUNT(1) = 1"
      ],
      "correct": 2,
      "explanation": "SQL clause order is SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY. Removing the prematurely placed ORDER BY fixes this query; moving it to the end would also be valid."
    },
    {
      "id": "db-197",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You need to display the customer name together with the OrderID. The data is stored in the two tables shown below. Which SQL operation should you use to combine columns from both tables?",
      "code": "Customers: CustomerID (PK), CustomerName\n\nOrders: OrderID (PK), CustomerID (FK)",
      "options": [
        "AND",
        "BETWEEN",
        "JOIN",
        "COMBINE"
      ],
      "correct": 2,
      "explanation": "JOIN combină rânduri și coloane din tabele diferite pe baza unei relații, de exemplu Customers.CustomerID = Orders.CustomerID. Traducere: Trebuie să afișați numele clientului împreună cu OrderID. Datele sunt păstrate în cele două tabele de mai jos. Ce operație SQL trebuie utilizată pentru a combina coloane din ambele tabele?"
    },
    {
      "id": "db-198",
      "chapter": "extragere-date",
      "type": "single",
      "question": "A Students table contains CourseID as a foreign key to Courses.CourseID. Which query correctly returns the student name and course name where CourseID matches?",
      "options": [
        "SELECT students.name, courses.name FROM students INNER JOIN courses WHERE students.courseID = courses.courseID",
        "SELECT students.name, courses.name FROM students INNER JOIN courses ON students.courseID = courses.courseID",
        "SELECT students.name, courses.name FROM students INNER JOIN ON students.courseID = courses.courseID",
        "SELECT students.name, courses.name FROM students INNER JOIN ON courses WHERE students.courseID = courses.courseID"
      ],
      "correct": 1,
      "explanation": "INNER JOIN are nevoie de condiția de asociere introdusă prin ON. Cele două coloane CourseID trebuie comparate între tabele. Traducere: Tabelul Students conține CourseID ca cheie externă către Courses.CourseID. Ce interogare returnează corect numele elevului și numele cursului pentru valorile CourseID corespunzătoare?"
    },
    {
      "id": "db-199",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Return each enrolled student’s first and last name and the course name from student, enrollment and course. Which query is correct?",
      "image": "assets/databases/pdf-075-student-enrollment-course.png",
      "options": [
        "SELECT s.firstName,s.lastName,c.name FROM course c INNER JOIN enrollment e ON e.courseId=c.courseId INNER JOIN student s ON e.studentId=s.studentID;",
        "SELECT s.firstName,s.lastName,c.name FROM student s CROSS JOIN course c;",
        "SELECT s.firstName,s.lastName,c.name FROM student s JOIN course c ON s.studentID=c.courseId;"
      ],
      "correct": 0,
      "explanation": "INNER JOIN through enrollment connects a student to each course they actually take. Unenrolled students have no enrollment match and are excluded.",
      "imageAlt": "student enrollment course"
    },
    {
      "id": "db-200",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You have two tables named Cars and Colors as defined below. The two tables are related by ColorId. You run the following SQL statement: SELECT * FROM Cars LEFT OUTER JOIN Colors ON Cars.ColorID = Colors. ColorID How many rows does the SQL statement return?",
      "code": "SELECT *\nFROM Cars\nLEFT OUTER JOIN Colors\n  ON Cars.ColorID = Colors.ColorID;",
      "image": "assets/databases/pdf-061-cars-colors.png",
      "options": [
        "0",
        "2",
        "3",
        "6"
      ],
      "correct": 2,
      "explanation": "The LEFT OUTER JOIN preserves all three Cars rows, including the Truck with no matching ColorID. Unique color IDs mean three result rows.",
      "imageAlt": "cars colors"
    },
    {
      "id": "db-201",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You have Customer and Orders tables. The result must include all customers and their orders, including customers who have no orders. Which join should you use if Customer is the left table?",
      "options": [
        "CROSS JOIN",
        "INNER JOIN",
        "LEFT OUTER JOIN",
        "FULL OUTER JOIN"
      ],
      "correct": 2,
      "explanation": "LEFT OUTER JOIN păstrează toate rândurile din tabelul din stânga (Customer) și adaugă comenzile potrivite; clienții fără comenzi rămân în rezultat cu valori NULL pentru coloanele Orders. Traducere: Aveți tabelele Customer și Orders. Rezultatul trebuie să includă toți clienții și comenzile lor, inclusiv clienții fără comenzi. Ce JOIN trebuie utilizat?"
    },
    {
      "id": "db-202",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You have two tables. Each table has three rows. How many rows will be included in the Cartesian product of these two tables?",
      "options": [
        "0",
        "3",
        "6",
        "9"
      ],
      "correct": 3,
      "explanation": "Every row of the first three-row table pairs with every row of the other: 3×3=9 rows."
    },
    {
      "id": "db-203",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You execute the following statement This type of operation is called a/an:",
      "code": "SELECT EmployeeID, FirstName, DepartmentName FROM Employee, Department;",
      "options": [
        "Intersection",
        "Outer join",
        "Equi-join",
        "Cartesian product"
      ],
      "correct": 3,
      "explanation": "The comma-separated tables without a join condition form a Cartesian product."
    },
    {
      "id": "db-204",
      "chapter": "extragere-date",
      "type": "drag_drop",
      "question": "Match each set operator to its result.",
      "dragItems": [
        {
          "id": "a",
          "text": "UNION"
        },
        {
          "id": "b",
          "text": "INTERSECT"
        },
        {
          "id": "c",
          "text": "EXCEPT"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Combines rows from both result sets and removes duplicates",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Returns only rows that appear in both result sets",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "Returns rows from the first result set that are not in the second",
          "correctItemId": "c"
        }
      ],
      "explanation": "UNION combină, INTERSECT păstrează partea comună, iar EXCEPT returnează diferența dintre primul și al doilea rezultat. Traducere: Asociați fiecare operator de mulțimi cu rezultatul produs."
    },
    {
      "id": "db-205",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which SQL set operator returns rows from the first result set that do not appear in the second result set?",
      "options": [
        "EXCEPT",
        "INTERSECT",
        "SEARCH",
        "EXCLUDE"
      ],
      "correct": 0,
      "explanation": "EXCEPT returnează rândurile din primul set care nu apar în al doilea set de rezultate. Traducere: Ce operator de mulțimi SQL returnează rândurile din primul rezultat care nu apar în al doilea rezultat?"
    },
    {
      "id": "db-206",
      "chapter": "extragere-date",
      "type": "single",
      "question": "The SQL _________ operator takes the results of two queries and returns only rows that appear in both result sets.",
      "options": [
        "UNION",
        "INTERSECT",
        "EXCEPT",
        "JOIN"
      ],
      "correct": 1,
      "explanation": "INTERSECT returns distinct rows present in both compatible result sets."
    },
    {
      "id": "db-207",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You execute the following statement This statement is an example of a/an:",
      "code": "SELECT DepartmentName FROM Department WHERE DepartmentID = (SELECT DepartmentID FROM Employee WHERE EmployeeID = 1234)",
      "options": [
        "subquery",
        "view",
        "trigger",
        "index"
      ],
      "correct": 0,
      "explanation": "O interogare inclusă în altă interogare se numește subquery / subinterogare. Traducere: Completați termenul pentru un SELECT aflat în interiorul altei interogări SELECT."
    },
    {
      "id": "db-208",
      "chapter": "extragere-date",
      "type": "single",
      "question": "What does the following code return?",
      "code": "SELECT DepartmentName FROM Department WHERE DepartmentID = ANY ( SELECT DepartmentID FROM Employee WHERE JobTitle = 'Manager' );",
      "options": [
        "Returns the names of departments that have at least one employee with the job title 'Manager'",
        "Returns all employee names with the job title 'Manager'",
        "Returns departments where all employees are managers",
        "Returns departments with more than one manager"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Returns the names of departments that have at least one employee with the job title 'Manager'."
    },
    {
      "id": "db-209",
      "chapter": "extragere-date",
      "type": "single",
      "question": "What does the following code return?",
      "code": "SELECT EmployeeName FROM Employee WHERE Salary > ALL ( SELECT Salary FROM Employee WHERE DepartmentID = 5 );",
      "options": [
        "Employees with the highest salary in the company",
        "Employees whose salary is higher than all employees in department 5",
        "All employees from department 5",
        "Employees with the same salary as everyone in department 5"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Employees whose salary is higher than all employees in department 5."
    },
    {
      "id": "db-210",
      "chapter": "extragere-date",
      "type": "single",
      "question": "An inventory report must list every product with every location, even when there is no relationship between them. Which join should be used?",
      "options": [
        "INNER JOIN",
        "LEFT OUTER JOIN",
        "CROSS JOIN",
        "FULL OUTER JOIN"
      ],
      "correct": 2,
      "explanation": "A CROSS JOIN returns every product/location combination, rather than requiring matching keys."
    },
    {
      "id": "db-211",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Evaluate the query: SELECT e2.EmployeeID, e2.LastName, e1.LastName AS Supervisor FROM Employees e1 JOIN Employees e2 ON e2.ReportsTo = e1.EmployeeID. What kind of join pattern is this?",
      "code": "SELECT e2.EmployeeID, e2.LastName, e1.LastName AS Supervisor\nFROM Employees e1\nJOIN Employees e2 ON e2.ReportsTo = e1.EmployeeID;",
      "options": [
        "Self join",
        "Cross join",
        "Full outer join",
        "Union"
      ],
      "correct": 0,
      "explanation": "Același tabel apare de două ori cu aliasuri diferite, deci este un self join. Traducere: Interogarea unește tabelul Employees cu el însuși pentru a afișa supervizorul. Ce tip de model JOIN este acesta?"
    },
    {
      "id": "db-212",
      "chapter": "extragere-date",
      "type": "single",
      "question": "A report must show OrderID, Subtotal, and a computed SalesTax equal to 5% of Subtotal. Which SELECT expression correctly creates the computed column?",
      "options": [
        "SELECT OrderID, Subtotal, Subtotal * 0.05 AS SalesTax FROM Orders",
        "SELECT OrderID, Subtotal, SalesTax = 5 FROM Orders",
        "ALTER TABLE Orders ADD SalesTax = 5%",
        "SELECT OrderID, Subtotal FROM Orders GROUP BY SalesTax"
      ],
      "correct": 0,
      "explanation": "O coloană calculată poate fi creată direct în SELECT cu o expresie aritmetică și un alias. Traducere: Raportul trebuie să afișeze OrderID, Subtotal și o coloană calculată SalesTax egală cu 5% din Subtotal. Ce expresie este corectă?"
    },
    {
      "id": "db-213",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Customers has 300 rows and PotentialCustomers has 10 rows. Exactly 2 complete rows are identical between the two result sets. How many rows does UNION return? Assume each input result set has no duplicate rows within itself.",
      "options": [
        "308",
        "310",
        "312",
        "300"
      ],
      "correct": 0,
      "explanation": "UNION elimină duplicatele: 300 + 10 − 2 = 308. Traducere: Customers are 300 de rânduri, PotentialCustomers 10, iar 2 rânduri complete sunt identice între seturi. Câte rânduri returnează UNION?"
    },
    {
      "id": "db-214",
      "chapter": "extragere-date",
      "type": "drag_drop",
      "question": "Match each JOIN type to its result.",
      "dragItems": [
        {
          "id": "a",
          "text": "FULL OUTER JOIN"
        },
        {
          "id": "b",
          "text": "RIGHT OUTER JOIN"
        },
        {
          "id": "c",
          "text": "INNER JOIN"
        },
        {
          "id": "d",
          "text": "LEFT OUTER JOIN"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Rows with a match in both tables",
          "correctItemId": "c"
        },
        {
          "id": "z2",
          "label": "All rows from the left table plus matching rows from the right",
          "correctItemId": "d"
        },
        {
          "id": "z3",
          "label": "All rows from the right table plus matching rows from the left",
          "correctItemId": "b"
        },
        {
          "id": "z4",
          "label": "All rows from both tables, matched where possible",
          "correctItemId": "a"
        }
      ],
      "explanation": "LEFT and RIGHT OUTER JOIN preserve their respective sides; FULL OUTER JOIN preserves unmatched rows from both sides; INNER JOIN returns matches only."
    },
    {
      "id": "db-215",
      "chapter": "extragere-date",
      "type": "dropdown",
      "question": "A query uses Address1 + ' ' + Address2 in SELECT. Select Yes or No for each statement.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The plus signs must be replaced by ampersands.",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "The Location column will appear even though it is not selected.",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "Plus signs can concatenate character strings in SQL Server.",
          "correctItemId": "a"
        },
        {
          "id": "z4",
          "label": "A column not used in the SELECT list is not shown in the result.",
          "correctItemId": "a"
        }
      ],
      "explanation": "În SQL Server, operatorul + poate concatena șiruri; coloanele care nu sunt în SELECT nu apar în rezultat. Traducere: O interogare folosește Address1 + ' ' + Address2 în SELECT. Selectați Yes sau No.",
      "image": "assets/databases/pdf-002-locations.png"
    },
    {
      "id": "db-216",
      "chapter": "extragere-date",
      "type": "single",
      "question": "A sales manager wants customers not in Los Angeles and not in Oregon or Washington. Which condition is clearest and correct?",
      "options": [
        "WHERE city <> 'Los Angeles' AND state NOT IN ('Oregon','Washington')",
        "WHERE city <> 'Los Angeles' OR state NOT IN ('Oregon','Washington')",
        "WHERE city = 'Los Angeles' AND state IN ('Oregon','Washington')",
        "WHERE city NOT IN ('Los Angeles','Oregon','Washington')"
      ],
      "correct": 0,
      "explanation": "NOT IN exprimă corect excluderea mai multor valori, iar AND cere ca ambele excluderi să fie respectate. Traducere: Managerul dorește clienții care nu sunt în Los Angeles și nici în Oregon sau Washington. Care condiție este corectă și clară?"
    },
    {
      "id": "db-217",
      "chapter": "extragere-date",
      "type": "single",
      "question": "In SQL Server, which expression concatenates FirstName and LastName with a space using CONCAT?",
      "options": [
        "CONCAT(FirstName, ' ', LastName)",
        "FirstName CONCAT LastName",
        "CONCAT = FirstName + LastName",
        "MERGE(FirstName, LastName)"
      ],
      "correct": 0,
      "explanation": "SQL Server CONCAT accepts multiple arguments. Function arity varies across SQL dialects, so this item specifies SQL Server."
    },
    {
      "id": "db-218",
      "chapter": "extragere-date",
      "type": "single",
      "question": "What does NULLIF(A, B) return when A and B are equal?",
      "options": [
        "NULL",
        "A",
        "B",
        "0"
      ],
      "correct": 0,
      "explanation": "NULLIF returnează NULL dacă cele două expresii sunt egale; altfel returnează prima expresie. Traducere: Ce returnează NULLIF(A, B) atunci când A și B sunt egale?"
    },
    {
      "id": "db-219",
      "chapter": "extragere-date",
      "type": "single",
      "question": "A query returns only rows that have a matching key in both joined tables. Which join is being used?",
      "options": [
        "FULL OUTER JOIN",
        "INNER JOIN",
        "LEFT OUTER JOIN",
        "RIGHT OUTER JOIN"
      ],
      "correct": 1,
      "explanation": "INNER JOIN returnează doar rândurile care au o potrivire în ambele tabele. Traducere: O interogare returnează numai rândurile care au o cheie corespunzătoare în ambele tabele. Ce JOIN este utilizat?"
    },
    {
      "id": "db-220",
      "chapter": "extragere-date",
      "type": "single",
      "question": "A weekly report must show the top five salespeople by their total sales during the last seven days. Which query has the correct grouping and clause order?",
      "options": [
        "SELECT TOP 5 Salesperson, SUM(Amount) AS TotalSales\nFROM sales_summary\nWHERE SaleDate BETWEEN GETDATE()-7 AND GETDATE()\nGROUP BY Salesperson\nORDER BY SUM(Amount) DESC",
        "SELECT TOP 5 SaleDate, Salesperson, SUM(Amount)\nFROM sales_summary\nWHERE SaleDate BETWEEN GETDATE()-7 AND GETDATE()\nGROUP BY SaleDate, Salesperson\nORDER BY SUM(Amount) DESC",
        "SELECT TOP 5 Salesperson, SUM(Amount)\nFROM sales_summary\nWHERE SaleDate BETWEEN GETDATE()-7 AND GETDATE()\nORDER BY SUM(Amount) DESC\nGROUP BY Salesperson",
        "SELECT TOP 5 Salesperson, SUM(Amount)\nFROM sales_summary\nHAVING SaleDate BETWEEN GETDATE()-7 AND GETDATE()\nGROUP BY Salesperson\nORDER BY SUM(Amount) DESC"
      ],
      "correct": 0,
      "explanation": "Pentru totalul pe agent se grupează numai după Salesperson. WHERE filtrează perioada înainte de grupare, iar ORDER BY sortează totalurile după agregare. Traducere: Un raport săptămânal trebuie să afișeze primii cinci agenți după totalul vânzărilor din ultimele șapte zile. Ce interogare are gruparea și ordinea clauzelor corecte?"
    },
    {
      "id": "db-221",
      "chapter": "extragere-date",
      "type": "single",
      "question": "A subquery can return several EmployeeID values. The outer query currently uses '= ALL'. Which keyword should replace ALL so an employee is returned when the ID matches any value from the subquery?",
      "code": "SELECT LastName, FirstName\nFROM Employees\nWHERE EmployeeID = ALL (\n  SELECT EmployeeID\n  FROM Sales\n  WHERE Amount > 50000\n);",
      "options": [
        "Change ALL to ANY",
        "Change ALL to JOIN",
        "Change ALL to WHERE",
        "Change ALL to IN only"
      ],
      "correct": 0,
      "explanation": "Keeping the = operator, replace ALL with ANY. = ANY(subquery) matches any returned value. Replacing only ALL with IN would produce invalid syntax: = IN."
    },
    {
      "id": "db-222",
      "chapter": "extragere-date",
      "type": "single",
      "question": "In this application, a completed order is defined as one whose OrderDate is not NULL. Return completed orders with a non-NULL OrderType other than pre-order. Which WHERE condition is correct?",
      "options": [
        "WHERE OrderDate IS EMPTY AND NOT OrderType = 'pre-order'",
        "WHERE OrderDate IS NOT NULL AND OrderType <> 'pre-order'",
        "WHERE OrderDate <> NULL AND NOT OrderType = 'pre-order'",
        "WHERE OrderDate IS NOT NULL AND OrderType = 'pre-order'"
      ],
      "correct": 1,
      "explanation": "Under the stated completion convention, OrderDate IS NOT NULL selects completed orders. AND requires a non-pre-order type as well; comparisons to NULL using <> do not work."
    },
    {
      "id": "db-223",
      "chapter": "extragere-date",
      "type": "drag_drop",
      "question": "Build a query that displays all clients whose State is New Mexico or whose City is Roswell.",
      "dragItems": [
        {
          "id": "a",
          "text": "WHERE State = 'New Mexico' AND City = 'Roswell'"
        },
        {
          "id": "b",
          "text": "SELECT * FROM Clients"
        },
        {
          "id": "c",
          "text": "SELECT ALL"
        },
        {
          "id": "d",
          "text": "WHERE State = 'New Mexico' OR City = 'Roswell'"
        },
        {
          "id": "e",
          "text": "FROM Clients"
        },
        {
          "id": "f",
          "text": "HAVING State = 'New Mexico'"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Step 1",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "Step 2",
          "correctItemId": "d"
        }
      ],
      "explanation": "Condițiile alternative se combină cu OR în clauza WHERE. Traducere: Construiți o interogare care afișează toți clienții al căror State este New Mexico sau al căror City este Roswell."
    },
    {
      "id": "db-224",
      "chapter": "extragere-date",
      "type": "dropdown",
      "question": "For each statement about GROUP BY, select Yes or No.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A GROUP BY clause must always be paired with HAVING.",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "Non-aggregated columns selected with aggregate expressions normally belong in GROUP BY.",
          "correctItemId": "a"
        },
        {
          "id": "z3",
          "label": "A GROUP BY clause must always be paired with WHERE.",
          "correctItemId": "b"
        }
      ],
      "explanation": "GROUP BY does not require WHERE or HAVING. In this SQL Server query model, nonaggregated selected columns must appear in the grouping list."
    },
    {
      "id": "db-225",
      "chapter": "extragere-date",
      "type": "single",
      "question": "A report must return only cities whose total SalesAmount is at least 50000. Which query is correct?",
      "options": [
        "SELECT State, City, SUM(SalesAmount)\nFROM Sales\nGROUP BY State, City\nHAVING SUM(SalesAmount) >= 50000",
        "SELECT State, City, SUM(SalesAmount)\nFROM Sales\nGROUP BY State, City\nWHERE SUM(SalesAmount) >= 50000",
        "SELECT State, City, SUM(SalesAmount)\nFROM Sales\nWHERE SalesAmount >= 50000\nGROUP BY State, City"
      ],
      "correct": 0,
      "explanation": "WHERE filtrează rânduri înainte de grupare; HAVING filtrează rezultatele agregate după GROUP BY. Traducere: Un raport trebuie să returneze numai orașele pentru care suma SalesAmount este de cel puțin 50000. Care interogare este corectă?"
    },
    {
      "id": "db-226",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You need total sales and average sales for each Region and Salesperson. Which query is correct?",
      "options": [
        "SELECT Region, Salesperson, SUM(Sales), AVG(Sales)\nFROM TotalSales\nGROUP BY Region, Salesperson",
        "SELECT Region, Salesperson, SUM(Sales), AVERAGE(Sales)\nFROM TotalSales",
        "SELECT Region, Salesperson, SUM(Sales), AVG(Sales)\nFROM TotalSales\nGROUP BY Region"
      ],
      "correct": 0,
      "explanation": "SUM și AVG sunt funcții agregate, iar Region și Salesperson trebuie grupate. Traducere: Trebuie să calculați suma și media vânzărilor pentru fiecare Region și Salesperson. Care interogare este corectă?"
    },
    {
      "id": "db-227",
      "chapter": "extragere-date",
      "type": "single",
      "question": "An IT manager wants the lowest number of calls for each day. Which query is correct?",
      "options": [
        "SELECT log_date, MAX(calls) FROM call_log",
        "SELECT log_date, MIN(calls) FROM call_log",
        "SELECT log_date, MIN(calls) FROM call_log GROUP BY log_date",
        "SELECT log_date, MIN(calls) FROM call_log GROUP BY MIN(calls)"
      ],
      "correct": 2,
      "explanation": "MIN(calls) calculează valoarea minimă, iar GROUP BY log_date produce câte un rezultat pentru fiecare zi. Traducere: Un manager IT dorește cel mai mic număr de apeluri pentru fiecare zi. Care interogare este corectă?"
    },
    {
      "id": "db-228",
      "chapter": "manipulare-date",
      "type": "drag_drop",
      "question": "Match each SQL language category to typical commands.",
      "dragItems": [
        {
          "id": "a",
          "text": "DML"
        },
        {
          "id": "b",
          "text": "DDL"
        },
        {
          "id": "c",
          "text": "DCL / permissions"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "INSERT, UPDATE, DELETE",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "CREATE, ALTER, DROP",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "GRANT, REVOKE",
          "correctItemId": "c"
        }
      ],
      "explanation": "DML manipulează datele, DDL definește structura, iar GRANT/REVOKE controlează permisiunile. Traducere: În ce categorie SQL intră INSERT, UPDATE și DELETE?"
    },
    {
      "id": "db-229",
      "chapter": "manipulare-date",
      "type": "multiple",
      "question": "What are three valid data manipulation language (DML) commands? (Choose three.)",
      "options": [
        "INSERT",
        "COMMIT",
        "DELETE",
        "OUTPUT",
        "UPDATE"
      ],
      "correct": [
        0,
        2,
        4
      ],
      "explanation": "Comenzile DML pentru modificarea datelor sunt INSERT, UPDATE și DELETE. COMMIT este control de tranzacție, iar OUTPUT nu este una dintre cele trei comenzi DML cerute. Traducere: Care trei comenzi sunt instrucțiuni DML valide? (Alegeți trei.)"
    },
    {
      "id": "db-230",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "In SQL, an insert statement is used to add a: An INSERT statement adds a ______ to a table.",
      "options": [
        "row of data",
        "database user",
        "table definition",
        "column constraint"
      ],
      "correct": 0,
      "explanation": "INSERT adaugă unul sau mai multe rânduri de date într-un tabel. Traducere: Completați ce adaugă instrucțiunea INSERT într-un tabel."
    },
    {
      "id": "db-231",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "On which database structure does an insert statement operate?",
      "options": [
        "Role",
        "Trigger",
        "User",
        "Stored procedure",
        "Table"
      ],
      "correct": 4,
      "explanation": "INSERT adaugă rânduri noi. Valorile trebuie să corespundă coloanelor și tipurilor de date definite în tabel. Traducere: Asupra cărei structuri de bază de date operează INSERT?"
    },
    {
      "id": "db-232",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "You need to add rows to a database table. Which Structured Query Language (SQL) keyword should you use?",
      "options": [
        "JOIN",
        "INSERT",
        "CREATE",
        "UPDATE"
      ],
      "correct": 1,
      "explanation": "INSERT adaugă rânduri noi. Valorile trebuie să corespundă coloanelor și tipurilor de date definite în tabel. Traducere: Ce cuvânt-cheie SQL se utilizează pentru a adăuga rânduri într-un tabel?"
    },
    {
      "id": "db-233",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "What statement would you use to add data to a table?",
      "options": [
        "ADD",
        "INSERT",
        "JOIN",
        "PRESENT"
      ],
      "correct": 1,
      "explanation": "INSERT adaugă rânduri noi. Valorile trebuie să corespundă coloanelor și tipurilor de date definite în tabel. Traducere: Ce instrucțiune se utilizează pentru a adăuga date într-un tabel?"
    },
    {
      "id": "db-234",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "Which of the following is a Data Manipulation Language (DML) statement?",
      "options": [
        "ALTER TABLE Employee ADD EmployeeName VARCHAR(100);",
        "SELECT EmployeeName FROM Employee WHERE EmployeeName = 'Jack Smith';",
        "CREATE TABLE EmployeeCopy (EmployeeName VARCHAR(100));",
        "INSERT INTO Employee (EmployeeName) VALUES ('Jack Smith');"
      ],
      "correct": 3,
      "explanation": "INSERT modifies table data and is DML. CREATE and ALTER define schema objects and are DDL; classification conventions for SELECT vary, but INSERT is unambiguously the listed data-modification statement."
    },
    {
      "id": "db-235",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "You have the following table definition The Road table contains the following data: You execute the following statement: INSERT INTO Road VALUES (1234, 36) What is the result?",
      "code": "CREATE TABLE Road (RoadID INTEGER NOT NULL, Distance INTEGER NOT NULL);\n-- Existing rows: (1234,22), (1384,34)\nINSERT INTO Road VALUES (1234,36);",
      "options": [
        "an error stating that NULL values are not allowed",
        "a new row in the table",
        "an error stating that duplicate IDs are not allowed",
        "a syntax error"
      ],
      "correct": 1,
      "explanation": "NOT NULL does not imply UNIQUE. Because no primary key or unique constraint is declared on RoadID, the insert adds another row with RoadID 1234."
    },
    {
      "id": "db-236",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "You have the following table definition You need to insert a new product. The product's name is Plate and the product's ID is 12345. Which statement should you use?",
      "code": "CREATE TABLE Product (ProductID INTEGER, Name VARCHAR(20))",
      "options": [
        "INSERT INTO Product VALUES (ProductID= 12345, Name = 'Plate')",
        "INSERT NEW ProductID = 12345, Name = 'Plate' INTO Product",
        "INSERT 12345, 'Plate' INTO Product",
        "INSERT INTO Product (ProductID, Name) VALUES (12345, 'Plate')"
      ],
      "correct": 3,
      "explanation": "INSERT INTO Product (ProductID, Name) VALUES (12345, 'Plate') explicitly assigns the integer identifier and the quoted text name."
    },
    {
      "id": "db-237",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "You need to insert two new products into the Product table. The first product is named Book and has an ID of 125. The second product is named Movie and has an ID of 126. Which statement should you use?",
      "options": [
        "INSERT INTO Product VALUES (ID= 125, 126) (Name ='Book', 'Movie')",
        "INSERT INTO Product (ID, Name) VALUES (125, 'Book') INSERT INTO Product (ID, Name) VALUES (126, 'Movie')",
        "INSERT 125, 126, 'Book', 'Movie' INTO Product",
        "INSERT NEW ID = 125 AND 126, Name = 'Book' AND 'Movie' INTO Product",
        "INSERT NEW ID = 125, Name = = 'Book' INTO Product INSERT NEW ID = 126, Name = 'Movie' INTO Product"
      ],
      "correct": 1,
      "explanation": "INSERT adaugă rânduri noi. Valorile trebuie să corespundă coloanelor și tipurilor de date definite în tabel. Traducere: Trebuie să introduceți două produse noi, Book și Movie. Ce instrucțiune/instrucțiuni INSERT sunt corecte?"
    },
    {
      "id": "db-238",
      "chapter": "manipulare-date",
      "type": "multiple",
      "question": "The AddressInfo table has columns StreetAddress, City, State, and PostalCode in that order. Which two INSERT statements can correctly add the row shown? (Choose two.)",
      "image": "assets/databases/pdf-076-address-info.png",
      "options": [
        "INSERT INTO AddressInfo (StreetAddress, City, State, PostalCode) VALUES ('1234 Main Street', 'Dallas', 'TX', '75201');",
        "INSERT INTO AddressInfo VALUES ('1234 Main Street', 'Dallas', 'TX', '75201');",
        "UPDATE AddressInfo SET StreetAddress='1234 Main Street', City='Dallas', State='TX', PostalCode='75201';",
        "INSERT AddressInfo ('1234 Main Street', 'Dallas', 'TX', '75201');"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "An INSERT can explicitly list the target columns or omit them when values are supplied for all columns in the defined order. UPDATE changes existing rows rather than inserting.",
      "imageAlt": "address info"
    },
    {
      "id": "db-239",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "You have a table named Product that contains the following data. The ProductID column is the primary key. The CategoryID column is a foreign key to a separate table Category. You execute the following statement What is the result?",
      "code": "-- Product(ProductID PRIMARY KEY, ProductName, CategoryID FOREIGN KEY)\n-- Existing products: (3296,'Spoon',2222), (1114,'Chair',4444)\n-- Category 4444 already exists.\nINSERT INTO Product VALUES(3296,'Table',4444);",
      "options": [
        "a foreign key constraint violation",
        "a syntax error",
        "a new row in the Product table",
        "a primary key constraint violation",
        "a new row in the Category table"
      ],
      "correct": 3,
      "explanation": "ProductID 3296 already exists. A primary key prevents inserting another row with that ProductID, even when the other column values differ."
    },
    {
      "id": "db-240",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "You need to populate a table named EmployeeCopy with data from an existing table named Employee. Which statement should you use?",
      "options": [
        "SELECT * INTO EmployeeCopy SELECT * FROM Employee",
        "INSERT * FROM Employee INTO EmployeeCopy",
        "COPY INTO Employee SELECT * FROM Employee",
        "INSERT INTO EmployeeCopy SELECT * FROM Employee"
      ],
      "correct": 3,
      "explanation": "INSERT INTO EmployeeCopy SELECT ... FROM Employee inserts query results into the existing copy table, provided column counts and types are compatible."
    },
    {
      "id": "db-241",
      "chapter": "manipulare-date",
      "type": "true_false",
      "question": "An UPDATE statement modifies data stored in rows of a table.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "UPDATE modifică valori în rândurile unui tabel, de obicei limitate prin WHERE. Traducere: Asupra cărei structuri de bază de date operează UPDATE?"
    },
    {
      "id": "db-242",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "You have a table that contains information about all students in your school. Which SQL keyword should you use to change a student's first name in the table?",
      "options": [
        "UPDATE",
        "CHANGE",
        "SELECT",
        "INSERT"
      ],
      "correct": 0,
      "explanation": "UPDATE modifică valorile rândurilor existente. Clauza WHERE limitează rândurile afectate; fără WHERE sunt afectate toate rândurile. Traducere: Ce cuvânt-cheie SQL se utilizează pentru a modifica prenumele unui elev într-un tabel?"
    },
    {
      "id": "db-243",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "What statement would you use to change data in a table?",
      "options": [
        "CHANGE",
        "MODIFY",
        "INSERT",
        "UPDATE"
      ],
      "correct": 3,
      "explanation": "UPDATE modifică valorile rândurilor existente. Clauza WHERE limitează rândurile afectate; fără WHERE sunt afectate toate rândurile. Traducere: Ce instrucțiune SQL se utilizează pentru a modifica date existente într-un tabel?"
    },
    {
      "id": "db-244",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "You need to change ProductName to 'Glass' for a specific product. Which SET clause belongs in the UPDATE statement?",
      "options": [
        "SET ProductName = 'Glass'",
        "LET ProductName = 'Glass'",
        "EXEC ProductName = 'Glass'",
        "ASSIGN ProductName = 'Glass'"
      ],
      "correct": 0,
      "explanation": "UPDATE folosește SET pentru a atribui noile valori coloanelor. Traducere: Trebuie să modificați ProductName în „Glass\" pentru un anumit produs. Ce clauză SET trebuie utilizată în instrucțiunea UPDATE?"
    },
    {
      "id": "db-245",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "You have a table of products with fields for ProductID, Name, Price, and InStock. You need to write an UPDATE statement that sets the value in the InStock field to Yes for a specific ProductID. Which clause should you use in your update statement?",
      "options": [
        "THAT",
        "WHERE",
        "GROUP BY",
        "HAVING"
      ],
      "correct": 1,
      "explanation": "WHERE limitează rândurile asupra cărora se aplică UPDATE. Fără WHERE, modificarea s-ar aplica tuturor rândurilor. Traducere: Ce clauză trebuie utilizată în UPDATE pentru a modifica numai produsul cu ProductID specificat?"
    },
    {
      "id": "db-246",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "What happens if you omit the WHERE clause in an UPDATE statement?",
      "options": [
        "No records will be updated",
        "Only the first record will be updated",
        "All records will be updated",
        "The query will fail with an error"
      ],
      "correct": 2,
      "explanation": "Without WHERE, UPDATE targets every row in the table. It does not add rows or remove the table definition; constraints or triggers can still affect success."
    },
    {
      "id": "db-247",
      "chapter": "manipulare-date",
      "type": "dropdown",
      "question": "Complete the UPDATE query that replaces Benjamin with Kayden in the Students table.",
      "dragItems": [
        {
          "id": "a",
          "text": "SET FirstName = 'Kayden'"
        },
        {
          "id": "b",
          "text": "FROM FirstName = 'Benjamin'"
        },
        {
          "id": "c",
          "text": "SET Students"
        },
        {
          "id": "d",
          "text": "FROM Students"
        },
        {
          "id": "e",
          "text": "WHERE FirstName = 'Benjamin'"
        },
        {
          "id": "f",
          "text": "UPDATE FirstName = 'Kayden'"
        },
        {
          "id": "g",
          "text": "UPDATE Students"
        },
        {
          "id": "h",
          "text": "TO FirstName = 'Kayden'"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 1",
          "correctItemId": "g"
        },
        {
          "id": "z2",
          "label": "Line 2",
          "correctItemId": "a"
        },
        {
          "id": "z3",
          "label": "Line 3",
          "correctItemId": "e"
        }
      ],
      "explanation": "UPDATE chooses the table, SET assigns Kayden and WHERE restricts the change to Benjamin. The supplied data identifies one matching row."
    },
    {
      "id": "db-248",
      "chapter": "manipulare-date",
      "type": "multiple",
      "question": "Harry in San Francisco (ID 4) returns all your books. Which two statements correctly update the shown LoanedBooks table? Choose two.",
      "image": "assets/databases/pdf-078-loaned-books.png",
      "options": [
        "UPDATE LoanedBooks SET Books=0 WHERE Name='Harry' AND City='San Francisco';",
        "INSERT INTO LoanedBooks SET Books=0 WHERE ID=4;",
        "UPDATE LoanedBooks SET Books=0 WHERE Name='Harry' OR City='San Francisco';",
        "UPDATE LoanedBooks SET Books=0 WHERE ID=4;"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "The shown table has one Harry in San Francisco with ID 4. Both the exact name/city condition and the unique ID=4 condition update that row only. OR would also update Sally and the other Harry.",
      "imageAlt": "loaned books"
    },
    {
      "id": "db-249",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "You have a table named Product. The Product table has columns for ProductDescription and ProductCategory. You need to change the ProductCategory value for all the spoons in the Product table to 43. Which statement should you use?",
      "options": [
        "UPDATE Product SET ProductCategory = 43 WHERE ProductDescription = 'spoon'",
        "SET Product WHERE ProductDescription = 'spoon' TO ProductCategory = 43",
        "UPDATE Product WHERE ProductDescription = 'spoon' SET ProductCategory = 43",
        "SET Product TO ProductCategory = 43 WHERE Product Description = 'spoon'"
      ],
      "correct": 0,
      "explanation": "UPDATE Product SET ProductCategory=43 WHERE ProductDescription=Spoon changes only matching product rows."
    },
    {
      "id": "db-250",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "The Volunteer table contains a volunteer whose GivenName is Tia. Which statement changes that name to Kimberly?",
      "options": [
        "SET GivenName = 'Kimberly' FROM Volunteer WHERE GivenName = 'Tia';",
        "SET Volunteer TO GivenName = 'Kimberly' WHERE GivenName = 'Tia';",
        "UPDATE GivenName = 'Kimberly' FROM Volunteer WHERE GivenName = 'Tia';",
        "UPDATE Volunteer SET GivenName = 'Kimberly' WHERE GivenName = 'Tia';"
      ],
      "correct": 3,
      "explanation": "UPDATE changes existing data. SET assigns the replacement GivenName and WHERE selects the intended volunteer."
    },
    {
      "id": "db-251",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "The products table contains the following data. Which query will increase the price of item 1 by 6 percent ?",
      "image": "assets/databases/pdf-080-products.png",
      "options": [
        "USE Products SET Price = Price * 1.06 WHERE ItemNumber = 1;",
        "SET Price = Price * 1.06 FROM Products WHERE ItemNumber = 1;",
        "ALTER Products SET Price = Price * 1.06 WHERE ItemNumber = 1;",
        "UPDATE Products SET Price = Price * 1.06 WHERE ItemNumber = 1;"
      ],
      "correct": 3,
      "explanation": "UPDATE with SET Price=Price*1.06 raises the existing price by six percent. WHERE ItemNumber=1 limits the update.",
      "imageAlt": "products"
    },
    {
      "id": "db-252",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "What statement is used to remove one or more record from a table?",
      "options": [
        "DELETE",
        "TRUNCATE",
        "DROP",
        "ALTER"
      ],
      "correct": 0,
      "explanation": "DELETE FROM table_name without WHERE attempts to remove every row. Constraints or triggers can block or change the operation; it does not drop the table definition."
    },
    {
      "id": "db-253",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "What is one difference between an update statement and a delete statement?",
      "options": [
        "An update statement can change only one row.",
        "A delete statement cannot use a where clause.",
        "An update statement does not remove rows from a table.",
        "A delete statement works only within a stored procedure."
      ],
      "correct": 2,
      "explanation": "UPDATE modifică valorile rândurilor existente. Clauza WHERE limitează rândurile afectate; fără WHERE sunt afectate toate rândurile. Traducere: Care este o diferență corectă între UPDATE și DELETE?"
    },
    {
      "id": "db-254",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "You accept an IT internship at a local charity. The charity ask you to keep a record of its volunteers by using a database table named Volunteer. The table has the following columns and rows: You must update the table when volunteers ask to be removed from mailing list You need to delete all records with the GivenName Tia Which SQL statement should you use ?",
      "options": [
        "DELETE FROM Volunteer WHERE GivenName = = 'Tia'",
        "DELETE FROM Volunteer WHERE GivenName = 'Tia'",
        "DELETE FROM Volunteer WHERE GivenName EQUALS 'Tia'",
        "DELETE FROM Volunteer WHERE GivenName IS 'Tia'"
      ],
      "correct": 1,
      "explanation": "DELETE FROM elimină rândul care îndeplinește condiția WHERE GivenName = 'Tia'. Traducere: În tabelul Volunteer trebuie șters rândul persoanei Tia. Ce DELETE este corect?"
    },
    {
      "id": "db-255",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "Your database contains a table named Customer. You need to delete the record from the Customer table that has a CusromerID of 12345. Which statement should you use?",
      "options": [
        "UPDATE Customer DELETE * WHERE CustomerID = 12345",
        "DELETE CustomerID FROM Customer WHERE CustomerID = 12345",
        "UPDATE CustomerID FROM Customer DELETE * WHERE CustomerID = 12345",
        "DELETE FROM Customer WHERE CustomerID = 12345"
      ],
      "correct": 3,
      "explanation": "DELETE FROM Customer WHERE CustomerID=12345 removes the matching row. The WHERE clause prevents removing unrelated customers."
    },
    {
      "id": "db-256",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "Which statement deletes the rows where the employee's phone number is not entered?",
      "options": [
        "DELETE FROM Employee WHERE Phone IS NULL",
        "DELETE FROM Employee WHERE Phone IS NOT NULL",
        "DELETE FROM Employee WHERE Phone = '%'",
        "DELETE FROM Employee WHERE Phone = NULLABLE"
      ],
      "correct": 0,
      "explanation": "NULL values are tested with IS NULL, not = NULL or a nonexistent NULLABLE comparison value."
    },
    {
      "id": "db-257",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "A database contains Customer and Orders. Assume no delete triggers or blocking constraints. What is the result of this statement?",
      "code": "DELETE FROM Orders WHERE CustomerID = 209;",
      "options": [
        "The first order for CustomerID 209 is deleted from the Orders table.",
        "All orders for CustomerID 209 are deleted from the Orders table, and CustomerID 209 is deleted from the Customer table.",
        "All orders for CustomerID 209 are deleted from the Orders table.",
        "CustomerID 209 is deleted from the Customer table."
      ],
      "correct": 2,
      "explanation": "All Orders rows whose CustomerID is 209 are deleted. This statement does not delete the Customer row."
    },
    {
      "id": "db-258",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "You have a table named Student that contains 100 rows. Some of the rows have a NULL value in the FirstName column. You execute the following statement What is the result?",
      "code": "DELETE FROM Student;",
      "options": [
        "All rows in the table will be deleted.",
        "All rows containing a NULL value in the FirstName column will be deleted.",
        "You will receive an error message.",
        "All rows and the table definition will be deleted."
      ],
      "correct": 0,
      "explanation": "FirstName=NULL evaluates to UNKNOWN, even when FirstName is NULL, under normal SQL NULL semantics. WHERE retains only TRUE, so this DELETE removes no rows. Use IS NULL to find missing names."
    },
    {
      "id": "db-259",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "Which INSERT statement correctly inserts multiple rows in one statement?",
      "options": [
        "INSERT INTO table_name (column1, column2) VALUES (value1, value2), (value3, value4);",
        "INSERT INTO table_name (column1, column2) VALUES (value1,value2) VALUES (value3,value4);",
        "INSERT INTO table_name SELECT (column1,column2,column3);",
        "INSERT INTO table_name VALUES value1, value2, value3;"
      ],
      "correct": 0,
      "explanation": "A multirow VALUES clause uses comma-separated parenthesized row values, with each row matching the target column list."
    },
    {
      "id": "db-260",
      "chapter": "depanare",
      "type": "single",
      "question": "Which range condition contains a syntax error?",
      "options": [
        "salary <= 50000 AND salary >= 10000",
        "salary BETWEEN 10000 AND 50000",
        "salary >= 10000 AND salary <= 50000",
        "salary BETWEEN (10000 AND 50000) AND (60000 AND 90000)"
      ],
      "correct": 3,
      "explanation": "BETWEEN are forma expression BETWEEN low AND high. Nu se scriu două intervale între paranteze în forma prezentată. Traducere: Care condiție de interval conține o eroare de sintaxă?"
    },
    {
      "id": "db-261",
      "chapter": "depanare",
      "type": "single",
      "question": "Evaluate the CREATE VIEW statement below. What causes the syntax error?",
      "code": "CREATE VIEW vw UtahCustomers AS\nSELECT LastName, FirstName\nFROM Customers\nWHERE State = 'Utah';",
      "options": [
        "Semicolons are missing from the statements.",
        "The WHERE value must use double quotes.",
        "The WHERE clause needs == instead of =.",
        "The view name is invalid because it contains an unquoted space."
      ],
      "correct": 3,
      "explanation": "Numele view-ului conține un spațiu: „vw UtahCustomers\". Fără delimitarea corespunzătoare a identificatorului, numele nu este valid. Traducere: Analizați instrucțiunea CREATE VIEW de mai jos. Ce provoacă eroarea de sintaxă?"
    },
    {
      "id": "db-262",
      "chapter": "depanare",
      "type": "single",
      "question": "A developer tries to remove a view with the statement below and receives an error. What is the most likely fix?",
      "code": "DELETE VIEW UtahCustomers;",
      "options": [
        "Use DROP instead of DELETE.",
        "Use TRUNCATE instead of DELETE.",
        "Use REVOKE instead of DELETE.",
        "Add a WHERE clause."
      ],
      "correct": 0,
      "explanation": "DELETE șterge rânduri din tabele. Pentru eliminarea definiției unui view se utilizează DROP VIEW. Traducere: Un dezvoltator încearcă să elimine un view cu instrucțiunea de mai jos și primește o eroare. Care este corectarea potrivită?"
    },
    {
      "id": "db-263",
      "chapter": "depanare",
      "type": "single",
      "question": "What causes the CREATE VIEW statement below to fail?",
      "code": "CREATE VIEW vw_CustomerNames\nSELECT CustomerID, LastName\nFROM Customers;",
      "options": [
        "The AS keyword is missing before SELECT.",
        "SELECT must be inside BEGIN/END.",
        "CustomerID cannot appear in a view.",
        "A view cannot read from a table."
      ],
      "correct": 0,
      "explanation": "Sintaxa corectă este CREATE VIEW nume AS SELECT .... Cuvântul-cheie AS lipsește dintre numele view-ului și interogarea SELECT. Traducere: Ce provoacă eroarea în instrucțiunea CREATE VIEW de mai jos?"
    },
    {
      "id": "db-264",
      "chapter": "depanare",
      "type": "single",
      "question": "Evaluate the SELECT query below. What causes the query failure?",
      "code": "SELECT LastName, FirstName, COUNT(OrderID)\nFROM Customers\nGROUP BY LastName\nHAVING COUNT(OrderID) >= 5;",
      "options": [
        "The GROUP BY clause is incomplete.",
        "A WHERE clause is required whenever HAVING is used.",
        "A semicolon is required after every line.",
        "A schema name is required."
      ],
      "correct": 0,
      "explanation": "FirstName is selected without aggregation and is absent from GROUP BY. Add it to GROUP BY along with LastName."
    },
    {
      "id": "db-265",
      "chapter": "depanare",
      "type": "single",
      "question": "Where is the syntax error in the query below?",
      "code": "SELECT LastName, FirstName, COUNT(OrderID)\nFROM Customers\nGROUPBY LastName, FirstName\nHAVING COUNT(OrderID) >= 5;",
      "options": [
        "GROUPBY should be written as GROUP BY.",
        "HAVING must appear before GROUP BY.",
        "A semicolon is required after SELECT.",
        "Each selected field must be on a separate line."
      ],
      "correct": 0,
      "explanation": "Clauza SQL se scrie în două cuvinte: GROUP BY. Traducere: Unde se află eroarea de sintaxă în interogarea de mai jos?"
    },
    {
      "id": "db-266",
      "chapter": "depanare",
      "type": "dropdown",
      "question": "Evaluate each data-insertion statement. Select Yes if it contains a syntax error and No if it is syntactically valid.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "INSERT * INTO Customers FROM CustomersNew;",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "INSERT INTO Customers (LastName, FirstName) SELECT LastName, FirstName FROM CustomersNew;",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "INSERT INTO Customers SELECT * FROM CustomersNew;",
          "correctItemId": "b"
        }
      ],
      "explanation": "INSERT * INTO ... FROM nu este sintaxă validă. Formele INSERT INTO ... SELECT ... sunt valide dacă structura coloanelor este compatibilă. Traducere: Analizați fiecare instrucțiune de inserare. Selectați Yes dacă are o eroare de sintaxă și No dacă este sintactic validă."
    },
    {
      "id": "db-267",
      "chapter": "depanare",
      "type": "single",
      "question": "The UPDATE statement below fails. What change is required?",
      "code": "UPDATE Customers\nSET Status = 'Gold'\nIF TotalAmount > 10000;",
      "options": [
        "Move IF to the beginning of the statement.",
        "Replace IF with WHERE.",
        "Add semicolons after every line.",
        "Specify an object type after UPDATE."
      ],
      "correct": 1,
      "explanation": "UPDATE filters target rows with WHERE. IF is a control-of-flow statement, not an UPDATE row filter."
    },
    {
      "chapter": "extragere-date",
      "type": "single",
      "question": "Return customer names, OrderID, Subtotal and 5% sales tax for customers who placed orders. Which query satisfies every requirement?",
      "options": [
        "SELECT c.FirstName,c.LastName,o.OrderID,o.Subtotal,o.Subtotal*0.05 AS SalesTax FROM Customers c INNER JOIN Orders o ON c.CustomerID=o.CustomerID;",
        "SELECT c.FirstName,c.LastName,o.OrderID,o.Subtotal,o.Subtotal*0.05 AS SalesTax FROM Customers c LEFT JOIN Orders o ON c.CustomerID=o.CustomerID;",
        "SELECT c.FirstName,c.LastName,o.OrderID,o.Subtotal,o.Subtotal*1.05 AS SalesTax FROM Customers c INNER JOIN Orders o ON c.CustomerID=o.CustomerID;"
      ],
      "correct": 0,
      "explanation": "INNER JOIN returns only customers with matching orders. Multiplying by 0.05 gives tax only, and OrderID is explicitly included.",
      "id": "db-268"
    },
    {
      "chapter": "proiectare",
      "type": "single",
      "question": "Which statement removes a direct UPDATE grant on employees from alpha in SQL Server?",
      "options": [
        "REVOKE UPDATE ON OBJECT::employees FROM alpha;",
        "DELETE UPDATE ON OBJECT::employees FROM alpha;",
        "REVOKE UPDATE FROM USER::alpha ON employees;",
        "DELETE UPDATE FROM USER::alpha ON employees;"
      ],
      "correct": 0,
      "explanation": "REVOKE removes the direct grant from the principal. Permissions inherited through other roles may still provide access; removing a grant is not the same as DENY.",
      "id": "db-269"
    },
    {
      "chapter": "extragere-date",
      "type": "single",
      "question": "Each call_log row contains one day and its call count. Which query returns the day with the fewest calls, breaking ties by earliest date?",
      "options": [
        "SELECT TOP (1) log_date, calls FROM call_log ORDER BY calls ASC, log_date ASC;",
        "SELECT log_date, MIN(calls) FROM call_log;",
        "SELECT log_date, MAX(calls) FROM call_log;",
        "SELECT log_date,calls FROM call_log ORDER BY calls DESC;"
      ],
      "correct": 0,
      "explanation": "Sorting by calls ascending places the minimum first. TOP(1) returns one day and the secondary date sort deterministically resolves ties.",
      "id": "db-270"
    },
    {
      "chapter": "extragere-date",
      "type": "dropdown",
      "question": "Complete the query to return clients in both New Mexico and Roswell.",
      "dragItems": [
        {
          "id": "i1",
          "text": "SELECT *"
        },
        {
          "id": "i2",
          "text": "FROM clients"
        },
        {
          "id": "i3",
          "text": "WHERE State = 'New Mexico' AND City = 'Roswell'"
        },
        {
          "id": "i4",
          "text": "WHERE State = 'New Mexico' OR City = 'Roswell'"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 1",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Line 2",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Line 3",
          "correctItemId": "i3"
        }
      ],
      "explanation": "AND requires both geographic conditions. OR would include all New Mexico clients plus all Roswell clients, regardless of the other value.",
      "id": "db-271"
    },
    {
      "chapter": "manipulare-date",
      "type": "dropdown",
      "question": "Complete the INSERT for cookie 77, Snickerdoodle.",
      "dragItems": [
        {
          "id": "i1",
          "text": "INSERT INTO Cookies (Name, CookieID)"
        },
        {
          "id": "i2",
          "text": "VALUES ('Snickerdoodle',77);"
        },
        {
          "id": "i3",
          "text": "VALUES (77,'Snickerdoodle');"
        },
        {
          "id": "i4",
          "text": "UPDATE Cookies"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 1",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Line 2",
          "correctItemId": "i2"
        }
      ],
      "explanation": "The values must follow the explicitly listed target column order: Name then CookieID.",
      "code": "CREATE TABLE Cookies (CookieID INTEGER, Name VARCHAR(20));\n[1]\n[2]",
      "id": "db-272"
    },
    {
      "chapter": "proiectare",
      "type": "multiple",
      "question": "Which two SQL Server types store both a date and a time of day? Choose two.",
      "options": [
        "DATETIME",
        "TIMESTAMP",
        "DATE",
        "SMALLDATETIME"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "DATETIME and SMALLDATETIME store date/time values with different ranges and precision. SQL Server TIMESTAMP is a rowversion synonym, not a date/time type. Display formatting is separate from storage type.",
      "id": "db-273"
    },
    {
      "chapter": "manipulare-date",
      "type": "single",
      "question": "Which statement increases every Ticket price in Park by 10%?",
      "options": [
        "UPDATE Park SET Ticket = Ticket * 1.10;",
        "UPDATE Ticket SET Park = Ticket * 1.10;",
        "UPDATE Park SET Ticket = 0.10;",
        "UPDATE Park SET Ticket = increase 10%;"
      ],
      "correct": 0,
      "explanation": "The original amount plus ten percent is original*1.10. With no WHERE clause, every row is updated.",
      "id": "db-274"
    },
    {
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which query returns the customer count for each country with fewer than 50 customers? Assume CustomerID is non-NULL.",
      "options": [
        "SELECT COUNT(CustomerID),Country FROM Customers HAVING COUNT(CustomerID)<50 GROUP BY Country;",
        "SELECT Country,CustomerID FROM Customers WHERE COUNT(CustomerID)<50 GROUP BY Country;",
        "SELECT Country,CustomerID FROM Customers GROUP BY Country HAVING COUNT(CustomerID)<50;",
        "SELECT COUNT(CustomerID),Country FROM Customers GROUP BY Country HAVING COUNT(CustomerID)<50;"
      ],
      "correct": 3,
      "explanation": "GROUP BY Country forms country groups and HAVING filters by the aggregated count. The selected identifier must be aggregated, not selected as an ungrouped individual value.",
      "id": "db-275"
    },
    {
      "chapter": "ddl-obiecte",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
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
          "label": "A stored procedure can delete data.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A SQL Server function returns a scalar value or a table.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Every stored procedure must explicitly return a data value.",
          "correctItemId": "i2"
        }
      ],
      "explanation": "A stored procedure can perform DML such as DELETE. A function has a declared return. A procedure does not require an explicit data-return statement; SQL Server procedures can still have an integer execution status.",
      "id": "db-276"
    },
    {
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which statement is DDL?",
      "options": [
        "ALTER TABLE Employee ADD EmployeeName VARCHAR(100);",
        "SELECT EmployeeName FROM Employee WHERE EmployeeID=1;",
        "INSERT INTO Employee(EmployeeID) VALUES(1);",
        "UPDATE Employee SET EmployeeName='Tia' WHERE EmployeeID=1;"
      ],
      "correct": 0,
      "explanation": "ALTER TABLE changes the schema, making it DDL. INSERT and UPDATE change data; SELECT retrieves data.",
      "id": "db-277"
    },
    {
      "chapter": "ddl-obiecte",
      "type": "dropdown",
      "question": "For a table clustered on OrderDate, choose the access patterns that typically benefit from that ordered structure.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Ranges of consecutive OrderDate values"
        },
        {
          "id": "i2",
          "text": "A scan of unrelated random names with no supporting index"
        },
        {
          "id": "i3",
          "text": "Sequential access along the clustered key"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A suitable filtering pattern",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A suitable key access pattern",
          "correctItemId": "i3"
        }
      ],
      "explanation": "The clustering key’s ordered leaf structure supports range scans and sequential access. Returning many columns or many rows alone does not guarantee a benefit.",
      "id": "db-278"
    },
    {
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which query returns orders placed from February 1, 2023 onward, excluding California?",
      "options": [
        "SELECT * FROM Orders WHERE order_date >= '2023-02-01' AND ship_state <> 'CA';",
        "SELECT * FROM Orders WHERE order_date >= '2023-02-01' OR ship_state <> 'CA';",
        "SELECT * FROM Orders WHERE order_date >= '2023-02-01' AND ship_state = 'CA';"
      ],
      "correct": 0,
      "explanation": "Use AND to require both conditions. A February 1 boundary excludes all of January even when order_date contains a time; > January 31 midnight would incorrectly include most of January 31.",
      "id": "db-279"
    },
    {
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which operator combines two compatible query results and removes duplicate rows?",
      "options": [
        "TRUNCATE",
        "UNION",
        "EXCEPT",
        "JOIN"
      ],
      "correct": 1,
      "explanation": "UNION combines the result sets with duplicate elimination. UNION ALL must be used when every duplicate occurrence must also be preserved.",
      "id": "db-280"
    },
    {
      "chapter": "extragere-date",
      "type": "single",
      "question": "Return students enrolled on or after June 1, 2024 OR students who graduated during calendar year 2024. Sort newest enrollment first.",
      "options": [
        "SELECT * FROM students WHERE enrollment_date >= '2024-06-01' OR (academic_status='Graduated' AND graduation_date >= '2024-01-01' AND graduation_date < '2025-01-01') ORDER BY enrollment_date DESC;",
        "SELECT * FROM students WHERE enrollment_date >= '2024-06-01' AND academic_status='Graduated' ORDER BY enrollment_date ASC;",
        "SELECT * FROM students WHERE enrollment_date >= '2024-06-01' OR graduation_date >= '2024-01-01' ORDER BY enrollment_date DESC;"
      ],
      "correct": 0,
      "explanation": "OR includes either requested population. Both a lower and upper graduation-date bound are needed to restrict graduation to 2024, including date/time values. DESC sorts newest enrollment first. This query lists students; computing a numeric net population change requires a separate defined aggregation.",
      "id": "db-281"
    },
    {
      "chapter": "ddl-obiecte",
      "type": "dropdown",
      "question": "Complete a view showing only ID, Name and Type for companies in Utah.",
      "dragItems": [
        {
          "id": "i1",
          "text": "CREATE VIEW CustomersUT AS"
        },
        {
          "id": "i2",
          "text": "CREATE VIEW CustomersUT"
        },
        {
          "id": "i3",
          "text": "SELECT ID, Name, Type FROM Company"
        },
        {
          "id": "i4",
          "text": "WHERE State = 'UT';"
        },
        {
          "id": "i5",
          "text": "HAVING State = 'UT';"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 1",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Line 2",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Line 3",
          "correctItemId": "i4"
        }
      ],
      "explanation": "CREATE VIEW requires AS before the SELECT definition. WHERE filters Company rows to State=UT.",
      "id": "db-282"
    },
    {
      "chapter": "proiectare",
      "type": "single",
      "question": "An INSERT of MachineID=3,OperatorID=4 fails with a foreign-key conflict on FK_Assignment_Machine referencing dbo.Machine(ID). What is the cause?",
      "options": [
        "No Operator with ID 4",
        "MachineID 3 already appears in Assignment",
        "OperatorID 4 already appears in Assignment",
        "No referenced Machine row with ID 3"
      ],
      "correct": 3,
      "explanation": "The error explicitly names the foreign key to Machine. The inserted MachineID lacks a matching parent row; a repeated foreign-key value in Assignment is not itself a violation.",
      "code": "INSERT INTO Assignment(MachineID,OperatorID) VALUES(3,4);\n-- FK_Assignment_Machine references dbo.Machine(ID)",
      "id": "db-283"
    },
    {
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which SQL Server table definition causes a unique index to be created to support a primary key?",
      "options": [
        "CREATE TABLE Employee (EmployeeID INTEGER DISTINCT);",
        "CREATE TABLE Employee (EmployeeID INTEGER PRIMARY KEY);",
        "CREATE TABLE Employee (EmployeeID INTEGER INDEX);",
        "CREATE TABLE Employee (EmployeeID INTEGER NULL);"
      ],
      "correct": 1,
      "explanation": "In SQL Server a PRIMARY KEY is enforced by a unique index. The primary-key declaration is the valid listed definition; it is not the general CREATE INDEX syntax.",
      "id": "db-284"
    },
    {
      "id": "db-285",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which WHERE clause returns book titles containing the substring stone?",
      "options": [
        "WHERE bktitle IN ('%stone%')",
        "WHERE bktitle = '%stone%'",
        "WHERE bktitle LIKE 'stone'",
        "WHERE bktitle LIKE '%stone%'"
      ],
      "correct": 3,
      "explanation": "LIKE matches patterns; % matches zero or more characters. The title requirement must filter bktitle, not publisher.",
      "code": "SELECT bktitle, price FROM books WHERE [condition];"
    },
    {
      "id": "db-286",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which aggregate function returns the highest daily sales amount?",
      "options": [
        "VALUES",
        "MOST",
        "MAX",
        "HIGH"
      ],
      "correct": 2,
      "explanation": "MAX returns the greatest non-NULL value in a group."
    },
    {
      "id": "db-287",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Create a reusable virtual table of active research projects, queryable with SELECT * FROM active_projects. Which statement is correct?",
      "options": [
        "CREATE PROCEDURE active_projects AS SELECT projectid, projectname FROM projects WHERE status = 'Active';",
        "INSERT PROCEDURE active_projects AS SELECT projectid, projectname FROM projects WHERE status = 'Active';",
        "CREATE VIEW active_projects AS SELECT projectid, projectname FROM projects WHERE status = 'Active';",
        "INSERT VIEW active_projects AS SELECT projectid, projectname FROM projects WHERE status = 'Active';"
      ],
      "correct": 2,
      "explanation": "CREATE VIEW defines a named query that can be queried as a virtual table."
    },
    {
      "id": "db-288",
      "chapter": "ddl-obiecte",
      "type": "drag_drop",
      "question": "Arrange the SQL Server scalar function that adds 7% sales tax. Assume Orders contains exactly one row per OrderID.",
      "explanation": "Declare the return type, begin the body, declare and compute the local value, return it, and close the body. Explicit precision and scale preserve currency decimals.",
      "dragItems": [
        {
          "id": "i1",
          "text": "CREATE FUNCTION grand_total(@orderid INT) RETURNS DECIMAL(12,2) AS"
        },
        {
          "id": "i2",
          "text": "BEGIN"
        },
        {
          "id": "i3",
          "text": "DECLARE @grandtotal DECIMAL(12,2);"
        },
        {
          "id": "i4",
          "text": "SELECT @grandtotal = subtotal * 1.07 FROM orders WHERE orderid = @orderid;"
        },
        {
          "id": "i5",
          "text": "RETURN @grandtotal;"
        },
        {
          "id": "i6",
          "text": "END;"
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
        },
        {
          "id": "z5",
          "label": "Step 5",
          "correctItemId": "i5"
        },
        {
          "id": "z6",
          "label": "Step 6",
          "correctItemId": "i6"
        }
      ]
    },
    {
      "id": "db-289",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "How many rows are updated by this statement in the table shown?",
      "options": [
        "1",
        "2",
        "0",
        "3"
      ],
      "correct": 0,
      "explanation": "Only ID 2 is both a Shirt and Blue.",
      "code": "UPDATE Products SET Price = 49.99 WHERE Clothing = 'Shirt' AND Color = 'Blue';",
      "image": "assets/databases/pdf-003-products-clothing.png",
      "imageAlt": "products clothing"
    },
    {
      "id": "db-290",
      "chapter": "proiectare",
      "type": "single",
      "question": "Assume EventID determines Event and Winner, and Winner determines Birthdate. Which non-key column should be moved to a Winner table to eliminate the transitive dependency?",
      "options": [
        "Winner",
        "EventID",
        "Birthdate",
        "Event"
      ],
      "correct": 2,
      "explanation": "EventID determines Winner, which determines Birthdate. Separating winner details removes that transitive dependency.",
      "image": "assets/databases/pdf-004-event-winners.png",
      "imageAlt": "event winners"
    },
    {
      "id": "db-291",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "Complete the statements about the Student schema shown. Assume StudentID is assigned uniquely to each student.",
      "explanation": "The unique student identifier is the natural primary-key choice. CHAR(7) can hold 1234567.",
      "image": "assets/databases/pdf-001-student-schema.png",
      "imageAlt": "student schema",
      "dragItems": [
        {
          "id": "i1",
          "text": "StudentID"
        },
        {
          "id": "i2",
          "text": "Lastname"
        },
        {
          "id": "i3",
          "text": "Firstname"
        },
        {
          "id": "i4",
          "text": "1234567"
        },
        {
          "id": "i5",
          "text": "12345678"
        },
        {
          "id": "i6",
          "text": "NULL"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Primary key",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A valid seven-character StudentID",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "db-292",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "Both tables have compatible column order and types. Insert all potential customers into the existing Customers table. Which statement is valid?",
      "options": [
        "INSERT INTO customers SELECT * FROM potential_customers;",
        "INSERT INTO customers VALUES SELECT * FROM potential_customers;",
        "INSERT INTO customers WHERE * FROM potential_customers;",
        "SELECT * INTO customers FROM potential_customers;"
      ],
      "correct": 0,
      "explanation": "INSERT INTO ... SELECT inserts query results into an existing table. SELECT INTO normally creates a new table."
    },
    {
      "id": "db-293",
      "chapter": "extragere-date",
      "type": "multiple",
      "question": "Return one row per enrolled class, showing lastname, firstname, and classID under the alias Classes. Which two queries are valid?",
      "options": [
        "SELECT lastname, firstname, classID Classes FROM students INNER JOIN classes ON students.studentid = classes.studentID;",
        "SELECT lastname, firstname, classID NAME Classes FROM students INNER JOIN classes ON students.studentid = classes.studentID;",
        "SELECT lastname, firstname, classID ALIAS Classes FROM students INNER JOIN classes ON students.studentid = classes.studentID;",
        "SELECT lastname, firstname, classID AS Classes FROM students INNER JOIN classes ON students.studentid = classes.studentID;"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "A column alias can follow an expression with or without AS. Counting classes would additionally require COUNT and GROUP BY; these queries list classes, not a per-student count."
    },
    {
      "id": "db-294",
      "chapter": "extragere-date",
      "type": "single",
      "question": "In SQL Server, return distinct lastname/firstname rows that occur in both CurrentStudents and ArchivedStudents. Which operator is appropriate?",
      "options": [
        "INTERSECT ALL",
        "UNION",
        "UNION ALL",
        "INTERSECT"
      ],
      "correct": 3,
      "explanation": "INTERSECT returns distinct common rows. SQL Server does not support INTERSECT ALL."
    },
    {
      "id": "db-295",
      "chapter": "ddl-obiecte",
      "type": "dropdown",
      "question": "Complete the Campers table definition.",
      "explanation": "CREATE TABLE names the table; integer IDs and cabin numbers use INT, while names use VARCHAR. Commas and the closing parenthesis are already supplied.",
      "code": "[1]\n  [2],\n  [3],\n  [4]\n);",
      "dragItems": [
        {
          "id": "i1",
          "text": "CREATE TABLE Campers ("
        },
        {
          "id": "i2",
          "text": "CREATE Campers ("
        },
        {
          "id": "i3",
          "text": "ID INT"
        },
        {
          "id": "i4",
          "text": "ProductID INT"
        },
        {
          "id": "i5",
          "text": "Name VARCHAR(25)"
        },
        {
          "id": "i6",
          "text": "Cabin INT"
        },
        {
          "id": "i7",
          "text": "Cabin VARCHAR(25)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Opening statement",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "First column",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Second column",
          "correctItemId": "i5"
        },
        {
          "id": "z4",
          "label": "Third column",
          "correctItemId": "i6"
        }
      ]
    },
    {
      "id": "db-296",
      "chapter": "proiectare",
      "type": "single",
      "question": "What type of primary key uses both studentID and classID together?",
      "options": [
        "Foreign key",
        "Composite primary key",
        "A single-column primary key",
        "A non-unique index"
      ],
      "correct": 1,
      "explanation": "One PRIMARY KEY constraint spanning more than one column defines a composite primary key. Compound is also commonly used as a synonym and was therefore not retained as a competing answer.",
      "code": "CREATE TABLE Signups (\n studentID INT NOT NULL,\n classID INT NOT NULL,\n signupdate DATETIME,\n PRIMARY KEY (studentID, classID)\n);"
    },
    {
      "id": "db-297",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "The UPDATE statement belongs to which category?",
      "options": [
        "DQL",
        "DCL",
        "DDL",
        "DML"
      ],
      "correct": 3,
      "explanation": "UPDATE modifies stored rows and is part of Data Manipulation Language."
    },
    {
      "id": "db-298",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "Foreign keys enforce relationships to referenced unique keys. NULL can represent no reference when allowed. Many child rows can reference the same parent.",
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
          "label": "A foreign key can reference a primary key in another table.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A NULL foreign-key value means that row identifies no parent through that key.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Foreign keys can be used to join related rows.",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "Foreign-key values must always be unique.",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "db-299",
      "chapter": "extragere-date",
      "type": "single",
      "question": "The subquery returns two distinct EmployeeID values. EmployeeID is non-NULL. How many rows does this query return?",
      "options": [
        "NULL",
        "3",
        "0",
        "2"
      ],
      "correct": 2,
      "explanation": "One ID cannot equal both different IDs. = ALL requires equality to every returned value, so no employee qualifies.",
      "code": "SELECT LastName, FirstName\nFROM Employees\nWHERE EmployeeID = ALL (\n  SELECT EmployeeID\n  FROM Sales\n  WHERE Amount > 50000\n);"
    },
    {
      "id": "db-300",
      "chapter": "manipulare-date",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "REMOVE is not a SQL Server DML statement. DELETE removes selected rows. TRUNCATE logs page deallocations; it is not an unlogged operation.",
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
          "label": "REMOVE is the SQL Server statement for deallocating all table contents.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "DELETE removes rows from a table.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "TRUNCATE TABLE removes all rows by deallocating pages, without logging each individual row deletion.",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "db-301",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "Complete the statements about the displayed database diagram. No direct line joins Customer to Transaction.",
      "explanation": "Customer and Account are connected through CustomerAccount. Transaction references Account through AccountID; no direct Customer–Transaction relationship is drawn.",
      "image": "assets/databases/pdf-006-customer-account-erd.png",
      "imageAlt": "customer account erd",
      "dragItems": [
        {
          "id": "i1",
          "text": "No direct relationship is drawn"
        },
        {
          "id": "i2",
          "text": "One-to-one"
        },
        {
          "id": "i3",
          "text": "Foreign key"
        },
        {
          "id": "i4",
          "text": "Primary key"
        },
        {
          "id": "i5",
          "text": "Entity-relationship"
        },
        {
          "id": "i6",
          "text": "Network topology"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Relationship drawn directly between Customer and Transaction",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "AccountID in Transaction",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Diagram type",
          "correctItemId": "i5"
        }
      ]
    },
    {
      "id": "db-302",
      "chapter": "extragere-date",
      "type": "dropdown",
      "question": "Count rows returned by these joins using the three displayed tables.",
      "explanation": "Two assignments match two machines, so the inner join returns two rows. The left join preserves the third operator with no assignment, giving three rows.",
      "code": "SELECT Machine.Name FROM Machine\nJOIN Assignment ON Assignment.MachineID = Machine.ID;\n\nSELECT Operator.Name FROM Operator\nLEFT JOIN Assignment ON Assignment.OperatorID = Operator.ID;",
      "image": "assets/databases/pdf-059-machine-operator-data.png",
      "imageAlt": "machine operator data",
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
          "text": "4"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "First query (Machine INNER JOIN Assignment)",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Second query (Operator LEFT JOIN Assignment)",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "db-303",
      "chapter": "manipulare-date",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "SELECT INTO creates a new table and is valid when that destination does not already exist. INSERT * INTO is invalid syntax. INSERT INTO ... SELECT is valid when the destination columns and source values are compatible.",
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
          "label": "SELECT * INTO Customers FROM CustomersNew;",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "INSERT * INTO Customers FROM CustomersNew;",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "INSERT INTO Customers (LastName, FirstName) SELECT LastName, FirstName FROM CustomersNew;",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "db-304",
      "chapter": "depanare",
      "type": "single",
      "question": "Assume the database supports instantaneous copy-on-write storage snapshots. Which listed operation is usually quickest to create because it initially records metadata instead of copying every data page?",
      "explanation": "A storage-level copy-on-write snapshot can be created quickly because it initially records metadata rather than copying every data page. This assumes snapshot support and spare capacity; it is not an independent off-device backup. There is no universal fastest backup without these assumptions.",
      "options": [
        "Incremental",
        "Differential",
        "Snapshot",
        "Full"
      ],
      "correct": 2
    }
  ]
};
