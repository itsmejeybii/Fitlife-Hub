function calculateBMI() {
  let w = document.getElementById("weight").value;
  let h = document.getElementById("height").value / 100;

  if (!w || !h) return;

  let bmi = (w / (h * h)).toFixed(1);

  let status = "Normal";
  if (bmi < 18.5) status = "Underweight";
  else if (bmi > 24.9) status = "Overweight";

  document.getElementById("bmiValue").innerText = bmi;
  document.getElementById("bmiResult").innerText =
    "BMI: " + bmi + " (" + status + ")";
}

function addFood() {
  let list = document.getElementById("foodList");

  let item = document.createElement("li");
  item.innerText = "New Meal - 120 kcal";

  list.appendChild(item);
}
