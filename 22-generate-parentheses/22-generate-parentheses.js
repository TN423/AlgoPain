/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = []
    const dfs = function (i, n, slate, opCount, clCount) {
        //backtrack cases
        if (clCount > opCount) return
        if (opCount > n) return
        //base case
        if (i===n*2) {
            result.push(slate.join(''))
            return
        }
        
        //dfs recursive cases
        slate.push('(')
        dfs(i+1,n,slate,opCount+1,clCount)
        slate.pop()
        
        slate.push(')')
        dfs(i+1,n, slate, opCount,clCount+1)
        slate.pop()
        
    }
    dfs(0,n,[],0,0)
    return result
};