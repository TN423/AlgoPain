/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var row = matrix.length;
    var col = matrix[0].length;
    var left = 0;
    var right = row*col -1
    while (left <= right) {
        var mid = Math.floor((left + right)/2)
        var midNum = matrix[Math.floor(mid/col)][mid%col]
        if (midNum === target) return true
        if (target < midNum) {
            right = mid -1
        } else {
            left = mid+1
        }    
    }
    
    return false
    
};