<<<<<<< HEAD
/* 
Book Index
Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/


const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

/**
 * Turns the given arr of page numbers into a string of comma hyphenated
 * page ranges.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Page numbers.
 * @returns {string} The given page numbers as comma separated hyphenated
 *    page ranges.
 */
function bookIndex(nums) {
    var first = 0
    var mid = 0
    var last = 0
    var answer = ""
    for (i = 0; i < nums.length; i++) {
        
        if(nums[i] + 1 === nums[i+1]){
            if(first === 0) {
                first = nums[i].toString()
            }

            else if(nums[i + 1]  + 1 === nums[i+2]) {
                mid = nums[i].toString()
            }
            else {}
        }
        else if(nums[i] === nums[i-1] + 1) {
                last = nums[i].toString()
                if(i < nums.length - 1){
                    answer += first + "-" + last + ", "
                }
                else{
                    answer += first + "-" + last
                }
                first = 0
                mid = 0
                last = 0
            }
        
        else {
            if(i < nums.length - 1){
                answer += nums[i].toString() + ", "
            }
            else {
                answer += nums[i].toString()
            }
        }
    }
    return answer
}
=======
/* 
Book Index
Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/


const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

/**
 * Turns the given arr of page numbers into a string of comma hyphenated
 * page ranges.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Page numbers.
 * @returns {string} The given page numbers as comma separated hyphenated
 *    page ranges.
 */
function bookIndex(nums) {
    var first = 0
    var mid = 0
    var last = 0
    var answer = ""
    for (i = 0; i < nums.length; i++) {
        
        if(nums[i] + 1 === nums[i+1]){
            if(first === 0) {
                first = nums[i].toString()
            }

            else if(nums[i + 1]  + 1 === nums[i+2]) {
                mid = nums[i].toString()
            }
            else {}
        }
        else if(nums[i] === nums[i-1] + 1) {
                last = nums[i].toString()
                if(i < nums.length - 1){
                    answer += first + "-" + last + ", "
                }
                else{
                    answer += first + "-" + last
                }
                first = 0
                mid = 0
                last = 0
            }
        
        else {
            if(i < nums.length - 1){
                answer += nums[i].toString() + ", "
            }
            else {
                answer += nums[i].toString()
            }
        }
    }
    return answer
}
>>>>>>> 4e40d9e31c2332f85f7bb9d9bd1998b589f4374d
console.log(bookIndex(nums1))