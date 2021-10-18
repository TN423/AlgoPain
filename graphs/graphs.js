class Graph {
  constructor() {
      this.adjacencyList = {}
  }
  addVertex(vertex) {
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex]=[]
  }

  addEdge(vert1,vert2) {
      this.adjacencyList[vert1].push(vert2)
      this.adjacencyList[vert2].push(vert1)
  }

  removeEdge(vert1,vert2) {
      this.adjacencyList[vert1] = this.adjacencyList[vert1].filter((vert)=>{ return vert!==vert2})
      this.adjacencyList[vert2] = this.adjacencyList[vert2].filter((vert)=>{ return vert!==vert1})
  }

  removeVertex(vertex) {
      //iterate this vertex's adjancency list, removing all edges
      //after all edges removed, delete the vertex
      while(this.adjacencyList[vertex].length) {
          var adjacentVertex = this.adjacencyList[vertex].pop()
          this.removeEdge(vertex,adjacentVertex)
      }
      delete this.adjacencyList[vertex]
  }

  dfsRecursive (start) {
      var result = []
      var visited = {}
      var adjacencyList=this.adjacencyList
      console.log(adjacencyList)
      function dfs (vertex) {
        if (!vertex) return
        visited[vertex]=true
        result.push(vertex)
        adjacencyList[vertex].forEach((neighbor)=>{
          if (!visited[neighbor]) {
              return dfs(neighbor)
          }
        })
        for (var i=0;i<adjacencyList[vertex].length)
      }
      dfs(start)
      return result
  }

  tester () {
      var that = this
      function bob () {
          console.log('nested this',that)
      }
      bob()
  }
}

var test = new Graph
test.addVertex('A')
test.addVertex('B')
test.addVertex('C')
test.addEdge('A','B')
test.addEdge('B','C')
test.addEdge('A','C')

// test.removeVertex('B')
// console.log('after',test)
// test.tester()

test.dfsRecursive('A')