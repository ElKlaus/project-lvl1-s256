import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const userName = () => readlineSync.question('May I have your name? ');

export const userWelcome = () => console.log(`Hello, ${userName()}!`);


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


    //console.log(quest, ans);

    if(ans !== 'yes' && ans !== 'no') {
        console.log('Wrong answer');

        return false;
    };

    if(!(quest%2) && ans == 'yes') {

      return true;
    } else if(quest%2 && ans == 'no') {

      return true;
    } else if(quest%2 && ans == 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
      Let's try again, Bill!`);

      return false;
    };

}


const brainEven = function() {

    let count = 0;

     while(count < 3) {

         if(checkUsrAns()) {
             count++
         } else break;
     }

}


brainEven();

//questToUser();
