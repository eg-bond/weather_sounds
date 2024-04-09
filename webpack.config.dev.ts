// @ts-nocheck
import { merge } from 'webpack-merge'
import commonConfig from './webpack.config.common.ts'

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    port: 8080,
    hot: true,
    open: true,
  },
  devtool: 'eval-cheap-source-map',
})
