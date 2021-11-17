/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */


// var adjList = function (n, edges) {
//     var adjList = Array.from({length:n},()=>[])
//     for (var edge of edges) {
//         var [src, dest] = edge
//         adjList[src].push(dest)
//         adjList[dest].push(src)
//     }
//     // console.log(adjList)
//     return adjList
// }

// // var bFs = function (node, list, visited) {
// //     var queue = [node]
// //     visited[node]=true
// //     while(queue.length) {
// //         var curNode = queue.shift()
// //         for (var neighbor of list[curNode]) {
// //             if(!visited[neighbor]) {
// //                 visited[neighbor]=true
// //                 queue.push(neighbor)
// //             }
// //         }
// //     }
// // }

// var dFs = function (node, list, visited) {
//     visited[node]=true
//     for (var neighbor of list[node]) {
//         if(!visited[neighbor]) {
//             visited[neighbor]=true
//             dFs(neighbor, list, visited)
//         }
//     }
// }

// var countComponents = function(n, edges) {
//     var list = adjList(n, edges)
//     var visited = {}
//     var numComponents = 0
//     for (var vertex =0; vertex<list.length; vertex++) {
//         if(!visited[vertex]) {
//             numComponents++
//             dFs(vertex, list, visited)
//         }
//     }
//     return numComponents
// }

//union find verison
var countComponents = function (n, edges) {
    var parent = []
    for (var i =0; i<n;i++){
        parent.push(i)
    }
    var rank = Array(n).fill().map(()=>1)
    
    //find a node's root parent
    function find (n1) {
        var res = n1
        while (res !== parent[res]) {
            parent[res] = parent[parent[res]]
            res = parent[res]
        }
        return res
    }
    function union (n1, n2) {
        var p1 = find(n1)
        var p2 = find(n2)
        if (p1 === p2) return 0
        
        if (rank[p2]>rank[p1]) {
            parent[p1]=p2
            rank[p2] += rank[p1]
        } else {
            parent[p2]=p1
            rank[p1]+= rank[p2]
        }
        return 1
    }
    var res = n
    for (var edge of edges) {
        res -= union(edge[0],edge[1])
    }
    return res
}

