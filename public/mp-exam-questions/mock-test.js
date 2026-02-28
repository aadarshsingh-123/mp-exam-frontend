// ===== Mock Test Logic — Exam Center Style =====

const Q_COMBINED_MP = [...Q_COMPUTER_DEEP, ...Q_COMPUTER_EXTRA, ...Q_COMPUTER, ...Q_MP_GK, ...Q_MP_GK_EXTRA];
const Q_COMBINED_HIST = [...Q_HIST_POLITY, ...Q_HISTORY_POLITY_EXTRA];
const Q_COMBINED_GEO = [...Q_CURRENT_AFFAIRS, ...Q_GEO_ECO_CURR, ...Q_GEO_ECO_EXTRA];
const Q_COMBINED_SCI = [...Q_SCIENCE_TECH, ...Q_SCIENCE_TECH_EXTRA];
const Q_COMBINED_COMP = [...Q_SHORTCUTS];
const Q_COMBINED_MIXED = [...Q_B12, ...Q_B19, ...Q_B20, ...Q_B21, ...Q_B23, ...Q_B24, ...Q_B25, ...Q_B26, ...Q_EXPANSION, ...Q_FINAL_EXPANSION, ...Q_FINAL_MEGA, ...Q_MEGA_BATCH, ...Q_MIXED_GK, ...Q_MIXED_GK_EXTRA, ...Q_ULTIMATE, ...Q_VOLUME];

const MOCK_CATEGORIES = {
    "MP GK (History, Geo, Culture)": { data: Q_COMBINED_MP, label: "मध्य प्रदेश दर्शन (MP GK)", icon: "🏛️" },
    "Indian History & Polity": { data: Q_COMBINED_HIST, label: "भारतीय इतिहास एवं राजव्यवस्था", icon: "📜" },
    "Geography, Economy & Current Affairs": { data: Q_COMBINED_GEO, label: "भूगोल, अर्थव्यवस्था एवं करेंट अफेयर्स", icon: "🌍" },
    "Science, Tech & Environment": { data: Q_COMBINED_SCI, label: "विज्ञान, तकनीकी एवं पर्यावरण", icon: "🔬" },
    "Mixed GK, Sports & Miscellaneous": { data: Q_COMBINED_MIXED, label: "मिश्रित GK, खेल एवं विविध", icon: "🏅" },
    "Computer & IT GK": { data: Q_COMBINED_COMP, label: "कंप्यूटर ज्ञान एवं IT", icon: "💻" }
};


const MARKS_PER_Q = 2;
const NEG_MARKS = +(MARKS_PER_Q / 3).toFixed(2); // 0.67

// State
let testQuestions = [];
let totalQ = 50;
let totalMarks = 100;
let testDuration = 3600; // seconds
let userAnswers = [];    // -1 = not answered
let questionStatus = []; // 'not-visited','not-answered','answered','marked','marked-answered'
let currentQ = 0;
let timerInterval = null;
let remainingTime = 0;
let testName = '';
let testSubject = '';
let currentExamFilter = 'all'; // filter for full length tests


// ===== Navigation & Test Selection =====
let currentTestIndex = 0;

function applyFullTestFilter() {
    const sel = document.getElementById("fullTestExamFilter");
    if (sel) {
        currentExamFilter = sel.value;
    }
    renderFullLengthTests();
}

function switchTestTab(tab) {
    document.querySelectorAll('.test-tab').forEach(t => t.classList.remove('active'));
    if (tab === 'subject') {
        document.getElementById('tabSubject').classList.add('active');
        document.getElementById('sectionSubjectWise').style.display = '';
        document.getElementById('sectionFullLength').style.display = 'none';
        document.getElementById('subjectCategoriesView').style.display = '';
        document.getElementById('subjectTestsView').style.display = 'none';
    } else {
        document.getElementById('tabFull').classList.add('active');
        document.getElementById('sectionSubjectWise').style.display = 'none';
        document.getElementById('sectionFullLength').style.display = '';
        renderFullLengthTests();
    }
}

