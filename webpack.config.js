const path = require('path');
const webpack = require('webpack');

module.exports = {
    //__dirname refers to the directory where this webpack.config.js lives
  context: path.resolve(__dirname, './src'),
  entry: ['bootstrap-loader', './builder.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.bundle.js',
    publicPath: '/assets',
  },
  devServer: { 
    contentBase: path.resolve(__dirname, './src') 
  },
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: [ 
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true } }
        ]
      },
      { 
        test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, 
        loader: 'imports-loader?jQuery=jquery' 
      },
      {
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
          loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
      new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
      })
  ]
};