<<<<<<< HEAD
/* 
  Invert Hash
  A hash table / hash map is an obj / dictionary
  Given an object / dict,
  return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
*/

const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
const expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

/**
 * Inverts the given object's key value pairs so that the original values
 * become the keys and the original keys become the values.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object<string, string>} obj An object with string keys and string values.
 * @return The given object with key value pairs inverted.
 */
function invertObj(obj) {
    let answer = {}
    let tempKey = ""
    let tempVal = ""
    for (key in obj){
        tempKey = key
        tempVal = obj[key]
        answer[tempVal] = tempKey
    }
    return answer
}

console.log(invertObj(obj1))


module.exports = { invertObj };

=======
/* 
  Invert Hash
  A hash table / hash map is an obj / dictionary
  Given an object / dict,
  return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
*/

const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
const expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

/**
 * Inverts the given object's key value pairs so that the original values
 * become the keys and the original keys become the values.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object<string, string>} obj An object with string keys and string values.
 * @return The given object with key value pairs inverted.
 */
function invertObj(obj) {
    let answer = {}
    let tempKey = ""
    let tempVal = ""
    for (key in obj){
        tempKey = key
        tempVal = obj[key]
        answer[tempVal] = tempKey
    }
    return answer
}

console.log(invertObj(obj1))


module.exports = { invertObj };

>>>>>>> 4e40d9e31c2332f85f7bb9d9bd1998b589f4374d
/*****************************************************************************/