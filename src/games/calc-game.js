import { userName, userWelcome, randomNumber, askToUser, userAnswer, startGame } from '..';

userWelcome('What is the result of the expression?');

const actionsArr = ['-', '+', '*'];

const randomAction = () => actionsArr[Math.floor(((Math.random() * 3) + 0))];

const expressionForAsk = `${randomNumber()} ${randomAction()} ${randomNumber()}`;

const checkUserAnswer = () => {
  const quest = askToUser(expressionForAsk);
  const ans = userAnswer();

  if (eval(quest) == ans) {
    console.log('Correct!');

    return true;
  } else if (eval(quest) !== ans) {
    console.log(`IT is wrong answer ;(.
Let's try again, ${userName}!`);

    return false;
  } return true;
};

const brainCalc = () => startGame(checkUserAnswer, 2);

export default brainCalc;
