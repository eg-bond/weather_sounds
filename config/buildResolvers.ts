import type { Configuration } from 'webpack'
import path from 'path'
import type { PathsType } from './types'

export function buildResolvers(paths: PathsType): Configuration['resolve'] {
  return {
    extensions: ['.ts', '.js'],
    alias: {
      '@assets': path.resolve(paths.public, 'assets'),
    },
  }
}
