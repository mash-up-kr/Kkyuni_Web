export default {
  setupFilesAfterEnv: [
    'given2/setup',
    'jest-plugin-context/setup',
    './jest.setup',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/src$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
};
