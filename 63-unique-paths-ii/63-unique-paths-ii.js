/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var tab = Array(obstacleGrid.length).fill().map(()=> Array(obstacleGrid[0].length).fill(0))
    for (var i = 0;i< tab.length;i++) {
        if (obstacleGrid[i][0]===1) break
        tab[i][0]=1 
    }
    for (var j = 0; j < tab[0].length;j++) {
        if (obstacleGrid[0][j]===1) break
        tab[0][j]=1
    }

    for (var i =1; i< tab.length;i++) {
        for (var j=1;j< tab[0].length;j++) {
            if (obstacleGrid[i][j]!==1) tab[i][j]= tab[i-1][j] + tab[i][j-1]
        }
    }
    console.log(tab) 
    return tab[tab.length-1][tab[0].length-1]
};


// var obstacleGrid = [[0,1,0],[0,0,0],[0,0,0]]