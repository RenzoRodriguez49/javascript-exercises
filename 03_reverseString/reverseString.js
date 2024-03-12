const reverseString = function (str) {
  if (typeof str === "string") {
    let arr = str.split("").reverse().join("");
    return arr;
  }
};

console.log(reverseString("hello there"));

// Do not edit below this line
module.exports = reverseString;
