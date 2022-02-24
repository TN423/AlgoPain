/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
  var f = m-1
  var s = n-1
  for (var i=nums1.length-1;i>=0;i--) {
      if (s<0) break
      if (nums2[s]<nums1[f]) {
          nums1[i]=nums1[f]
          f--
        
      } else {
            nums1[i]=nums2[s]
          s--
    }
  }    
}



// var merge = function(nums1, m, nums2, n) {
//   //creating 3 pointers, iterating from end of nums
//   var i = m-1
//   var j = n-1
//   for (var k=nums1.length-1; k>=0;k--){
//       if (j<0) break
//       if (nums1[i]> nums2[j]) {
//           nums1[k]=nums1[i]
//           i--
//       } else {
//           nums1[k]=nums2[j]
//           j--
//       }
//   }
// };