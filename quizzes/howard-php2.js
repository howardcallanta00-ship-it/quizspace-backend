module.exports = {
    id: 'php-operators-control-structures',
    title: 'PHP M2',
    desc: 'PHP operators, precedence, associativity, and control structures.',
    user: 'howard',
    questions: [
        {
            id: 1,
            text: "What is an operator in PHP?",
            options: ["A function that returns multiple values", "A symbol that specifies a particular action in an expression", "A variable that stores conditional logic", "A method for defining object properties"],
            correct: 1
        },
        {
            id: 2,
            text: "Which associativity type does the new operator have?",
            options: ["Left", "Right", "NA", "Bidirectional"],
            correct: 2
        },
        {
            id: 3,
            text: "What is the purpose of the @ operator in PHP?",
            options: ["Bitwise AND operation", "Array concatenation", "Error suppression", "Memory allocation"],
            correct: 2
        },
        {
            id: 4,
            text: "Which operators have left associativity and are used for division, multiplication, and modulus?",
            options: ["+ - .", "/ * %", "<< >>", "& ^ |"],
            correct: 1
        },
        {
            id: 5,
            text: "What does operator precedence determine?",
            options: ["The data type returned by an operation", "The order in which operators evaluate the operands surrounding them", "The memory allocation for variables", "The scope of variable declarations"],
            correct: 1
        },
        {
            id: 6,
            text: "What does operator associativity specify?",
            options: ["The data types compatible with an operator", "How operations of the same precedence are evaluated as they are executed", "The number of operands required", "The return type of the expression"],
            correct: 1
        },
        {
            id: 7,
            text: "What is the result of the expression $a % $b?",
            options: ["The sum of $a and $b", "The product of $a and $b", "The quotient of $a divided by $b", "The remainder of $a divided by $b"],
            correct: 3
        },
        {
            id: 8,
            text: "If $a initially equals 10, what is the value of $a after the operation $a += 5?",
            options: ["10", "15", "50", "5"],
            correct: 1
        },
        {
            id: 9,
            text: "What does the .= operator do?",
            options: ["Divides and assigns the result", "Multiplies and assigns the result", "Concatenates and assigns the result", "Subtracts and assigns the result"],
            correct: 2
        },
        {
            id: 10,
            text: "What is the difference between ++$a and $a++?",
            options: ["++$a decrements before execution, $a++ decrements after", "++$a increments after execution, $a++ increments before", "++$a increments before execution, $a++ increments after", "There is no difference in their behavior"],
            correct: 2
        },
        {
            id: 11,
            text: "If $a equals 8 and $b equals 12, what does ($a < $b) evaluate to?",
            options: ["False", "True", "8", "12"],
            correct: 1
        },
        {
            id: 12,
            text: "Given the ternary expression ($a == 12) ? 5 : -1, what value is returned if $a equals 15?",
            options: ["12", "15", "5", "-1"],
            correct: 3
        },
        {
            id: 13,
            text: "Which of the following logical operators returns true only if both operands are true?",
            options: ["||", "XOR", "&&", "!"],
            correct: 2
        },
        {
            id: 14,
            text: "What does the XOR logical operator return?",
            options: ["True if both operands are true", "True if both operands are false", "True if only one operand is true (but not both)", "True if either or both operands are true"],
            correct: 2
        },
        {
            id: 15,
            text: "What is the difference between == and === in PHP?",
            options: ["== checks value only, === checks value and type", "== checks type only, === checks value only", "== is for numbers, === is for strings", "They are functionally identical"],
            correct: 0
        },
        {
            id: 16,
            text: "If $a equals 5 and $b equals \"5\", what does ($a === $b) evaluate to?",
            options: ["True, because the values are equivalent", "False, because they have different types", "True, because PHP auto-converts types", "Error, because comparison is invalid"],
            correct: 1
        },
        {
            id: 17,
            text: "What does the bitwise & operator do?",
            options: ["Performs logical OR on boolean values", "ANDs together each bit contained in the operands", "Shifts bits to the left", "Negates each bit in the operand"],
            correct: 1
        },
        {
            id: 18,
            text: "What is the result of the operation $a << $b where the value is shifted left two bits?",
            options: ["$a receives the value of $b shifted left two bits", "$b receives the value of $a shifted left two bits", "Both $a and $b are shifted left", "A new variable is created with the shifted value"],
            correct: 0
        },
        {
            id: 19,
            text: "What does the escape sequence \\n represent?",
            options: ["Backslash character", "Null terminator", "Newline character", "Numeric value"],
            correct: 2
        },
        {
            id: 20,
            text: "Which escape sequence represents a horizontal tab?",
            options: ["\\h", "\\t", "\\tab", "\\r"],
            correct: 1
        },
        {
            id: 21,
            text: "What does the \\\\ escape sequence produce?",
            options: ["Double backslash", "Forward slash", "Single backslash", "Line break"],
            correct: 2
        },
        {
            id: 22,
            text: "What is the purpose of the break statement in PHP?",
            options: ["To pause program execution temporarily", "To break out of a loop statement", "To break a string into parts", "To terminate the entire program"],
            correct: 1
        },
        {
            id: 23,
            text: "What does the continue statement do when executed within a loop?",
            options: ["Restarts the program from the beginning", "Ends execution of the current loop iteration and commences at the beginning of the next iteration", "Breaks out of all nested loops", "Pauses the loop until user input is received"],
            correct: 1
        },
        {
            id: 24,
            text: "What is the goto statement used for in PHP?",
            options: ["To return values from functions", "To jump to other sections of the program using labels", "To create loop structures", "To handle exceptions"],
            correct: 1
        },
        {
            id: 25,
            text: "In alternative enclosure syntax, what replaces the opening bracket?",
            options: ["Semicolon", "Comma", "Colon", "Forward slash"],
            correct: 2
        },
        {
            id: 26,
            text: "In alternative enclosure syntax for an if statement, what replaces the closing bracket?",
            options: ["end;", "endif;", "close;", "fi;"],
            correct: 1
        },
        {
            id: 27,
            text: "When does post-increment (e.g., $a++) execute the increment operation?",
            options: ["Before executing the statement", "After executing the statement", "Simultaneously with the statement", "Only if the statement is true"],
            correct: 1
        },
        {
            id: 28,
            text: "When does pre-decrement (e.g., --$a) execute the decrement operation?",
            options: ["After executing the statement", "Only on the next iteration", "Before executing the statement", "At the end of the script"],
            correct: 2
        },
        {
            id: 29,
            text: "Which of the following is NOT mentioned as an alternative enclosure syntax structure in the document?",
            options: ["if", "while", "do-while", "foreach"],
            correct: 2
        },
        {
            id: 30,
            text: "What associativity does the ternary operator ?: have?",
            options: ["Left", "Right", "NA", "Both"],
            correct: 1
        },
        {
            id: 31,
            text: "Which operator has the purpose of \"expression separation\" as shown in the example with array creation?",
            options: ["Semicolon", "Comma", "Period", "Colon"],
            correct: 1
        },
        {
            id: 32,
            text: "What are the bitwise shift operators mentioned in the document?",
            options: ["< and >", "<< and >>", "<= and >=", "<> and ><"],
            correct: 1
        },
        {
            id: 33,
            text: "If $a equals 20 and the operation $a /= 5 is performed, what is the new value of $a?",
            options: ["25", "100", "4", "15"],
            correct: 2
        },
        {
            id: 34,
            text: "Which operators represent Boolean AND in PHP according to the document?",
            options: ["& and |", "&& and AND", "|| and OR", "! and NOT"],
            correct: 1
        },
        {
            id: 35,
            text: "What is the outcome of the ! operator?",
            options: ["True if the operand is true", "True if the operand is not true", "Inverts all bits in the operand", "Returns the negative value"],
            correct: 1
        },
        {
            id: 36,
            text: "Which comparison operator would evaluate to true if $a is greater than or equal to $b?",
            options: ["$a > $b", "$a => $b", "$a >= $b", "$a <> $b"],
            correct: 2
        },
        {
            id: 37,
            text: "What does the != operator test?",
            options: ["Whether values are identical in type and value", "Whether values are not equal", "Whether values are greater than", "Whether values are null"],
            correct: 1
        },
        {
            id: 38,
            text: "Which of the following has NA (not applicable) as its associativity?",
            options: ["Division operator", "Assignment operator", "Less than operator", "Addition operator"],
            correct: 2
        },
        {
            id: 39,
            text: "What notation does the escape sequence \\[0-7]{1,3} represent?",
            options: ["Binary notation", "Decimal notation", "Octal notation", "Hexadecimal notation"],
            correct: 2
        },
        {
            id: 40,
            text: "What notation does the escape sequence \\x[0-9A-Fa-f]{1,2} represent?",
            options: ["Octal notation", "Hexadecimal notation", "Binary notation", "Unicode notation"],
            correct: 1
        },
        {
            id: 41,
            text: "Which escape sequence represents a dollar sign?",
            options: ["\\d", "\\$", "$$", "\\dollar"],
            correct: 1
        },
        {
            id: 42,
            text: "What does the escape sequence \\\" produce?",
            options: ["Single quote", "Double quote", "Backslash", "Quote mark with backslash"],
            correct: 1
        },
        {
            id: 43,
            text: "Which statement about conditional statements is correct according to the document?",
            options: ["They execute only when the condition is false", "They execute statements inside a block if a given condition is true", "They always execute regardless of conditions", "They can only contain one line of code"],
            correct: 1
        },
        {
            id: 44,
            text: "What is the purpose of using compound expressions according to the document?",
            options: ["To increase execution time", "To minimize the process of coding using nested if statements", "To create multiple variable declarations", "To separate unrelated logic blocks"],
            correct: 1
        },
        {
            id: 45,
            text: "What does the | bitwise operator do?",
            options: ["ANDs together each bit", "ORs together each bit contained in the operands", "Negates each bit", "Shifts bits to the right"],
            correct: 1
        },
        {
            id: 46,
            text: "What does the ~ bitwise operator do?",
            options: ["Combines two values", "Negates each bit in the operand", "Shifts bits left", "Compares two values"],
            correct: 1
        },
        {
            id: 47,
            text: "Which alternative enclosure syntax ending is used for a switch statement?",
            options: ["endswitch;", "endcase;", "switchend;", "closeswitch;"],
            correct: 0
        },
        {
            id: 48,
            text: "What is the alternative enclosure syntax ending for a while loop?",
            options: ["endloop;", "endwhile;", "whileend;", "loopend;"],
            correct: 1
        },
        {
            id: 49,
            text: "According to the document, what must you follow when simplifying expressions in PHP?",
            options: ["Alphabetical order", "User-defined rules", "A general precedence set by PHP scripts", "Random evaluation order"],
            correct: 2
        },
        {
            id: 50,
            text: "Which operator has Right associativity and is used for assignment operations?",
            options: ["+ - .", "&& ||", "= += *= /= .= %= &= |= ^= <<= >>=", "< <= > >="],
            correct: 2
        }
    ]
};