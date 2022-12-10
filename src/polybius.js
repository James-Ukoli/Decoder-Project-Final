// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
/// thinkful >>>>>> "###################"
  function polybius(input, encode = true) {
    // your solution code here
    let noSpaces = input.split(" ").join("");
    if (encode === false && noSpaces.length % 2 === 1) {
      return false
    }
    //// split, splits in array? join joins indexes in array////
    /////////// If odd number is inputted in decode ///////////
    const lookup = {
      "a": 11,
      "b": 21,
      "c": 31,
      "d": 41,
      "e": 51,
      "f": 12,
      "g": 22,
      "h": 32,
      "i": 42,
      "j": 42,
      "k": 52,
      "l": 13,
      "m": 23,
      "n": 33,
      "o": 43,
      "p": 53,
      "q": 14,
      "r": 24,
      "s": 34,
      "t": 44,
      "u": 54,
      "v": 15,
      "w": 25,
      "x": 35,
      "y": 45,
      "z": 55
    }
    const reverseLookup = {
      "11": "a",
      "21": "b",
      "31": "c",
      "41": "d", 
      "51": "e",
      "12": "f",
      "22": "g",
      "32": "h",
      "42": "i/j",
      "52": "k",
      "13": "l",
      "23": "m",
      "33": "n",
      "43": "o",
      "53": "p",
      "14": "q",
      "24": "r",
      "34": "s",
      "44": "t",
      "54": "u",
      "15": "v",
      "25": "w",
      "35": "x",
      "45": "y",
      "55": "z"
    };

   let inputLC = input.toLowerCase(); /// lowercase
   let output = ""; ///empty string
   ////// ^ Standard Set Variables ^ //////
   if (encode) {
   for (let i = 0; i < inputLC.length; i++) {
    for (let letters in lookup) {
        if (letters === inputLC[i]) {
          output += lookup[letters]
           }
        } 
        if (inputLC[i] === " ") {
          output += inputLC[i] /// accounts for spaces
        }
      }
//////// ^Encoding into numbers^ /////////////////////
//////// Example polybius("chicken")////////////////
    } else {
    for (let i = 0; i < input.length; i++) {
     let pairNum = input[i] + input[i+1]   
    for (let numbers in reverseLookup) {
        if (numbers === pairNum) {
          output += reverseLookup[numbers]
        }
        }
        if (input[i] === " ") {
          output += input[i] /// accounts for spaces
              } else {
                i++;
              }
      }
    }
//////// ^Decoding into letters^ //////////////////////
//////// EXAMPLE: polybius("44", false) //////////////
      return output
    }
  return {
    polybius,
  };
})();


module.exports = { polybius: polybiusModule.polybius };
