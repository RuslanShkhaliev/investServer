const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development'
const outDir = path.resolve(__dirname, 'dist');

module.exports = {
    mode: NODE_ENV,
    target: 'node',
    entry: './src/index.ts',
    devtool: "inline-source-map",
    watch: true,
    module: {
        rules: [
            {
                test: /\.[tj]s$/,
                use: 'ts-loader',
            },
        ],
    },
    externals: [nodeExternals()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['.ts', '.js', '.json'],
    },
    output: {
        filename: 'index.js',
        path: outDir,
    },
    plugins: [
      new NodemonPlugin({
          watch: outDir,
          script: './dist/index.js'
      })
    ],
    optimization: {
        minimize: false,
    },
};