function getTestUnlockStatus(subject, index) {
    if (index === 0) return true; // First test always unlocked
    return localStorage.getItem(`mock_completed_${subject}_${index - 1}`) === 'true';
}

function markTestCompleted(subject, index) {
    localStorage.setItem(`mock_completed_${subject}_${index}`, 'true');
}

// Generate Subject Tests
function showSubjectTests(subjectKey, subjectLabel) {
    document.getElementById('subjectCategoriesView').style.display = 'none';
    document.getElementById('subjectTestsView').style.display = '';
    document.getElementById('subjectTestTitle').textContent = subjectLabel + " - Tests";

    const container = document.getElementById("subjectTestList");
    container.innerHTML = "";

    const pool = MOCK_CATEGORIES[subjectKey].data;
    const maxTests = Math.floor(pool.length / 50);

    for (let i = 0; i < maxTests; i++) {
        const isUnlocked = getTestUnlockStatus(subjectKey, i);
        const isCompleted = localStorage.getItem(`mock_completed_${subjectKey}_${i}`) === 'true';

        const card = document.createElement("div");
        card.className = "test-card " + (isUnlocked ? "" : "test-card-locked");
        if (isUnlocked) {
            card.onclick = () => showInstructions(subjectKey, `${subjectLabel} - Mock Test ${i + 1}`, 50, i);
        }

        card.innerHTML = `
            <div class="test-card-left">
                <div class="test-card-icon-sm">${isUnlocked ? (isCompleted ? "✅" : "📝") : "🔒"}</div>
                <div>
                    <h3>Mock Test ${i + 1}</h3>
                    <p>50 Questions from ${subjectLabel}</p>
                </div>
            </div>
            <div class="test-card-right">
                <span class="card-chip">50 Qs</span>
                <span class="card-chip">100 Marks</span>
                ${isUnlocked ? `<button class="btn-start-sm">${isCompleted ? 'Retake Test' : 'Start Test'} →</button>` : `<button class="btn-start-sm" style="background:#888; cursor:not-allowed;">Locked</button>`}
            </div>
        `;
        container.appendChild(card);
    }
}

function backToSubjects() {
    document.getElementById('subjectCategoriesView').style.display = '';
    document.getElementById('subjectTestsView').style.display = 'none';
}

function getFullTestUnlockStatus(filter, index) {
    if (index === 0) return true; // First test always unlocked
    return localStorage.getItem(`mock_completed_full_${filter}_${index - 1}`) === 'true';
}

function markFullTestCompleted(filter, index) {
    localStorage.setItem(`mock_completed_full_${filter}_${index}`, 'true');
}

// Render Full Length Tests
function renderFullLengthTests() {
    const container = document.getElementById("fullLengthTestList");
    container.innerHTML = "";

    // We want 100 full length tests.
    for (let i = 0; i < 100; i++) {
        const isUnlocked = getFullTestUnlockStatus(currentExamFilter, i);
        const isCompleted = localStorage.getItem(`mock_completed_full_${currentExamFilter}_${i}`) === 'true';

        let displayLabel = "Full Length Mock Test";
        if (currentExamFilter !== 'all') {
            const labelMap = { vyapam: 'MP Vyapam', mppsc: 'MPPSC', police: 'MP Police', patwari: 'MP Patwari' };
            displayLabel = `${labelMap[currentExamFilter] || 'Exam'} Mock Test`;
        }

        const card = document.createElement("div");
        card.className = "test-card test-card-full " + (isUnlocked ? "" : "test-card-locked");
        if (isUnlocked) {
            // pass 'all' as subject, but we will use currentExamFilter in beginTest
            card.onclick = () => showInstructions('all', `${displayLabel} ${i + 1}`, 100, i);
        }

        card.innerHTML = `
            <div class="test-card-left">
                <div class="test-card-icon-sm">${isUnlocked ? (isCompleted ? "✅" : "🎯") : "🔒"}</div>
                <div>
                    <h3>${displayLabel} ${i + 1}</h3>
                    <p>${currentExamFilter === 'all' ? 'All Subjects Mixed' : 'Subject Mixed Filtered'} — 100 Questions</p>
                </div>
            </div>
            <div class="test-card-right">
                <span class="card-chip">100 Qs</span>
                <span class="card-chip">200 Marks</span>
                <span class="card-chip">2 Hrs</span>
                ${isUnlocked ? `<button class="btn-start-sm">${isCompleted ? 'Retake Test' : 'Start Test'} →</button>` : `<button class="btn-start-sm" style="background:#888; cursor:not-allowed;">Locked</button>`}
            </div>
        `;
        container.appendChild(card);
    }
}


