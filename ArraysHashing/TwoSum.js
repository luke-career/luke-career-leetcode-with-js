/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let res = [];
  let myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (myMap.has(target - nums[i])) {
      res[0] = myMap.get(target - nums[i]);
      res[1] = i;
    } else {
      myMap.set(nums[i], i);
    }
  }
  return res;
};
