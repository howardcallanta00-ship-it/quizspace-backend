/**
 * howard-plsql-review.js — A quiz only shown to Howard
 */

module.exports = {
    id: 'howard-plsql-review',
    title: 'PL/SQL 1',
    desc: 'PL/SQL, Cursors, and Exception Handling.',
    user: 'howard',   // Only shown to Howard

    questions: [
        {
            id: 1,
            text: "Which of the following describes the mandatory placement of the INTO clause in a PL/SQL SELECT statement?",
            options: ["After the FROM clause", "Between the SELECT and FROM clauses", "Before the SELECT keyword", "At the very end of the executable block"],
            correct: 1 // [cite: 3]
        },
        {
            id: 2,
            text: "When using a SELECT INTO statement in PL/SQL, what is the requirement regarding the variables used to hold returned values?",
            options: ["One variable can hold multiple items if they share a data type.", "The number and sequence of variables must match the selected items.", "Variables must be declared as global package specifications.", "Only one variable is required regardless of the number of items selected."],
            correct: 1 // [cite: 5]
        },
        {
            id: 3,
            text: "According to ANSI standards for embedded SQL, how many rows must a SELECT statement within a PL/SQL block return to avoid an error?",
            options: ["Zero or one row", "Exactly one row", "At least one row", "Any number of rows defined by the cursor"],
            correct: 1 // [cite: 6]
        },
        {
            id: 4,
            text: "Which category of SQL statements includes INSERT, UPDATE, and DELETE for modifying database data?",
            options: ["Data Definition Language (DDL)", "Data Control Language (DCL)", "Data Manipulation Language (DML)", "Transaction Control Language (TCL)"],
            correct: 2 // [cite: 8]
        },
        {
            id: 5,
            text: "What is the primary purpose of transaction control statements like COMMIT and ROLLBACK?",
            options: ["To define the structure of database tables", "To manage memory allocation for implicit cursors", "To make data changes permanent or discard them", "To grant or revoke database access permissions"],
            correct: 2 // [cite: 9]
        },
        {
            id: 6,
            text: "Why is it impossible to execute DDL and DCL statements directly within a standard PL/SQL block?",
            options: ["They require explicit cursors to function.", "They are dynamic and executed at run time.", "They do not return a ROWCOUNT attribute.", "They exceed the private memory area allocation."],
            correct: 1 // [cite: 11]
        },
        {
            id: 7,
            text: "What is the recommended method for executing DDL or DCL statements inside PL/SQL?",
            options: ["Using an EXCEPTION section", "Declaring a %ROWTYPE record", "Using the EXECUTE IMMEDIATE statement", "Defining an explicit cursor with parameters"],
            correct: 2 // [cite: 13]
        },
        {
            id: 8,
            text: "When the Oracle server allocates a private memory area to store a specific SQL statement and its data, what is this area called?",
            options: ["An active set", "An implicit cursor", "A searched CASE expression", "A PL/SQL record"],
            correct: 1 // [cite: 15]
        },
        {
            id: 9,
            type: 'identification',
            text: "What is the name automatically assigned by Oracle to all implicit cursors?",
            answer: ["sql"] // [cite: 18]
        },
        {
            id: 10,
            text: "Which Boolean attribute evaluates to TRUE if the most recent SQL statement successfully returned at least one row?",
            options: ["SQL%FOUND", "SQL%NOTFOUND", "SQL%ISOPEN", "SQL%ROWCOUNT"],
            correct: 0 // [cite: 19]
        },
        {
            id: 11,
            text: "Which attribute provides an integer value representing the number of rows affected by the most recent SQL statement?",
            options: ["SQL%FOUND", "SQL%ROWCOUNT", "SQL%NOTFOUND", "SQL%ISOPEN"],
            correct: 1 // [cite: 21]
        },
        {
            id: 12,
            text: "When must a PL/SQL programmer define an explicit cursor instead of relying on an implicit one?",
            options: ["For all INSERT operations", "For queries intended to return more than one row", "When using Dynamic SQL", "When the query returns exactly one row"],
            correct: 1 // [cite: 22]
        },
        {
            id: 13,
            text: "What is a key characteristic of the basic LOOP structure in PL/SQL?",
            options: ["It requires a counter to be declared explicitly.", "It checks the condition before the first execution.", "It must execute the statements inside the loop at least once.", "It automatically terminates when the ROWCOUNT reaches zero."],
            correct: 2 // [cite: 33]
        },
        {
            id: 14,
            text: "Although an IF...THEN EXIT statement can end a basic loop, what is considered the correct way to terminate it?",
            options: ["Using a WHILE loop", "The EXIT WHEN statement", "The END LOOP keyword", "A GOTO statement"],
            correct: 1 // [cite: 38]
        },
        {
            id: 15,
            text: "Which of the following is true regarding the counter in a PL/SQL FOR loop?",
            options: ["It must be declared in the declarative section.", "It is declared implicitly.", "It must be manually incremented.", "It can only be used with explicit cursors."],
            correct: 1 // [cite: 43]
        },
        {
            id: 16,
            text: "In PL/SQL conditional control, how does a condition that yields NULL behave?",
            options: ["It raises an exception.", "It yields a TRUE result.", "It behaves like FALSE.", "It terminates the block."],
            correct: 2 // [cite: 51]
        },
        {
            id: 17,
            text: "What is the primary advantage of using the %ROWTYPE attribute to declare a record?",
            options: ["It allows the record to be used in DDL.", "It handles division by zero.", "The record structure updates if table columns change.", "It forces the record to be stored in the SGA."],
            correct: 2 // [cite: 58]
        },
        {
            id: 18,
            text: "During the lifecycle of an explicit cursor, which step populates the active set and positions the pointer at the first row?",
            options: ["DECLARE", "OPEN", "FETCH", "CLOSE"],
            correct: 1 // [cite: 82, 83]
        },
        {
            id: 19,
            text: "What happens if a FETCH statement is executed but there are no rows left to process in the active set?",
            options: ["A NO_DATA_FOUND error is recorded.", "A TOO_MANY_ROWS exception is raised.", "No values are acquired and no error is recorded.", "The cursor is automatically closed."],
            correct: 2 // [cite: 107]
        },
        {
            id: 20,
            text: "Which explicit cursor attribute evaluates to TRUE if the most recent fetch did NOT return a row?",
            options: ["%FOUND", "%NOTFOUND", "%ISOPEN", "%ROWCOUNT"],
            correct: 1 // [cite: 115]
        },
        {
            id: 21,
            text: "How does a cursor FOR loop simplify the code for the programmer?",
            options: ["It eliminates the EXCEPTION section.", "It handles OPEN, FETCH, and CLOSE implicitly.", "It allows DDL without EXECUTE IMMEDIATE.", "It converts explicit cursors to implicit."],
            correct: 1 // [cite: 118]
        },
        {
            id: 22,
            text: "What is the purpose of the FOR UPDATE clause in a cursor declaration?",
            options: ["To automatically commit changes.", "To lock rows as the cursor is opened.", "To bypass the one-row rule.", "To refresh the active set."],
            correct: 1 // [cite: 124]
        },
        {
            id: 23,
            text: "Which clause allows a programmer to modify the most recently FETCHed row from an explicit cursor?",
            options: ["WHERE CURRENT OF", "FOR UPDATE NOWAIT", "EXIT WHEN %FOUND", "SELECT FOR UPDATE"],
            correct: 0 // [cite: 126, 132]
        },
        {
            id: 24,
            type: 'identification',
            text: "Which function returns the numeric value for the error code when an exception occurs?",
            answer: ["sqlcode"] // [cite: 165]
        },
        {
            id: 25,
            text: "What is the main advantage of RAISE_APPLICATION_ERROR over the RAISE statement?",
            options: ["It can be used in the DECLARE section.", "It allows custom error numbers and messages.", "It prevents the block from terminating.", "It does not require a name declaration."],
            correct: 1 // [cite: 174]
        },
        {
            id: 26,
            text: "What is the valid range for error numbers reserved for programmer use in RAISE_APPLICATION_ERROR?",
            options: ["-1 to -999", "-10000 to -10999", "-20000 to -20999", "0 to 20000"],
            correct: 2 // [cite: 175]
        },
        {
            id: 27,
            type: 'identification',
            text: "Which predefined exception is raised when a SELECT INTO statement returns zero rows?",
            answer: ["no_data_found"] // [cite: 152]
        },
        {
            id: 28,
            text: "Which keyword is used to handle any exceptions that have not been specifically named in the exception section?",
            options: ["ALL", "ELSE", "OTHERS", "DEFAULT"],
            correct: 2 // [cite: 143]
        },
        {
            id: 29,
            type: 'identification',
            text: "What name is given to the set of rows returned by a multiple-row query and stored in the context area?",
            answer: ["active set"] // [cite: 78]
        },
        {
            id: 30,
            text: "Where can the RAISE_APPLICATION_ERROR procedure be used within a PL/SQL block?",
            options: ["Declarative and Executable", "Executable and Exception", "Only Exception", "Only Declarative"],
            correct: 1 // [cite: 177]
        },
        {
            id: 31,
            text: "When declaring a record based on a particular table's structure, which attribute is used?",
            options: ["%TYPE", "%ROWTYPE", "%RECORD", "%FOUND"],
            correct: 1 // [cite: 57]
        },
        {
            id: 32,
            text: "Which of the following is true regarding NULL values in conditional control?",
            options: ["They move to the THEN statement.", "They always raise a ORA-01403 error.", "They automatically move to the ELSE statement.", "They yield TRUE if negated by NOT."],
            correct: 2 // [cite: 52]
        },
        {
            id: 33,
            text: "What determines the scope and visibility of PL/SQL types and records?",
            options: ["They are always global.", "They follow the same rules as scalar variables.", "They are only visible in package bodies.", "They are restricted to anonymous blocks."],
            correct: 1 // [cite: 68]
        },
        {
            id: 34,
            text: "In an explicit cursor, what does the CLOSE statement release?",
            options: ["The table locks only.", "The active set of rows.", "The user's session variables.", "The source code of the query."],
            correct: 1 // [cite: 89]
        },
        {
            id: 35,
            text: "What is the effect of using the NOWAIT keyword in the FOR UPDATE clause?",
            options: ["The server waits indefinitely for rows.", "The server bypasses the SELECT query.", "Control returns immediately if rows are locked.", "It prevents the cursor from being closed."],
            correct: 2 // [cite: 128, 129]
        },
        {
            id: 36,
            text: "Which function returns character data containing the message associated with an error number?",
            options: ["SQLERRM", "SQLCODE", "SQLMSG", "SQLTEXT"],
            correct: 0 // [cite: 164]
        },
        {
            id: 37,
            text: "What must be done before using SQLCODE or SQLERRM in an SQL statement?",
            options: ["Call them directly in the SELECT clause.", "Assign their values to local variables.", "Convert them to Boolean attributes.", "Declare them as exceptions in the header."],
            correct: 1 // [cite: 167]
        },
        {
            id: 38,
            text: "Which exception is raised when attempting to divide a number by zero?",
            options: ["INVALID_NUMBER", "ZERO_DIVIDE", "VALUE_ERROR", "DIV_ZERO_ERR"],
            correct: 1 // [cite: 156]
        },
        {
            id: 39,
            text: "What characterizes a non-predefined Oracle server error?",
            options: ["It has a name but no ORA- number.", "It has a number but no predefined name.", "It is raised only by the RAISE statement.", "It does not produce an error message."],
            correct: 1 // [cite: 159]
        },
        {
            id: 40,
            text: "When nesting loops in PL/SQL, how can a basic loop be labeled?",
            options: ["(label)", "[label]", "<<label>>", "{label}"],
            correct: 2 // [cite: 47]
        },
        {
            id: 41,
            text: "What happens if a SELECT statement in a PL/SQL block returns more than one row without using a cursor?",
            options: ["The block succeeds normally.", "A NO_DATA_FOUND error occurs.", "A TOO_MANY_ROWS error occurs.", "The block enters an infinite loop."],
            correct: 2 // [cite: 7, 154]
        },
        {
            id: 42,
            text: "Which cursor attribute returns TRUE if the cursor is open?",
            options: ["%FOUND", "%NOTFOUND", "%ISOPEN", "%ROWCOUNT"],
            correct: 2 // [cite: 114]
        },
        {
            id: 43,
            text: "How should variables be ordered in a SELECT INTO clause?",
            options: ["Alphabetically by name.", "By data type size.", "Corresponding to the order of items selected.", "It does not matter if types match."],
            correct: 2 // [cite: 5]
        },
        {
            id: 44,
            text: "What is the Boolean result of applying the logical operator NOT to a NULL value?",
            options: ["TRUE", "FALSE", "NULL", "ERROR"],
            correct: 2 // [cite: 50]
        },
        {
            id: 45,
            text: "Which of the following is NOT true about PL/SQL records?",
            options: ["They are the same as rows in a database table.", "They can be components of other records.", "They can be assigned initial values.", "They consist of a group of related data items."],
            correct: 0 // [cite: 62]
        },
        {
            id: 46,
            text: "When is the loop counter of a cursor FOR loop declared?",
            options: ["In the DECLARE section.", "Explicitly before the LOOP keyword.", "Implicitly when the loop starts.", "It is never declared."],
            correct: 2 // [cite: 119]
        },
        {
            id: 47,
            text: "Where is the WHERE CURRENT OF clause used?",
            options: ["In the cursor declaration.", "In the OPEN statement.", "In an UPDATE or DELETE statement.", "In the EXCEPTION section."],
            correct: 2 // [cite: 133]
        },
        {
            id: 48,
            type: 'identification',
            text: "What is the name of the memory area used by Oracle to store SQL statement processing data?",
            answer: ["context area"] // [cite: 71, 72]
        },
        {
            id: 49,
            text: "What exception occurs when inserting a duplicate value into a Primary Key column?",
            options: ["PRIMARY_KEY_ERR", "DUP_VAL_ON_INDEX", "UNIQUE_ERROR", "INDEX_DIVIDE"],
            correct: 1 // [cite: 157]
        },
        {
            id: 50,
            text: "How many EXIT statements can a basic loop contain?",
            options: ["Exactly one.", "Zero.", "Multiple.", "One per iteration."],
            correct: 2 // [cite: 37]
        },
        {
            id: 51,
            text: "When are parameter values passed to an explicit cursor?",
            options: ["During declaration.", "When the cursor is opened.", "During each fetch.", "When the cursor is closed."],
            correct: 1 // [cite: 121]
        },
        {
            id: 52,
            text: "What allows the use of a record structure for data from joined tables?",
            options: ["Using %ROWTYPE.", "Declaring your own record structure.", "Using an implicit cursor.", "Using the SQL%FOUND attribute."],
            correct: 1 // [cite: 60]
        },
        {
            id: 53,
            text: "What does the FETCH statement do in an explicit cursor?",
            options: ["Executes the query.", "Populates the active set.", "Retrieves rows one at a time into variables.", "Closes the context area."],
            correct: 2 // [cite: 100, 84]
        },
        {
            id: 54,
            text: "What is the effect of an exception being raised in a PL/SQL block?",
            options: ["The block always restarts.", "The block always terminates.", "The block skips the exception section.", "The block ignores the error if it is user-defined."],
            correct: 1 // [cite: 139]
        },
        {
            id: 55,
            text: "Which of these is a predefined Oracle server error?",
            options: ["NO_DATA_FOUND", "SQLCODE", "RAISE", "OTHERS"],
            correct: 0 // [cite: 152]
        },
        {
            id: 56,
            text: "What happens if you omit the NOWAIT keyword and requested rows are locked?",
            options: ["The server returns an error immediately.", "The server waits indefinitely.", "The server bypasses the lock.", "The server terminates the session."],
            correct: 1 // [cite: 130]
        },
        {
            id: 57,
            text: "How do simple comparisons involving nulls evaluate?",
            options: ["TRUE", "FALSE", "NULL", "UNKNOWN"],
            correct: 2 // [cite: 49]
        },
        {
            id: 58,
            text: "When is the lower_bound..upper_bound syntax required?",
            options: ["In WHILE loops.", "In FOR loops.", "In basic loops.", "In CASE statements."],
            correct: 1 // [cite: 44]
        },
        {
            id: 59,
            type: 'identification',
            text: "What exception name is associated with the error ORA-01403?",
            answer: ["no_data_found"] // [cite: 152]
        },
        {
            id: 60,
            text: "Which of the following can have multiple EXIT statements?",
            options: ["A basic loop.", "A CASE statement.", "An IF statement.", "An EXCEPTION block."],
            correct: 0 // [cite: 37]
        }
    ]
};