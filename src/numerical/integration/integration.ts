// tslint:disable:no-console
export class NumericalIntegration {
  public static rectangleRule(
    func: (x: number) => number, // function that returns Y for a given X (Height or our rectangle)
    start: number, // X where measured curve starts
    finish: number, // X where measured curve ends
    rectangles: number, // The amout of rectangles used during calculation. The more the better
  ) {
    let area = 0;
    const rectangleWidth = (finish - start) / rectangles;

    for (let x = start; x < finish; x += rectangleWidth) {
      area += rectangleWidth * func(x);
    }

    return area;
  }

  public static trapezoidRule(
    func: (x: number) => number, // function that returns Y for a given X (Height or our rectangle)
    start: number, // X where measured curve starts
    finish: number, // X where measured curve ends
    trapezoids: number, // The amout of trapezoids used during calculation. The more the better
  ) {
    let area = 0;
    const trapezoidWidth = (finish - start) / trapezoids;

    for (let x = start; x < finish; x += trapezoidWidth) {
      area += (trapezoidWidth * (func(x) + func(x + trapezoidWidth))) / 2;
    }

    return area;
  }

  public static adaptive(
    func: (x: number) => number, // function that returns Y for a given X (Height or our rectangle)
    start: number, // X where measured curve starts
    finish: number, // X where measured curve ends
    trapezoids: number, // The amout of trapezoids used during calculation
    tolerance: number, // allowed error rate
  ) {
    const segmentArea = (xStart: number, xFinish: number): number => {
      const xMiddle = (xStart + xFinish) / 2;
      const yStart = func(xStart);
      const yMiddle = func(xMiddle);
      const yFinish = func(xFinish);

      const areaStartFinish = ((xFinish - xStart) * (yStart + yFinish)) / 2;
      const areaStartMiddle = ((xMiddle - xStart) * (yStart + yMiddle)) / 2;
      const areaMiddleFinish = ((xFinish - xMiddle) * (yMiddle + yFinish)) / 2;
      const areaStartMiddleFinish = areaStartMiddle + areaMiddleFinish;

      const error = (areaStartMiddleFinish - areaStartFinish) / areaStartFinish;

      if (Math.abs(error) > tolerance) {
        return segmentArea(xStart, xMiddle) + segmentArea(xMiddle, xFinish);
      } else {
        return areaStartMiddleFinish;
      }
    };

    let area = 0;
    const trapezoidWidth = (finish - start) / trapezoids;

    for (let x = start; x < finish; x += trapezoidWidth) {
      area += segmentArea(x, x + trapezoidWidth);
    }

    return area;
  }
}
