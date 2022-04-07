
const {stringLength, reverseString, calc, capitalize} = require('./index');

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
  console.log(reverseString('Godwin'));
  expect(reverseString('Godwin')).toBe(value);
});

// test('counts string characters', () => {
//   expect(calc.add(7, 2)).toBe(9);
// });

// test('counts string characters', () => {
//   expect(capitalize('Godwin')).toBe();
// });