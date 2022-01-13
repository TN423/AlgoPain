/**
 * @param {number} n
 * @return {string[][]}
 */

var formatBoard = function (board) {
    var result = []
    for (var col =0; col <board.length;col++) {
        var newRow = new Array(board.length).fill('.')
        newRow[board[col]]= 'Q'
        result.push(newRow.join(''))
    }
    return result
}

var solveNQueens = function(n) {
    var result = [];
    var dfs = function (i, n, slate) {
        //backtrack case
        var lastQ = i-1
        for (var prevQ = 0; prevQ <lastQ;prevQ++){
            //row conflict -the way we're placing queens, we'll never have a row conflic
            //column conflict
            if (slate[prevQ]===slate[lastQ]) return
            //diagnal conflict
            var rowDiff = Math.abs(prevQ-lastQ)
            var colDiff = Math.abs(slate[prevQ]-slate[lastQ])
            if (rowDiff === colDiff) return
        }
        //base case
        if (i === n) {
            result.push(slate.slice())
            return
        }
        //recursive case
        for (var col =0; col<n;col++) {
            slate.push(col)
            dfs(i+1,n,slate)
            slate.pop()
        }

    }
    dfs(0,n,[])
    return result.map((board)=>formatBoard(board))
};