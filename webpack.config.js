const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/grid-triangle.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'grid-triangle.bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
}