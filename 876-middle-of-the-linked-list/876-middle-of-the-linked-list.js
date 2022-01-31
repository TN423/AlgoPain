/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    var front = head
    var array = []
    while (head) {
        array.push(head)
        head = head.next
    }
    var mid = Math.ceil((array.length-1)/2)
    

    return array[mid]
};