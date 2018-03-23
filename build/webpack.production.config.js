/**
 * Created by chenmao on 2017/6/28.
 */
const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.config.base')
const config = require('../config')

base.entry.vendor = config.dll
base.output.filename = 'js/[name].[chunkhash:8].js'
// base.output.chunkFilename='js/[name].[chunkhash:5].chunk.js'
base.stats = { children: false }

// Plugins Configuration
base.plugins =base.plugins.concat([
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': config.build.env
	}),
	new webpack.optimize.UglifyJsPlugin({
		beautify:false,//最紧密的压缩
		comments:false,//移除注释
		compress: {
			warnings: false,
			drop_debugger: true,
			drop_console: true
		},
		except: [ '$', 'exports', 'require']//排除关键字
	}),
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor',
		filename: 'vendor.[chunkhash:8].js'
	}),
	new HtmlWebpackPlugin({
		template: path.resolve(__dirname, '../app/index.html')
	})
]);

module.exports = base;
