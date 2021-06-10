module.exports = {
  // 忽略 message 中包括 init 内容的 commit
  ignores: [(commit) => commit.includes('init')],
  // 默认集成的规则
  extends: ['@commitlint/config-conventional'],
  // 自定义解析器
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*|[\u4e00-\u9fa5]*)(?:[\(\（](.*)[\)\）])?[\:\：] (.*)/,
      headerCorrespondence: ['type', 'scope', 'subject'],
      referenceActions: [
        'close',
        'closes',
        'closed',
        'fix',
        'fixes',
        'fixed',
        'resolve',
        'resolves',
        'resolved',
      ],
      issuePrefixes: ['#'],
      noteKeywords: ['BREAKING CHANGE'],
      fieldPattern: /^-(.*?)-$/,
      revertPattern: /^Revert\s"([\s\S]*)"\s*This reverts commit (\w*)\./,
      revertCorrespondence: ['header', 'hash'],
      warn() {},
      mergePattern: null,
      mergeCorrespondence: null,
    },
  },
  // 定义的规则可覆盖 @commitlint/config-conventional 的规则
  rules: {
    // level: 0 disables the rule. For 1 it will be considered a warning for 2 an error. Applicable: always|never. value: 用于规则的值
    // body 以空白行开头
    'body-leading-blank': [2, 'always'],
    // footer 以空白行开头
    'footer-leading-blank': [1, 'always'],
    // header 的最大长度
    'header-max-length': [2, 'always', 108],
    // subject 为空
    'subject-empty': [2, 'never'],
    // type 为空
    'type-empty': [2, 'never'],
    // type 类型
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // bug 修复
        'perf', // 性能优化改进
        'style', // 样式变更
        'docs', // 文档变更
        'test', // 新增或修订单元测试
        'refactor', // 重构
        'build', // 打包
        'ci', // 持续集成环境
        'chore', // 构建过程复杂辅助工具变更
        'revert',
        'wip',
        'workflow', //
        'types',
        'release',
      ],
    ],
  },
}
