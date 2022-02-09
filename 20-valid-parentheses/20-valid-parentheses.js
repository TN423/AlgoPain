/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    var stack=[]
    var dict = {
        '{':'}',
        '(':')',
        '[':']'
    }
    for (var i=0;i<s.length;i++) {
        if (s[i]==='{' || s[i]==='(' || s[i]==='[' ) {
            stack.push(s[i])
        } else {
            if (dict[stack[stack.length-1]]!==s[i]) return false
            stack.pop()
        }
    }
    
    if (stack.length) return false
    
    return true
     
    
    
    
}

















// var isValid = function(s) {
//     var stack = []
//     var map = {
//         '(':')',
//         '{':'}',
//         '[':']'
//     }
//     for (var i =0; i<s.length; i++) {
//         if(s[i]==='('||s[i]==='{'||s[i]==='[') {
//             stack.push(s[i])
//         } else {
//             if (s[i]!==map[stack[stack.length-1]]) return false
//             stack.pop()
//         }
//     }
//     if (stack.length!==0) return false
//     return true
    
//     console.log(stack)
// };