const findFrequency = require('./findFrequency');

test('test findFrequency', () => {
  const A = [1, 4, 1, 5, 8, 1, 3, 5, 1, 4, 1, 3, 7, 2];
  const result = findFrequency(A);
  const expectedResult = [5, 1, 2, 2, 2, 0, 1, 1];
  expect(result).toEqual(expectedResult);
});