/* eslint-disable no-magic-numbers */
/* eslint-disable no-dupe-keys */
// eslint-disable-next-line no-undef
module.exports = {
  'env': {
    'browser': true,
    'es2020': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 11,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'rules': {
    'indent': [
      'error',
      'tab'
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'camelcase': [0, {'properties': 'never'}],
    'linebreak-style': 0,
    'indent': [2, 2],
    'max-len': [2, 120],
    'new-cap': 0,
    'no-duplicate-imports': 0,
    'no-extra-parens': [2, 'functions'],
    'no-magic-numbers': [2, { 'ignore': [0, 1] }],
    'no-ternary': 0,
    'no-undefined': 0,
    'no-confusing-arrow': 0,
    'one-var': [2, 'never'],
    'padded-blocks': [2, 'never'],
    'react/require-default-props': 0,
    'react/forbid-component-props': [2, { 'forbid': [] }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js'] }],
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-closing-bracket-location': [2, 'line-aligned'],
    'react/jsx-closing-tag-location': [0],
    'react/jsx-curly-brace-presence': [0],
    'react/require-optimization': 0,
    'react/style-prop-object': 0,
    'sort-keys': 'off',
    'sort-imports': 'off',
    'react/jsx-no-literals': 0,
    'template-curly-spacing': 'off',
    'no-process-env': 'off',
    'react/jsx-no-bind': [
      2,
      {
        'allowArrowFunctions': true
      }
    ]
  }
};
