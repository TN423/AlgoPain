/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
   var result = []
   var dfs = function (i, S, slate) {
       //base case
       if (i === S.length) {
         result.push(slate.join(''))
         return  
       }
       
       //dfs recursive case
       var char = S[i]
       if(!Number.isInteger(parseInt(char))) {
           //upper
           slate.push(char.toUpperCase())
           dfs(i+1, S, slate)
           slate.pop(char)
           
           //lower
           slate.push(char.toLowerCase())
           dfs(i+1, S, slate)
           slate.pop(char)
       } else {
           slate.push(char)
           dfs(i+1, S, slate)
           slate.pop()
       } 
   }
   dfs(0,s,[] )
   return result 
};