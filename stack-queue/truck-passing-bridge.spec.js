const truck = require('./truck-passing-bridge.js');

describe('practiceSolution', function() {
    it('should exist', () => {
        expect(truck).toBeDefined();
    });

    it('should be a function', () => {
        expect(typeof truck.solution).toBe("function");
    });

    it('should resolve case 1', function () {
        expect(truck.solution(2,10, [7,4,5,6])).toBe(8);
    });

    it('should resolve case 2', function () {
        expect(truck.solution(100,100, [10])).toBe(101);
    });

    it('should resolve case 3', function () {
        expect(truck.solution(100,100, [10,10,10,10,10,10,10,10,10,10])).toBe(110);
    });
});
