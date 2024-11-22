// Select the progress element
const progressBar = document.querySelector(".scroll-indicator .progress");

window.addEventListener("scroll", () => {
  // Calculate the total scrollable height
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  // Get the current scroll position
  const scrolled = window.scrollY;
  // Calculate the scroll progress as a percentage
  const scrollPercentage = (scrolled / scrollableHeight) * 100;
  // Update the width of the progress bar
  progressBar.style.width = `${scrollPercentage}%`;
});
