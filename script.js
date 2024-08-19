'use strict';

const restartBtn = document.querySelector('.again');
const body = document.querySelector('body');
const inputNumber = document.querySelector('.number-input');
const checkerBtn = document.querySelector('.check');
const takeScore = document.querySelector('.label-score');
const highScore = document.querySelector('.highscore');
const textMessage = document.querySelector('.guess-message');
const riddleNumber = Math.floor(Math.random() * (20 - 1) + 1);
let startNumber = 20;
let sum = 1;

restartBtn.addEventListener('click', () => {
  body.innerHTML = `
   <header>
      <h1>Угадай Число!</h1>
      <p class="between">(Между 1 и 20)</p>
      <button class="btn again">Сначала!</button>
      <div class="question">???</div>
    </header>
	<main>
      <div class="left">
        <input type="number" class="number-input" />
        <button class="btn check">Проверить!</button>
      </div>
      <section class="right">
        <p class="guess-message">Начни угадывать</p>
        <p class="label-score">Очки: <span class="score">20</span></p>
        <p class="label-highscore">
          Лучший результат: <span class="highscore">0</span>
        </p>
      </section>
    </main>`;

  body.style.backgroundColor = 'rgb(0, 0, 0)';
});

const minesNumber = () => {
  takeScore.innerHTML = `Очки: <span class="score">${(sum =
    --startNumber)}</span>`;
};

checkerBtn.addEventListener('click', () => {
  const inputValue = {
    number: +inputNumber.value,
  };
  if (sum >= 1) {
    if (inputValue.number > riddleNumber) {
      textMessage.textContent = 'Забагато';
      minesNumber();
    } else if (inputValue.number < riddleNumber) {
      textMessage.textContent = 'Замало';
      minesNumber();
    } else if (inputValue.number == riddleNumber) {
      document.querySelector(
        '.question'
      ).innerHTML = `<div class="question">${inputValue.number}</div>`;
      takeScore.innerHTML = `Очки: <span class="score">${(sum =
        --startNumber)}</span>`;
      highScore.innerHTML = `<span class="highscore">${sum}</span>`;
      textMessage.textContent = 'Правильно';
      body.style.backgroundColor = 'rgb(9, 250, 21)';
    }
  }
});
