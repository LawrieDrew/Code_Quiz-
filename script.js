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
        question: 'What is a sprocket?',
        answers: [
            { text: 'Ya Moms', correct: true },
            {text: 'A Rocket', correct: false},
            {text: 'You made that up', correct: true},
            {text: 'Yeah, its not a thing', correct: true}
        ]
    },
    {
        question: 'Whats my name?',
        answers: [
                { text: 'That Bitch', correct: true},
                { text: 'Fab-Bitch', correct: true},
                { text: 'Laurie', correct: true},
                { text: 'Lauren', correct: false}
                ]
            },
            {
                question: 'Should you ever cook bacon naked?',
                answers: [
                        { text: 'I mean', correct: false},
                        { text: 'Yeah do it', correct: false},
                        { text: 'Never', correct: true},
                        { text: 'Lets make eggs too!', correct: false}
                        ]
                    },
                     {
                        question: 'Whats is my dogs name?',
                        answers: [
                                { text: 'Chewy', correct: true},
                                { text: 'Pookie', correct: true},
                                { text: 'Pookeets', correct: true},
                                { text: 'Rod Stewart', correct: true}
                                ]
                            },
                            {
                                question: 'Whats is my dogs name?',
                                answers: [
                                        { text: 'Chewy', correct: true},
                                        { text: 'Pookie', correct: true},
                                        { text: 'Pookeets', correct: true},
                                        { text: 'Rod Stewart', correct: true}
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
