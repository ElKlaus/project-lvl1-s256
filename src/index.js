import readlineSync from 'readline-sync';
//= Brain games

export const userName = readlineSync.question('May I have your name? ');

export const userWelcome = (arg = '') => {
  console.log(`Welcome to the Brain Games!
${arg}`);

  console.log(`Hello, ${userName}!`);
};
//= end Brain games


export const randomNumber = () => Math.round(Math.random() * 100);

export const askToUser = (arg) => {
  console.log(`Question: ${arg}`);

  return arg;
};

export const userAnswer = () => readlineSync.question('Your answer? ');

export const startGame = (checkFunc, levelsCount) => {
  let count = 0;

  while (count < levelsCount) {
    if (checkFunc()) {
      count += 1;
    } else break;
  }

  if (count === levelsCount) {
    console.log(`Congratulations, ${userName}!`);
  }
};
