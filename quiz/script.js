const quizData = [
    {
    question: 'Ege kaç yaşında',
    a: '23',
    b: '20',
    c: '19',
    d: '21',
    e: '22',
    correct: 'a',
    },
    {
    question: 'Ege nerede yaşıyor',
    a: 'İstanbul',
    b: 'İzmir',
    c: 'Ankara',
    d: 'Aksaray',
    e: 'Muğla',
    correct: 'b',
    },
    {
    question: 'Ege en çok hangi sporu sever',
    a: 'Tenis',
    b: 'Basketbol',
    c: 'Yüzme',
    d: 'Boks',
    e: 'Futbol',
    correct: 'e',
    },
    {
    question: 'Ege hangi okuldan mezun',
    a: 'ITU',
    b: 'ADU',
    c: 'KATU',
    d: 'IDU',
    e: 'ODTU',
    correct: 'd',
    },
    {
    question: 'Ege hangi bölümden mezun',
    a: 'Sosyoloji',
    b: 'Gastronomi',
    c: 'Hukuk',
    d: 'Matematik',
    e: 'Psikoloji',
    correct: 'c',
    },
];
const start = [
    {
    head: 'Birkaç sorudan oluşan teste hoşgeliniz',
    button: 'Başlamak için tıklayınız!',
    }
];

const head1 = document.getElementById("start")
const h2El = document.getElementById("h2")
const buttonEl = document.getElementById("basla")

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
let currentScreen = 0;

loadStart();

function loadStart() {
    const currentScreenData = start[currentScreen];

    h2El.innerText = currentScreenData.head;
    buttonEl.innerText = currentScreenData.button;
}

buttonEl.onclick = function() {
    quiz.style.display = 'block';
    head1.style.display = 'none';
}

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>${score}/${quizData.length} soruyu doğru cevapladın.</h2>
                
                <button onclick="location.reload()">Yenile</button>
            `;
        }
    }
});