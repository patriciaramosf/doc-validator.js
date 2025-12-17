import { validateNIF } from './index.js';

describe('Portugal validations', () => {
  test('validateNIF should return true for valid NIF', () => {
    expect(validateNIF('290836247')).toBe(true);
  });

  test('validateNIF should return false for invalid NIF', () => {
    expect(validateNIF('123456783')).toBe(false);
  });
});
