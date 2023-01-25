/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

var buildAdjList = function (number, edges) {
  var adjList = Array(number).fill().map(()=>[])
  for (var edge of edges) {
      var [src,dest]=edge
      adjList[src].push(dest)
  }
  // console.log(adjList)
  return adjList
}

var dFs = function (node, adjList, visiting, visited, result) {
  if (visiting[node]) return false
  if (visited[node]) return true
  visiting[node]=true
  for (var neighbor of adjList[node]) {
      if (!dFs(neighbor, adjList, visiting, visited, result)) return false
  }
  visiting[node]=false
  visited[node]=true
  result.push(node)
  return true
}

var findOrder = function(numCourses, prerequisites) {
var adjList = buildAdjList(numCourses, prerequisites)
var visiting1 = {}
var visited1 = {}
var result = []
for (var i=0; i<adjList.length;i++) {
  // console.log(node)
  if (!dFs(i, adjList, visiting1, visited1,result)) return []
}
return result
};