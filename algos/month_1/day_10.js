// /* 
//   An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
//   typically using all the original letters exactly once.
//   Is there a quick way to determine if they aren't an anagram before spending more time?
//   Given two strings
//   return whether or not they are anagrams
// */

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

// /**
//  * Determines whether s1 and s2 are anagrams of each other.
//  * Anagrams have all the same letters but in different orders.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} s1
//  * @param {string} s2
//  * @returns {boolean} Whether s1 and s2 are anagrams.
//  */


function isAnagram(s1, s2) {
    if (s1.length !== s2.length){
        return false;
    }
    let str1 = s1.split("").sort().join("");
    let str2 = s2.split("").sort().join("");
    if (str1 = str2){
    return true
    }
    else return false;

}

console.log(isAnagram(strA1, strB1))
console.log(isAnagram(strA2, strB2))
console.log(isAnagram(strA3, strB3))
console.log(isAnagram(strA4, strB4))

/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
// const expected1 = "hello world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
// function trim(str) {
//     var result = ""
//     var char = ""
//     for (i = 0; i<str.length; i++){
//         if (str[i] == ' ' && result.length>0){
//             result += str[i]
//         }
//         else if (str[i] !== ' '){
//             result += str[i]
//         }
//     }
//     for (i = result.length -1; i> 0; i--){
//     }
//         return(result)
// }

// console.log(trim(str1))
