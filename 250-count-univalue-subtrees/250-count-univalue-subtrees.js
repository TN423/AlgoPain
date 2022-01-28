/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countUnivalSubtrees = function(root) {
  if (!root) return 0
  var count = 0
  var dfs = function (node) {
      if (node.left === null && node.right === null) {
          count++
          return true
      }
      
      var unival = true
      
      
      //if one one node returns a false, the parent can't be a unival even if the other node 
      //returns true, this is why we need the unival = unival - to prevent it from resetting to to true when we run dfs on the other node (i.e left is false, but right is true) it our local variable will reset to true unless we say unival = unival && left/right && left/right val = current node.val
      
      if (node.left) {
          var left = dfs(node.left)
          unival = unival && left && node.left.val === node.val
      }
      
      if (node.right) {
          var right = dfs(node.right)
          unival =  unival &&right && node.right.val === node.val
      }
      if (unival) count++
      return unival
  }
  dfs(root)
  return count  
};