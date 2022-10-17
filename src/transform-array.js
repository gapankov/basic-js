/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const newArr = [];
  if (!Array.isArray(arr)) {
    throw Error('\'arr\' parameter must be an instance of the Array!')
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i] != '--discard-next' &&
        arr[i] != '--discard-prev' &&
        arr[i] != '--double-next' &&
        arr[i] != '--double-prev' &&
        arr[i] != undefined
      ) {
        newArr.push(arr[i]);
      }
      if (arr[i] == '--discard-next' && arr[i + 1]) {
        arr[i + 1] = undefined;
      }
      if (arr[i] == '--discard-prev' && arr[i - 1] && arr[i - 1] != undefined) {
        newArr.pop();
      }
      if (arr[i] == '--double-next' && arr[i + 1]) {
        newArr.push(arr[i + 1]);
      }
      if (arr[i] == '--double-prev' && arr[i - 1] != undefined && arr[i - 1])
      {
        newArr.push(arr[i - 1]);
      }
    }
  
    return newArr;
  }
}

module.exports = {
  transform
};
