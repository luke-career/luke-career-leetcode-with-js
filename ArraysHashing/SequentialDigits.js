/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  let res = 0;
  let list = [];

  for (let i = 1; i < 9; i++) {
    res = i;
    for (let j = i + 1; j < 10; j++) {
      res = res * 10 + j;
      if (res < high && res > low) {
        list.push(res);
      } else if (res > high) {
        break;
      }
    }
  }
  list.sort((a, b) => a - b);
  return list;
};
