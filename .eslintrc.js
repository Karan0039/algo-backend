module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  overrides: [
    {
      files: ['**/*.test.js'],
      globals: {
        // Ignore "not defined" warning for specific test-related variables
        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        it: 'readonly',
        jest: 'readonly',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {},
  globals: {
    process: true,
    __dirname: true,
    expect: 'readonly',
    test: 'readonly',
    Buffer: true,
  },
};
