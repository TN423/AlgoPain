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
var diameterOfBinaryTree = function(root) {
    if (!root) return 0
    var max = 0
    var dfs = function (node) {
        if (!node) return 0
        var left = dfs(node.left)
        var right= dfs (node.right)
        max = Math.max(left+right, max)
        return (Math.max(left,right))+1
    }
    dfs(root)
    return max
};