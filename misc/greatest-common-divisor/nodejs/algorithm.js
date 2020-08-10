class GreatestCommondDivisor {
  static loop(a, b) {
    while (b) {
      const remainder = a % b;
      a = b;
      b = remainder;
    }

    return a;
  }

  static recursion(a, b) {
    if (!b) {
      return a;
    }

    const remainder = a % b;
    return this.recursion(b, remainder);
  }
}

module.exports = GreatestCommondDivisor;
