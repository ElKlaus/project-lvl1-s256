import { userWelcome, startGame } from '..';

userWelcome('What is the result of the expression?');

const actionsArr = ['-', '+', '*'];

const randomNumber = () => Math.round(Math.random() * 100);

const randomAction = () => actionsArr[Math.floor(((Math.random() * 3) + 0))];

const expressionForAsk = () => `${randomNumber()} ${randomAction()} ${randomNumber()}`;

const rules = (ans, quest) => {
  let res = '';

  if (eval(quest) == ans) {
    res = 'right';
  } else res = 'wrong';

  return res;
};


const brainCalc = () => startGame(expressionForAsk, rules, 2);

export default brainCalc;
