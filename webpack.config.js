const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,

                type: 'asset/resource',
            },
            // {
            //     test: /\.webp$/i,

            //     use: 'webp-loader',
            // },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Restaurant Page',
        }),
    ],
};
