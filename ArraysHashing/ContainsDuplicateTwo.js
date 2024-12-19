/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let mySet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (mySet.has(nums[i])) {
      return true;
    }
    mySet.add(nums[i]);

    if (mySet.size > k) {
      mySet.delete(nums[i - k]);
    }
  }
  return false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (myMap.has(nums[i])) {
      if (i - myMap.get(nums[i]) <= k) {
        return true;
      }
    }
    myMap.set(nums[i], i);
  }
  return false;
};
