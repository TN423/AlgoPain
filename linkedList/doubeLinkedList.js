class Node () {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }

}

class doubleList () {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push (val) {
    var newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      //the second link going backward
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop () {
    var current = this.tail
    this.tail = this.tail.prev
    this.tail.next = null
    current.prev = null
    this.length --
    return current
  }

  shift () {
    var oldHead = this.head
    this.head = this.head.next
    this.head.prev = null
    oldHead.next = null
  }

  unshift (val) {
    var oldHead = this.head
    this.head = new Node (val)
    oldHead.prev = this.head
    this.head.next = oldHead
  }

  get (position) {
    var current;
    var count;
    if (position <= this.length/2) {
      var current = this.head
      var count =0
      while (count !== position) {
        current = this.head.next
        count++
      }
    } else {
      current = this.tail
      var count = this.length
      while (count !== position) {
        current = this.tail.prev
        count --
      }
    }
    return current
  }

  set (val,position) {
    var found = this.get(position)
    if (found !== null) {
      found.val = val
      return true
    }
    return false
  }

  insert (val, position) {
    //keep track of the before portion and the after portion for where the node will be inserted
    var beforeNode = this.get(position -1)
    var afterNode = beforeNode.next
    var NewNode = new Node(val)
    beforeNode.next = newNode
    newNode.prev = beforeNode
    newNode.next = afterNOde
    afterNode.pre = newNode
  }



}