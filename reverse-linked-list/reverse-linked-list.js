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
var reverseList = function(head) {
    if (head === null) return head
    var originalNext = head.next
    var currentNext = null
    var newHead 
    while (head !== null) {
        newHead = head
        newHead.next = currentNext
        currentNext = newHead
        // console.log(newHead)
        head = originalNext
        if (head !== null) {
          originalNext = head.next
        }
    }
    return newHead
};