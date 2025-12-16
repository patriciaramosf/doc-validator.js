# doc-validator.js
## doc-validator.js es una librería modular de JavaScript para validar documentos oficiales como DNI, NIF, pasaportes y otros documentos según el país.

### Permite:

* Validación por país con reglas locales

* Importar todo mediante namespaces

* Importar solo lo que necesitas para un bundle más pequeño

### 📦 Instalación
```
npm install doc-validator
# o con yarn
yarn add doc-validator
```
### 🌼  Uso
1. Importando todo con namespaces por país

```
import { spain, portugal } from 'doc-validator';

// España
const isDNIValid = spain.validateDNI('12345678Z');
const isNIFValid = spain.validateNIF('12345678Z');

// Portugal
const isNIFValidPT = portugal.validateNIF('123456789');
const isPassportValidPT = portugal.validatePassport('AB1234567');
```

2. Importando solo un país (subpath export)

```
import { validateDNI } from 'doc-validator/spain';
import { validateNIF } from 'doc-validator/portugal';

const isDNIValid = validateDNI('12345678Z');
const isNIFValidPT = validateNIF('123456789');
```
