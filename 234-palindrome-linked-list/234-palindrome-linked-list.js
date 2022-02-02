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
var isPalindrome = function(head) {
   var array = []
   var cur = head
   while (cur) {
       array.push(cur.val)
       cur = cur.next
   }
   var original = array.slice().join('')
   console.log(original)
   var reverse = array.slice().reverse().join('')
    console.log(reverse)
   return original === reverse
    
};