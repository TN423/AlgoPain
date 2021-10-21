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
}

