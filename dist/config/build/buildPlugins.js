import { DefinePlugin, ProgressPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
export function buildPlugins(options) {
    const { paths: { html }, analyzer, platform, } = options;
    const isDev = options.mode === 'development';
    const isProd = options.mode === 'production';
    const plugins = [
        new HtmlWebpackPlugin({ template: html }),
        new DefinePlugin({ __PLATFORM__: JSON.stringify(platform) }),
    ];
    if (isDev) {
        plugins.push(new ProgressPlugin());
    }
    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }));
    }
    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin());
    }
    return plugins;
}
