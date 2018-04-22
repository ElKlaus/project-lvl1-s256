import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const userWelcome = (arg = '') => {
  console.log(`Welcome to the Brain Games!
${arg}`);
};

export const userAnswer = () => readlineSync.question('Your answer? ');

export const startGame = (dataFromGame) => {
  const userName = readlineSync.question('May I have your name? ');


  let count = 0;


  console.log(`Hello, ${userName}!`);

  const checkUserAnswer = () => {
    const pairFromGame = dataFromGame();
    const epressionForAnswer = car(pairFromGame);
    const rightAnswer = cdr(pairFromGame);

    console.log(`Question: ${epressionForAnswer}`);

    const ans = userAnswer();


    if (rightAnswer === ans) {
      console.log('Correct!');
      return true;
    } console.log(`${ans} is wrong answer ;(. Right answer is ${rightAnswer}\nLet's try again, ${userName}!`);

    return false;
  };

  while (count < 3) {
    if (checkUserAnswer()) {
      count += 1;
    } else break;
  }

  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export const randomNumber = () => Math.round(Math.random() * 100);
