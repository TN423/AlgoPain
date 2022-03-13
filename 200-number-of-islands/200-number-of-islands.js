/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    //counter 
    var result =0
    //iterate through all positions
    for (var row =0; row<grid.length;row++) {
        for (var col =0; col<grid[0].length; col++) {
            if (grid[row][col]==='1') {
                result++
                sinkIsland (row, col)
            }
        }
    }
    function sinkIsland (row, col) {
        if (row <0 || row > grid.length-1 || col <0 || col > grid[0].length-1 || grid [row][col]==='0') {
            return 
        }
        grid[row][col]='0'        
        sinkIsland (row+1, col)
        sinkIsland (row-1, col)
        sinkIsland (row, col-1)
        sinkIsland (row, col+1)
    }
    //inner recursive function - keep track of 3 variables, x, y, and the grid
      //sink current position
      //sink adjacent positions - up, down, left, right
      //
    return result
};