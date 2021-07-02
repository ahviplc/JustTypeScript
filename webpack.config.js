const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// webpack中的所有的配置信息都应该写在 module.exports 中.
module.exports = {
    // webpack配置
    // 入口起点 指定入口文件
    entry: './src/index-webpack.ts',
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
                                            "chrome": "58",
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
        filename: 'index-webpack-bundle.js',
        // 打包文件的目录
        path: path.resolve(__dirname, 'dist-webpack'),
        // 配置打包的环境
        environment: {
            // 告诉webpack 不使用箭头函数
            arrowFunction: false
        }
    },
    // 模式
    mode: 'development', // 开发模式
    // 构建目标
    target: 'web', // node webpack 将在类 Node.js 环境编译代码 || 默认 web 编译为类浏览器环境里可用
    // 外部扩展
    externals: {},
    // 插件
    plugins: [
        // 自动生成html
        new HtmlWebpackPlugin({
            template: "./tests/www/index.html"
        }),
        // 主动清理dist
        new CleanWebpackPlugin(),
    ]
};
