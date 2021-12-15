/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const result = []
    nums.sort((a,b)=>a-b)
    const dfs = function (i, nums, slate) {
        if (i === nums.length) {
            result.push(slate.slice())
            return
        }
        
        //exclude
        dfs(i+1, nums, slate)
        
        //include
        slate.push(nums[i])
        dfs(i+1, nums, slate)
        slate.pop()
    }
    dfs(0, nums,[])
    let hash = {}
    for (var element of result) {
        hash[element]=element
    }
    return Object.values(hash)
    
};