import { expect } from 'chai';
import { NumericalIntegration } from './integration';

describe('NumbericalIntegration', function () {
  describe('rectangleRule', function () {
    it('y = 1 + x + Sin(2 * x), from 0 to 5, 1000 rectangles => ~18.4', function () {
      const func = (x: number) => 1 + x + Math.sin(2 * x);

      const result = NumericalIntegration.rectangleRule(func, 0, 5, 1000);

      expect(result.toFixed(1)).to.equal('18.4');
    });
  });

  describe('trapezoidRule', function () {
    it('y = 1 + x + Sin(2 * x), from 0 to 5, 600 trapezoids => ~18.4', function () {
      const func = (x: number) => 1 + x + Math.sin(2 * x);

      const result = NumericalIntegration.trapezoidRule(func, 0, 5, 600);

      expect(result.toFixed(1)).to.equal('18.4');
    });
  });

  describe('adaptive', function () {
    it('y = 1 + x + Sin(2 * x), from 0 to 5, 2 trapezoids => ~18.4', function () {
      const func = (x: number) => 1 + x + Math.sin(2 * x);

      const result = NumericalIntegration.adaptive(func, 0, 5, 2, 0.01);

      expect(result.toFixed(1)).to.equal('18.4');
    });
  });
});
