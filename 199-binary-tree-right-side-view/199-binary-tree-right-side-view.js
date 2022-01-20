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
var rightSideView = function(root) {
    if (!root) return []
    var result = []
    var queue = [root]
    while (queue.length) {
       var length = queue.length;
       result.push(queue[queue.length-1].val)
       while (length--) {
           var node = queue.shift()
           if (node.left) queue.push(node.left)
           if (node.right)queue.push(node.right)
       } 
    }
    return result
};