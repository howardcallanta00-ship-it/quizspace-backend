/**
 * QuizSpace Backend — server.js
 *
 * What this file does:
 *   1. Starts an Express web server
 *   2. On startup, reads every .js file inside the quizzes/ folder
 *      and loads it into memory as a quiz
 *   3. Exposes one API endpoint:
 *      GET /api/quizzes          → returns ALL quizzes
 *      GET /api/quizzes?user=howard → returns Howard's quizzes + shared ones
 *      GET /api/quizzes?user=myka   → returns Myka's quizzes + shared ones
 *
 * To add a new quiz: just drop a new .js file into the quizzes/ folder.
 * No other changes needed — the server picks it up automatically.
 */

const express = require('express');   // Express is our web server framework
const cors    = require('cors');      // CORS lets the frontend (on Vercel) talk to this backend (on Render)
const fs      = require('fs');        // fs = file system — used to read the quizzes/ folder
const path    = require('path');      // path helps build file paths correctly on any OS

const app  = express();
const PORT = process.env.PORT || 3000;
// process.env.PORT → Render will set this automatically when deployed
// || 3000           → falls back to port 3000 when running locally

// ── CORS Setup ────────────────────────────────────────────────────────────────
// CORS (Cross-Origin Resource Sharing) is a browser security rule.
// Without this, your frontend on Vercel would be BLOCKED from calling this backend.
// By adding cors() here, we tell the browser "yes, any website may call this API."
app.use(cors());

// ── Load All Quizzes From the quizzes/ Folder ─────────────────────────────────
// This runs ONCE when the server starts up.
// It reads every .js file in the quizzes/ folder and loads it into the quizzes array.

const quizzesDir = path.join(__dirname, 'quizzes');
// __dirname = the folder where server.js lives
// path.join builds: /your/project/folder/quizzes

const quizzes = [];   // This will hold all the loaded quiz objects

const files = fs.readdirSync(quizzesDir);
// readdirSync reads the folder and returns an array of filenames
// e.g. ['demo.js', 'howard-bio.js', 'myka-math.js']

files
    .filter(file => file.endsWith('.js'))
    // Only process .js files (ignore things like .DS_Store, README.md, etc.)
    .forEach(file => {
        try {
            const fullPath = path.join(quizzesDir, file);
            const quiz = require(fullPath);
            // require() loads the .js file and returns whatever it exports (module.exports = {...})

            // Basic validation — make sure the file has the required fields
            if (!quiz.id || !quiz.title || !Array.isArray(quiz.questions)) {
                console.warn(`⚠️  Skipped ${file} — missing id, title, or questions array`);
                return;
            }

            quizzes.push(quiz);
            console.log(`✅  Loaded: "${quiz.title}" (${quiz.questions.length} questions) from ${file}`);
        } catch (err) {
            console.error(`❌  Failed to load ${file}:`, err.message);
        }
    });

console.log(`\n📚  Total quizzes loaded: ${quizzes.length}\n`);

// ── API Endpoint ──────────────────────────────────────────────────────────────
// GET /api/quizzes
// GET /api/quizzes?user=howard
// GET /api/quizzes?user=myka

app.get('/api/quizzes', (req, res) => {
    const { user } = req.query;
    // req.query holds any ?key=value params from the URL
    // e.g. /api/quizzes?user=howard  →  req.query.user === 'howard'
    // e.g. /api/quizzes              →  req.query.user === undefined

    if (!user) {
        // No user filter — return every quiz
        return res.json(quizzes);
    }

    const filtered = quizzes.filter(quiz => {
        if (!quiz.user) return true;       // No user field = shared → always include
        return quiz.user === user;         // Has a user field → only include if it matches
    });

    res.json(filtered);
    // res.json() sends the array as JSON and sets Content-Type: application/json automatically
});

// ── Health Check ──────────────────────────────────────────────────────────────
// Visiting https://your-render-app.onrender.com/ returns a simple status message.
// Render uses this to know the server is alive.
app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        message: 'QuizSpace API is running',
        quizzesLoaded: quizzes.length
    });
});

// ── Start the Server ──────────────────────────────────────────────────────────
app.listen(PORT, () => {
    console.log(`🚀  QuizSpace backend running at http://localhost:${PORT}`);
    console.log(`    Try: http://localhost:${PORT}/api/quizzes`);
    console.log(`    Try: http://localhost:${PORT}/api/quizzes?user=howard`);
});