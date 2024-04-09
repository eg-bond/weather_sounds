import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ESLintWebpackPlugin from 'eslint-webpack-plugin'
import type { Configuration } from 'webpack'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

type EnvVariables_T = {
  mode: 'development' | 'production'
}

export default (env: EnvVariables_T): Configuration => {
  const isDev = env.mode === 'development'
  const isProd = env.mode === 'production'

  const devServerOptions = () => {
    if (isDev) {
      return {
        port: 8080,
        hot: true,
        open: true,
      }
    }
  }

  const config: Configuration | DevServerConfiguration = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    mode: env.mode,
    devServer: devServerOptions(),
    devtool: isDev ? 'eval-cheap-source-map' : 'source-map',
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'public', 'assets'),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
        favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
      }),
      new MiniCssExtractPlugin(),
      new ESLintWebpackPlugin(),
      isProd && new BundleAnalyzerPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[name][ext]',
          },
        },
        {
          test: /\.(svg|jpg|jpeg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[name][ext]',
          },
        },
        {
          test: /\.mp3$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/sounds/[name][ext]',
          },
        },
      ],
    },
  }
  return config
}
