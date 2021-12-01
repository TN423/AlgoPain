/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var result = []
    var nums = []
    for (var i =1; i<=9;i++) nums.push(i)
    
    
    var dfs = function (i, nums, k, n, slate) {
        //backtracking case
        if (n <0) return
        //base case
        if (slate.length === k) {
            if (n ===0) {
                result.push(slate.slice())
            }
            return
        }
        //dfs recursive case
        for (var j=i;j<nums.length;j++) {
            slate.push(nums[j])
            dfs (j+1, nums, k, n-nums[j], slate)
            slate.pop()
        }
    }
    dfs(0,nums, k,n,[])
    return result
};