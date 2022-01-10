/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  var result = []
  var dfs = function (i, nums, slate) {
      if (i === nums.length) {
          result.push(slate.slice())
          return
      }
      //excludes
      dfs(i+1, nums, slate)

      //includes
      slate.push(nums[i])
      dfs(i+1, nums, slate)
      slate.pop()
  }
  dfs(0, nums, [])
  console.log(result)
  return result
};