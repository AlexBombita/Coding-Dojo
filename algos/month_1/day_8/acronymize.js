/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/

const str1_arg = " there's no free lunch - gotta pay yer way. ";
const expected1 = "TNFL-GPYW";

const str2_arg = "Live from New York, it's Saturday Night!";
const expected2 = "LFNYISN";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string to be turned into an acronym.
 * @returns {string} The given str converted into an acronym.
 */
function acronymize(str_param) {
  var array = str_param.split(" ")
  var result = ""
  for (let i = 0; i < array.length; i++) {
    result += array[i].charAt(0)
  }
  result = result.toUpperCase()
  return result
  
}

console.log(acronymize(str1_arg))




module.exports = { acronymize, str1_arg, str2_arg, expected1,expected2 };