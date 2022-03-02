/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var start = 0;
    var soFar = {}
    var max = 0
    for (var end = 0; end<s.length;end++) {
        var rightChar = s[end]
        soFar[rightChar]= soFar[rightChar]+1 || 1
        while (soFar[rightChar] >1) {
            var leftChar = s[start]
            if (soFar[leftChar]>1) {
                soFar[leftChar]--
            } else {
                delete soFar[leftChar]
            }
                
                start++
        }
        // console.log(soFar)
        max = Math.max(max, end-start+1)
    }
    return max
};