// ===== Init: Populate subject cards =====
window.onload = function () {
    const container = document.getElementById("subjectCards");
    for (const [key, info] of Object.entries(MOCK_CATEGORIES)) {
        if (!info.data || info.data.length < 50) continue;
        const maxTests = Math.floor(info.data.length / 50);
        const card = document.createElement("div");
        card.className = "test-card";
        card.onclick = () => showSubjectTests(key, info.label);
        card.innerHTML = `
            <div class="test-card-left">
                <div class="test-card-icon-sm">${info.icon}</div>
                <div>
                    <h3>${info.label}</h3>
                    <p>${maxTests} mock tests available</p>
                </div>
            </div>
            <div class="test-card-right">
                <span class="card-chip">50 Qs</span>
                <span class="card-chip">100 Marks</span>
                <span class="card-chip">1 Hr</span>
                <button class="btn-start-sm">View Tests →</button>
            </div>
        `;
        container.appendChild(card);
    }

    // First load full tests too in background but don't show yet
    renderFullLengthTests();
};

// ===== Fisher-Yates Shuffle =====
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function shuffleOptions(q) {
    let options = [q[1], q[2], q[3], q[4]];
    let correct = q[5];
    let indices = [0, 1, 2, 3];
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return {
        question: q[0],
        options: indices.map(i => options[i]),
        correct: indices.indexOf(correct),
        exam: q[6], year: q[7], description: q[8]
    };
}


// ===== Navigation Helpers =====
function goHome() {
    document.getElementById("sectionHome").style.display = "";
    document.getElementById("sectionInstructions").style.display = "none";
    document.getElementById("sectionExam").style.display = "none";
    document.getElementById("sectionResult").style.display = "none";
    // Refresh to update locks
    if (document.getElementById('sectionSubjectWise').style.display !== 'none') {
        if (document.getElementById('subjectTestsView').style.display !== 'none') {
            showSubjectTests(testSubject, testName.split(' - ')[0]);
        }
    } else {
        renderFullLengthTests();
    }
}

// ===== Show Instructions =====
function showInstructions(subject, name, qCount, tIndex = 0) {
    testSubject = subject;
    testName = name;
    totalQ = qCount;
    currentTestIndex = tIndex;

    totalMarks = totalQ * MARKS_PER_Q;
    testDuration = qCount === 100 ? 7200 : 3600; // 2hr for full, 1hr for subject

    document.getElementById("instrTitle").textContent = name;
    document.getElementById("instrDuration").textContent = (testDuration / 60) + " Mins";
    document.getElementById("instrMarks").textContent = totalMarks;
    document.getElementById("instrQCount").textContent = totalQ;
    document.getElementById("instrTime2").textContent = (testDuration / 60);

    document.getElementById("declareCheck").checked = false;
    document.getElementById("btnBegin").disabled = true;

    document.getElementById("sectionHome").style.display = "none";
    document.getElementById("sectionInstructions").style.display = "";
    window.scrollTo(0, 0);
}

// Declaration checkbox
document.addEventListener("change", function (e) {
    if (e.target.id === "declareCheck") {
        document.getElementById("btnBegin").disabled = !e.target.checked;
    }
});


