module.exports = {
  preset: 'react-native',
  verbose: true,
  roots: [
    '<rootDir>/test'
  ],
  transform: {
    '\\.jsx?$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '^.+\\.tsx?$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json'
    }
  }
}