const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
  typescript: true,
  react: true,
  vue: false,
  rules: {
    'ts/consistent-type-imports': 'off',
    'ts/no-require-imports': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'node/prefer-global/process': 'off',
    'no-console': 'off',
  },
})
