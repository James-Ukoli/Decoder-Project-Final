// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet) {
      return false;
    }
/*
if (!alphabet || alphabet.length !== 26)
*/
///////////alphabet missing error check////////////////////
let alphabetArray = alphabet.split("")
    if (alphabetArray.length !== 26) {
      return false;
    }
/////////// Alphabet 26 character check ///////////////////
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet.split(alphabet[i]).length > 2) {
        return false;
    }
    }
///////// Unique Character CHeck /////////////////////////
const alphabetOG = "abcdefghijklmnopqrstuvwxyz"
///// alphabet   = "xoyqmcgrukswaflnthdjpzibev"
///// input      = "thinkful" >> looks at OG index >>> looks at alphabet index
let result = "";
let inputLC = input.toLowerCase();
///////// Data ///////////////////
if (encode) {
  for (let i = 0; i < inputLC.length; i++) {
    let indexPosition = alphabetOG.indexOf(inputLC[i]);
    if (inputLC[i] === " ") {
      result += " "
    } else {
    result += alphabet[indexPosition]
    }
}
//////// ^ Encode ^ //////////////
} else {
for (let i = 0; i < inputLC.length; i++) {
  let indexPosition = alphabet.indexOf(inputLC[i]);
  if (inputLC[i] === " ") {
    result += " "
  } else {
    result += alphabetOG[indexPosition]
  }
  }
}
return result
///////// ^ Decode ^ //////////////
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
