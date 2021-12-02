/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var dp = Array(s.length+1).fill(false)
    dp[0]=true
    for (var i =0; i<dp.length;i++) {
        if (dp[i]===false) continue
        for (var j=i+1;j<dp.length;j++) {
          if (wordDict.includes(s.slice(i,j))) dp[j]=true  
        }
    }
    // console.log(dp)
    console.log(dp.length,s.length)
    return dp[dp.length-1]
};