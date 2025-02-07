const quizData = {
    id: "mathQuiz",
    questions: [
        { id: 1, text: "HTML คืออะไร?", choices: ["ภาษาในการออกแบบเว็บไซต์", "ภาษาในการเขียนโปรแกรม", "เครื่องมือในการพัฒนาเว็บไซต์", "ภาษาในการจัดการฐานข้อมูล"], correct: "ภาษาในการออกแบบเว็บไซต์" },
        { id: 2, text: "CSS ใช้ในการทำอะไรในเว็บไซต์?", choices: ["ออกแบบโครงสร้างเว็บไซต์", "ปรับแต่งการแสดงผลของเว็บไซต์", "เขียนโปรแกรมสำหรับเว็บไซต์", "จัดการฐานข้อมูล"], correct: "ปรับแต่งการแสดงผลของเว็บไซต์" },
        { id: 3, text: "JavaScript ใช้สำหรับอะไรใน Front-end?", choices: ["สร้างการโต้ตอบของผู้ใช้", "จัดการข้อมูลในฐานข้อมูล", "ออกแบบกราฟิก", "จัดการการเชื่อมต่อเครือข่าย"], correct: "สร้างการโต้ตอบของผู้ใช้" },
        { id: 4, text: "ข้อใดเป็นเฟรมเวิร์กที่นิยมใช้ใน Front-end?", choices: ["Angular", "Node.js", "Django", "Flask"], correct: "Angular" },
        { id: 5, text: "อะไรคือความแตกต่างระหว่าง `class` และ `id` ใน CSS?", choices: ["`class` ใช้กับหลายองค์ประกอบ, `id` ใช้กับองค์ประกอบเดียว", "`class` ใช้กับองค์ประกอบเดียว, `id` ใช้กับหลายองค์ประกอบ", "`id` ใช้กับหลายองค์ประกอบ, `class` ใช้กับองค์ประกอบเดียว", "ไม่มีความแตกต่าง"], correct: "`class` ใช้กับหลายองค์ประกอบ, `id` ใช้กับองค์ประกอบเดียว" },
        { id: 6, text: "การใช้ `flexbox` ใน CSS ใช้สำหรับอะไร?", choices: ["จัดการการจัดวางแบบยืดหยุ่น", "สร้างอนิเมชั่น", "จัดการฟอนต์", "เชื่อมต่อฐานข้อมูล"], correct: "จัดการการจัดวางแบบยืดหยุ่น" },
        { id: 7, text: "ReactJS คืออะไร?", choices: ["JavaScript library สำหรับการสร้าง UI", "CSS Framework สำหรับการออกแบบ", "ภาษาโปรแกรมสำหรับ Front-end", "เครื่องมือสำหรับจัดการฐานข้อมูล"], correct: "JavaScript library สำหรับการสร้าง UI" },
        { id: 8, text: "คำสั่งใดที่ใช้ในการทำให้การเปลี่ยนแปลงในหน้าเว็บแบบไม่ต้องโหลดหน้าใหม่ใน JavaScript?", choices: ["AJAX", "fetch", "document.write", "console.log"], correct: "AJAX" },
        { id: 9, text: "Vue.js เป็นอะไร?", choices: ["JavaScript Framework", "CSS Framework", "HTML Parser", "IDE"], correct: "JavaScript Framework" },
        { id: 10, text: "อะไรคือเครื่องมือที่ช่วยในการทำ responsive web design?", choices: ["Media Queries", "JavaScript", "jQuery", "SVG"], correct: "Media Queries" },
        { id: 11, text: "ข้อใดไม่ใช่ตัวเลือกสำหรับการทำแอนิเมชันใน CSS?", choices: ["@keyframes", "transition", "animation", "hover"], correct: "hover" },
        { id: 12, text: "ใน JavaScript, คำสั่งไหนที่ใช้เพื่อป้องกันการ reload หน้าเว็บไซต์?", choices: ["preventDefault()", "stopPropagation()", "return false;", "pause()"], correct: "return false;" },
        { id: 13, text: "Git ใช้สำหรับอะไรในการพัฒนา Front-end?", choices: ["การจัดการเวอร์ชันของโค้ด", "การจัดการฐานข้อมูล", "การจัดการข้อมูลแบบออฟไลน์", "การสร้างแอนิเมชัน"], correct: "การจัดการเวอร์ชันของโค้ด" },
        { id: 14, text: "สิ่งใดต่อไปนี้คือ `package manager` ที่ใช้ใน Front-end?", choices: ["npm", "git", "webpack", "express"], correct: "npm" },
        { id: 15, text: "Sass เป็นเครื่องมือที่ใช้ในการทำอะไร?", choices: ["ขยายความสามารถของ CSS", "สร้างกราฟิก", "จัดการฟอนต์", "สร้าง HTML"], correct: "ขยายความสามารถของ CSS" },
        { id: 16, text: "Webpack ใช้สำหรับอะไร?", choices: ["การ bundle ไฟล์ JavaScript", "การทำแอนิเมชัน", "การแสดงผลภาพ", "การเขียนโปรแกรม back-end"], correct: "การ bundle ไฟล์ JavaScript" },
        { id: 17, text: "ใน ReactJS, JSX คืออะไร?", choices: ["JavaScript extension สำหรับการสร้าง UI", "การจัดการฐานข้อมูล", "JavaScript syntax ที่ใช้สำหรับการทำ animation", "การจัดการ state ของโปรแกรม"], correct: "JavaScript extension สำหรับการสร้าง UI" },
        { id: 18, text: "การใช้ `localStorage` ใน JavaScript ทำให้สามารถทำอะไร?", choices: ["จัดเก็บข้อมูลในเครื่องของผู้ใช้", "เชื่อมต่อกับเซิร์ฟเวอร์", "จัดการการทำงานของแอนิเมชัน", "สร้างกราฟิก"], correct: "จัดเก็บข้อมูลในเครื่องของผู้ใช้" },
        { id: 19, text: "อะไรคือการใช้ `API` ใน Front-end?", choices: ["การเชื่อมต่อกับข้อมูลจากภายนอก", "การออกแบบอินเทอร์เฟซ", "การจัดการกับฐานข้อมูล", "การคำนวณข้อมูล"], correct: "การเชื่อมต่อกับข้อมูลจากภายนอก" },
        { id: 20, text: "Bootstrap เป็นอะไร?", choices: ["CSS Framework สำหรับการออกแบบเว็บไซต์", "JavaScript Library", "ตัวจัดการฐานข้อมูล", "เครื่องมือสร้างแอนิเมชัน"], correct: "CSS Framework สำหรับการออกแบบเว็บไซต์" }
    ],
    timeLimit: 60,
    passingScore: 40,
};

