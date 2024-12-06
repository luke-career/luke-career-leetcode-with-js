/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
  let res = new Array(26).fill(0);
  let len = words.length;

  for (let word of words) {
    for (let char of word) {
      res[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
  }

  for (let i of res) {
    if (i % len != 0) {
      return false;
    }
  }
  return true;
};

/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
  let len = words.length;
  let myMap = new Map();

  for (let word of words) {
    for (char of word) {
      myMap.set(char, (myMap.get(char) || 0) + 1);
    }
  }

  const res = [...myMap.values()];

  for (let i of res) {
    if (i % len != 0) {
      return false;
    }
  }
  return true;
};
