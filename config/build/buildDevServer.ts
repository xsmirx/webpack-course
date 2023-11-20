import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'
import {BuildOptions} from './types'

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  const {port} = options

  return {
    port: port ?? 3000,
    open: true,
    hot: true,
    // работает только для дев сервера.
    // если раздавать статику через ngnx, то надо делать проксирование index.html
    historyApiFallback: true,
  }
}
