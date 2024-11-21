let secretNumber;
let chances;
let guesses;

// Function to reset the game
function resetGame() {
    // Reset the game state
    secretNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    chances = 10; // Number of chances
    guesses = []; // To keep track of all guesses made
    
    // Reset the UI elements
    document.getElementById("guess").value = ''; // Clear input field
    document.getElementById("result").textContent = ''; // Clear result message
    document.getElementById("remaining-chances").textContent = 'Remaining chances: 10'; // Reset remaining chances
    document.getElementById("guess-list").innerHTML = ''; // Clear the guess list
    document.getElementById("reset").style.display = "none"; // Hide the restart button
    document.getElementById("submit").style.display = "inline"; // Show the submit button again
}

// Initialize the game state
resetGame();

let submitBtn = document.getElementById("submit");
let resetBtn = document.getElementById("reset");

submitBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission on button click

    let guess = parseInt(document.getElementById("guess").value); // Get the user's guess
    let resultElement = document.getElementById("result");
    let remainingChancesElement = document.getElementById("remaining-chances");
    let guessListElement = document.getElementById("guess-list");

    // Check if guess is valid
    if (isNaN(guess) || guess < 1 || guess > 100) {
        resultElement.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    // Add the guess to the guesses array
    guesses.push(guess);

    // Clear the input field after submitting a guess
    document.getElementById("guess").value = ''; 

    // Check if the user has already won before reducing the chances
    if (guess === secretNumber) {
        resultElement.textContent = `Congratulations! You've guessed the number ${secretNumber} correctly!`;
        submitBtn.style.display = "none"; // Hide the submit button after winning
        resetBtn.style.display = "inline"; // Show the restart button
        return; // Exit the function if the game is won
    }

    // Decrease the remaining chances only after checking if the guess is correct
    if (chances > 0) {
        chances--; // Decrease remaining chances

        if (guess < secretNumber) {
            resultElement.textContent = "Too low! Try again.";
        } else {
            resultElement.textContent = "Too high! Try again.";
        }

        // Update the remaining chances
        remainingChancesElement.textContent = `Remaining chances: ${chances}`;

        // Display all guesses made so far
        guessListElement.innerHTML = ''; // Clear the list before displaying new guesses
        guesses.forEach(function(g) {
            let li = document.createElement("li");
            li.textContent = `Guess: ${g}`;
            guessListElement.appendChild(li);
        });

        // If out of chances
        if (chances === 0) {
            resultElement.textContent = `Sorry! You've used all your chances. The number was: ${secretNumber}`;
            submitBtn.style.display = "none"; // Hide the submit button after game over
            resetBtn.style.display = "inline"; // Show the restart button
        }
    }
});

// Restart the game when the reset button is clicked
resetBtn.addEventListener("click", function() {
    resetGame(); // Reset the game state and UI
});

// Prevent form submission or page reload when "Enter" is pressed
document.getElementById("guessForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
});

// Prevent "Enter" keypress from submitting the form
document.getElementById("guess").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default "Enter" key behavior (form submission)
        if (chances > 0) {
            submitBtn.click(); // Trigger the button click handler manually if the game is ongoing
        }
    }
});
