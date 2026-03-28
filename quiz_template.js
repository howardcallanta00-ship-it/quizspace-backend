/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║           QUIZSPACE — BACKEND QUIZ TEMPLATE                     ║
 * ║  Copy this file into the quizzes/ folder and fill it in.        ║
 * ║  Save as anything, e.g. "myquiz.js"                             ║
 * ║  The server loads it automatically — no other changes needed!   ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 * ─── WHO SEES THIS QUIZ? ──────────────────────────────────────────
 *
 *   user: 'howard'   →  Only shown in Howard's library
 *   user: 'myka'     →  Only shown in Myka's library
 *   (leave out user) →  Shown in BOTH libraries (shared)
 *
 * ─── QUESTION TYPES ───────────────────────────────────────────────
 *
 *   Multiple Choice:
 *   {
 *     id: 1,
 *     text: "Question text here?",
 *     options: ["Choice A", "Choice B", "Choice C", "Choice D"],
 *     correct: 0   // 0 = A, 1 = B, 2 = C, 3 = D
 *   }
 *
 *   Identification (text input):
 *   {
 *     id: 2,
 *     type: 'identification',
 *     text: "Question text here?",
 *     answer: "single accepted answer"
 *     // OR accept multiple: answer: ["answer one", "alt answer"]
 *     // Matching is case-insensitive and trims whitespace.
 *   }
 *
 * ─── QUICK SETUP CHECKLIST ────────────────────────────────────────
 *   [ ] Change the `id` to something unique (no spaces, use dashes)
 *   [ ] Fill in `title` and `desc`
 *   [ ] Set `user` to 'howard', 'myka', or remove for shared
 *   [ ] Update `duration` (optional — shown on the card instead of Q count)
 *   [ ] Add your questions to the `questions` array
 *   [ ] Save the file in the quizzes/ folder — done!
 * ──────────────────────────────────────────────────────────────────
 *
 * KEY DIFFERENCE from the old quiz_template.js:
 *   OLD (browser):  window.QuizRegistry.push({ ... })
 *   NEW (backend):  module.exports = { ... }
 *
 *   That's the only change. Everything else (id, title, questions, etc.)
 *   is exactly the same format you already know.
 */

module.exports = {

    // ── Metadata ──────────────────────────────────────────────────────
    id: 'my-unique-quiz-id',        // REQUIRED — unique across all quizzes, no spaces (use dashes)
    title: 'My Quiz Title',         // Shown on the card in the dashboard
    desc: 'A short description of what this quiz covers.',
    user: 'howard',                 // 'howard' | 'myka' | remove this line for BOTH users
    duration: 20,                   // Optional — displayed as "20 items" on the card

    // ── Questions ─────────────────────────────────────────────────────
    questions: [

        // ── MULTIPLE CHOICE EXAMPLE ──────────────────────────────────
        {
            id: 1,
            text: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            correct: 2   // Paris = index 2 (0-based)
        },

        {
            id: 2,
            text: "Which of the following is a primary color in light?",
            options: ["Yellow", "Red", "Green", "Orange"],
            correct: 1
        },

        // ── IDENTIFICATION EXAMPLE (single answer) ───────────────────
        {
            id: 3,
            type: 'identification',
            text: "What is the chemical symbol for gold?",
            answer: "au"   // case-insensitive, so "AU" and "Au" also accepted
        },

        // ── IDENTIFICATION EXAMPLE (multiple accepted answers) ───────
        {
            id: 4,
            type: 'identification',
            text: "What do you call a person who studies insects?",
            answer: ["entomologist", "insectologist"]
        },

        // ── ADD MORE QUESTIONS BELOW ─────────────────────────────────
        // Copy a block above and update: id, text, options/answer, correct

        {
            id: 5,
            text: "Replace this with your own question.",
            options: ["Option A", "Option B", "Option C", "Option D"],
            correct: 0
        },

    ]

};