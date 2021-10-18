/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

//a hash table
    //keep track of nodes visited
    //keep track of 

var cloneGraph = function (graph) {
    if (!graph) return null
    var map = new Map()
    function dfs (node) {
        if(map.has(node)) return map.get(node)
        var clone = new Node(node.val)
        map.set(node, clone)
        //for of loop since map is an iterable colleciton
        for (var neighbor of node.neighbors) {
            clone.neighbors.push(dfs(neighbor))
        }
        console.log(clone)
        return clone
    }
    return dfs(graph)
}

// var cloneGraph = function(node) {
//     var visited = {} 
//     function dfs (root) {
//      if (root === null) return null
//      if (visited[root.val]) return visited[root.val]
//      var clone = new Node(root.val)
//      visited[clone.val]=clone
//      for (var edge of root.neighbors) {
//        clone.neighbors.push(dfs(edge))
//      }
//       console.log(clone)
//      return clone  
//    }

//     return dfs(node)
// };




