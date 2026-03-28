/**
 * myka-sample.js — A quiz only shown to Myka
 */

module.exports = {
    id: 'myka-world-capitals',
    title: 'World Capitals',
    desc: 'Test your knowledge of world capital cities — Myka\'s edition.',
    user: 'myka',   // Only shown to Myka

    questions: [
        {
            id: 1,
            text: "What is the capital of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
            correct: 2
        },
        {
            id: 2,
            text: "What is the capital of Canada?",
            options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
            correct: 3
        },
        {
            id: 3,
            type: 'identification',
            text: "What is the capital of the Philippines?",
            answer: ["manila", "metro manila"]
        },
        {
            id: 4,
            text: "What is the capital of Brazil?",
            options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
            correct: 2
        },
        {
            id: 5,
            type: 'identification',
            text: "What is the capital of South Korea?",
            answer: ["seoul"]
        }
    ]
};