export function validateCC(cc) {
  if (typeof cc !== 'string') return false;
  cc = cc.toUpperCase().trim();

  const match = cc.match(/^(\d{8})([A-Z])$/);
  if (!match) return false;

  const numero = parseInt(match[1], 10);
  const letra = match[2];

  const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
  return letras[numero % 23] === letra;
}

export function validateNIF(nif) {
  if (typeof nif !== 'string') return false;
  nif = nif.trim();

  if (!/^\d{9}$/.test(nif)) return false;

  const digits = nif.split('').map(Number);
  const control = digits[8];
  let sum = 0;

  for (let i = 0; i < 8; i++) {
    sum += digits[i] * (9 - i);
  }

  const check = 11 - (sum % 11);
  const checkDigit = check >= 10 ? 0 : check;

  return control === checkDigit;
}
