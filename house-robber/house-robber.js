/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length===1) return nums[0]
  var dp = Array(nums.length).fill(0)
  // console.log(dp)
  dp[0]=nums[0]
  dp[1]=Math.max(nums[0],nums[1])
  // dp[2]=Math.max(nums[0]+nums[2],nums[1])
  for (var i = 2; i<dp.length;i++) {
      dp[i]=Math.max(nums[i]+dp[i-2],dp[i-1])
  }  
  return dp[dp.length-1]  
};