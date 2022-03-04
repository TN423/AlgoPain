/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */


var isAnagram = function (s, p) {
    for (var i =0;i<s.length;i++) {
        if (s[i]!==p[i]) return false
    }
    return true
}

var findAnagrams = function(s, p) {
    var result = []
    var sArr = new Array(26).fill(0)
    var pArr = new Array(26).fill(0)
    
    for (var i =0; i < p.length;i++) {
      var index = p.charCodeAt(i) %26
      pArr[index]++
    }
    
    for (var i =0; i<s.length;i++) {
        var index = s.charCodeAt(i) % 26
        sArr[index]++

        if (i > p.length -1) {
            var firstIndex = s.charCodeAt(i-p.length)  %26
            sArr[firstIndex]--
        }
        
        if (i >=p.length-1) {
            if (isAnagram(sArr, pArr)) result.push(i-(p.length-1))
        }
    }
    
    return result
    
}

//Below is an N * N log N solution, but it will time out
// var findAnagrams = function(s, p) {
//     var result =[]
//     var length = p.length;
//     var pSorted = p.split('').sort().join('')
//     if (p.length>s.length) return result
    
//     for (var i=0;i<s.length;i++) {
//         var curString = s.substring(i,i+length)
//         if (curString.split('').sort().join('')===pSorted) {
//             result.push(i)
//         }
//     }
//     return result
// };