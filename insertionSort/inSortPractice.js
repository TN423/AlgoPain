var insertionSort = function (arr) {
  for (var i =1; i <arr.length; i++) {
    var temp=arr[i]
    var hole=i
    while (hole && temp<arr[hole-1]) {
      arr[hole]=arr[hole-1]
      hole--
    }
    arr[hole]=temp
  }
  return arr
}


console.log(insertionSort([4,3,2,1]))