const Operation = require('../src/math/math');

describe('Math', () => {
  let mathOperation;

  beforeEach(() => {
    mathOperation = new Operation();
  });

  test('adds 1 + 2 to equal 3', () => {
    expect(mathOperation.sum(1, 2)).toBe(3);
  });

  test('subs 2 - 1 to equal 3', () => {
    expect(mathOperation.sub(2, 1)).toBe(1);
  });

  test('multiply 2 * 2 to equal 4', () => {
    expect(mathOperation.times(2, 2)).toBe(4);
  });

  test('divide 4 / 2 to equal 2', () => {
    expect(mathOperation.div(4, 2)).toBe(2);
  });
});
