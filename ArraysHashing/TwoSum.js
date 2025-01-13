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

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      res.push(map.get(target - nums[i]));
      res.push(i);
    }
    map.set(nums[i], i);
  }
  return res;
};
