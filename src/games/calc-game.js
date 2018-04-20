import readlineSync from 'readline-sync';
import { userName } from '..';

const randomNumber = () => Math.round(Math.random() * 100);

const askToUser = () => {
  const actionsArr = ['-', '+', '*'];

  const randomAction = () => actionsArr[Math.floor(((Math.random() * 3) + 0))];

  const expressionForAsk = `${randomNumber()} ${randomAction()} ${randomNumber()}`;

  console.log(`Question: ${expressionForAsk}`);

  return expressionForAsk;
};

const userAnswer = () => readlineSync.question('Your answer? ');

const checkUserAnswer = () => {
  const quest = askToUser();
  const ans = userAnswer();

  //   if (ans !== 'yes' && ans !== 'no') {
  //     console.log(`${ans} is wrong answer ;(. Correct answers are 'no' or 'yes'.
  //     Let's try again, ${userName}!`);

  //     return false;
  //   }

  if (eval(quest) == ans) {
    console.log('Correct!');

    return true;
  } else if (eval(quest) !== ans) {
    console.log(`IT is wrong answer ;(.
    Let's try again, ${userName}!`);

    return false;
  } return true;
};


const brainCalc = () => {
  let count = 0;

  while (count < 3) {
    if (checkUserAnswer()) {
      count += 1;
    } else break;
  }

  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default brainCalc;
