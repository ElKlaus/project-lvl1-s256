import { userWelcome, startGame } from '..';

userWelcome('Answer "yes" if number even otherwise answer "no".');

const randomNumber = () => Math.round(Math.random() * 100);

const rules = (ans, quest) => {
  let res = '';

  if (!(quest % 2) && ans === 'yes') {
    res = 'right';
  } else if (quest % 2 && ans === 'no') {
    res = 'right';
  } else res = 'wrong';

  return res;
};


const brainEven = () => startGame(randomNumber, rules, 2);

export default brainEven;
