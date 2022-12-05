/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function(nums) {
//    var resArray = []
//    var build = function (current,remainder) {
//        if (remainder.length ===0) {
//            resArray.push(current)
//        }
// //        console.log(remainder)
//        for (var i =0; i< remainder.length;i++) {
//          build(current.concat(remainder[i]),remainder.slice(0,i).concat(remainder.slice(i+1)))   
//        }
//    }
//    build([],nums)
//    return resArray 
// };

// var permute = function(nums) {
//   var result = []
//   var dfs = (i, nums)=> {
//       if (i===nums.length) {
//           result.push(nums.slice())
//           return
//       }
//       for (var j=i; j<nums.length;j++) {
//           [nums[i], nums[j]] = [nums[j], nums[i]];
//           dfs(i+1, nums);
//           [nums[i], nums[j]] = [nums[j], nums[i]];
//       }
//   }
//   dfs(0,nums)
//     console.log(result)
//   return result
// };

var permute = function(nums) {
    
    let result = [];
    const dfs = function (i) {
        if (i === nums.length) {
            result.push(nums.slice())
            return
        }
        for (var j = i;j <nums.length;j++) {
            [nums[i],nums[j]]=[nums[j],nums[i]];
            dfs(i+1);
            [nums[i],nums[j]]=[nums[j],nums[i]];
        }
    }
    dfs(0)
    
    return result
    
}














