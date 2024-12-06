/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  let max = -1;
  let i = 0;
  while (i + 3 <= num.length) {
    if (num[i] == num[i + 1] && num[i] == num[i + 2]) {
      max = Math.max(Number(num.substring(i, i + 3)), max);
    }
    i++;
  }

  if (max == -1) {
    return "";
  } else if (max == 0) {
    return "000";
  } else {
    return String(max);
  }
};
