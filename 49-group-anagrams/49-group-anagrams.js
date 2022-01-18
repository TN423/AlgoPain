/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var hash ={}
  for (var word of strs) {
      var sorted = word.split('').sort().join('')
      if (!hash[sorted]) {
          hash[sorted]=[word]
      } else {
          hash[sorted].push(word)
      }
  } 
  return Object.values(hash)  
}


// var groupAnagrams = function(strs) {
//     //hash table with key sorted string, value empty array
//     var hashTable = {}
//     for (var word of strs) {
//         //.split('').sort().join() to get hash table of sorted words
//         var sorted = word.split('').sort().join('')
//         if (!hashTable[sorted]) {
//             hashTable[sorted]=[]
//             hashTable[sorted].push(word)
//         } else {
//             hashTable[sorted].push(word)
//         }
        
//     }
//     //return an array of the values of the hash table
//     return Object.values(hashTable)
// };