/* Given an arr and a separator string, output a string of every item in the array separated by the separator.

No trailing separator at the end
Default the separator to a comma with a space after it if no separator is provided
*/

const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

/**
 * Converts the given array into a string of items separated by the given separator.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string|number|boolean>} arr The items to be joined as a string.
 * @param {string} separator To separate each item of the given arr.
 * @returns {string} The given array items as a string separated by the given separator.
 */
function join(arr, separator) {
    var answer = ""
    for (i = 0; i< arr.length; i++) {
        if (i < arr.length - 1) {
            answer += arr[i] + separator
        }
        else {
            answer += arr[i]
        
        }
    }
    return answer;
}

console.log(join(arr1, separator1))
console.log(join(arr2, separator2))
console.log(join(arr3, separator3))
console.log(join(arr4, separator4))
console.log(join(arr5, separator5))

module.exports = { join, arr1, arr2, arr3, arr4, arr5, separator1, separator2, separator3, separator4, separator5, expected1, expected2, expected3, expected4, expected5 };