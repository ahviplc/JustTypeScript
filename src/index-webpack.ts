import * as utils from "./utils/utils";

const total = utils.add(1, 2)

// 打印输出 utils
console.log('...src/index-webpack.ts...utils', utils)

// 打印
console.log('...src/index-webpack.ts...add(1,2)', total)

utils.sayHello()

const obj = {name: "孙悟空", age: 17}
console.log(obj);

obj.age = 18
console.log(obj);

// 打印 Promise
console.log(Promise)

// 来个箭头函数
const fn = (a: number, b: number) => a + b

console.log(fn(123, 456));

console.log(fn(333, 666));

// 使用
// node dist/index-webpack-bundle.js
// 输出
// add(1,2) 3

// 好像没啥效果
// export {
//     utils as tsTools
// }

