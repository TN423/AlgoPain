/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

var adjList = function (n, connections) {
    var adjList = Array.from({length:n},()=>[])
    
    for (var vertex of connections) {
        var [src,dest]=vertex
        adjList[src].push(dest)
        adjList[dest].push(src)
    }
    // console.log(adjList)
    return adjList
}

var dfs = function (vertex, adjList, visited) {
    visited[vertex]=true
    for (var neighbor of adjList[vertex]) {
        if(!visited[neighbor]) {
            visited[neighbor]=true
            dfs(neighbor,adjList, visited)
        }    
    }
}


var makeConnected = function(n, connections) {
    if (connections.length < n-1) return -1
    var list = adjList(n, connections)
    var visited = {}
    var regions = 0
    for (var i=0; i<n;i++) {
        if (!visited[i]) {
            regions++
            dfs(i,list,visited)
        }

    }
    return regions -1
    
    //determine # of regions. Regions -1 is # of connections
        //iterate through neighbors in adjList
          //run DFS
          //keep track of visitied
          //keep a count and increment each time we start a new region
};