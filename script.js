let questions = [];

const questionEl = document.getElementById("question");
const formEl = document.getElementById("answer-form");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

fetch("questions.json")
  .then(response => response.json())
  .then(data => {
    questions = Array.isArray(data) ? data : data.questions;
    startQuiz();
  });

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

  currentQuestion.options.forEach((answer, index) => {
    const label = document.createElement("label");
    const input = document.createElement("input");

    input.type = "checkbox";
    input.name = "answer";
    input.value = index;

    input.addEventListener("change", () => {
      document.querySelectorAll('input[name="answer"]').forEach(cb => cb.checked = false);
      input.checked = true;
    });
    
    label.appendChild(input);
    label.appendChild(document.createTextNode(answer));
    formEl.appendChild(label);
  });

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