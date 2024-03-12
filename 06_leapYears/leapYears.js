const leapYears = function (year) {
  if (Number.isInteger(year)) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        }
        return false;
      }
      return true;
    }
    return false;
  }
  return "ERROR";
};

console.log(leapYears(700));
// Do not edit below this line
module.exports = leapYears;
