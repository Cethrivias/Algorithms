# Numerical Integration

Approach used to calculate the approximate area under a curve. The main drawback is that it is approximate but can be used even if you don't know the equation that produces the curve (ie data is produced by a read life source)

## Complexity

???

## Algorithm

### The Rectangle Rule

Area under the curve is divided into rectangles of equal width. Then we loop over the rectangles taking Y for a given X (height of our rectangle) calculating their areas. Sum of those areas is the approximate area under the curve

### The Trapezoid Rule

The only difference from Rectangle rule is that we are now using trapezoids instead of rectangulars covering the area under the curve much more accurately. That allows us to achieve the same accuracy with fewer iterations.

### Adaptive

Algorithm tries to detect the difference between actual and approximated area under the curve for each trapezoid. This is done by dividing the segment of the current trapezoid into two and computing areas of new trapezoids in each segment. If the difference between the two new segments and the original segment is above some specified % then the same algorithm is applied for each new segment again. This allows us to specify small amount of trapezoids initially and the algorithm will increase their amount automatically where needed.