/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let l = 0;
  let r = n;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    let result = Math.floor((mid * (mid + 1)) / 2);
    if (result > n) {
      r = mid - 1;
    } else if (result < n) {
      l = mid + 1;
    } else {
      return mid;
    }
  }
  return r;
};
