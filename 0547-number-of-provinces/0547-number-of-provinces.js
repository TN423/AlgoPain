/**
 * @param {number[][]} isConnected
 * @return {number}
 */

    //a counter
    //iterate through matrix
      //if there's a 1
        //increment counter
        //run a sink function to change all 1s to zeroes, so that we don't double count the province
    
    //the sink function turns current coordinate to a 0
    //if out of bounds or coordinate is already a 0, return and stop
    //otherwise recursively calls itself on the coordinate above, below, left, and right to check for 1s
    //if there are 1s, it sins them as well
    
    //return the counter




const getEdges = function (idx, edge) {
    var edges = []
    for (var i =0; i <edge.length;i++) {
        if (idx === i) continue
        if (edge[i]===0) continue
        edges.push(i)
    }
    return edges
}

//... takes all the results from the returned getEdges array and pushes them into the relevant index in the adjacency list
const buildAdjList = function (edges) {
    var adjList = new Array(edges.length).fill().map(()=>[])
    for (var i =0; i <edges.length;i++) {
        adjList[i].push(...getEdges(i, edges[i]))
    }
    return adjList
}

const dfs = function (node, adjList, visited) {
    visited[node]=true
    for (var neighbor of adjList[node]) {
        if (!visited[neighbor]) {
            visited[neighbor]=true
            dfs(neighbor, adjList,visited)
        }
    }
}

var findCircleNum = function (isConnected){
    const adjList = buildAdjList(isConnected)
    var visited = {}
    var provinces = 0
    for (var node = 0; node < adjList.length;node++){
        if(!visited[node]){
            provinces++
            dfs(node, adjList, visited)
        }
    }
    return provinces
}
