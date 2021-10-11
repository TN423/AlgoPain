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

//do they both live to the left or both live to the right
//lowest common ancestor can be itself
//if not, then that means that they split and our current node is the lowest common ancestor
var lowestCommonAncestor = function(root, p, q) {
    //find lowest in tree that has both p
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q)
    } else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right,p,q)
    } else {
        return root
    }
};