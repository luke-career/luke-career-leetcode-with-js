/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  stack = [];
  for (let s of operations) {
    if (s == "C") {
      stack.pop();
    } else if (s == "D") {
      let temp = Number(stack[stack.length - 1]);
      stack.push(2 * temp);
    } else if (s == "+") {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    } else {
      stack.push(Number(s));
    }
  }
  let sum = 0;
  for (let i of stack) {
    sum += i;
  }
  return sum;
};
