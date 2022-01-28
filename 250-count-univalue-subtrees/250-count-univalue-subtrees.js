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
      
      if (node.left) {
          var left = dfs(node.left)
          unival = unival && left && node.left.val === node.val
      }
      
      if (node.right) {
          var right = dfs(node.right)
          unival = unival && right && node.right.val === node.val
      }
      if (unival) count++
      return unival
  }
  dfs(root)
  return count  
};