module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    semi: ["error", "never"],
    "react-hooks/exhaustive-deps": 0,
    "react-refresh/only-export-components": 0,
  },
};
