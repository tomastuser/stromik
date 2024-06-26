module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb-typescript',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'linebreak-style': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'jsx-quotes': ['error', 'prefer-single'],
    'object-curly-newline': ['error', { multiline: true }],
    'react/no-danger': ['off'],
    'no-nested-ternary': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'no-unused-expressions': ['error', { allowTernary: true }],
  },
};
