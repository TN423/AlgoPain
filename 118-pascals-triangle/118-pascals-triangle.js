/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var result = []
    var prev = null;
    var count = 0
    while (count < numRows) {
        prev = result[result.length-1]
        console.log(prev)
        if (count === 0) {
            result.push([1])
        } else if (count === 1) {
            result.push([1,1])
        } else {
            result.push([1])
            for (var i =1; i < prev.length;i++) {
               result[result.length-1].push(prev[i]+prev[i-1]) 
            }
            result[result.length-1].push(1)            
        }
        count++
    }
    return result
};