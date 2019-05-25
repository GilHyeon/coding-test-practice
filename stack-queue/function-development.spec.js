const fd = require('./function-development.js');

describe('function-development', () => {
  it('should resolve case1', () => {
    expect(fd.solution([93, 30, 55], [1, 30, 5])).toEqual([2, 1]);
  });

  it('should resolve case2', () => {
    expect(fd.solution([93, 30, 55, 20], [1, 30, 5, 20])).toEqual([2, 2]);
  });

  it('should resolve case3', () => {
    expect(fd.solution([93, 30, 55, 20, 20, 40], [1, 30, 5, 1, 10, 15])).toEqual([2, 1, 3]);
  });
});
