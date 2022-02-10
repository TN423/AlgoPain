/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
//compare the latest result with the current element from the interval
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    var result = [intervals[0]]
    for (var i=1;i<intervals.length;i++) {
        if (result[result.length-1][1]>=intervals[i][0]) {
            result[result.length-1][1]=Math.max(result[result.length-1][1], intervals[i][1])
        } else {
            result.push(intervals[i])
        }
    }
    return result
   
    
}
























// var merge = function(intervals) {
//     // sort by start time
//     intervals = intervals.sort((a,b)=>{return a[0]-b[0]})
//     console.log(intervals)
//     var result = []
//     result.push(intervals[0])
//     for (var i=1; i <intervals.length;i++) {
//         //check if have an overlap(end value of latest result element)> starting value of current element)
//         if (result[result.length-1][1]>=intervals[i][0]) {
//             result[result.length-1][1]=Math.max(result[result.length-1][1],intervals[i][1])
//         } else {
//             result.push(intervals[i])
//         }
//     }
//     return result
    
// };