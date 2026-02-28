// ===== Main Application Logic =====

const Q_COMBINED_MP = [...Q_COMPUTER_DEEP, ...Q_COMPUTER_EXTRA, ...Q_COMPUTER, ...Q_MP_GK, ...Q_MP_GK_EXTRA];
const Q_COMBINED_HIST = [...Q_HIST_POLITY, ...Q_HISTORY_POLITY_EXTRA];
const Q_COMBINED_GEO = [...Q_CURRENT_AFFAIRS, ...Q_GEO_ECO_CURR, ...Q_GEO_ECO_EXTRA];
const Q_COMBINED_SCI = [...Q_SCIENCE_TECH, ...Q_SCIENCE_TECH_EXTRA];
const Q_COMBINED_COMP = [];
const Q_COMBINED_MIXED = [...Q_B12, ...Q_B19, ...Q_B20, ...Q_B21, ...Q_B23, ...Q_B24, ...Q_B25, ...Q_B26, ...Q_EXPANSION, ...Q_FINAL_EXPANSION, ...Q_FINAL_MEGA, ...Q_MEGA_BATCH, ...Q_MIXED_GK, ...Q_MIXED_GK_EXTRA, ...Q_SHORTCUTS, ...Q_ULTIMATE, ...Q_VOLUME];

const CATEGORIES = {
    "MP GK (History, Geo, Culture)": { data: Q_COMBINED_MP, label: "मध्य प्रदेश दर्शन (इतिहास, भूगोल, संस्कृति व तथ्य)" },
    "Indian History & Polity": { data: Q_COMBINED_HIST, label: "भारतीय इतिहास एवं राजव्यवस्था (संविधान)" },
    "Geography, Economy & Current Affairs": { data: Q_COMBINED_GEO, label: "भूगोल, अर्थव्यवस्था एवं करेंट अफेयर्स" },
    "Science, Tech & Environment": { data: Q_COMBINED_SCI, label: "सामान्य विज्ञान, तकनीकी एवं पर्यावरण" },
    "Mixed GK, Sports & Miscellaneous": { data: Q_COMBINED_MIXED, label: "मिश्रित सामान्य ज्ञान, खेल एवं विविध" },
    "Computer & IT GK": { data: Q_COMBINED_COMP, label: "कंप्यूटर ज्ञान एवं सूचना प्रौद्योगिकी" }
};



let allQuestions = [];
let filteredQuestions = [];
let currentPage = 1;
const itemsPerPage = 25;
let showAllAnswersFlag = false;

function toggleAllAnswers() {
    const cb = document.getElementById("showAllAnswers");
    showAllAnswersFlag = cb ? cb.checked : false;
    renderQuestions();
}

// Build unified question list
function init() {
    let id = 1;
    for (const [cat, info] of Object.entries(CATEGORIES)) {
        if (!info.data) continue;
        for (const q of info.data) {
            let options = [q[1], q[2], q[3], q[4]];
            let correct = q[5];

            // Randomize options
            let indices = [0, 1, 2, 3];
            for (let i = indices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [indices[i], indices[j]] = [indices[j], indices[i]];
            }
            let newOptions = [];
            let newCorrect = 0;
            for (let i = 0; i < indices.length; i++) {
                newOptions.push(options[indices[i]]);
                if (indices[i] === correct) {
                    newCorrect = i;
                }
            }

            allQuestions.push({ id: id++, category: cat, categoryLabel: info.label, question: q[0], options: newOptions, correct: newCorrect, exam: q[6], year: q[7], description: q[8] });
        }
    }
    filteredQuestions = [...allQuestions];
    populateFilters();
    renderQuestions();
    document.getElementById("loading").style.display = "none";
    const tc = document.getElementById("totalCount");
    if (tc) { tc.textContent = allQuestions.length; tc.innerText = allQuestions.length; }
    requestAnimationFrame(() => { if (tc) tc.textContent = allQuestions.length; });
}

function populateFilters() {
    const catSet = new Set(), examSet = new Set(), yearSet = new Set();
    allQuestions.forEach(q => { catSet.add(q.category); examSet.add(q.exam); yearSet.add(q.year); });

    const catSel = document.getElementById("categoryFilter");
    [...catSet].sort().forEach(c => { const o = document.createElement("option"); o.value = c; o.textContent = CATEGORIES[c].label; catSel.appendChild(o); });

    const examSel = document.getElementById("examFilter");
    [...examSet].sort().forEach(e => { const o = document.createElement("option"); o.value = e; o.textContent = e; examSel.appendChild(o); });

    const yearSel = document.getElementById("yearFilter");
    [...yearSet].sort((a, b) => b.localeCompare(a)).forEach(y => { const o = document.createElement("option"); o.value = y; o.textContent = y; yearSel.appendChild(o); });
}

