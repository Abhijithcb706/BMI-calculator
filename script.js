function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    document.getElementById("result").textContent =
      "Please enter valid values for weight and height.";
    return;
  }
  const bmi = weight / ((height / 100) ** 2);
  const resultElement = document.getElementById("result");
  resultElement.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
  if (bmi < 18.5) {
    resultElement.innerHTML += " (Underweight)";
    resultElement.style.color = "orange";
    
  } else if (bmi >= 18.5 && bmi < 24.9) {
    resultElement.innerHTML += " (Normal Weight)";
    resultElement.style.color = "green";
  } else if (bmi >= 25 && bmi < 29.9) {
    resultElement.innerHTML += " (Overweight)";
    resultElement.style.color = "red";
  } else {
    resultElement.innerHTML += " (Obese)";
    resultElement.style.color = "black";
  }
}
