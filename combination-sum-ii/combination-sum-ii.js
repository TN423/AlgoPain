/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b)=>a-b)
    var result =[]
    var dfs = function (i,candidates, target, slate) {
        //backtrack case
        if (target<0) return
        //basecase
        if (target===0) {
            result.push(slate.slice())
            return
        }
        //recursive case
        for (var j=i;j<candidates.length;j++) {
            if (i!==j && candidates[j]===candidates[j-1])continue
            slate.push(candidates[j])
            dfs(j+1,candidates, target-candidates[j], slate)
            slate.pop()
        }
    }
    dfs(0, candidates, target, [])
    return result
};