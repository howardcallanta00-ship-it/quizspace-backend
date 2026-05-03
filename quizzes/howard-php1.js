module.exports = {
    id: 'php-web-architecture-module1',
    title: 'PHP M1',
    desc: 'PHP history, syntax, variables, datatypes, fundamental concepts',
    user: 'howard',
    questions: [
        {
            id: 1,
            text: "Who originally developed PHP in 1994/1995?",
            options: ["Zeev Suraski", "Andi Gutmans", "Rasmus Lerdorf", "Tim Berners-Lee"],
            correct: 2
        },
        {
            id: 2,
            text: "What was the original purpose of PHP when it was first created?",
            options: ["To create dynamic web forms for e-commerce", "To track visitors reading an online resume", "To manage database connections for enterprise applications", "To replace JavaScript in web browsers"],
            correct: 1
        },
        {
            id: 3,
            text: "What did the acronym \"PHP\" originally stand for in its earliest version?",
            options: ["Hypertext Preprocessor", "Personal Hypertext Pages", "Personal Home Page", "PHP Hypertext Protocol"],
            correct: 2
        },
        {
            id: 4,
            text: "In what year did PHP transition from being based on PERL to being based on C?",
            options: ["1994", "1997", "1998", "1999"],
            correct: 1
        },
        {
            id: 5,
            text: "Approximately how many users were using PHP by 1998 when version 3.0 was released?",
            options: ["10,000 users", "50,000 users", "1 million users", "3.6 million users"],
            correct: 1
        },
        {
            id: 6,
            text: "What is the name of the scripting engine introduced with PHP 4.0?",
            options: ["Turbo Engine", "Zend scripting engine", "Apache Engine", "PERL Engine"],
            correct: 1
        },
        {
            id: 7,
            text: "What does the current acronym \"PHP\" stand for?",
            options: ["Personal Home Page", "PHP: Hypertext Preprocessor", "Personal Hypertext Protocol", "Preprocessed Hypertext Pages"],
            correct: 1
        },
        {
            id: 8,
            text: "How many domains had PHP installed by May 22, 2000?",
            options: ["1 million", "2.5 million", "3.6 million", "19 million"],
            correct: 2
        },
        {
            id: 9,
            text: "Which of the following was NOT a new feature introduced in PHP 4.0?",
            options: ["Native session-handling support", "Try/catch exception handling", "Object-oriented support", "Encryption algorithms"],
            correct: 1
        },
        {
            id: 10,
            text: "On what date was PHP 5 officially released?",
            options: ["May 22, 2000", "July 13, 2004", "January 1, 2007", "December 15, 1999"],
            correct: 1
        },
        {
            id: 11,
            text: "Which of the following was a major improvement introduced in PHP 5?",
            options: ["Unicode support for multilingual applications", "Vastly improved object-oriented capabilities", "64-bit integer support", "ISAPI support for IIS"],
            correct: 1
        },
        {
            id: 12,
            text: "What percentage of all Apache modules had PHP installed according to the PHP 5 statistics?",
            options: ["35 percent", "45 percent", "54 percent", "72 percent"],
            correct: 2
        },
        {
            id: 13,
            text: "Why was PHP 6 notable in the document's timeline?",
            options: ["It was the most widely adopted version", "It was announced in 2007 but not yet released", "It introduced try/catch exception handling", "It removed support for older databases"],
            correct: 1
        },
        {
            id: 14,
            text: "Which of the following is NOT one of the four key categories of PHP mentioned in the document?",
            options: ["Practicality", "Power", "Performance", "Price"],
            correct: 2
        },
        {
            id: 15,
            text: "What characteristic of PHP makes it \"practical\" according to the document?",
            options: ["It has thousands of built-in functions", "It is a loosely typed language", "It supports 25+ database products", "It is completely free"],
            correct: 1
        },
        {
            id: 16,
            text: "Approximately how many database products does PHP offer native support for?",
            options: ["10 database products", "15 database products", "More than 25 database products", "Exactly 50 database products"],
            correct: 2
        },
        {
            id: 17,
            text: "Which of the following databases is NOT mentioned as having native PHP support?",
            options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
            correct: 2
        },
        {
            id: 18,
            text: "What is the standard tag format for enclosing PHP scripts?",
            options: ["<? … ?>", "<?php … ?>", "<script language=\"php\">…</script>", "<% … %>"],
            correct: 1
        },
        {
            id: 19,
            text: "What symbol is used as the statement terminator in PHP?",
            options: ["Colon (:)", "Comma (,)", "Semicolon (;)", "Period (.)"],
            correct: 2
        },
        {
            id: 20,
            text: "Which language construct is used to output one or more strings in PHP?",
            options: ["display", "echo", "output", "write"],
            correct: 1
        },
        {
            id: 21,
            text: "What is the difference between echo and print in PHP?",
            options: ["echo is a language construct while print is a function", "print is faster than echo", "echo only outputs numbers while print outputs strings", "print requires parentheses while echo does not"],
            correct: 0
        },
        {
            id: 22,
            text: "Which of the following is a valid short open tag format for PHP?",
            options: ["<php>…</php>", "<? … ?>", "<%php … %>", "<<php … >>"],
            correct: 1
        },
        {
            id: 23,
            text: "What symbol is used for single-line comments in PERL style syntax within PHP?",
            options: ["//", "#", "--", "\\\\"],
            correct: 1
        },
        {
            id: 24,
            text: "How are multiline or block comments formatted in PHP?",
            options: ["/* … */", "<!-- … -->", "## … ##", "{{ … }}"],
            correct: 0
        },
        {
            id: 25,
            text: "What symbol must all PHP variables begin with?",
            options: ["@ symbol", "# symbol", "$ symbol", "& symbol"],
            correct: 2
        },
        {
            id: 26,
            text: "Which of the following is a valid first character for a PHP variable identifier after the $ symbol?",
            options: ["A number", "An underscore or letter", "A hyphen", "A special character like !"],
            correct: 1
        },
        {
            id: 27,
            text: "Which characters can a PHP variable identifier contain after the first character?",
            options: ["Only letters", "Letters and numbers only", "Alpha-numeric characters and underscores", "Any keyboard character"],
            correct: 2
        },
        {
            id: 28,
            text: "Which of the following is a valid PHP variable name?",
            options: ["$first-name", "$2total", "$my value", "$_myValue"],
            correct: 3
        },
        {
            id: 29,
            text: "What is true about variable declaration in PHP?",
            options: ["Variables must be explicitly declared with a type", "Variables are not explicitly declared", "Variables must be initialized before use", "Variables require the var keyword"],
            correct: 1
        },
        {
            id: 30,
            text: "Are PHP variables case sensitive?",
            options: ["No, $age and $Age refer to the same variable", "Yes, $age and $Age are different variables", "Only if declared as case sensitive", "Case sensitivity depends on the PHP version"],
            correct: 1
        },
        {
            id: 31,
            text: "How are strings interpreted when enclosed in single quotes (' ') in PHP?",
            options: ["As variables", "As literal strings", "As HTML code", "As mathematical expressions"],
            correct: 1
        },
        {
            id: 32,
            text: "In PHP, if you need to display a single quote character (') as a string within single quotes, what must you use?",
            options: ["Double the quote ('')", "Use the escape character backslash (\\)", "Wrap it in double quotes", "Use the quotation function"],
            correct: 1
        },
        {
            id: 33,
            text: "How does PHP interpret a dollar sign ($) when it appears inside double quotes (\" \")?",
            options: ["As a literal dollar sign character", "As the beginning of a variable name", "As a currency formatter", "As an escape character"],
            correct: 1
        },
        {
            id: 34,
            text: "What character is used to concatenate string values in PHP?",
            options: ["Plus sign (+)", "Ampersand (&)", "Dot or period (.)", "Comma (,)"],
            correct: 2
        },
        {
            id: 35,
            text: "What is the result of the PHP expression \"abc\".\"def\"?",
            options: ["abc def", "abcdef", "\"abc\"\"def\"", "abc+def"],
            correct: 1
        },
        {
            id: 36,
            text: "What is the syntax prototype for the echo function?",
            options: ["echo(string argument)", "void echo(string argument1[,…string argumentN])", "string echo(argument)", "boolean echo(string format)"],
            correct: 1
        },
        {
            id: 37,
            text: "What does the print function return in PHP?",
            options: ["void", "string", "int", "boolean"],
            correct: 2
        },
        {
            id: 38,
            text: "What does the printf function return in PHP?",
            options: ["void", "string", "int", "boolean"],
            correct: 3
        },
        {
            id: 39,
            text: "In the printf function, what does the %d type specifier represent?",
            options: ["A binary number", "A floating-point number", "A signed decimal number", "A hexadecimal number"],
            correct: 2
        },
        {
            id: 40,
            text: "If you use the %b type specifier in printf, how will the argument be presented?",
            options: ["As a Boolean value", "As a binary number", "As a byte character", "As a bold string"],
            correct: 1
        },
        {
            id: 41,
            text: "What type specifier would you use in printf to present an argument as a string?",
            options: ["%t", "%c", "%s", "%v"],
            correct: 2
        },
        {
            id: 42,
            text: "Which type specifier presents an argument as a lowercase hexadecimal number in printf?",
            options: ["%h", "%x", "%X", "%l"],
            correct: 1
        },
        {
            id: 43,
            text: "What is a datatype in PHP?",
            options: ["A function that processes data", "A generic name assigned to any data sharing common characteristics", "A variable declaration method", "A memory allocation system"],
            correct: 1
        },
        {
            id: 44,
            text: "Which of the following is a scalar datatype in PHP?",
            options: ["Array", "Object", "Boolean", "Resource"],
            correct: 2
        },
        {
            id: 45,
            text: "What distinguishes scalar datatypes from compound datatypes?",
            options: ["Scalar datatypes are faster to process", "Scalar datatypes can contain only a single item of information", "Scalar datatypes require more memory", "Scalar datatypes are case sensitive"],
            correct: 1
        },
        {
            id: 46,
            text: "Which of the following is a compound datatype in PHP?",
            options: ["Integer", "Float", "String", "Array"],
            correct: 3
        },
        {
            id: 47,
            text: "What is the correct type casting operator to convert a variable to a Boolean in PHP?",
            options: ["(bool) or (boolean)", "(boolean_type)", "(true_false)", "(bit)"],
            correct: 0
        },
        {
            id: 48,
            text: "Which type casting operator was introduced in PHP 6 according to the document?",
            options: ["(bigint)", "(int64)", "(long)", "(extended)"],
            correct: 1
        },
        {
            id: 49,
            text: "What does the gettype() function return?",
            options: ["The value of the variable", "The type of the variable", "The memory address of the variable", "The length of the variable"],
            correct: 1
        },
        {
            id: 50,
            text: "What is the prototype for the gettype() function?",
            options: ["type gettype(variable var)", "string gettype(mixed var)", "mixed gettype(string var)", "boolean gettype(any var)"],
            correct: 1
        },
        {
            id: 51,
            text: "What does the settype() function do in PHP?",
            options: ["Returns the current type of a variable", "Converts a variable to a specific type", "Checks if a variable type is valid", "Deletes a variable's type information"],
            correct: 1
        },
        {
            id: 52,
            text: "What does the settype() function return?",
            options: ["string", "mixed", "boolean", "integer"],
            correct: 2
        },
        {
            id: 53,
            text: "Which predefined function would you use to check if a variable is an integer?",
            options: ["check_integer()", "is_int()", "is_integer()", "verify_integer()"],
            correct: 2
        },
        {
            id: 54,
            text: "Which of the following is NOT a predefined type identifier function mentioned in the document?",
            options: ["is_array()", "is_numeric()", "is_string()", "is_character()"],
            correct: 3
        },
        {
            id: 55,
            text: "According to the summary, what programming language did much of the PHP syntax derive from?",
            options: ["PERL", "C programming language", "Java", "Python"],
            correct: 1
        },
        {
            id: 56,
            text: "What is a key characteristic of PHP as described in the summary?",
            options: ["It is a client-side scripting language", "It is a compiled language", "It is a server-side scripting language", "It is a markup language"],
            correct: 2
        },
        {
            id: 57,
            text: "Where does PHP run its applications?",
            options: ["On the client's web browser", "On a web server", "On a database server", "On a CDN network"],
            correct: 1
        },
        {
            id: 58,
            text: "What type of language is PHP commonly embedded in?",
            options: ["CSS", "JavaScript", "HTML", "XML"],
            correct: 2
        },
        {
            id: 59,
            text: "According to the summary, how difficult is it to integrate databases in PHP?",
            options: ["Very difficult and requires extensive configuration", "Impossible without third-party tools", "Easy to integrate", "Only possible with MySQL"],
            correct: 2
        },
        {
            id: 60,
            text: "According to the document, what happens to strings inside a pair of single quotes?",
            options: ["They are interpreted as variables", "They are interpreted as literal except for the single quote itself", "They are automatically converted to uppercase", "They are parsed for HTML tags"],
            correct: 1
        },
        {
            id: 61,
            text: "Which character must be used to explicitly display special characters like $ or quotes in the browser?",
            options: ["Forward slash (/)", "Backslash (\\)", "Pipe (|)", "Caret (^)"],
            correct: 1
        },
        {
            id: 62,
            text: "How can datatypes in PHP be categorized according to the document?",
            options: ["Primitive or advanced", "Static or dynamic", "Scalar or compound", "Simple or complex"],
            correct: 2
        },
        {
            id: 63,
            text: "Can you explicitly change the type of a variable in PHP?",
            options: ["No, types are permanently assigned", "Yes, PHP supports explicit type conversion", "Only during variable declaration", "Only for numeric types"],
            correct: 1
        },
        {
            id: 64,
            text: "What support does PHP provide for manipulating type variables?",
            options: ["Third-party libraries only", "No built-in support", "Predefined type functions", "Manual conversion methods only"],
            correct: 2
        },
        {
            id: 65,
            text: "Which PHP version introduced native support for SQLite?",
            options: ["PHP 3.0", "PHP 4.0", "PHP 5", "PHP 6"],
            correct: 2
        },
        {
            id: 66,
            text: "What was one of the planned improvements for PHP 6?",
            options: ["Try/catch exception handling", "Unicode support for multilingual applications", "Object-oriented capabilities", "SOAP support"],
            correct: 1
        },
        {
            id: 67,
            text: "Which looping construct was mentioned as a new language feature in PHP 6?",
            options: ["while loop", "for loop", "foreach loop", "do-while loop"],
            correct: 2
        },
        {
            id: 68,
            text: "What type of integer support was planned for PHP 6?",
            options: ["32-bit integer", "48-bit integer", "64-bit integer", "128-bit integer"],
            correct: 2
        },
        {
            id: 69,
            text: "On how many domains was PHP installed when PHP 5 was released?",
            options: ["3.6 million domains", "10 million domains", "19 million domains", "54 million domains"],
            correct: 2
        },
        {
            id: 70,
            text: "Which of the following was introduced in PHP 4.0 to improve scalability?",
            options: ["Unicode support", "Improved resource handling", "Try/catch blocks", "Native SQLite support"],
            correct: 1
        },
        {
            id: 71,
            text: "What type of support was added in PHP 4.0 specifically for Windows applications?",
            options: [".NET Framework", "Native COM/DOM", "ActiveX", "WPF"],
            correct: 1
        },
        {
            id: 72,
            text: "What did PHP 5 improve regarding XML and web services?",
            options: ["Removed XML support entirely", "Added basic XML parsing", "Improved XML and web services support including SOAP", "Required third-party XML libraries"],
            correct: 2
        },
        {
            id: 73,
            text: "Which approach does PHP support for programming according to the document?",
            options: ["Only structured programming", "Only object-oriented programming", "Both structured and object-oriented approaches", "Only functional programming"],
            correct: 2
        },
        {
            id: 74,
            text: "What must each statement in PHP be terminated with?",
            options: ["A comma", "A period", "A semicolon", "A colon"],
            correct: 2
        },
        {
            id: 75,
            text: "What happens when you enclose strings using a pair of double quotes with a variable inside?",
            options: ["The variable name is displayed as text", "The variable's value is displayed", "An error occurs", "The quotes are removed"],
            correct: 1
        }
    ]
};