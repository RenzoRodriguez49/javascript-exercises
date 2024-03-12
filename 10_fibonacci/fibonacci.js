const fibonacci = function (n) {
  if (typeof n === "number") {
    if (n < 0) {
      return "OOPS";
    }
  } else if (typeof n === "string") {
    n = parseInt(n);
    if (n < 0) {
      return "OOPS";
    }
  }
  return n === 0 ? 0 : n <= 2 ? 1 : fibonacci(n - 2) + fibonacci(n - 1);
};

console.log(fibonacci("0"));

// Do not edit below this line
module.exports = fibonacci;
