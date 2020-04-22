const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';


module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: 'development',
    entry: {
        main: './script/script.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                    preset: ['default'],
            },
            canPrint: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                    use: [
                            (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
                            'css-loader'
                        ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      esModule: false,
                      name: '[name].[ext]',
                      outputPath: 'images'
                    },
                  },
                ],
              },
            {
                test: /\.(woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'vendor'
                    }
                }]
            }
        ]
    }
}