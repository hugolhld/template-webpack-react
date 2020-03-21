const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    devtool: 'source-map',
    devServer:
    {
        contentBase: '/dist',
        open: true,
        host: '0.0.0.0',
        useLocalIp: true
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader"
            }
        },
        {
            test: /\.html$/,
            use: [
            {
                loader: "html-loader"
            }
            ]
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
            test: /\.styl$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
            test: /\.(jpg|jpeg|gif|png|svg)$/,
            use: 
            [
                {
                    loader: 'file-loader',
                    options: {outputPath: 'images/'}
                }
            ]
        },
        {
            test: /\.(ttf|otf|woff|woff2)$/,
            use: 
            [
                {
                    loader: 'file-loader', 
                    options: { outputPath: 'fonts/'}
                }
            ]
        }
        ]
    },
    plugins: 
    [
        new CopyWebpackPlugin([{from: 'static'}]),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
        })
    ]
};
