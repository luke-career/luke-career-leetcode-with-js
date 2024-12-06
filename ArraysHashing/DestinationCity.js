/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  let des = "";
  let hashset = new Set();
  for (let path of paths) {
    hashset.add(path[0]);
  }
  for (let path of paths) {
    if (!hashset.has(path[1])) {
      res = path[1];
    }
  }
  return res;
};
