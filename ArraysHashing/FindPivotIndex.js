/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let leftSum = [];
  let rightSum = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    leftSum[i] = sum;
    sum += nums[i];
  }

  sum = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    rightSum[i] = sum;
    sum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    if (leftSum[i] == rightSum[i]) {
      return i;
    }
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let leftSum = 0;
  let rightSum = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    if (sum - leftSum - nums[i] == leftSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};
