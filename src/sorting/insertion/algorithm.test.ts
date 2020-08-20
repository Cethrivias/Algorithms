import { expect } from 'chai';
import { SortedList } from './algorithm';

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
});
