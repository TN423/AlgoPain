/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  var dp = new Array(amount+1).fill(Infinity)
  dp[0]=0
  for (var coin of coins) {
      for (var i=0;i<=amount;i++) {
          if (coin <= i) {
              dp[i]=Math.min(dp[i-coin]+1,dp[i])
          }
      }
  }  
  return dp[dp.length-1] === Infinity ? -1 : dp[dp.length-1] 
  console.log(dp)
};