/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  //create board
  var board = []
  for (var i =0; i <n; i++) {
    board.push([])
    for (var j=0; j<n;j++){
        board[i].push(false)
    }
  }
  //toggle a piece on or off the board
  board.togglePiece = function(i,j){
    this[i][j] = !this[i][j]
  }

  //check if a space has already been visited
  board.hasBeenVisited = function (i,j) {
      return this[i][j]
  }

  return board
}

var robotPaths = function(n, board, i, j) {
  //initialize variables if not provided
  board = board || makeBoard(n)
  i = i || 0
  j = j || 0

  //base case: out of bounds or already visit the piece. no path
  if (!(i>=0 && i <n && j>=0 && j <n) || board.hasBeenVisited(i,j)) {
      return 0
  }

  //base when i and j both === n-1 (we're in bottom right corner)
  if (i === n-1 && j === n-1) {
      return 1
  }

  //recursive case: toggle piece , add # of completed paths, and continue
  board.togglePiece(i,j)
  var result = robotPaths (n, board, i, j+1) +
    robotPaths(n, board, i, j-1) +
    robotPaths(n, board, i+1, j) +
    robotPaths(n, board, i-1, j)

  //return board to original state
  board.togglePiece (i,j)
  return result

}


console.log(robotPaths(3))
