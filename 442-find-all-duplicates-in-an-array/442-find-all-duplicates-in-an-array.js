/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var hash =  {};
    var result = []
    for (var num of nums) {
        if (!hash[num]) {
            hash[num]=1
        } else {
            hash[num]++
        }
    }
    
    for (var key in hash) {
        if (hash[key]>1) result.push(key)
    }
    
    return result
    
};