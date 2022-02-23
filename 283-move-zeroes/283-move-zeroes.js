/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var lastNonZeroIdx = 0
    for (var i =0; i<nums.length;i++) {
        if (nums[i] !==0) {
            nums[lastNonZeroIdx]=nums[i]
            lastNonZeroIdx++
        }
    }
    for (var j=lastNonZeroIdx; j<nums.length;j++) {
        nums[j]=0
    }
};