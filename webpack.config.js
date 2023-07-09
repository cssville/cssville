const path = require('path');
const DtsBundleWebpack = require('dts-bundle-webpack');

module.exports = {
  target: "node",  
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    generator: "./src/generate.ts",
    cssville: "./src/cssville.ts",
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
  plugins: [
    new DtsBundleWebpack({
      name: 'cssville',
      main: 'src/cssville.d.ts',
      out: 'cssville.bundle.d.ts',
    }),
  ],
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};