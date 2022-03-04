/**
 * @param {string} s
 * @return {string}
 */


var isPal = function (left, right, s) {
    while (left>=0 && right < s.length) {
        if(s[left] !==s[right]) break;
        left--
        right++
    }
    console.log(left)
    return [left+1,right]
}


var longestPalindrome = function(s) {
   var max = [0,1]
   
   for (var i =0; i <s.length;i++) {
       var even = isPal(i-1,i, s)
       var odd = isPal(i-1,i+1,s)
       var curMax = odd[1]-odd[0] > even[1]-even[0] ? odd : even
       max = max[1] - max[0] > curMax[1]-curMax[0] ? max : curMax
       
   }
    
   return s.slice(max[0], max[1]) 
    
    
}









// var longestPalindrome = function(s) {
//     var left, right, result =0
//     for (var i=0; i <s.length;i++) {
//         var tempStart = i
//         var tempEnd =i
//         //this statement needed for even # length
//         while(s[tempEnd] === s[tempEnd+1]) tempEnd++
        
//         // treat a given index like the middle then go one left and one right and see if they are the same
//         while (tempStart>=0 && tempEnd < s.length && s[tempStart-1]===s[tempEnd+1]) {
//             tempStart--
//             tempEnd++
//         }
//         //update result if current length is the longest
//         if (result < tempEnd-tempStart+1) {
//           result = tempEnd - tempStart+1
//           left = tempStart
//           right = tempEnd
//         }    
//     }
//     return s.substring(left,right+1)
    
// };