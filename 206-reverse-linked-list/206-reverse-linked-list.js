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
    var prev = null;
    var cur = head;
    var next = null
    while (cur !== null) {
        next = cur.next
        cur.next = prev
        prev = cur
        cur = next
        
    }
    
    return prev
    
    
}    
















// var reverseList = function(head) {
//     if (head === null) return head
//     var originalNext = head.next
//     var currentNext = null
//     var newHead 
//     while (head !== null) {
//         newHead = head
//         newHead.next = currentNext
//         currentNext = newHead
//         // console.log(newHead)
//         head = originalNext
//         if (head !== null) {
//           originalNext = head.next
//         }
//     }
//     return newHead
// };