const calculator = require('./index');

test('Calculator sum should be ok', () => {
  expect(calculator.Sum(2, 2)).toBe(4);
});