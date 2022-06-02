<<<<<<< HEAD
/* 
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
    Python: key in dict
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

function frequencyTableBuilder(arr){
    var answer = {}

    for(var i = 0; i < arr.length; i++){
        if(answer[arr[i]]){
            answer[arr[i]] += 1
        }
        else {
            answer[arr[i]] = 1
        }
    }
    return answer
}
// function frequencyTableBuilder(arr) {
//     var answer = {}
//     var answerCount = 0;
//     var tempKey =""
    
//     for (var i=0; i<arr.length; i++) {
//         if(answer.hasOwnProperty(arr[i]) === true){

//         }
//         else {
//             answerCount++
//             for (var j = i+1; j<arr.length; j++){
//                 if(arr[i] === arr[j]){
//                     answerCount++
//                 }
//             }
//             tempKey = arr[i]
//             answer[tempKey] = answerCount
//             answerCount = 0


//         }
//     }
    
//     return answer
// }

console.log(frequencyTableBuilder(arr1))
console.log(frequencyTableBuilder(arr2))
console.log(frequencyTableBuilder(arr3))

















=======
/* 
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
    Python: key in dict
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

function frequencyTableBuilder(arr){
    var answer = {}

    for(var i = 0; i < arr.length; i++){
        if(answer[arr[i]]){
            answer[arr[i]] += 1
        }
        else {
            answer[arr[i]] = 1
        }
    }
    return answer
}
// function frequencyTableBuilder(arr) {
//     var answer = {}
//     var answerCount = 0;
//     var tempKey =""
    
//     for (var i=0; i<arr.length; i++) {
//         if(answer.hasOwnProperty(arr[i]) === true){

//         }
//         else {
//             answerCount++
//             for (var j = i+1; j<arr.length; j++){
//                 if(arr[i] === arr[j]){
//                     answerCount++
//                 }
//             }
//             tempKey = arr[i]
//             answer[tempKey] = answerCount
//             answerCount = 0


//         }
//     }
    
//     return answer
// }

console.log(frequencyTableBuilder(arr1))
console.log(frequencyTableBuilder(arr2))
console.log(frequencyTableBuilder(arr3))

















>>>>>>> 4e40d9e31c2332f85f7bb9d9bd1998b589f4374d
module.exports = { frequencyTableBuilder };