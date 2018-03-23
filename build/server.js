/**
 * Created by chenmao on 2018/3/9.
 */
'use strict';
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.dev');
const dllPlugin = require('../config');

const app = express();

webpackConfig.entry.main = [
    'webpack-hot-middleware/client?reload=true',
    webpackConfig.entry.main
];

const compiler = webpack(webpackConfig);

const devMiddleWare = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }
});
app.use(devMiddleWare);
app.use(require('webpack-hot-middleware')(compiler));

if (dllPlugin) {
    app.get(/\.dll\.js$/, (req, res) => {
        const filename = req.path.replace(/^\//, '');
        res.sendFile(path.join(process.cwd(), `node_modules/${dllPlugin.title}-dlls/`, filename))
    })
}

app.get('*', (req, res) => {
    const fs = devMiddleWare.fileSystem;
    //解决刷新404问题
    devMiddleWare.waitUntilValid(() => {//A function executed when the bundle becomes valid. If the bundle is valid at the time of calling, the callback is executed immediately.
        const html = fs.readFileSync(path.join(webpackConfig.output.path, './index.html'));
        res.send(html.toString())
    })
});

app.listen(dllPlugin.port, () => {
    console.log(`\nListening at http://localhost:${dllPlugin.port}`)
});
