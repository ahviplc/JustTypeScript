// dist-rollup/cjs/index-umd.js
// commonjs 规范

const mycjslib = require('../../../dist-rollup/cjs/index-umd');

console.log(mycjslib);

console.log(mycjslib.mathPow(7, 2));

console.log(mycjslib.tsToolc.add(333, 333));

mycjslib.tsToolc.sayHello()

// 输出=================================================
// {
//     mathPow: [Function: mathPow],
//     tsToolc: [Object: null prototype] {
//     add: [Function: add],
//     sayHello: [Function: sayHello]
// }
// }
// 49
// 666
// Hello JustTypeScript | tsTools
