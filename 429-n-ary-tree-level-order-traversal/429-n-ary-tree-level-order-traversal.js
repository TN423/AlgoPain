/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []
    var result = [];
    var queue = [root];
    while (queue.length) {
        var length = queue.length;
        result.push(queue.map(node=>node.val))
        while (length--) {
            var node = queue.shift()
            for (var child of node.children) {
                queue.push(child)
            }
        }
    }
    return result
  
};