/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    while (l < r && !checkIslnum(s[l])) {
      l++;
    }
    while (l < r && !checkIslnum(s[r])) {
      r--;
    }

    if (s[l].toLowerCase() != s[r].toLowerCase()) return false;
    l++;
    r--;
  }
  return true;

  function checkIslnum(c) {
    if (
      (c >= "0" && c <= "9") ||
      (c >= "a" && c <= "z") ||
      (c >= "A" && c <= "Z")
    ) {
      return true;
    }
    return false;
  }
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let res = "";
  s = s.toLowerCase();
  for (let i = s.length - 1; i >= 0; i--) {
    if ((s[i] >= "0" && s[i] <= "9") || (s[i] >= "a" && s[i] <= "z")) {
      res += s[i];
    }
  }

  return res === res.split("").reverse().join("");
};
