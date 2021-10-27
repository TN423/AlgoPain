/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var top = 0
    var bottom = matrix.length-1 
    var right = matrix[0].length-1
    var left = 0
    var total = matrix.length*matrix[0].length
    var result = []
    var count = 0
    while (top <= bottom && left <= right) {
        for (var i =left;  i <= right; i++) {
            count++
            if (count <= total) {
                result.push(matrix[top][i])
            }
            
            
        }
        top+=1
        for (var j = top; j <= bottom; j++) {
            count++
            if (count <= total) {
               result.push(matrix[j][right])  
            }
            
           
            
        }
        right -=1
        for (var k = right; k>=left; k--) {
           count++
            if (count <= total) {
                result.push(matrix[bottom][k])
            }
             
        }
        bottom-=1
        for (var l = bottom; l>= top; l--) {
            count++
            if (count <= total) {
              result.push(matrix[l][left])
          }  
            
           
        }
         left+=1
        // break
    }
    return result
};