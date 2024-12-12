/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function (poured, query_row, query_glass) {
  let res = new Array(101);
  for (let i = 0; i <= 101; i++) {
    res[i] = new Array(101).fill(0);
  }
  res[0][0] = poured;
  for (let i = 0; i < 101; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (res[i][j] > 1) {
        res[i + 1][j + 1] += (res[i][j] - 1) / 2;
        res[i + 1][j] += (res[i][j] - 1) / 2;
        res[i][j] = 1;
      }
    }
  }

  return Math.min(1, res[query_row][query_glass]);
};
