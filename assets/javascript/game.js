//jslint browser: true, passfail: false, white: true 

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //is the array for the letters

var randomLetter = Math.floor(Math.random() * letters.length - 1);

var numberGuesses = 0; //holds the number of guesses made by the player

var letterToGuess = letters[randomLetter]; // holds the random letter to be guessed

//var higherOrLower = " "; // holds the text for higher or lower relative to the user's guess

//var lettersGuessed =" "; // holds the current set of letters the player has guessed up to 10

var computersPick = [letterToGuess.length];

var gameOver = false; //set to false until the player wins game 
      document.onkeyup = function(event) {
      guessesLeft--;
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

for(var i = 0; i < letterToGuess.length; i++) {

  computersPick[i]="_";
}

for (var i = 0; i < computersPick.length; i++)

{

  var userGuess = document.getElementById("YG");
  var newLetter = document.createTextNode(computersPick[i]);
  userGuess.appendChild(newLetter);
}

  document.onkeyup = function(event) 

  {

  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  console.log(letter);

  for(var i=0; i < computersPick; i++)

  {

    if(letterToGuess === computersPick[i])
    {

      computersPick
    }


  }

};







//Game setup

/*function initGame() {
  var randomLetter = Math.floor(Math.random() * letters.length);
  letterToGuess = letters[letterIndex];
  guesses = 0;
  lettersGuessed = [];
  gameOver = false;
  window.addEventListener("keyup", eventKeyPressed, true);
  drawScreen();
}

var letterPressed = String.fromCharCode(e.keyCode);
letterPressed = letterPressed.toLowercase();
guesses++;
lettersGuessed.push(letterPressed);
if(letterPressed === letterToGuess) {
  gameOver = true;
}
*/





//for (var i = 0; i < randomLetter.length; i++)  //picks a random letter from a - z
//console.log(randomLetter);

// Variable for game information. 
//var userGuess = [];
//var totalGuesses = 0;

//input and output fields

//var playerInput = document.getElementById("#input");
//var output = document.getElementById("#YG");

// This is the fuction that runs the game.

/*function Main()
{
  totalGuesses = totalGuesses +=1;
  userGuess = parseInt(input.value);

  if(userGuess > randomLetter)

    { 
      output.innerHTML = "Your Guess was too high, Padawan! You have made " + totalGuesses + " guesses";

    }

    else if (userGuess < randomLetter)

    {
      output.innerHTML = "Your guess was too low. There is no try. Either do or DO NOT. You have made " + totalGuesses + " guesses" ;
    
    }
    else if(userGuess === randomLetter)

    {

      output.innerHTML = "Correct! The Force is Strong with THIS one!";
    } 
}

if(totalGuesses >=10){
  playerButton.disabled=false;
  output.innerHTML="You have used your 10 guesses, Young One. Yes, you must go back to training. The letter is " + randomLetter; playerButton.disabled=true;

}
*/


/*var playerGuess;
var totalGuesses=0;
var randomLetter = Math.floor(Math.random() * randomLetter.length)+1; //picks a random letter from a - z
var userInput=document.getElementById("input");
var userOutput=document.getElementById("output");
var button=document.getElementById("guess");

//Check to see if the player is greater or less than the randomLetter

if(playerGuess > randomLetter) {
  userOutput.innerHTML = "Your Guess was too high, Padawan!";
} else if(playerGuess < randomLetter)

{userOutput.innerHTML="Your guess was too low. There is no try. Either do or DO NOT.";

}
else if(playerGuess === randomLetter) {

  userOutput.innerHTML = "Correct! The Force is Strong with THIS one!";
  }

}}
//button.addEventListener("click",playGame,false);
*/
/*var letterIndex = options[Math.floor(Math.random() * letters.length)];
console.log(computerGuess);
var guesses array = [];
*/

