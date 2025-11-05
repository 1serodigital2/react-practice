import { describe, it, expect } from 'vitest';
import { isEmail, isNotEmpty, hasMinLength, isEqualToOtherValue } from './validation';

// Behaviors covered:
// 1. isEmail returns true for strings containing a single '@'
// 2. isEmail returns true for multiple '@' since current logic only checks includes
// 3. isEmail returns false when '@' is missing
// 4. isNotEmpty trims whitespace and returns false for all-whitespace
// 5. isNotEmpty returns true for non-empty non-whitespace strings
// 6. hasMinLength returns true when value length equals min
// 7. hasMinLength returns false when value length is less than min
// 8. isEqualToOtherValue performs strict equality including type

describe('validation utils', () => {
  describe('isEmail', () => {
    it("should return true when the string contains '@'", () => {
      expect(isEmail('user@example.com')).toBe(true);
      expect(isEmail('@start')).toBe(true);
      expect(isEmail('end@')).toBe(true);
    });

    it("should reflect current logic and return true even when multiple '@' exist", () => {
      // Document current behavior: includes('@') -> true
      expect(isEmail('user@@example.com')).toBe(true);
    });

    it("should return false when '@' is not present", () => {
      expect(isEmail('userexample.com')).toBe(false);
      expect(isEmail('no-at-here')).toBe(false);
      expect(isEmail('')).toBe(false);
    });
  });

  describe('isNotEmpty', () => {
    it('should return false for strings that are only whitespace after trimming', () => {
      expect(isNotEmpty('   ')).toBe(false);
      expect(isNotEmpty('\n\t ')).toBe(false);
    });

    it('should return true for non-empty non-whitespace strings', () => {
      expect(isNotEmpty('a')).toBe(true);
      expect(isNotEmpty('  a  ')).toBe(true);
    });
  });

  describe('hasMinLength', () => {
    it('should return true when value length equals the minimum', () => {
      expect(hasMinLength('abc', 3)).toBe(true);
      expect(hasMinLength('12345', 5)).toBe(true);
    });

    it('should return false when value length is less than the minimum', () => {
      expect(hasMinLength('ab', 3)).toBe(false);
      expect(hasMinLength('', 1)).toBe(false);
    });
  });

  describe('isEqualToOtherValue', () => {
    it('should return true for strictly equal values (same type and value)', () => {
      expect(isEqualToOtherValue('abc', 'abc')).toBe(true);
      expect(isEqualToOtherValue(1, 1)).toBe(true);
      expect(isEqualToOtherValue(true, true)).toBe(true);
    });

    it('should return false for values that are equal after coercion but not strictly', () => {
      expect(isEqualToOtherValue('1', 1)).toBe(false);
      expect(isEqualToOtherValue(0, false)).toBe(false);
    });
  });
});
