/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let map = new Map(),
        len = s.length,
        max = 0,
        repeatMax = 0,
        windowStart = 0;
    
    for (let windowEnd = 0; windowEnd < len; windowEnd += 1) {
        let rightChar = s[windowEnd];
        
        if(!map[rightChar]) map[rightChar] = 0;
        map[rightChar] += 1;
        
        repeatMax = Math.max(repeatMax, map[rightChar])
        while (windowEnd - windowStart  - repeatMax >= k) {
            let leftChar = s[windowStart];
            map[leftChar] -= 1;
            windowStart ++;
        }
        
        max = Math.max(max, windowEnd - windowStart + 1);
    }
    return max;
};
