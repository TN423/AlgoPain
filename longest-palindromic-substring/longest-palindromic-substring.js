/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var left, right, result =0
    for (var i=0; i <s.length;i++) {
        var tempStart = i
        var tempEnd =i
        
        while(s[tempEnd] === s[tempEnd+1]) tempEnd++
        
        while (tempStart>=0 && tempEnd < s.length && s[tempStart-1]===s[tempEnd+1]) {
            tempStart--
            tempEnd++
        }
        if (result < tempEnd-tempStart+1) {
          result = tempEnd - tempStart+1
          left = tempStart
          right = tempEnd
        }    
    }
    return s.substring(left,right+1)
    
};