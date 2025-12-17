import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

const ignores = [
  '.husky/**',
  'dist/**',
  'node_modules/**',
];
export default defineConfig([
  {
    files: ['**/*.js'],
    ignores,
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      // POSIBLE ERRORS
      'no-use-before-define': 'error',
      'no-param-reassign': ['error', { props: true }],
      'no-self-compare': 'error',
      'prefer-promise-reject-errors': 'error',
      'no-unreachable': 'error',
      'no-constant-condition': 'error',

      // BEST PRACTICES
      'prefer-arrow-callback': 'error',
      'no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
      'prefer-template': 'error',
      'no-extra-bind': 'error',
      'no-mixed-operators': 'error',

      // STYLE
      'quotes': ['error', 'single', { avoidEscape: true }],
      'semi': ['error', 'always'],
      'max-len': ['warn', { code: 100, ignoreComments: true }],
      'camelcase': ['error', { properties: 'never' }],
      'no-trailing-spaces': 'warn',
      'no-multiple-empty-lines': ['warn', { max: 1 }],
      'object-curly-spacing': ['warn', 'always'],
      'spaced-comment': 'warn',
      'indent': ['error', 2, { SwitchCase: 1 }],
      'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],
      'key-spacing': 'warn',
      'comma-dangle': ['warn', 'always-multiline'],
    },
    languageOptions: {
      globals: { ...globals.node, ...globals.jest },
    },
  },
]);
