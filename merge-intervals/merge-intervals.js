/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a,b)=>{return a[0]-b[0]})
    console.log(intervals)
    var result = []
    result.push(intervals[0])
    for (var i=1; i <intervals.length;i++) {
        //check if have an overlap(end value of prior element> starting value of current element)
        if (result[result.length-1][1]>=intervals[i][0]) {
            result[result.length-1][1]=Math.max(result[result.length-1][1],intervals[i][1])
        } else {
            result.push(intervals[i])
        }
    }
    return result
    
};