import { expect } from 'chai';
import { SortedList, sortInPlace } from './algorithm';

describe('InsertionSort', function () {
  describe('insert', function () {
    it('Inserts into an empty list', function () {
      const list = new SortedList();

      list.insert('test1');

      expect(list.toString()).to.equal('test1');
    });

    it('Inserts elements in the correct order', function () {
      const list = new SortedList();

      list.insert(2);
      list.insert(1);
      list.insert(4);
      list.insert(3);

      expect(list.toString()).to.equal('1,2,3,4');
    });
  });

  describe('insertInPlace', function () {
    it('5,4,3,2,1 => 1,2,3,4,5', function () {
      const array = [5, 4, 3, 2, 1];
      sortInPlace(array);
      expect(array).to.deep.equal([1,2,3,4,5])
    });
  });
});
