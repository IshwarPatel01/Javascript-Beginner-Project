// Get DOM elements
const userInput = document.getElementById('user-input');
const userCard = document.getElementById('user-card');

// Debounce function to limit API calls
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Function to fetch random user data from API
async function fetchUserData(query) {
  if (!query) {
    userCard.innerHTML = '';
    return;
  }

  try {
    // Call the RandomUser API to get a random user
    const response = await fetch(`https://randomuser.me/api/`);
    const data = await response.json();
    const user = data.results[0];

    // Display user data
    displayUserCard(user);
  } catch (error) {
    userCard.innerHTML = 'Error fetching user data';
    console.error(error);
  }
}

// Function to display the user card
function displayUserCard(user) {
  // Create user card HTML
  const cardHTML = `
    <div class="card">
      <img src="${user.picture.medium}" alt="${user.name.first} ${user.name.last}" />
      <div class="info">
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>Email: ${user.email}</p>
        <p>Location: ${user.location.city}, ${user.location.country}</p>
        <p>Phone: ${user.phone}</p>
      </div>
    </div>
  `;
  
  // Insert the card into the user-card container
  userCard.innerHTML = cardHTML;
}

// Attach the debounced function to the input event
userInput.addEventListener('input', debounce(function (e) {
  fetchUserData(e.target.value);
}, 500)); // 500ms delay after user stops typing
