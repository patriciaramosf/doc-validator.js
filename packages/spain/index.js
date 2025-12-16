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
