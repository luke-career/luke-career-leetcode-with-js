/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let heap = [];
  const count = new Map();

  for (num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  for (let [num, fre] of count) {
    heap.push([fre, num]);
  }

  heap.sort((a, b) => b[0] - a[0]);
  let res = [];
  for (let i = 0; i < k; i++) {
    res.push(heap[i][1]);
  }
  return res;
};
