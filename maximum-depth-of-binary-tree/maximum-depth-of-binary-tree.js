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
 * @return {number}
 */



var maxDepth = function (root) {
    if (root === null) return 0
    var left = maxDepth(root.left)
    var right = maxDepth (root.right)
    return Math.max(left, right) +1
}

// O(n) runtime



// [3,9,20]
//  3, then 9
//execution context 3
    //execution contect 9: new execution context on 9 as root.val [9] root.lef = null root.right = null
      // new context 9 left which return 0 - pops off
      // new context 9 right - pops off
      // context 9 return 1
     //exectuion context 20 return 1
//back in 3 context
  //math.max (2,2)
  // return
  

//context 1
// contex 2
