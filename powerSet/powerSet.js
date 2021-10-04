/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

//first get all unique letters
//the substring concatination method
//passed in set to recursive function has a length 1 less than the original string
var powerSet = function(str) {
  str = str || ''
  var letters = {}
  for (var i =0; i <str.length; i++) {
    letters[stri[i]] = true
  }
  str = Object.keys(letters).join('')

  var solutions = {}
  var recurse = function(strSet) {
    solutions[strSet.split('').sort().join('')] = true;
    for(var i = 0; i <strSet.length; i++) {
      var subSet = strSet.substr(0, i) + strSet.substr(i+1, strSet.length)
      subSet = subSet.split('').sort.join('')
      //check if visited
      if(!solutions[subSet]) {
        solutions[subSet] = true;
        recurse(subSet)
      }
    }
  }
};
//get a sample output - the empty string counts, no duplicates, no reorders

