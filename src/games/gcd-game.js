import { cons } from 'hexlet-pairs';
import { userWelcome, startGame, randomNumber } from '..';


userWelcome('Find the greatest common divisor of given numbers.');


const gsdCalc = (arg1, arg2) => {
  if (arg2 === 0) {
    return arg1;
  } return gsdCalc(arg2, arg1 % arg2);
};

const expressionForAsk = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const questExp = `${num1} ${num2}`;
  const res = `${gsdCalc(num1, num2)}`;

  return cons(questExp, res);
};

const brainGcd = () => startGame(expressionForAsk);

export default brainGcd;