// ===== Begin Test =====
function beginTest() {
    let pool = [];
    if (testSubject === "all") {
        for (const info of Object.values(MOCK_CATEGORIES)) {
            if (info.data) pool = pool.concat(info.data);
        }

        // Filter pool by currentExamFilter if not 'all'
        if (currentExamFilter && currentExamFilter !== 'all') {
            pool = pool.filter(q => q[6] && String(q[6]).toLowerCase().includes(currentExamFilter.toLowerCase()));
        }
    } else {
        pool = MOCK_CATEGORIES[testSubject].data;
    }

    // Ensure we have enough questions in the pool after filter, otherwise fallback safely
    if (pool.length === 0) {
        alert("Sorry, no questions found for this specific filter. Falling back to all questions.");
        for (const info of Object.values(MOCK_CATEGORIES)) {
            if (info.data) pool = pool.concat(info.data);
        }
    }

    // Use modulo to wrap around if index is extremely high
    const startIdx = (currentTestIndex * totalQ) % pool.length;
    let chunk = pool.slice(startIdx, startIdx + totalQ);

    // If we reach the end and need to wrap around for full length tests
    if (chunk.length < totalQ) {
        chunk = chunk.concat(pool.slice(0, totalQ - chunk.length));
    }

    // Shuffle the deterministic chunk
    testQuestions = shuffle(chunk).map(q => shuffleOptions(q));

    userAnswers = new Array(totalQ).fill(-1);
    questionStatus = new Array(totalQ).fill("not-visited");
    currentQ = 0;
    questionStatus[0] = "not-answered"; // visited first question
    remainingTime = testDuration;

    document.getElementById("sectionInstructions").style.display = "none";
    document.getElementById("sectionExam").style.display = "";
    document.getElementById("examTestName").textContent = testName;

    buildPalette();
    renderExamQuestion();
    startTimer();
}

// ===== Timer =====
function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        remainingTime--;
        updateTimerDisplay();
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            submitExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const h = Math.floor(remainingTime / 3600);
    const m = Math.floor((remainingTime % 3600) / 60);
    const s = remainingTime % 60;
    document.getElementById("timerH").textContent = String(h).padStart(2, '0');
    document.getElementById("timerM").textContent = String(m).padStart(2, '0');
    document.getElementById("timerS").textContent = String(s).padStart(2, '0');

    const timer = document.getElementById("examTimer");
    if (remainingTime < 300) timer.classList.add("timer-danger");
    else timer.classList.remove("timer-danger");
}

// ===== Question Palette =====
function buildPalette() {
    const pal = document.getElementById("sidebarPalette");
    pal.innerHTML = "";
    for (let i = 0; i < totalQ; i++) {
        const btn = document.createElement("button");
        btn.className = "pal-btn pal-not-visited";
        btn.textContent = i + 1;
        btn.onclick = () => goToQ(i);
        pal.appendChild(btn);
    }
    updatePalette();
}

function updatePalette() {
    const btns = document.getElementById("sidebarPalette").children;
    let answered = 0, marked = 0, notVisited = 0, notAnswered = 0;
    for (let i = 0; i < totalQ; i++) {
        btns[i].className = "pal-btn";
        const s = questionStatus[i];
        if (s === "not-visited") { btns[i].classList.add("pal-not-visited"); notVisited++; }
        else if (s === "not-answered") { btns[i].classList.add("pal-not-answered"); notAnswered++; }
        else if (s === "answered") { btns[i].classList.add("pal-answered"); answered++; }
        else if (s === "marked") { btns[i].classList.add("pal-marked"); marked++; }
        else if (s === "marked-answered") { btns[i].classList.add("pal-marked-answered"); marked++; answered++; }
        if (i === currentQ) btns[i].classList.add("pal-current");
    }
    document.getElementById("countAnswered").textContent = answered;
    document.getElementById("countMarked").textContent = marked;
    document.getElementById("countNotVisited").textContent = notVisited;
    document.getElementById("countNotAnswered").textContent = notAnswered;
}

