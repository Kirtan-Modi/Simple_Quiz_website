const questions = [
  {
    question: "Which ancient civilization built Machu Picchu?",
    answers: ["Aztec", "Inca", "Maya", "Olmec"],
    correct: 1
  },
  {
    question: "What is the chemical symbol for the element Tungsten?",
    answers: ["Tu", "W", "Tg", "Ts"],
    correct: 1
  },
  {
    question: "Which mathematician is known for his work on the theory of computation and breaking the Enigma code?",
    answers: ["Alan Turing", "John von Neumann", "Kurt Gödel", "Blaise Pascal"],
    correct: 0
  },
  {
    question: "In which country is the ancient city of Petra located?",
    answers: ["Egypt", "Jordan", "Syria", "Iran"],
    correct: 1
  },
  {
    question: "Which planet has the longest day (in Earth time)?",
    answers: ["Venus", "Mercury", "Mars", "Neptune"],
    correct: 0
  },
  {
    question: "Who painted 'The Persistence of Memory'?",
    answers: ["Pablo Picasso", "Claude Monet", "Salvador Dalí", "Vincent van Gogh"],
    correct: 2
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: ["Quartz", "Diamond", "Corundum", "Topaz"],
    correct: 1
  },
  {
    question: "Which physicist developed the uncertainty principle?",
    answers: ["Niels Bohr", "Werner Heisenberg", "Albert Einstein", "Max Planck"],
    correct: 1
  },
  {
    question: "Which language is the most spoken native language in the world?",
    answers: ["Hindi", "English", "Spanish", "Mandarin Chinese"],
    correct: 3
  },
  {
    question: "What is the only mammal capable of true flight?",
    answers: ["Flying squirrel", "Bat", "Sugar glider", "Colugo"],
    correct: 1
  }
];


const questionEl = document.getElementById("question");
const formEl = document.getElementById("answer-form");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerText = "Next";
  showQuestion();
}

function showQuestion() {
  clearForm();
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.innerText = currentQuestion.question;

  currentQuestion.answers.forEach((answer, index) => {
    const label = document.createElement("label");
    const input = document.createElement("input");

    input.type = "radio";
    input.name = "answer";
    input.value = index;

    label.appendChild(input);
    label.appendChild(document.createTextNode(answer));
    formEl.appendChild(label);
  });

  // Next button is always clickable now
  nextBtn.disabled = false;
}

  formEl.addEventListener("change", () => {
    nextBtn.disabled = false;
  });

function clearForm() {
  formEl.innerHTML = "";
}

function handleNext() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) return;

  const selectedAnswer = parseInt(selected.value);
  if (selectedAnswer === questions[currentQuestionIndex].correct) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  clearForm();
  questionEl.innerText = `You scored ${score} / ${questions.length}!`;
  nextBtn.innerText = "Restart";
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNext();
  } else {
    startQuiz();
  }
});

startQuiz();
