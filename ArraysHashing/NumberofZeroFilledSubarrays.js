/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let count = 0;
  let total = 0;

  for (let num of nums) {
    if (num === 0) {
      count++;
      total += count;
    } else {
      count = 0;
    }
  }

  return total;
};
