export class SelectionSort {
  public static sort<T>(list: T[]): T[] {
    const result: T[] = [];

    while (list.length) {
      let position: number = -1;
      let valueMax: null | T = null;

      for (let i = 0; i < list.length; i++) {
        const valueCurrent = list[i];
        if (valueMax === null || valueCurrent > valueMax) {
          valueMax = valueCurrent;
          position = i;
        }
      }

      if (valueMax === null) {
        throw new Error('Could not find a valid value');
      }

      list.splice(position, 1);
      result.unshift(valueMax);
    }

    return result;
  }

  public static sortInPlace<T>(list: T[]): T[] {
    // for each position
    for (let i = 0; i < list.length - 1; i++) {
      // finding the smallest value after that position
      let a = list[i]
      let position = i
      for (let j = i; j < list.length; j++) {
        if (a === null || a > list[j]) {
          a = list[j];
          position = j
        }
      }
      // swapping element at current position with the smallest found element
      list[position] = list[i]
      list[i] = a;
    }
    return list;
  }
}
