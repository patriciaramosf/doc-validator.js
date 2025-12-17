const regexDNI = /^(\d{8})([A-Z])$/;
const regexNIE = /^([XYZ])(\d{7})([A-Z])$/;
const lettersNIF = 'TRWAGMYFPDXBNJZSQVHLCKE';

/**
 * Validates a Spanish DNI (Documento Nacional de Identidad).
 * @param {string} DNI - 8 digits + letter.
 * @returns {boolean} True if the DNI is valid, false otherwise.
 */
export const validateDNI = (DNI)  => {
  if (typeof DNI !== 'string') return false;
  const formattedDNI = DNI.toUpperCase().trim();

  const match = formattedDNI.match(regexDNI);
  if (!match) return false;

  const numb = parseInt(match[1], 10);
  const letter = match[2];

  return lettersNIF[numb % 23] === letter;
};

/**
 * Validates a Spanish NIE (Número de Identidad de Extranjero).
 * @param {string} NIE - Format X/Y/Z + 7 digits + letter.
 * @returns {boolean} True if the NIE is valid, false otherwise.
 */
export const validateNIE = (NIE) => {
  if (typeof NIE !== 'string') return false;
  const formattedNIE = NIE.toUpperCase().trim();

  const match = formattedNIE.match(regexNIE);
  if (!match) return false;

  let firstLetter = match[1];
  const numb = parseInt(
    (firstLetter === 'X' ? '0' : firstLetter === 'Y' ? '1' : '2') + match[2], 10);
  const letter = match[3];

  return lettersNIF[numb % 23] === letter;
};

/**
 * Validates a Spanish NIF (Número de Identificación Fiscal).
 * @param {string} nif - Either a DNI or NIE.
 * @returns {boolean} True if the NIF is valid, false otherwise.
 */
export function validateNIF(nif) {
  return validateDNI(nif) || validateNIE(nif);
}
