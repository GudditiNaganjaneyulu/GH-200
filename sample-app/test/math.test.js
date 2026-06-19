const { add, multiply } = require('../src/math');

test('adds two numbers', () => {
  expect(add(1, 2)).toBe(3);
});

test('multiplies two numbers', () => {
  expect(multiply(3, 4)).toBe(12);
});