function filterQuestions() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const cat = document.getElementById("categoryFilter").value;
    const exam = document.getElementById("examFilter").value;
    const year = document.getElementById("yearFilter").value;

    filteredQuestions = allQuestions.filter(q => {
        if (cat !== "all" && q.category !== cat) return false;
        if (exam !== "all" && q.exam !== exam) return false;
        if (year !== "all" && q.year !== year) return false;
        if (search && !q.question.toLowerCase().includes(search) && !q.description.toLowerCase().includes(search)) return false;
        return true;
    });
    currentPage = 1; // Reset to first page when filtering
    renderQuestions();
}

function renderQuestions() {
    const container = document.getElementById("questionsContainer");
    container.innerHTML = "";
    document.getElementById("showingCount").textContent = filteredQuestions.length;
    document.getElementById("totalShowing").textContent = allQuestions.length;

    const optLabels = ["A", "B", "C", "D"];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentQuestions = filteredQuestions.slice(startIndex, endIndex);

    currentQuestions.forEach(q => {
        const card = document.createElement("div");
        card.className = "q-card";

        let optionsHTML = q.options.map((opt, i) => {
            let isCorrect = i === q.correct;
            let displayClass = (showAllAnswersFlag && isCorrect) ? "q-opt correct" : "q-opt";
            return `<div class="${displayClass}" data-i="${i}" onclick="selectOpt(this,${q.correct})">(${optLabels[i]}) ${opt}</div>`;
        }).join("");

        let descClass = showAllAnswersFlag ? "q-description show" : "q-description";
        let btnDisabled = showAllAnswersFlag ? "disabled" : "";
        let btnText = showAllAnswersFlag ? `Answer: (${optLabels[q.correct]})` : "Show Answer";

        card.innerHTML = `
            <div class="q-header">
                <span class="q-num">Q${q.id}</span>
                <div class="q-tags">
                    <span class="tag tag-exam">${q.exam}</span>
                    <span class="tag tag-year">${q.year}</span>
                    <span class="tag tag-cat">${q.categoryLabel}</span>
                </div>
            </div>
            <div class="q-text">${q.question}</div>
            <div class="q-options">
                ${optionsHTML}
            </div>
            <div class="q-answer-row">
                <button class="btn-show" onclick="showAnswer(this,${q.correct},'${optLabels[q.correct]}')" ${btnDisabled}>${btnText}</button>
            </div>
            <div class="${descClass}">${q.description}</div>
        `;
        container.appendChild(card);
    });
    renderPagination();
}

