'use strict';

const restartBtn = document.querySelector('.again');
const form = document.querySelector('.left');
const checkerBtn = document.querySelector('.check');
const takeScore = document.querySelector('.label-score');
const highScore = document.querySelector('.highscore');
const riddleNumber = 13;

restartBtn.addEventListener('click', () => {
  document.querySelector('main').innerHTML = `
	<form class="left">
        <input type="number" class="number-input" />
        <button class="btn check">Проверить!</button>
      </form>
      <section class="right">
        <p class="guess-message">Начни угадывать</p>
        <p class="label-score">Очки: <span class="score">20</span></p>
        <p class="label-highscore">
          Лучший результат: <span class="highscore">0</span>
        </p>
  </section>`;
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const inputNumber = document.querySelector('[type="number"]');
  const question = document.querySelector('.question');

  const formValue = {
    number: inputNumber.value,
  };

  if (formValue.number === riddleNumber) {
    question.innerHTML = `<div class="question">${riddleNumber}</div>`;
  }

  // form.reset();
});
