/**
 * @param {number[]} nums
 * @return {number}
 */

//floyds algorithm
//its a linked list cycle problem.
//first detect cycle, then start a fres pointer and return the index where it meets the slow pointer

var findDuplicate = function(nums) {
    var fast = 0;
    var slow = 0;
    while (true) {
        fast = nums[[nums[fast]]]
        slow = nums[slow]
        if (slow === fast) {
            var start =0
            while (start !== slow) {
                slow = nums[slow]
                start = nums[start]
                if (start === slow) return start
            }
        }
    }
    
    
    
}
















// var findDuplicate = function(nums) {
//     var slow =0
//     var fast = 0
//     while (true) {
//         slow = nums[slow]
//         fast = nums[nums[fast]]
//         if (slow === fast) {
//             var start = 0
//             while (start !== slow) {
//                 slow = nums[slow]
//                 start = nums[start]
//                 if (slow === start) return start
//             }
//         }
//     }
// };