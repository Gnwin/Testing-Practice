const { errorMonitor } = require("events");

class Calculator {
  add(){}
  subtract(){}
  divide(){}
  multiply(){}
}
const calc = new Calculator();

module.exports = {
  stringLength: (string) => {
    if (string.length < 0) {
      throw "There is nothing to count";
    } else if (string.length > 10) {
      throw "string is not within allowed range";
    }
    return string.length;
  },
  reverseString: (string) => string.split('').reverse().join(''),
  calc: calc,
  capitalize: (string) => {}
}
