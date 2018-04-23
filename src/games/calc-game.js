import { cons } from 'hexlet-pairs';
import { userWelcome, startGame, randomNumber } from '..';

userWelcome('What is the result of the expression?');

const randomAction = () => randomNumber(1, 3);

const expressionForAsk = () => {
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  let rightAnswer = '';
  let question = '';

  switch (randomAction()) {
    case 1:
      rightAnswer = `${num1 - num2}`;
      question = `${num1} - ${num2}`;
      break;
    case 2:
      rightAnswer = `${num1 * num2}`;
      question = `${num1} * ${num2}`;
      break;
    case 3:
      rightAnswer = `${num1 + num2}`;
      question = `${num1} + ${num2}`;
      break;
    default:
      break;
  }


  return cons(question, rightAnswer);
};

const brainCalc = () => startGame(expressionForAsk);

export default brainCalc;
