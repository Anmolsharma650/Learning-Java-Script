const form = document.querySelector('.inputcontainer');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    if (isNaN(height) || height <= 0) {
        result.innerHTML = "❌ Please provide a valid height And weight!";
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "❌ Please provide a valid weight!";
        return;
    }
    if (isNaN(height) || isNaN(weight)) {
        result.innerHTML = "❌ Provide information to calculate BMI";
        return;
    }

    // BMI Calculation
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    result.innerHTML = ` Your BMI is <b>${bmi}</b>`;

    if (bmi > 30) {
        result.innerHTML += " (🐖Obesity)";
    } else if (bmi > 25) {
        result.innerHTML += " (❌Overweight)";
    } else if (bmi > 18.5) {
        result.innerHTML += " (✅Normal)";
    } else {
        result.innerHTML += " (☠️Underweight)";
    }
});
