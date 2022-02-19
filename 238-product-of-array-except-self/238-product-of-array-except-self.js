/**
 * @param {number[]} nums
 * @return {number[]}
 */

//multiply all , then divide by current element
//make 2 arrays, i array is multiple of everything to the left, other is everything to the right, then multiply the two
//dynamic programming approach
var productExceptSelf = function(nums) {
    var left = new Array(nums.length).fill(0)
    left[0]=1
    var right = new Array(nums.length).fill(0)
    right[right.length-1]=1
    for (var i =1; i<left.length;i++) {
        left[i]=left[i-1]*nums[i-1]
    }
    for (var j = right.length-2;j>=0;j--) {
        right[j]=right[j+1]*nums[j+1]
    }
    
    for (var i=0; i<nums.length;i++) {
        nums[i]=left[i]*right[i]
    }
    return nums
    
};