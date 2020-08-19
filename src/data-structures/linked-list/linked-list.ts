export class LinkedList<T> {
  public size = 0;

  private root: Element<T> | null = null;
  private top: Element<T> | null = null;

  public clear() {
    this.root = null;
    this.top = null;
    this.size = 0;
  }

  public copy() {
    const list = new LinkedList<T>();
    let element = this.root;

    while(element) {
      list.push(element.value);
      element = element.next;
    }

    return list;
  }

  public push(value: T) {
    if (!this.top) {
      this.root = new Element(value);
      this.top = this.root;
    } else {
      this.top.next = new Element(value);
      this.top = this.top.next;
    }
    this.size++;
  }

  public find(predicate: (value: T) => boolean) {
    let element = this.root;

    while (element) {
      if (predicate(element.value)) {
        return element.value;
      } else {
        element = element.next;
      }
    }

    return null;
  }

  public get(position: number): T {
    return this.getElement(position).value;
  }

  public remove(position: number) {
    if (position === 0) {
      const element = this.getElement(0);
      this.root = element.next;
    } else {
      const element = this.getElement(position - 1);
      if (element.next) {
        element.next = element.next.next;
      } else {
        throw new Error('Out of bounds');
      }
    }
    this.size--;
  }

  public set(position: number, value: T) {
    if (position === 0) {
      this.root = new Element(value, this.root?.next);
    } else {
      const previousElement = this.getElement(position - 1);
      previousElement.next = new Element(value, previousElement.next?.next);
    }
  }

  public toString() {
    const elements: T[] = [];
    let element = this.root;

    while (element) {
      elements.push(element.value);
      element = element.next;
    }

    return elements.join();
  }

  public unshift(value: T) {
    const element = new Element(value, this.root);
    this.root = element;
    this.size++;
  }

  private getElement(position: number) {
    if (!this.root || position < 0) {
      throw new Error('Out of bounds');
    }

    let element = this.root;
    let i = 0;

    while (true) {
      if (i === position) {
        return element;
      } else if (element.next) {
        element = element.next;
        i++;
      } else {
        throw new Error('Out of bounds');
      }
    }
  }
}

// tslint:disable-next-line:max-classes-per-file
class Element<T> {
  constructor(public value: T, public next: Element<T> | null = null) {}
}
