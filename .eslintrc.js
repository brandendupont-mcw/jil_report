module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'next', 'next/core-web-vitals'],
  rules: {
    'no-undef': 'off',
    'no-undef-vars': 'off',
    'prettier/prettier': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'no-unused-vars': 'off',
    'react/no-unescaped-entities': 0,
    
  },
}
