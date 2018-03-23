/**
 * Created by chenmao on 2018/3/9.
 */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const config=require('../config');
const theme=require('../package.json').theme;
module.exports = {
    entry:  {
        main: path.resolve(__dirname,config.rootPath)
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader?cacheDirectory',
                exclude: /node_modules/
            },
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "postcss-loader"]
                })
            },
            {
                test:/\.less$/,
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","postcss-loader",{
                        loader: 'less-loader',
                        options: {modifyVars:theme}}
                    ]
                })
            },
            {
                // 解析图片，小于8kb的转换成base64
                // 注意配种中的name,就是生成到了images文件夹下
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                use: ['url-loader?limit=8192&name=images/[hash:8].[name].[ext]']
                //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图
            },
            {
                test: /\.(eot|woff|ttf|woff2|gif|appcache|gif)(\?|$)/, // 解析各种非图片文件
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]']
            },
            {
                test: /\.json$/,
                use: "json-loader"
            },
            {
                test: /\.(svg)$/i,
                use: 'svg-sprite-loader'
            }
        ]
    },
    resolve: {
        modules: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: [ '.js', '.json','.less','.jsx']
    },
    plugins:[
        new ExtractTextPlugin("styles/[name]-[hash:5].css"),
        new webpack.NoEmitOnErrorsPlugin(),
        new ProgressBarPlugin()
    ]
};