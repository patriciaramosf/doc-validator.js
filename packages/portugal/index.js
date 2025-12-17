/**
 * Validates a Portuguese Cartão de Cidadão (CC).
 * @param {string} CC - The national ID string (8 digits + letter).
 * @returns {boolean} True if the CC is valid, false otherwise.
 */
export const validateCC = (CC) => {
  if (typeof CC !== 'string') return false;
  const formattedCC = CC.toUpperCase().trim();

  const match = formattedCC.match(/^(\d{8})([A-Z])$/);
  if (!match) return false;

  const numero = parseInt(match[1], 10);
  const letra = match[2];

  const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
  return letras[numero % 23] === letra;
};

/**
 * Validates a Portuguese NIF (Número de Identificação Fiscal).
 * @param {string} NIF - The tax number string (9 digits).
 * @returns {boolean} True if the NIF is valid, false otherwise.
 */
export const validateNIF = (NIF) => {
  if (typeof NIF !== 'string') return false;
  const formattedNIF = NIF.trim();

  if (!/^\d{9}$/.test(formattedNIF)) return false;

  const digits = formattedNIF.split('').map(Number);
  const control = digits[8];
  let sum = 0;

  for (let i = 0; i < 8; i++) {
    sum += digits[i] * (9 - i);
  }

  const check = 11 - (sum % 11);
  const checkDigit = check >= 10 ? 0 : check;

  return control === checkDigit;
};
