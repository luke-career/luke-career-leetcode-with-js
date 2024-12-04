/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  let CountNumber = new Array(nums.length + 1).fill(0);
  for (let num of nums) {
    if (num > nums.length - 1) {
      CountNumber[nums.length]++;
    } else {
      CountNumber[num]++;
    }
  }
  let count = 0;
  for (let i = nums.length; i >= 0; i--) {
    count += CountNumber[i];
    if (i == count) {
      return i;
    }
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  let len = nums.length;
  for (let i = 0; i <= len; i++) {
    let count = 0;
    for (let num of nums) {
      if (num >= i) {
        count++;
      }
    }
    if (count == i) {
      return i;
    }
  }
  return -1;
};
