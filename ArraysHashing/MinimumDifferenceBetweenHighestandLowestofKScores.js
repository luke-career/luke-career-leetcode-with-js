/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);
  let min = Number.MAX_VALUE;
  for (let i = 0; i + k - 1 < nums.length; i++) {
    min = Math.min(min, nums[i + k - 1] - nums[i]);
  }
  return min;
};
