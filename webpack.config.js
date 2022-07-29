const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, './src/index.jsx'),
    optimization: {
        minimize: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    performance: {
        maxAssetSize: 500000,
        maxEntrypointSize: 500000,
        hints: 'error',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, './docs'),
        filename: 'bundle.js',
    },
    devServer: {
        static: path.resolve(__dirname, './docs'),
    }
};