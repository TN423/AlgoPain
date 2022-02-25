/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var start=0
    var soFar =0
    var max = -Infinity
    for (var end =0;end<nums.length;end++) {
        soFar+=nums[end]
        if (end-start === (k-1)) {
            var avg = soFar/k
            max = Math.max(max, avg)
            soFar-=nums[start]
            start++
        }
    }
    return max
};