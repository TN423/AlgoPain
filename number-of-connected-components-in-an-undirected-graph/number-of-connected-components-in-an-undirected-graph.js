/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */


var adjList = function (n, edges) {
    var adjList = Array.from({length:n},()=>[])
    for (var edge of edges) {
        var [src, dest] = edge
        adjList[src].push(dest)
        adjList[dest].push(src)
    }
    // console.log(adjList)
    return adjList
}

var bFs = function (node, list, visited) {
    var queue = [node]
    visited[node]=true
    while(queue.length) {
        var curNode = queue.shift()
        for (var neighbor of list[curNode]) {
            if(!visited[neighbor]) {
                visited[neighbor]=true
                queue.push(neighbor)
            }
        }
    }
}


var countComponents = function(n, edges) {
    var list = adjList(n, edges)
    var visited = {}
    var numComponents = 0
    for (var vertex =0; vertex<list.length; vertex++) {
        if(!visited[vertex]) {
            numComponents++
            bFs(vertex, list, visited)
        }
    }
    return numComponents
}












// var countComponents = function(n, edges) {
//     var adjList = {}
//     for (var i=0; i < n;i++){
//          adjList[i]=[]
//     }
//     for (var edge of edges) {
//         adjList[edge[0]].push(edge[1])
//         adjList[edge[1]].push(edge[0])
//     }
//     var visit = []
//     var components = 0
// //     console.log(adjList)
//     for (var vertex in adjList) {
//         if (!visit.includes(parseInt(vertex))) {
//             components++
//             dfs (parseInt(vertex), -1)
//         }        
//     }
//     function dfs(i, prev) {
//         if (visit.includes(i)) return false
//         visit.push(i)
//         for (var j of adjList[i]) {
//             if (j===prev) continue
//             if(!dfs(j,i)) return false
//         }
//         return true
//     }
//     return components
// }