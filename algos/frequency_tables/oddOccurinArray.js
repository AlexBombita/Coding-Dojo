<<<<<<< HEAD


  /* 
  Given a non-empty array of odd length containing ints where every int but one
  has a matching pair (another int that is the same)
  return the only int that has no matching pair.
  */
  
    const nums1 = [1];
    const expected1 = 1;
  
    const nums2 = [5, 4, 5];
    const expected2 = 4;
  
    const nums3 = [5, 4, 3, 4, 3, 4, 5];
    const expected3 = 4; // there is a pair of 4s but one 4 has no pair.
  
    const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
    const expected4 = 1;
  
    function oddOccurrencesInArray(nums) {
        var answer =0
        var frequencyTable = frequencyTableBuilder(nums)
        for (key in frequencyTable){
            if (frequencyTable[key] % 2 != 0){
                answer = key
                break
            }
        }
        return answer
    }

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

    console.log(oddOccurrencesInArray(nums1))
    console.log(oddOccurrencesInArray(nums2))
    console.log(oddOccurrencesInArray(nums3))
    console.log(oddOccurrencesInArray(nums4))
=======


  /* 
  Given a non-empty array of odd length containing ints where every int but one
  has a matching pair (another int that is the same)
  return the only int that has no matching pair.
  */
  
    const nums1 = [1];
    const expected1 = 1;
  
    const nums2 = [5, 4, 5];
    const expected2 = 4;
  
    const nums3 = [5, 4, 3, 4, 3, 4, 5];
    const expected3 = 4; // there is a pair of 4s but one 4 has no pair.
  
    const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
    const expected4 = 1;
  
    function oddOccurrencesInArray(nums) {
        var answer =0
        var frequencyTable = frequencyTableBuilder(nums)
        for (key in frequencyTable){
            if (frequencyTable[key] % 2 != 0){
                answer = key
                break
            }
        }
        return answer
    }

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

    console.log(oddOccurrencesInArray(nums1))
    console.log(oddOccurrencesInArray(nums2))
    console.log(oddOccurrencesInArray(nums3))
    console.log(oddOccurrencesInArray(nums4))
>>>>>>> 4e40d9e31c2332f85f7bb9d9bd1998b589f4374d
  