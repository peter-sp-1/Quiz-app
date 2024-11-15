const quizData = [
    {
        question: "Who is the father of Isaac?",
        a: "Israel",
        b: "David",
        c: "Abraham",
        correct: "c"
    },
    {
        question: "Who is the father of David?",
        a: "Jesse",
        b: "Obed",
        c: "Boaz",
        correct: "a"
    },
    {
        question: "Who is the father of Jacob?",
        a: "Israel",
        b: "Isaac",
        c: "Issachar",
        correct: "b"
    },
]

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const answerEl = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submitBtn = document.getElementById('submit');
const scoreEl = document.getElementById('score');
const restartEl = document.getElementById('restart');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz () {
    deselectAnswer();

    const currentQuizData = quizData(currentQuiz);
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;

}

function deselectAnswer() {
    answerEl.forEach(answerEl => answerEl.checked = false)
}
