/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var maxProfit =0
  var buyIndex = 0
  for (var sellIndex =0; sellIndex <prices.length;sellIndex++) {
      
      if (prices[buyIndex]-prices[sellIndex] >= 0) {
          buyIndex=sellIndex
      } else {
          var localProfit = prices[sellIndex]-prices[buyIndex]
          maxProfit = Math.max(maxProfit, localProfit)
      }
  }
    return maxProfit
};