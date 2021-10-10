/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
//test
//write base case first - if no length then return null for the node

//preorder to figure out current root and inorder to figure out the left/right
//find pivot in inorder - the left and right will always be to left and right side of pivot 
var buildTree = function(preorder, inorder) {
    if (!inorder.length) return null
    var root = preorder.shift()
    var pivot = inorder.indexOf(root)
    var node = new TreeNode(root)
    node.left =  buildTree(preorder, inorder.slice(0,pivot))
    node.right = buildTree(preorder, inorder.slice(pivot+1))
    return node
};