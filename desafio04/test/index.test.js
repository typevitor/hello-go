const MathOperation = require('../src/math/math');

jest.mock('../src/math/math', () => {
  return jest.fn().mockImplementation(() => {
    return {
      sum: jest.fn((a, b) => {
        return a + b
      }),
    };
  });
});

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  MathOperation.mockClear();
});


describe('index.js', () => {
  it('should call sum function of MathOperation with correct arguments', () => {
    const mathObj = new MathOperation();
    mathObj.sum(1, 2);
    expect(mathObj.sum).toHaveBeenCalled();
    expect(mathObj.sum).toHaveBeenCalledWith(1, 2);
  });
});