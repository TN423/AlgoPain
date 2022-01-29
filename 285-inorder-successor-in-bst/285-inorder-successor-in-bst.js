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
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
   // if p has a right subtree
    if (p.right) {
        var cur = p.right
        var prev = null
        while (cur) {
            prev=cur
            cur=cur.left
        }
        return prev
    }
    //if no right subtree
    var cur = root
    var prev = null
    while (cur !== p) {
        if (p.val < cur.val) {
            prev = cur
            cur = prev.left
        } else {
            cur = cur.right
        }
    }
    return prev
};