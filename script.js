'use strict';

const restartBtn = document.querySelector('.again');
const inputNumber = document.querySelector('.number-input');
const checkerBtn = document.querySelector('.check');
const takeScore = document.querySelector('.label-score');
const highScore = document.querySelector('.label-highscore');
const textMessage = document.querySelector('.guess-message');
const riddleNumber = 12;
let startNumber = 20;

restartBtn.addEventListener('click', () => {
  document.querySelector('body').innerHTML = `
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
});

const minesNumber = () => {
  takeScore.innerHTML = `Очки: <span class="score">${(startNumber -= 1)}</span>`;
};

checkerBtn.addEventListener('click', () => {
  const inputValue = {
    number: inputNumber.value,
  };
  let sum;

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
    takeScore.innerHTML = `Очки: <span class="score">${(startNumber += 1)}</span>`;
    highScore.innerHTML = `<span class="highscore">${sum}</span>`;
    textMessage.textContent = 'Правильно';
  }
});
