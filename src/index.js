import readlineSync from 'readline-sync';


const userName = readlineSync.question('May I have your name? ');

const userWelcome = () => console.log(`Hello, ${userName}`);

export default userWelcome;
