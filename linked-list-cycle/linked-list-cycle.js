/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var map = new Map()
    while (head && map.get(head)===undefined){
        map.set(head, head.val)
        head = head.next
    }
    if (map.get(head)!==undefined) return true
    return false
};