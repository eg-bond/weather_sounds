import path from 'path'
import type { Configuration } from 'webpack'
import type { PathsType } from './types'

export function buildResolvers(paths: PathsType): Configuration['resolve'] {
  return {
    extensions: ['.ts', '.js'],
    alias: {
      '@assets': path.resolve(paths.public, 'assets'),
    },
  }
}
