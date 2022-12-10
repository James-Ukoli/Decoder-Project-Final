// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
///////////////// Process /////////////////////////////////////////
//      C ===== 2        >>>>>>    2 + 5            >>>>>>>>>>>>>> 7 >>>>>>>>>> H
/// 1) input = lookup[i]      lookup[i] + shift              new lookup[i]     return 
// lookup = a b c d e f g h i j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z      imaginary   a   b   c      z
// index# = 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15  16 17 18 19 20 21 22 23 24 25                 26  27  28
  function caesar(input, shift, encode = true) {
let lookup = "abcdefghijklmnopqrstuvwxyz"
let output = ""
////////^loop through input ^////////////
    if (shift < -25 || shift === 0 || shift > 25) {
      return false;
    } else {
////////// main edge case////////////////////
    if (encode === false) {
       shift = 0 - shift;
    }
//////// decode = inverse shift //////////////////
    let inputLC = input.toLowerCase();
/////////// setting standard variables//////////////
for (let i = 0; i < input.length; i++) {
 let shiftedIndex = lookup.indexOf(inputLC[i]) + shift
  if (lookup.includes(inputLC[i])) {
    if (shiftedIndex > 25) {
 const newIndex = lookup.indexOf(inputLC[i]) + shift
  shiftedIndex = newIndex - 26
    }
    if (shiftedIndex < 0) {
      const newIndex = lookup.indexOf(inputLC[i]) + shift
      shiftedIndex = newIndex + 26
    }
    output += lookup.charAt(shiftedIndex)  
  } else { 
    output += inputLC[i]
  ///////////accounts for spaces^(else covers thinds that are not in inputLC[i])//////
  }
  }
  return output
}
}
return {
  caesar,
};
})();

module.exports = { caesar: caesarModule.caesar };
