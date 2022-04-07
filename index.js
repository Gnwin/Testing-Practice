
class Calculator {
  add = (a, b) => a + b;
  subtract = (a, b) => a - b;
  divide = (a, b) => a / b;
  multiply = (a, b) => a * b;
}
const calculator = new Calculator();

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
  calculator: calculator,
  capitalize: (string) => string[0].toUpperCase() + string.slice(1)
}
