/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  s = s.toLowerCase().replace(/[\W_]/g, '');
  return s === s.split('').reverse().join('');
};