function renderPagination() {
    const paginationContainer = document.getElementById("paginationControls");
    paginationContainer.innerHTML = "";
    const totalPages = Math.ceil(filteredQuestions.length / itemsPerPage);

    if (totalPages <= 1) return; // No pagination needed

    // Previous Button
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "Previous";
    prevBtn.className = "page-btn";
    if (currentPage === 1) prevBtn.disabled = true;
    prevBtn.onclick = () => { if (currentPage > 1) { currentPage--; renderQuestions(); window.scrollTo({ top: 0, behavior: 'smooth' }); } };
    paginationContainer.appendChild(prevBtn);

    // Page Numbers (Show limited range logic)
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);
    if (endPage - startPage < 4) {
        startPage = Math.max(1, endPage - 4);
    }

    if (startPage > 1) {
        const btn = document.createElement("button");
        btn.textContent = "1";
        btn.className = "page-btn";
        btn.onclick = () => { currentPage = 1; renderQuestions(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
        paginationContainer.appendChild(btn);
        if (startPage > 2) {
            const ellipsis = document.createElement("span");
            ellipsis.textContent = "...";
            ellipsis.className = "page-ellipsis";
            paginationContainer.appendChild(ellipsis);
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.textContent = i;
        pageBtn.className = `page-btn ${i === currentPage ? "active" : ""}`;
        pageBtn.onclick = () => { currentPage = i; renderQuestions(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
        paginationContainer.appendChild(pageBtn);
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement("span");
            ellipsis.textContent = "...";
            ellipsis.className = "page-ellipsis";
            paginationContainer.appendChild(ellipsis);
        }
        const btn = document.createElement("button");
        btn.textContent = totalPages;
        btn.className = "page-btn";
        btn.onclick = () => { currentPage = totalPages; renderQuestions(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
        paginationContainer.appendChild(btn);
    }

    // Next Button
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.className = "page-btn";
    if (currentPage === totalPages) nextBtn.disabled = true;
    nextBtn.onclick = () => { if (currentPage < totalPages) { currentPage++; renderQuestions(); window.scrollTo({ top: 0, behavior: 'smooth' }); } };
    paginationContainer.appendChild(nextBtn);
}

function selectOpt(el, correct) {
    const opts = el.parentElement.querySelectorAll(".q-opt");
    opts.forEach(o => o.classList.remove("correct"));
    const idx = parseInt(el.dataset.i);
    if (idx === correct) {
        el.classList.add("correct");
    } else {
        el.style.background = "var(--red-bg)";
        el.style.borderColor = "var(--red)";
        opts[correct].classList.add("correct");
    }
    // Show description
    el.closest(".q-card").querySelector(".q-description").classList.add("show");
}

function showAnswer(btn, correct, label) {
    const card = btn.closest(".q-card");
    const opts = card.querySelectorAll(".q-opt");
    opts[correct].classList.add("correct");
    card.querySelector(".q-description").classList.add("show");
    btn.textContent = `Answer: (${label})`;
    btn.disabled = true;
}

// ===== PDF Generation =====
async function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const pw = 210, ph = 297, margin = 15, cw = pw - 2 * margin;
    let y = margin;
    const optLabels = ["A", "B", "C", "D"];

    const progress = document.getElementById("pdfProgress");
    const fill = document.getElementById("progressFill");
    const ptext = document.getElementById("progressText");
    progress.style.display = "block";
    document.getElementById("downloadBtn").disabled = true;

    // Title page
    doc.setFillColor(30, 27, 75);
    doc.rect(0, 0, pw, ph, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(28);
    doc.text("MP Exam GK/GS", pw / 2, 80, { align: "center" });
    doc.text("Question Bank", pw / 2, 95, { align: "center" });
    doc.setFontSize(14);
    doc.text(`${allQuestions.length} + MCQ Questions`, pw / 2, 120, { align: "center" });
    doc.setFontSize(11);
    doc.text("MPPSC | Constable | ASI | SSC | Vyapam", pw / 2, 135, { align: "center" });
    doc.setFontSize(9);
    doc.text("With Answers, Explanations, Exam & Year Details", pw / 2, 150, { align: "center" });

    const qs = filteredQuestions;
    for (let i = 0; i < qs.length; i++) {
        if (i % 20 === 0) await new Promise(r => setTimeout(r, 0)); // yield
        const pct = Math.round(((i + 1) / qs.length) * 100);
        fill.style.width = pct + "%";
        ptext.textContent = `Generating PDF... ${pct}% (${i + 1}/${qs.length})`;

        const q = qs[i];
        const needed = 45;
        if (y + needed > ph - margin) { doc.addPage(); y = margin; }

        // Question area
        doc.setFillColor(245, 245, 250);
        doc.roundedRect(margin, y, cw, needed - 2, 2, 2, "F");

        doc.setTextColor(80, 80, 180);
        doc.setFontSize(8);
        doc.text(`Q${q.id} | ${q.exam} ${q.year} | ${q.category} `, margin + 3, y + 5);

        doc.setTextColor(30, 30, 30);
        doc.setFontSize(10);
        const qLines = doc.splitTextToSize(q.question, cw - 6);
        doc.text(qLines, margin + 3, y + 11);
        let oy = y + 11 + qLines.length * 4;

        doc.setFontSize(9);
        q.options.forEach((opt, idx) => {
            const prefix = idx === q.correct ? `(${optLabels[idx]}) ${opt} [Correct]` : `(${optLabels[idx]}) ${opt} `;
            if (idx === q.correct) doc.setTextColor(0, 130, 0); else doc.setTextColor(50, 50, 50);
            doc.text(prefix, margin + 5, oy);
            oy += 4.5;
        });

        doc.setTextColor(100, 100, 100);
        doc.setFontSize(7.5);
        const dLines = doc.splitTextToSize(q.description, cw - 10);
        doc.text(dLines, margin + 5, oy + 1);

        y += needed;
    }

    doc.save("MP_Exam_GK_GS_Question_Bank.pdf");
    progress.style.display = "none";
    document.getElementById("downloadBtn").disabled = false;
}

// Initialize after all scripts are loaded
window.onload = function () {
    setTimeout(function () {
        init();
        // Force update hero counter with delays
        setTimeout(function () {
            var el = document.getElementById("totalCount");
            if (el) el.textContent = allQuestions.length;
        }, 200);
        setTimeout(function () {
            var el = document.getElementById("totalCount");
            if (el) el.textContent = allQuestions.length;
        }, 1000);
        setTimeout(function () {
            var el = document.getElementById("totalCount");
            if (el) el.textContent = allQuestions.length;
        }, 2000);
    }, 300);
};
