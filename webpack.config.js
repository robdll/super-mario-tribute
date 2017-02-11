const path = require('path');
const webpack = require('webpack');

module.exports = {
    //__dirname refers to the directory where this webpack.config.js lives
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './builder.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'site.bundle.js',
    publicPath: '/assets',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),  // New
  },
};