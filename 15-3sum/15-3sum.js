/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const twoSum = function (j, target, nums) {
    var k = nums.length-1
    var result = []
    while (j<k) {
        var leftVal = nums[j]
        var rightVal = nums[k]
        if (leftVal+rightVal>target) {
            k--
        } else if(leftVal+rightVal<target) {
            j++
        } else {
            result.push([(target)*-1, leftVal, rightVal])
            while (j<k && nums[j]===nums[j+1]) j++;
            while (j<k && nums[k]===nums[k-1])k--;
            j++
            k--
        }
    }
    console.log(result)
    return result
}


var threeSum = function(nums) {
    nums.sort((a,b)=> a-b);
    var result = [];
    for (var i=0; i<nums.length;i++ ) {
        if (nums[i]===nums[i-1]) continue
        var target = nums[i]*-1
        var subResult = twoSum(i+1, target, nums)
        result.push(...subResult)
    }
    console.log(result)
    return result
};