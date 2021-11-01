/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  //define list
    var list = []
    //add all intervals that are non overlappling to the newInterval
    var i =0
    while(i < intervals.length && intervals[i][1] <newInterval[0]){
        list.push(intervals[i])
        i++
    }
    //merge newinterval with overlapping interval
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0])
        newInterval[1] = Math.max(intervals[i][1], newInterval[1])
        i++
    }
    list.push(newInterval)
    //add remaining intervals
    while (i < intervals.length) {
        list.push(intervals[i])
        i++
    }
    return list
};