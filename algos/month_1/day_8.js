/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;
const str5 = '9)()('


var count = [];

    for (i = 0; i < str.length; i++){
        if (str[i] == '('){
            count++;
        }
        else if (str[i] == ')' && count === 0){
            return false;
        }
        else (str[i] == ')'){
            count--;
        }
        
        return true
    }

console.log(str1)

const str2 = "N(0(p)3";
const expected2 = false;
console.log(str2);

// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {}