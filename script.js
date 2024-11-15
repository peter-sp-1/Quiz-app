const quizData = [ {
     question: "What is the capital of Abia",
     a: "Yola",
     b: "Umahia",
     c: "Ogun",
     correct: "b"
},
{
    question: "What has 4 fingers and a thumb and is not a hand?",
    a: "Fingers",
    b: "Leg",
    c: "Gloove",
    correct: "c"
},
{
    question: "What year was Javascript launched?",
    a: "1995",
    b: "1996",
    c: "1997",
    correct: "a"
},
{
    question: "What is the full meaning of ISO?",
    a: "International Organization for Standardization",
    b: "Internation System of Organization",
    c: "Internt Of System",
    correct: "a"
}
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submitBtn = document.getElementById('submit');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
const restartEl = document.getElementById('restart');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;

        if (currentQuiz  < quizData.length) {
            loadQuiz();
        } else {
            quiz.style.display = "none";
            resultEl.style.display = "block";
            scoreEl.innerText = `Your Score: ${score}/${quizData.length}`;
        }
    }
});

restartEl.addEventListener('click', () => {
    currentQuiz = 0;
    score = 0;
    quiz.style.display = "block";
    resultEl.style.display = "none";
    loadQuiz();
});