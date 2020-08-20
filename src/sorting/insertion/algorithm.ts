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
