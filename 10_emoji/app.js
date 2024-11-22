const emojiDiv = document.querySelector("#emoji");
const emojis = [
  "😆", "😅", "🤣", "😂", "😀", "🤑", "🤨", "🙂", "😊",
  "😗", "😛", "😏", "🤥", "😴", "🥺", "😧", "😇", "😳",
  "🙃", "🥴", "🧐", "🤨", "😒", "🤔", "🤭", "🥰", "🤐",
  "👀", "🤔", "🤪", "🥲", "😃", "😁", "😬"
];

// Function to generate a random emoji
const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

// Event listeners for hover behavior
emojiDiv.addEventListener("mouseenter", () => {
  emojiDiv.textContent = getRandomEmoji(); // Change to a random emoji
  emojiDiv.classList.remove("grayscale"); // Remove grayscale effect
});

emojiDiv.addEventListener("mouseleave", () => {
  emojiDiv.classList.add("grayscale"); // Apply grayscale effect
});
