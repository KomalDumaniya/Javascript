const questions = [
    {
        question: "What is the capital of India?",
        options: ["New Delhi", "Gujarat", "Rajasthan", "Punjab"],
        answer: "New Delhi"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let optionClicked = false; 

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = "";
    optionClicked = false; 

    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(button, option);
        optionsElement.appendChild(button);
    });

    document.getElementById("nextBtn").style.display = "block";
}

function checkAnswer(button, answer) {
    if (optionClicked) return; 
    button.style.backgroundColor = "Purple";

    optionClicked = true;
    if (answer === questions[currentQuestionIndex].answer) {
        score++;
    } 

    document.getElementById("nextBtn").style.display = "block"; 
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").style.display = "none";
        document.getElementById("options").style.display = "none";
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("score").textContent = `Your score: ${score}/${questions.length}`;
        document.getElementById("score").style.display = "block";
    }
}

loadQuestion();



