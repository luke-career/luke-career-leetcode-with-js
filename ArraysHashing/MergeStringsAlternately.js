/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let l1 = 0;
  let l2 = 0;
  let res = "";
  while (l1 < word1.length && l2 < word2.length) {
    res += word1[l1];
    l1++;
    res += word2[l2];
    l2++;
  }

  if (l1 == word1.length) {
    res += word2.substring(l2);
  }

  if (l2 == word2.length) {
    res += word1.substring(l1);
  }
  return res;
};
