// Game Values
let min = 1,
    max=10,
    winningNum= Math.floor(Math.random() * (max-min+1)+min),
    guessesLeft = 3;
    console.log(winningNum)

//UI elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play Again event listner
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

// listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    //validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    }

    //check if won
    if(guess === winningNum){
        // Game Over - Won
        gameOver(true, `${winningNum} is correct, YOU WON!`)
    }else {
        // if Wrong input
        guessesLeft -= 1;

        if(guessesLeft === 0){
            // Game Over - lost
            gameOver(false, `Game Over, You lost. The correct number was ${winningNum}`)
        }else{
            // Guess continues - answer wrong.
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
        }
    }
});

// Game Over

function gameOver(won, msg){
    let color;
    won === true ? color= 'green' : color ='red'

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg, color)

    //Play again?
    guessBtn.value = 'PLAY AGAIN';
    guessBtn.className += 'play-again'
}

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}