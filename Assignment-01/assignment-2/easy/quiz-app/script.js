import { quizData } from "./data.js";

const questionBox = document.querySelector(".question-box");
const quizQuestion = document.querySelector(".question");
const options = document.querySelector(".options");
const submitBtn = document.querySelector(".submit-btn");

let currentQuestionIndex = 0;
let userAnswers = [];

displayQuestion(currentQuestionIndex);

function displayQuestion(index) {
  const currentQuiz = quizData[index];

  quizQuestion.innerHTML = currentQuiz.question;
  options.innerHTML = "";

  const optionKeys = ["a", "b", "c", "d"];
  optionKeys.forEach((key) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");

    radio.type = "radio";
    radio.name = "answer";
    radio.value = key;

    label.appendChild(radio);
    label.append(currentQuiz[key]);

    options.appendChild(label);
  });
}

submitBtn.addEventListener("click", function (e) {
  const selected = options.querySelector('input[name="answer"]:checked');

  if (!selected) {
    alert("Please select an answer");
    return;
  }

  userAnswers.push(selected.value);

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    displayQuestion(currentQuestionIndex);
  } else {
    showResult();
  }
});

function showResult() {
  let correctAnswers = 0;

  for(let i = 0; i < userAnswers.length; i++) {
    if(userAnswers[i] === quizData[0].correct) {
        correctAnswers++
    }
  }

  questionBox.innerHTML = `You answered ${correctAnswers}/${quizData.length} correctly`
  submitBtn.innerHTML = "Reload"
  questionBox.appendChild(submitBtn)

  submitBtn.addEventListener('click', function(e) {
    location.reload()
  })
}
