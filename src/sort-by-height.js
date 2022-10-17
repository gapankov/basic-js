/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexes = [];
  arr.forEach((item, index) => {
    if(item === -1) {
      indexes.push(index);
    }
  });
  console.log(arr);
  if(indexes.length) {
    arr = arr.filter((item) => item !== -1).sort((a, b) => a-b);
    for(let i = 0; i < indexes.length; i++) {
      arr.splice(indexes[i], 0, -1);
    }
  } else {
    arr = arr.sort((a, b) => a-b);
  }
  return arr;
}

module.exports = {
  sortByHeight
};
