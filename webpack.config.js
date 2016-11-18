var webpack               = require('webpack');
var ExtractTextPlugin     = require("extract-text-webpack-plugin");
var extractText           = new ExtractTextPlugin("v-u-i.css");
var pkg                   = require('./package');

module.exports = {
  entry: ['./src/less/index.less', './src/index.js'],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue'
    },
    extensions: ['', '.js', '.vue']
  },
  output: {
    path: './dist',
    filename: 'v-u-i.js',
    libraryTarget: 'umd'
  },
  externals: {
    'vue': {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  module: {
    loaders: [{
      test:/\.(less|css)$/,
      loader: extractText.extract("style-loader", "css-loader!less-loader")
    }, {
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
    extractText,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false
    }),
    new webpack.BannerPlugin(
      [
        '/**',
        ' * ' + pkg.name + ' v' + pkg.version,
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
