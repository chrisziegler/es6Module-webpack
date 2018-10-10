module.exports = {
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6
  },
  rules: {
    'linebreak-style': 0,
    // 'eol-last': 0,
    'no-unused-vars': [
      'warn',
      {
        vars: 'local',
        args: 'none'
      }
    ],
    'func-names': ['error', 'never'],
    'no-console': 'warn',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }]
  }
};
