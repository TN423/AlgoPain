/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
 var validTree = function(n, edges) {
    if (n <2 || n===undefined) return true
    //create adjacency list
    var adjList = {}
    for (var i =0; i<n; i++) {
        adjList[i]=[]
    }
    for (var edge of edges) {
        adjList[edge[0]].push(edge[1])
        adjList[edge[1]].push(edge[0])
    }
    //keep track of visited to detect cycles
    var visit = []
    //run dfs, but skip the previous node when detecting for cycles, since this is undirected graph
    function dfs (i, prev) {
        if (visit.includes(i)) return false
        visit.push(i)
        for(var j of adjList[i]) {
            if (j === prev) continue
            if (!dfs(j, i)) return false
        }
        return true
    }
    //visited nodes has to equal n for it to be a tree (only 1 'province')
    return dfs(0,-1) && visit.length === n

};