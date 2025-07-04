import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        CPManager: "writable",
        Chart: "readonly", // Add Chart here
        jsPDF: "readonly", // Add jsPDF here
        autoTable: "readonly", // Add autoTable here
      },
    },
    rules: {
      "no-prototype-builtins": "off", // You can turn this off if you don't want to fix it.
    },
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    extends: ["markdown/recommended"],
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },

  // This is the final, crucial piece.
  // It MUST be the last element to override other style rules.
  prettierConfig,
]);
