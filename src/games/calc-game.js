import { cons } from 'hexlet-pairs';
import { userWelcome, startGame, randomNumber } from '..';

userWelcome('What is the result of the expression?');

const actionsArr = ['-', '+', '*'];

const randomAction = () => actionsArr[Math.floor(((Math.random() * 3) + 0))];

const expressionForAsk = () => {
  const questExp = `${randomNumber()} ${randomAction()} ${randomNumber()}`;
  const res = `${eval(questExp)}`;

  return cons(questExp, res);
};

const brainCalc = () => startGame(expressionForAsk);

export default brainCalc;
