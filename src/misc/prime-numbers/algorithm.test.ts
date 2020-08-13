import { expect } from 'chai';
import { PrimeNumbers } from './algorithm';

describe.only('PrimeNumbers', function () {
  const tests = [
    { number: 0, result: [] },
    { number: 5, result: [2, 3, 5] },
    { number: 12, result: [2, 3, 5, 7, 11] },
    { number: 13, result: [2, 3, 5, 7, 11, 13] },
    {
      number: 55,
      result: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53],
    },
  ];

  describe('sieve', function () {
    tests.forEach(test => {
      it(`${test.number} => ${test.result}`, function () {
        const result = PrimeNumbers.sieve(test.number);

        expect(result).to.deep.equal(test.result);
      });
    });
  });
});
