/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let p = 0;
  while (p <= r) {
    if (nums[p] == 0) {
      nums[p] = nums[l];
      nums[l] = 0;
      l++;
      p++;
    } else if (nums[p] == 2) {
      nums[p] = nums[r];
      nums[r] = 2;
      r--;
    } else {
      p++;
    }
  }
};
