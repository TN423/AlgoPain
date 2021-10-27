/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  var height = matrix.length
  var width = matrix[0].length
  var heightZero = []
  var widthZero = [ ]
  
  for (var i =0 ; i <height; i++) {
      for (var j=0; j <width;j++) {
          if (matrix[i][j]===0) {
              heightZero[i]=true
              widthZero[j]=true
          }
      }
  }
    
  for (var i=0; i < height;i++) {
      for (var j=0; j < width; j++) {
          if (heightZero[i] || widthZero[j]) {
              matrix[i][j]=0
          }
      }
  }
  return matrix
  
};