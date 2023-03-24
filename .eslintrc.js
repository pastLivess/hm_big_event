module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-model-argument': 'off',
    'vue/no-mutating-props': 'off',
    // 'javascript.preferences.quoteStyle': 'single',
    semi: [0, 'always'], //语句强制分号结尾
    'prettier/prettier': [
      'off',
      {
        singleQuote: true,
        parser: 'flow',
      },
    ],
  },
}
