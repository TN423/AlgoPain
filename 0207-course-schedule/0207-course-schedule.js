/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const buildAdjList = (n,edges)=>{
    var adjList = Array.from({length:n},()=>[])
    for (var edge of edges) {
        var [src,dest]=edge
        adjList[src].push(dest)
    }
    return adjList
}


var hasCycleDFS = (node, adjList, visited, visiting)=>{
    visiting[node]=true
    visited[node]=true
    // console.log(adjList[node])
    for (var neighbor of adjList[node]){
        if(!visited[neighbor]){
            visited[neighbor]=true
            if(hasCycleDFS(neighbor, adjList, visited, visiting)) return true
        } else {
            if(visiting[neighbor]) return true
        }

    }

    visiting[node]=false
    return false
}



var canFinish = function (numCourses, prerequisites) {
    var adjList = buildAdjList(numCourses, prerequisites)
    var visited = {}
    var visiting = {}
    for (var vertex = 0; vertex <adjList.length;vertex++) {
        if(!visited[vertex]) {
            if(hasCycleDFS(vertex,adjList,visited, visiting)) return false
        }
    }

    return true
}
