const path = require('path');

module.exports = {
    entry: {
        'popup': './src/index.tsx',
        'content-script': './src/content-script.tsx',
        'service-worker': './src/background.tsx',

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    watch: true,
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {test: /\.tsx?$/, loader:"ts-loader"},
        ]
    }
};