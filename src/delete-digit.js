/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxValue = 0;
  [...n.toString()].forEach((n, i, arr) => {
    let newArr = [...arr];
    newArr.splice(i, 1);
    if (newArr.join('') < maxValue) return;
    maxValue = Number(newArr.join(''));
  });
  return maxValue;
}

module.exports = {
  deleteDigit
};
