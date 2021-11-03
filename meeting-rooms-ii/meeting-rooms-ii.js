/**
 * @param {number[][]} intervals
 * @return {number}
 */
// var minMeetingRooms = function(intervals) {
//     intervals.sort((a,b)=>{return a[0]-b[0]})
    
//     var rooms = []
    
//     for (var j=0; j<intervals.length;j++) {
//         var hasRoom = false
//         for (var i=0;i<rooms.length;i++) {
//             //check if any available rooms
//             if(rooms[i][rooms[i].length-1]<=intervals[j][0]) {
//                 //if available add the end time to the room
//                 rooms[i].push(intervals[j][1])
//                 hasRoom = true
//                 break
//             }
//         }
//         if(!hasRoom) {
//             rooms.push([])
//             rooms[rooms.length-1].push(intervals[j][1])
//         }
//     }
//     console.log(rooms)
//     return rooms.length
// };
// console.log(minMeetingRooms([[2,7]]))

var minMeetingRooms = function(intervals) {
  const start = [...intervals].map(([start, end]) => start).sort((a, b) => a - b);
  const end = [...intervals].map(([start, end]) => end).sort((a, b) => a - b);

  for (let i = 0; i < intervals.length; i++) {
    if (start[i] >= end[0]) end.shift();
  }
  
  return end.length;
};