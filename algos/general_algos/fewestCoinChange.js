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
function fewestCoinChange(cents) {
    totalRemaining = cents
    answer = {}

    while (totalRemaining > 0) {
        if (totalRemaining >= 25){
            totalRemaining -= 25
            if(answer['quarter']){
                answer['quarter'] += 1
            }
            else{
                answer['quarter'] = 1
            }
        }
        else if (totalRemaining >= 10){
            totalRemaining -= 10
                if(answer['dime']){
                    answer['dime'] += 1
                }
                else{
                    answer['dime'] = 1
                }
        }
        else if (totalRemaining >= 5){
            totalRemaining -= 5
                if(answer['nickel']){
                    answer['nickel'] += 1
                }
                else{
                    answer['nickel'] = 1
                }
        }
        else if (totalRemaining >= 1){
            totalRemaining -= 1
                if(answer['penny']){
                    answer['penny'] += 1
                }
                else{
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