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
        }),
        require('autoprefixer'),
        require('cssnano')({ // подключили cssnano
             preset: 'default', // выбрали настройки по умолчанию
     })/*,
        new webpackDefinePlugin({
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })*/
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
                test: /\.(png|jpg|gif|ico|svg)$/,
                use: [
                        'file-loader?name=./images/[name].[ext]', // указали папку, куда складывать изображения
                        {
                                loader: 'image-webpack-loader',
                                options: {}
                        },
                ]
         },
            {
                test: /\.(woff|woff2)$/,
                use: ['file-loader']
            }
        ]
    }
}