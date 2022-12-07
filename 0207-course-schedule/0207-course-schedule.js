/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */


//an array of length n and we're going to start by setting every one of those edges to an empty array
//now we're going to iterate over the edges, and we want to pull out our source and destination
var adjList = function (nums, edges) {
    var adjList = Array(nums).fill().map(()=>[])
    for (var edge of edges) {
        let [src, dest]= edge;
        adjList[src].push(dest);
    }
    console.log(adjList)
    return adjList
}

const detectCycle = function (node, adjList, visited, visiting) {
    visited[node]=true;
    visiting[node]=true;
    console.log(node)
    for (let neighbor of adjList[node]) {
        if (!visited[neighbor]) {
            visited[neighbor]=true
            if (detectCycle(neighbor, adjList, visited, visiting)) return true;
        } else {
            if (visiting[neighbor]) return true;
        }
    }
    
    visiting[node]=false;
    return false
}

var canFinish = function (numCourses, prerequisites) {
    let adjacencyList = adjList (numCourses, prerequisites);
    let visited = {};
    let visiting = {};
    for (let node = 0; node<adjacencyList.length;node++) {
        if (!visited[node]) {
           if (detectCycle(node, adjacencyList,visited,visiting)) return false 
        }
        
    }
    return true
}
