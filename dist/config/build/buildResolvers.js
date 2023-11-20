export function buildResolvers(options) {
    return {
        extensions: ['.tsx', '.ts', '.js', '.scss'],
        alias: {
            '@': options.paths.src,
        },
    };
}
