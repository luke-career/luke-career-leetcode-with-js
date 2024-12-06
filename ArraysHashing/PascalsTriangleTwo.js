/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let pre = [1];

  for (let i = 1; i <= rowIndex; i++) {
    let res = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        res.push(1);
      } else {
        res[j] = pre[j] + pre[j - 1];
      }
    }
    pre = res;
  }
  return pre;
};
