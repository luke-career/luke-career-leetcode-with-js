/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  let count = 0;
  let p = 0;
  let len = tickets.length;

  while (tickets[k] > 0) {
    for (let i = 0; i < len; i++) {
      if (tickets[i] > 0) {
        tickets[i]--;
        count++;
      }
      if (i == k && tickets[k] == 0) {
        return count;
      }
    }
  }
  return count;
};

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  let count = 0;
  let p = 0;
  let len = tickets.length;

  while (true) {
    if (tickets[k] == 0) break;
    while (tickets[p] == 0) {
      p = (p + 1) % len;
    }
    tickets[p]--;
    count++;
    p = (p + 1) % len;
  }
  return count;
};
