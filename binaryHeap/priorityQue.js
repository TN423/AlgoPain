class MaxBinaryHeap {
  constructor () {
    this.values = []
  }

  enqueue (val, priority) {
    var node = new Node (val, priority)
    this.values.push(node)
    this.bubbleUp()
  }


  bubbleUp() {
    //start index at very last node in array
    var index = this.values.length -1
    var element = this.values[index]
    //while index greater than zero, have it bubble up from the bottom of the array
    while (index>0) {
      var parentIndex = Math.min ((index-1)/2)
      var parent = this.values[parentIndex]
      if (element>paraent) break
      this.values[parentIndex]=element
      this.values[index]=parent
      index=parentIndex
    }
      //identify a given nodes parent
      //ifcurrent element priority is a higher number than the parent priority (i.e lower priority) then stop the while loop
      //otherwise swap the parent element and current element, at their respective indexes
      //update the current index to be the parent's index


  }



  extractMax () {
    var max = this.values[0];
    var end = this.values.pop();
    this.value[0]=end;
    this.sinkDown()
    return max;
  }

  sinkDown () {
    var index = 0
    var length = this.values.length
    var element = this.values[0]
    while (true) {
      var parent
      var leftChildIndex = 2*index +1
      var rightChildIndex = 2*index +2
      var leftChild
      var rightChild
      var swap = null
      if (leftChild< length) {
        leftChild= this.values[leftChildIndex]
        if(leftChild>element) {
          swap=leftChildIndex
        }
      }
      if (rightChildIndex<length) {
        rightChild=this.values[rightChildIndex]
        if (
          (swap===null && rightChild> element) ||
          (swap!== null && rightChild> leftChild)
        ) {
          swap = rightChildIndex
        }
      }
      if (swap === null) break
      this.values[index]=this.values[swap]
      this.values[swap]=element
      index = swap
    }
  }

}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = prioity;
  }
}