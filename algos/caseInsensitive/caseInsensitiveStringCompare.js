/* case insensitive string compare */
// R read/repeat/recite 
// I input what is the data type = strings 2
// O output boolean 
// T talk
// W 
// A 
// L
// K  
const strA1 = "ABC";
const strB1 = "abc";
const expected1 = true;

const strA2 = "ABC";
const strB2 = "abd";
const expected2 = false;

const strA3 = "ABC";
const strB3 = "bc";
const expected3 = false;

/**
 * Determines whether or not the strings are equal, ignoring case.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} strA
 * @param {string} strB
 * @returns {boolean} If the strings are equal or not.
 */

function caseInsensitiveStringCompare(strA, strB) {
    return (strA.toUpperCase() === strB.toUpperCase())
}

console.log(caseInsensitiveStringCompare("ABC", "abc"))








module.exports = { caseInsensitiveStringCompare };

