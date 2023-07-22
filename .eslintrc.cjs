module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
      },
    ],
  },
  ignorePatterns: [
    "*.js",
    "*.cjs",
    "package.json",
    "package-lock.json",
    "pnpm-lock.yaml",
    "pnpm-workspace.yaml",
    "dist",
    ".sst",
    "/**/node_modules/*",
    "*.d.ts",
  ],
};
