const CAT = '^^';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;
  const cat = 
	matrix.filter(item => {
		item.filter(value => {
			if (value === CAT) count++;
		})
	})
	return count;
}

module.exports = {
  countCats
};
