var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var guessedLetters = [];
var letterToGuess = null;
var guessesLeft = 9;
var wins = 0;
var losses = 0;

var updateGuessesLeft = function() {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLettersToGuess = function() {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessesSoFar = function() {
    document.querySelector("#guesses").innerHTML = guessedLetters.join(", ");
};

//create function to reset everything
var reset = function() {
    guessesLeft = 9;
    guessedLetters = [];
    updateGuessesLeft();
    updateLettersToGuess();
    updateGuessesSoFar();
};

//calls functions on page load
updateGuessesLeft();
updateLettersToGuess();

document.onkeyup = function(event) {
    guessesLeft--;
    var userLetter = event.key.toLowerCase();
    guessedLetters.push(userLetter);

    updateGuessesLeft();
    updateGuessesSoFar();

    if (guessesLeft === letterToGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        reset();
    }

    if (guessesLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        reset();
    }
}
