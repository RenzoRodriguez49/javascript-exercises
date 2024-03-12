const caesar = function (str, num) {
  // let a = str.split("");
  // let c = [];
  // let d = "";
  // for (let i = 0; i < a.length; i++) {
  //   let charCode = a[i].charCodeAt();
  //   if (charCode >= 65 && charCode <= 90) {
  //     let shiftedCode = ((((charCode - 65 + num) % 26) + 26) % 26) + 65;
  //     c.push(shiftedCode);
  //   } else if (charCode >= 97 && charCode <= 122) {
  //     let shiftedCode = ((((charCode - 97 + num) % 26) + 26) % 26) + 97;
  //     c.push(shiftedCode);
  //   } else {
  //     c.push(charCode);
  //   }
  // }
  // for (let i = 0; i < c.length; i++) {
  //   d += String.fromCharCode(c[i]);
  // }
  // return d;
  let coded = "";
  for (let i = 0; i < str.length; i++) {
    let ascii = str[i].charCodeAt();
    if (ascii >= 65 && ascii <= 90) {
      let shift = ((((ascii - 65 + num) % 26) + 26) % 26) + 65;
      coded += String.fromCharCode(shift);
    } else if (ascii >= 97 && ascii <= 122) {
      let shift = ((((ascii - 97 + num) % 26) + 26) % 26) + 97;
      coded += String.fromCharCode(shift);
    } else {
      coded += str[i];
    }
  }
  return coded;
};

console.log(caesar("Hello, World!", -29));

// Do not edit below this line
module.exports = caesar;
