const path = require('path');

module.exports = {
    devServer: {
        static: './dist',
    }, 
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src', 'index'),
    // mode: 'production',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                "targets": "defaults"
                            }],
                            '@babel/preset-react'
                        ]
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.wasm']
    }
};