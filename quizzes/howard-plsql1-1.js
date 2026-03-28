/**
 * howard-sample.js — A quiz only shown to Howard
 */

module.exports = {
    id: 'howard-subprograms-packages',
    title: 'PL/SQL 2',
    desc: 'Subprograms, Packages, and Triggers.',
    user: 'howard',   // Only shown to Howard

    questions: [
        {
            id: 1,
            text: "Which statement accurately describes a characteristic of anonymous PL/SQL blocks?",
            options: [
                "They are stored in the database for future multi-user sharing.",
                "They are identified by a specific name in the schema.",
                "They must be recompiled every time they are executed.",
                "They can be invoked by external applications and other subprograms."
            ],
            correct: 2 // [cite: 1, 15]
        },
        {
            id: 2,
            text: "Why is it impossible for different users to share the same anonymous block directly from the database?",
            options: [
                "The database is unaware of these blocks even if saved on a local PC.",
                "They are default-protected by the owner's private schema.",
                "They are automatically converted into triggers upon execution.",
                "They lack the block structure required for database registration."
            ],
            correct: 0 // [cite: 3]
        },
        {
            id: 3,
            text: "Which of the following are considered 'subprograms' in PL/SQL?",
            options: [
                "Packages and triggers",
                "Procedures and functions",
                "Anonymous blocks and named blocks",
                "Cursors and variables"
            ],
            correct: 1 // [cite: 4]
        },
        {
            id: 4,
            text: "How is the compilation and storage of subprograms handled compared to anonymous blocks?",
            options: [
                "Subprograms are compiled on every execution and stored locally.",
                "Subprograms are compiled once upon creation and stored in the database.",
                "Subprograms are not compiled until they are grouped into a package.",
                "Both are stored in the database, but only subprograms are compiled."
            ],
            correct: 1 // [cite: 5, 17]
        },
        {
            id: 5,
            text: "What is the default visibility setting for a newly created subprogram?",
            options: [
                "Public to all users in the database",
                "Shared with all schemas in the local network",
                "Private to the schema of the owner",
                "Accessible only through a package specification"
            ],
            correct: 2 // [cite: 7]
        },
        {
            id: 6,
            text: "In the evolution of PL/SQL components, what do subprograms eventually become the 'building blocks' for?",
            options: [
                "Anonymous blocks and named blocks",
                "Database tables and views",
                "Packages and triggers",
                "SQL expressions and DML statements"
            ],
            correct: 2 // [cite: 8]
        },
        {
            id: 7,
            text: "When creating a named procedure, which keyword replaces the 'DECLARE' statement used in anonymous blocks?",
            options: [
                "BEGIN PROCEDURE",
                "CREATE OR REPLACE",
                "CREATE PROCEDURE",
                "IS PROCEDURE"
            ],
            correct: 2 // [cite: 12]
        },
        {
            id: 8,
            text: "What occurs if a developer includes the 'DECLARE' keyword in a 'CREATE PROCEDURE' statement?",
            options: [
                "The procedure becomes an anonymous block.",
                "A syntax error occurs because 'CREATE PROCEDURE' already signals the start.",
                "The compiler ignores it and proceeds with the subprogram creation.",
                "The procedure is automatically converted into a function."
            ],
            correct: 1 // [cite: 14]
        },
        {
            id: 9,
            text: "Which limitation applies specifically to anonymous blocks?",
            options: [
                "They cannot return values or take parameters.",
                "They cannot contain a BEGIN and END section.",
                "They cannot be saved on a personal computer.",
                "They require a RETURN statement to execute."
            ],
            correct: 0 // [cite: 16]
        },
        {
            id: 10,
            text: "How does modularizing code into procedures and functions benefit application maintenance?",
            options: [
                "It allows different versions of code to exist in multiple places.",
                "Modifications only need to be made once to improve multiple applications.",
                "It eliminates the need for testing after a code change.",
                "It forces the database to recompile code on every single call."
            ],
            correct: 1 // [cite: 21]
        },
        {
            id: 11,
            text: "Which feature of subprograms contributes to improved data security?",
            options: [
                "They run with the privileges of the user executing them by default.",
                "They grant direct access to all underlying database objects.",
                "They allow indirect access to objects through granted subprogram privileges.",
                "They bypass the schema owner's security settings."
            ],
            correct: 2 // [cite: 24]
        },
        {
            id: 12,
            text: "Under default settings, whose privileges are used when a subprogram is executed?",
            options: [
                "The privileges of the user who invokes the subprogram.",
                "The privileges of the subprogram owner.",
                "The privileges of the DBA who started the database.",
                "The privileges assigned to the public role."
            ],
            correct: 1 // [cite: 25]
        },
        {
            id: 13,
            text: "How do subprograms ensure data integrity within a business process?",
            options: [
                "By allowing each SQL statement to fail independently without affecting others.",
                "By grouping related actions so they are performed together or not at all.",
                "By preventing the use of COMMIT or ROLLBACK in the code.",
                "By automatically correcting data errors during execution."
            ],
            correct: 1 // [cite: 26]
        },
        {
            id: 14,
            text: "How do stored subprograms improve database performance?",
            options: [
                "They increase the speed of the network connection.",
                "They use the shared SQL area cache to reuse compiled code.",
                "They reduce the amount of memory used by the server.",
                "They force each user to compile a private copy of the code."
            ],
            correct: 1 // [cite: 27]
        },
        {
            id: 15,
            text: "What is a primary way that subprograms improve code clarity?",
            options: [
                "They require a minimum number of lines to be valid.",
                "They use names and conventions that reduce the need for comments.",
                "They automatically generate documentation in the USER_SOURCE view.",
                "They separate the variable declarations from the executable logic."
            ],
            correct: 1 // [cite: 30]
        },
        {
            id: 16,
            text: "Which of the following is a requirement for a PL/SQL function?",
            options: [
                "It must return at least two values.",
                "It must return a single value using a RETURN statement.",
                "It must be called using an anonymous block.",
                "It must only use OUT parameters to pass data."
            ],
            correct: 1 // [cite: 10, 32]
        },
        {
            id: 17,
            text: "What is a key difference in how procedures and functions return data?",
            options: [
                "Procedures cannot return data under any circumstances.",
                "Functions can return data via OUT parameters, but procedures cannot.",
                "Functions must return a value, while procedures use OUT or IN OUT parameters.",
                "Procedures use a RETURN statement to return values to expressions."
            ],
            correct: 2 // [cite: 32, 33]
        },
        {
            id: 18,
            text: "What is the behavior of the 'RETURN' statement when used inside a procedure?",
            options: [
                "It returns a mandatory numerical status code to the caller.",
                "It is strictly prohibited and causes a compilation error.",
                "It returns control to the caller before the procedure finishes executing.",
                "It must be placed at the very end of the procedure logic."
            ],
            correct: 2 // [cite: 35]
        },
        {
            id: 19,
            text: "Which statement regarding the relationship between SQL and subprograms is true?",
            options: [
                "Both procedures and functions can be called directly from a SELECT statement.",
                "Procedures can be called from SQL, but functions cannot.",
                "Functions can be called from SQL statements, but procedures cannot.",
                "Neither subprogram type can be used within a standard SQL expression."
            ],
            correct: 2 // [cite: 36, 40]
        },
        {
            id: 20,
            text: "A developer receives a compilation error in Application Express while creating a procedure. What is the correct course of action?",
            options: [
                "Use the DESCRIBE command to see the error details.",
                "Edit the source code to make corrections and recreate the procedure.",
                "Execute the procedure anyway to see where it fails.",
                "The database automatically deletes the source code, so they must start over."
            ],
            correct: 1 // [cite: 42, 45]
        },
        {
            id: 21,
            text: "What happens to the source code of a subprogram if it fails to compile correctly?",
            options: [
                "It is rejected and not stored in the database.",
                "It is stored in the database despite the errors.",
                "It is saved only in the shared SQL area cache.",
                "It is converted into an anonymous block."
            ],
            correct: 1 // [cite: 43]
        },
        {
            id: 22,
            text: "Which PL/SQL construct acts as a container for grouping related subprograms, variables, and cursors?",
            options: [
                "A Trigger",
                "A Function",
                "A Package",
                "An Anonymous Block"
            ],
            correct: 2 // [cite: 46]
        },
        {
            id: 23,
            text: "Which part of a package must be created first?",
            options: [
                "The Package Body",
                "The Package Specification",
                "The Package Trigger",
                "The Package Exception Handler"
            ],
            correct: 1 // [cite: 49]
        },
        {
            id: 24,
            text: "What is the purpose of the Package Specification?",
            options: [
                "It contains the hidden executable code for all subprograms.",
                "It acts as the interface, declaring constructs visible to the calling environment.",
                "It stores the logic for private variables used only within the body.",
                "It defines the SQL statements used by the package subprograms."
            ],
            correct: 1 // [cite: 48, 50]
        },
        {
            id: 25,
            text: "The two-part structure of a package (specification and body) is an example of which programming principle?",
            options: [
                "Inheritance",
                "Polymorphism",
                "Encapsulation",
                "Recursion"
            ],
            correct: 2 // [cite: 53]
        },
        {
            id: 26,
            text: "What is the default initialization value for variables declared in a package specification?",
            options: [
                "Zero",
                "NULL",
                "The value of the first record in the table",
                "Empty string"
            ],
            correct: 1 // [cite: 58]
        },
        {
            id: 27,
            text: "If a developer changes the logic inside a package body to update an error message, what must be recompiled?",
            options: [
                "Both the specification and the body.",
                "Only the specification.",
                "Only the package body.",
                "All applications that invoke the package."
            ],
            correct: 2 // [cite: 63]
        },
        {
            id: 28,
            text: "Which of the following is true regarding the existence of package parts?",
            options: [
                "A package body can exist without a specification.",
                "A package specification can exist without a body.",
                "Neither part can exist without the other.",
                "Both parts must be stored in the same data dictionary view."
            ],
            correct: 1 // [cite: 64]
        },
        {
            id: 29,
            text: "What is a limitation when using the 'DESCRIBE' command on packages?",
            options: [
                "You can only describe the package body.",
                "You can only describe the whole package, not individual packaged subprograms.",
                "You cannot describe a package that contains functions.",
                "You must describe each subprogram separately to see the package."
            ],
            correct: 1 // [cite: 67]
        },
        {
            id: 30,
            text: "Which best describes the nature of a database trigger?",
            options: [
                "A named block that must be explicitly called by an application.",
                "A block of code that 'listens' and executes automatically in response to events.",
                "A type of function that returns a boolean value to the database.",
                "A temporary block used only for troubleshooting DML operations."
            ],
            correct: 1 // [cite: 69, 71]
        },
        {
            id: 31,
            text: "Why are triggers unable to receive parameters?",
            options: [
                "They are too small to handle complex data inputs.",
                "They are never explicitly invoked by a user or application.",
                "They are stored in USER_TRIGGERS rather than USER_SOURCE.",
                "They execute only after a COMMIT has been issued."
            ],
            correct: 1 // [cite: 73]
        },
        {
            id: 32,
            text: "Which of these events would trigger an 'application trigger' rather than a 'database trigger'?",
            options: [
                "A user logging onto the database.",
                "A specific event occurring within a custom software program.",
                "A DBA shutting down the database server.",
                "An INSERT statement being performed on a table."
            ],
            correct: 1 // [cite: 76]
        },
        {
            id: 33,
            text: "Which of the following is NOT an event that can cause a database trigger to fire?",
            options: [
                "DML operations on a table",
                "DDL statements like CREATE or ALTER",
                "A SELECT statement executed by a user",
                "Database system events like LOGON or SHUTDOWN"
            ],
            correct: 2 // [cite: 78, 80, 81]
        },
        {
            id: 34,
            text: "How many times does a row-level trigger fire?",
            options: [
                "Once for the entire SQL statement.",
                "Once for each row affected by the triggering statement.",
                "Twice: once before the statement and once after.",
                "Only if the WHERE clause of the DML statement is met."
            ],
            correct: 1 // [cite: 83]
        },
        {
            id: 35,
            text: "According to the document's guidelines, when should you avoid using a trigger?",
            options: [
                "When the action can be easily implemented using constraints.",
                "When the logic involves more than one table.",
                "When you need to perform an INSERT or UPDATE.",
                "When the trigger needs to be row-level."
            ],
            correct: 0 // [cite: 86, 87]
        },
        {
            id: 36,
            text: "What is a potential downside of the excessive use of triggers?",
            options: [
                "Improved data security leads to restricted access.",
                "Slower processing and complex, difficult-to-maintain interdependencies.",
                "Automatic deletion of the USER_SOURCE dictionary.",
                "The database will refuse to compile any more subprograms."
            ],
            correct: 1 // [cite: 88]
        },
        {
            id: 37,
            text: "How should lengthy or complex logic be handled within a trigger?",
            options: [
                "By writing all code directly in the trigger body.",
                "By moving the logic to a stored procedure and calling that procedure from the trigger.",
                "By converting the trigger into an INSTEAD OF trigger.",
                "By disabling the trigger and running it as an anonymous block."
            ],
            correct: 1 // [cite: 90]
        },
        {
            id: 38,
            text: "Where is the source code for a trigger stored in the data dictionary?",
            options: [
                "USER_SOURCE",
                "USER_OBJECTS",
                "USER_TRIGGERS",
                "USER_PROCEDURES"
            ],
            correct: 2 // [cite: 91, 110]
        },
        {
            id: 39,
            text: "Which statement is strictly prohibited within the code of a trigger?",
            options: [
                "INSERT",
                "COMMIT",
                "UPDATE",
                "SELECT"
            ],
            correct: 1 // [cite: 93]
        },
        {
            id: 40,
            text: "What is a major difference between a procedure and a trigger regarding execution?",
            options: [
                "Procedures fire automatically; triggers must be called by name.",
                "Procedures are stored in the database; triggers are stored on the PC.",
                "Procedures must be explicitly invoked; triggers fire implicitly.",
                "Procedures cannot use transaction control; triggers can."
            ],
            correct: 2 // [cite: 92, 95]
        },
        {
            id: 41,
            text: "To create a trigger in your own schema, which of the following is NOT required?",
            options: [
                "CREATE ANY TRIGGER system privilege",
                "CREATE TRIGGER system privilege",
                "ALTER privilege on the associated table or view",
                "Object privileges on objects referenced in the trigger body"
            ],
            correct: 0 // [cite: 98, 99, 101, 102]
        },
        {
            id: 42,
            text: "Whose privileges does a trigger use during execution?",
            options: [
                "The privileges of the user who fired the trigger (Invoker's Rights).",
                "The privileges of the trigger owner (Definer's Rights).",
                "The privileges of the DBA.",
                "It uses a combination of both the owner's and the invoker's rights."
            ],
            correct: 1 // [cite: 103]
        },
        {
            id: 43,
            text: "Which data dictionary view allows you to see the compilation (syntax) errors of a trigger?",
            options: [
                "USER_TRIGGERS",
                "USER_OBJECTS",
                "USER_ERRORS",
                "USER_SOURCE"
            ],
            correct: 2 // [cite: 109]
        },
        {
            id: 44,
            text: "Which column in the USER_TRIGGERS view indicates if the trigger is BEFORE or AFTER?",
            options: [
                "TRIGGER_TYPE",
                "TRIGGERING_EVENT",
                "STATUS",
                "WHEN_CLAUSE"
            ],
            correct: 0 // [cite: 114]
        },
        {
            id: 45,
            text: "What is the recommended way to stop a trigger from firing temporarily?",
            options: [
                "Use the DROP TRIGGER statement.",
                "Use the ALTER TRIGGER statement to DISABLE it.",
                "Delete the source code from USER_TRIGGERS.",
                "Change the TRIGGER_TYPE to 'NONE'."
            ],
            correct: 1 // [cite: 127, 128]
        },
        {
            id: 46,
            text: "When a trigger is newly created, what is its initial status?",
            options: [
                "Disabled",
                "Invalid",
                "Enabled",
                "Private"
            ],
            correct: 2 // [cite: 131]
        },
        {
            id: 47,
            text: "What are the two ways to classify DML triggers?",
            options: [
                "By the user who created them and by the table they affect.",
                "By when they execute and by how many times they execute.",
                "By the size of the trigger body and the number of variables.",
                "By the schema owner and the data dictionary view used."
            ],
            correct: 1 // [cite: 133]
        },
        {
            id: 48,
            text: "Which type of trigger is the default for DML operations?",
            options: [
                "Row-level trigger",
                "Statement-level trigger",
                "INSTEAD OF trigger",
                "DDL trigger"
            ],
            correct: 1 // [cite: 140]
        },
        {
            id: 49,
            text: "How can you restrict an UPDATE trigger so it only fires when a specific column is changed?",
            options: [
                "By using the FOR EACH ROW clause.",
                "By specifying the column or columns in the triggering event.",
                "By creating the trigger ON SCHEMA.",
                "By disabling all other triggers on the table."
            ],
            correct: 1 // [cite: 136]
        },
        {
            id: 50,
            text: "In a row-level trigger, how do you reference the value of a column after it has been updated?",
            options: [
                ":OLD.column_name",
                ":NEW.column_name",
                ":POST.column_name",
                ":FINAL.column_name"
            ],
            correct: 1 // [cite: 146]
        },
        {
            id: 51,
            text: "Which type of trigger is always a row-level trigger?",
            options: [
                "BEFORE triggers",
                "AFTER triggers",
                "INSTEAD OF triggers",
                "DDL triggers"
            ],
            correct: 2 // [cite: 148]
        },
        {
            id: 52,
            text: "Which events fire a DDL trigger?",
            options: [
                "INSERT, UPDATE, or DELETE",
                "CREATE, ALTER, or DROP",
                "LOGON, SHUTDOWN, or STARTUP",
                "COMMIT, ROLLBACK, or SAVEPOINT"
            ],
            correct: 1 // [cite: 149]
        },
        {
            id: 53,
            text: "What is a restriction on 'Database Event' triggers regarding the schema?",
            options: [
                "They cannot be created ON DATABASE.",
                "They can only fire for DML operations.",
                "ON SCHEMA cannot be used with SHUTDOWN and STARTUP events.",
                "They require the use of the INSTEAD OF clause."
            ],
            correct: 2 // [cite: 158]
        },
        {
            id: 54,
            text: "When using the 'CALL' statement to invoke a subprogram from a trigger, what is a unique syntax rule?",
            options: [
                "It must end with a semicolon.",
                "It must include an END; statement.",
                "There is no semicolon at the end of the CALL statement.",
                "It must be placed inside the DECLARE section."
            ],
            correct: 2 // [cite: 159]
        },
        {
            id: 55,
            text: "What is a 'mutating table'?",
            options: [
                "A table that has no primary key.",
                "A table that is currently being modified by a DML statement.",
                "A table that has more than ten triggers associated with it.",
                "A table that has been dropped and recreated."
            ],
            correct: 1 // [cite: 160]
        },
        {
            id: 56,
            text: "Why is a row-level trigger restricted from selecting from a mutating table?",
            options: [
                "It would encounter a 'Statement Processed' error.",
                "It would see an inconsistent set of data because the table is changing.",
                "Row-level triggers do not have SELECT privileges.",
                "Only statement-level triggers are allowed to use the SELECT statement."
            ],
            correct: 1 // [cite: 161, 162]
        },
        {
            id: 57,
            type: 'identification',
            text: "Which data dictionary view stores the detailed code and status of a trigger?",
            answer: ["user_triggers"] // [cite: 108, 111]
        },
        {
            id: 58,
            type: 'identification',
            text: "What clause is used to specify that a trigger should fire for every record affected by a statement?",
            answer: ["for each row"] // [cite: 145]
        }
    ]
};