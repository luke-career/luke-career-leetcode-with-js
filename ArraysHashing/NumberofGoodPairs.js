/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const myMap = new Map();
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (myMap.has(nums[i])) {
      let size = myMap.get(nums[i]);
      count += size;
      myMap.set(nums[i], size + 1);
    } else {
      myMap.set(nums[i], 1);
    }
  }
  return count;
};
