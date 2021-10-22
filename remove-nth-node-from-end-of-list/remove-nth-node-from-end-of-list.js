/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var dummy = new ListNode(0)
    //we need a dumy pointer tothe head, so that we can always get back to the head after iterating down through the list
    dummy.next = head
    var current = head
    var length = 0
    while (current !== null) {
      length++
        current = current.next
    }
    length -=n
    current = dummy
    // console.log(length)
    while (length>0){
        length --
        current = current.next
    }
    current.next = current.next.next
    return dummy.next
};