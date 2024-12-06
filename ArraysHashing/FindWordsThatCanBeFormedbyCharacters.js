/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let map = new Map();

  for (const c of chars) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  let sum = 0;
  for (const word of words) {
    let isGood = true;
    let temp = new Map();
    for (let c of word) {
      temp.set(c, (temp.get(c) || 0) + 1);
      if (map.get(c) == undefined || temp.get(c) > map.get(c)) {
        isGood = false;
        break;
      }
    }
    if (isGood) {
      sum += word.length;
    }
  }
  return sum;
};

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let map = new Array(26).fill(0);

  for (let c of chars) {
    map[c.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  let sum = 0;
  for (let word of words) {
    let temp = new Array(26).fill(0);
    let isGood = true;
    for (let c of word) {
      temp[c.charCodeAt(0) - "a".charCodeAt(0)]++;
      if (
        temp[c.charCodeAt(0) - "a".charCodeAt(0)] >
        map[c.charCodeAt(0) - "a".charCodeAt(0)]
      ) {
        isGood = false;
        break;
      }
    }
    if (isGood) {
      sum += word.length;
    }
  }
  return sum;
};
