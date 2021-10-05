// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Example 2:

// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

//Must be written in log N time


//binary search

function rotated (arr) {
  var left = 0
  var right = arr.length -1
  var middle = Math.floor((left+right)/2)
  while (arr[middle] <=arr[middle+1] && arr[middle]>arr[middle-1] ) {
      if (arr[middle]<=arr[right]) {
          right = middle-1
      } else {
          left = middle+1
      }
      middle=Math.floor((left+right)/2)
  }
  if (arr[middle] > arr[middle+1]) {
      return arr[middle+1]
  }
  if (arr[middle] < arr[middle-1]) {
      return arr[middle]
  }
     return arr[0]

}

var test =[12,13,14,15,16,17,4,5,6,7,8]

rotated(test)
