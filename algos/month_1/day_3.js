const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

function encodeStr(str) { 
  var result = "" 
  var count = 1
  var char = str[0]
  if (str.length == 0){
    return ""
  }
  for (i = 1; i < str.length; i++){
    if (str[i] == char){
      count ++;
    }
    else {
      result += char + count
      count = 1
      char = str[i]
    }
  }
  result += char + count
  if (result.length >= str.length){
    return str
  }
  return result
}

console.log(encodeStr(str1))
console.log(encodeStr(str2))
console.log(encodeStr(str3))
console.log(encodeStr(str4))

