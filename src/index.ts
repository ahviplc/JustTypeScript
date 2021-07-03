import {sayHello, add} from "./utils/utils";
// import * as utils from "./utils/utils";

// 先执行一下
sayHello()

const total = add(11, 22)

// 打印
console.log('...add(11,22)...', total)

// 有用 具体生效可用webpack配置 去看 webpack.config.umd.js
// const tsTools = {
//     sayHello
// }
//
// // 再从总出口导出
// export {
//     tsTools
// }
