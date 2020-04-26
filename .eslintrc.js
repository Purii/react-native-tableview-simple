module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    // TS specific recommended
    'plugin:@typescript-eslint/recommended',
    //
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // React Native
    '@react-native-community',
    // Disable rules conflicting with prettier
    require.resolve('eslint-config-prettier'),
    // Disable ts rules conflicting with prettier
    require.resolve('eslint-config-prettier/@typescript-eslint'),
    // Disable rules conflicting with prettier
    require.resolve('eslint-config-prettier/react'),
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
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
};
