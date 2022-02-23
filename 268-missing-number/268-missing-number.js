/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function(nums) {
    var hash = {}
    for (var num of nums) {
        hash[num]=true
    }
    
    var count = nums.length
    while (count>=0) {
        if (!hash[count]) return count
        count --    
    }
    
};




// var missingNumber = function(nums) {
//     nums.sort((a,b)=>a-b);
//     var count = 0;
//     for (var num of nums) {
//         if (num !==count) return count
//         count++
//     } 
    
//     return nums.length
    
// };