// 测试 CommonJs 和 umd
// 以下均可
// package,json 中设置 "type": "commonjs", 这也是默认 才可运行.
// 可省略.js后缀
// cjs（CommonJs）
// const myLibrary = require('../../../dist-rollup/cjs/index-umd');
// umd 这个模块 支持浏览器和node环境

const myLibrary = require('../../../dist-rollup/JustTypeScriptToolcRollup.min');
console.log(myLibrary)

console.log(myLibrary.mathPow(5, 2));
console.log(myLibrary.tsToolc.add(333, 666));
myLibrary.tsToolc.sayHello()

// 输出=================================================
// {
//     mathPow: [Function (anonymous)],
//         tsToolc: [Object: null prototype] {
//     add: [Function: add],
//     sayHello: [Function: sayHello]
// }
// }
// 25
// 999
// Hello JustTypeScript | tsTools
