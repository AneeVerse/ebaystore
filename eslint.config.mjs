import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {},
  allConfig: {},
  stringConfig: {},
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    languageOptions: {
      parserOptions: {
        // Use a simple configuration for the parser
        ecmaVersion: 2022,
        sourceType: "module",
      }
    }
  }
];

export default eslintConfig;
