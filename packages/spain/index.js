export function validateDNI(dni) {
  if (typeof dni !== 'string') return false;
  dni = dni.toUpperCase().trim();

  const regex = /^(\d{8})([A-Z])$/;
  const match = dni.match(regex);
  if (!match) return false;

  const numero = parseInt(match[1], 10);
  const letra = match[2];

  const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
  return letras[numero % 23] === letra;
}

export function validateNIE(nie) {
  if (typeof nie !== 'string') return false;
  nie = nie.toUpperCase().trim();

  const regex = /^([XYZ])(\d{7})([A-Z])$/;
  const match = nie.match(regex);
  if (!match) return false;

  let letraInicial = match[1];
  const numero = parseInt((letraInicial === 'X' ? '0' : letraInicial === 'Y' ? '1' : '2') + match[2], 10);
  const letra = match[3];

  const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
  return letras[numero % 23] === letra;
}

export function validateNIF(nif) {
  return validateDNI(nif) || validateNIE(nif);
}
