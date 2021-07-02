(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./utils/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const utils_1 = require("./utils/utils");
    // 先执行一下
    utils_1.sayHello();
    const total = utils_1.add(11, 22);
    // 打印
    console.log('...add(11,22)...', total);
});
// 好像没用
// const tsTools = {
//     sayHello
// }
//
// // 再从总出口导出
// export {
//     tsTools
// }
