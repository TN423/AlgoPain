/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board,word){
  for (var i=0; i<board.length;i++){
      for (j=0;j<board[0].length;j++){
          if( dfs(board, i,j,0, word)){
              return true
          }
      }
  }
  

  function dfs(board,i,j,count,word){
      if(count === word.length){
          return true
      }
      if (i<0 || i>=board.length || j<0 || j>=board[i].length || board[i][j]!== word.charAt(count)){
          return false
      }
      var temp = board[i][j]
      board[i][j]=''
      var found = dfs(board,i+1,j,count+1, word)
      || dfs(board, i-1,j, count+1, word)
      || dfs(board,i,j+1, count+1,word)
      || dfs(board,i,j-1, count+1, word)

      board[i][j]=temp
      return found
  }    
  return false
}