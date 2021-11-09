/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {


    var res = []
    var min = -Infinity
    var rows = matrix.length
    var cols = matrix[0].length

    var pacific = new Array(rows).fill().map(()=> new Array(cols).fill(0))
    var atlantic = new Array(rows).fill().map(()=> new Array(cols).fill(0))


    for (var i =0; i <rows;i++) {
        dfs(matrix, i, 0, min, pacific)
        dfs(matrix, i, matrix[0].length-1, min, atlantic)
    }

    for (var j=0; j < cols; j++) {
        dfs (matrix, 0, j, min, pacific)
        dfs (matrix, matrix.length-1, j, min, atlantic)
    }

    for (var row = 0; row<rows;row++) {
        for (var col=0; col<cols; col++) {
            if(pacific[row][col]===1 && atlantic[row][col]===1){
                res.push([row,col])
            }
        }
    }

    return res
}


function dfs (matrix, r, c, prevHeight, ocean) {
  if (r <0 || c <0 || r>matrix.length-1 || c >matrix[0].length-1) return
  if(matrix[r][c] <prevHeight) return
  if (ocean[r][c]===1) return

  ocean[r][c]=1

  dfs(matrix, r-1,c , matrix[r][c],ocean)
  dfs(matrix, r+1,c , matrix[r][c],ocean)
  dfs(matrix, r,c-1 , matrix[r][c],ocean)
  dfs(matrix, r,c+1 , matrix[r][c],ocean)
}