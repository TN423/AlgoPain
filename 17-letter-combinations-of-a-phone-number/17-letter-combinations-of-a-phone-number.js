/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length ===0) return []
  var result = []
  var alphaHash = {
      2:'abc',
      3:'def',
      4:'ghi',
      5:'jkl',
      6:'mno',
      7:'pqrs',
      8:'tuv',
      9:'wxyz'
  }
  var dfs = function (i, digits, slate) {
      if (i===digits.length) {
          result.push(slate.join(''))
          return
      }
      
      //dfs
      var chars = alphaHash[digits[i]]
      for (var char of chars) {
          slate.push(char)
          dfs(i+1, digits, slate)
          slate.pop()
      }
      
  }
  dfs(0,digits,[])
  return result  
};