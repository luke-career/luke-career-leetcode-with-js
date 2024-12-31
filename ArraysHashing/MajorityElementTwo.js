/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let len = Math.floor(nums.length / 3);
  let res = [];
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let [key, value] of map) {
    if (value > len) {
      res.push(key);
    }
  }
  return res;
};
