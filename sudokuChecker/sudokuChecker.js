/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board.
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input:
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/

//input is a string
//output is solved if true, invalid if false
//edge if not string, not a 9x9, not numbers
  //iterate -if every group of 9 character includes 1-9
  // for (var i =0;i < board.length;i++)
  //iterate - if every set of i+9+9+9.. character contains 1-9
  //iterate - if i+9+9 and (i+1)+9+9 and (i+2)+9+9 includes 1-git fadf ds  fdsfs

  //conver board into usable 2d array
  //check all rows, check all columns, check all 3x3 squares


//get it from a string into a 2d array
//.split will get you an array of strings
//the first .map gets you sub arrays each item is a string
//the second map changes the items from strings to numbers

var example = "735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429"


//questions
  //point of arr.indexof !== arr.lastIndexOf ? (3:40) - if indexOf === lastIndexOf, it means number repeated
  //if you .map a .map I think that O(n2)?
  // use .map on your rows to create an array of the column
  function sudokuChecker(boardStr) {
  //first put everything into an array of arrays (matrix)
    // var outArray=[]
    // var sampleFull=['1','2','3','4','5','6','7','8','9']
    // for (var i =0;i < board.length;+=9) {
    //   outArray.push([board[i],board[i+1],board[i+2],board[i+3],board[i+4],board[i+5],board[i+6],board[i+7],board[i+8]])
    // }
  //convert board to 2d array
  //check all rows in board
  //chall all columns in board
  //check 3x3 squares
  //if sum of the 9 numbers doesn't equal 45 then you fail
  //if board passes all check, solved



  var board = boardStr.split('\n').map(function(row) {
    return row.split('').map(function(digit){
      return parseInt(digit)
    })
  })
  function fails(arr) {
    return arr.length !== 9 || arr.reduce(function(a,b){return a+b,0})!==45 || arr.indexOf("5") !== arr.lastIndexOf("5")
  }
  for (var row =0; row <9; row++) {
    if (fails(board[row])) return 'invalid'
  }
  for (var col=0; col < 9; col++) {
    if (fails(board.map(function(row){
      return row[col]
    }))) return 'invalid'
  }
  // for (var col = 0; col <9; row+=3) {
  //   for (var row = 0; row < 9; row+=3) {
  //     var row1=board[row].splice(0,3);
  //     var row2=board[row+1].splice(0,3);
  //     var row3=board[row+2].splice(0,3);
  //     if (fails(row1.concat(row2, row3))) return 'invalid'
  //   }
  // }
  return solved;
  }


var answer = sudokuChecker(example)
console.log(answer)


//O n2 time complexity O(1) psace complexity