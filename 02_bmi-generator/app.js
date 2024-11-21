function bmiCalculator(height, weight) {
    // Convert height from cm to meters
    height = height / 100;  // Convert cm to meters

    // Calculate BMI
    let bmi = weight / (height * height);

    // Return the appropriate BMI category
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 24.9) {
        return "Normal weight";
    } else if (bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese"; // If BMI is 30 or higher
    }
}

let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get weight and height values from the input fields
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    // Log values to check what the user entered
    console.log("Weight:", weight, "Height:", height);

    // Check if the user has entered valid values
    if (isNaN(weight) || isNaN(height)) {
        document.getElementById("result").textContent = "Please enter valid numbers for both weight and height.";
        return;
    }

    // Call the BMI calculator and get the result
    let result = bmiCalculator(height, weight);

    // Log the result to verify it's being calculated
    console.log("BMI Category:", result);

    // Display the result in the element with ID 'result' using template literals
    document.getElementById("result").textContent = `Your BMI category is: ${result}`;
});
