/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter === str[i + 1]) {
      count++;
    } else if (count === 1) {
      result += `${letter}`;
      count = 1;
    } else {
      result += `${count}${letter}`;
      count = 1;
    }
  }
  return result;
}

console.log(encodeLine('aabbbc'));

module.exports = {
  encodeLine
};
