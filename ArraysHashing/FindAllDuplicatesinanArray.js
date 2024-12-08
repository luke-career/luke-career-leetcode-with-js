/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let p = Math.abs(nums[i]);

    if (nums[p - 1] < 0) {
      res.push(p);
    } else {
      nums[p - 1] = -nums[p - 1];
    }
  }
  return res;
};
