# doc-validator.js
## Modular JavaScript library for validating official documents such as DNI, NIF, passports, and other documents by country.

### Features:

* Country-specific validation rules

* Import everything via namespaces

* Import only what you need for a smaller bundle

### 📦 Installation
```
npm install doc-validator
# o con yarn
yarn add doc-validator
```
### 🌼  Usage
**1. Importing everything using country namespacess**

```
import { spain, portugal } from 'doc-validator';

// España
const isDNIValid = spain.validateDNI('12345678Z');
const isPassportValid = spain.validatePassport('12345678Z');

// Portugal
const isNIFValidPT = portugal.validateNIF('123456789');
const isPassportValidPT = portugal.validatePassport('AB1234567');
```

**2. Importing only a specific country (subpath export)**

```
import { validateDNI } from 'doc-validator/spain';
import { validateNIF } from 'doc-validator/portugal';

const isDNIValid = validateDNI('12345678Z');
const isNIFValidPT = validateNIF('123456789');
```

### 📋  Available functions by country

| Country   | Function & Description |
|-----------|-----------------------|
| Spain     | - `validateDNI` — Validates Spanish DNI (Documento Nacional de Identidad)  
|           | - `validateNIE` — Validates Spanish NIE (Número de Identidad de Extranjero)  
|           | - `validateNIF` — Validates Spanish NIF (tax identification number) |
| Portugal  | - `validateCC` — Validates Portuguese Cartão de Cidadão (national ID card)  
|           | - `validateNIF` — Validates Portuguese NIF (Número de Identificação Fiscal – tax number) |

