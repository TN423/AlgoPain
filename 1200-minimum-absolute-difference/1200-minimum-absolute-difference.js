/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
   arr.sort((a,b)=>a-b)
   var minDiff = Infinity
   var result = []
   for (var i =1;i<arr.length;i++) {
       var curDiff = arr[i]-arr[i-1]
       minDiff = Math.min(minDiff, curDiff)
   }
   for (var j=1;j<arr.length;j++) {
       if ((arr[j]-arr[j-1])===minDiff) {
           result.push([arr[j-1],arr[j]])
       }
   } 
   return result 
};