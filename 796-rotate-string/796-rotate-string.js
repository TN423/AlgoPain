/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

var rotateString = function(s, goal) {
    if (s.length !== goal.length) return false
    if (s.length === 0 && goal.length === 0) return true
    s = s+s
    return s.includes(goal)
}


// var rotateString = function(s, goal) {
//     var counter = 0 
//     var length = goal.length
//     while(counter < length) {
//         counter++
//         var array=s.split('')
//         var front = array.shift()
//         array.push(front)
//         s = array.join('')
//         if (s === goal) return true
//     }
//     return false
// };