const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const scoreText = document.getElementById('score')
const timeText = document.getElementById('timer')
let shuffledQuestions, currentQuestionIndex

const questions = [
    {
        question: 'Which is a single variable used to store different elements?',
        answers: [
            { text: 'A vector', correct: false },
            {text: 'An array', correct: true},
            {text: 'An aardvark', correct: false},
            {text: 'An arrow', correct: false}
        ]
    },
    {
        question: 'Which of the following is true about JavaScript?',
        answers: [
                { text: 'It was a predecessor to cursive handwriting', correct: false},
                { text: 'It was named for coffee induced writing', correct: false},
                { text: 'It is a programming language', correct: true},
                { text: 'It is a word processor', correct: false}
                ]
            },
            {
                question: 'Which is a series of interconnected things or events?',
                answers: [
                        { text: 'A concontion', correct: false},
                        { text: 'A correlation ', correct: false},
                        { text: 'A concatenation', correct: true},
                        { text: 'A contracted combination', correct: false}
                        ]
                    },
                     {
                        question: 'Whats is not a Javascript Data Type?',
                        answers: [
                                { text: 'Inconceivable', correct: false},
                                { text: 'Boolean', correct: true},
                                { text: 'String', correct: true},
                                { text: 'Undefined', correct: true}
                                ]
                            },
                            {
                                question: 'Is Javascript your nightmare come true?',
                                answers: [
                                        { text: 'Yes', correct: true},
                                        { text: 'Also yes', correct: true},
                                        { text: 'Yes, too', correct: true},
                                        { text: 'Yup' correct: true}
                                        ]
                                    },
    ]

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
        currentQuestionIndex++
        setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    startTimer();
    setNextQuestion()
};

function startTimer() {
    timer = setInterval(function() {
        timer--;
        secondsLeft.textContent = timerText;
        if (timer === 0 || questionCount > questions.length) {
            clearInterval(timer);
            nextButton();
        };
        if (timerCount <= 10) {
            secondsLeft.style.color = "#ff8f8f";
        };
    },1000);
};

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
};

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
};
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    };

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
if (shuffledQuestions.length > currentQuestionIndex + 1 ) {
    nextButton.classList.remove('hide')
} else {
    startButton.innerText = 'restart'
    startButton.classList.remove('hide')
}
function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
        }
    
    }
    
    function clearStatusClass(element) {
        element.classList.remove('correct')
        element.classList.remove('wrong')
    }
