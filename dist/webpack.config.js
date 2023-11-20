import { buildWebpack } from './config/build/buildWebpack';
import path from 'path';
export default (env) => {
    var _a, _b, _c;
    const config = buildWebpack({
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            output: path.resolve(__dirname, 'build'),
            src: path.resolve(__dirname, 'src'),
        },
        mode: (_a = env.mode) !== null && _a !== void 0 ? _a : 'development',
        port: (_b = env.port) !== null && _b !== void 0 ? _b : 3000,
        analyzer: env.analyzer,
        platform: (_c = env.platform) !== null && _c !== void 0 ? _c : 'desktop',
    });
    return config;
};
