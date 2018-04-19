import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');


//= Brain games

const userName = readlineSync.question('May I have your name? ');

export const userWelcome = () => console.log(`Hello, ${userName}!`);

//= end Brain games


//= Brain-even

const randomNumber  = () => Math.round(Math.random() * 100);

const questToUser = function(arg) {

    console.log(`Question: ${arg}`);

    return arg;
}

const userAnswer = () => readlineSync.question('Your answer? ');

const checkUsrAns = function () {

    let quest = questToUser(randomNumber());
    let ans = userAnswer();


    if(ans !== 'yes' && ans !== 'no') {
        console.log(`${ans} is wrong answer ;(. Correct answers are 'no' or 'yes'.
Let's try again, ${userName}!`);

        return false;
    };

    if(!(quest%2) && ans == 'yes') {

        console.log('Correct!');

        return true;
    } else if(quest%2 && ans == 'no') {

        console.log('Correct!');

        return true;
    } else if(quest%2 && ans == 'yes') {

        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${userName}!`);

        return false;
    } else if(!(quest%2) && ans == 'no') {

        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
Let's try again, ${userName}!`);

        return false;
    };

}


export const brainEven = function() {

    let count = 0;

    while(count < 3) {

        if(checkUsrAns()) {
            count++
        } else break;

    }

    if(count === 3) {
        console.log(`Congratulations, ${userName}!`);
    }

};

//= end Brain even
