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


var maxPathSum = function(root) {
    var result = -Infinity
    var search = function (node) {
        if (!node) return 0
        var left = Math.max(0,search(node.left))
        var right = Math.max(0, search(node.right))
        result = Math.max(result, left+right+node.val)
        //return maxtpath sum that ends at the current root
        return Math.max(left,right)+node.val
    }
    search(root)
    return result
};