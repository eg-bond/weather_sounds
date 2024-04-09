import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ESLintWebpackPlugin from 'eslint-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import path from 'path'
import { Configuration } from 'webpack'
import type { PathsType } from './types'

export function buildPlugins(
  paths: PathsType,
  isProd: boolean
): Configuration['plugins'] {
  return [
    new HtmlWebpackPlugin({
      template: path.resolve(paths.public, 'index.html'),
      favicon: path.resolve(paths.public, 'favicon.ico'),
    }),
    new MiniCssExtractPlugin(),
    new ESLintWebpackPlugin(),
    isProd && new BundleAnalyzerPlugin(),
  ]
}
