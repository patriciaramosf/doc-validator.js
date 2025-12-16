const regexDNI = /^(\d{8})([A-Z])$/;
const regexNIE = /^([XYZ])(\d{7})([A-Z])$/;
const lettersNIF = 'TRWAGMYFPDXBNJZSQVHLCKE';

export function validateDNI(DNI) {
  if (typeof DNI !== 'string') return false;
  DNI = DNI.toUpperCase().trim();

  const match = DNI.match(regexDNI);
  if (!match) return false;

  const numb = parseInt(match[1], 10);
  const letter = match[2];

  return lettersNIF[numb % 23] === letter;
}

export function validateNIE(NIE) {
  if (typeof NIE !== 'string') return false;
  NIE = NIE.toUpperCase().trim();

  const match = NIE.match(regexNIE);
  if (!match) return false;

  let firstLetter = match[1];
  const numero = parseInt((firstLetter === 'X' ? '0' : firstLetter === 'Y' ? '1' : '2') + match[2], 10);
  const letter = match[3];

  return lettersNIF[numero % 23] === letter;
}

export function validateNIF(nif) {
  return validateDNI(nif) || validateNIE(nif);
}
