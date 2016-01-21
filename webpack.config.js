var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './index'
  ],
  output: {
      path: __dirname + '/client/',
      filename: 'bundle.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        exclude: /(node_modules)/,
        loader: ['babel-loader'],
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  },
  devServer: {
    contentBase: './client'
  }
};
