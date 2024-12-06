/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let decrease = true;
  let increase = true;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      increase = false;
    } else if (nums[i] < nums[i + 1]) {
      decrease = false;
    }
  }

  return increase || decrease;
};
