// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files (files is index.js)
const srcContext = require.context('../../src', true, /\.(js|vue)$/)
srcContext.keys().forEach(srcContext)
