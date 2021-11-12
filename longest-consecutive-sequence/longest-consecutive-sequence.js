/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var set = new Set(nums)
    var longest = 0
    for (var num of set) {
        
        if (!set.has(num-1)) {
            var length =0
            while (set.has(num+length)){
                length++
                longest = Math.max(longest, length)
            }
        }
            
        
    }
    return longest
};