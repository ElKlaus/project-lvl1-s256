import { cons } from 'hexlet-pairs';
import { userWelcome, startGame, randomNumber } from '..';

userWelcome('Answer "yes" if number even otherwise answer "no".');

const expressionForAsk = () => {
  const num = randomNumber();
  const questExp = `${num}`;
  let res = '';

  if (!(num % 2)) {
    res = 'yes';
  } else if (num % 2) {
    res = 'no';
  }

  return cons(questExp, res);
};

const brainEven = () => startGame(expressionForAsk);

export default brainEven;
