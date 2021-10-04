/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

//i is 2 objects
//o is boolean
//could json stringify, but stringify wont work if keys in different order
var deepEquals = function(apple, orange) {
  if (apple === orange) {return true}
  if (orange === undefined || apple === undefined) {return false}
  if (!apple instanceof Object) || !(orange instanceof Object) { return false}
  var appleKeys = Object.keys(apple)
  var orangeKeys = Object.keys(orange)
  if (appleKeys.length !== orangeKeys.length) {return false}
  for (var key in apple) {
    if(!deepEqualls(apple[key], orange[key])) { return false}
  }
  return true;
};

//apple === orange
//if one is undefined
//if one is not an object
//if length of keys isn't the same
//for each key in apple recursuvekt call deepequals on that apple and orange key. If that results in not true, then return false
