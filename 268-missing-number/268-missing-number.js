/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b);
    var count = 0;
    for (var num of nums) {
        if (num !==count) return count
        count++
    } 
    
    return nums.length
    
};