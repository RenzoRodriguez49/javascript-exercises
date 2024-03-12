const removeFromArray = function (arr, ...args) {
  for (let i = 0; i < arr.length; i++) {
    if (args.includes(arr[i])) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};

console.log(removeFromArray([1, 2, 3, 4, "a"], 2));

// Do not edit below this line
module.exports = removeFromArray;
