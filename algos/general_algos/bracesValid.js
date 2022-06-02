/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {
    var answer = true
    var leftParen = 0
    var leftBrace = 0
    var leftBracket = 0
    var rightParen = 0
    var rightBrace = 0
    var rightBracket = 0
    
    for (i=0; i<str.length; i++){
        if(str[i] === '('){
            leftParen++
        }
        else if(str[i] === ')'){
            rightParen++
        }
        else if(str[i] === '{'){
            leftBracket++
        }
        else if(str[i] === '}'){
            rightBracket++
        }
        else if(str[i] === '['){
            leftBrace++
        }
        else if(str[i] === ']'){
            rightBrace++
        }
        if(rightParen > leftParen || rightBracket > leftBracket || rightBrace > leftBrace){
            answer = false
            break
        }
        if( i === str.length - 1){
            if(leftParen != rightParen || leftBracket != rightBracket || leftBrace != rightBrace){
                answer = false
            }
        }
    }
    return answer
}

console.log(bracesValid(str1))
console.log(bracesValid(str2))
console.log(bracesValid(str3))