/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let min = Number.MAX_VALUE;
  for (let i = 0; i < strs.length; i++) {
    min = Math.min(min, strs[i].length);
  }
  let j = 0;
  while (j < min) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i].charAt(j) != strs[0].charAt(j)) {
        return strs[0].substring(0, j);
      }
    }
    j++;
  }
  return strs[0].substring(0, j);
};
