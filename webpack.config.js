const path = require('path');

module.exports = {
    // webpack配置
    // 入口起点
    entry: './src/index-webpack.ts',
    // loader的配置
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    // 输出
    output: {
        filename: 'index-webpack-bundle.js',
        path: path.resolve(__dirname, 'dist-webpack')
    },
    // 模式
    mode: 'development', // 开发模式
    // 构建目标
    target: 'web', // node webpack 将在类 Node.js 环境编译代码 || 默认 web 编译为类浏览器环境里可用
    // 外部扩展
    externals: {}
};
