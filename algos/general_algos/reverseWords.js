/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */

//  const str3 = "abc def ghi";
//  const expected3 = "cba fed ihg";
function reverseWords(str) {
    var answer = ""
    for (var i=0; i<str.length; i++){
        if (str[i] == " ") {
            for ( var j = i-1; j >= 0; j--){
                // console.log("i: " + str[i] + "j: " + str[j] + " answer: " + answer)
                if (str[j] == " "){
                    answer += " "
                    break
                }
                else if(j === 0){
                    answer += str[j]
                    answer += " "
                }
                else {
                    answer += str[j]
                }
                
            }
        }
        else if(i === str.length - 1){
            for ( var j = i; j >= 0; j--){
                if (str[j] == " ") {
                    answer += " "
                    break
                }
                else {
                    answer += str[j]
                }
            }
        }
    }
    
    return answer

}

console.log(reverseWords(str1))
console.log(reverseWords(str2))
console.log(reverseWords(str3))
