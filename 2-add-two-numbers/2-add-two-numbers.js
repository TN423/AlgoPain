/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var carry = 0;
    var result = new ListNode(-1)
    var dummy = result;
    while (l1 || l2 || carry) {
        var l1val = l1 ? l1.val : 0
        var l2val = l2 ? l2.val : 0
        var nextDigit = (l1val+l2val+carry ) % 10
        result.next = new ListNode (nextDigit)
        result = result.next
        carry = Math.floor((l1val+l2val+carry) /10 )
        l1 = l1 ?l1.next :null
        l2 = l2 ? l2.next :null
    }
    return dummy.next
};