import webpack from 'webpack'
import {buildWebpack} from './config/build/buildWebpack'
import {BuildMode, BuildPlatform} from './config/build/types'
import path from 'path'

interface EnvVariables {
  mode?: BuildMode
  port?: number
  analyzer?: boolean
  platform?: BuildPlatform
}

export default (env: EnvVariables) => {
  const config: webpack.Configuration = buildWebpack({
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      src: path.resolve(__dirname, 'src'),
      public: path.resolve(__dirname, 'public'),
      output: path.resolve(__dirname, 'build'),
    },
    mode: env.mode,
    port: env.port ?? 3000,
    analyzer: env.analyzer,
    platform: env.platform ?? 'desktop',
  })
  return config
}
