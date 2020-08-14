export class PrimeFactors {
  public static find(int: number): number[] {
    const factors: number[] = [];

    for (let i = 2; i < int; i++) {
      while (int % i === 0) {
        // storing the factor
        factors.push(i);

        // dividing number by the factor
        int /= i;

        // because it's a while loop the same factor will by tried with the new number
      }
    }

    // Anything left of the number is a factor too
    if (int > 1) {
      factors.push(int);
    }

    return factors;
  }

  /**
   * Optimisations:
   * 1. For even numbers you only have to check if it's divisible by 2
   * 2. You actually only have to check possible factors up to sqrt(N)
   */
  public static findOptimised(int: number): number[] {
    const factors: number[] = [];

    while (int % 2 === 0) {
      factors.push(2);
      int /= 2;
    }

    let maxFactor = Math.sqrt(int);
    for (let i = 3; i <= maxFactor; i += 2) {
      while(int % i === 0) {
        factors.push(i);
        int /= i
        maxFactor = Math.sqrt(int)
      }
    }

    if (int > 1) {
      factors.push(int);
    }

    return factors;
  }
}
