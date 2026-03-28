/**
 * howard-sample.js — A quiz only shown to Howard
 */

module.exports = {
    id: 'howard-plsql-sql-statements',
    title: 'PL/SQL and SQL Fundamentals',
    desc: 'Deep dive into SQL statements within PL/SQL — Howard\'s edition.',
    user: 'howard',   // Only shown to Howard

    questions: [
        {
            id: 1,
            text: "In a PL/SQL SELECT statement, where must the mandatory INTO clause be positioned?",
            options: ["Immediately following the FROM clause", "Between the SELECT and FROM clauses", "At the very end of the statement before the semicolon", "Between the FROM and WHERE clauses"],
            correct: 1
        },
        {
            id: 2,
            text: "When using the INTO clause in a PL/SQL block, what is the requirement regarding variables and selected items?",
            options: ["One variable can hold all selected items if they are of the same data type.", "The number of variables must match the items, but the order does not matter.", "Variables are only required for items that are not part of the primary key.", "You must provide one variable for each item in a corresponding order."],
            correct: 3
        },
        {
            id: 3,
            text: "According to ANSI classifications for embedded SQL in PL/SQL, how many rows must a SELECT query return to avoid an error?",
            options: ["Zero or one row", "At least one row", "Exactly one row", "Any number of rows as long as the variables are initialized"],
            correct: 2
        },
        {
            id: 4,
            text: "Which category of SQL statements includes INSERT, UPDATE, and DELETE for making database changes?",
            options: ["DDL (Data Definition Language)", "DCL (Data Control Language)", "Transaction Control Language", "DML (Data Manipulation Language)"],
            correct: 3
        },
        {
            id: 5,
            text: "Which command is used to discard changes made during a session before they are made permanent?",
            options: ["COMMIT", "SAVEPOINT", "ROLLBACK", "DELETE"],
            correct: 2
        },
        {
            id: 6,
            text: "Why can a developer not execute a 'CREATE TABLE' statement directly inside a standard PL/SQL block?",
            options: ["DDL statements are dynamic and must be executed at run time.", "PL/SQL does not support the creation of new objects.", "Only the database administrator can execute DDL commands.", "DDL statements require a mandatory INTO clause that they do not possess."],
            correct: 0
        },
        {
            id: 7,
            text: "What is the recommended method for executing Data Control Language (DCL) statements within a PL/SQL block?",
            options: ["Using an implicit cursor named SQL", "Placing the statement within a basic LOOP structure", "Declaring an explicit cursor for the DCL command", "Using the EXECUTE IMMEDIATE statement"],
            correct: 3
        },
        {
            id: 8,
            text: "What term describes the private memory area allocated by the Oracle server to store a specific SQL statement and its data?",
            options: ["Explicit cursor", "Variable area", "Implicit cursor", "Logic area"],
            correct: 2
        },
        {
            id: 9,
            type: 'identification',
            text: "What is the default name assigned to all implicit cursors automatically defined by Oracle?",
            answer: ["SQL", "sql"]
        },
        {
            id: 10,
            text: "A developer wants to check if the most recent SQL statement affected any rows. Which Boolean attribute should be evaluated?",
            options: ["SQL%ROWCOUNT", "SQL%ISOPEN", "SQL%NOTFOUND", "SQL%FOUND"],
            correct: 3
        },
        {
            id: 11,
            text: "After executing a DELETE statement, which attribute provides the specific integer count of rows removed?",
            options: ["SQL%FOUND", "SQL%COUNT", "SQL%ROWCOUNT", "SQL%NUMBER"],
            correct: 2
        },
        {
            id: 12,
            text: "When should a PL/SQL programmer define an explicit cursor?",
            options: ["For queries that return more than one row", "For DML statements like UPDATE or INSERT", "For queries intended to return exactly one row", "For all SELECT statements regardless of row count"],
            correct: 0
        },
        {
            id: 13,
            text: "Which of the following is NOT a logical operator that can be used to relate multiple expressions in an IF statement?",
            options: ["XOR", "AND", "OR", "NOT"],
            correct: 0
        },
        {
            id: 14,
            text: "How does a 'searched' CASE statement differ from a simple CASE statement?",
            options: ["It can only test for equality.", "It is used to test non-equality conditions like < or >.", "It cannot be used within a PL/SQL block.", "It does not require an END keyword."],
            correct: 1
        },
        {
            id: 15,
            text: "What is a primary functional distinction between a CASE expression and a CASE statement?",
            options: ["A CASE expression performs actions, while a CASE statement returns a value.", "A CASE expression returns a value into a variable, while a CASE statement performs actions.", "A CASE expression ends with END CASE, while a CASE statement ends with END.", "A CASE expression can contain many PL/SQL statements, while a CASE statement is a single assignment."],
            correct: 1
        },
        {
            id: 16,
            text: "Which loop structure is most appropriate when the logic inside the loop must execute at least one time?",
            options: ["WHILE loop", "FOR loop", "Nested loop", "Basic loop"],
            correct: 3
        },
        {
            id: 17,
            text: "What occurs in a basic loop if an EXIT statement is not included?",
            options: ["The loop becomes an infinite loop.", "The loop terminates after the first iteration.", "The PL/SQL block generates a compile-time error.", "Control passes automatically to the next statement after ten iterations."],
            correct: 0
        },
        {
            id: 18,
            text: "While IF...THEN EXIT is functional, what is the preferred syntax for terminating a basic loop based on a condition?",
            options: ["TERMINATE WHEN", "STOP IF", "EXIT WHEN", "BREAK WHEN"],
            correct: 2
        },
        {
            id: 19,
            text: "How does a WHILE loop decide whether to repeat a sequence of statements?",
            options: ["It executes until the condition evaluates to NULL.", "It repeats as long as the controlling condition remains TRUE.", "It iterates a fixed number of times defined by the lower and upper bounds.", "It executes at least once and then checks the condition at the end."],
            correct: 1
        },
        {
            id: 20,
            text: "What is the rule regarding the declaration of the counter variable in a PL/SQL FOR loop?",
            options: ["It must be declared in the DECLARE section as an INTEGER.", "It is declared implicitly and should not be declared manually.", "It must be declared as a global variable.", "It must be declared using the <<label>> syntax."],
            correct: 1
        },
        {
            id: 21,
            text: "Which syntax is required to define the iterations of a FOR loop?",
            options: ["lower_bound .. upper_bound", "lower_bound TO upper_bound", "lower_bound - upper_bound", "lower_bound : upper_bound"],
            correct: 0
        },
        {
            id: 22,
            type: 'identification',
            text: "What syntax is used to label basic loops for identification in nested structures?",
            answer: ["<<label>>"]
        },
        {
            id: 23,
            text: "If a comparison involves a NULL value, what is the resulting value of that comparison?",
            options: ["TRUE", "FALSE", "0", "NULL"],
            correct: 3
        },
        {
            id: 24,
            text: "In a conditional control statement, how does PL/SQL treat a condition that yields NULL?",
            options: ["It behaves exactly like FALSE.", "It raises an exception.", "It behaves exactly like TRUE.", "It causes the loop to terminate immediately."],
            correct: 0
        },
        {
            id: 25,
            text: "In an IF statement with an ELSE clause, where do NULL values automatically direct the flow of execution?",
            options: ["To the THEN sequence", "To the ELSIF sequence", "To the statement immediately following END IF", "To the ELSE sequence"],
            correct: 3
        }
    ]
};