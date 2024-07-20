//declaring various needed variables
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
//generating a random number for the computer
const randomNumber = Math.floor(Math.random() * 100) + 1;
//condition to be tested and action to be done in each case
guessButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    if (userGuess === randomNumber) {
        message.textContent = 'Congratulations! You guessed the correct number!';
    } else if (userGuess > randomNumber) {
        message.textContent = 'Too high! Try again.';
    } else {
        message.textContent = 'Too low! Try again.';
    }
  
});

