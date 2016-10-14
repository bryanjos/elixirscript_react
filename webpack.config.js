const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  cache: true,
  entry: ['babel-polyfill', './app/tmp/app/Elixir.App.js'],
  output: {
    path: path.join(__dirname, "dist"),
    filename: 'build.min.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './app/html/index.html'
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      }
    ]
  }
};
