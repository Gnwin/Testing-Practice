class Calculator {
  add(){}
  subtract(){}
  divide(){}
  multiply(){}
}

const calc = new Calculator();

module.exports = {
  sum: function(a, b) {
    return a + b;
  },
  stringLength: function(string) {},
  reverseString: function(string) {},
  calc: calc,
  capitalize: function(string) {}
}