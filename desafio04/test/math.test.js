const Operation = require('../src/math');

describe('Math', () => {
  let mathOperation;

  beforeEach(() => {
    mathOperation = new Operation();
  });

  test('adds 1 + 2 to equal 3', () => {
    expect(mathOperation.sum(1, 2)).toBe(3);
  });  
});
