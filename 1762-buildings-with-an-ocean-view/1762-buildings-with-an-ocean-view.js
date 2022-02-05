/**
 * @param {number[]} heights
 * @return {number[]}
 */

//start from the right side
var findBuildings = function(heights) {
    var result = []
    result.unshift(heights.length-1)
    for (var i =heights.length-2; i>=0 ;i--) {
        var curHeight = heights[i]
        var prevHeight = heights[result[0]]
        if (curHeight > prevHeight) result.unshift(i)
    }
    return result
};