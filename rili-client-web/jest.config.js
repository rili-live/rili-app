module.exports = {
    globals: {
        window: {
            location: {
                origin: 'https://www.example.com/',
            },
        },
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '^.+\\.(css|scss|svg)$': 'identity-obj-proxy',
        'rili-react/(.*)': '<rootDir>../rili-public-library/rili-react/lib/$1',
        'rili-js-utilities/(.*)': '<rootDir>../rili-public-library/rili-js-utilities/lib/$1',
        'rili-styles/(.*)': '<rootDir>../rili-public-library/rili-styles/lib/$1.css',
        '^actions/(.*)': '<rootDir>/src/redux/actions/$1.ts',
        '^enums/(.*)': '<rootDir>/src/constants/enums/$1.ts',
        '^types/(.*)': '<rootDir>/src/redux/types/$1.ts',
    },
    setupFiles: [],
    setupFilesAfterEnv: ['./test-setup.ts'],
    testURL: 'https://www.example.com/',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.jsx?$': 'babel-jest',
    },
    testRegex: '/__tests__/.*\\.(tsx?|jsx?)$',
};
