import { expect } from 'chai';
import { capitalize, reverseString, isPalindrome } from '../src/stringUtils.js';

describe('String Utils', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter of a string', () => {
      expect(capitalize('hello')).to.equal('Hello');
    });

    it('should throw error if input is not a string', () => {
      expect(() => capitalize(123)).to.throw('Input must be a string');
    });
  });

  describe('reverseString', () => {
    it('should reverse a string', () => {
      expect(reverseString('hello')).to.equal('olleh');
    });

    it('should throw error if input is not a string', () => {
      expect(() => reverseString(123)).to.throw('Input must be a string');
    });
  });

  describe('isPalindrome', () => {
    it('should return true for a palindrome', () => {
      expect(isPalindrome('madam')).to.be.true;
    });

    it('should return false for a non-palindrome', () => {
      expect(isPalindrome('hello')).to.be.false;
    });

    it('should throw error if input is not a string', () => {
      expect(() => isPalindrome(123)).to.throw('Input must be a string');
    });
  });
});
