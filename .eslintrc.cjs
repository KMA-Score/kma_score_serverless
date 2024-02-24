module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        tabWidth: 2,
        insertPragma: false,
        endOfLine: 'lf',
        emptyLines: true,
        useTabs: false,
      },
    ],
  },
  ignorePatterns: [
    '*.js',
    '*.cjs',
    'package.json',
    'package-lock.json',
    'pnpm-lock.yaml',
    'pnpm-workspace.yaml',
    'dist',
    '.sst',
    '/**/node_modules/*',
    '*.d.ts',
  ],
};
