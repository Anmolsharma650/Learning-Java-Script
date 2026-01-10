
let randomNumber = (parseInt(Math.random() * 100 + 1));

const guessField = document.querySelector('#guess-field');
const userInput = document.querySelector('#btn');
const guessslote = document.querySelector('.guesses');
const RemaningGuesses = document.querySelector('.remaining');
const lowerHigh = document.querySelector('.lowerHi');
const startOver = document.querySelector('.form');


const p = document.createElement("p")

let previousGuesses = [];
let numGuesses = 1;

let playingGame = true;
if (playingGame) {
    userInput.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(guessField.value);
        console.log(guess);

        velidationCheck(guess);
    });
}
function velidationCheck(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1 || guess > 100) {
        alert('Please enter a number between 1 and 100');
    } else {
        previousGuesses.push(guess);
        displayGuess(guess);
        checkGuess(guess);
    }

}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('🎉 Congratulations! You guessed the right number');
        endGame();
    } else if (numGuesses === 10) {
        displayMessage(`❌ Game Over! The number was ${randomNumber}`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage('📉 Your guess is too low!');
    } else if (guess > randomNumber) {
        displayMessage('📈 Your guess is too high!');
    }
}

function displayGuess(message) {
    userInput.value = '';
    guessslote.innerHTML += `${message}, `;
    RemaningGuesses.innerHTML = 10 - numGuesses;
    numGuesses++;
}
function displayMessage(message) {
    lowerHigh.innerHTML = `<p>${message}</p>`;
}



function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<button id="newgame" class=" bg-green-500  border-2 text-black font-bold py-2 px-2 mt-2 rounded">Start New Game</button>`;
    startOver.appendChild(p);
    playingGame = false;
    resetGame();

}
function resetGame() {
    const newgame = document.querySelector('#newgame');
    newgame.addEventListener('click', function () {  guessslote.innerHTML = '';
    RemaningGuesses.innerHTML = '10';
    lowerHigh.innerHTML = '';
    numGuesses = 1;
    previousGuesses = [];
    playingGame = true;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    randomNumber = parseInt(Math.random() * 100 + 1);   

});
}