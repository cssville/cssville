const path = require('path');

module.exports = {
  target: "node",  
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    cssville: "./src/generate.ts",
    web: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, './src'),
    filename: "[name].bundle.js" // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    fallback: {
        "fs": false
    }
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};