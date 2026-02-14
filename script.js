let numberToGuess = Math.round(Math.random() * 100);
let tries = 0;

function guessTheNumber() {
    tries = tries + 1;
    displayTries.innerHTML = 'Tries: ' + tries;

    if(numberToGuess == myNumber.value) {
        headline.innerHTML = 'You won!!! 🥳🎉';
        let jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
    }
    
    if(numberToGuess > myNumber.value) {
        headline.innerHTML = 'The number is bigger!';
    }

    if(numberToGuess < myNumber.value) {
        headline.innerHTML = 'The number is smaller!';
    }
    myNumber.value = '';
}