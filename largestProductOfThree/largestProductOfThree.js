/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  // sort the array largest to smallest
  //multiply the first 3 elements
  var copy = array.slice();
  var sorted = copy.sort(function (a,b) {
    return b-a
  })
  return sorted[0]*sorted[1]*sorted[2]
};
