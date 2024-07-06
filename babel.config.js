module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: './src',
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: {
          '@': './src',
          '@/assets': './src/assets',
          '@/domain': './src/domain',
          '@/infra': './src/infra',
          '@/data': './src/data',
          '@/services': './src/data/services',
          '@/schema': './src/data/schema',
          '@/presentation': './src/presentation',
        },
      },
    ],
  ],
};
