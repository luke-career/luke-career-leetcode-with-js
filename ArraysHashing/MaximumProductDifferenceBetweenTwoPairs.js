/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  nums.sort((a, b) => a - b);
  let len = nums.length;
  let max = nums[len - 1] * nums[len - 2];
  let min = nums[0] * nums[1];
  return max - min;
};
