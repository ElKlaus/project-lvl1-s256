import readlineSync from 'readline-sync';


export const userWelcome = (arg = '') => {
  console.log(`Welcome to the Brain Games!
${arg}`);
};

export const askToUser = (arg) => {
  console.log(`Question: ${arg}`);

  return arg;
};

export const userAnswer = () => readlineSync.question('Your answer? ');

export const startGame = (expressinForAsk, rules, levelsCount) => {
  let count = 0;

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);


  const checkUserAnswer = () => {
    const quest = askToUser(expressinForAsk());
    const ans = userAnswer();

    switch (rules(ans, quest)) {
      case 'right':
        console.log('Correct!');
        return true;
      case 'wrong':
        console.log(`${ans} is wrong answer ;(.
Let's try again, ${userName}!`);
        return false;
      default:
        return true;
    }
  };

  while (count < levelsCount) {
    if (checkUserAnswer()) {
      count += 1;
    } else break;
  }

  if (count === levelsCount) {
    console.log(`Congratulations, ${userName}!`);
  }
};
