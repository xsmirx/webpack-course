import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
export function buildWebpack(options) {
    const { mode, paths } = options;
    const isDev = mode === 'development';
    return {
        mode: mode !== null && mode !== void 0 ? mode : 'development',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev && 'inline-source-map',
    };
}
