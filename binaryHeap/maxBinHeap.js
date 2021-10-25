class MaxBinaryHeap {
  constructor () {
    this.values = []
  }

  insert (element) {
    this.values.push(element)
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
}