/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//once fast = slow, then both slow and start are equidistant from the cycle node

var detectCycle = function(head) {
  if (!head) return null
  if (!head.next) return null  
  var slow = head
  var fast = head
  var start = head
  while (fast && fast.next) {
      fast = fast.next.next
      slow = slow.next
      if (slow === fast) break
  }
  if (fast !== slow) return null  
    
  while (slow !== start) {
      
      start = start.next
      slow = slow.next
  }  
    return slow
}