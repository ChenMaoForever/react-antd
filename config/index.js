/**
 * Created by chenmao on 2017/6/30.
 */
const pkg = require('../package.json');
const path=require('path');

module.exports = {
    build: {
        env: require('./prod.env')
    },
    dev: {
        env: require('./dev.env')
    },
    title:'cloud-admin',
    port:'8080',
    dll:Object.keys(pkg.dependencies),
    rootPath:path.resolve(__dirname,'../app/main.js')
};
