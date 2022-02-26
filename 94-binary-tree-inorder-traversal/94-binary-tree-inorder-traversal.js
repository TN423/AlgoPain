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
 * @return {number[]}
 */









var inorderTraversal = function(root) {
    var result = []
    var dfs = function (node) {
        if (!node) return
        if(node.left) dfs(node.left)
        result.push(node.val)
        if (node.right) dfs(node.right)
    }
    dfs(root)
    return result
};