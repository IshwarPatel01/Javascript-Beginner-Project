// Define the URL for the Cat API
const url = 'https://api.thecatapi.com/v1/images/search';

// Get references to the DOM elements
const button = document.querySelector('.btn');
const container = document.querySelector('.container');

// Add event listener to the button
button.addEventListener('click', getRandomCat);

// Function to fetch a random cat image
function getRandomCat() {
  // Fetch a random cat image from the API
  fetch(url)
    .then(response => response.json())  // Parse the response as JSON
    .then(data => {
      // Get the URL of the image from the API response
      const imageUrl = data[0].url;
      
      // Create an <img> element and set its source to the fetched image URL
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = 'Random Cat';
      
      // Clear the container before adding the new image
      container.innerHTML = '';
      
      // Append the new image to the container
      container.appendChild(img);
    })
    .catch(error => {
      // Handle errors if the fetch request fails
      container.innerHTML = 'Sorry, there was an error fetching the cat image.';
      console.error(error);
    });
}
