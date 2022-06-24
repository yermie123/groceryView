const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

//i removed this thing from the json file, couldn't comment it out just in case
//"dev": "concurrently \"cross-env NODE_ENV=development nodemon server/server.js\" \"cross-env NODE_ENV=development webpack serve --open --hot\" ",

module.exports = {
    mode: "development",
    entry: {
        src: './client/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.s?css/,
                exclude: /node_modules/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: 'index.html'
        }),
    ],
    devServer: {
        static: {
            publicPath: '/build',
            directory: path.resolve(__dirname, 'build')
        },
        proxy: {
            '/api': 'http:localhost:3000'
        }
    }
}