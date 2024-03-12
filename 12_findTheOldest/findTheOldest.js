const findTheOldest = function (array) {
  let today = new Date().getFullYear();
  let group = array.map(function (age) {
    finalYear = age.yearOfDeath || today;
    return Math.abs(finalYear - age.yearOfBirth);
  });
  let oldest = group.indexOf(Math.max(...group));
  return array[oldest];
};

console.log(
  findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ])
);

// Do not edit below this line
module.exports = findTheOldest;
