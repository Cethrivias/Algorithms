export class PrimeNumbers {
  /**
   * Finds all prime numbers up to a certain number
   */
  public static sieve(int: number): number[] {
    // Our 'sieve' where each number is marked as prime of composite
    const isComposite: boolean[] = [];

    // We dont have to iterate more than a sqrt(N)
    const stopAt = Math.sqrt(int);

    // Starting from the first number after 2 skipping even numbers
    for (let i = 2; i <= stopAt; i += 1) {
      if (isComposite[i]) {
        continue;
      }

      // Marking multiples of current number as composite
      for (let j = i * 2; j <= int; j += i) {
        isComposite[j] = true;
      }
    }

    const primes: number[] = [];
    for (let i = 2; i <= int; i++) {
      if (!isComposite[i]) {
        primes.push(i);
      }
    }

    return primes;
  }
}