// ===== Render Question =====
function renderExamQuestion() {
    const q = testQuestions[currentQ];
    const labels = ["A", "B", "C", "D"];

    document.getElementById("examQNum").textContent = `Question No. ${currentQ + 1}`;
    document.getElementById("examQText").innerHTML = q.question;

    const optContainer = document.getElementById("examQOptions");
    optContainer.innerHTML = "";
    q.options.forEach((opt, i) => {
        const div = document.createElement("div");
        div.className = "exam-opt" + (userAnswers[currentQ] === i ? " exam-opt-selected" : "");
        div.onclick = () => selectExamOption(i);
        div.innerHTML = `
            <span class="exam-radio ${userAnswers[currentQ] === i ? 'exam-radio-checked' : ''}"></span>
            <span class="exam-opt-text">${opt}</span>
        `;
        optContainer.appendChild(div);
    });

    updatePalette();
}

function selectExamOption(i) {
    userAnswers[currentQ] = i;
    renderExamQuestion();
}

// ===== Navigation =====
function goToQ(idx) {
    if (idx < 0 || idx >= totalQ) return;
    currentQ = idx;
    if (questionStatus[currentQ] === "not-visited") {
        questionStatus[currentQ] = "not-answered";
    }
    renderExamQuestion();
}

function saveAndNext() {
    if (userAnswers[currentQ] >= 0) {
        if (questionStatus[currentQ] === "marked" || questionStatus[currentQ] === "marked-answered") {
            questionStatus[currentQ] = "marked-answered";
        } else {
            questionStatus[currentQ] = "answered";
        }
    } else {
        if (questionStatus[currentQ] !== "marked") {
            questionStatus[currentQ] = "not-answered";
        }
    }
    if (currentQ < totalQ - 1) {
        currentQ++;
        if (questionStatus[currentQ] === "not-visited") questionStatus[currentQ] = "not-answered";
    }
    renderExamQuestion();
}

function markForReviewNext() {
    if (userAnswers[currentQ] >= 0) {
        questionStatus[currentQ] = "marked-answered";
    } else {
        questionStatus[currentQ] = "marked";
    }
    if (currentQ < totalQ - 1) {
        currentQ++;
        if (questionStatus[currentQ] === "not-visited") questionStatus[currentQ] = "not-answered";
    }
    renderExamQuestion();
}

function clearResponse() {
    userAnswers[currentQ] = -1;
    if (questionStatus[currentQ] === "marked-answered") {
        questionStatus[currentQ] = "marked";
    } else {
        questionStatus[currentQ] = "not-answered";
    }
    renderExamQuestion();
}

// ===== Toggle Palette (mobile) =====
function togglePalette() {
    const sidebar = document.getElementById("examSidebar");
    sidebar.classList.toggle("sidebar-open");
}

// ===== Question Paper Modal =====
function toggleQuestionPaper() {
    const modal = document.getElementById("qpaperModal");
    if (modal.style.display === "none") {
        const body = document.getElementById("qpaperBody");
        body.innerHTML = "";
        testQuestions.forEach((q, i) => {
            body.innerHTML += `
                <div class="qp-item">
                    <strong>Q${i + 1}.</strong> ${q.question}
                    <div class="qp-opts">${q.options.map((o, j) => `<span>(${["A", "B", "C", "D"][j]}) ${o}</span>`).join(" &nbsp;|&nbsp; ")}</div>
                </div>
            `;
        });
        modal.style.display = "";
    } else {
        modal.style.display = "none";
    }
}

function showExamInstructions() {
    document.getElementById("instrModal").style.display = "";
}

