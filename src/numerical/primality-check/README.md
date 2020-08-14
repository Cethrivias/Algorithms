# Primalty check

To check if the number is prime you can use algorithm for finding prime factors of a number. If number does not have any prime factors then it's prime.

The drawback of that method is its computational complexity. Sometimes in cryptographic algorithms you have to use insanely large numbers and this way of determening if it's prime or not is unreasonable (might take years to complete)


## Complexity

???

## Algorithm

According to Fermat's theorem if P is prime then `N^(P-1) mod P = 1` where `1 <= N <= P`.

It is a probabilistic algorithm which means that it can sometimes produce wrong results.

In our particular case the success rate is 50% for any N. N that produces wrong result is called a *liar* and N that produces correct result is called a *witness*.

To increase the probability we can run the algorithm multiple times with different N each time.

