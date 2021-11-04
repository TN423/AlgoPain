/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //hash table with key sorted string, value empty array
    var hashTable = {}
    for (var word of strs) {
        var sorted = word.split('').sort().join('')
        if (!hashTable[sorted]) {
            hashTable[sorted]=[word]
        } else {
            hashTable[sorted].push(word)
        }
        
    }
    return Object.values(hashTable)
};