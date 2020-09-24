import { expect } from 'chai';
import { SelectionSort } from './algorithm';

describe('SelectionSort', function () {
  describe('sort', function () {
    it('Sorts', function () {
      const a = [5, 6, 2, 1, 35, 7, 8, 4, 23, 4, 3];
      const expected = [1, 2, 3, 4, 4, 5, 6, 7, 8, 23, 35];
      expect(SelectionSort.sort(a)).to.deep.equal(expected);
    });
  });
});
