/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let res = "";
  let str = s.split(" ").map(reverseWord).join(" ");

  return str;

  function reverseWord(s) {
    return s.split("").reverse().join("");
  }
};
