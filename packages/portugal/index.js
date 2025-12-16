export function validateCC(CC) {
  if (typeof CC !== 'string') return false;
  CC = CC.toUpperCase().trim();

  const match = CC.match(/^(\d{8})([A-Z])$/);
  if (!match) return false;

  const numero = parseInt(match[1], 10);
  const letra = match[2];

  const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
  return letras[numero % 23] === letra;
}

export function validateNIF(NIF) {
  if (typeof NIF !== 'string') return false;
  NIF = NIF.trim();

  if (!/^\d{9}$/.test(NIF)) return false;

  const digits = NIF.split('').map(Number);
  const control = digits[8];
  let sum = 0;

  for (let i = 0; i < 8; i++) {
    sum += digits[i] * (9 - i);
  }

  const check = 11 - (sum % 11);
  const checkDigit = check >= 10 ? 0 : check;

  return control === checkDigit;
}
