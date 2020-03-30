const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = env =>
  merge(common(env), {
    mode: 'production',
    devtool: 'source-map',
    output: {
      filename: 'main.bundle.[hash].js',
    },
  });
