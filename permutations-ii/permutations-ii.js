/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permuteUnique = function(nums) {
//     var resArray = []
//     var resObject = {}
//     var map = new Map()
//     function permute (current, remainder) {
//         if (remainder.length ===0) {
//             resObject[JSON.stringify(current)]=current
//         }
//         for (var i =0; i <remainder.length;i++) {
//             permute(current.concat(remainder[i]),remainder.slice(0,i).concat(remainder.slice(i+1)))
//         }
//     }
//     permute([],nums)
//     for (var key in resObject) {
//         resArray.push(resObject[key])
//     }
//     return resArray
// };

var permuteUnique = function(nums) {
    var result = []
    
    var swap = function (i, nums) {
        
        if (i===nums.length) {
            result.push(nums.slice())
            return
        }
        var hash = {}
        for (var j=i;j<nums.length;j++) {
            if (hash[nums[j]]) continue;
            hash[nums[j]]=true;
            [nums[i],nums[j]]=[nums[j],nums[i]];
            swap(i+1, nums);
            [nums[i],nums[j]]=[nums[j],nums[i]];
        }
    }
    swap(0,nums)
    return result
}