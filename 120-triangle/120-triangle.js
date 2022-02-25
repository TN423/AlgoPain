/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var result = []
    result[0]=triangle[0]
    for (var i=1;i<triangle.length;i++) {
        result.push([triangle[i][0]+result[i-1][0]]) 
        for (var j=1;j<triangle[i].length-1;j++) {
            result[i][j]= (triangle[i][j]+Math.min(result[i-1][j], result[i-1][j-1]))         
        }
        result[i][triangle[i].length-1]=triangle[i][triangle[i].length-1]+result[i-1][triangle[i-1].length-1]
    }
    
    var min = Infinity
    for (var k=0;k<result[result.length-1].length;k++){
        min=Math.min(min, result[result.length-1][k])
    }
    return min

};