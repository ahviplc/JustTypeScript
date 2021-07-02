import * as utils from "./utils/utils";

const total = utils.add(1, 2)

// 打印
console.log('add(1,2)', total)

// 使用
// node dist/index-webpack-bundle.js
// 输出
// add(1,2) 3

export {
    utils as tsTools
}

