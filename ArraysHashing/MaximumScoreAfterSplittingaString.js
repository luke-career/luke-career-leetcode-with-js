/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let max = -1;
  for (let i = 1; i < s.length; i++) {
    let l = s.substring(0, i);
    let lValue = 0;
    for (let j = 0; j < l.length; j++) {
      if (l.charAt(j) == "0") {
        lValue++;
      }
    }

    let r = s.substring(i, s.length);
    let rValue = 0;
    for (let j = 0; j < r.length; j++) {
      if (r.charAt(j) == "1") {
        rValue++;
      }
    }

    max = Math.max(max, lValue + rValue);
  }
  return max;
};

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let oneNumber = 0;
  for (let c of s) {
    if (c == "1") {
      oneNumber++;
    }
  }
  let lValue = 0;
  let rValue = oneNumber;
  let maxNumber = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] == "0") {
      lValue++;
    } else {
      rValue--;
    }
    maxNumber = Math.max(maxNumber, lValue + rValue);
  }
  return maxNumber;
};
