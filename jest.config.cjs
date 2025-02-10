module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    transformIgnorePatterns: [
        "/node_modules/(?!query-string|decode-uri-component)" // Permite la transformación de estos módulos
    ]
};
