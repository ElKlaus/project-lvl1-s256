import { userName, userWelcome, randomNumber, askToUser, userAnswer, startGame } from '..';

userWelcome('Answer "yes" if number even otherwise answer "no".');

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

const brainEven = () => startGame(checkUserAnswer, 2);

export default brainEven;

