
const {stringLength, reverseString, calc, capitalize} = require('./index');

test('counts string characters', () => {
  expect(stringLength('Godwin')).toBe(6);
});

// test('counts string characters', () => {
//   expect(reverseString('Godwin')).toBe();
// });

// test('counts string characters', () => {
//   expect(calc.add(7, 2)).toBe(9);
// });

// test('counts string characters', () => {
//   expect(capitalize('Godwin')).toBe();
// });