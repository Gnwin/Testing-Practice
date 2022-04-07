
const { stringLength, reverseString, calculator, capitalize } = require('./index');

//stringLength
test('counts string characters', () => {
  expect(stringLength('Godwin')).toBe(6);
});

test('data type of counted characters', () => {
  expect(typeof stringLength('Godwin')).not.toBe('string');
});

test('counted characters', () => {
  expect(stringLength('Godwin')).not.toBeNull();
});

// reverseString
test('reverses string characters', () => {
  const value = 'niwdoG';
  expect(reverseString('Godwin')).toBe(value);
});

test('data type of reversed characters', () => {
  expect(typeof reverseString('Godwin')).toBe('string');
});

test('data type of reversed characters', () => {
  expect(reverseString('Godwin')).toBeTruthy();
});

// calc object
describe('calculator', () => {
  test('add', () => {
    const value1 = 7;
    const value2 = 6;
    expect(calculator.add(value1, value2)).toBe(13);
  });

  test('add', () => {
    expect(calculator.add(-1, -2)).toBe(-3);
  });
  
  test('subtract', () => {
    const value1 = 7;
    const value2 = 6;
    expect(calculator.subtract(value1, value2)).toBe(1);
  });

  test('subtract', () => {
    expect(calculator.subtract(-1, -2)).toBe(1);
  });

  test('divide', () => {
    const value1 = 10;
    const value2 = 5;
    expect(calculator.divide(value1, value2)).toBe(2);
  });

  test('divide', () => {
    expect(calculator.divide(1000, 50)).toBe(20);
  });

  test('multiply', () => {
    const value1 = 7;
    const value2 = 6;
    expect(calculator.multiply(value1, value2)).toBe(42);
  });

  test('multiply', () => {
    expect(calculator.multiply(-1, -2)).toBe(2);
  });
})

// capitalize
test('capitalize string characters', () => {
  expect(capitalize('godwin')).toBe('Godwin');
});

test('capitalized string not null', () => {
  expect(capitalize('godwin')).not.toBeNull();
});

test('capitalized string not null', () => {
  const length = 6;
  expect(capitalize('godwin').length).toBe(length);
});