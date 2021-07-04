// dist-rollup/esm/index-umd.js
// esm 规范
// 测试 esm（ES Module）
// 直接运行 报 Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
// 其实
// package,json 中设置 "type": "module", 才可运行. 这个项目配置默认为 "type": "commonjs",
// 注意此项配置 需要 node 版本 >= 13
// 这里文件的 index-umd.js 不可省略.js后缀
// 注意 如果使用 export default all_in;
// 则 import all_in from '../../../dist-rollup/esm/index-umd.js'
// console.log(all_in);
// 如果 export { mathPow, tsToolc };
// 则就只能进行解构操作
// import {mathPow, tsToolc} from '../../../dist-rollup/esm/index-umd.js'

// 所以下面代码为解构代码 把每个方法名拿出 直接调用即可
import {mathPow, tsToolc} from '../../../dist-rollup/esm/index-umd.js'

console.log(mathPow(6, 2));

console.log(tsToolc.add(222, 222));

tsToolc.sayHello()

// 导出所有
import * as myLib from '../../../dist-rollup/esm/index-umd.js'

console.log(myLib);

console.log(myLib.mathPow(7, 2));

console.log(myLib.tsToolc.add(333, 333));

myLib.tsToolc.sayHello()

// 输出=================================================
// 36
// 444
// Hello JustTypeScript | tsTools
//     [Module: null prototype] {
//     mathPow: [Function: mathPow],
//     tsToolc: [Object: null prototype] {
//         add: [Function: add],
//         sayHello: [Function: sayHello]
//     }
// }
// 49
// 666
// Hello JustTypeScript | tsTools




