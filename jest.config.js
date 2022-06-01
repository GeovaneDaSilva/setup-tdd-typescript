module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  roots: [
    '<rootDir>/src',
    '<rootDir>/tests'
  ],
  modulePathIgnorePatterns: ['<rootDir>/src/interfaces'],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }

}
