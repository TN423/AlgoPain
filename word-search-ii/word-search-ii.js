/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let startingPoints = {
        a: [], b: [], c: [], d: [], e: [],
        f: [], g: [], h: [], i: [], j: [],
        k: [], l: [], m: [], n: [], o: [],
        p: [], q: [], r: [], s: [], t: [], 
        u: [], v: [], w: [], x: [], y: [],
        z: []
    }
    
    
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            let character = board[row][col]
            
            startingPoints[character].push([row, col])
        }
    }
    
    return words.filter((word) => {
        let startingCharacter = word[0]
        
        if (startingPoints[startingCharacter].length === 0) return false
        
        for (let i = 0; i < startingPoints[startingCharacter].length; i++) {
            let [row, col] = startingPoints[startingCharacter][i]
            
            if (depthFirstSearch(board, word, 0, row, col)) return true
        }
        
        return false
    })
}

var depthFirstSearch = function(board, word, index, row, col) {
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) return false
    if (board[row][col] === '#' || board[row][col] !== word[index]) return false
    
    if (index === word.length - 1) return true
    
    let temp = board[row][col]
    board[row][col] = '#'
    
    let answer =  (
        depthFirstSearch(board, word, index + 1, row - 1, col) ||
        depthFirstSearch(board, word, index + 1, row, col + 1) ||
        depthFirstSearch(board, word, index + 1, row + 1, col) ||
        depthFirstSearch(board, word, index + 1, row, col - 1)
    )
    
    board[row][col] = temp
    
    return answer
}