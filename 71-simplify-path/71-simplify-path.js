/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var stack = [];
    var pathArray = path.split('/').filter(item => item !=='.').filter(item=> item !== '');
    for (var item of pathArray) {
        if (item === '..') {
            stack.pop()
        } else {
            stack.push(item)
        }
    }
    return '/'+ stack.join('/')
};