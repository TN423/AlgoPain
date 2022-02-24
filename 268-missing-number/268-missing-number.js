/**
 * @param {number[]} nums
 * @return {number}
 */

//O(n) time but O(1) space
var missingNumber = function(nums) {
  var gSum = (nums.length * (nums.length+1)/2)
  var nSum = nums.reduce((accum, el)=>accum+el, 0)
  return gSum-nSum
}


//O(N) time solution using hash table, O(n) space
// var missingNumber = function(nums) {
//     var hash = {}
//     for (var num of nums) {
//         hash[num]=true
//     }
    
//     var count = nums.length
//     while (count>=0) {
//         if (!hash[count]) return count
//         count --    
//     }
    
// };



// N LOG N Solution
// var missingNumber = function(nums) {
//     nums.sort((a,b)=>a-b);
//     var count = 0;
//     for (var num of nums) {
//         if (num !==count) return count
//         count++
//     } 
    
//     return nums.length
    
// };