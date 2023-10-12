import questions from './add.js';

let currentQuestionIndex = -1;

function getRandomQuestionIndex() {
    const newIndex = Math.floor(Math.random() * questions.length);
    return newIndex === currentQuestionIndex ? getRandomQuestionIndex() : newIndex;
}

function showRandomQuestion() {
    const questionElement = document.getElementById("question");
    const answerElement = document.getElementById("answer");

    answerElement.style.display = "none";

    let count = 0;
    const interval = setInterval(() => {
        currentQuestionIndex = getRandomQuestionIndex();
        const { question, answer } = questions[currentQuestionIndex];
        questionElement.textContent = question;
        answerElement.textContent = answer;
        count++;
        if (count >= 20) {
            clearInterval(interval);
            answerElement.style.display = "none";
        }
    }, 100);
}

function showAnswer() {
    const answerElement = document.getElementById("answer");
    if (answerElement.style.display == "none") {
        answerElement.style.display = "block";
    } else if (answerElement.style.display == "block") {
        answerElement.style.display = "none";
    }
}

function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showRandomQuestion();
    }
}

// 初始加载一个随机题目
window.onload = showRandomQuestion;