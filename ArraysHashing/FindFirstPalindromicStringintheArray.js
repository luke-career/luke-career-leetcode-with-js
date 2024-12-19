/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (let word of words) {
    if (helper(word)) {
      return word;
    }
  }
  return "";
  function helper(s) {
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
      if (s[l] != s[r]) {
        return false;
      }
      l++;
      r--;
    }
    return true;
  }
};
