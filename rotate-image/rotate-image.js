/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    transpose(matrix)
    reflect(matrix)
    return matrix
};


function transpose (matrix) {
    for (var i =0; i < matrix.length;i++) {
        for (var j=i; j <matrix[0].length;j++) {
            var temp = matrix[i][j]
            matrix[i][j]= matrix[j][i]
            matrix[j][i]=temp
        }
    }
    console.log(matrix)
    // return matrix
}

function reflect (matrix) {
     for (var i =0; i < matrix.length;i++) {
        for (var j=0; j <Math.floor(matrix[0].length/2);j++) {
            var temp = matrix[i][j]
            matrix[i][j]= matrix[i][matrix.length-1-j]
            matrix[i][matrix.length-1-j]=temp
        }
    }
}