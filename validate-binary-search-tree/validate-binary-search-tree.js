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
 * @return {boolean}
 */
// var isValidBST = function(root) {
//     if (!root) return true
//     if (root.left && root.right) {
//        if (root.left.val>=root.val || root.right.val<=root.val) return false
//     } 
//     if (root.left && !root.right) {
//         if (root.left.val>=root.val) return false
//     }
//     if (!root.left && root.right) {
//         if (root.right.val<=root.val) return false
//     } else {
//         return true
//     }
//     return isValidBST(root.left) && isValidBST(root.right) 
       
    
// };

var isValidBST = function(root) {
    
    function helper(root, min, max){
        if(root == null)
            return true;
        
        //this check has to be root.val should be strictly less than min and max (cant' be equal either)
        if(root.val <= min || root.val >= max) return false;
        
        return helper(root.left, min, root.val) && helper(root.right, root.val, max);
    }
    return helper(root, -Infinity, Infinity);
};