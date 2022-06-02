/* 
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

    const str1 = "aaaabbcddd";
    const expected1 = "a4b2c1d3";
    
    const str2 = "";
    const expected2 = "";
    
    const str3 = "a";
    const expected3 = "a";
    
    const str4 = "bbcc";
    const expected4 = "bbcc";
  
  /**
   * Encodes the given string such that duplicate characters appear once followed
   * by a number representing how many times the char occurs only if the
   * character occurs more than two time.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str The string to encode.
   * @returns {string} The given string encoded.
   */
//    const str1 = "aaaabbcddd";
//     const expected1 = "a4b2c1d3";
    function encodeStr(str) {
            let start = 0;
            let end = 1;
            let newString = "";
            let count = 1;

            if (str === "") return str

            for (let i = 0; i < str.length; i++) {
                if (str[start] === str[end]) {
                    count++;
                    end++;
                } else {
                    newString += str[start] + count.toString()
                    start = end;
                    end++;
                    count = 1;
                }
            }
            if(newString.length < str.length){
                return newString
            }
            else {
                return str
            }
        }
        
          
 
          

        // var answer = ""
        // var savedChar = ""
        // var charCount = 0
        // for(var char = 0; char < str.length; char++) {
        //     if (char === 0) {
        //         savedChar = str[char]
        //         charCount++
        //     }
        //     else if (str[char] === str[char - 1]) {
        //         if (char === str.length - 1) {
        //             charCount++
        //             answer += savedChar + charCount.toString()
        //         }
        //         else {
        //             charCount++
        //         }
        //     }
           
        //     else {
        //         if(char === str.length - 1) {
        //             // aaabbbccd
        //             answer += savedChar + charCount.toString()
        //             savedChar = str[char]
        //             charCount = 1
        //             answer += savedChar + charCount.toString()

        //         }
        //         else {
        //         answer += savedChar + charCount.toString()
        //         savedChar = str[char]
        //         charCount = 1
        //         }
        //     }
        // }
       
        // if (answer.length < str.length) {
        //     return answer
        // }
        // else {
        //     return str
        // }
//  }

  console.log(encodeStr(str1))
  console.log(encodeStr(str2))
  console.log(encodeStr(str3))
  console.log(encodeStr(str4))
  
  module.exports = { encodeStr };