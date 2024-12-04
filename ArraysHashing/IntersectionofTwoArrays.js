/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let res = [];
  let mySet = new Set();
  for (let i = 0; i < nums1.length; i++) {
    mySet.add(nums1[i]);
  }
  for (let num of nums2) {
    if (mySet.has(num)) {
      res.push(num);
      mySet.delete(num);
    }
  }
  return res;
};
