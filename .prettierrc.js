module.exports = {
  printWidth: 100, // 单行长度
  tabWidth: 2, // 缩进长度
  useTabs: false, // 使用空格代替tab缩进
  semi: false, // 句末不使用分号
  singleQuote: true, // 使用单引号
  quoteProps: 'preserve', // "as-needed" - 仅在需要时在对象属性周围添加引号。 "consistent" - 如果对象中至少有一个属性需要引号，则引用所有属性。preserve 尊重对象属性中引号的输入用法,
  jsxSingleQuote: false, // jsx中使用单引号
  trailingComma: 'all', // 多行时尽可能打印尾随逗号
  bracketSpacing: true, // 在对象前后添加空格-eg: { foo: bar }
  jsxBracketSameLine: true, // 多属性html标签的‘>’折行放置. true : 放在最后一行的末尾. false : 单独放在下一行（不适用于自动关闭元素
  arrowParens: 'always', //单参数箭头函数参数周围使用圆括号-eg: (x) => x
  requirePragma: false, // 无需顶部注释即可格式化
  insertPragma: false, // 在已被preitter格式化的文件顶部加上标注
  proseWrap: 'never', // 换行?
  htmlWhitespaceSensitivity: 'strict', //对HTML全局空白不敏感
  vueIndentScriptAndStyle: true, // 对vue中的script及style标签缩进
  endOfLine: 'lf', // lf/crlf/cr/auto 结束行形式
  embeddedLanguageFormatting: 'auto', // 对引用代码进行格式化
}
