// packages/spain/validate.test.js
import { validateDNI } from './index.js';

describe('validateDNI', () => {
  it('should return true for a valid DNI', () => {
    expect(validateDNI('11863847X')).toBe(true);
  });

  it('should return false for an invalid DNI', () => {
    expect(validateDNI('12345678A')).toBe(false);
  });

  it('should return false for non-string input', () => {
    expect(validateDNI(12345678)).toBe(false);
  });
});
