/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
   //O(M(4⋅3^(L−1)) where M is the number of cells and L is the length of the longest word

    let result = []
    let root = buildTrie(words)

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            search(root, i, j)
        }
    }

    function buildTrie(words) {
        let root = {}
    
        for (let word of words) {
            //Reset back to the top of the root for each new word
            let node = root
            for (let char of word) {
                 if (!node[char]) {
                    node[char] = {}
                }
                node = node[char]
            }
            node.wordEnd = word
        }
        return root
    }

    function search(root, i, j) {
        if (root.wordEnd != null) {
            result.push(root.wordEnd)
            root.wordEnd = null
        }
     
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || root[board[i][j]] == null) {
            return
        }
    
        let temp = board[i][j]
        board[i][j] = '#'
    
        search(root[temp], i + 1, j)
        search(root[temp], i - 1, j)
        search(root[temp], i, j + 1)
        search(root[temp], i, j - 1)
    
        board[i][j] = temp
    }
    return result
}