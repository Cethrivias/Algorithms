import { expect } from 'chai';
import { LinkedList } from './linked-list';

describe('LinkedList', function () {
  describe('clear', function () {
    it('Removes all elements from the list', function () {
      const list = new LinkedList();
      list.push('test1');
      list.push('test2');

      list.clear();
      expect(list.size).to.be.equal(0);
      expect(list.toString()).to.be.equal('');
    });
  });

  describe('copy', function() {
    it('Creates a shallow copy of a list', function() {
      const list = new LinkedList()
      list.push('test1')
      list.push('test2')
      list.push('test3')
      const listCopy = list.copy();

      expect(list.toString()).to.equal(listCopy.toString());
      expect(list).to.not.equal(listCopy);
    })
  })

  describe('push', function () {
    it('Adds new element to an empty list', function () {
      const list = new LinkedList();
      list.push('test');

      expect(list.size).to.be.equal(1);
      expect(list.toString()).to.be.equal('test');
    });

    it('Adds to the end of a list', function () {
      const list = new LinkedList();
      list.push('test1');
      list.push('test2');

      expect(list.size).to.be.equal(2);
      expect(list.toString()).to.be.equal('test1,test2');
    });
  });

  describe('find', function () {
    it('Returns matching element', function () {
      const list = new LinkedList();
      list.push('test1');
      list.push('test2');
      list.push('test3');

      const result = list.find(it => it === 'test2');

      expect(result).to.equal('test2');
    });

    it('Return null if element does not exist', function () {
      const list = new LinkedList();
      list.push('test1');
      list.push('test2');
      list.push('test3');

      const result = list.find(it => it === 'test4');

      // tslint:disable-next-line:no-unused-expression
      expect(result).to.be.null;
    });
  });

  describe('get', function () {
    it('Returns element', function () {
      const list = new LinkedList();
      list.push('test1');
      list.push('test2');
      list.push('test3');

      const result = list.get(1);

      expect(result).to.equal('test2');
    });

    it('Returns first element', function () {
      const list = new LinkedList();
      list.push('test1');
      list.push('test2');
      list.push('test3');

      const result = list.get(0);

      expect(result).to.equal('test1');
    });

    it('Returns last element', function () {
      const list = new LinkedList();
      list.push('test1');
      list.push('test2');
      list.push('test3');

      const result = list.get(2);

      expect(result).to.equal('test3');
    });

    it('Throws for negative position', function () {
      const list = new LinkedList();
      list.push('test1');
      list.push('test2');
      list.push('test3');

      expect(() => list.get(-1)).to.throw(Error, 'Out of bounds');
    });

    it('Throws for out of bounds position', function () {
      const list = new LinkedList();
      list.push('test1');
      list.push('test2');
      list.push('test3');

      expect(() => list.get(3)).to.throw(Error, 'Out of bounds');
    });
  });

  describe('remove', function () {
    it('Removes element at position', function () {
      const list = new LinkedList();
      list.push('test1');
      list.push('test2');
      list.push('test3');

      list.remove(1);

      expect(list.size).to.equal(2);
      expect(list.toString()).to.equal('test1,test3');
    });

    it('Removes frist element', function () {
      const list = new LinkedList();
      list.push('test1');
      list.push('test2');
      list.push('test3');

      list.remove(0);

      expect(list.size).to.equal(2);
      expect(list.toString()).to.equal('test2,test3');
    });

    it('Removes last element', function () {
      const list = new LinkedList();
      list.push('test1');
      list.push('test2');
      list.push('test3');

      list.remove(2);

      expect(list.size).to.equal(2);
      expect(list.toString()).to.equal('test1,test2');
    });

    it('Throws for negative position', function () {
      const list = new LinkedList();
      list.push('test1');
      list.push('test2');
      list.push('test3');

      expect(() => list.remove(-1)).to.throw(Error, 'Out of bounds');
    });

    it('Throws for out of bounds position', function () {
      const list = new LinkedList();
      list.push('test1');
      list.push('test2');
      list.push('test3');

      expect(() => list.remove(3)).to.throw(Error, 'Out of bounds');
    });
  });

  describe('set', function () {
    it('Overwrites element at position', function () {
      const list = new LinkedList();
      list.push('test1');
      list.push('test2');
      list.push('test3');

      list.set(1, 'test4');

      expect(list.size).to.equal(3);
      expect(list.toString()).to.equal('test1,test4,test3');
    });
  });

  describe('unshift', function() {
    it('Adds element to the beginning of a list', function() {
      const list = new LinkedList();
      list.unshift('test1');
      list.unshift('test2');
      list.unshift('test3');

      expect(list.size).to.equal(3);
      expect(list.toString()).to.equal('test3,test2,test1');
    })
  })
});
