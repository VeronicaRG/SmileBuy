const esModules = ['react-native', '@react-native', '@react-navigation'].join(
  '|',
);

module.exports = {
  clearMocks: true,
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  collectCoverage: true,
  coverageDirectory: './coverage/',
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleDirectories: ['node_modules'],
  coverageReporters: ['html', 'json', 'text-summary'],
  preset: 'react-native',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node', 'd.ts'],
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  testPathIgnorePatterns: ['/node_modules/'],
  verbose: true,
};
