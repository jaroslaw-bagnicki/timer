module.exports = {
  "env": {
      "browser": true,
      "node": true,
      "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
      "ecmaVersion": 2015,
      "sourceType": "module"
  },
  "rules": {
      "indent": ["error", 2, { "SwitchCase": 1 }],
      "linebreak-style": ["error", "windows"],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "comma-dangle": ["error", "never"],
      "eol-last": ["error", "always"],
      "no-multiple-empty-lines": [
          "error",
          { "max": 1, "maxBOF": 0, "maxEOF": 0 }
      ],
      "no-console": "warn",
      "no-unused-vars": "warn",
  },
  "globals": {
      "__dirname": true
  }
};