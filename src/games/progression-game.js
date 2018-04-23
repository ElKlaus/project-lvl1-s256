import { cons } from 'hexlet-pairs';
import { userWelcome, startGame, randomNumber } from '..';

userWelcome('What number is missing in this progression?');

const newProgression = () => {
  const res = [];
  const step = randomNumber(1, 100);

  res[0] = randomNumber(1, 100);

  const iterArr = (arg, count) => {
    if (count === arg) return res;

    res.push(res[count - 1] + step);

    return iterArr(arg, count + 1);
  };

  return iterArr(10, 1);
};

const expressionForAsk = () => {
  const questExp = newProgression();
  const missedIndex = randomNumber(1, 10);
  const rightAnswer = `${questExp.splice(missedIndex, 1, '..')}`;

  return cons(questExp, rightAnswer);
};

const brainProgression = () => startGame(expressionForAsk);

export default brainProgression;
