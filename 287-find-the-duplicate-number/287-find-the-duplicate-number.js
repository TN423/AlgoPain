/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var slow =0
    var fast = 0
    while (true) {
        slow = nums[slow]
        fast = nums[nums[fast]]
        if (slow === fast) {
            var start = 0
            while (start !== slow) {
                slow = nums[slow]
                start = nums[start]
                if (slow === start) return start
            }
        }
    }
};