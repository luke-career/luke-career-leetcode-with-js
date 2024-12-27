/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let l = 0;
  let r = num;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    let res = mid * mid;
    if (res > num) {
      r = mid - 1;
    } else if (res < num) {
      l = mid + 1;
    } else {
      return true;
    }
  }
  return false;
};
