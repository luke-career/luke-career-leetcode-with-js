/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  list = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      list.push(")");
    } else if (s[i] == "[") {
      list.push("]");
    } else if (s[i] == "{") {
      list.push("}");
    } else if (list.length != 0 && list.pop() == s[i]) {
      continue;
    } else {
      return false;
    }
  }
  return list.length == 0;
};
