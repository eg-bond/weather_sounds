// @ts-nocheck
const commonConfig = require('./webpack.config.common')
const { merge } = require('webpack-merge')

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    port: 8080,
    hot: true,
    open: true,
  },
  devtool: 'eval-cheap-source-map',
})
