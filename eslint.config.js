import globals from "globals";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "module" },
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "prefer-const": "warn",
      "@stylistic/semi": "warn",
    },
  },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.node } },
]);
