/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  myMap = new Map();
  let pre = 0;
  myMap.set(0, -1);
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i] == 0 ? -1 : 1;
    pre += temp;
    if (myMap.has(pre)) {
      max = Math.max(max, i - myMap.get(pre));
    } else {
      myMap.set(pre, i);
    }
  }
  return max;
};
