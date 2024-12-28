/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  let map = new Map();

  for (let w of wall) {
    let sum = 0;
    for (let j = 0; j < w.length - 1; j++) {
      sum += w[j];
      map.set(sum, (map.get(sum) || 0) + 1);
    }
  }

  let maxNum = 0;
  for (const [key, value] of map) {
    maxNum = Math.max(maxNum, value);
  }

  return wall.length - maxNum;
};
