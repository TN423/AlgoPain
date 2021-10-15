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

var cloneGraph = function(node) {
   
   
   function dfs (root) {
     if (root === null) return null
     if (visited[root.val]) return visited[root.val]
     var clone = new Node(root.val)
     visited[clone.val]=clone
     for (var edge of root.neighbors) {
       clone.neighbors.push(dfs(edge))
     }
      console.log(clone)
     return clone  
   }
    var visited = {} 
    return dfs(node)
};




