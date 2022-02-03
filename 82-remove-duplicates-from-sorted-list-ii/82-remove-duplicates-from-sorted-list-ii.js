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
var deleteDuplicates = function(head) {
    var dummy = new ListNode(-Infinity, head)
    console.log(dummy)
    var prev = dummy
    var cur = head
    while (cur) {
        if (cur.next && cur.val === cur.next.val) {
            while (cur && cur.next && cur.val===cur.next.val) {
              cur = cur.next  
            }
            prev.next = cur.next
            cur = cur.next
            
        } else {
            prev = cur
            cur = cur.next
        }
        
    } 
    return dummy.next
    
};