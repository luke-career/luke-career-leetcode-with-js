/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let sum = 0;
  let count = 0;
  let myMap = new Map();
  myMap.set(0, 1);
  for (let num of nums) {
    sum += num;
    if (myMap.has(sum - k)) {
      count += myMap.get(sum - k);
    }
    myMap.set(sum, (myMap.get(sum) || 0) + 1);
  }
  return count;
};
