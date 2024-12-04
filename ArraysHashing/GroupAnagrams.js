/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let charArray = strs[i].split("");
    charArray.sort();
    let str = charArray.join("");
    if (!map.has(str)) {
      map.set(str, []);
    }
    map.get(str).push(strs[i]);
  }
  return [...map.values()];
};
