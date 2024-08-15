const hide_Btn = document.getElementById("toggle");
const hideContainer = document.getElementById("hide");
const quiz = document.querySelector(".quiz");
const options = document.querySelectorAll(".option");
const bigContainer = document.getElementById("bigContainer");
const para = document.getElementById("para");
const question = document.querySelector(".question");
let answer;

hide_Btn.addEventListener("click", toggleWindow);

hideContainer.addEventListener("click", toggleWindow);

function toggleWindow() {
  quiz.classList.toggle("hide");
  hide_Btn.classList.toggle("rotate");
}

toggleWindow();

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    checkAnswer(e.target.id);
  });
});

function checkAnswer(selectedAnswer) {
  if (parseFloat(selectedAnswer) === answer) {
    bigContainer.style.display = "none";
    const resultContainer = document.createElement("div");
    resultContainer.classList.add("correct");
    resultContainer.textContent = "You answered Correctly";

    document.body.append(resultContainer);

    setTimeout(() => {
      resultContainer.remove();
      bigContainer.style.display = "block";
    }, 3000);
  } else {
    bigContainer.style.display = "none";
    const resultContainer = document.createElement("div");
    resultContainer.classList.add("incorrect");
    resultContainer.textContent = "You answered Incorrectly";

    document.body.append(resultContainer);

    setTimeout(() => {
      resultContainer.remove();
      bigContainer.style.display = "block";
    }, 3000);
  }
}

function firstQuestion() {
  para.textContent =
    "A bit and a qubit represent the basic units of information in classical and quantum computing, respectively, but their underlying principles and capabilities differ significantly. A bit, the fundamental unit of classical computing, can be in one of two states: 0 or 1. This binary nature allows classical computers to perform operations and process information using combinations of these two states. In contrast, a qubit, which stands for 'quantum bit', is the fundamental unit of quantum information. Unlike a classical bit, a qubit can exist in a superposition of both 0 and 1 states simultaneously, thanks to the principles of quantum mechanics. This superposition allows quantum computers to process a vast amount of possibilities at once, potentially solving complex problems more efficiently than classical computers. Moreover, qubits can be entangled, a phenomenon where the state of one qubit becomes dependent on the state of another, no matter the distance between them. This entanglement enables quantum computers to perform intricate computations and process information in ways that classical computers cannot, leveraging the unique properties of quantum mechanics to tackle certain problems with unprecedented speed and power.";
  question.textContent = "What does a bit represent in classical computing?";

  const option1 = "a) A superposition of states";
  const option2 = "b) A value that can be either 0 or 1";
  const option3 = "c) An entangled state";
  const option4 = "d) A quantum entanglement";

  options.forEach((option) => {
    switch (parseFloat(option.id)) {
      case 1:
        option.textContent = option1;
        break;

      case 2:
        option.textContent = option2;
        break;

      case 3:
        option.textContent = option3;
        break;

      case 4:
        option.textContent = option4;
        break;
    }
  });

  answer = 2;
}
firstQuestion();

function secondQuestion() {}
