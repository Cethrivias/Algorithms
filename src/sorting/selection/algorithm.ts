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
}
