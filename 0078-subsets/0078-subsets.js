/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function(nums) {
   var result = []
   const dfs = function (i, slate) {
       if (i===nums.length) {
           result.push(slate.slice())
           return
       }
       
       dfs(i+1, slate)
       slate.push(nums[i])
       dfs (i+1, slate)
       slate.pop()
   }
   dfs(0,[])
   
   
   return result
}




















// var subsets = function(nums) {
//   var results = []
//   var dfs = function (i, nums, slate) {
//       if (i===nums.length) {
//           results.push(slate.slice())
//           return
//       }
      
//       dfs (i+1, nums, slate)
      
//       slate.push(nums[i])
//       dfs(i+1, nums, slate)
//       slate.pop()
//   }
//   dfs(0, nums, [])
//   return results  
// }

// var subsets = function(nums) {
//   var result = []
//   var dfs = function (i, nums, slate) {
//       if (i === nums.length) {
//           result.push(slate.slice())
//           return
//       }
//       //exclude
//       dfs(i+1, nums, slate)
      
//       //include
//       slate.push(nums[i])
//       dfs(i+1, nums, slate)
//       slate.pop()
//   }
//   dfs(0, nums, [])
//   console.log(result)  
//   return result  
// };