/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let mySet = new Set();
  for (let num of nums) {
    if (mySet.has(num)) {
      return true;
    }
    mySet.add(num);
  }
  return false;
};
