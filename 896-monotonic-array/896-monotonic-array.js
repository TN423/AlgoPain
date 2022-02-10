/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    var first = nums[0]
    var last = nums[nums.length-1]
    if (first<=last) {
        for (var num of nums) {
            if (num < first) return false
            // console.log(first)
            first = num
        }
    } else if (first>=last) {
        for (var num of nums) {
            if (num> first) return false
            first = num
        }
    }
    
    return true

    
};