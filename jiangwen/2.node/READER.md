## node 怎么实现异步
    > callback 方式

## 异步
    > 异步永远在同步之后执行，如果同步没有执行完，异步永远不会触发
## node 与 java的区别
    > node 单线程、异步，可以处理简单逻辑的应用，开发效率高，速度快，代码规范不严格所以不稳定，是一个平台

    > java 多线程、同步，可以处理复杂逻辑、算法，开发效率低，代码规范，稳定，是一门编程语言

## 非阻塞
    > 是异步的前提条件

## 箭头函数
    > 箭头函数是没有function定义的
    > 箭头函数如果有{} 需要return
    > 箭头函数里没有this指向问题，可以解决一些this的冲突

## node模块化
    > js中实现模块化：单例模式，闭包
    > node 自带模块化 commonjs规范
        >怎么定义一个模块
            > 每一个js都是一个模块，在每一个文件外面增加一个闭包
            > (function () { })();
        > 怎么导出模块
            > module.exports = sum;
            > exports.sum = sum;
        > 怎么引入一个模块
            > require;
## 模块分类
    > 文件模块，自己写的
    > 第三方模块，需要下载，npm下载模块
    > 内置模块、核心模块、node自带的
## npm安装
    > node安装时自带npm
    > 安装代理
        > npm install nrm -g 全局安装 ，只能在命令行中使用
        > nrm test 查看所有代理下载所需时间
        > nrm use cnpm  执行此命令后，npm install 时候 就是用cnpm代理 下载速度更快

    > 在项目下安装第三方插件例如 jquery vue等
        > npm init  初始化package.json 配置文件 name 设置要求不能与特殊模块同名，不能有大写，不能有中文，不能有特殊字符
        > npm install jquery --save   //--save 主要用于区别是开发上线后需要的模块
        > npm install less --save-dev //--save-dev 开发时需要的模块，上线时候不需要
        > npm uninstall less 卸载模块
        > npm info jquery 查看模块的版本号
        > npm install jquery @1.0.0 --save 安装指定版本号

## 发布包
    > 必须是别人没发过的包名，文件中必须含有package.json文件
    > 需要切换到官方的npm上
        > nrm use npm
    > npm addUser
    > npm publish 发布
