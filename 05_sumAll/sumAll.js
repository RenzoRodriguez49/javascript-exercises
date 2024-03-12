const sumAll = function (a, b) {
  if (typeof a === "number" && a > 0 && typeof b === "number" && b > 0) {
    let sum = 0;
    let inicio = Math.min(a, b);
    let fin = Math.max(a, b);
    for (let i = inicio; i <= fin; i++) {
      sum += i;
    }
    return sum;
  } else {
    return "ERROR";
  }
};

console.log(sumAll(123, 1));

// Do not edit below this line
module.exports = sumAll;
