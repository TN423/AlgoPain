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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) return false
  var hasPath = false
  var dfs = function (node, sum) {
    if (node.left === null && node.right === null) {
        if (sum === node.val) {
            hasPath = true
        }   
        return
    }  
      
    if (node.left ) dfs(node.left, sum - node.val)  
    if (node.right) dfs(node.right, sum - node.val)
  }
    dfs(root, targetSum)
    return hasPath
};