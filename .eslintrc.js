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
