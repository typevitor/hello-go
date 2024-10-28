const Math = require('../src/math');

describe('Math', () => {
  let mathObj;

  beforeEach(() => {
    mathObj = new Math();
  });

  test('adds 1 + 2 to equal 3', () => {
    expect(mathObj.sum(1, 2)).toBe(3);
  });  
});
