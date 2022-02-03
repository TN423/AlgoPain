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
    var dummy = new ListNode (-Infinity, head)
    var prev = dummy
    var cur = head
    while (cur) {
        if (prev.val === cur.val) {
            while (cur && cur.val === prev.val){
                cur=cur.next
            }
            prev.next = cur
        } else {
            prev = cur
            cur = cur.next
        }

    }
    return dummy.next
};