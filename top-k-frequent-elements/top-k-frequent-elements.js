/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //get into an object key is integer, value is # of times integer occurs
        //iterate k times
            //iterate the object keeping track of the max times and which key has the max times
            //push the max times key into a result array
            //delete the object
    //return result
    var result = []
    var resObj = {}
    var tupArray=[]
    for (num of nums) {
        if (!resObj[num]) resObj[num]=1
        else resObj[num]++
    }
    for (var key in resObj) {
        tupArray.push([parseInt(key),resObj[key]])
    }
    tupArray.sort((a,b)=>{return b[1]-a[1]})
    
    for (var i=0; i <k;i++) {
        result.push(tupArray[i][0])
    }
    console.log(result)
    return result
    
};