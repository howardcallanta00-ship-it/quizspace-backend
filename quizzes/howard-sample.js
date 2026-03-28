/**
 * howard-sample.js — A quiz only shown to Howard
 */

module.exports = {
    id: 'howard-science-basics',
    title: 'Science Basics',
    desc: 'Fundamental science concepts — Howard\'s edition.',
    user: 'howard',   // Only shown to Howard

    questions: [
        {
            id: 1,
            text: "What force keeps planets in orbit around the sun?",
            options: ["Magnetism", "Gravity", "Friction", "Centrifugal force"],
            correct: 1
        },
        {
            id: 2,
            text: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
            correct: 2
        },
        {
            id: 3,
            type: 'identification',
            text: "What gas do plants absorb during photosynthesis?",
            answer: ["carbon dioxide", "co2"]
        },
        {
            id: 4,
            text: "What is the speed of light (approximately)?",
            options: ["300,000 km/s", "150,000 km/s", "3,000 km/s", "30,000 km/s"],
            correct: 0
        },
        {
            id: 5,
            type: 'identification',
            text: "What element has the atomic number 1?",
            answer: ["hydrogen", "h"]
        }
    ]
};