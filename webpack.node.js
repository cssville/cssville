const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  target: 'node',
  entry: {
    generator: './src/generate.ts',
  },
  output: {
    filename: 'generator.bundle.js',
  },
  plugins: [
  ],
});