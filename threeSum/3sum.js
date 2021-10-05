var threeSum = function(nums) {
  var output = []
  nums = nums.sort()
  for (var i = 0; i < nums.length; i++) {
    var first = nums[i]
    if (first === nums[i-1]) continue;
    var secondIndex = i+1
    var thirdIndex = nums.length - 1
    const seens = {}
    while (secondIndex < thirdIndex) {
      var second = nums[secondIndex]
      var third = nums [thirdIndex]
      var sum = first + second+ third
      if (sum ===0 && !seens[second] && !seens[third]) {
        output.push([first, second, third])
        seens[third] = true;
        seens[second] = true;
      }
      if (sum >= 0) thirdIndex--
    if (sum <= 0) secondIndex++
    }

  }
  return output
}

var result = threeSum([-2,1,-5,3,2,0,-1])
console.log(result)
