/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //instantiate 2 objects
    if (s.length !== t.length) return false
    var hashS = {}
    var hashT = {}
    
    //iterate s and t
    for (var i =0; i <s.length;i++) {
        if(hashS[s[i]]===undefined) hashS[s[i]]=1
        else {hashS[s[i]]+=1}
        if(hashT[t[i]]===undefined) hashT[t[i]]=1
        else {hashT[t[i]]+=1}
    }
      //put there letters into object
    //iterate 1 object
    for (var key in hashS) {
        if (hashS[key]!== hashT[key]) return false
    }
    return true
      //if key value pair in object 1 is not same as object 2 return false
    //if we get passed the iteration, the key value pair must be identicle and return       true
};