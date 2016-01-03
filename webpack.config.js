var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    // 'babel-polyfill',
    './client/app.js'
    // 'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
      path: __dirname + '/client/components/',
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
        loader: 'babel-loader',
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
