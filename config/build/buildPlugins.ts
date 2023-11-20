import {Configuration, DefinePlugin, ProgressPlugin} from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import {BuildOptions} from './types'
import path from 'path'

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
  const {paths, analyzer, platform} = options

  const isDev = options.mode === 'development'
  const isProd = options.mode === 'production'

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(options.paths.public, 'favicon-32.png'),
    }),
    new DefinePlugin({__PLATFORM__: JSON.stringify(platform)}),
  ]

  if (isDev) {
    plugins.push(new ProgressPlugin())
    plugins.push(new ReactRefreshWebpackPlugin())
    /** Выносит проверку типов в отдельный процесс не нагружая сборку */
    plugins.push(new ForkTsCheckerWebpackPlugin())
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      })
    )
    plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(paths.public, 'locales'),
            to: path.resolve(paths.output, 'locales'),
          },
        ],
      })
    )
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return plugins
}
