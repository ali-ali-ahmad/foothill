module.exports = {
    testEnvironment: 'node',
    // testEnvironment: 'jsdom',
    collectCoverage: true,
    coverageReporters: ['lcov', 'text'],
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    coverageThreshold: {
        global: {
            branches: 85,
            functions: 85,
            lines: 85,
            statements: 85
        }
    }
};