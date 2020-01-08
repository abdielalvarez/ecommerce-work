const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash].js',
        publicPath: 'http://localhost:3001/',
        chunkFilename: 'js/[id].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    optimization: {
        minimizer: [
            new TerserWebpackPlugin(),
            new OptimizeCssAssetsWebpackPlugin()
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/',
                    }
                }
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[id].[hash].css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        }),
        new webpack.DllReferencePlugin({
            manifest: require('./modules-manifest.json')
        }),
        new AddAssetHtmlWebpackPlugin({
            filepath: path.resolve(__dirname, 'dist/js/*.dll.js'),
            outputPath: 'js',
            publicPath: 'http://localhost:3001/js'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/app.*']
        })
    ]
}