// ===== Submit Exam =====
function submitExam() {
    if (timerInterval) clearInterval(timerInterval);
    const unanswered = userAnswers.filter(a => a === -1).length;

    let correct = 0, wrong = 0, skipped = 0;
    for (let i = 0; i < totalQ; i++) {
        if (userAnswers[i] === -1) skipped++;
        else if (userAnswers[i] === testQuestions[i].correct) correct++;
        else wrong++;
    }

    const posMarks = correct * MARKS_PER_Q;
    const negMarks = +(wrong * NEG_MARKS).toFixed(2);
    const total = +(posMarks - negMarks).toFixed(2);
    const pct = Math.max(0, +((total / totalMarks) * 100).toFixed(1));

    // Save completion to unlock next test
    if (testSubject === "all") {
        markFullTestCompleted(currentExamFilter, currentTestIndex);
    } else {
        markTestCompleted(testSubject, currentTestIndex);
    }

    // Show result
    document.getElementById("sectionExam").style.display = "none";
    document.getElementById("sectionResult").style.display = "";

    document.getElementById("resultTitle").textContent = testName + " — Result";
    document.getElementById("resCorrect").textContent = correct;
    document.getElementById("resWrong").textContent = wrong;
    document.getElementById("resSkipped").textContent = skipped;
    document.getElementById("resCorrectM").textContent = "+" + posMarks;
    document.getElementById("resWrongM").textContent = "−" + negMarks;
    document.getElementById("resTotal").textContent = total;
    document.getElementById("resTotalM").textContent = total + "/" + totalMarks;
    document.getElementById("resPctFill").style.width = pct + "%";
    document.getElementById("resPctText").textContent = pct + "%";
    window.scrollTo(0, 0);

    // ===== Save result to backend =====
    try {
        const tokens = JSON.parse(localStorage.getItem('tokens') || '{}');
        const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        const API_URL = isLocal ? 'http://localhost:8001/api/mocktest/submit/' : 'https://aadarshlodhi39.pythonanywhere.com/api/mocktest/submit/';
        if (tokens.access) {
            const timeTaken = testDuration - remainingTime;
            fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + tokens.access,
                },
                body: JSON.stringify({
                    test_type: totalQ === 100 ? 'full' : 'subject',
                    test_name: testName,
                    total_questions: totalQ,
                    correct: correct,
                    wrong: wrong,
                    skipped: skipped,
                    total_marks: totalMarks,
                    obtained_marks: total,
                    percentage: pct,
                    time_taken_seconds: timeTaken,
                })
            }).then(r => {
                if (r.ok) console.log('✅ Result saved to server');
                else console.warn('⚠️ Failed to save result:', r.status);
            }).catch(e => console.warn('⚠️ Could not save result:', e));
        }
    } catch (e) { console.warn('⚠️ Error saving result:', e); }
}

// ===== Review Answers =====
function showReview() {
    const section = document.getElementById("reviewSection");
    section.style.display = "";
    const container = document.getElementById("reviewContainer");
    container.innerHTML = "";
    const labels = ["A", "B", "C", "D"];

    testQuestions.forEach((q, i) => {
        const ua = userAnswers[i];
        const isCorrect = ua === q.correct;
        const isSkipped = ua === -1;
        let statusClass = isSkipped ? "review-skipped" : (isCorrect ? "review-correct" : "review-wrong");
        let statusText = isSkipped ? "Skipped" : (isCorrect ? "✓ Correct (+2)" : `✗ Wrong (−${NEG_MARKS})`);

        const card = document.createElement("div");
        card.className = `q-card review-card ${statusClass}`;
        card.innerHTML = `
            <div class="q-header">
                <span class="q-num">Q${i + 1}</span>
                <span class="review-status">${statusText}</span>
            </div>
            <div class="q-text">${q.question}</div>
            <div class="q-options">
                ${q.options.map((opt, j) => {
            let cls = "q-opt";
            if (j === q.correct) cls += " correct";
            if (j === ua && !isCorrect) cls += " review-wrong-opt";
            return `<div class="${cls}">(${labels[j]}) ${opt}</div>`;
        }).join("")}
            </div>
            <div class="q-description show">${q.description}</div>
        `;
        container.appendChild(card);
    });
    section.scrollIntoView({ behavior: 'smooth' });
}
