import { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Use ts-jest for TS/TSX files
  },
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy', // Mock styles
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.ts', // Mock static files
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Optional setup file
};module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(jts|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};


export default config;
