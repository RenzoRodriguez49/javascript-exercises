const repeatString = function (str, num) {
  if (num < 0) {
    return "ERROR";
  } else {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(str);
    }
    return arr.join("");
  }
};

console.log(repeatString("a", 4));

// Do not edit below this line
module.exports = repeatString;
