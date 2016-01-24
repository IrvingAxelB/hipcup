// var path = require('path');
// var webpack = require('webpack');

var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'client'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [ 'babel' ],
      exclude: /node_modules/,
      include: __dirname
    }]
  }
}

// var reduxSrc = path.join(__dirname, '..', '..', 'src')
// var reduxNodeModules = path.join(__dirname, '..', '..', 'node_modules')
// var fs = require('fs')
// if (fs.existsSync(reduxSrc) && fs.existsSync(reduxNodeModules)) {
//   // Resolve Redux to source
//   module.exports.resolve = { alias: { 'redux': reduxSrc } }
//   // Compile Redux from source
//   module.exports.module.loaders.push({
//     test: /\.js$/,
//     loaders: [ 'babel' ],
//     include: reduxSrc
//   })
// }


// module.exports = {
//   entry: [
//     './index'
//   ],
//   output: {
//       path: __dirname + '/client/',
//       filename: 'bundle.js'
//   },
//   debug: true,
//   devtool: 'source-map',
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         include: path.join(__dirname, 'client'),
//         exclude: /(node_modules)/,
//         loader: ['babel-loader'],
//         query: {
//           presets: ['es2015', 'react']
//         }
//       },
//     ]
//   },
//   devServer: {
//     contentBase: './client'
//   }
// };