let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeRemaining = quizData.timeLimit;
let selectedQuestions = [];
let answers = [];

function saveQuizProgress() {
    const quizProgress = {
        selectedQuestions,
    };
    localStorage.setItem('quizProgress', JSON.stringify(quizProgress));
}

function loadQuizProgress() {
    const quizProgress = localStorage.getItem('quizProgress');
    if (quizProgress) {
        const { selectedQuestions } = JSON.parse(quizProgress);
        return { selectedQuestions };
    }
    return null;
}

function startQuiz(quizId) {
    currentQuestionIndex = 0;
    score = 0;
    timeRemaining = quizData.timeLimit;

    document.getElementById("result").style.display = "none";
    document.getElementById("answer-explanation").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("restartButton").style.display = "none";

    selectRandomQuestions();

    startTimer();
    showQuestion();
}

function selectRandomQuestions() {
    const selected = [];
    const questions = quizData.questions;

    while (selected.length < 5) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randomIndex];

        if (!selected.includes(randomQuestion)) {
            selected.push(randomQuestion);
        }
    }

    selectedQuestions = selected;
    saveQuizProgress();
}

function showQuestion() {
    const question = selectedQuestions[currentQuestionIndex];
    document.getElementById("question-text").textContent = question.text;
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    question.choices.forEach((choice) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => submitAnswer(question.id, choice);
        choicesDiv.appendChild(button);
    });
}

function submitAnswer(questionId, answer) {
    if (answer) {
        answers[questionId] = answer;
    } else {
        answers[questionId] = "ไม่ได้เลือกคำตอบ";
    }
    saveQuizProgress();
    currentQuestionIndex++;

    if ( currentQuestionIndex < selectedQuestions.length && timeRemaining > 0 ) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function calculateScore() {
    score = 0;
    selectedQuestions.forEach((question) => {
        if (answers[question.id] === question.correct) {
            score += 10;
        }
    });
}

function showResults() {
    calculateScore();
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("result").textContent = `คะแนนของคุณ : ${score} / 50`;

    if (score >= quizData.passingScore) {
        document.getElementById("result").textContent += " คุณผ่านการทดสอบ!";
    } else {
        document.getElementById("result").textContent += " คุณไม่ผ่านการทดสอบ!";
    }

    let explanationText = "<h3>เฉลย</h3>";
    selectedQuestions.forEach((question, index) => {
        const chosenAnswer = answers[question.id]
            ? answers[question.id]
            : "ไม่ได้เลือกคำตอบ";

        explanationText += `<strong>คำถาม : ${question.text}</strong><br><strong>คำตอบที่คุณเลือก : </strong>${chosenAnswer}`;

        if (answers[question.id] === question.correct) {
            explanationText += ` <span id="correctIcon" style="color: green;">✅</span>`;
        } else {
            explanationText += ` <span id="wrongIcon" style="color: red;">❌</span>`;
        }

        explanationText += `<br><strong>คำตอบที่ถูกต้อง : </strong>${question.correct}</p>`;
    });

    document.getElementById("answer-explanation").innerHTML = explanationText;
    document.getElementById("answer-explanation").style.display = "block";

    document.getElementById("restartButton").style.display = "inline-block";
}

function startTimer() {
    document.getElementById(
        "timer"
    ).textContent = `เวลาที่เหลือ : ${timeRemaining} วินาที`;
    timerInterval = setInterval(() => {
        timeRemaining--;
        document.getElementById(
            "timer"
        ).textContent = `เวลาที่เหลือ : ${timeRemaining} วินาที`;

        if (timeRemaining <= 0) {
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timerInterval);
    showResults();
}
