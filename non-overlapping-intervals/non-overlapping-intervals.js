/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b)=>{return a[1]-b[1]})
    var previous = intervals[0]
    var count =0
    for (var i =1; i<intervals.length;i++) {
        var current = intervals[i]
        if(previous[1]> current[0]) count++
        else {
            previous = current
        }
    }
    return count
};