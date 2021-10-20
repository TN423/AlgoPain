/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  // if (nums.length ===1 && nums[0]===1) return 1
  
  var currMax = 0
  var absMax =0
  for (var i=0; i <nums.length;i++) {
      var start=i
      currMax = nums[start]
      var end =i+1
      while (nums[start]===nums[end]) {
          currMax+=nums[end]
          end++
      }
      absMax=Math.max(absMax,currMax)
  }
    return absMax
};