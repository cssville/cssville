const path = require('path');

const PATHS = {
  build: path.resolve(__dirname, 'build'),
};

module.exports = {
  target: "node",
  mode: "development",
  //devtool: "inline-source-map",
  entry: {
    web: "./src/generate.ts",
  },
  output: {
    path: PATHS.build,
    filename: "cssville.bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    fallback: {
      "fs": false,
      "path": false
    }
  },
  plugins: [
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
    ]
  },
  optimization: {
    minimize: true,
  },
};