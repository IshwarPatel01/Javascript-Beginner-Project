let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");

let intervalId; // Variable to store the interval ID

startBtn.addEventListener("click", () => {
    // Start changing colors only if no interval is running
    if (!intervalId) {
        intervalId = setInterval(() => {
            let hex = "ABCDEF1234567890";
            let hexCode = "#";
            for (let i = 0; i < 6; i++) {
                let rn = Math.floor(Math.random() * 16);
                hexCode += hex[rn];
            }
            document.body.style.backgroundColor = hexCode;
        }, 500); // Change color every 500ms (adjust as needed)
    }
});

stopBtn.addEventListener("click", () => {
    clearInterval(intervalId); // Stop the interval
    intervalId = null; // Reset the interval ID
});
