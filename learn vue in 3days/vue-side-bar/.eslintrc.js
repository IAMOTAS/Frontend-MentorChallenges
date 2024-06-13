module.exports = {
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      requireConfigFile: false
    },
    extends: [
      'plugin:vue/essential',
      'eslint:recommended'
    ],
    rules: {
      'vue/multi-word-component-names': 'off',
    }
  };
  