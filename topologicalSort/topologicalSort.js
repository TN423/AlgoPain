class Graph {
  constructor(){
      this.adjacencyList = {}
  }
  addVertex(vertex) {
      if(!this.adjacencyList[vertex]) {
          this.adjacencyList[vertex]=[]
      }
  }
  addEdge (v1, v2) {
      this.adjacencyList[v1].push(v2)
  }
}

var graphTest = function () {
  var graph = new Graph()
  var toAdd = ['A','B','C','D','E']
  toAdd.forEach((node)=>graph.addVertex(node))
  graph.addEdge("A","B")
  graph.addEdge("A","C")
  graph.addEdge("B","D")
  graph.addEdge("C","D")
  graph.addEdge("D","E")
  return graph
}

var newGraph = graphTest()

function dfsTopSort (graph) {
  var vertices = Object.keys(graph.adjacencyList)
  var visited = {}
  var topNums = {}
  var n = vertices.length -1
  for (var v of vertices){
     if (!visited[v]) {
         n = dfsTopSortHelper(v,n,visited,topNums)
     }
  }
  function dfsTopSortHelper(v,n,visited, topNums) {
      visited[v]=true
      var neighbors = graph.adjacencyList[v]
      for (var neighbor of neighbors) {
          if(!visited[neighbor]) {
              n=dfsTopSortHelper(neighbor,n,visited,topNums)
          }
      }
      topNums[v]=n
      return n-1
  }
  return topNums
}

console.log(dfsTopSort(newGraph))