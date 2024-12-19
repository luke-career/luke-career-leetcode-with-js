/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let l1 = m - 1;
  let l2 = n - 1;
  let l3 = m + n - 1;

  while (l1 >= 0 && l2 >= 0) {
    if (nums1[l1] > nums2[l2]) {
      nums1[l3] = nums1[l1];
      l1--;
    } else {
      nums1[l3] = nums2[l2];
      l2--;
    }
    l3--;
  }

  while (l2 >= 0) {
    nums1[l3] = nums2[l2];
    l3--;
    l2--;
  }
};
