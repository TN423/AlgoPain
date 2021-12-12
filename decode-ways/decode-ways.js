/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    // if (s === null || s.length == 0) return 0
    if (s[0]==='0') return 0
    var dp = Array(s.length+1).fill(0)
    dp[0]=1
    dp[1] = 1
    for (var i =2;i<dp.length;i++) {
        var oneDigit = Number(s.slice(i-1,i))
        var twoDigit = Number(s.slice(i-2,i))
        if (oneDigit>=1) dp[i]+= dp[i-1]
        if (twoDigit>=10 && twoDigit <=26) dp[i]+=dp[i-2]
    }
    return dp[dp.length-1]
};