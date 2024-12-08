/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  const array = [...map.entries()];

  array.sort((a, b) => b[1] - a[1]);
  res = "";
  for (let [key, value] of array) {
    res += key.repeat(value);
  }
  return res;
};
