/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */


const reverse = function (head) {
    var prev = null;
    var cur = head;
    var next;
    while (cur) {
        next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    return prev
}


var isPalindrome = function(head) {
    var fast = head;
    var slow = head;
    var startPointer = head;
    var length = 0
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        length++
    }
    
    var mid = reverse(slow)
    
    while (length--) {
        if (mid.val !== startPointer.val) return false
        mid = mid.next
        startPointer = startPointer.next
    }
    return true
}

// var isPalindrome = function(head) {
//    var array = []
//    var cur = head
//    while (cur) {
//        array.push(cur.val)
//        cur = cur.next
//    }
//    var original = array.slice().join('')
//    var reverse = array.slice().reverse().join('')
//    return original === reverse
    
// };