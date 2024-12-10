/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
  nums.sort((a, b) => a - b);
  if (nums.length % 3 != 0) return [];
  let res = [];
  for (let i = 0; i + 2 < nums.length; i = i + 3) {
    if (nums[i + 2] - nums[i] <= k) {
      let temp = [nums[i], nums[i + 1], nums[i + 2]];
      res.push(temp);
    } else {
      return [];
    }
  }
  return res;
};
