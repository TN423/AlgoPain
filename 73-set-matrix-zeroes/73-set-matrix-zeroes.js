/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */


const setZero = function (row, col, matrix) {
    for (var r =0; r<matrix.length;r++) {
        matrix[r][col]=0
    }
    for (var c=0; c<matrix[0].length;c++) {
        matrix[row][c]=0
    }
}


var setZeroes = function(matrix) {
  var zerosArray = []
  for (var r =0; r < matrix.length;r++) {
      for (c=0; c < matrix[0].length;c++) {
          if (matrix[r][c]===0) zerosArray.push([r,c])
      }
  }
    
  for (var zero of zerosArray) {
      var row = zero[0]
      var col = zero[1]
      setZero(row, col, matrix)
  }  
    
    
    
}















// var setZeroes = function(matrix) {
//   var height = matrix.length
//   var width = matrix[0].length
//   var heightZero = []
//   var widthZero = [ ]
  
//   for (var i =0 ; i <height; i++) {
//       for (var j=0; j <width;j++) {
//           if (matrix[i][j]===0) {
//               heightZero[i]=true
//               widthZero[j]=true
//           }
//       }
//   }
    
//   for (var i=0; i < height;i++) {
//       for (var j=0; j < width; j++) {
//           if (heightZero[i] || widthZero[j]) {
//               matrix[i][j]=0
//           }
//       }
//   }
//   return matrix
  
// };