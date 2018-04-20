import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

//= Brain games

export const userName = readlineSync.question('May I have your name? ');

export const userWelcome = () => console.log(`Hello, ${userName}!`);

//= end Brain games
