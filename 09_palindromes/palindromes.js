const palindromes = function (str) {
  let punctuation = /[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g;
  let cleanStr = str.replace(punctuation, "").toLowerCase();
  for (
    let i = 0, j = cleanStr.length - 1;
    i < Math.floor(cleanStr.length / 2);
    i++, j--
  ) {
    if (cleanStr[i] !== cleanStr[j]) {
      return false;
    }
  }
  return true;
};

console.log(palindromes("rac3e3car"));

// Do not edit below this line
module.exports = palindromes;
