import { cons } from 'hexlet-pairs';
import { userWelcome, startGame, randomNumber } from '..';

userWelcome('Balance the given number.');

const expressionForAsk = () => {
  const questExp = `${randomNumber(100, 10000)}`;
  const res = `${questExp}`;

  const numbFollow = (arg) => {
    let count = 0;

    while (count < arg.length) {
      console.log(arg[count]);

      count += 1;
    }
  };

  // const balanceFunc = () => {
  //   const expLength = questExp.length;

  //   return console.log(expLength);
  // };

  numbFollow(questExp);

  return cons(questExp, res);
};

const brainBalance = () => startGame(expressionForAsk);

export default brainBalance;
