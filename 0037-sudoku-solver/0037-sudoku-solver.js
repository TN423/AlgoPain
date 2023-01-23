/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    fillSudoku(board)
    return board
};

const fillSudoku = function (board) {
    for (let i=0;i<9;i++) {
        for (let j=0; j<9; j++) {
            if(board[i][j]===".") {
                for (let n=1; n<10;n++) {
                    if (validSudoku(i,j,n,board)) {
                        board[i][j]=n.toString();
                        if (fillSudoku(board)) {
                          return true;  
                        } else {
                            board[i][j]=".";
                        }
                    }   
                }
                return false;
            }
        }
    }        
    return true;    
}

const validSudoku = function(row, col,n, board) {
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === n.toString()) return false;
        if (board[row][i] === n.toString()) return false;
    }
    let rowStart = Math.floor(row / 3) * 3;
    let colStart = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[rowStart + i][colStart + j] === n.toString()) {
               return false; 
            } 
        }
    }
    return true;
}

var test1 = [["5","3",".",".","7",".",".",".","."],
             ["6",".",".","1","9","5",".",".","."],
             [".","9","8",".",".",".",".","6","."],
             ["8",".",".",".","6",".",".",".","3"],
             ["4",".",".","8",".","3",".",".","1"],
             ["7",".",".",".","2",".",".",".","6"],
             [".","6",".",".",".",".","2","8","."],
             [".",".",".","4","1","9",".",".","5"],
             [".",".",".",".","8",".",".","7","9"]]


