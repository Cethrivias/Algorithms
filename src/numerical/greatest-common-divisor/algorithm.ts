export class GreatestCommonDivisor {
  static loop(a: number, b: number) {
    while (b) {
      const remainder = a % b;
      a = b;
      b = remainder;
    }

    return a;
  }

  static recursion(a: number, b: number): number {
    if (!b) {
      return a;
    }

    const remainder = a % b;
    return this.recursion(b, remainder);
  }
}
