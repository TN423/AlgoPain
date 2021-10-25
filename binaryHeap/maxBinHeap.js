class MaxBinaryHeap {
  constructor () {
    this.values = []
  }

  insert (element) {
    this.values.push(element)
    this.bubbleUp()
  }
  bubbleUp() {
    var index = this.values.length -1
    var element = this.values[index]
    while (index >0) {
      var parentIndex = Math.floor((index -1)/2)
      var parent = this.value[parentIndex]
      if (element <= parent) break
      this.values[parrentIndex]=element
      this.values[index]=parent
      index = parentIndex
    }
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