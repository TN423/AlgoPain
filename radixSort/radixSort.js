//what number is at a given place value - 0th place, 10s place, 100s place, 1000s place etc.
// getDigit (54321, 3) // results in 4 because 3 is the 1000s place and this is 4000
function getDigit(num, i) {
  return Math.floor(Math.abs(num)/Math.pow(10,i)) % 10
}

//how many digits
function digitcount(num) {
  if (num ===0) return 1
  return Math.floor(Math.log10(Math.abs(num))) +1
}

// given an array of numbers, what is the number of digits for the largest number in the list
// mostdigits([1234,56,7]) returns 4 because the biggest number is 1234 and 1234 has 4 digits
function mostdigits(nums) {
  var maxdigits =0
  for (var i =0; i < nums.length; i++) {
    maxdigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits
}


function radixSort (nums) {
  var maxDigitsCount = mostdigits(nums)
  for (var k = 0; k <maxDigitsCount;k++) {
    //create empty buckets for 0-9 for each k place [[],[],[]..]
    var digitbuckets = Array.from({length:10},()=> [])
    for (var i =0; i <nums.length; i++) {
      var digit = getDigit(nums[i],k)
      digitbuckets[digit].push(nums[i])
    }
    //pass every element of digitbuckets array into concat
    nums = [].concat(...digitbuckets)
  }
  return nums
}


console.log(getDigit(54321,2)) //return 4  for 4000