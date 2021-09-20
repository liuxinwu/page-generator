module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 禁止在循环中出现 await
    'no-await-in-loop': 1,
    // 禁用 debugger
    'no-debugger': 0, 
    // 要求使用 === 和 !==
    'eqeqeq': 1,	
    // 要求 for-in 循环中有一个 if 语句
    'guard-for-in': 1, 
    // 强制每个文件中包含的的类的最大数量
    'max-classes-per-file': [1, 1],	
    // 禁止扩展原生类型
    'no-extend-native': 1,	
    // 禁用一成不变的循环条件
    'no-unmodified-loop-condition': 1,	
    // 2 个空格缩进
    'indent': ['error', 2],	
    // 强制在 JSX 属性中一致地使用双引号
    'jsx-quotes': ['error', 'prefer-double'],	
    // 要求在对象字面量的冒号和值之间存在至少有一个空格
    'key-spacing': ['error', { 'afterColon': true }], 
    // 强制行注释只在代码上方，单独成行。
    'line-comment-position': ['error', { 'position': 'above' }],
    // 强制块语句的最大可嵌套深度
    'max-depth': [1, 4],
    // 强制行的最大长度
    'max-len': ['error', { 'code': 80 }],
    // 强制行的最大行数
    'max-lines': ['error', 300],
    // 强制在函数中的最大行数。
    'max-lines-per-function': ['error', 50],
    // 强制回调函数最大可嵌套深度
    'max-nested-callbacks': ['error', 3],
    // 强制三元操作数之间有换行。
    'multiline-ternary': ['error', 'always'],
    // 要求调用 new 操作符时有首字母大小的函数
    'new-cap': 1,
    // 单引号
    'quotes': ['error', 'single'],
    // 无分号
    'semi': ['error', 'never'],
    // 该规则禁止在 return、throw、continue 和 break 语句后出现不可达代码。
    'no-unreachable': 1,
    // 要求操作符周围有空格
    'space-infix-ops': 'error',
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': 'error',
    // 强制在 switch 的冒号左右有空格
    'switch-colon-spacing': 'error'
  },
  'overrides': [
    {
      'files': ['*.ts',],
      'rules': {
        '@typescript-eslint/explicit-module-boundary-types': ['error']
      }
    }
  ]
}
