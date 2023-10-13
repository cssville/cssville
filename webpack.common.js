const path = require('path');

module.exports = {
  mode: 'development',
  // devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'gen'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    fallback: {
      fs: false,
      path: false,
    },
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  optimization: {
    minimize: true,
  },
};