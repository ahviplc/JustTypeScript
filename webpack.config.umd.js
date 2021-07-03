const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

/**
 * webpack.config.umd.js 此编译出来的 同时支持 浏览器 和 node 环境 umd规范.
 * UMD：Universal Module Definition（通用模块规范），是由社区想出来的一种整合了CommonJS和AMD两个模块定义规范的方法。让你的模块能在javascript所有运行环境中发挥作用。
 * 打包导出的是一个工具类 JustTypeScriptToolc | tsToolc
 */

// webpack中的所有的配置信息都应该写在 module.exports 中.
module.exports = {
    // webpack配置
    // 入口起点 指定入口文件
    entry: './src/index-umd.ts',
    // loader的配置
    module: {
        rules: [
            {
                // test 指定的是规则生效的文件
                test: /\.tsx?$/, // 【test: /\.ts?$/,】 【test: /\.tsx?$/,】
                // 使用的loader
                use: [
                    // 配置babel 此写法可以进行更多的配置
                    {
                        loader: "babel-loader",
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        "targets": {
                                            // 要兼容的目标浏览器
                                            "chrome": "91",
                                            "ie": "11"
                                        },
                                        // 指定corejs的版本
                                        "corejs": "3",
                                        // 使用corejs的方式 "usage" 表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    // 这个写法也是对的
                    'ts-loader'
                ],
                // 要排除的文件|文件夹
                exclude: /node_modules/
            }
        ]
    },
    // 用来设置引用模块
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    // 输出 指定打包文件所在目录
    output: {
        // 打包文件的名称
        filename: 'tsToolc-umd-bundle.js',
        // 打包文件的目录
        path: path.resolve(__dirname, 'dist-umd'),
        // 让 JustTypeScriptToolc 和其他环境兼容：umd:在 AMD 或 CommonJS 的 require 之后可访问
        // 需要进行设置这样，这样就能够使用在node和浏览器中
        // 导出规范为 umd
        libraryTarget: "umd",
        // 由于globalObject默认是window，所以我们需要修改成this
        // 要使umd 在浏览器和node.js 上都可用，globalObject需要设置成this
        globalObject: "this",
        // 暴露 library为 JustTypeScriptToolc 的全局变量
        // 导出的库名称 JustTypeScriptToolc
        library: "JustTypeScriptToolc",
        // 配置打包的环境
        environment: {
            // 告诉webpack 不使用箭头函数
            arrowFunction: false
        }
    },
    // 模式
    // mode: 'development', // 开发模式 生成的代码是展开的
    mode: 'production', //启用 uglifyjs 压缩插件进行压缩输出
    // 构建目标
    target: 'web', // node webpack 将在类 Node.js 环境编译代码 || 默认 web 编译为类浏览器环境里可用
    // 外部扩展
    externals: {},
    // 插件
    plugins: [
        // 自动生成html
        new HtmlWebpackPlugin({
            title: "JustTypeScript Test Index WebPack打包模板html | 测试 umd 规范js库 tsToolc 库.",
            template: "./tests/www/index.html",
            scriptLoading: "blocking"

        }),
        // 主动清理dist
        new CleanWebpackPlugin(),
    ]
};
