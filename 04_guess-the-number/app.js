const guessInput = document.getElementById("guess");
const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");
const resultDisplay = document.getElementById("result");
const guessesList = document.getElementById("guesses");

let secretNumber = Math.floor(Math.random() * 100) + 1;
let remainingChances = 10;
let guesses = [];

// Function to reset the game
function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    remainingChances = 10;
    guesses = [];
    resultDisplay.textContent = "";
    guessesList.innerHTML = "";
    guessInput.value = "";
    guessInput.disabled = false;
    submitBtn.disabled = false;
    resetBtn.style.display = "none";
}

// Function to process a user's guess
function processGuess() {
    let userGuess = guessInput.value;

    // Validate input
    if (!userGuess) {
        resultDisplay.textContent = "Please enter a number!";
        return;
    }

    userGuess = parseInt(userGuess, 10); // Convert to an integer

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultDisplay.textContent = "Please enter a valid number between 1 and 100!";
        return;
    }

    if (!Number.isInteger(userGuess)) {
        resultDisplay.textContent = "Please enter a whole number!";
        return;
    }

    if (guesses.includes(userGuess)) {
        resultDisplay.textContent = `You already guessed ${userGuess}. Try a different number.`;
        return;
    }

    // Process valid guess
    guesses.push(userGuess);
    remainingChances--;
    guessesList.innerHTML += `<li>Guess: ${userGuess}</li>`;
    guessInput.value = ""; // Clear input field

    if (userGuess === secretNumber) {
        resultDisplay.textContent = `🎉 Congratulations! You guessed the number ${secretNumber}!`;
        guessInput.disabled = true;
        submitBtn.disabled = true;
        resetBtn.style.display = "block";
    } else if (remainingChances === 0) {
        resultDisplay.textContent = `😢 Sorry! You've used all your chances. The number was: ${secretNumber}`;
        guessInput.disabled = true;
        submitBtn.disabled = true;
        resetBtn.style.display = "block";
    } else {
        const hint = userGuess > secretNumber ? "Try a smaller number!" : "Try a larger number!";
        resultDisplay.textContent = `❌ Wrong guess! ${hint} Remaining chances: ${remainingChances}`;
    }
}

// Event listeners
submitBtn.addEventListener("click", processGuess);
resetBtn.addEventListener("click", resetGame);

// Prevent "Enter" key from restarting the game
document.getElementById("game-form").addEventListener("submit", (event) => {
    event.preventDefault();
});

// Handle "Enter" key for submitting guesses
document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        submitBtn.click();
    }
});