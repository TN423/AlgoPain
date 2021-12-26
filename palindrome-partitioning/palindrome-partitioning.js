/**
 * @param {string} s
 * @return {string[][]}
 */

var isPal = function(string) {
    return string === string.split('').reverse().join('')
}

var partition = function(s) {
    var result =[]
    var dfs = function (i, s, slate) {
        if (i === s.length){
            result.push(slate.slice())
            return
        }
        
        for (var j=i;j<s.length;j++){
            if(isPal(s.slice(i,j+1))){
              slate.push(s.slice(i,j+1))
              dfs(j+1,s,slate)
              slate.pop()  
            }  
        }
    }
    dfs(0,s,[])
    return result
};