
// 1. add btn id
// 2. create func change color
// 3. add 2 variable 1 hex and 2 #
// add loop and change color
// add to web bg  


const changeColorBtn = document.getElementById("btn");
const colorCodeDisplay = document.getElementById("color-code");

function changeColor() {
    let hexCharacters = "ABCDEF0123456789";
    let hexColorCode = "#";

    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16); // Generate index 0-15
        hexColorCode += hexCharacters[randomIndex];
    }

    document.body.style.backgroundColor = hexColorCode; // Update background color
    colorCodeDisplay.textContent = hexColorCode; // Display the hex code if required
}

changeColorBtn.addEventListener("click", changeColor);
