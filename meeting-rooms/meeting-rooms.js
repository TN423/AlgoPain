/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals = intervals.sort((a,b)=> {
        return a[0]-b[0]
    })
    // console.log(intervals)
    for (var i =0; i<intervals.length-1; i++) {
        if(intervals[i][1]>intervals[i+1][0]) return false
        
    }
    return true
};

canAttendMeetings(
[[16,22],[28,45],[3,9],[46,50],[13,14]])