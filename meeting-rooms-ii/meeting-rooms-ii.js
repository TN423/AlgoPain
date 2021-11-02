/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let rooms = []
    // sort by start time
    intervals.sort((a, b) => a[0] - b[0])
    for (let e of intervals) {
        let hasRoom = false
        // go through rooms to see if there is any available
        for (let r of rooms) {
            if (r[r.length - 1] <= e[0]) {
                // if available, add meeting end time to this room
                r.push(e[1])
                hasRoom = true
                break
            }
        }
        // if none available, open a new room
        if (!hasRoom) {
            rooms.push([])
            rooms[rooms.length - 1].push(e[1])
        }
    }
    return rooms.length
};