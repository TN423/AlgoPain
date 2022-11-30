/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//others are brute force and 2 pointer
//2 pointer - first sort the array, then  is 1 at start , 1 at last, decrement last if result greater than target, increment start if result smaller than target
//hash table solution - has table where nums values are keys and indices are values
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