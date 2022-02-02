/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
   var dummy = new ListNode(-1, head) 
   var prev = dummy
   var cur = head
   while (cur) {
       if (cur.val === val) {
           prev.next = cur.next
           cur = cur.next
       } else {
           prev=prev.next
           cur = cur.next
       }
   }
    return dummy.next
};