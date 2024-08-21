module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/__mocks__/svgMock.js',
    '\\.png$': '<rootDir>/src/__mocks__/pngMock.js',
  },
};
