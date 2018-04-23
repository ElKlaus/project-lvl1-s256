import { cons } from 'hexlet-pairs';
import { userWelcome, startGame, randomNumber } from '..';

userWelcome('What number is missing in this progression?');

const newProgression = () => {
  let count = 1;
  const res = [];
  const step = randomNumber(1, 100);

  res[0] = randomNumber(1, 100);

  while (count < 10) {
    res.push(res[count - 1] + step);

    count += 1;
  }

  return res;
};

const expressionForAsk = () => {
  const questExp = newProgression();
  const missedIndex = randomNumber(1, 10);
  const rightAnswer = `${questExp.splice(missedIndex, 1, '..')}`;

  return cons(questExp, rightAnswer);
};

const brainProgression = () => startGame(expressionForAsk);

export default brainProgression;
