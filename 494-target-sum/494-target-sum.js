/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    var result = 0
    var dfs = function (i, nums, target, curCount) {
        //base case
        if (i === nums.length) {
            if (curCount === target) {
                result++
            }
            return
        }
        
        //recursive case - addition case and subtraction case
        curCount += nums[i]
        dfs (i+1, nums, target, curCount)
        curCount -=nums[i]
        
        curCount -=nums[i]
        dfs(i+1, nums, target, curCount)
        curCount +=nums[i]
    }
    dfs(0, nums, target,0)
    return result
};