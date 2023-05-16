'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const changeElementText = function (element, text) {
  document.querySelector(element).textContent = text;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there's no input or 0
  if (!guess) {
    changeElementText('.message', '⛔ Not a Number!');

    //when the game win
  } else if (guess === secretNumber) {
    changeElementText('.message', '🎉 Correct Number!');
    changeElementText('.number', secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //set high score
    if (highScore < score) {
      highScore = score;
      changeElementText('.highscore', highScore);
    }

    //when the guess number is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      changeElementText(
        '.message',
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      changeElementText('.score', score);

      //when the game is lost
    } else {
      changeElementText('.message', '💥 You lost the game!');
      changeElementText('.score', '0');
    }
  }
});

//   //when the number is too high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too high!';
//       score--;
//       document.querySelector('.score').textContent = score;

//       //when the game is lost
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }

//     //when the number is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;

//       //when the game is lost
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }

document.querySelector('.again').addEventListener('click', function () {
  console.log('Again!');

  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
