/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    var dp = Array(text1.length+1).fill(0).map(()=>Array(text2.length+1).fill(0))
    for (var i=1; i<text1.length+1;i++){
        for (var j=1;j<text2.length+1;j++){
            if (text1[i-1]===text2[j-1]) {
                dp[i][j]=dp[i-1][j-1]+1
            } else {
                dp[i][j]=Math.max(dp[i][j-1],dp[i-1][j])
            }
        }
    }
    console.log(dp)
    return dp[dp.length-1][dp[0].length-1]                                         
};