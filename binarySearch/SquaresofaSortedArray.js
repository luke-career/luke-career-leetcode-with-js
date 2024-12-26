/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let res = new Array(nums.length);
  let index = r;

  while (l <= r) {
    let left = nums[l] * nums[l];
    let right = nums[r] * nums[r];
    if (left > right) {
      res[index] = left;
      l++;
    } else {
      res[index] = right;
      r--;
    }
    index--;
  }
  return res;
};
