/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

  let l=0;

  let r = 0;

  while (r < nums.length) {
    if (r == 0 || (nums[r] != nums[r - 1] && r < nums.length)) {
      nums[l] = nums[r];
      l++;
    }
    r++;
  }
  return l;
};
