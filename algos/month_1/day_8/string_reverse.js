/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const str1_arg = "creature";
const expected1 = "erutaerc";

const str2_arg = "dog";
const expected2 = "god";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
function reverseString(str_param) {
  return str_param
    .split("")
    .reverse()
    .join("")

}

console.log(reverseString(str1_arg))
console.log(reverseString(str2_arg))










module.exports = { reverseString, str1_arg, str2_arg, expected1, expected2 };