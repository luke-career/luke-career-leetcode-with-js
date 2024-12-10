/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  let myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    myMap.set(nums[i], (myMap.get(nums[i]) || 0) + 1);
  }

  result = [];
  while (true) {
    temp = [];
    for (let [key, value] of myMap) {
      if (value > 0) {
        temp.push(key);
        myMap.set(key, value - 1);
      }
    }
    if (temp.length == 0) {
      break;
    }
    result.push(temp);
  }
  return result;
};
