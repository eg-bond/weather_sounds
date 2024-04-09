import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function buildDevServer(): DevServerConfiguration {
  return {
    port: 8080,
    hot: true,
    open: true,
  }
}
