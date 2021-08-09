module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/components/**/*.stories.js',
    '!.eslintrc.js',
    '!jest.config.js',
    '!**/.storybook/**',
    '!**/coverage/**'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/']
};
