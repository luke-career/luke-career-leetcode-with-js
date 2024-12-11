/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let myMap = new Map();
  let len = nums.length / 3;
  let res = [];

  for (let num of nums) {
    myMap.set(num, (myMap.get(num) || 0) + 1);
  }

  for (let [key, value] of myMap.entries()) {
    if (value > len) {
      res.push(key);
    }
  }
  return res;
};
