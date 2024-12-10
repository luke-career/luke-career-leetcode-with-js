/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let count = 0;
  let myMap = new Map();
  for (let num of nums) {
    myMap.set(num, (myMap.get(num) || 0) + 1);
  }

  let res = [...myMap.entries()];

  for (let [key, value] of res) {
    if (value == 1) return -1;

    count += Math.floor(value / 3);
    if (value % 3 != 0) {
      count += 1;
    }
  }
  return count;
};
