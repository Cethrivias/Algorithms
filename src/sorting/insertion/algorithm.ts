import { LinkedList } from '../../data-structures/linked-list/linked-list';

export class SortedList<T> extends LinkedList<T> {
  public insert(value: T) {
    // If list is empty
    if (!this.root) {
      this.root = new SortedList.Element(value);
      return;
    }

    let element = this.root;

    // If first element is bigger than new element
    if (element === this.root && element.value > value) {
      this.root = new SortedList.Element(value, this.root);
      return;
    }

    while (element) {
      if (!element.next || element.next.value > value) {
        element.next = new SortedList.Element(value, element.next);
        break;
      }

      element = element.next;
    }
  }
}

export function sortInPlace<T>(array: T[]): T[] {
  for (let i = 0; i < array.length; i++) {
    // We need to store it in a separate variable
    // because array[i] will be overwritten when we shift array's values to the right to make space for 'a'
    const a = array[i];
    for (let j = 0; j <= i; j++) {
      if (a < array[j]) { // Found a new home for 'a'
        for (let k = i; k > j; k--) { // moving rest of the array to the right to make space for 'a'
          array[k] = array[k-1]
        }
        array[j] = a // assigning 'a' to it's new place
        break;
      }
    }
  }
  return array;
}