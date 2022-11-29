/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const buildTab = function(rows, cols) {
    var tab = Array(rows+1).fill().map(()=>Array(cols+1).fill(0))
    for (var r=0; r < tab.length;r++) tab[r][0]=r
    for (var c=0; c <tab[0].length;c++) tab [0][c]=c
    return tab
}
var minDistance = function(word1, word2) {
    var tab = buildTab(word1.length, word2.length)
    for (var r = 1;r< tab.length;r++) {
        for (var c = 1;c<tab[0].length;c++) {
            if (word1[r-1]===word2[c-1]) {
                tab[r][c]=tab[r-1][c-1]
            } else {
                tab[r][c]= Math.min(tab[r-1][c-1],tab[r][c-1],tab[r-1][c])+1
            }
        }
    }
    // console.log(tab)
    return tab[word1.length][word2.length]
};