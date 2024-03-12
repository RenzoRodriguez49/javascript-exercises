const add = function (a, b) {
  return a + b;
};

console.log(add(1, 2));

const subtract = function (a, b) {
  return a - b;
};

console.log(subtract(10, 6));

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

console.log(sum([7, 2]));

const multiply = function (array) {
  return array.reduce((total, current) => total * current, 1);
};

console.log(multiply([2, 3]));

const power = function (a, b) {
  return a ** b;
};

console.log(power(2, 2));

const factorial = function (n) {
  return n === 0 || n === 1 ? 1 : n * factorial(n - 1);
};

console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
