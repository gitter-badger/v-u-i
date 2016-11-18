var webpackConfig = require('../../webpack.config')
// no need for app entry during tests
delete webpackConfig.entry
webpackConfig.externals = {}
webpackConfig.plugins = []
// use isparta loader
webpackConfig.vue = {
  loaders: {
    js: 'isparta'
  }
}
webpackConfig.module.preLoaders = webpackConfig.module.preLoaders || []
webpackConfig.module.preLoaders.unshift({
  test: /\.js$/,
  loader: 'isparta',
  exclude: [/node_modules/, /test/],
})

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'sinon-chai'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack']
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: './coverage',
      reporters: [
        //{ type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}
