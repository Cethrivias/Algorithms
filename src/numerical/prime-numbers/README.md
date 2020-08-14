# Prime numbers

## Complexity

O(N x log(logN))

## Algorithm

The **sieve of Eratosthenes** is a method used to find every prime up to a given number.

It is memory hungry because it uses a table-like structure to mark every number as composit or prime.

- Create a table with one element for each of the numbers between 2 and the target number (N)
- Iterate from 2 (i) to sqrt(N) skipping numbers that have already been marked in the table
- Mark multiples of i up to N (skipping i itself) as composit in the table
- By the time you reach sqrt(N) every number in your table will be marked either as composit or prime