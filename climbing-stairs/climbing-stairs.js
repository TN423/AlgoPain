/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var dp = Array(n+1).fill(0)
    dp[0]=1
    dp[1]=1
    console.log(dp)
    for (var i=2;i<dp.length;i++) {
        dp[i]=dp[i-1]+dp[i-2]
    }
    return dp[dp.length-1]
};