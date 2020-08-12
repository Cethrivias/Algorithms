import { expect } from 'chai';
import { GreatestCommonDivisor } from './algorithm';

describe('GreatestCommonDivisior', function () {
  const tests = [
    { a: 10, b: 5, result: 5 },
    { a: 134, b: 14, result: 2 },
    { a: 27, b: 87, result: 3 },
    { a: 126, b: 63, result: 63 },
  ];

  describe('loop', function () {
    tests.forEach(test => {
      it(`GCD(${test.a}, ${test.b}) => ${test.result}`, function () {
        const result = GreatestCommonDivisor.loop(test.a, test.b);
        expect(result).to.equal(test.result);
      });
    });
  });

  describe('recursion', function () {
    tests.forEach(test => {
      it(`GCD(${test.a}, ${test.b}) => ${test.result}`, function () {
        const result = GreatestCommonDivisor.recursion(test.a, test.b);
        expect(result).to.equal(test.result);
      });
    });
  });
});
