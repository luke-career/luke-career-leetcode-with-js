/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let stulen = students.length;
  let sanlen = sandwiches.length;

  let l = 0;
  let r = 0;
  let attempt = 0;
  let count = 0;

  while (count < stulen) {
    if (students[l] == -1) {
      l = (l + 1) % stulen;
      continue;
    }

    if (students[l] == sandwiches[r]) {
      students[l] = -1;
      r++;
      count++;
      l = (l + 1) % stulen;
      attempt = 0;
    } else {
      l = (l + 1) % stulen;
    }
    attempt++;

    if (attempt == stulen) break;
  }
  return stulen - count;
};
