import { cons } from 'hexlet-pairs';
import { userWelcome, startGame, randomNumber } from '..';

userWelcome('Is this number prime?');


const checkPrime = (num) => {
  let count = 2;

  while (count < num) {
    if (num % count) {
      count += 1;
    } else return false;
  }

  return true;
};

const expressionForAsk = () => {
  const questExp = randomNumber(1, 1000);
  const rightAnswer = checkPrime(questExp) ? 'yes' : 'no';

  return cons(questExp, rightAnswer);
};

const brainPrime = () => startGame(expressionForAsk);

export default brainPrime;
