/**
 * @param {number[]} nums
 * @return {number[]}
 */


//key hint is = all the integers of nums are in the range [1, n]
//you can make use of the indices like a link list, value 4 points to index 4, value of 1 points to index 1, etc
//if you come back to the same index more than once, its a duplicate


var findDuplicates = function(nums) {
    var result = [];
    for (var i =0; i <nums.length;i++) {
        var index = Math.abs(nums[i])-1;
        var val = nums[index]
        if (val <0) {
            result.push(Math.abs(nums[i]))
        } else {
            nums[index]=-nums[index]
        }
    }
    return result
    
    
    
}












//uses hash table
// var findDuplicates = function(nums) {
//     var hash =  {};
//     var result = []
//     for (var num of nums) {
//         if (!hash[num]) {
//             hash[num]=1
//         } else {
//             hash[num]++
//         }
//     }
    
//     for (var key in hash) {
//         if (hash[key]>1) result.push(key)
//     }
    
//     return result
    
// };