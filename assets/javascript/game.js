
    // Creates an array that lists out all of the options (the abc).
    var computerChoices = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var attempts = 10;
    var usedArray = [];

    // Create variables that hold references to the places in the HTML where we want to display things.
    var directionsText = document.getElementById("directions-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var attemptsText = document.getElementById("attempts-text");
    var usedArrayText = document.getElementById("usedArray-text");

        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        attemptsText.textContent = "guesses left: " + attempts;
        usedArrayText.textContent = "guesses used: " + usedArray;


    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;
      

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // Reworked our code from last step to use "else if" instead of lots of if statements.

      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
      
      
    //   for(attempts === 10; attempts<10; attempts--){
        
        if (userGuess !== computerGuess) {
          
          usedArray.push(event.key);
          attempts--;
          
          
        }
        // if (attempts === 0) {
        //     losses++;
        //     attempts = 10;
        //     usedArray = [];
        // }
        else if ( userGuess === computerGuess){
            wins++;
            attempts = 10;
            usedArray = [];

        }
        if (attempts === 0) {
            losses++;
            attempts = 10;
            usedArray = [];
        }
        
        // for (attempts = 0,) {
        //     losses++;
        // }

        // else {
        //     losses++;
        // }
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        attemptsText.textContent = "guesses left: " + attempts;
        usedArrayText.textContent = "guesses used: " + usedArray;      
      }
    
      
      
     
      
      
      
      
    //   || (userGuess === "p") || (userGuess === "s")) {

    //     if ((userGuess === "r" && computerGuess === "s") ||
    //       (userGuess === "s" && computerGuess === "p") || 
    //       (userGuess === "p" && computerGuess === "r")) {
    //       wins++;
    //     } else if (userGuess === computerGuess) {
    //       ties++;
    //     } else {
    //       losses++;
    //     }

        // Hide the directions
        // directionsText.textContent = "";

        // Display the user and computer guesses, and wins/losses/ties.

      
    
