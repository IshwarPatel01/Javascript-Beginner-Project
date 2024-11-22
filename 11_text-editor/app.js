// Select DOM elements
const inputField = document.querySelector("#input-field");
const outputField = document.querySelector("#output-field");

const uppercaseBtn = document.querySelector(".uppercase");
const lowercaseBtn = document.querySelector(".lowercase");
const capitalizeBtn = document.querySelector(".capitalize");
const boldBtn = document.querySelector(".bold");
const italicBtn = document.querySelector(".italic");
const underlineBtn = document.querySelector(".underline");

// Update the output field with current input value
inputField.addEventListener("input", () => {
  outputField.textContent = inputField.value;
});

// Add functionality to buttons
uppercaseBtn.addEventListener("click", () => {
  outputField.textContent = inputField.value.toUpperCase();
});

lowercaseBtn.addEventListener("click", () => {
  outputField.textContent = inputField.value.toLowerCase();
});

capitalizeBtn.addEventListener("click", () => {
  outputField.textContent = inputField.value
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
});

boldBtn.addEventListener("click", () => {
  outputField.style.fontWeight =
    outputField.style.fontWeight === "bold" ? "normal" : "bold";
});

italicBtn.addEventListener("click", () => {
  outputField.style.fontStyle =
    outputField.style.fontStyle === "italic" ? "normal" : "italic";
});

underlineBtn.addEventListener("click", () => {
  outputField.style.textDecoration =
    outputField.style.textDecoration === "underline" ? "none" : "underline";
});
