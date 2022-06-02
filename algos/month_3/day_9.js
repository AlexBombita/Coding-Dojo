/* 
  Given an array of sorted ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
  The first element is never considered non-consecutive.
  Return an array of objects where each object contains the number itself
  and its index.
*/

const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
  { i: 4, n: 6 },
  { i: 7, n: 10 },
];

const nums2 = [];
const expected2 = [];

const nums3 = [1, 3, 7, 9];
const expected3 = [
  { i: 1, n: 3 },
  { i: 2, n: 7 },
  { i: 3, n: 9 },
];
// Explanation: Index 0 has no number before it, so it is not included.

/**
 * Finds all the non-consecutive (out of order) numbers from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @typedef {Array<{i: number, n: number}>} NonConsecNums Array of objects.
 * @property {number} i The index of the non consecutive number.
 * @property {number} n The non consecutive number itself.
 * @returns {NonConsecNums}
 */
function allNonConsecutive(sortedNums) {}

/*****************************************************************************/

/**
 * Finds all the non-consecutive (out of order) numbers from the given array.
 * - Time: O(n) linear.
 * - Space: O(n) linear, potentially all are saved in the new array.
 * @param {Array<number>} sortedNums
 * @typedef {Array<{i: number, n: number}>} NonConsecNums Array of objects.
 * @property {number} i The index of the non consecutive number.
 * @property {number} n The non consecutive number itself.
 * @returns {NonConsecNums}
 */

function allNonConsecutive(sortedNums) {
  const nonConsecutiveNums = [];

  // Your super sweet code right here.

  return nonConsecutiveNums;
}

module.exports = { allNonConsecutive };

function allNonConsecutive(sortedNums) {
    let arr = []
    for (let i = 1; i < sortedNums.length; i++) {
        if(sortedNums[i]!==sortedNums[i-1]+1){
            arr.push({"i":i,"n":sortedNums[i]})
        }
    }
    return arr;
}


/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

const nums2 = [];
const sum2 = 5;
const expected2 = [];

const nums3 = [10, 15, 20, 35, 30];
const sum3 = 5;
const expected3 = [];

// Bonus:
const nums4 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum4 = 16;
const expected4 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

// Bonus:
const nums5 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum5 = -16;
const expected5 = [
  [-2, -5, -3, -6],
  [-3, -6, -7],
  [-3, -6, -7, -0],
  [-3, -6, -7, -0, -0],
];

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(n^2) quadratic.
 * - Space: O(n^2) quadratic.
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */

function findConsecutiveSums(nums, targetSum) {
  const summableSubsets = [];

  // Your awesome code here.

  return summableSubsets;
}

module.exports = { findConsecutiveSums };

function findConsecutiveSums(nums, targetSum) {
    const summableSubsets = [];
    let i = 0, j = i+1;
    let sum = nums[i];
    while (i < nums.length){
        console.log(`i: ${i} || j: ${j} || sum: ${sum}`)
        // Break statement for resetting 'inner' j index
        if (j >= nums.length) {
            i++;
            j=i+1;
            sum = nums[i];
            continue;
        }

        // Update sums
        sum += nums[j];

        // Conditionals  for  what  happens next
        if(sum === targetSum) {
            summableSubsets.push(nums.slice(i, j+1))
            j++
        }
        else if (targetSum >= 0 && sum > targetSum){
            i++;
            j=i+1;
            sum = nums[i];
        }
        else if (targetSum < 0 && sum < targetSum){
            i++;
            j=i+1;
            sum = nums[i];
        }
        else if (targetSum >= 0 && sum < targetSum){
            j++;
        }
        else if (targetSum < 0 && sum > targetSum){
            j++;
        }
    }
    return summableSubsets;
}