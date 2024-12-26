import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  {
    rules: {
      '@next/next/no-img-element': 'error', // Ensures <Image> is used over <img>
      '@next/next/no-missing-alt': 'error', // Ensures alt is always provided
      '@next/next/no-assigning-width-height': 'error', // Optional for stricter <Image> usage
    },
  },
];

export default eslintConfig;
