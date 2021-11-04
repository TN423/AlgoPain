lass MaxBinaryHeap {
  constructor() {
      this.values = []
  }
  insert(element){
      this.values.push(element)
      this.bubbleUp()
  }
  bubbleUp() {
    var childIndex = this.values.length -1
    var child = this.values[index]
    while (index>0){
        var parentIndex = Math.floor((childIndex-1)/2)
        var parent = this.values[parentIndex]
        if (child <= parent) break
        this.values[parentIndex]=child
        this.values[index]=parent
        childIndex = parentIndex
    }

  }

  extractMax () {
      var max = this.values[0]
      var end = this.values.pop()
      this.values[0]=end
      this.sinkdown()
      return max
  }

  sinkdown() {
      var index =0
      var length = this.values.length
      var element = this.values[0]
      while (true) {
          var leftChildIndex = 2 * index+1
          var rightChildIndex = 2 *index +2
          var leftChild
          var rightChild
          var swap = null
          //do we we need the swapped index to be the rightChild or leftChild
          if (leftChildIndex< length){
              leftChild= this.values[leftChildIndex]
              if (leftChild>element) {
                  swap = leftChildIndex
              }
          }
          if (rightChildIndex< length){
              rightChild= this.values[rightChildIndex]
              if (
                  (swap === null && rightChild>element) ||
                  (swap !== null && rightChild > leftChild)
                  ) {
                  swap = rightChildIndex
              }
          }
          if (swap === null) break
          this.values[index] = this.values[swap]
          this.values[swap] = element
          index = swap
      }
  }

}
