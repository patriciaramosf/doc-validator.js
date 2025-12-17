import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Config general para todo el código
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.node, // Node globals
      },
    },
  },
  // Config solo para tests
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest, // describe, test, expect
        ...globals.node,
      },
    },
  },
]);
