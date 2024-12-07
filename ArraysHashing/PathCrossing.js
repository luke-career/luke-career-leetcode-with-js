/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  let p = [0, 0];
  let start = p[0] + "," + p[1];
  let hs = new Set();

  hs.add(start);

  for (let i = 0; i < path.length; i++) {
    if (path[i] == "W") {
      p[0]--;
    } else if (path[i] == "E") {
      p[0]++;
    } else if (path[i] == "N") {
      p[1]++;
    } else if (path[i] == "S") {
      p[1]--;
    }
    let route = p[0] + "," + p[1];
    if (hs.has(route)) {
      return true;
    } else {
      hs.add(route);
    }
  }
  return false;
};
