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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var sortedNodes = dfs(root).sort((a,b)=>{return a-b})
    console.log(sortedNodes)
    var result = sortedNodes[k-1]
    return result
};

function dfs (root) {
    var result = []
    
    function recurse (node) {
        result.push(node.val)
        if (node.left) recurse(node.left)
        if (node.right) recurse(node.right)
    }
    recurse(root)
    return result
}