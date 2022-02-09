/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash =  {}
    for (var i=0; i<nums.length;i++) {
        hash[nums[i]]=i
    }
    for (var j=0;j<nums.length;j++) {
        var newTarg = target - nums[j]
        if (hash[newTarg]  && hash[newTarg]!==j) return [j, hash[newTarg]]
    }
};