function numberGuessingGame() {
  let startGame = true;

  while (startGame) {
    // Step 1: Generate a random number between 0 and 10
    const randomNumber = Math.floor(Math.random() * 11);

    // Step 2: Prompt the user to guess the number
    let userGuessInput = prompt("Guess a number between 0 and 10:");

    // Step 3: Validate user input
    while (isNaN(userGuessInput) || userGuessInput < 0 || userGuessInput > 10) {
      userGuessInput = prompt(
        "Invalid input. Please guess a number between 0 and 10:"
      );
    }

    // Convert the user input to a number
    userGuessInput = Number(userGuessInput);

    // Step 4: Compare and give feedback
    if (userGuessInput === randomNumber) {
      alert("Congratulations! You guessed the correct number.");
    } else {
      alert(`Sorry, the correct number was ${randomNumber}.`);
    }

    // Step 5: Ask if the user wants to play again
    const replayGame = prompt(
      "Do you want to play again? (yes/no):"
    ).toLowerCase();
    if (replayGame !== "yes") {
      startGame = false;
      alert("Thank you for playing!");
    }
  }
}

// Attach event listener to the button to start the game
document
  .getElementById("startGameButton")
  .addEventListener("click", numberGuessingGame);
