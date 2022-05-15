module.exports = {
  parser: '@typescript-eslint/parser', // add the TypeScript parser
  env: {
    es6: true,
    browser: true
  },
  root: true,
  extends: ['airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'],
  plugins: ['import', 'prettier', 'svelte3', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 2,
    'prettier/prettier': 'error'
  },
  settings: {
    'svelte3/typescript': true, // load TypeScript as peer dependency
  }
};
