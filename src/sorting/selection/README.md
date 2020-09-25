# Selection Sort

## Complexity

Worst case - O(N^2). When initial collection is sorted in reverse order.
Best case - O(N). When initial collection is already sorted.

## Algorithms

During selection sort our goal is to find the biggest element in an original array and move it to a new array. Repeat until the original array has no elements left.

If we want to sort the collection in place, without creating a new collection, we have to go through each position of the collection, find the smallest element after that position and exchange the element at current position with the found element.