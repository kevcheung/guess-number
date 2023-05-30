'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'You Win!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secret;

const changeMessage = function(message){
    document.querySelector('.message').textContent = message;
}

const changeNumber = function(number){
    document.querySelector('.number').textContent = number;
}

const changeScore = function(score){
    document.querySelector('.score').textContent = score;
}

document.querySelector('.again').addEventListener('click', function(){
    secret = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    changeMessage('Start guessing...');
    changeNumber('?');
    changeScore(20);
    // document.querySelector('.message').textContent = 'Start guessing...';
    // document.querySelector('.number').textContent = '?';
    // document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = '#084f59';
    document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //NO INPUT
    if(!guess){
        changeMessage('No number specified');
        // document.querySelector('.message').textContent = 'No number specified';

    //PLAYER WINS
    }else if(guess === secret){
        changeMessage('You win!');
        changeNumber(secret);
        // document.querySelector('.message').textContent = 'You win!';
        // document.querySelector('.number').textContent = secret;
        document.querySelector('body').style.backgroundColor = '#60b347';
        if(highscore < score){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    //GUESS DOES NOT MATCH SECRET NUMBER
    }else if(guess !== secret){
        if(score > 1){
            changeMessage(guess > secret ? 'Too high!' : 'Too low!');
            // document.querySelector('.message').textContent = guess > secret ? 'Too high!' : 'Too low!';
            score--;
            changeScore(score);
            // document.querySelector('.score').textContent = score;
        }else{
            changeMessage('GAME OVER!');
            changeNumber(secret);
            changeScore(0);
            // document.querySelector('.message').textContent = 'GAME OVER!';
            // document.querySelector('.number').textContent = secret;
            // document.querySelector('.score').textContent = 0;
        }
    }


    //GUESS TOO HIGH
    // }else if(guess > secret){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = 'GAME OVER!';
    //         document.querySelector('.number').textContent = secret;
    //         document.querySelector('.score').textContent = 0;
    //     }

    // //GUESS TOO LOW
    // }else if(guess < secret){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = 'GAME OVER!';document.querySelector('.number').textContent = secret;
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }


});