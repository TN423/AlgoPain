/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//brute force
// var combinationSum4 = function(nums, target) {
//     var result = 0
//     var dfs = function (nums, target) {
//         if (target <0) return
//         if (target === 0) {
//             result++
//             return
//         }
//         for (var i =0; i<nums.length;i++) {
//             dfs(nums,target-nums[i])
//         }
//     }
//     dfs(nums, target)
//     return result
    
// };

//dynamic programing
var combinationSum4 = function(nums, target) {
  var dp = Array(target+1).fill(0)
  dp[0]=1
  for (var i =1; i<=target;i++){
      for (num of nums) {
          if (i-num>=0) {
             dp[i]+=dp[i-num] 
          }
          
      }
  }
    return dp[target]
}