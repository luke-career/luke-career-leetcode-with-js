/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let count = 0;
  for (let n of nums) {
    if (n == 0) {
      return 0;
    }

    if (n < 0) {
      count++;
    }
  }
  if (count % 2 == 0) return 1;

  return -1;
};
