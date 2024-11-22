const typedTextElement = document.querySelector(".typed-text");
const cursorElement = document.querySelector(".cursor");

// Texts to type out
const texts = ["fun", "powerful", "awesome", "versatile"];
const typingSpeed = 150; // Typing speed in milliseconds
const erasingSpeed = 100; // Erasing speed in milliseconds
const delayBetweenTexts = 1000; // Delay before typing the next word

let textIndex = 0; // Index of the current text
let charIndex = 0; // Index of the current character

// Typing function
function type() {
  if (charIndex < texts[textIndex].length) {
    typedTextElement.textContent += texts[textIndex][charIndex];
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenTexts);
  }
}

// Erasing function
function erase() {
  if (charIndex > 0) {
    typedTextElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    textIndex = (textIndex + 1) % texts.length; // Move to the next text
    setTimeout(type, typingSpeed);
  }
}

// Blinking cursor
function blinkCursor() {
  cursorElement.classList.toggle("active");
}
setInterval(blinkCursor, 500); // Cursor blinks every 500ms

// Start typing effect
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, delayBetweenTexts);
});
