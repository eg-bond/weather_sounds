module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  globals: {
    __dirname: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@stylistic/js'],
  rules: {
    '@stylistic/js/indent': ['error', 2],
    '@stylistic/js/quotes': ['warn', 'single'],
    '@stylistic/js/semi': ['warn', 'never'],
    '@stylistic/js/linebreak-style': ['warn', 'windows'],
    '@stylistic/js/object-curly-spacing': ['warn', 'always'],
  },
}
