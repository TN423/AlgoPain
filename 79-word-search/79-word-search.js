/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var dfs = function (board,i,j,count,word){
      //stop case: if count matches length, we've found a word
      if(count === word.length){
          return true
      }
      //out of bounds or failure cases
      if (i<0 || i>=board.length || j<0 || j>=board[i].length || board[i][j]!== word.charAt(count)){
          return false
      }
      //toggling off the current space (to be toggled back later)
      var temp = board[i][j]
      board[i][j]=''
      
      //exploring for next letter
      var found = dfs(board,i+1,j,count+1, word)
      || dfs(board, i-1,j, count+1, word)
      || dfs(board,i,j+1, count+1,word)
      || dfs(board,i,j-1, count+1, word)
      
      //toggle back
      board[i][j]=temp
      return found
  }    

var exist = function(board,word){
  //iterate through board, running a dfs on each letter
    for (var i=0; i<board.length;i++){
      for (j=0;j<board[0].length;j++){
          if( dfs(board, i,j,0, word)){
              return true
          }
      }
  }
  return false
}
  

  