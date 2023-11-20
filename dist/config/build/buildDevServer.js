export function buildDevServer(options) {
    const { port } = options;
    return {
        port: port !== null && port !== void 0 ? port : 3000,
        open: true,
        // работает только для дев сервера.
        // если раздавать статику через ngnx, то надо делать проксирование index.html
        historyApiFallback: true,
    };
}
