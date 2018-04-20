import readlineSync from 'readline-sync';
import { userName } from '..';

//= Brain-even

const randomNumber = () => Math.round(Math.random() * 100);

const askToUser = (arg) => {
  console.log(`Question: ${arg}`);

  return arg;
};

const userAnswer = () => readlineSync.question('Your answer? ');

const checkUserAnswer = () => {
  const quest = askToUser(randomNumber());
  const ans = userAnswer();


  if (ans !== 'yes' && ans !== 'no') {
    console.log(`${ans} is wrong answer ;(. Correct answers are 'no' or 'yes'.
    Let's try again, ${userName}!`);

    return false;
  }

  if (!(quest % 2) && ans === 'yes') {
    console.log('Correct!');

    return true;
  } else if (quest % 2 && ans === 'no') {
    console.log('Correct!');

    return true;
  } else if (quest % 2 && ans === 'yes') {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
    Let's try again, ${userName}!`);

    return false;
  } else if (!(quest % 2) && ans === 'no') {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
    Let's try again, ${userName}!`);

    return false;
  } return true;
};


const brainEven = () => {
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

export default brainEven;
//= end Brain even
