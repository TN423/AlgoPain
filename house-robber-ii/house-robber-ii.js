/**
 * @param {number[]} nums
 * @return {number}
 */
var robhelp = function(nums) {
    var dp = Array(nums.length).fill(0)
    dp[0]=nums[0]
    dp[1]=Math.max(nums[1],nums[0])
    for (var i=2;i<nums.length;i++) {
        dp[i]=Math.max(nums[i]+dp[i-2],dp[i-1])
    }
    return dp[dp.length-1]
};

var rob = function(nums) {
    if (nums.length===0) return 0
    if (nums.length ===1) return nums[0]
    if (nums.length ===2) return Math.max(nums[0],nums[1])
    var rob1 = robhelp(nums.slice(1,nums.length))
    var rob2 = 
    console.log(rob1)
    return Math.max(robhelp(nums.slice(1,nums.length)),robhelp(nums.slice(0,nums.length-1)))
};