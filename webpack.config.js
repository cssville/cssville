const path = require('path');

module.exports = {
  target: "node",  
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/generate.ts",
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: "cssville.bundle.js" // <--- Will be compiled to this single file
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