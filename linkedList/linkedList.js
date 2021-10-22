class Node {
  constructor(val){
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push (val) {
    //if no head
    if (!this.head) {
      this.head = new Node(val)
      this.tail = this.head
    } else {
      //add node as current tails next
      this.tail.next = new Node(val)
      //update the taile to be the new node
      this.tail = this.tail.next
    }
    //increment length
    this.length++
    return this;
  }

  pop () {
    //if theres no value return undefined
    if(this.length === 0) return undefined
    // make the current the the head
    var current = this.head
    //create a newTail variable, set it equal to current
    var newTail = current
    //iterate through list while a current.next exist, in order to get to the very last node
    while (current.next) {
      //set newTail equal to current
      newTail = current
      //and current equal to current.next (we're preparing to pop the current node off)
      current = current.next
    }
    //update this.tail
    this.tail = newTail
    //update this.tail.next (remove the next pointer)
    this.tail.next = null
    //decrement length
    this.length --
    return current
  }

  shift () {
    if (!this.head) return undefined
    //current is this.head
    var current = this.head
    //new head is this.head .next
    this.head = this.head.next
    this.length --
    return current
  }

  unshift (val) {
    if (!this.head) {
      this.head = new Node(vale)
      this.tail = this.head
    }
    var newHead = new Node(val)
    var newhead.next = this.head
    this.head = newHead
    this.length++
    return this
  }
  //takes a number and returns the item in that position
  //traverse the list
  //while
  get (val) {
    var count = 0
    var current = this.head
    //travers
    while (count !== val){
      current = current.next
      count++
    }
    return current
  }
  set (newVal, position) {
    var count = 0
    var current = this.head
    //alternatively use get method, then set the returned nodes .val property to newVal
    while (count !== position){
      current = this.head.next
      count++
    }
    current.val = newVal
    return current
  }

  //add a node at a specific position
  //better strategy is to use prev = this.get(index-1), then temp = prev.next
  insert (val, position) {
    //create a new node
    var newNode = new Node(val)
    var counter1 = 0
    var counter2 = 0
    var currentPost = this.head
    var currentPre = this.head
    //if want to insert at position 4, the travers to position 5
    while(counter1 !== (position+1)) {
      currentPost = this.head.next
      counter1+=1
    }
    newNode.next = currentPost
    while (counter2 !== (position -1)) {
      currentPre = this.head.next
      counter2+=1
    }
    currentPre.next = newNode
    //set position 5 node as newNodes.next
    //traverse to position 3
      // change current node.next to be new node
    return this;
  }

  remove(position) {
    var prePoint = this.get(position-1)
    var removed = prePoint.next
    var postPoint = this.get (position+1)
    prePoint.next = postPoint
    return removed
  }

  //reversed in place. don't make a copy
  //traverse and reverse
  reverseList () {
    var list = this.head
    var revList = null
    while (list) {
      if (revList === null){
        revList = this.tail
      } else {
        revList.next = this.tail
      }
      list.pop()
    }
    return revList
  }

  reverse2 () {
    var node = this.head
    this.head = this.tail
    this.tail = node
    var next
    var prev = null
    for (var i = 0; i <this.length;i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }


}

