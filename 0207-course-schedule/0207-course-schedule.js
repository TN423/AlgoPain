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


var hasCycleDFS = (node, adjList, visited, arrive, depart)=>{
    arrive[node]++
    visited[node]++
    console.log(adjList[node])
    for (var neighbor of adjList[node]){
        if(!visited[neighbor]){
            visited[neighbor]=true
            if(hasCycleDFS(neighbor, adjList, visited, arrive, depart)) return true
        } else {
            if(depart[neighbor]===0) return true
        }

    }

    depart[node]++
    return false
}



var canFinish = function (numCourses, prerequisites) {
    var adjList = buildAdjList(numCourses, prerequisites)
    var visited = {}
    var arrive = Array.from({length:numCourses},()=> 0)
    var depart = Array.from({length:numCourses},()=> 0)
    for (var vertex = 0; vertex <adjList.length;vertex++) {
        if(!visited[vertex]) {
            if(hasCycleDFS(vertex,adjList,visited, arrive, depart)) return false
        }
    }

    return true
}
