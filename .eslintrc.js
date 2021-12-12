module.exports = {
  root: true,
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    // TS specific recommended
    'plugin:@typescript-eslint/recommended',
    //
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // Disable rules conflicting with prettier
    require.resolve('eslint-config-prettier'),
  ],
  env: {
    browser: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    "react": {
      "version": "detect"
    }
  }
};
