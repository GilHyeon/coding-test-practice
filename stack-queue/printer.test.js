const printer = require('./printer.js');

describe('practiceSolution', function() {
  it('should exist', () => {
    expect(printer).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof printer.solution).toBe("function");
  });

  it('should return 1 when priorities is [2,1,3,2]', () => {
    const result = printer.solution([2,1,3,2], 2);
    expect(result).toBeDefined();
    expect(result).toBe(1);
  });
  it('should return 5 when priorities is [1,1,9,1,1,1]', () => {
    const result = printer.solution([1,1,9,1,1,1], 0);
    expect(result).toBeDefined();
    expect(result).toBe(5);
  });
});
