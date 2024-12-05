/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  let myMap = new Map();
  let max = -1;
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (myMap.has(char)) {
      max = Math.max(max, i - myMap.get(char) - 1);
    } else {
      myMap.set(char, i);
    }
  }
  return max;
};
