/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
   var resArray = []
   var build = function (current,remainder) {
       if (remainder.length ===0) {
           resArray.push(current)
       }
//        console.log(remainder)
       for (var i =0; i< remainder.length;i++) {
         build(current.concat(remainder[i]),remainder.slice(0,i).concat(remainder.slice(i+1)))   
       }
   }
   build([],nums)
   return resArray 
};

var test = [1,2,3]

permute(test)