module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.d.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@src': './src/',
          '@ts': './src/@types/',
          '@components': './src/components/',
        },
      },
    ],
  ],
};
