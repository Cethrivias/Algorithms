import { expect } from 'chai';
import { PrimeFactors } from './algorithm';

describe('PrimeFactors', function () {
  const tests = [
    { number: 127, factors: [127] },
    { number: 76, factors: [2, 2, 19] },
    { number: 73, factors: [73] },
    { number: 15, factors: [3, 5] },
  ];

  describe('find', function () {
    tests.forEach(test => {
      it(`${test.number} => ${test.factors}`, function () {
        const result = PrimeFactors.find(test.number);

        expect(result).to.deep.equal(test.factors);
      });
    });
  });

  describe('findOptimised', function () {
    tests.forEach(test => {
      it(`${test.number} => ${test.factors}`, function () {
        const result = PrimeFactors.findOptimised(test.number);

        expect(result).to.deep.equal(test.factors);
      });
    });
  });
});
