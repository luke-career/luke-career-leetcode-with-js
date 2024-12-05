/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let res = -1;
  const myMap = new Map();
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    myMap.set(c, (myMap.get(c) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (myMap.get(c) == 1) {
      res = i;
      break;
    }
  }
  return res;
};

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let res = -1;

  let str = new Array(26).fill(0);
  for (let char of s) {
    str[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }
  for (let i = 0; i < s.length; i++) {
    char = s.charAt(i);
    if (str[char.charCodeAt(0) - "a".charCodeAt(0)] == 1) {
      return i;
    }
  }
  return res;
};
