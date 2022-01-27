/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    var result = null
    var dfs = function (node) {
        if (!node) return false
        var left = dfs(node.left)
        var right = dfs(node.right)
        var cur = node === p || node === q
        if (left+right+cur>=2) result = node
        return left || right || cur
    }
    dfs(root)
    return result
};