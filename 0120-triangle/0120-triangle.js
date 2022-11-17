/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var tab = []
    for (var row of triangle) tab.push(Array(row.length).fill(0))
    tab[0]=triangle[0]
    // console.log(triangle)
    for (var row =1; row < triangle.length;row++) {
        for (var col=0; col < triangle[row].length;col++) {
            if (col===0) {
                tab[row][col]= tab[row-1][0]+ triangle[row][col]
                // console.log(tab)
            } else if (col===triangle[row].length-1) {
                tab[row][col]= tab[row-1][tab[row-1].length-1]+triangle[row][col] 
            } else {
                tab[row][col]= Math.min(tab[row-1][col], tab[row-1][col-1])+triangle[row][col]
            }
        }
    }
    // console.log(tab)
    return (Math.min(...tab[tab.length-1]))
    
};