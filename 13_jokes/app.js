// Define the URL for the Chuck Norris jokes API
const url = 'https://api.chucknorris.io/jokes/random';

// Get references to DOM elements
const jokeDisplay = document.getElementById('display-joke');
const jokeButton = document.getElementById('getJoke');

// Add event listener to the button
jokeButton.addEventListener('click', getJoke);

// Function to fetch a random joke
function getJoke() {
  // Fetch a random joke from the API
  fetch(url)
    .then(response => response.json()) // Convert response to JSON
    .then(data => {
      // Update the joke display with the fetched joke
      jokeDisplay.textContent = data.value;
    })
    .catch(error => {
      // Handle any errors (e.g., network issues)
      jokeDisplay.textContent = 'Sorry, there was an error fetching the joke.';
      console.error(error);
    });
}
