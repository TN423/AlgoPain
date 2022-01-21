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

//depth first
// var preorderTraversal = function(root) {
//     var result = []
//     var dfs = function (node) {
//         if (!node) return
//         result.push(node.val)
//         dfs(node.left)
//         dfs(node.right)
//     }
//     dfs(root)
//     return result
// };


//breadth first
var preorderTraversal = function(root) {
   if (!root) return []
    var result = []
   var stack = [root]
   while (stack.length) {
       var node = stack.pop()
       result.push(node.val)
       if (node.right) stack.push(node.right)
       if (node.left) stack.push(node.left)
       
   }
   return result 
};
