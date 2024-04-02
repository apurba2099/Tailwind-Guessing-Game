'use strict';

// START MODAL CODE

// Define the all class name into the variable
const openModalBtn = document.querySelector('.open-modal');
const closeModalBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// create a function to open modal
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// create a function to close modal
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// add click event to these button
openModalBtn.addEventListener('click', () => {
  openModal();
});
closeModalBtn.addEventListener('click', () => {
  closeModal();
});
// END MODAL CODE
/////////////////////////////////

// START GAME CODE
// Initialize values
// MESSAGE AND NUMBER
const body = document.querySelector('body');
const message = document.querySelector('.message');
const InputNumber = document.querySelector('.number');

// BUTTONS
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const checkAndAgainBtn = document.querySelectorAll('.btn');

// SCORES
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let attempt = 20;
let highScore = 0;
let score = document.querySelector('.score');
// CONFETTI
const canvas = document.querySelector('#confetti');
const jsConfetti = new JSConfetti();
// END

// CHECK EVENT
checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = 'Please enter a number🙏!';
  }
  // WINNING SECTION
  else if (guess === secretNumber) {
    message.textContent = '🎊Correct Number!🎊';
    message.style.backgroundColor = '#16ce7b';
    message.style.color = '#ffffff';
    InputNumber.textContent = secretNumber;
    body.style.backgroundColor = '#16ce7b';
    openModalBtn.style.backgroundColor = '#16ce7b';

    document.querySelector('.highScore').style.backgroundColor = '#16ce7b';
    score.style.backgroundColor = '#16ce7b';
    document.querySelector('.attempt').style.backgroundColor = '#16ce7b';

    score.textContent = highScore + guess;
    jsConfetti.addConfetti();

    checkAndAgainBtn.forEach(element => {
      element.style.backgroundColor = '#16ce7b';
    });

    if (attempt > highScore) {
      highScore = attempt;
      document.querySelector('.highScore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (attempt > 1) {
      message.textContent = `${
        guess > secretNumber ? '📈 Too High!' : '📉 Too Low!'
      }`;
      attempt--;
      document.querySelector('.attempt').textContent = attempt;
    } else {
      message.textContent = '☠️You lost the game!☠️';
      body.style.backgroundColor = '#F32013';
      document.querySelector('.attempt').textContent = 0;
    }
  }
});

// AGAIN EVENT
againBtn.addEventListener('click', function () {
  attempt = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  InputNumber.textContent = '?';
  document.querySelector('.guess').value = '';

  message.textContent = 'Start Guessing🤔. . .';
  message.style.backgroundColor = 'white';
  message.style.color = '#334155';
  openModalBtn.style.backgroundColor = '#2962ff';

  body.style.backgroundColor = '#101220';
  document.querySelector('.attempt').textContent = attempt;

  document.querySelector('.highScore').style.backgroundColor = '#2962ff';
  score.style.backgroundColor = '#2962ff';
  document.querySelector('.attempt').style.backgroundColor = '#2962ff';

  checkAndAgainBtn.forEach(element => {
    element.style.backgroundColor = '#2962ff';
  });
});
