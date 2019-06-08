const fd = require('./communication-top.js');

describe('communication-top', () => {
  it('should resolve case1', () => {
    expect(fd.solution([6,9,5,7,4])).toEqual([0,0,2,2,4]);
  });

  it('should resolve case2', () => {
    expect(fd.solution([3,9,9,3,5,7,2])).toEqual([0,0,0,3,3,3,6]);
  });

  it('should resolve case3', () => {
    expect(fd.solution([1,5,3,6,7,6,5])).toEqual([0,0,2,0,0,5,6]);
  });
});
