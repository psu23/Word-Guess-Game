var words = ["eraserhead", "theelephantman", "bluevelvet", "wildatheart", "twinpeaks", "losthighway", "mulhollanddrive", "inlandempire"];

var randomWord = "";
var lettersOfWord = [];
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

var wins = 0;
var losses = 0;
var guessesRemaining = 9;


function Game(){

    randomWord = words[Math.floor(Math.random() * words.length)];

    lettersOfWord = randomWord.split("");//this method splits the word into arrays of each letter

    blanks = lettersOfWord.length;

    for (i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");//this will show blanks in the text shown to the user
    }

    // console.log(randomWord);
    // console.log(lettersOfWord);
    // console.log(blanks);
    // console.log(blanksAndCorrect);

}

//PICTURE AND AUDIO
var eraserhead = document.getElementById("eraserhead");
var theelephantman = document.getElementById("theelephantman");
var bluevelvet = document.getElementById("bluevelvet");
var wildatheart = document.getElementById("wildatheart");
var twinpeaks = document.getElementById("twinpeaks");
var losthighway = document.getElementById("losthighway");
var mulhollanddrive = document.getElementById("mulhollanddrive");
var inlandempire = document.getElementById("inlandempire");

//This function is called when user gets a title correct
function aud() {

    if (randomWord === words[0]) {
        eraserhead.play();
        theelephantman.pause();
        bluevelvet.pause();
        wildatheart.pause();
        twinpeaks.pause();
        losthighway.pause();
        mulhollanddrive.pause();
        inlandempire.pause();
        document.getElementById("image").src = "assets/images/eraserhead.jpg";
    }

    else if (randomWord === words[1]) {
        eraserhead.pause();
        theelephantman.play();
        bluevelvet.pause();
        wildatheart.pause();
        twinpeaks.pause();
        losthighway.pause();
        mulhollanddrive.pause();
        inlandempire.pause();
        document.getElementById("image").src = "assets/images/theelephantman.jpg";
    }

    else if (randomWord === words[2]) {
        eraserhead.pause();
        theelephantman.pause();
        bluevelvet.play();
        wildatheart.pause();
        twinpeaks.pause();
        losthighway.pause();
        mulhollanddrive.pause();
        inlandempire.pause();
        document.getElementById("image").src = "assets/images/bluevelvet.jpg";
    }

    else if (randomWord === words[3]) {
        eraserhead.pause();
        theelephantman.pause();
        bluevelvet.pause();
        wildatheart.play();
        twinpeaks.pause();
        losthighway.pause();
        mulhollanddrive.pause();
        inlandempire.pause();
        document.getElementById("image").src = "assets/images/wildatheart.jpg";
    }

    else if (randomWord === words[4]) {
        eraserhead.pause();
        theelephantman.pause();
        bluevelvet.pause();
        wildatheart.pause();
        twinpeaks.play();
        losthighway.pause();
        mulhollanddrive.pause();
        inlandempire.pause();
        document.getElementById("image").src = "assets/images/twinpeaks.jpg";
    }

    else if (randomWord === words[5]) {
        eraserhead.pause();
        theelephantman.pause();
        bluevelvet.pause();
        wildatheart.pause();
        twinpeaks.pause();
        losthighway.play();
        mulhollanddrive.pause();
        inlandempire.pause();
        document.getElementById("image").src = "assets/images/losthighway.jpg";
    }

    else if (randomWord === words[6]) {
        eraserhead.pause();
        theelephantman.pause();
        bluevelvet.pause();
        wildatheart.pause();
        twinpeaks.pause();
        losthighway.pause();
        mulhollanddrive.play();
        inlandempire.pause();
        document.getElementById("image").src = "assets/images/mulhollanddrive.jpg";
    }

    else if (randomWord === words[7]) {
        eraserhead.pause();
        theelephantman.pause();
        bluevelvet.pause();
        wildatheart.pause();
        twinpeaks.pause();
        losthighway.pause();
        mulhollanddrive.pause();
        inlandempire.play();
        document.getElementById("image").src = "assets/images/inlandempire.jpg";
    }
}

function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game();
}

function checkLetters(letter) {//checks for each letter entered, if it exists in the array
    var letterInWord = false;
    for (i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }

    if(letterInWord) {
        for (i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }

    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    // console.log(blanksAndCorrect);

}

function complete() {//defines if and when the user wins a round
    // console.log("wins: " + wins + " losses: " + losses + " guesses remaining: " + guessesRemaining);

    
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        aud();
        reset();
        document.getElementById("winstracker").innerHTML = " " + wins;
    }

    else if (guessesRemaining === 0) {
        losses++;
        reset();
        document.getElementById("image").src = "./assets/images/try-again.png";
        document.getElementById("losstracker").innerHTML = " " + losses;
    }

    document.getElementById("currentword").innerHTML = " " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;

}

Game();
complete();

document.onkeyup = function(e) {
    var guesses = String.fromCharCode(e.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    // console.log(guesses);
    document.getElementById("playerguesses").innerHTML = " " + wrongGuess.join(" ");
}