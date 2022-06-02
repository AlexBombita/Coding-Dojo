/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */

//  var answer = {}

//  for(var i = 0; i < arr.length; i++){
//      if(answer[arr[i]]){
//          answer[arr[i]] += 1
//      }
//      else {
//          answer[arr[i]] = 1
//      }
//  }
//  return answer
// }

function fewestCoinChange(cents) {
    quarter = 25
    dime = 10
    nickel = 5
    penny = 1
    change = 0
    answer = {}

    while (cents > 0){
        if (cents >= 25){
        cents = cents - quarter
            if(answer['quarter']){
                answer['quarter'] += 1
            }
            else {
                answer['quarter'] = 1
            }
        }
        else if (cents >= 10){
        cents = cents - dime
            if(answer['dime']){
                answer['dime'] += 1
            }
            else {
                answer['dime'] = 1
            }
        }        
        else if (cents >= 5){
        cents = cents - nickel
            if(answer['nickel']){
                answer['nickel'] += 1
            }
            else {
                answer['nickel'] = 1
            }
        }
        else if (cents >= 1){
        cents = cents - penny
            if(answer['penny']){
                answer['penny'] += 1
            }
            else {
                answer['penny'] = 1
            }
        }
    }    
    return answer
}
console.log(fewestCoinChange(cents1))
console.log(fewestCoinChange(cents2))
console.log(fewestCoinChange(cents3))
console.log(fewestCoinChange(cents4))
