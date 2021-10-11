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

 // var sortedNodes = dfs(root).sort((a,b)=>{return a-b}) -if you used preorder (puting push before recursing .left in dfs), then you would have to sort. But because we put the push in between the .left and .right, the result array is already sorted
var kthSmallest = function(root, k) {
    var sortedNodes = dfs(root)
    return sortedNodes[k-1]
};

//do inorder traversal (put the push after the call to node .left)
//this way the result array is already sorted 
function dfs (root) {
    var result = []
      function recurse (node) {
        if (node.left) recurse(node.left)
        result.push(node.val)
        if (node.right) recurse(node.right)
      }
    recurse(root)
    return result
}

//better
