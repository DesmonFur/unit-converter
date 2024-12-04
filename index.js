/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let number = document.getElementById("unit");
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");
let convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", function () {
  length.textContent = conversion(number.value, length);
  volume.textContent = conversion(number.value, volume);
  mass.textContent = conversion(number.value, mass);
});
function conversion(number, unit) {
  let conversionString = ``;
  let firstNum;
  let secondNum;
  if (unit === mass) {
    firstNum = number * 2.204;
    secondNum = number / 2.204;
    conversionString = `${number} kilos = ${firstNum.toFixed(
      3
    )} pounds | ${number} pounds = ${secondNum.toFixed(3)} kilos`;
  } else if (unit === length) {
    firstNum = number * 3.281;
    secondNum = number / 3.281;
    conversionString = `${number} meters = ${firstNum.toFixed(
      3
    )} feet | ${number} feet = ${secondNum.toFixed(3)} meters`;
  } else if (unit === volume) {
    firstNum = number * 0.264;
    secondNum = number / 0.264;
    conversionString = `${number} liters = ${firstNum.toFixed(
      3
    )} gallons | ${number} gallons feet = ${secondNum.toFixed(3)} liters`;
  }

  return conversionString;
}
