/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let majority = 0;
  let count = 0;
  for (let num of nums) {
    if (count == 0) {
      majority = num;
    }

    if (majority == num) {
      count++;
    } else {
      count--;
    }
  }
  return majority;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let myMap = new Map();
  for (let num of nums) {
    myMap.set(num, (myMap.get(num) || 0) + 1);
  }

  let maxValue = 0;
  let maxKey = 0;
  for (let [key, value] of myMap) {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  }
  return maxKey;
};
