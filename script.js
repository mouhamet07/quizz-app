const questions = [
    {
        question: "What is the smallest prime number?",
        goodAnswer: 0,
        answers: ["2", "1", "3"]
    },
    {
        question: "What is the capital of Japan?",
        goodAnswer: 0,
        answers: ["Tokyo", "Kyoto", "Osaka"]
    },
    {
        question: "What year did World War II end?",
        goodAnswer: 0,
        answers: ["1945", "1944", "1946"]
    },
    {
        question: "Which planet is known as the Earth's twin?",
        goodAnswer: 1,
        answers: ["Mars", "Venus", "Mercury"]
    },
    {
        question: "Who is the author of '1984'?",
        goodAnswer: 0,
        answers: ["George Orwell", "Aldous Huxley", "Ray Bradbury"]
    },
    {
        question: "What is the freezing point of water?",
        goodAnswer: 0,
        answers: ["0°C", "32°F", "100°C"]
    },
    {
        question: "Which element is used in pencils?",
        goodAnswer: 0,
        answers: ["Graphite", "Lead", "Iron"]
    },
    {
        question: "What is the largest desert in the world?",
        goodAnswer: 0,
        answers: ["Sahara", "Arabian", "Gobi"]
    },
    {
        question: "Which is the longest bone in the human body?",
        goodAnswer: 2,
        answers: ["Skull", "Rib", "Femur"]
    },
    {
        question: "What is the most spoken language in the world?",
        goodAnswer: 1,
        answers: ["Spanish", "Mandarin", "English"]
    },
    {
        question: "What is the capital of France?",
        goodAnswer: 0,
        answers: ["Paris", "Dakar", "Lyon"]
    },
    {
        question: "Who is the current Prime Minister of Senegal?",
        goodAnswer: 1,
        answers: ["Macron", "Diomaye", "Sonko"]
    },
    {
        question: "What is the name of the famous painting by Leonardo da Vinci?",
        goodAnswer: 1,
        answers: ["The Joconde", "The Last Supper", "The Supper"]
    },
    {
        question: "Which planet is known as the Red Planet?",
        goodAnswer: 2,
        answers: ["Earth", "Venus", "Mars"]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        goodAnswer: 0,
        answers: ["William Shakespeare", "Victor Hugo", "Charles Dickens"]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        goodAnswer: 1,
        answers: ["Hydrogen", "Oxygen", "Carbon"]
    },
    {
        question: "In which year did the Titanic sink?",
        goodAnswer: 2,
        answers: ["1910", "1914", "1912"]
    },
    {
        question: "What is the largest mammal in the world?",
        goodAnswer: 0,
        answers: ["Blue Whale", "Elephant", "Giraffe"]
    },
    {
        question: "What is the chemical symbol for gold?",
        goodAnswer: 0,
        answers: ["Au", "Ag", "Pb"]
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        goodAnswer: 0,
        answers: ["Carbon Dioxide", "Oxygen", "Nitrogen"]
    },
    {
        question: "Who painted the Mona Lisa?",
        goodAnswer: 0,
        answers: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        goodAnswer: 1,
        answers: ["Gold", "Diamond", "Iron"]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        goodAnswer: 0,
        answers: ["Japan", "China", "South Korea"]
    },
    {
        question: "What is the longest river in the world?",
        goodAnswer: 1,
        answers: ["Amazon River", "Nile River", "Yangtze River"]
    },
    {
        question: "Who developed the theory of relativity?",
        goodAnswer: 0,
        answers: ["Albert Einstein", "Isaac Newton", "Galileo Galilei"]
    },
    {
        question: "Which planet is known for its rings?",
        goodAnswer: 0,
        answers: ["Saturn", "Jupiter", "Neptune"]
    },
    {
        question: "What is the main ingredient in guacamole?",
        goodAnswer: 0,
        answers: ["Avocado", "Tomato", "Pepper"]
    },
    {
        question: "What is the largest continent on Earth?",
        goodAnswer: 1,
        answers: ["Africa", "Asia", "North America"]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        goodAnswer: 1,
        answers: ["Gold", "Diamond", "Iron"]
    },
    {
        question: "What is the largest ocean on Earth?",
        goodAnswer: 0,
        answers: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"]
    }
];


// Selecting elements
const pQuestion = document.querySelector("p"); // Where we display the question
const labels = document.querySelectorAll("label"); // Where we display the answers
const next = document.querySelector(".next"); // Correctly selecting the 'next' button
const progressText = document.querySelector(".progress"); // Pour la numérotation "1/5"
const resultText = document.querySelector(".result"); // Pour afficher les résultats


// Variables 
let cpt = 0;
let correctAnswersCount = 0; 
let currentQuestion = []
const radioButtons = document.querySelectorAll('input[name="answer"]');
let remainingQuestions = [...questions];

// Functions
function giveQuestion() { // Get a random question
    const size = remainingQuestions.length;
    const pos = Math.floor(Math.random() * size);
    return remainingQuestions[pos];
}

function showQuestion() { // Show the question and answers
    if (cpt < 20) { 
        radioButtons.forEach(radio => radio.checked = false);
        currentQuestion = giveQuestion();
        pQuestion.textContent = currentQuestion.question;
        currentQuestion.answers.forEach(function(answer, index) {
            labels[index].textContent = answer;
        });
        progressText.textContent = `${cpt + 1}/20`;
    }else {
        endQuiz()
    }
}

function endQuiz(){
    pQuestion.textContent = "Quiz ended!"; 
    progressText.textContent = "";
    resultText.textContent = `You have given ${correctAnswersCount} good answer(s) out of 20.`;
    next.disabled = true; 
    radioButtons.forEach(radio => radio.parentElement.style.display = "none");
}
function checkAnswer(selectedAnswerIndex) {
    if (selectedAnswerIndex === currentQuestion.goodAnswer) {
        correctAnswersCount++;
    }
    remainingQuestions = remainingQuestions.filter(q => q !== currentQuestion);
}
// Events
window.onload = function () {
    showQuestion();
    
    next.addEventListener("click", function() {
        const selectedAnswerIndex = [...document.querySelectorAll('input[name="answer"]')].findIndex(input => input.checked);
        if (selectedAnswerIndex !== -1) {  // Get the current question based on 'cpt'
            checkAnswer(selectedAnswerIndex); 
            cpt++
            showQuestion();
        } else {
            alert("Choose an answer !"); 
        }
    });
};
