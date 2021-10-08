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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = (root, subRoot) => {
    //function to check if same
    var sameTree = (a,b) => {
        if (!a && !b) return true
        if (!a || !b) return false
        if (a.val !== b.val) return false;
        return sameTree (a.left, b.left) && sameTree(a.right, b.right)
    }
    
    //function to traverse the tree
    var dfs = (node) => {
        if(!node) return false
        //if a subtree form a given node is the same, returns true
        if(sameTree(node,subRoot)) return true
        //traverse the tree left and right
        return dfs(node.left) || dfs(node.right)
    }
    return dfs(root)
};