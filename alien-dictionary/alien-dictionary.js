/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    //create graph and populate it
    var graph = {}
    var letters = []
    for (var i =0; i <words.length;i++){
        letters.push(...words[i].split(''))
    }
    for (var j=0;j<letters.length;j++){
        graph[letters[j]]=[]
    }
    for (var i=0; i<words.length-1;i++) {
        var top = words[i]
        var down = words[i+1]
        var minLength = Math.min(top.length, down.length)
        for (var j=0;j<minLength;j++){
            if(top[j]!=down[j]) {
                graph[top[j]].push(down[j])
                break
            }
        } 
        if(top.length > down.length && top.startsWith(down)) return "";
    }
    // console.log(graph)
    //run a dfs with a detect cycle
    var visiting = new Set()
    var visited = new Set()
    var result = []
    function dfs(node) {
        if (visiting.has(node)) return false
        if (visited.has(node)) return true
        visiting.add(node)
        for (var neighbor of graph[node]) {
            if(!dfs(neighbor)) return false
        }
        visiting.delete(node)
        visited.add(node)
        result.push(node)
        // console.log(result)
        return true
    }
    for ([key, val] of Object.entries(graph)) {
        if(!dfs(key)) return ""
    }
    
    // console.log(result)
    return result.reverse().join('')
};