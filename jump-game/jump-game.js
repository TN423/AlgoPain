/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  var goal = nums.length-1
  for (var i=nums.length-1;i>=0;i--){
      if (i+ nums[i] >= goal) goal=i
  }
    if (goal ===0) return true
    console.log(goal)
    return false
};