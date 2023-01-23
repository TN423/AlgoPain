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

// const validSudoku = function(row, col,n, board) {
//     for (let i =0;i<9; i++) {
//         if (board[row][i]===n) return false;
//         if (board[i][col]===n) return false;
//     }
    
//     let subgridRowStart = Math.floor(row/3) *3;
//     let subgridColStart = Math.floor(row/3) *3;
//     for (let rowIdx = 0; rowIdx <3; rowIdx++) {
//         for (let colIdx =0; colIdx <3; colIdx++){
//             var curPlace = board[subgridRowStart+rowIdx][subgridColStart+colIdx];
//             if (curPlace == n) return false;
//         }
//     }
//     return true;
// }


// const solveSudoku =(board) => {
//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             if (board[i][j] === ".") {
//                 for (let c = 1; c <= 9; c++) {
//                     if (isValid(board, i, j, c.toString())) {
//                         board[i][j] = c.toString();
//                         if (solveSudoku(board)) {
//                             return true;
//                         }else{
//                             board[i][j] = ".";
//                         }
//                     }
//                 }
//                 return false;
//             }
//         }
//     }
//     return true;
// };

    

const validSudoku = (row, col, c,board) => {
    for (let i = 0; i < 9; i++) {
        if (board[i][col] == c) return false;
        if (board[row][i] == c) return false;
    }

    const x = ~~(row / 3) * 3;
    const y = ~~(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[x + i][y + j] == c) {
                return false;
            }
        }
    }

    return true;
};