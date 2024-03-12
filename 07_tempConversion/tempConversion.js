const convertToCelsius = function (tempF) {
  let convert = ((tempF - 32) * 5) / 9;
  let convertRounded = Math.round(convert * 10) / 10;
  return convertRounded;
};

console.log(convertToCelsius(-100));

const convertToFahrenheit = function (tempC) {
  let convert = tempC * (9 / 5) + 32;
  let convertRounded = Math.round(convert * 10) / 10;
  return convertRounded;
};

console.log(convertToFahrenheit(73.2));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
