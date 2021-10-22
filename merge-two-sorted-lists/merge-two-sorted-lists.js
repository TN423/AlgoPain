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
var mergeTwoLists = function(l1, l2) {
    var array = []
    var newList=null
    while (l1) {
        array.push(l1.val)
        l1 = l1.next
    }
    
    while (l2) {
    array.push(l2.val)
    l2 = l2.next
    }
    array = array.sort((a,b)=> {return b-a})
    for (var i =0; i < array.length; i++) {
        newList = new ListNode(array[i],newList)
    }
    return newList
};