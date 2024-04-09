import path from 'path'
import type { Configuration } from 'webpack'
import { buildPlugins } from './config/buildPlugins'
import { buildLoaders } from './config/buildLoaders'
import { buildDevServer } from './config/buildDevServer'
import { buildResolvers } from './config/buildResolvers'
import type { EnvVariablesType } from './config/types'

const paths = {
  public: path.resolve(__dirname, 'public'),
  src: path.resolve(__dirname, 'src'),
}

export default (env: EnvVariablesType): Configuration => {
  const isDev = env.mode === 'development'
  const isProd = env.mode === 'production'

  const config: Configuration = {
    entry: path.resolve(paths.src, 'index.ts'),
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    mode: env.mode,
    devServer: isDev ? buildDevServer() : undefined,
    devtool: isDev ? 'eval-cheap-source-map' : 'source-map',
    resolve: buildResolvers(paths),
    plugins: buildPlugins(paths, isProd),
    module: { rules: buildLoaders() },
  }

  return config
}
