function mergeSort(array) {
  //split
  if (array.length <=1) {
    return array
  }

  var mid =Math.floor((array.length)/2)
  var leftSide = array.slice(0,mid)
  var rightSide = array.slice(mid)
  var sortedLeft= mergeSort(leftSide)
  var sortedRight = mergeSort(rightSide)
  //sort
  var merge = function (leftSide, rightSide) {
    var i =0
    var j =0
    var result = []
    while (i<leftSide.length && j <rightSide.length){
      if(leftSide[i]<rightSide[j]){
        result.push(leftSide[i])
        i++
      } else {
        result.push(rightSide[j])
        j++
      }
    }
    var remainder = i  ===leftSide.length ? rightSide.slice(j) : leftSide.slice(i)
    // console.log(remainder)
    return result.concat(remainder)
    // return result
  }
  return merge(sortedLeft,sortedRight)

}

var answer = mergeSort([40,18,50,2,12,23,1,6])
console.log(answer)