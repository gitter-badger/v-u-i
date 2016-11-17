var webpack               = require('webpack');
var pkg                   = require('./package');

module.exports = {
  entry: './docs/index.js',
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    },
    extensions: ['', '.js', '.vue']
  },
  output: {
    path: './',
    pathinfo: true,
    filename: 'index.js',
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loaders: ['vue'],
      exclude: [/node_modules/]
    }, {
      test: /\.js$/,
      loaders: ['babel'],
      exclude: [/node_modules/]
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(jpg|gif|png)$/,
      loader: 'url-loader'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false
    }),
    new webpack.BannerPlugin(
      [
        '/**',
        ' * ' + pkg.name,
        ' * ' + pkg.description,
        ' * Licensed under ' + pkg.license,
        ' */'
      ].join('\n'), {
        raw: true,
        entryOnly: true
      }
    )
  ]
};
