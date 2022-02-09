/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var stack = []
    
    var dictionary = {
        '+':(a,b)=>a+b,
        '-':(a,b)=>a-b,
        '*':(a,b)=>a*b,
        '/':(a,b)=>Math.trunc(a/b)
    }
    
    
    
    for (var token of tokens) {
        if (dictionary[token]) {
            var num2 = stack.pop()
            var num1 = stack.pop()
            stack.push(dictionary[token](num1, num2))
        } else {
            stack.push(parseInt(token))
        }
    }
    return stack.pop()
};