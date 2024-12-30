var checkPossibility = function (nums) {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      count++;
      if (count > 1) return false; // 如果已经出现了2次不符合条件的情况，返回false
      // 如果当前的值小于前一个值，且该值在之前的元素和之后的元素之间都不适合调整
      if (
        i - 2 >= 0 &&
        nums[i - 2] > nums[i] &&
        i + 1 < nums.length &&
        nums[i - 1] > nums[i + 1]
      ) {
        return false;
      }
    }
  }
  return true;
};
