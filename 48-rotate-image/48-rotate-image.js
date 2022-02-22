/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */




var transpose = function (matrix) {
    for (var r=0; r<matrix.length;r++) {
        for (var c=r;c<matrix[0].length;c++) {
            var temp = matrix[r][c]
            matrix[r][c]=matrix[c][r]
            matrix[c][r]=temp
        } 
    }
    console.log(matrix)
}


var flip = function (matrix) {
    for (var r=0; r<matrix.length;r++) {
        for (var c=0; c<Math.floor(matrix[0].length/2);c++) {
            var temp = matrix[r][c]
            matrix[r][c]=matrix[r][matrix[0].length-1-c]
            matrix[r][matrix[0].length-1-c]=temp
        }
    }
}




var rotate = function(matrix) {
    transpose(matrix)
    flip(matrix)
    return matrix
}






















//transpose reflect
// var rotate = function(matrix) {
//     transpose(matrix)
//     reflect(matrix)
//     return matrix
// };


// function transpose (matrix) {
//     for (var i =0; i < matrix.length;i++) {
//         for (var j=i; j <matrix[0].length;j++) {
//             var temp = matrix[i][j]
//             matrix[i][j]= matrix[j][i]
//             matrix[j][i]=temp
//         }
//     }
//     console.log(matrix)
//     // return matrix
// }

// function reflect (matrix) {
//      for (var i =0; i < matrix.length;i++) {
//         for (var j=0; j <Math.floor(matrix[0].length/2);j++) {
//             var temp = matrix[i][j]
//             matrix[i][j]= matrix[i][matrix.length-1-j]
//             matrix[i][matrix.length-1-j]=temp
//         }
//     }
// }