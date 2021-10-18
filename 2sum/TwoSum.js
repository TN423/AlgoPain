/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.



Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1] */


//check if the numbers add up
//if so return their numbers
//each input only has one solution
//brute force can do nested loop


var twoSum = function (nums, target) {
  //hash to keep track of prior sum possibilities
  var hash ={}
  //iterate
  for (var i =0; i<array.length; i++) {
    //if target - element[i] does not hav a value in the hash table, we don't have a sum match
    if (hash[target - array[i]] === undefined) {
      //add element as key and index as value
      hash[array[i]]=i
      //else we have a match
      } else {
        //return [hash element index, current i]
        return [hash[target-array[i]], i]
      }
  }
}


twoSum ([2,3,4,5,6],11)