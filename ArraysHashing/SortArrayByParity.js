/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let l = 0;
  let r = 0;

  while (r < nums.length) {
    if (nums[r] % 2 == 0) {
      let temp = nums[l];
      nums[l] = nums[r];
      nums[r] = temp;
      l++;
    }
    r++;
  }
  return nums;
};
