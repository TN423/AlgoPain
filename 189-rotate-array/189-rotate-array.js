/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//reverse the whole thing, then reverse the subsections, defined by the kth element


var reverse = function (nums, start, end) {

    while (start < end) {
        // var temp = nums[start]
        // nums[start]=nums[end]
        // nums[end]=temp
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}


var rotate = function(nums, k) {
    k = k % nums.length
    
    nums.reverse()
    reverse(nums, 0, k-1)
    reverse(nums, k, nums.length-1)
    
};