/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    var newArr = new Array(matrix[0].length).fill().map(()=>new Array(matrix.length))
    
    for (var i=0;i<matrix.length;i++) {
        for (var j=0;j<matrix[0].length;j++) {
            newArr[j][i]=matrix[i][j]
        }
    }
    
    return newArr
};