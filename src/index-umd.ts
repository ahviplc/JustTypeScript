import * as tsToolc from "./utils/utils";

// 测试执行 打包时隐掉
// 先执行一下 sayHello()
// tsToolc.sayHello()

// 测试执行 打包时隐掉
// const total = tsToolc.add(11, 22)
// 打印一个 和 total
// console.log(total)

// 单独导出一个函数
// 求一个数的几次方
// x=2 y=3 则为2的3次方 计算得出 8
export function mathPow(x: number, y: number): number {
    // 测试执行 打包时隐掉
    // console.log('...mathPow...', x, y, Math.pow(x, y))
    return Math.pow(x, y)
}

// 导出 tsToolc
export {
    tsToolc
}

// 注意点
// 各个环境使用方式
// ========================================================================================================
// webpack.config.umd.js 配置的 导出的库名称 JustTypeScriptToolc
// =================浏览器环境===================================================
// console.log(window.JustTypeScriptToolc)
// JustTypeScriptToolc.mathPow(5, 2)
// JustTypeScriptToolc.tsToolc.sayHello()
// =================node环境====================================================
// // 导出方式一 对象接收
// const JustTypeScriptToolc = require('./tsToolc-umd-bundle.js');
// JustTypeScriptToolc.tsToolc.sayHello()
// console.log(JustTypeScriptToolc.mathPow(2, 4));
//
// // 导出方式二 解构版本
// const {mathPow, tsToolc} = require('./tsToolc-umd-bundle.js');
// console.log(mathPow(5, 3));
// tsToolc.sayHello()
// console.log(tsToolc.add(111, 222));
// ========================================================================================================
