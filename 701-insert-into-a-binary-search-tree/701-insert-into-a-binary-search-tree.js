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
 * @param {number} val
 * @return {TreeNode}
 */

//keep a prev and current then use a while loop to cycle through the tree going left or right
var insertIntoBST = function(root, val) {
    var node = new TreeNode(val)
    if (!root) return node
    var cur = root
    var prev = null
    while (cur) {
        if (val < cur.val) {
            prev = cur
            cur = cur.left
        } else {
            prev = cur
            cur = cur.right
        }
    }
    
    if (val < prev.val) prev.left = node
    else prev.right = node
    
    return root
    
    
    
};