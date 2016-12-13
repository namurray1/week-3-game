    // Game variables

    var totalGuesses = 10;
    var guessesLeft = 10;
    var guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
    
 
 
 //Event Listener

      document.onkeyup = function(event) {
      guessesLeft--;
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
 
      guessedLetters.push(userGuess);
      updateGuessesLeft();
      updateGuessesSoFar();
        
         if (guessesLeft > 0){
              if (userGuess === letterToGuess){
                  wins++;
                  document.getElementById("#wins").innerHTML = "Wins: " + wins;
                  alert("Yes, the letter was " + computerGuess.toUpperCase());
                  alert("Correct! The Force is Strong with THIS one!");
                  reset();
              }

          }else if(guessesLeft !== 0){
              // Player is incorrect

              losses++;
              document.getElementById("#losses").innerHTML = "Losses: " + losses;
             alert("Your guess was too low. There is no try. Either do or DO NOT." + computerGuess.toUpperCase() + " Again, you try...");
             
              
              // Then we'll call the reset. 
              reset();
          }
 };
