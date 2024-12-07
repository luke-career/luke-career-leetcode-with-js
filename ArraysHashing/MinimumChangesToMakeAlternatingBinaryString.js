/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let model1 = "";
  let len = s.length;
  for (let i = 0; i < len; i++) {
    if (i % 2 == 0) {
      model1 += "0";
    } else {
      model1 += "1";
    }
  }

  let model2 = "";
  for (let i = 0; i < len; i++) {
    if (i % 2 == 0) {
      model2 += "1";
    } else {
      model2 += "0";
    }
  }

  return Math.min(helper(s, model1), helper(s, model2));

  function helper(s1, s2) {
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] != s2[i]) {
        count++;
      }
    }
    return count;
  }
};

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let model = "";
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < s.length; i++) {
    model1 = i % 2 == 0 ? "0" : "1";
    model2 = i % 2 == 0 ? "1" : "0";
    if (s[i] != model1) {
      count1++;
    }
    if (s[i] != model2) {
      count2++;
    }
  }
  return Math.min(count1, count2);
};
