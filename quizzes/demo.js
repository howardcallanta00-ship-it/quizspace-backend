/**
 * demo.js — A shared quiz (shown to both Howard and Myka)
 * No `user` field means it's shared.
 */

module.exports = {
    id: 'general-knowledge-demo',
    title: 'General Knowledge',
    desc: 'A quick general knowledge warm-up shown to everyone.',
    // No 'user' field → shared (shows up for both Howard and Myka)
    duration: 5,

    questions: [
        {
            id: 1,
            text: "What is the capital of Japan?",
            options: ["Beijing", "Seoul", "Bangkok", "Tokyo"],
            correct: 3
        },
        {
            id: 2,
            text: "How many planets are in our solar system?",
            options: ["7", "8", "9", "10"],
            correct: 1
        },
        {
            id: 3,
            type: 'identification',
            text: "What is the chemical symbol for water?",
            answer: ["h2o", "water"]
        },
        {
            id: 4,
            text: "Which continent is the largest by area?",
            options: ["Africa", "North America", "Asia", "Europe"],
            correct: 2
        },
        {
            id: 5,
            type: 'identification',
            text: "What is 7 multiplied by 8?",
            answer: ["56", "fifty-six"]
        }
    ]
};