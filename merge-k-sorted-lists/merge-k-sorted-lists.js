/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    //grab every element and push it into an array
    //iterate the array creating a linked list out of it
    //return the linked list
    var array = []
    var result = null
    for (var i =0; i< lists.length;i++) {
        var current = lists[i]
        while(current) {
            array.push(current.val)
            current = current.next
        }
    }
    array = array.sort((a,b)=>b-a)
    console.log(array)
    for (var j=0; j<array.length;j++) {
        result = new ListNode (array[j],result)
    }
    return result
};