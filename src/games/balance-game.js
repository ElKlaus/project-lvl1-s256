import { cons } from 'hexlet-pairs';
import { userWelcome, startGame, randomNumber } from '..';

userWelcome('Balance the given number.');

const argToArr = (arg) => {
  let count = 0;
  const res = [];

  while (count < arg.length) {
    res[count] = Number(arg[count]);
    count += 1;
  }

  return res;
};

const checkBalance = arg => !(((Math.max(...arg) - Math.min(...arg)) <= 1));

const toBalance = (arg) => {
  const lastIndex = arg.length - 1;
  const res = arg;

  while (checkBalance(res)) {
    res.sort();
    res[lastIndex] -= 1;
    res[0] += 1;
    res.sort();
  }

  console.log(arg);
  return res;
};

const expressionForAsk = () => {
  const questExp = `${randomNumber(100, 10000)}`;
  const numbArr = argToArr(questExp);
  const rightAnswer = toBalance(numbArr).join('');

  return cons(questExp, rightAnswer);
};

const brainBalance = () => startGame(expressionForAsk);

export default brainBalance;
