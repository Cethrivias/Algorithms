export class PrimalityCheck {
  public static check(p: number): boolean {
    const n = Math.floor(Math.random() * (p - 1)) + 1;

    return Math.pow(n, p - 1) % p === 1;
  }
}
