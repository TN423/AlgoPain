/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  var dp = Array(nums.length).fill(1) 
  console.log(dp)
  for (var i=1;i<nums.length;i++) {
      for (var j=0; j<i;j++) {
          if (nums[j]<nums[i]) {
              dp[i]=Math.max(dp[i],dp[j]+1)
          }
      }
  }
  return Math.max(...dp)  
};