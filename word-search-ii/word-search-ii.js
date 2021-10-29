/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board,wordz){
    var result = []
    var root = buildTrie3(wordz)

    //iterate through all letters in board, pefroming a dfs to see if we get a matching word from the trie
    for (var i=0; i<board.length;i++) {
        for (var j=0; j<board[0].length;j++){
            dfs(root,i,j)
        }
    }
      
    //build a trie out of words array
    function buildTrie3 (words){
        var root={}
        for (var word of words){
            //Reset back to the top of the root for each new word
            var node = root
            for (var letter of word){
                if (!node[letter]){
                   node[letter]={} 
                }
                node = node[letter]
            }
            node.wordEnd = word
        }
        return root
    }

    //dfs
    function dfs(root,i,j){
        
        //base case true
        if (root.wordEnd){
            result.push(root.wordEnd)
            console.log(result)
            root.wordEnd = undefined
        }

        //base case false
        if( i<0 || i >=board.length || j<0 || j>= board[0].length ||root[board[i][j]]===undefined ) {
            return
        }
 
        //temp variable
        var temp = board[i][j]
        board[i][j]=''
        //explore
        dfs(root[temp],i+1,j)
        dfs(root[temp],i-1,j)
        dfs(root[temp],i,j+1)
        dfs(root[temp],i,j-1)
        
        //toggle space back
        board[i][j]=temp
    }

    return result
}




 var board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
 var words = ["oath","oats","pea","pear","eat","rain"]

findWords(board,words)