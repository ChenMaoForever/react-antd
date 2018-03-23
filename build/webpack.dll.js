/**
 * Created by chenmao on 2018/3/9.
 */
const webpack = require('webpack')
const path = require('path')
const config = require('../config')
const dllPath = path.join(__dirname, `../node_modules/${config.title}-dlls`)
//生成一个vendor,插件的集合js
module.exports = {
    entry: {
        vendor: config.dll
    },
    output: {
        filename: "[name].dll.js",
        path: dllPath,
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(dllPath, '[name]-manifest.json'),
            name: '[name]',
            context: __dirname
        })
    ]
}