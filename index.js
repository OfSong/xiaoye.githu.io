const questions = [
    {
        question: "问题1？",
        answer: "问题1的答案。"
    },
    {
        question: "问题2？",
        answer: "问题2的答案。"
    },
    {
        question: "问题33333？",
        answer: "问题333333的答案。"
    },
    {
        question: "问题444444444444？",
        answer: "问题44444444444444444的答案。"
    },
    {
        question: "问题5555555555555？",
        answer: "问题5555555555555555的答案。"
    },
    {
        question: "666666666666？",
        answer: "问题666666666666666的答案。"
    },
    {
        question: "问题7777777777777？",
        answer: "问题7777777777777777777的答案。"
    },
    {
        question: "问题888888888888888？",
        answer: "问题888888888888888888的答案。"
    },
    // 添加更多的题目和答案
];

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