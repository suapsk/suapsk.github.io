// BMI Calculator

function calcBmi() {
    const locate = document.getElementById("bmiPrint");
    const value19 = document.getElementById("uid_19").value;
    const value21 = document.getElementById("uid_21").value;
    const height = value21 / 100;
    const sqrt = height * height;
    const bmi = value19 / sqrt;
    locate.innerHTML = "BMI: " + bmi.toFixed(3);
}

