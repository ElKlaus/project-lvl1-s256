import readlineSync from 'readline-sync';

const actual = readlineSync.question('May I have your name? ');

const printWelcom = () => console.log(`Hello, ${actual}`);

export default printWelcom;
