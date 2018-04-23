import { cons } from 'hexlet-pairs';
import { userWelcome, startGame, randomNumber } from '..';

userWelcome('What is the result of the expression?');

const randomAction = () => randomNumber(1, 3);

const expressionForAsk = () => {
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  let res = '';
  let questExp = '';

  switch (randomAction()) {
    case 1:
      res = `${num1 - num2}`;
      questExp = `${num1} - ${num2}`;
      break;
    case 2:
      res = `${num1 * num2}`;
      questExp = `${num1} * ${num2}`;
      break;
    case 3:
      res = `${num1 + num2}`;
      questExp = `${num1} + ${num2}`;
      break;
    default:
      break;
  }


  return cons(questExp, res);
};

const brainCalc = () => startGame(expressionForAsk);

export default brainCalc;
