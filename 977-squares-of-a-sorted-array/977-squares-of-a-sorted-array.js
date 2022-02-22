/**
 * @param {number[]} nums
 * @return {number[]}
 */

var merge = function (arr1,arr2) {
    var result = []
    
    
}

var sortedSquares = function(nums) {
   var result = new Array(nums.length).fill(0)
   var left = 0
   var right = result.length -1
   var resultIdx = result.length -1
   while (right >= left) {
       var leftVal = Math.pow(nums[left],2)
       var rightVal = Math.pow(nums[right],2)
       if (rightVal >= leftVal) {
           result[resultIdx]=rightVal
           right--
       } else {
           result[resultIdx]=leftVal
           left++
       }
       resultIdx--
   }
   return result 
};