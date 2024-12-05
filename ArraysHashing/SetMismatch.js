/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let res = [];
  let mySet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (mySet.has(nums[i])) {
      res.push(nums[i]);
    } else {
      mySet.add(nums[i]);
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!mySet.has(i)) {
      res.push(i);
    }
  }

  return res;
};
