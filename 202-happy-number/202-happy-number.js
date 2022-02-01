/**
 * @param {number} n
 * @return {boolean}
 */

// This is similar to linked list detect cycle. 
//2 pointers fast and slow. Use a squareNum helper function. 

var squareNum = function (number) {
    var total =0
    while (number !== 0) {
        var last = number % 10
        number = Math.floor(number/10)
        total+=Math.pow(last,2)
    }
    return total
}


var isHappy = function(n) {
    var fast = n
    var slow = n
    while (true) {
        fast = squareNum(squareNum(fast))
        slow = squareNum(slow)
        if (fast === slow) {
            return fast === 1;
        }
    }
    
};