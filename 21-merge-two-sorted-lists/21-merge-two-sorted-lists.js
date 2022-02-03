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
    var dummy = new ListNode (-Infinity)
    var prev = dummy
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            prev.next = l1
            prev = prev.next
            l1 = l1.next
        } else {
            prev.next = l2
            prev = prev.next
            l2 = l2.next
        }
    }
    if (!l1) prev.next = l2
    if (!l2) prev.next = l1
    return dummy.next   
}

    
    
    
    
    


// var mergeTwoLists = function(l1, l2) {
//    var array = []
//    var list = null
   
//    while (l1) {
//        array.push(l1.val)
//        l1=l1.next
//    }
//    while (l2) {
//        array.push(l2.val)
//        l2 = l2.next
//    } 
//    array.sort((a,b)=>b-a)
//    console.log(array) 
//    for (node of array) {
//        list = new ListNode (node,list)
//    }
//    return list 
   
// }















// var mergeTwoLists = function(l1, l2) {
//     var array = []
//     var newList=null
//     while (l1) {
//         array.push(l1.val)
//         l1 = l1.next
//     }
    
//     while (l2) {
//     array.push(l2.val)
//     l2 = l2.next
//     }
//     array = array.sort((a,b)=> {return b-a})
//     for (var i =0; i < array.length; i++) {
//         newList = new ListNode(array[i],newList)
//     }
//     return newList
// };
