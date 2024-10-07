const questions = [
  {
      question: "Qual a capital da França?",
      options: ["Berlim", "Madrid", "Paris", "Lisboa"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paris_Night.jpg/800px-Paris_Night.jpg"
  },
  {
      question: "Qual o maior planeta do sistema solar?",
      options: ["Terra", "Júpiter", "Marte", "Saturno"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Jupiter.jpg/800px-Jupiter.jpg"
  },
  {
      question: "Quem escreveu 'Dom Casmurro'?",
      options: ["Machado de Assis", "José de Alencar", "Joaquim Manuel de Macedo", "Clarice Lispector"],
      answer: 0,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Machado_de_Assis_02.jpg/800px-Machado_de_Assis_02.jpg"
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("image").src = currentQuestion.image;
  document.getElementById("question").textContent = currentQuestion.question;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(index, button);
      optionsContainer.appendChild(button);
  });

  document.getElementById("nextBtn").style.display = "none";
}

function checkAnswer(selectedIndex, button) {
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedIndex === currentQuestion.answer) {
      score++;
      button.classList.add("correct");
      alert("Resposta correta!");
  } else {
      button.classList.add("wrong");
      alert("Resposta errada! A resposta correta era: " + currentQuestion.options[currentQuestion.answer]);
  }

  document.getElementById("score").textContent = `Pontuação: ${score}`;
  
  const buttons = document.querySelectorAll("#options button");
  buttons.forEach(btn => btn.disabled = true); // Desabilitar botões após resposta

  document.getElementById("nextBtn").style.display = "block";
}

document.getElementById("nextBtn").onclick = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      loadQuestion();
  } else {
      alert("Fim do jogo! Sua pontuação final é: " + score);
      currentQuestionIndex = 0;
      score = 0;
      document.getElementById("score").textContent = `Pontuação: ${score}`;
      loadQuestion();
  }
};

loadQuestion();
