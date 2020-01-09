module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "jest": true
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "extends": ["eslint:recommended", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    'prettier/prettier': ['error', {
      'singleQuote': true
    }]
  }
}
