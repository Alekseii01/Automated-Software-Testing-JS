import { expect } from 'chai';
import { findMax, findMin, removeDuplicates } from '../src/arrayUtils.js';

describe('Array Utils', () => {
  describe('findMax', () => {
    it('should return the max value in the array', () => {
      expect(findMax([1, 2, 3, 4, 5])).to.equal(5);
    });

    it('should handle negative numbers', () => {
      expect(findMax([-10, -5, -1])).to.equal(-1);
    });

    it('should throw error if input is not an array', () => {
      expect(() => findMax('not array')).to.throw('Input must be an array');
    });
  });

  describe('findMin', () => {
    it('should return the min value in the array', () => {
      expect(findMin([1, 2, 3, 0, -1])).to.equal(-1);
    });

    it('should handle positive numbers', () => {
      expect(findMin([10, 20, 30])).to.equal(10);
    });

    it('should throw error if input is not an array', () => {
      expect(() => findMin(123)).to.throw('Input must be an array');
    });
  });

  describe('removeDuplicates', () => {
    it('should remove duplicates from array', () => {
      expect(removeDuplicates([1, 2, 2, 3, 4, 4])).to.deep.equal([1, 2, 3, 4]);
    });

    it('should return same array if no duplicates', () => {
      expect(removeDuplicates([5, 6, 7])).to.deep.equal([5, 6, 7]);
    });

    it('should throw error if input is not an array', () => {
      expect(() => removeDuplicates(null)).to.throw('Input must be an array');
    });
  });
});
