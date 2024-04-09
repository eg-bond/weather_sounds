// @ts-nocheck
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const commonConfig = require('./webpack.config.common')
const { merge } = require('webpack-merge')

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [new BundleAnalyzerPlugin()],
})
