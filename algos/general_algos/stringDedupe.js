/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "helloolllleeerrrrrr";
const expected3 = "helor";

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */



function stringDedupe(str) {
    var answer = ""
    var seen= {}
    for (var i = 0; i < str.length; i++){
        if(seen[str[i]] != true){
            seen[str[i]] = true
            answer += str[i]
        }
    }
    return answer
}


console.log(stringDedupe(str1))
console.log(stringDedupe(str2))
console.log(stringDedupe(str3))


module.exports = { stringDedupe };