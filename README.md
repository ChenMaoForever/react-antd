# react + es6 + webpack 架构模板

<font color="#0099ff" size=12  face="微软雅黑">项目目录结构</font>
-----------------
|--app （开发目录）
|&emsp;&emsp;|-------index.html (html模板文件)
|&emsp;&emsp;|-------main.js （入口文件，可以在webpack.config.base.js中配置）
|&emsp;&emsp;|-------views （页面目录,例如可以存放首页，分类页，个人中心等页面）
|&emsp;&emsp;|-------imgaes （存放静态文件，图片等）
|&emsp;&emsp;|-------routes (路由目录)
|&emsp;&emsp;|-------styles  (样式目录)
|--common （开发目录）
|&emsp;&emsp;|-------common（公共文件，例如css,工具代码等)
|&emsp;&emsp;|-------common/components  (公共组件目录)
|&emsp;&emsp;|-------common/Apis  (公共Api目录)
|&emsp;&emsp;|-------common/styles  (公共样式目录)
| --build （webpack配置目录）
|-------|-server.js （服务启动文件）
|-------|-webpack.config.base.js （公共配置文件）
|-------|-webpack.config.dev.js （开发环境webpack 配置文件）
|-------|-webpack.production.config.js （生产环境webpack 配置文件）
|-------|-webpack.dll.js （node_modules公共模块提取 配置文件）

_使用方法：_
-----------------

### 3. `npm install` 安装依赖
### 4. `npm run dev` 运行项目


-----------------------------------------

#### *或者你也可以从零开始，先执行 npm init,创建 package.json，然后根据需要把依赖的模块安装上*

