const subBtn = document.getElementById("sub-btn");
subBtn.addEventListener("click", () => {
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  if (weight == "") {
    alert("please enter value your weight");
  } else if (height == "") {
    alert("please enter your height");
  } else {
    height = height * 12;
    height = height * 0.025;
    var newValue = weight / Math.pow(height, 2);
    // newValue = Math.round(newValue);
    newValue = parseFloat(newValue).toFixed(1);
    document.getElementById("res").innerText = newValue;
    myFunc();
  }
});
function myFunc() {
  var x = parseFloat(document.getElementById("res").innerText);
  let r;

  if (x <= 18.5) {
    r = "Underweight";
  } else if (x <= 24.9) {
    r = "Healthy";
  } else if (x <= 29.9) {
    r = "Overweight";
  } else if (x > 30) {
    r = "Obese";
  }
  document.getElementById("bmiD").innerHTML = r;
}
