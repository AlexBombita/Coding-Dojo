/* 
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */
function reverseStr(str) {
    if (str.length === 0) return ""
    var lastIndex = str.length - 1
    var char = str[lastIndex]
    return char + reverseStr(str.slice(0,lastIndex))
}
console.log(reverseStr(str1))
console.log(reverseStr("absdf"))