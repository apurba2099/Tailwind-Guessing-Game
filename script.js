"use strict";

// START MODAL CODE

// Define the all class name into the variable
const openModalBtn = document.querySelector(".open-modal");
const closeModalBtn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// create a function to open modal
const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// create a function to close modal
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// add click event to these button
openModalBtn.addEventListener("click", () => {
  openModal();
});
closeModalBtn.addEventListener("click", () => {
  closeModal();
});
// END MODAL CODE
/////////////////////////////////

// START GAME CODE
// Initialize values
// MESSAGE AND NUMBER
const body = document.querySelector("body");
const message = document.querySelector(".message");
const InputNumber = document.querySelector(".number");

// BUTTONS
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const checkAndAgainBtn = document.querySelectorAll(".btn");

// SCORES
// const score = document.querySelector(".score");
// const highScore = document.querySelector(".highScore");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let attempt = 20;
let highScore = 0;
console.log(secretNumber);
// END
// CHECK EVENT
checkBtn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    message.textContent = "Please enter a number🙏!";
  } else if (guess === secretNumber) {
    message.textContent = "🎊Correct Number!🎊";
    InputNumber.textContent = secretNumber;
    body.style.backgroundColor = "#16ce7b";

    checkAndAgainBtn.forEach((element) => {
      element.style.backgroundColor = "#16ce7b";
    });

    if (attempt > highScore) {
      highScore = attempt;
      document.querySelector(".highScore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (attempt > 1) {
      message.textContent = `${
        guess > secretNumber ? "📈 Too High!" : "📉 Too Low!"
      }`;
      attempt--;
      document.querySelector(".attempt").textContent = attempt;
    } else {
      message.textContent = "☠️You lost the game!☠️";
      document.querySelector(".attempt").textContent = 0;
    }
  }
});

// AGAIN EVENT
againBtn.addEventListener("click", function () {
  attempt = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = "Start Guessing🤔...";
  document.querySelector(".attempt").textContent = attempt;
  document.querySelector(".guess").value = "";
  body.style.backgroundColor = "#101220";

  checkAndAgainBtn.forEach((element) => {
    element.style.backgroundColor = "#2962ff";
  });
});