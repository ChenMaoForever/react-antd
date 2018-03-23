/**
 * Created by chenmao on 2017/6/28.
 */
const fs=require('fs');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const openBrowserWebpackPlugin = require('open-browser-webpack-plugin')
//分析bundle
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const cheerio = require('cheerio');
const config=require('../config');
const baseConfig=require('./webpack.config.base');

const dllPath = path.join(process.cwd(), `node_modules/${config.title}-dlls`)
const dllPlugin=config.dll;

baseConfig.output.publicPath='/flagship';
baseConfig.devtool='source-map';

// Plugins Configuration
baseConfig.plugins = baseConfig.plugins.concat(handlePlugins(),[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': config.dev.env
    }),
    new HtmlWebpackPlugin({
        templateContent: templateContent(),
        inject: true
    }),
    //new BundleAnalyzerPlugin(),
    new openBrowserWebpackPlugin({url: `http://localhost:${config.port}`})
])

function handlePlugins() {
    const manifestPath = path.join(dllPath, 'vendor-manifest.json')
    if (!fs.existsSync(manifestPath)) {
        console.error('The DLL manifest is missing. Please run `npm run dll`')
        process.exit(0)
    }
    return [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(manifestPath)
        })
    ]
}

function templateContent() {
    const html = fs.readFileSync(
        path.join(__dirname, '../app/index.html')
    ).toString()

    if (!dllPlugin) { return html }

    const $ = cheerio.load(html)
    $('body').append(`<script src='/vendor.dll.js'></script>`)//这是引入插件集合生成的js

    return $.html()
}

module.exports=baseConfig;
