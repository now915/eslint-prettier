module.exports = {
  env: {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  extends: [
    'eslint:recommended',
    'google',
    'plugin:vue/vue3-recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    'ecmaVersion': 12,
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  overrides: [
    {
      // ts 文件检测
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: ['plugin:@typescript-eslint/recommended'], // 使用推荐的ts-eslint
      rules: {
        // '@typescript-eslint/explicit-module-boundary-types': 0,
        // '@typescript-eslint/no-use-before-define': 0,
      },
    },
  ],
  // off/0 - 关闭规则  warn/1 - 将规则视为一个警告（不会影响退出码） error/2 - 将规则视为一个错误 (退出码为1)
  'rules': {
    // js rules
    'semi': [2, 'never'], // 语句不需要分号结尾
    'comma-dangle': [2, 'always-multiline'],
    'no-console': 0,
    'object-curly-spacing': [2, 'always'], // 花括号使用一致的空格
    // 'space-before-function-paren': [2, 'never'], // 禁止函数圆括号之前有一个空格
    // 'no-multiple-empty-lines': [2, { // 不允许多个空行
    //   'max': 2, // 最大连续空行
    //   'maxEOF': 1, // 文件末尾最大连续空行
    //   'maxBOF': 0 // 文件开始最大连续空行
    // }],
    // vue rules
    'vue/html-self-closing': [
      2,
      {
        // vue 自动关闭标签配置
        'html': {
          'void': 'always',
          'normal': 'never',
          'component': 'always',
        },
        'svg': 'always',
        'math': 'always',
      },
    ],
    'vue/html-indent': [
      2,
      2,
      {
        'attribute': 1,
        'baseIndent': 1,
        'closeBracket': 0,
        'alignAttributesVertically': true,
        'ignores': [],
      },
    ],
    'space-before-function-paren': [
      2,
      {
        asyncArrow: 'always',
        anonymous: 'always',
        named: 'ignore',
      },
    ],
    // 'vue/max-attributes-per-line': [
    //   2,
    //   {
    //     'singleline': {
    //       'max': 1,
    //       'allowFirstLine': true,
    //     },
    //     'multiline': {
    //       'max': 1,
    //       'allowFirstLine': false,
    //     },
    //   },
    // ], // 关闭html每行最大属性检查
    // 'vue/singleline-html-element-content-newline': 0, // 关闭单行html元素和内容检查
    // 'vue/max-attributes-per-line': 0
  },
}
