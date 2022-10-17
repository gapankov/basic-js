/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
const createAdditional = ( addition, additionRepeatTime, additionSeparator) => {
  let additionalResult = '';
  let additionRepeatTimes = additionRepeatTime ? additionRepeatTime : 1;
  console.log(additionSeparator);
  for (let i = 0; i < additionRepeatTimes; i++) {
    additionalResult += `${addition}${i !== additionRepeatTimes - 1 ? additionSeparator : ''}`
  }
  return additionalResult;
};

function repeater(str, options) {
  const repeatTimes = options.repeatTimes && Number.isFinite(options.repeatTimes) ? options.repeatTimes : 1;
  const separator = options.separator ? options.separator : '+';
  const addition = options.addition;
  const additionRepeatTimes = options.additionRepeatTimes;
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  let result = '';
  console.log(options);
  for (let i = 0; i < repeatTimes; i++) {
    result += `${str}${addition || addition === false || addition === null ? createAdditional(addition, additionRepeatTimes, additionSeparator) : ''}${i !== repeatTimes - 1 ? separator : ''}`;
  }
  return result;
}

module.exports = {
  repeater
};
